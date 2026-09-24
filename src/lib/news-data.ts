export type NewsCategory = "company-update" | "industry-insight";

export const NEWS_CATEGORY_LABELS: Record<NewsCategory, string> = {
  "company-update": "Company update",
  "industry-insight": "Industry insight",
};

export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  publishedAt: string;
  publishedDisplay: string;
  updatedAt?: string;
  image: string;
  imageAlt: string;
  category: NewsCategory;
  author: string;
  readingTimeMinutes: number;
  verified: boolean;
  references?: { title: string; url: string }[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "planning-a-petroleum-product-voyage",
    title: "Planning a petroleum product voyage from berth to berth",
    excerpt:
      "A practical look at the decisions that help connect loading windows, vessel suitability, port readiness and downstream delivery.",
    body: [
      "A dependable product movement begins well before a vessel reaches the loading point. The first conversation should establish what is moving, how much, when it needs to move and where it needs to arrive. Product grade, parcel size, cargo compatibility and the receiving terminal's ability to receive the cargo all shape the plan. A schedule that looks workable on paper can change once actual berth windows, transfer rates, port procedures and shore-side storage capacity are considered. Gathering these details early gives the parties time to surface constraints and agree on what needs confirmation.",
      "The vessel and cargo plan must then be considered together. The proposed vessel needs to suit the cargo and the route, while its readiness, documentation and operating requirements need to fit the loading and discharge facilities. This is not a one-time tick box: changes to quantity, grade, terminal or timing may affect the suitability review. The International Safety Management Code describes a management framework that identifies risks to ships, personnel and the environment and establishes safeguards. For a voyage team, that principle translates into clearly assigned responsibilities, a working communication plan and a shared understanding of when to escalate a concern.",
      "Loading readiness is a joint task. The ship, terminal, cargo interests and relevant service providers may each hold information the others need: a confirmed window, terminal instructions, cargo documents, inspection requirements, transfer arrangements and shore receipt plans. Agreeing how changes will be shared helps reduce last-minute surprises. The same preparation is needed at the destination. Berth availability, port formalities, receiving capacity and discharge arrangements can all influence when cargo can be handed over.",
      "During the passage, voyage communications keep the operating picture current. Relevant parties need timely information about progress, estimated arrival and material changes that may affect the discharge plan. This does not mean every uncertainty can be removed. Weather, port congestion, equipment condition and other operating factors can change. A good plan makes assumptions visible, identifies decision points and gives the team a way to respond when the original timing no longer holds.",
      "At arrival, the focus shifts to safe coordination with the receiving facility and completion of the cargo handover. Keep the records from loading, transit and discharge connected so that the movement has a clear account from start to finish. Each product, vessel, route and terminal brings its own technical and regulatory requirements; this article is an operating overview, not a substitute for voyage-specific checks. The central idea is simple: begin with the cargo, coordinate ship and shore early, and keep the plan alive as conditions change.",
    ],
    publishedAt: "2026-09-24",
    publishedDisplay: "Marine operations guide",
    image: "/images/hero-operations.jpg",
    imageAlt: "Product tanker and tugboats at a petroleum terminal",
    category: "industry-insight",
    author: "VOTPI Maritime Editorial",
    readingTimeMinutes: 4,
    verified: false,
    references: [
      {
        title: "IMO — International Safety Management (ISM) Code",
        url: "https://www.imo.org/en/OurWork/HumanElement/pages/ismcode.aspx",
      },
      {
        title: "IMO — SOLAS Convention",
        url: "https://www.imo.org/en/about/conventions/pages/international-convention-for-the-safety-of-life-at-sea-%28solas%29%2C-1974.aspx",
      },
    ],
  },
  {
    slug: "cargo-integrity-across-marine-transport",
    title: "Protecting cargo integrity across marine transport",
    excerpt:
      "Tank readiness, grade compatibility and disciplined documentation are central to moving refined products with confidence.",
    body: [
      "Cargo integrity is built across a chain of decisions, not established by a single inspection. Before loading, the cargo plan needs to match the product, the vessel arrangement and the receiving facility. The parties should confirm which product grades are involved, how the parcel is to be handled, what the vessel's tanks have previously carried, and what cleanliness, compatibility or segregation conditions apply. These checks are specific to the product and vessel particulars. They should be resolved with the relevant technical and terminal teams rather than assumed from a previous voyage.",
      "Preparation also depends on a clear transfer plan. The ship and shore teams should understand the agreed sequence, communications, documentation and any terminal-specific requirements before cargo starts moving. Cargo records, loading instructions and quality or quantity information need to be handled consistently. If the plan changes, the people responsible for the transfer should know what changed and why. Clear decision-making helps keep loading and discharge activities aligned with the movement that was approved.",
      "During transfer, disciplined communication and record keeping matter. Sampling, measurements, times and transfer events contribute to a reliable account of what happened. The exact checks and documents depend on the product, contract, facility and applicable rules. A practical principle is to make sure both sides understand the same reference points and how differences will be raised, checked and recorded. If an unexpected condition arises, prompt escalation gives the responsible teams a chance to assess it before it becomes a larger handover problem.",
      "Environmental protection is closely connected to cargo care. MARPOL is the international convention addressing pollution from ships, including pollution by oil. Spill prevention, residue management and relevant shipboard controls are part of a responsible cargo operation. Vessel procedures, terminal instructions and applicable requirements must guide the actual work; a short article cannot replace those documents or the training required for a specific operation.",
      "At discharge, cargo integrity continues through the receiving handover. Share arrival information, confirm the terminal is ready and keep discharge records connected to the loading account. Any difference or exception should be communicated and documented through the agreed process. Once the movement is complete, the records help the parties understand the cargo transfer and close out outstanding questions. The most reliable approach is to plan carefully, communicate consistently and preserve a traceable account from loading through discharge. Requirements should always be confirmed for the particular vessel, cargo and voyage.",
    ],
    publishedAt: "2026-09-10",
    publishedDisplay: "Cargo care guide",
    image: "/images/hero-services.jpg",
    imageAlt: "Marine crew coordinating a petroleum cargo transfer",
    category: "industry-insight",
    author: "VOTPI Maritime Editorial",
    readingTimeMinutes: 4,
    verified: false,
    references: [
      {
        title: "IMO — MARPOL Convention",
        url: "https://www.imo.org/en/about/conventions/pages/international-convention-for-the-prevention-of-pollution-from-ships-%28marpol%29.aspx",
      },
      {
        title: "IMO — Tanker safety and accidental pollution prevention",
        url: "https://www.imo.org/en/ourwork/safety/pages/oiltankers.aspx",
      },
    ],
  },
  {
    slug: "coastal-logistics-terminal-coordination",
    title: "Why terminal coordination matters in coastal logistics",
    excerpt:
      "A voyage depends on connected schedules: vessel arrival, berth access, cargo readiness and shore-side receipt.",
    body: [
      "A port call is a shared operation with a series of linked decisions. The vessel, ship agent, terminal, port authority, cargo interests and service providers may each need to supply information or complete a task around arrival, time alongside and departure. A delay or missing document in one part of the chain can affect the next planned activity. That is why coordination starts before the vessel approaches port: the team needs to know who is doing what, which information is still outstanding and when the next decision must be made.",
      "The IMO's Facilitation Convention, known as the FAL Convention, sets standards and recommended practices for formalities and information requirements when ships arrive at, stay in and depart from ports. Its objectives include reducing unnecessary delays and promoting more uniform procedures. The Convention's current framework also addresses electronic information exchange and maritime single windows. These international arrangements do not replace local port instructions, but they explain why accurate, consistent information is an important part of preparing a port call.",
      "For a coastal petroleum movement, preparation begins with the actual port and terminal requirements. Confirm the expected arrival information, clearance process, berth window, cargo documentation, receiving arrangements and any specific operating constraints. Ensure that the vessel and shore teams are using the same current information. Where a submission is made through a designated system or agent, confirm the responsible party and the status of the submission rather than assuming it has been completed.",
      "As the call approaches, keep the arrival plan connected to the cargo plan. A change in estimated arrival may affect berth allocation, terminal staffing, shore storage or onward distribution. Sharing an update early gives counterparties a chance to assess the effect and revise their own plans. Communication should be concise and useful: what has changed, what is expected now, what decision is needed and who owns the next action. This creates a clearer operating picture without promising that congestion or other delays can always be avoided.",
      "During the port stay, teams need to coordinate the practical handovers around loading or discharge, required documentation, safety arrangements and departure readiness. After departure, final records and any open items should be passed to the relevant parties. A reusable checklist can help, but it should be adapted for each port call. Procedures differ by port, facility, cargo and route, and regulatory requirements can change. Use current local instructions and voyage-specific requirements as the controlling references.",
    ],
    publishedAt: "2026-08-20",
    publishedDisplay: "Coastal logistics note",
    image: "/images/hero-news.jpg",
    imageAlt: "Tugboat escorting a tanker toward port",
    category: "industry-insight",
    author: "VOTPI Maritime Editorial",
    readingTimeMinutes: 4,
    verified: false,
    references: [
      {
        title: "IMO — Facilitation of International Maritime Traffic (FAL) Convention",
        url: "https://www.imo.org/en/about/conventions/pages/convention-on-facilitation-of-international-maritime-traffic-%28fal%29.aspx",
      },
      {
        title: "IMO — FAL guidance and port-call data exchange",
        url: "https://www.imo.org/en/ourwork/facilitation/pages/falguidance-default.aspx",
      },
    ],
  },
  {
    slug: "pollution-prevention-on-product-tanker-voyages",
    title: "Pollution prevention belongs in every voyage plan",
    excerpt:
      "Environmental care is shaped by preparation, shipboard procedures and the decisions made during cargo operations.",
    body: [
      "Pollution prevention belongs in the voyage plan from the start. It connects vessel condition, cargo-transfer preparation, shipboard procedures, crew awareness and port arrangements. Treating it as a final check can leave important questions too late: which controls apply to this operation, who is responsible for them, what equipment or information is needed, and how should a concern be escalated? Those questions are best answered during planning, with the people who understand the vessel, cargo, route and receiving facilities.",
      "MARPOL is the principal international convention addressing pollution from ships. Its technical annexes cover different pollution sources, including oil, noxious liquid substances in bulk, sewage, garbage and air emissions. Annex I addresses the prevention of pollution by oil and contains measures related to ship design and operations. The exact requirements depend on the ship, its activity and the applicable rules; a general overview cannot establish which provisions apply to a particular vessel or voyage.",
      "For a product movement, prevention starts with readiness. Teams should understand the transfer plan, identify relevant spill-prevention controls, confirm communication responsibilities and know which shipboard and terminal procedures govern the operation. During loading and discharge, awareness of the transfer and prompt communication of abnormal conditions can help responsible personnel respond. Records of checks, transfers and incidents also support a clear account of the operation and any follow-up required.",
      "Pollution prevention continues while underway and during port calls. The crew and shore-side teams need to understand the applicable operating limits and procedures for the vessel. Waste handling, residue management and any discharge-related controls are governed by the applicable requirements and shipboard documentation. Port reception facilities and local rules may also affect the plan. These details should be verified against current instructions, not inferred from a different ship or port call.",
      "Preparedness matters as well as prevention. People involved in the movement should know how to raise a concern, who is responsible for the next decision and which emergency arrangements are relevant. Drills, familiarization, suitable equipment and clear lines of communication contribute to readiness, subject to the vessel's formal safety procedures and applicable requirements. If an incident or near miss occurs, prompt reporting and careful record keeping support response and subsequent review.",
      "MARPOL and local rules provide the formal framework; day-to-day care depends on people understanding and following the procedures that apply to their operation. This article is an editorial overview, not a compliance checklist or statement about any particular vessel's certification. Operators should consult the current convention text, flag and port-state requirements, vessel procedures and terminal instructions before each voyage.",
    ],
    publishedAt: "2026-09-17",
    publishedDisplay: "Marine environment guide",
    image: "/images/hero-hseq.jpg",
    imageAlt: "Marine crew working safely aboard a tanker",
    category: "industry-insight",
    author: "VOTPI Maritime Editorial",
    readingTimeMinutes: 4,
    verified: false,
    references: [
      {
        title: "IMO — MARPOL and pollution prevention",
        url: "https://www.imo.org/en/about/conventions/pages/international-convention-for-the-prevention-of-pollution-from-ships-%28marpol%29.aspx",
      },
      {
        title: "IMO — MARPOL Annex I: prevention of pollution by oil",
        url: "https://www.imo.org/en/ourwork/environment/pages/oilpollution-default.aspx",
      },
      {
        title: "NIMASA — Maritime safety and security",
        url: "https://nimasa.gov.ng/what-we-do/maritime-safety-security/",
      },
    ],
  },
  {
    slug: "163995-mt-handled-since-june-2025",
    title: "163,995 metric tons handled since June 2025",
    excerpt:
      "VOTPI Maritime has facilitated clearing and agency handling for vessels discharging or loading petroleum products and crude parcels while navigating port delays, infrastructure constraints, security risks and regulatory complexity.",
    body: [
      "VOTPI Maritime has facilitated clearing and agency handling for vessels discharging or loading petroleum products and crude parcels while navigating port delays, infrastructure constraints, security risks and regulatory complexity.",
      "The operating record reflects the importance of disciplined planning, port coordination and downstream-focused execution across Nigeria's petroleum logistics network.",
    ],
    publishedAt: "2025-06-30",
    publishedDisplay: "June 2025",
    image: "/images/hero-news.jpg",
    imageAlt: "Tugboat escorting a petroleum tanker into port at sunrise",
    category: "company-update",
    author: "VOTPI Maritime",
    readingTimeMinutes: 2,
    verified: true,
  },
];

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}

export function latestNews(): NewsArticle[] {
  return [...newsArticles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function allNewsSlugs(): string[] {
  return newsArticles.map((article) => article.slug);
}
