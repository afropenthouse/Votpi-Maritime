export type InterestArea =
  | "marine-operations"
  | "vessel-management"
  | "logistics"
  | "hseq"
  | "compliance"
  | "commercial-support";

export const INTEREST_AREA_LABELS: Record<InterestArea, string> = {
  "marine-operations": "Marine operations",
  "vessel-management": "Vessel management",
  logistics: "Logistics",
  hseq: "HSEQ & safety",
  compliance: "Compliance",
  "commercial-support": "Commercial support",
};

export type CareersState = {
  vacanciesOpen: boolean;
  expressionOfInterestEmail: string;
  expressionOfInterestSubject: string;
  areas: InterestArea[];
  note: string;
};

export const careers: CareersState = {
  vacanciesOpen: false,
  expressionOfInterestEmail: "info@votpimaritime.com",
  expressionOfInterestSubject: "Expression of interest - VOTPI Maritime careers",
  areas: [
    "marine-operations",
    "vessel-management",
    "logistics",
    "hseq",
    "compliance",
    "commercial-support",
  ],
  note:
    "No current vacancies are published. Send a concise expression of interest and CV for future consideration. Unsolicited applications do not guarantee engagement.",
};

export function interestAreaMailto(
  area: InterestArea,
  email: string = careers.expressionOfInterestEmail,
  subject: string = careers.expressionOfInterestSubject,
): string {
  const label = INTEREST_AREA_LABELS[area];
  return `mailto:${email}?subject=${encodeURIComponent(
    `${subject} - ${label}`,
  )}&body=${encodeURIComponent(
    `Area of interest: ${label}\n\nPlease describe your relevant experience and attach your CV.`,
  )}`;
}