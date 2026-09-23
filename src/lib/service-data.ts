import type { ComponentType, SVGProps } from "react";
import {
  ArrowLeftRight,
  Ship,
  Package,
  MapPin,
  ClipboardCheck,
  Wrench,
  Droplets,
  Wind,
  Route,
  HelpCircle,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  description: string;
  benefits: string[];
  process: { step: string; title: string; text: string }[];
  features: { title: string; text: string }[];
  image: string;
  imageAlt: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const services: Service[] = [
  {
    slug: "petroleum-product-transportation",
    title: "Petroleum Product Transportation",
    tagline: "Safe movement of PMS, AGO and other refined products via dedicated tankers.",
    intro:
      "We transport premium petroleum products including PMS, AGO/Diesel and other approved refined products across Nigeria and West African coastal markets using professionally managed product tankers.",
    description:
      "Our petroleum product transportation service covers the full spectrum of refined product movements across Nigerian coastal routes and into the wider West African region. Using a fleet of purpose-built product tankers, each vessel operates under strict safety management protocols and is maintained to meet both flag-state and class-society requirements. We handle volumes ranging from single-hull replacement cargoes to large-volume parcel trades, coordinating loading and discharge at major terminals and jetties throughout the region. Our operations team monitors every voyage in real time, from pre-loading cargo checks through final delivery confirmation, ensuring that cargoes arrive on time and in the condition specified by our customers.",
    benefits: [
      "Segregated cargo handling to prevent cross-contamination between product grades",
      "Temperature-controlled tank systems for sensitive refined products",
      "Real-time voyage tracking with automated status updates",
      "Comprehensive cargo documentation including quality certificates",
    ],
    process: [
      { step: "Inquiry", title: "Requirements & Planning", text: "Share your cargo details, route and timing with our chartering team." },
      { step: "Availability", title: "Vessel Allocation", text: "We confirm vessel availability, suitability and commercial terms." },
      { step: "Vetting", title: "Safety & Compliance Check", text: "Vessel undergoes commercial, technical and safety vetting." },
      { step: "Execution", title: "Loading & Voyage", text: "Cargo is loaded under supervision and the vessel sails to destination." },
      { step: "Delivery", title: "Discharge & Reporting", text: "Cargo is discharged and a complete voyage report is provided." },
    ],
    features: [
      {
        title: "Product Safety",
        text: "Cargo integrity practices from loading through discharge, with dedicated tank maintenance between voyages.",
      },
      {
        title: "Vessel Standards",
        text: "All vessels operate under approved safety management systems and regular third-party inspections.",
      },
      {
        title: "Route Expertise",
        text: "Deep knowledge of Nigerian and West African terminal operations, tidal conditions and port procedures.",
      },
      {
        title: "Documentation",
        text: "Full cargo documentation, including manifests, certificates and discharge reports, provided per voyage.",
      },
    ],
    image: "/images/hero-services.jpg",
    imageAlt: "Product tanker loading petroleum at a Nigerian terminal",
    icon: Ship,
  },
  {
    slug: "vessel-chartering",
    title: "Vessel Chartering",
    tagline: "Flexible tanker capacity for qualified traders, marketers and refiners.",
    intro:
      "VOTPI offers tailored charter arrangements for customers requiring dedicated vessel capacity across the downstream petroleum value chain. We align vessel deployment with real offtake schedules and cargo requirements.",
    description:
      "Our vessel chartering service provides flexible access to product tanker capacity for marketers, traders and refiners who need dedicated vessels on short notice. Whether you require a single voyage on a trip-time basis or a longer period charter, we maintain a diversified fleet ready for deployment across West African routes. Every charter arrangement includes full transparency on vessel particulars, commercial terms, safety standards and operational support. Our commercial team works closely with your scheduling desk to align vessel availability with real cargo flow patterns and optimize cost per ton-mile.",
    benefits: [
      "Trip-time and period charter options for flexible capacity allocation",
      "Competitive rates backed by fleet scale and operational efficiency",
      "Full commercial transparency with no hidden fees or surcharges",
      "Dedicated operations support throughout the charter period",
    ],
    process: [
      { step: "Charter Party", title: "Terms Negotiation", text: "Commercial and operational terms are confirmed in the charter party." },
      { step: "Vessel Handover", title: "Technical Handover", text: "Vessel condition, equipment status and documentation are reviewed." },
      { step: "Deployment", title: "Operational Activation", text: "Vessel is positioned and made ready for cargo loading per schedule." },
      { step: "Monitoring", title: "Voyage Supervision", text: "Operations and cargo teams monitor progress and coordinate discharge." },
    ],
    features: [
      {
        title: "Capacity Matching",
        text: "Vessels selected based on cargo volume, loading window, product type and destination requirements.",
      },
      {
        title: "Charter Types",
        text: "Flexible trip time and period charters available with competitive daily rates and commercial terms.",
      },
      {
        title: "Vessel Vetting",
        text: "All proposed tonnage undergoes commercial, technical and safety vetting aligned with your standards.",
      },
      {
        title: "Scheduling Support",
        text: "Real-time vessel availability, ETA tracking and loading coordination throughout the charter period.",
      },
    ],
    image: "/images/hero-fleet.jpg",
    imageAlt: "Product tanker underway in coastal waters",
    icon: Package,
  },
  {
    slug: "marine-logistics",
    title: "Marine Logistics",
    tagline: "End-to-end coordination of transportation, port operations and cargo movements.",
    intro:
      "From the refinery gate to the end-user depot, we coordinate every link in the marine logistics chain — port clearances, berth allocation, documentation and multimodal connections.",
    description:
      "Marine logistics at VOTPI means seamless coordination of every touchpoint between cargo source and destination. Our logistics team manages berth allocations, port clearances, customs documentation, terminal slot bookings and multimodal hand-offs including pipeline and trucking connections. We maintain direct relationships with port authorities, terminal operators and regulatory agencies across Nigeria and West Africa, ensuring that delays are minimised and cargo flows uninterrupted. Real-time visibility is standard — you receive live position reports, estimated arrival times and cargo status throughout the journey.",
    benefits: [
      "Single point of contact for all marine logistics coordination",
      "Priority berthing and cargo handling at major terminals",
      "End-to-end documentation and regulatory compliance management",
      "Integration with pipeline and trucking for inland delivery",
    ],
    process: [
      { step: "Planning", title: "Route & Schedule Planning", text: "We plan the optimal marine route, berth windows and multimodal connections." },
      { step: "Coordination", title: "Port & Documentation", text: "Port clearances, customs declarations and terminal slots are secured." },
      { step: "Execution", title: "Cargo Movement", text: "Loading and discharge are supervised, with real-time status updates." },
      { step: "Delivery", title: "Multimodal Hand-off", text: "Cargo is transferred to pipeline or trucking for final delivery." },
    ],
    features: [
      {
        title: "Port Coordination",
        text: "Berth planning, cargo handling schedules and port authority coordination to minimise turnaround time.",
      },
      {
        title: "Documentation",
        text: "Cargo manifests, import/export permits, terminal approvals and customs clearance documentation.",
      },
      {
        title: "Multimodal Integration",
        text: "Seamless hand-off between marine, pipeline and truck transport segments to downstream destinations.",
      },
      {
        title: "Real-Time Updates",
        text: "Vessel position, cargo status and estimated arrival times provided throughout the logistics journey.",
      },
    ],
    image: "/images/hero-operations.jpg",
    imageAlt: "Logistics coordination at a petroleum terminal",
    icon: MapPin,
  },
  {
    slug: "refinery-to-terminal",
    title: "Refinery-to-Terminal Movement",
    tagline: "Dedicated transport from refinery offtake points to designated terminals and depots.",
    intro:
      "We specialise in the safe and efficient movement of refined petroleum products directly from refineries and approved loading points to designated terminals, depots and storage facilities across Nigeria.",
    description:
      "Our refinery-to-terminal service is dedicated to the first-mile movement of refined products from refinery offtake points to downstream terminals and depots. We coordinate directly with refinery operators and terminal authorities to schedule loading within optimal time windows, minimising wait times and maximising cargo quality. Our vessels are equipped with approved cargo handling systems and our crews are trained in refinery terminal procedures. The service includes pre-loading cargo inspection, independent sampling at source, and pre-arrival notifications to ensure smooth discharge operations at the receiving terminal.",
    benefits: [
      "Dedicated scheduling aligned with refinery production cycles",
      "Independent cargo sampling and quality verification at loading",
      "Pre-arrival terminal coordination to minimise turnaround time",
      "Full cargo and safety documentation provided per voyage",
    ],
    process: [
      { step: "Schedule", title: "Refinery Coordination", text: "We coordinate loading windows directly with the refinery and receiving terminal." },
      { step: "Inspect", title: "Cargo Sampling & Verification", text: "Independent sampling and quality checks are conducted before and during loading." },
      { step: "Transport", title: "Safe Transit", text: "Vessel transits to the terminal under continuous monitoring and reporting." },
      { step: "Deliver", title: "Terminal Discharge", text: "Pre-arrival notification enables efficient discharge and cargo handover." },
    ],
    features: [
      {
        title: "Loading Coordination",
        text: "Direct coordination with refinery and terminal operators to schedule loading within optimal time windows.",
      },
      {
        title: "Cargo Sampling",
        text: "Independent cargo sampling and quality verification at loading to ensure product integrity.",
      },
      {
        title: "Terminal Delivery",
        text: "Pre-arrival notification, berth confirmation and discharge planning at receiving terminals.",
      },
      {
        title: "Capacity Planning",
        text: "Vessel deployment aligned with refinery production schedules and terminal receipt capacity.",
      },
    ],
    image: "/images/hero-services.jpg",
    imageAlt: "Pipeline transfer from refinery to storage terminal",
    icon: Route,
  },
  {
    slug: "coastal-regional-shipping",
    title: "Coastal & Regional Shipping",
    tagline: "Maritime transportation within Nigeria and across West African coastal markets.",
    intro:
      "Our coastal shipping network connects key petroleum hubs across Nigeria and the wider West African region, providing reliable product delivery to ports and inland terminals.",
    description:
      "Coastal and regional shipping forms the backbone of our transportation network, linking refineries and terminals across Nigeria through regular scheduled services to the wider West African sub-region. Our vessels operate on established coastal routes connecting Lagos, Port Harcourt, Onne, Calabar and other key ports, with the capability to extend to neighbouring West African markets. Cargo integrity is maintained through segregated handling and tank cleaning protocols between voyages. Weather routing is employed on every voyage to optimise transit times and reduce fuel consumption, while our operations team provides real-time updates to keep your supply chain visible and predictable.",
    benefits: [
      "Regular scheduled services between major Nigerian and West African ports",
      "Segregated cargo handling to maintain product quality throughout transit",
      "Weather routing to minimise transit time and bunker consumption",
      "Real-time tracking with proactive delay notifications",
    ],
    process: [
      { step: "Booking", title: "Cargo & Route Planning", text: "Cargo details and routing preferences are confirmed for the coastal transit." },
      { step: "Vessel", title: "Deployment Confirmation", text: "A suitable vessel is assigned and positioned for loading." },
      { step: "Loading", title: "Cargo Handling", text: "Loading proceeds under supervision with quality checks at each stage." },
      { step: "Transit", title: "Coastal Navigation", text: "Vessel transits with weather routing to optimise speed and fuel economy." },
      { step: "Arrival", title: "Discharge & Delivery", text: "Pre-arrival coordination ensures efficient discharge at destination." },
    ],
    features: [
      {
        title: "Route Network",
        text: "Regular services between Lagos, Port Harcourt, Onne, Calabar and major West African ports.",
      },
      {
        title: "Cargo Segmentation",
        text: "Segregated cargo handling for different product grades to maintain quality throughout transit.",
      },
      {
        title: "Weather Routing",
        text: "Optimised routing based on seasonal weather patterns and sea conditions for fuel efficiency.",
      },
      {
        title: "Compliance",
        text: "All coastal voyages conducted within applicable maritime, customs and petroleum regulations.",
      },
    ],
    image: "/images/hero-services.jpg",
    imageAlt: "Coastal tanker navigating West African waters",
    icon: ArrowLeftRight,
  },
  {
    slug: "vessel-management",
    title: "Vessel Management",
    tagline:
      "Professional scheduling, maintenance and operational coordination of owned or managed vessels.",
    intro:
      "We provide comprehensive vessel management services covering technical operations, crew coordination, maintenance scheduling and regulatory compliance for owned and third-party vessels.",
    description:
      "Our vessel management service delivers end-to-end technical and operational oversight for client-owned and third-party product tankers. The service encompasses planned maintenance scheduling, crew coordination and certification management, bunker procurement, spare parts logistics and class-society audit preparation. All vessels under our management operate to flag-state and class-approved standards, with comprehensive defect reporting and rectification programmes. We act as the single interface between vessel owners, operators, crew, yards and regulatory authorities, reducing administrative burden and ensuring continuous compliance.",
    benefits: [
      "Full technical management including planned maintenance and repairs",
      "Crew change coordination and certification tracking",
      "Bunker procurement with quality assurance and competitive pricing",
      "Class society audit preparation and regulatory compliance support",
    ],
    process: [
      { step: "Handover", title: "Management Agreement", text: "Vessel is transferred to our management with full documentation review." },
      { step: "Setup", title: "Systems & Protocols", text: "Safety management systems, maintenance schedules and crew rosters are established." },
      { step: "Ongoing", title: "Daily Operations", text: "Continuous technical, crewing and supply chain management throughout the contract." },
      { step: "Review", title: "Performance Reporting", text: "Regular performance reports and cost reconciliations are provided." },
    ],
    features: [
      {
        title: "Technical Management",
        text: "Scheduled maintenance, repairs, dry-docking and equipment procurement to flag and class standards.",
      },
      {
        title: "Crew Coordination",
        text: "Crew change management, certification tracking and competency development programs.",
      },
      {
        title: "Supply Chain",
        text: "Bunker procurement, spare parts logistics and store planning to support continuous operations.",
      },
      {
        title: "Compliance Monitoring",
        text: "Flag state and class society audit preparation, including safety and environmental documentation.",
      },
    ],
    image: "/images/hero-fleet.jpg",
    imageAlt: "Vessel maintenance and inspection at a shipyard",
    icon: Wrench,
  },
  {
    slug: "marine-agency-support",
    title: "Marine Agency & Support",
    tagline: "Clearing, agency and practical support for petroleum cargo and vessel operations.",
    intro:
      "Our agency teams provide end-to-end support for vessel arrivals, cargo operations and port coordination, ensuring smooth and compliant maritime operations.",
    description:
      "Marine agency and support services from VOTPI provide a full range of on-the-ground assistance for vessel arrivals, cargo operations and port coordination across all Nigerian ports and major West African terminals. Our agency teams handle port clearances, customs documentation, crew care, bunker coordination and spare parts logistics. Operating 24/7, we provide emergency response support for vessel delays, cargo discrepancies and port-related incidents. As your local representative, we ensure that every detail of vessel operations is managed efficiently and in full compliance with Nigerian maritime regulations.",
    benefits: [
      "24/7 port coverage across all Nigerian and major West African terminals",
      "Full crew care, customs clearance and bunker coordination",
      "Emergency response for delays, cargo issues and operational disruptions",
      "Direct relationships with port authorities and terminal operators",
    ],
    process: [
      { step: "Notice", title: "Arrival Coordination", text: "Advanced notice of vessel arrival triggers port and berth confirmation." },
      { step: "Clearance", title: "Documentation Processing", text: "Customs, immigration and port authority clearances are expedited." },
      { step: "Operations", title: "Cargo Supervision", text: "Loading or discharge is supervised with quality checks and status updates." },
      { step: "Departure", title: "Final Reporting", text: "Vessel departs with full voyage report and documentation package." },
    ],
    features: [
      {
        title: "Port Agency",
        text: "Arrival and departure coordination, berth allocation, cargo handling supervision and crew care.",
      },
      {
        title: "Customs & Clearance",
        text: "Cargo declaration, permit processing and customs release documentation for seamless port turnaround.",
      },
      {
        title: "Spare Parts Logistics",
        text: "Urgent spare parts sourcing and delivery to support vessel maintenance and repair schedules.",
      },
      {
        title: "Emergency Support",
        text: "24/7 operational support for vessel delays, cargo issues and port-related emergencies.",
      },
    ],
    image: "/images/hero-operations.jpg",
    imageAlt: "Marine agent coordinating vessel operations at port",
    icon: HelpCircle,
  },
  {
    slug: "cargo-survey-inspection",
    title: "Cargo Survey & Inspection",
    tagline: "Independent cargo survey, inspection and quality assessment services.",
    intro:
      "We provide independent third-party cargo survey and inspection services covering quantity, quality and condition verification for petroleum products at load and discharge ports.",
    description:
      "Our cargo survey and inspection service delivers independent, third-party verification of cargo quantity, quality and condition at load and discharge ports. Conducted by qualified marine surveyors using certified equipment, our surveys include ullage and soundness measurements, on-site and laboratory quality testing, tank and pipeline inspections, and valve integrity checks. All findings are documented in detailed reports with photographic evidence, certificates of quantity and quality, and expert witness statements. Services are available on-demand at ports across Nigeria and West Africa, with 24-hour emergency call-out capability.",
    benefits: [
      "Independent, unbiased survey reporting for commercial disputes",
      "Accurate quantity measurement using certified calibrated equipment",
      "Laboratory testing for density, water content, sulfur and more",
      "Photographic evidence and comprehensive written reports",
    ],
    process: [
      { step: "Booking", title: "Survey Request", text: "Survey requirements are confirmed with timing and documentation needs." },
      { step: "Inspection", title: "On-Site Survey", text: "Marine surveyor conducts quantity, quality and condition checks." },
      { step: "Testing", title: "Laboratory Analysis", text: "Samples are tested against ISO and client-specified parameters." },
      { step: "Reporting", title: "Deliverables", text: "Survey reports, certificates and supporting evidence are issued." },
    ],
    features: [
      {
        title: "Quantity Survey",
        text: "Accurate ullage and soundness surveys at load and discharge using calibrated equipment and certified procedures.",
      },
      {
        title: "Quality Testing",
        text: "On-site and laboratory testing of crude and refined products for density, water content, sulfur and other key parameters.",
      },
      {
        title: "Condition Inspection",
        text: "Tank and pipeline inspection, valve integrity checks and cargo system verification before and after transfer.",
      },
      {
        title: "Documentation",
        text: "Comprehensive survey reports, certificates of quantity and quality, and photographic evidence.",
      },
    ],
    image: "/images/hero-compliance.jpg",
    imageAlt: "Marine surveyor inspecting cargo documentation",
    icon: ClipboardCheck,
  },
  {
    slug: "bunker-supply-coordination",
    title: "Bunker Supply Coordination",
    tagline:
      "End-to-end bunker supply coordination including quality verification and delivery scheduling.",
    intro:
      "Our bunker coordination service manages bunker fuel procurement, quality verification and delivery scheduling to ensure vessels are fueled with compliant, quality-assured fuel at the best available price.",
    description:
      "Bunker supply coordination from VOTPI covers the full bunker procurement lifecycle, from supplier selection and price negotiation through quality verification and delivery scheduling. We leverage direct relationships with refiners and terminal operators across Nigeria and West Africa to secure competitive pricing and guaranteed availability. Every bunker delivery is accompanied by quality checks, including fuel sample testing against ISO and MARPOL specifications. Our team observes bunkering operations to prevent short delivery, contamination and off-spec fuel issues, ensuring that your vessels are fueled safely and compliantly.",
    benefits: [
      "Access to vetted suppliers across Nigerian and West African ports",
      "Transparent pricing with no hidden fees or markups",
      "Quality assurance through sample testing and delivery observation",
      "24/7 coordination for urgent or emergency bunker requirements",
    ],
    process: [
      { step: "Order", title: "Bunker Requirement", text: "Vessel's bunker requirements and delivery window are confirmed." },
      { step: "Source", title: "Supplier Selection", text: "We source fuel from approved refinery or terminal suppliers." },
      { step: "Deliver", title: "Bunkering Operation", text: "Fuel is delivered with quantity verification and quality sampling." },
      { step: "Verify", title: "Quality Testing", text: "Samples are tested and results are provided before sign-off." },
    ],
    features: [
      {
        title: "Supplier Network",
        text: "Access to vetted bunker suppliers across Nigerian and West African ports with guaranteed availability.",
      },
      {
        title: "Quality Assurance",
        text: "Bunker delivery notes reviewed, fuel samples taken and tested against ISO and MARPOL specifications.",
      },
      {
        title: "Pricing Transparency",
        text: "Competitive bunker pricing with no hidden fees, delivered directly from refinery or terminal sources.",
      },
      {
        title: "Delivery Coordination",
        text: "Delivery scheduling, quantity verification and bunkering observation to prevent short delivery and contamination.",
      },
    ],
    image: "/images/hero-night-terminal.jpg",
    imageAlt: "Bunker delivery to a product tanker at night",
    icon: Droplets,
  },
  {
    slug: "vessel-dry-docking-management",
    title: "Vessel Dry-Docking Management",
    tagline:
      "Coordination of scheduled dry-docking, maintenance and repair services for customer vessels.",
    intro:
      "We manage vessel dry-docking and repair projects from planning through execution, ensuring work is completed on time, within budget and to class-approved standards.",
    description:
      "Our dry-docking management service takes full responsibility for planning and executing vessel maintenance, repair and special survey projects from initial scope definition through final completion. We work closely with class societies, shipyards and equipment suppliers to ensure all work meets regulatory and class-approved standards. Our project managers handle budget preparation, yard selection, workforce coordination, material procurement and quality control, providing regular progress updates and cost reporting throughout the docking period. The service includes post-docking sea trials and final certification to ensure the vessel returns to service fully compliant.",
    benefits: [
      "End-to-end project management from scope to delivery",
      "Class society coordination for special and intermediate surveys",
      "Cost control with transparent invoicing and change order management",
      "Quality assurance and post-docking sea trial verification",
    ],
    process: [
      { step: "Survey", title: "Pre-Docking Assessment", text: "Vessel is surveyed and dry-docking scope is defined with budget plan." },
      { step: "Yard", title: "Shipyard Selection", text: "Qualified shipyard is selected and docking period is scheduled." },
      { step: "Execute", title: "Repair & Maintenance", text: "Work proceeds with quality control and progress reporting." },
      { step: "Complete", title: "Sea Trial & Delivery", text: "Post-docking sea trial and final certification ensure compliance." },
    ],
    features: [
      {
        title: "Docking Planning",
        text: "Survey scheduling, scope definition, yard selection and budget preparation for planned dry-docking.",
      },
      {
        title: "Class Coordination",
        text: "Class society attendance scheduling, special survey planning and certification management.",
      },
      {
        title: "Repair Oversight",
        text: "Workforce coordination, material procurement and quality control during repair and maintenance work.",
      },
      {
        title: "Cost Control",
        text: "Invoice verification, change order management and final accounts reconciliation for all docking work.",
      },
    ],
    image: "/images/hero-fleet.jpg",
    imageAlt: "Product tanker in dry dock for maintenance",
    icon: Wrench,
  },
  {
    slug: "tank-cleaning-services",
    title: "Tank Cleaning Services",
    tagline:
      "Professional tank cleaning, gas-freeing and cargo residue management for product tankers.",
    intro:
      "Our tank cleaning and gas-freeing services ensure cargo tanks are free of residues, water and hydrocarbons before loading new cargo, maintaining product quality and safety standards.",
    description:
      "Tank cleaning and gas-freeing services from VOTPI ensure that cargo tanks are thoroughly cleaned and safe for the next cargo loading operation. We use approved tank cleaning machines, environmentally compliant chemicals and inert gas stripping systems to remove hydrocarbon residues, sludge and water. Gas-freeing operations are conducted with continuous atmospheric monitoring to achieve safe, oxygen-rich tank conditions for inspection and maintenance. All cleaning work is verified through independent inspection, moisture testing and cleanliness certification before the vessel is approved for loading.",
    benefits: [
      "Approved tank cleaning equipment and environmentally safe chemicals",
      "Inert gas removal and atmospheric monitoring for safe gas-freeing",
      "Independent verification through tank inspection and moisture testing",
      "Cleanliness certificates issued before vessel is approved for loading",
    ],
    process: [
      { step: "Prepare", title: "Pre-Cleaning Inspection", text: "Tank condition is assessed and cleaning plan is established." },
      { step: "Clean", title: "Residue Removal", text: "High-pressure cleaning and chemical treatment remove all residues." },
      { step: "Gas-Free", title: "Inert Gas Stripping", text: "Tanks are gas-freed with continuous atmosphere monitoring." },
      { step: "Verify", title: "Inspection & Certification", text: "Tank is inspected, tested and certified clean for loading." },
    ],
    features: [
      {
        title: "Cargo Residue Removal",
        text: "Hydrocarbon residue, sludge and water removal using approved tank cleaning machines and chemicals.",
      },
      {
        title: "Gas Freeing",
        text: "Inert gas removal and air filling to achieve safe, gas-free tank conditions for inspection and maintenance.",
      },
      {
        title: "Quality Verification",
        text: "Tank inspection, moisture testing and cleanliness certificates to verify readiness for next cargo.",
      },
      {
        title: "Waste Management",
        text: "Hazardous waste collection, disposal documentation and environmental compliance for tank residues.",
      },
    ],
    image: "/images/hero-operations.jpg",
    imageAlt: "Tank cleaning operations on a product tanker",
    icon: Droplets,
  },
  {
    slug: "cargo-sampling-analysis",
    title: "Cargo Sampling & Analysis",
    tagline:
      "Representative cargo sampling and laboratory analysis for quality and quantity reconciliation.",
    intro:
      "We provide independent cargo sampling and laboratory analysis services to verify product quality, identify contamination and support cargo claims resolution for petroleum products.",
    description:
      "Cargo sampling and analysis services from VOTPI provide representative sample collection and laboratory testing for petroleum products at load, discharge and in-transit points. Our technicians use ISO-standard sampling protocols to collect samples from ships, pipelines, terminals and storage tanks. Samples are analysed in accredited laboratories for key parameters including density, distillation characteristics, sulfur content, water content, sediment and contamination. Results are delivered as detailed analytical certificates with interpretation and recommendations. Our experts also provide testimony and documentation support for cargo claims and quality disputes.",
    benefits: [
      "ISO-standard sampling protocols for representative results",
      "Full petroleum product analysis including density and sulfur content",
      "Early detection of water ingress, contamination and off-spec products",
      "Expert testimony and documentation for cargo claims resolution",
    ],
    process: [
      { step: "Sample", title: "Collection", text: "Representative samples are collected using ISO-standard protocols." },
      { step: "Test", title: "Laboratory Analysis", text: "Samples are analysed for all specified quality parameters." },
      { step: "Report", title: "Results Delivery", text: "Detailed analytical certificates and interpretation are issued." },
      { step: "Review", title: "Claims Support", text: "Expert analysis supports cargo claims and quality dispute resolution." },
    ],
    features: [
      {
        title: "Sampling Programs",
        text: "Representative sampling at load, discharge and in-transit using ISO-standard sampling protocols.",
      },
      {
        title: "Laboratory Analysis",
        text: "Full petroleum product analysis including density, distillation, sulfur content, water and sediment.",
      },
      {
        title: "Contamination Detection",
        text: "Early identification of water ingress, sediment, off-spec products and cross-contamination issues.",
      },
      {
        title: "Reporting",
        text: "Detailed analytical certificates, contamination reports and expert testimony for cargo claims.",
      },
    ],
    image: "/images/hero-compliance.jpg",
    imageAlt: "Laboratory technician analyzing petroleum sample",
    icon: ClipboardCheck,
  },
  {
    slug: "weather-routing-consultation",
    title: "Weather Routing Consultation",
    tagline:
      "Route optimization based on weather data to minimise transit time and fuel consumption.",
    intro:
      "Our weather routing service provides route optimization using real-time meteorological data, ocean current forecasts and vessel performance analytics to reduce transit times and bunker costs.",
    description:
      "Weather routing consultation from VOTPI leverages real-time meteorological data, ocean current forecasts and vessel performance analytics to identify the fastest and most fuel-efficient routes for each voyage. Our routing specialists analyse daily weather patterns, sea state forecasts and current conditions to provide optimised heading and speed recommendations that minimise transit time and bunker consumption. Post-voyage analysis is provided with detailed fuel-oil consumption reports and routing effectiveness metrics, enabling continuous improvement in voyage performance. The service covers all major West African routes and beyond, with 24/7 monitoring and advisory support.",
    benefits: [
      "Daily weather updates and route optimisation recommendations",
      "5-15% reduction in transit time and fuel consumption",
      "Post-voyage analysis with detailed fuel efficiency reports",
      "24/7 monitoring and advisory support throughout the voyage",
    ],
    process: [
      { step: "Plan", title: "Initial Route Briefing", text: "Voyage route, cargo and timing are analysed for optimisation." },
      { step: "Monitor", title: "Daily Updates", text: "Weather and oceanographic data is analysed for routing adjustments." },
      { step: "Advise", title: "Performance Guidance", text: "Optimised speed and heading recommendations are provided." },
      { step: "Report", title: "Post-Voyage Analysis", text: "Detailed fuel efficiency report and improvement recommendations are issued." },
    ],
    features: [
      {
        title: "Route Optimization",
        text: "Daily weather and oceanographic updates to identify fastest and most fuel-efficient routes.",
      },
      {
        title: "Transit Time Reduction",
        text: "Strategic routing to avoid adverse weather, saving 5-15% on transit time and fuel consumption.",
      },
      {
        title: "Fuel Cost Savings",
        text: "Optimized speed and heading recommendations to minimize bunker consumption without compromising schedule.",
      },
      {
        title: "Vessel Performance",
        text: "Post-voyage analysis with fuel-oil consumption reports and routing effectiveness metrics.",
      },
    ],
    image: "/images/hero-services.jpg",
    imageAlt: "Navigation team reviewing weather routing charts",
    icon: Wind,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function allServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
