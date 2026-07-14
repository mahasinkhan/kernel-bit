/* ---------------------------------------------------------------------------
 * BRAND CONFIG - change these values and the whole site follows.
 * Every line marked TODO is a placeholder. Do not ship them.
 * ------------------------------------------------------------------------ */
export const site = {
  name: "KernelBit",
  legalName: "KernelBit Ltd", // TODO: confirm the registered name
  tagline: "Systems that can show their working",
  description:
    "KernelBit designs and builds the data platforms, models and applications used in finance, healthcare and the public sector \u2014 engineered so every output can be traced back to the record it came from.",
  url: "https://kernelbit.com", // TODO
  location: "London", // TODO
  email: "hello@kernelbit.com", // TODO
  phone: "+44 20 0000 0000", // TODO
  address: ["Address line one", "Address line two", "London EC1A 1AA"], // TODO
  companyNo: "00000000", // TODO: never ship the placeholder company number
  nav: [
    { href: "/capabilities", label: "Capabilities" },
    { href: "/sectors", label: "Sectors" },
    { href: "/about", label: "About" },
  ],
} as const;
