"use client";
 
import { useState } from "react";
import { payloads, stages } from "@/content/provenance";
import { Crosshairs } from "@/components/plate";
import { cn } from "@/lib/utils";
 
/**
 * THE SIGNATURE.
 * One record. Five stages. One audit trail. Switch the payload and a payment,
 * a patient observation and a model prediction all take the same audited path.
 * That is the entire argument of the business, made literal.
 *
 * The stylus and the nodes are keyframe-driven and keyed on the payload, so
 * switching the record replays the trace without a single line of effect code.
 */
export function ProvenanceTrace() {
  const [active, setActive] = useState(0);
  const payload = payloads[active];
 
  return (
    <div className="relative rounded-plate border border-rule bg-plate">
      <Crosshairs />
 
      {/* Readout */}
      <div className="flex flex-col gap-4 border-b border-rule-soft px-5 py-4 sm:px-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="label text-ink-3">Record</span>
          <span key={payload.id} className="stamp-in font-mono text-[0.8125rem] text-ink">
            {payload.record}
          </span>
        </div>
        <div role="group" aria-label="Choose a record to trace" className="flex flex-wrap gap-1">
          {payloads.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={cn(
                "label rounded-plate px-3 py-2 transition-colors duration-200",
                i === active ? "bg-ink text-plate" : "text-ink-3 hover:bg-plate-sunk hover:text-ink",
              )}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
 
      {/* The trace */}
      <div className="grid-paper px-5 py-8 sm:px-7 sm:py-10">
        {/* Rail - the stylus draws left to right, nodes strike behind it */}
        <div key={payload.id} className="relative mb-8 hidden grid-cols-5 md:grid">
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 right-[10%] left-[10%] h-px -translate-y-1/2 bg-rule"
          />
          <div
            aria-hidden
            className="stylus pointer-events-none absolute top-1/2 right-[10%] left-[10%] h-px -translate-y-1/2 bg-signal"
          />
          {stages.map((stage, i) => (
            <div key={stage.key} className="flex h-6 items-center justify-center">
              <span
                aria-hidden
                style={{ animationDelay: `${240 + i * 170}ms` }}
                className="node relative h-2.5 w-2.5 rotate-45 border border-signal bg-signal"
              />
            </div>
          ))}
        </div>
 
        <ol className="grid gap-x-5 gap-y-7 md:grid-cols-5">
          {stages.map((stage, i) => {
            const stamp = payload.stamps[i];
            return (
              <li key={stage.key} className="relative border-l border-rule pl-4 md:border-l-0 md:pl-0">
                <span
                  aria-hidden
                  className="absolute top-1.5 -left-[5px] h-2 w-2 rotate-45 border border-signal bg-signal md:hidden"
                />
                <h3 className="display-md text-[1.0625rem] text-ink">{stage.name}</h3>
                <p className="mt-1.5 text-[0.875rem] leading-snug text-ink-2">{stage.promise}</p>
                <div key={payload.id} className="stamp-in mt-4 border-t border-rule-soft pt-3">
                  <p className="label text-signal">{stamp.at}</p>
                  <p className="mt-1.5 font-mono text-[0.75rem] leading-relaxed text-ink-2">{stamp.note}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}