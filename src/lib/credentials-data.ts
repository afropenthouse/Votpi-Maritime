export type CredentialAuthorityCategory =
  | "maritime"
  | "petroleum"
  | "customs"
  | "port-authority"
  | "defence"
  | "environmental";

export const CREDENTIAL_AUTHORITY_CATEGORY_LABELS: Record<
  CredentialAuthorityCategory,
  string
> = {
  maritime: "Maritime administration",
  petroleum: "Petroleum regulation",
  customs: "Customs & trade",
  "port-authority": "Port authority",
  defence: "Naval & maritime security",
  environmental: "Environmental & HSEQ",
};

export type CredentialAuthority = {
  name: string;
  category: CredentialAuthorityCategory;
  roleDescription: string;
};

export const credentialAuthorities: CredentialAuthority[] = [
  {
    name: "Nigerian Maritime Administration and Safety Agency (NIMASA)",
    category: "maritime",
    roleDescription:
      "National maritime administration responsible for safety, security and marine administration in Nigerian waters.",
  },
  {
    name: "Nigerian Ports Authority (NPA)",
    category: "port-authority",
    roleDescription:
      "Federal agency responsible for the administration, control and regulation of ports and harbours in Nigeria.",
  },
  {
    name: "Nigerian Navy / Naval Compliance",
    category: "defence",
    roleDescription:
      "Naval authority responsible for maritime security, patrol and compliance in Nigerian territorial waters.",
  },
  {
    name: "Nigeria Customs Service",
    category: "customs",
    roleDescription:
      "Federal agency responsible for customs enforcement, cargo documentation and border trade regulation.",
  },
  {
    name: "Relevant Refinery & Terminal Approvals",
    category: "petroleum",
    roleDescription:
      "Operator-level approvals and terminal access requirements at refineries and petroleum terminals.",
  },
  {
    name: "Other Applicable Maritime & Petroleum Requirements",
    category: "environmental",
    roleDescription:
      "Additional applicable requirements covering environmental, safety and regulatory obligations.",
  },
];

export type ComplianceState = {
  status: "pending-company-verification";
  statusLabel: string;
  statusNote: string;
  disclaimer: string;
};

export const compliance: ComplianceState = {
  status: "pending-company-verification",
  statusLabel: "Pending company verification",
  statusNote:
    "No credentials, certificates, approvals or document numbers are published on this site. VOTPI Maritime operates within the applicable Nigerian maritime and petroleum regulatory environment, but specific registrations, certificates and approvals are not yet authorised for publication.",
  disclaimer:
    "References to regulators, authorities, refineries or terminals describe the operating environment and applicable requirements. They do not imply endorsement, certification or current validity. Only valid, current and authorised documents are published. No logos, certificate images, document numbers, expiry dates or approval references are displayed.",
};

export function authoritiesByCategory(
  category: CredentialAuthorityCategory,
): CredentialAuthority[] {
  return credentialAuthorities.filter((a) => a.category === category);
}