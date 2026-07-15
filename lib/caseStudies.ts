export type CaseStudy = {
  slug: string;
  badge: string;
  badges1: string;
  badges2: string;
  title: string;
  overview: string;
  role: string;
  timeline: string;
  tools: string;
  featured: boolean;
  screens: {
    label: string;
    kind: "balance" | "transactions";
  }[];
  caseStudyUrl: string;
  prototypeUrl: string;
};

/**
 * Add future case studies to this array. Only the entry with
 * `featured: true` is shown on the homepage — the rest can power
 * a future /case-studies index page without touching layout code.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "phonepe-balance-snapshot",
    badge: "Featured case study",
    badges1: "Mobile banking",
    badges2: "UX case study",

    title: "PhonePe Balance Snapshot",
    overview:
      "A redesigned home experience that surfaces a clear, glanceable snapshot of balance and recent activity — reducing the taps needed to answer 'how much money do I have, right now?'",
    role: "UX Research & UI Design",
    timeline: "3 weeks",
    tools: "Figma, FigJam",
    featured: true,
    screens: [
      { label: "Balance Snapshot", kind: "balance" },
      { label: "Transaction History", kind: "transactions" },
    ],
    caseStudyUrl: "https://www.figma.com/design/bIJoEsf01SxvtyllCr6Osq/Untitled?node-id=1-73&t=A5leJY5LCuLU7XLt-1",
    prototypeUrl: "https://www.figma.com/proto/ORshOH1TZ4OHyrg24BBz7d/Phone-Pe?node-id=1-3&t=92JENPPOIu5y3v1l-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3",
  },
];

export const getFeaturedCaseStudy = () =>
  caseStudies.find((c) => c.featured) ?? caseStudies[0];
