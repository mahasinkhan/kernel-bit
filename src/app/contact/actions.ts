"use server";
 
import type { EnquiryState } from "./enquiry";
 
const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
 
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
      message: count === 1 ? "One field needs attention." : `${count} fields need attention.`,
      fieldErrors,
    };
  }
 
  // TODO: wire this to something real - Resend, SES, a CRM, or a Slack webhook.
  console.log("[enquiry]", { name, email, organisation, sector, brief });
 
  return {
    status: "ok",
    message: `Thanks, ${name.split(" ")[0]}. We reply within one working day.`,
    fieldErrors: {},
  };
}