"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/* A 3D constellation - glowing nodes linked by faint lines, drifting in space,
   tilting toward the cursor. Ultramarine + white on transparent, so the hero
   background shows through. Desktop only; capped pixel ratio; cleans up fully. */

const NODE_COUNT = 70;
const LINK_DIST = 2.6;

export default function HeroWebGL() {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mount.current;
    if (!el) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return; // no WebGL - hero falls back to the SVG graph beneath
    }

    const w = el.clientWidth;
    const h = el.clientHeight;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.z = 12;

    const group = new THREE.Group();
    scene.add(group);

    // nodes
    const positions: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      positions.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 6
        )
      );
    }

    const nodeGeo = new THREE.BufferGeometry().setFromPoints(positions);
    const nodeMat = new THREE.PointsMaterial({
      color: 0x2347f5,
      size: 0.16,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.95,
    });
    const points = new THREE.Points(nodeGeo, nodeMat);
    group.add(points);

    // a few brighter "live" nodes
    const liveIdx = [0, 12, 25, 38, 51, 63].filter((i) => i < NODE_COUNT);
    const liveGeo = new THREE.BufferGeometry().setFromPoints(liveIdx.map((i) => positions[i]));
    const liveMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.26,
      sizeAttenuation: true,
      transparent: true,
      opacity: 1,
    });
    group.add(new THREE.Points(liveGeo, liveMat));

    // links between near nodes
    const linePts: number[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (positions[i].distanceTo(positions[j]) < LINK_DIST) {
          linePts.push(positions[i].x, positions[i].y, positions[i].z);
          linePts.push(positions[j].x, positions[j].y, positions[j].z);
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePts, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x2347f5,
      transparent: true,
      opacity: 0.16,
    });
    group.add(new THREE.LineSegments(lineGeo, lineMat));

    // cursor tilt
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let raf = 0;
    const clock = new THREE.Clock();
    const render = () => {
      const t = clock.getElapsedTime();
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      group.rotation.y = t * 0.06 + cx * 0.5;
      group.rotation.x = Math.sin(t * 0.15) * 0.08 - cy * 0.4;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(render);
    };
    render();

    const onResize = () => {
      const nw = el.clientWidth, nh = el.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
      nodeGeo.dispose(); liveGeo.dispose(); lineGeo.dispose();
      nodeMat.dispose(); liveMat.dispose(); lineMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mount} style={{ position: "absolute", inset: 0, zIndex: 1 }} aria-hidden="true" />;
}
