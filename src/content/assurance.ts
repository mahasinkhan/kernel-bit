/* ---------------------------------------------------------------------------
 * VERIFY EVERY CLAIM ON THIS PAGE BEFORE YOU PUBLISH IT.
 * Compliance copy is the fastest way to lose an enterprise deal, or a lawsuit.
 * ------------------------------------------------------------------------ */
export type AssuranceRow = { control: string; commitment: string };

export const assurance: AssuranceRow[] = [
  {
    control: "Residency",
    commitment: "UK and EU regions by default. Client data is never used to train shared models.",
  },
  {
    control: "Access",
    commitment: "Least privilege, SSO, short-lived credentials, and a full log of who read what.",
  },
  {
    control: "Change",
    commitment: "Every deploy ties to a ticket, a reviewer and a tested rollback.",
  },
  {
    control: "Models",
    commitment: "Weights, features and evaluation are versioned together and retained together.",
  },
  {
    control: "Records",
    commitment: "Lineage retained for the statutory period of your sector, and searchable.",
  },
  {
    control: "Standards",
    commitment: "Engagements run to ISO 27001, Cyber Essentials Plus and NHS DSPT expectations.",
  },
];
