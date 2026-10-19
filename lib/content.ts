export const site = {
  name: "Mukarram Ali",
  short: "Mir Ali",
  url: "https://analystali.com",
  role: "Analytics Engineer & Business Systems Consultant",
  location: "Chicago, IL",
  email: "mir.ali@vizwise.com",
  booking: "https://calendly.com/mir-ali-vizwise/30min",
  upwork: "https://www.upwork.com/freelancers/~01bafdc31150747334",
  linkedin: "https://www.linkedin.com/in/analystali",
  company: "VizWise Analytics",
  description:
    "Mukarram (Mir) Ali is a Chicago-based analytics engineer who builds Power BI dashboards, data pipelines, workflow automation and AI data assistants for operations-heavy businesses. Upwork Top Rated and Expert Vetted, 500+ dashboards shipped.",
};

export const proof = [
  { value: "500+", label: "Dashboards shipped" },
  { value: "61", label: "Upwork engagements" },
  { value: "10,000+", label: "Manual hours removed" },
  { value: "80%", label: "Typical cut in reporting time" },
];

export const pains = [
  {
    q: "“Why does it take three days to get last week’s numbers?”",
    a: "Reporting that refreshes itself every morning, so leadership acts on today instead of debating last week.",
  },
  {
    q: "“We found out we were out of stock when the orders stopped.”",
    a: "Runway and reorder signals built from live inventory and shipping data, so you see it two weeks early.",
  },
  {
    q: "“Every system gives us a different revenue number.”",
    a: "One governed data model across ERP, CRM, shipping and marketing tools. One number, everyone trusts it.",
  },
  {
    q: "“Our best customers are drifting and nobody notices.”",
    a: "Customer health scoring and opportunity lists your sales team can work through on Monday.",
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  location: string;
  title: string;
  summary: string;
  metric: { value: string; label: string };
  challenge: string;
  approach: string[];
  outcome: string[];
  stack: string[];
  link?: { label: string; href: string };
};

export const work: CaseStudy[] = [
  {
    slug: "3pl-inventory-intelligence",
    client: "Uptime Ops",
    industry: "3PL & Fulfillment",
    location: "Miami, USA",
    title: "Predicting stockouts for a multi-location 3PL",
    summary:
      "Joined Katana inventory, ShipHero and ShipStation into one model that tells the team when stock runs out and how much to reorder.",
    metric: { value: "3 → 1", label: "systems unified into one view of stock" },
    challenge:
      "Inventory lived in Katana while shipments went out through ShipHero and ShipStation. The team rebuilt reorder sheets by hand in Excel, and stockouts were spotted only after orders started failing.",
    approach: [
      "Mapped SKUs, locations and order flows across all three platforms into a single star-schema model.",
      "Built 25+ DAX measures including 3/5/7-day moving ship rates, inventory runway and label reorder forecasts.",
      "Shipped a small Appsmith app so non-technical staff can update reference data without touching the model.",
    ],
    outcome: [
      "Manual Excel reorder process retired.",
      "Reorder quantities calculated automatically from real ship velocity.",
      "Operations can answer “when do we run out?” per SKU and per site in seconds.",
    ],
    stack: ["Power BI", "DAX", "Power Query", "Katana API", "ShipHero", "ShipStation", "Appsmith"],
  },
  {
    slug: "wholesale-churn-opportunity-engine",
    client: "Haydn",
    industry: "B2B Wholesale",
    location: "New Zealand",
    title: "A churn and opportunity engine from dormant ERP data",
    summary:
      "Turned years of ERP transactions into a customer health score and a ranked list of upsell and win-back opportunities.",
    metric: { value: "82+", label: "measures behind one customer health score" },
    challenge:
      "The business was losing revenue visibility. Transaction data sat in the ERP, but nobody could say which accounts were drifting or where the next sale should come from.",
    approach: [
      "Designed a star-schema model over ERP orders, customers and products.",
      "Built a health score from order frequency, revenue trend, product breadth and recency.",
      "Created an opportunity engine that flags cross-sell and upsell leads with a confidence rank.",
    ],
    outcome: [
      "Leadership reviews at-risk accounts before they churn, not after.",
      "Sales works from a prioritized opportunity list instead of gut feel.",
      "Revenue opportunity is quantified per customer and per product line.",
    ],
    stack: ["Power BI", "DAX", "SQL", "Star schema", "ERP integration"],
  },
  {
    slug: "retail-media-scorecard",
    client: "CPG marketing agency",
    industry: "Retail Media & CPG",
    location: "USA",
    title: "Retail media scorecard across nine retail networks",
    summary:
      "Rebuilt an agency’s HTML scorecard as an 8-page Power BI product covering Walmart Connect, Kroger, Instacart, Amazon Ads and more.",
    metric: { value: "34,000+", label: "automated checks, zero mismatches vs. source" },
    challenge:
      "The agency reported spend, revenue and ROAS for food and beverage brands from a spreadsheet and a static web page. Period logic was inconsistent and every client review started with reconciling numbers.",
    approach: [
      "Consolidated history and the live year into one append-only fact table so future years load without rework.",
      "Designed 40 KPI cards with month-over-month and year-over-year comparisons and color-coded movement.",
      "Built a watchlist page that flags brands under the ROAS floor and the revenue gap to target.",
      "Wrote a Python validation harness that tied every number back to the client’s own workbook.",
    ],
    outcome: [
      "Client reviews start with decisions, not reconciliation.",
      "Underperforming brands surface automatically each month.",
      "Every KPI is proven against source across 50+ filter scenarios.",
    ],
    stack: ["Power BI", "DAX", "Power Query", "Python", "pandas", "PBIR"],
  },
  {
    slug: "saas-sales-intelligence",
    client: "Qarma",
    industry: "B2B SaaS",
    location: "Denmark",
    title: "From three-day spreadsheet reports to daily pipeline decisions",
    summary:
      "Connected HubSpot to Power BI with a daily refresh so sales and leadership see pipeline, performance and upsell openings every morning.",
    metric: { value: "10h → 2h", label: "weekly reporting time" },
    challenge:
      "Sales reporting was assembled by hand in Excel and took more than three days each cycle. Numbers were stale by the time anyone saw them.",
    approach: [
      "Integrated HubSpot CRM data with an automated daily refresh.",
      "Modeled pipeline, rep performance and expansion opportunities in one report.",
      "Designed views for front-line reps and for leadership, from the same model.",
    ],
    outcome: [
      "Reporting effort cut by more than 80%.",
      "Insights move from weekly to daily.",
      "High adoption by the front-line sales team.",
    ],
    stack: ["Power BI", "HubSpot", "DAX", "Power Query"],
  },
  {
    slug: "law-firm-workforce-analytics",
    client: "Hirsch Law Group",
    industry: "Legal & Professional Services",
    location: "Philadelphia, USA",
    title: "Staffing and intake analytics for a growing law firm",
    summary:
      "The firm’s first central analytics system, joining HR, call-center and marketing data to answer how many people they need and where leads come from.",
    metric: { value: "0 → 1", label: "first single source of truth for the firm" },
    challenge:
      "Headcount, call-center and campaign data lived in separate tools. Staffing calls were made on instinct and marketing spend could not be tied to intake.",
    approach: [
      "Designed the data architecture and ETL across HR, operations and marketing systems.",
      "Built headcount, staffing-gap forecasting and call-center capacity models.",
      "Linked campaign spend to intake to show marketing ROI by channel.",
    ],
    outcome: [
      "Leadership can answer “how many agents do we need?” with data.",
      "Staffing decisions moved from guesswork to forecasts.",
      "Marketing budget decisions tied to actual intake.",
    ],
    stack: ["Power BI", "SQL", "ETL", "DAX", "Data architecture"],
  },
  {
    slug: "tableau-to-power-bi-migration",
    client: "Naturopathica",
    industry: "E-commerce & Retail",
    location: "Los Angeles, USA",
    title: "Moving 20+ Tableau dashboards to Power BI without disruption",
    summary:
      "A phased migration of interconnected dashboards for a distributed e-commerce and retail brand, with rebuilt models and team training.",
    metric: { value: "20+", label: "dashboards migrated, zero downtime" },
    challenge:
      "Dozens of Tableau dashboards depended on each other. The business needed to move to Power BI without breaking the reports teams used every day.",
    approach: [
      "Mapped dashboard dependencies and planned a phased rollout.",
      "Rebuilt data models for performance instead of copying them one to one.",
      "Trained teams on the new platform as each phase went live.",
    ],
    outcome: [
      "Migration completed with no business interruption.",
      "Faster queries on rebuilt models.",
      "A clean foundation for future analytics work.",
    ],
    stack: ["Power BI", "Tableau", "Data modeling", "Change management"],
  },
  {
    slug: "optical-retail-crm",
    client: "Optical retailer",
    industry: "Retail Operations",
    location: "India",
    title: "A custom CRM and point-of-sale system for optical retail",
    summary:
      "Beyond dashboards: a full web application for customer records, prescriptions, orders and billing, built and hosted end to end.",
    metric: { value: "Live", label: "production system the client runs on" },
    challenge:
      "The store ran on paper registers and generic software that did not understand prescriptions, frame orders or lab follow-ups.",
    approach: [
      "Designed the data model around how an optical shop actually works: patient, prescription, order, lab, delivery.",
      "Built the app with role-based access for owner, manager and staff.",
      "Deployed on managed cloud infrastructure the client owns.",
    ],
    outcome: [
      "One place for every customer, prescription and order.",
      "Owner gets sales and order status without asking staff.",
      "A white-label version now demos to other optical shops.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Postgres", "Vercel"],
    link: { label: "Open the live demo", href: "https://optora.analystali.com" },
  },
  {
    slug: "ai-data-assistants",
    client: "VizWise Analytics",
    industry: "AI & Automation",
    location: "Chicago, USA",
    title: "AI assistants that answer questions from live business systems",
    summary:
      "Custom connectors that let teams ask plain-English questions of their inventory, manufacturing and marketing data, with answers grounded in the real system.",
    metric: { value: "Read-only", label: "AI access to live inventory and GA4 data" },
    challenge:
      "Owners and managers without a data team still had to wait for someone to build a report before they could get an answer.",
    approach: [
      "Built Model Context Protocol (MCP) servers for Katana inventory and MRP data and for Google Analytics 4.",
      "Exposed read-only, role-scoped tools so the assistant can look things up but never change records.",
      "Paired the assistant with standard dashboards so every answer can be checked against a report.",
    ],
    outcome: [
      "Questions like “what is low on stock this week?” answered in seconds.",
      "Managers get answers without waiting for a new report.",
      "Security by design: read-only, role-scoped access to each system.",
    ],
    stack: ["Python", "MCP", "Claude", "Katana API", "GA4 Data API", "OAuth"],
  },
];

export const services = [
  {
    title: "Decision dashboards",
    body: "Power BI and Tableau reporting designed around the decisions your team makes each week. Row-level security, incremental refresh, mobile layouts.",
    tags: ["Power BI", "Tableau", "Looker Studio"],
  },
  {
    title: "Data pipelines & warehouse",
    body: "Reliable pipelines from ERP, CRM, e-commerce, shipping and ad platforms into one model, on Snowflake, Azure SQL or Postgres.",
    tags: ["SQL", "Snowflake", "REST APIs"],
  },
  {
    title: "Workflow automation",
    body: "Retire the copy-paste. Power Automate, Python and API workflows that move data, send reports and trigger alerts on their own.",
    tags: ["Power Automate", "Python"],
  },
  {
    title: "AI data assistants",
    body: "Let managers ask questions in plain English and get answers grounded in your live systems, through read-only access.",
    tags: ["MCP", "LLMs"],
  },
  {
    title: "Custom internal tools",
    body: "When spreadsheets stop scaling: CRMs, portals and admin apps built on modern web stacks, owned by you.",
    tags: ["Next.js", "Supabase", "Appsmith"],
  },
  {
    title: "KPI & analytics strategy",
    body: "Define the handful of numbers that run the business, who owns them, and how they are calculated, before any chart is drawn.",
    tags: ["KPI design", "Workshops"],
  },
];

export const approach = [
  {
    title: "Understand the business",
    body: "I start with how money moves through your company and which decisions are slow or risky. Metrics come second.",
  },
  {
    title: "Design the model",
    body: "Sources, definitions and security agreed up front. The data model is the product; dashboards are the interface.",
  },
  {
    title: "Ship in small loops",
    body: "Working software within days, reviewed every 48 hours. You see progress, not status reports.",
  },
  {
    title: "Hand over, fully",
    body: "Documentation, refresh schedules, access and training. Your team owns it; I make myself replaceable.",
  },
];

export const industries = [
  "3PL & fulfillment",
  "Manufacturing & wholesale",
  "E-commerce & CPG",
  "Retail media",
  "B2B SaaS",
  "Legal & professional services",
  "Retail operations",
  "Real estate",
];

export const testimonials = [
  {
    quote:
      "He’s excellent at turning complex datasets into actionable insights and building clean, stakeholder-friendly Power BI dashboards. He also brings great curiosity and structured thinking, which made our AI + analytics work both productive and practical.",
    name: "Blake Wu",
    role: "Building AI for data analytics",
  },
  {
    quote:
      "Despite the time zone differences, Mir managed to deliver the project on time. His expertise in Power BI and DAX formulas made a complex task look easy. Highly recommended.",
    name: "Verified Upwork client",
    role: "5.0 rating",
  },
  {
    quote:
      "He successfully identified outliers in the data. His technical skills were solid, and his ability to communicate findings clearly helped me understand the implications.",
    name: "Sofiane Djellouli",
    role: "Founder, Property Pulse · Dubai real estate",
  },
];

export const education = [
  { degree: "MS, Data Science", school: "Liverpool John Moores University" },
  { degree: "Data Analytics program", school: "IIIT Bangalore" },
  { degree: "BBA, Business Analytics", school: "St. Joseph’s Degree & PG College" },
  { degree: "Analyzing & Visualizing Data with Power BI", school: "Microsoft · edX" },
];

export const faqs = [
  {
    q: "Do you only build Power BI dashboards?",
    a: "No. Power BI is often the visible part, but most engagements also include data pipelines, automation of manual reporting, and sometimes a custom internal tool or an AI assistant. I pick the tool that fits your stack and budget.",
  },
  {
    q: "What kinds of businesses do you work with?",
    a: "Mostly operations-heavy companies without an in-house data team: 3PLs and fulfillment, manufacturers and wholesalers, e-commerce and CPG brands, B2B SaaS, and professional services such as law firms.",
  },
  {
    q: "How long does a typical project take?",
    a: "A focused dashboard on clean data takes one to two weeks. A multi-source model with automation usually takes three to six weeks. You see working output within the first few days.",
  },
  {
    q: "Can you work with our existing systems?",
    a: "Yes. I have connected ERP and accounting systems, HubSpot and other CRMs, Katana, ShipHero, ShipStation, GA4, ad platforms, Excel and SharePoint, Snowflake, Azure SQL and Postgres. If it has an API or an export, it can be modeled.",
  },
  {
    q: "Where are you based, and which time zone do you work in?",
    a: "Chicago, Illinois. I work in US Central time and overlap fully with US business hours, with async updates for clients in Europe and Asia-Pacific.",
  },
  {
    q: "How do we start?",
    a: "Book a free 30-minute call. We look at your current reporting, I tell you honestly what is worth building, and you get a fixed-scope proposal within two business days.",
  },
];
