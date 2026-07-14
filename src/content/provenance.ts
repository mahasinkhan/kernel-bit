/* ---------------------------------------------------------------------------
 * The signature element. One record, five stages, one audit trail.
 * Three payloads - a payment, a patient observation, a model prediction -
 * take the same audited path. That is the whole argument of the company.
 *
 * NOTE: every non-ASCII character below is written as a \uXXXX escape on
 * purpose. This file has to survive being pasted through a Windows console,
 * which will otherwise eat arrows, subscripts and dashes without saying so.
 * ------------------------------------------------------------------------ */
 
export type Stage = {
  key: string;
  name: string;
  promise: string;
};
 
export const stages: Stage[] = [
  { key: "ingest", name: "Ingest", promise: "Capture the record exactly as it arrived." },
  { key: "model", name: "Model", promise: "Give it a shape the business has agreed on." },
  { key: "reason", name: "Reason", promise: "Compute, score or predict \u2014 and log why." },
  { key: "serve", name: "Serve", promise: "Put it in front of the people who act on it." },
  { key: "assure", name: "Assure", promise: "Prove, months later, how you got there." },
];
 
export type Payload = {
  id: string;
  label: string;
  record: string;
  stamps: { at: string; note: string }[];
};
 
export const payloads: Payload[] = [
  {
    id: "payment",
    label: "A payment",
    record: "GBP 24,500.00 \u00b7 SEPA CT \u00b7 ref 8842-QK",
    stamps: [
      { at: "t+0ms", note: "Raw message stored, byte for byte." },
      { at: "t+40ms", note: "Normalised to ISO 20022. Units checked." },
      { at: "t+310ms", note: "Sanctions screen clear. Rule set v19." },
      { at: "t+0.9s", note: "Posted to the ledger. Ops can see it." },
      { at: "7 years", note: "Evidence pack retained and searchable." },
    ],
  },
  {
    id: "observation",
    label: "A patient observation",
    record: "SpO\u2082 94% \u00b7 ward 3B \u00b7 MRN \u2022\u2022\u2022\u2022417",
    stamps: [
      { at: "t+0ms", note: "HL7 v2 message received from the ward." },
      { at: "t+120ms", note: "Mapped to a FHIR Observation. Units checked." },
      { at: "t+300ms", note: "Deterioration score recalculated: 2 \u2192 4." },
      { at: "t+1.1s", note: "Raised on the ward board and to the bleep." },
      { at: "8 years", note: "Every input behind that score is retrievable." },
    ],
  },
  {
    id: "prediction",
    label: "A model prediction",
    record: "claim 55219 \u00b7 fraud? \u00b7 model v4.2",
    stamps: [
      { at: "t+0ms", note: "Claim event captured with its source system." },
      { at: "t+90ms", note: "Features resolved from the store, versioned." },
      { at: "t+240ms", note: "Score 0.81. Top drivers written beside it." },
      { at: "t+0.6s", note: "Routed to a human reviewer, not auto-declined." },
      { at: "on request", note: "Model, features and thresholds reproduced exactly." },
    ],
  },
];