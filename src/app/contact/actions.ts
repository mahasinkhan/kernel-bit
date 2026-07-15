"use server";

import type { EnquiryState } from "./enquiry";

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const KEY = process.env.RESEND_API_KEY;
const TO = process.env.ENQUIRY_TO;
const FROM = process.env.ENQUIRY_FROM;

const FALLBACK =
  "We could not send that just now. Please email hello@kernelbit.com directly and we will pick it up.";

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const organisation = String(formData.get("organisation") ?? "").trim();
  const sector = String(formData.get("sector") ?? "").trim();
  const brief = String(formData.get("brief") ?? "").trim();

  const fieldErrors: Record<string, string> = {};
  if (!name) fieldErrors.name = "We need a name to reply to.";
  if (!EMAIL.test(email)) fieldErrors.email = "That address will not reach you.";
  if (brief.length < 20) fieldErrors.brief = "A sentence or two more, so this reaches the right engineer.";

  const count = Object.keys(fieldErrors).length;
  if (count > 0) {
    return {
      status: "error",
      message: count === 1 ? "One field needs attention." : count + " fields need attention.",
      fieldErrors,
    };
  }

  // Never tell someone we received it if we did not.
  if (!KEY || !TO || !FROM) {
    console.error("[enquiry] not configured: RESEND_API_KEY / ENQUIRY_TO / ENQUIRY_FROM");
    return { status: "error", message: FALLBACK, fieldErrors: {} };
  }

  const body = [
    "Name: " + name,
    "Email: " + email,
    "Organisation: " + (organisation || "-"),
    "Sector: " + (sector || "-"),
    "",
    brief,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: "Enquiry: " + (organisation || name),
        text: body,
      }),
    });

    if (!res.ok) {
      console.error("[enquiry] resend " + res.status + " " + (await res.text()));
      return { status: "error", message: FALLBACK, fieldErrors: {} };
    }
  } catch (err) {
    console.error("[enquiry] send failed", err);
    return { status: "error", message: FALLBACK, fieldErrors: {} };
  }

  return {
    status: "ok",
    message: "Thanks, " + name.split(" ")[0] + ". We reply within one working day.",
    fieldErrors: {},
  };
}
