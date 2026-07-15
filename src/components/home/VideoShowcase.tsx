"use client";

import { useState } from "react";
import s from "./home.module.css";
import { fontClass } from "./fonts";

/* Drop a real film at /public/video/showcase.mp4 and a still frame at
   /public/images/video-poster.jpg. Until then the poster shows with a play
   button - which already looks finished. Do NOT use stock footage here;
   real work only, or leave the poster standing on its own. */

const VIDEO_SRC = "/video/showcase.mp4";
const POSTER = "/images/video-poster.jpg";

export default function VideoShowcase() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className={[fontClass, s.tokens, s.ground].join(" ")}>
      <div className={s.wrap}>
        <p className={s.eyebrow}>Inside the work</p>
        <h2 className={s.h2}>See how we build.</h2>
        <p className={s.lede}>
          A short look at how a record moves through a system we build &mdash; from the moment
          it arrives to the moment someone acts on it, with the working visible at every step.
        </p>

        <div
          className={s.videoStage}
          onClick={() => setPlaying(true)}
          role={playing ? undefined : "button"}
          tabIndex={playing ? undefined : 0}
          aria-label={playing ? undefined : "Play video"}
          onKeyDown={(e) => {
            if (!playing && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              setPlaying(true);
            }
          }}
        >
          {playing ? (
            <video className={s.videoEl} src={VIDEO_SRC} poster={POSTER} controls autoPlay playsInline>
              Your browser does not support the video tag.
            </video>
          ) : (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async" className={s.videoPoster} src={POSTER} alt="" />
              <div className={s.videoScrim} aria-hidden="true" />
              <button className={s.videoPlay} type="button" aria-label="Play video" onClick={() => setPlaying(true)}>
                <svg className={s.videoPlayIcon} width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div className={s.videoInner}>
                <span className={s.videoCap}>2 min &middot; Product walkthrough</span>
                <span className={s.videoTitle}>A record, from arrival to action.</span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}


