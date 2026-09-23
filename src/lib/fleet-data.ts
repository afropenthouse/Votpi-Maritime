export enum VesselType {
  ProductTanker = "product-tanker",
  ChemicalProductTanker = "chemical-product-tanker",
  CrudeOilTanker = "crude-oil-tanker",
  LpgCarrier = "lpg-carrier",
}

export const VESSEL_TYPE_LABELS: Record<VesselType, string> = {
  [VesselType.ProductTanker]: "Product tanker",
  [VesselType.ChemicalProductTanker]: "Chemical/product tanker",
  [VesselType.CrudeOilTanker]: "Crude oil tanker",
  [VesselType.LpgCarrier]: "LPG carrier",
};

export enum VesselAvailabilityStatus {
  Available = "available",
  OnVoyage = "on-voyage",
  Loading = "loading",
  Discharging = "discharging",
  UnderMaintenance = "under-maintenance",
  OffHire = "off-hire",
}

export const AVAILABILITY_STATUS_LABELS: Record<VesselAvailabilityStatus, string> = {
  [VesselAvailabilityStatus.Available]: "Available",
  [VesselAvailabilityStatus.OnVoyage]: "On voyage",
  [VesselAvailabilityStatus.Loading]: "Loading",
  [VesselAvailabilityStatus.Discharging]: "Discharging",
  [VesselAvailabilityStatus.UnderMaintenance]: "Under maintenance",
  [VesselAvailabilityStatus.OffHire]: "Off-hire",
};

export const AVAILABILITY_STATUS_DESCRIPTIONS: Record<VesselAvailabilityStatus, string> = {
  [VesselAvailabilityStatus.Available]: "Ready for immediate deployment on chartered cargoes.",
  [VesselAvailabilityStatus.OnVoyage]: "Currently engaged on a cargo voyage.",
  [VesselAvailabilityStatus.Loading]: "Alongside and preparing to load cargo.",
  [VesselAvailabilityStatus.Discharging]: "Alongside at berth discharging cargo.",
  [VesselAvailabilityStatus.UnderMaintenance]: "In dock or yard for scheduled maintenance.",
  [VesselAvailabilityStatus.OffHire]: "Unavailable for commercial deployment.",
};

export const AVAILABILITY_STATUS_ORDER: VesselAvailabilityStatus[] = [
  VesselAvailabilityStatus.Available,
  VesselAvailabilityStatus.OnVoyage,
  VesselAvailabilityStatus.Loading,
  VesselAvailabilityStatus.Discharging,
  VesselAvailabilityStatus.UnderMaintenance,
  VesselAvailabilityStatus.OffHire,
];

export const statusDotColor: Record<VesselAvailabilityStatus, string> = {
  [VesselAvailabilityStatus.Available]: "bg-green-500",
  [VesselAvailabilityStatus.OnVoyage]: "bg-sky-500",
  [VesselAvailabilityStatus.Loading]: "bg-amber-500",
  [VesselAvailabilityStatus.Discharging]: "bg-orange-500",
  [VesselAvailabilityStatus.UnderMaintenance]: "bg-rose-500",
  [VesselAvailabilityStatus.OffHire]: "bg-slate-500",
};

export type VesselDraft = {
  summer: number;
  winter?: number;
  scantling?: number;
  ballast?: number;
};

export type VesselCargoTank = {
  name: string;
  capacityM3: number;
  coating?: string;
};

export type VesselCargo = {
  capacityM3: number;
  tankCount: number;
  tanks?: VesselCargoTank[];
  coating?: string;
};

export type VesselPump = {
  type: string;
  count: number;
  capacityM3Hr: number;
  pressureBar?: number;
  hp?: number;
};

export type Certificate = {
  id: string;
  name: string;
  file: string;
  issuedBy?: string;
  validTo?: string;
};

export type Vessel = {
  slug: string;
  name: string;
  imo: string;
  mmsi?: string;
  callSign?: string;
  type: VesselType;
  status: VesselAvailabilityStatus;
  statusUpdatedAt?: string;
  deadweight: number;
  grossTonnage: number;
  netTonnage: number;
  loa: number;
  lbp: number;
  beam: number;
  draft: VesselDraft;
  cargo: VesselCargo;
  pumps: VesselPump[];
  buildYear: number;
  builder: string;
  yardNumber: string;
  flag: string;
  classification: string;
  features?: string[];
  certificates?: Certificate[];
  image?: string;
  imageAlt?: string;
};

export type FleetApprovalStatus = "pending" | "approved";

export const fleetApprovalStatus = "pending" as FleetApprovalStatus;

export const isFleetApproved: boolean = fleetApprovalStatus === "approved";

export const vessels: Vessel[] = [];

export function getVesselBySlug(slug: string): Vessel | undefined {
  return vessels.find((v) => v.slug === slug);
}

export function allVesselSlugs(): string[] {
  return vessels.map((v) => v.slug);
}

export function slugFromName(name: string): string {
  return name
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
