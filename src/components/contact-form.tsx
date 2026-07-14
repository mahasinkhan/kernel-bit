"use client";
 
import { useActionState, useId } from "react";
import { submitEnquiry } from "@/app/contact/actions";
import { initialEnquiryState } from "@/app/contact/enquiry";
import { Button } from "@/components/button";
import { sectors } from "@/content/sectors";
import { cn } from "@/lib/utils";
 
export function ContactForm() {
  const [state, action, pending] = useActionState(submitEnquiry, initialEnquiryState);
  const uid = useId();
 
  if (state.status === "ok") {
    return (
      <div className="rounded-plate border border-signal bg-signal-wash p-8 sm:p-10">
        <p className="label text-signal">Received</p>
        <p className="display-md mt-5 text-[1.5rem] text-ink">{state.message}</p>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2">
          If it is urgent, reply to the acknowledgement and it will land in front of a person rather than a
          queue.
        </p>
      </div>
    );
  }
 
  return (
    <form action={action} noValidate className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <Field id={`${uid}-name`} name="name" label="Name" error={state.fieldErrors.name} required />
        <Field
          id={`${uid}-email`}
          name="email"
          label="Work email"
          type="email"
          error={state.fieldErrors.email}
          required
        />
      </div>
 
      <div className="grid gap-7 sm:grid-cols-2">
        <Field id={`${uid}-org`} name="organisation" label="Organisation" />
        <div>
          <label htmlFor={`${uid}-sector`} className="label text-ink-3">
            Sector
          </label>
          <select
            id={`${uid}-sector`}
            name="sector"
            defaultValue=""
            className="mt-3 w-full rounded-plate border border-rule bg-plate px-4 py-3 text-[1rem] text-ink"
          >
            <option value="">Not listed</option>
            {sectors.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      </div>
 
      <div>
        <label htmlFor={`${uid}-brief`} className="label text-ink-3">
          What has to be provable? <span className="text-signal">*</span>
        </label>
        <textarea
          id={`${uid}-brief`}
          name="brief"
          rows={6}
          required
          aria-invalid={Boolean(state.fieldErrors.brief)}
          aria-describedby={state.fieldErrors.brief ? `${uid}-brief-error` : undefined}
          placeholder="The number that will not reconcile. The model nobody trusts. The migration everyone is avoiding."
          className={cn(
            "mt-3 w-full rounded-plate border bg-plate px-4 py-3 text-[1rem] text-ink placeholder:text-ink-3",
            state.fieldErrors.brief ? "border-signal" : "border-rule",
          )}
        />
        {state.fieldErrors.brief ? (
          <p id={`${uid}-brief-error`} className="mt-2 font-mono text-[0.75rem] text-signal">
            {state.fieldErrors.brief}
          </p>
        ) : null}
      </div>
 
      <div className="flex flex-wrap items-center gap-5 pt-1">
        <Button type="submit" disabled={pending}>
          {pending ? "Sending\u2026" : "Send enquiry"}
        </Button>
        {state.status === "error" ? (
          <p role="status" className="font-mono text-[0.75rem] text-signal">
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
 
function Field({
  id,
  name,
  label,
  type = "text",
  error,
  required,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="label text-ink-3">
        {label} {required ? <span className="text-signal">*</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "mt-3 w-full rounded-plate border bg-plate px-4 py-3 text-[1rem] text-ink",
          error ? "border-signal" : "border-rule",
        )}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 font-mono text-[0.75rem] text-signal">
          {error}
        </p>
      ) : null}
    </div>
  );
}