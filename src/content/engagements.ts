/* ---------------------------------------------------------------------------
 * PLACEHOLDER - replace with real, cleared engagements before publishing.
 * Keep the shape: a metric, a sector, a sentence a client would recognise.
 * ------------------------------------------------------------------------ */
export type Engagement = {
  metric: string;
  metricLabel: string;
  sector: string;
  title: string;
  detail: string;
};
 
export const engagements: Engagement[] = [
  {
    metric: "9 min",
    metricLabel: "end-of-day close",
    sector: "Financial Services",
    title: "Payment reconciliation, cut from six hours to nine minutes",
    detail:
      "Four ledgers, three file formats and a nightly spreadsheet. We replaced the spreadsheet with a pipeline that keeps the source messages, and gave the finance team a close they can explain to an auditor.",
  },
  {
    metric: "11 \u2192 1",
    metricLabel: "systems per patient view",
    sector: "Healthcare",
    title: "One patient timeline instead of eleven",
    detail:
      "Observations, admissions, results and notes mapped into a single FHIR-shaped record, with the original message kept beside every entry. Clinicians stopped tab-switching. Governance stopped worrying.",
  },
  {
    metric: "0",
    metricLabel: "findings at audit",
    sector: "Insurance",
    title: "A fraud model that went in with its evidence pack attached",
    detail:
      "Versioned features, held-out evaluation shipped with the weights, and a review queue for anything near the threshold. When the regulator asked how a decision was reached, it took one query.",
  },
];