export type EnquiryState = {
  status: "idle" | "ok" | "error";
  message: string;
  fieldErrors: Record<string, string>;
};

export const initialEnquiryState: EnquiryState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};
