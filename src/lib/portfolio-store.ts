import { useState, useEffect } from "react";
import veridian from "@/assets/project-veridian.jpg";
import nexus from "@/assets/project-nexus.jpg";
import orbit from "@/assets/project-orbit.jpg";
import vault from "@/assets/project-vault.jpg";

export type Metric = { value: string; label: string };
export type Chapter = { title: string; body: string };

export type PortfolioItem = {
  id: string;
  slug: string;
  client: string; // also used as title
  industry: string;
  category: "E-commerce" | "SaaS" | "AI Products" | "Mobile Apps" | "Web Apps";
  headline: string;
  summary: string; // brief description
  challenge?: string; // for timeline view
  solution?: string; // for timeline view
  hero: string; // image URL or asset
  accent: string; // Tailwind gradient string
  year: string;
  services: string[];
  stack: string[];
  metrics: Metric[];
  chapters: Chapter[];
  result: string; // e.g. "+47% conversion"
  featured?: boolean; // whether shown on home page projects
};

const STORAGE_KEY = "dhruboit_portfolio_items_v2";
const PORTFOLIO_EVENT = "dhruboit_portfolio_updated";

export const INITIAL_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "CS_01",
    slug: "apex-commerce",
    client: "Apex Commerce",
    industry: "E-Commerce / Headless",
    category: "E-commerce",
    headline: "Engineering a high-scale headless commerce architecture handling $18M+ annual GMV.",
    summary:
      "Legacy storefront infrastructure was causing checkout friction and high bounce rates during peak sales. We architected a headless Next.js edge-rendered experience with instant cart state and sub-second page loads.",
    challenge: "Legacy Shopify storefront struggled during high-traffic flash sales with unacceptable mobile checkout latency.",
    solution: "Architected a custom headless Next.js 15 storefront deployed on edge nodes with Supabase & Stripe Billing.",
    hero: veridian,
    accent: "from-emerald-400/30 to-cyan-500/20",
    year: "2026",
    services: ["Headless Engineering", "Performance Optimization", "Subscription Architecture"],
    stack: ["Next.js 15", "Supabase", "Stripe Edge", "Vercel Edge", "Sanity CMS"],
    metrics: [
      { value: "+47%", label: "Mobile Conversion" },
      { value: "0.38s", label: "LCP Performance" },
      { value: "$18M+", label: "Annual GMV Processed" },
      { value: "99.99%", label: "Peak-Season Uptime" },
    ],
    chapters: [
      {
        title: "The Challenge",
        body: "Apex Commerce faced growing technical debt with their legacy monolithic theme. Flash campaign traffic spikes caused severe database locking and checkout drops. Conversion rates on mobile devices had regressed significantly over two consecutive quarters.",
      },
      {
        title: "Architectural Approach",
        body: "We decoupled the frontend presentation layer from backend merchandising services. We engineered a static-first, edge-revalidated architecture using Next.js 15, storing core state in Supabase and leveraging Stripe Edge APIs for instantaneous 1-click customer checkouts.",
      },
      {
        title: "Engineering & Migration",
        body: "Migration executed across three planned phases: Product detail pages first, followed by dynamic cart services and user account portals. All releases were governed by feature flags to ensure zero downtime throughout the transition.",
      },
      {
        title: "Business Impact",
        body: "The new platform processed record Black Friday traffic effortlessly. Mobile page load speeds dropped from 3.8s to under 0.4s, overall conversion increased by 47%, and recurring subscription revenue grew 24% in the first 90 days.",
      },
    ],
    result: "+47% conversion",
    featured: true,
  },
  {
    id: "CS_02",
    slug: "stride-financial",
    client: "Stride Financial",
    industry: "Fintech / Asset Management",
    category: "SaaS",
    headline: "Automating real-time wealth portfolio rebalancing across 2,000+ advisor accounts.",
    summary:
      "Stride's wealth advisory team was bottlenecked by manual spreadsheet calculations. We built a real-time event-driven rebalancing engine and biometric client portal to scale assets under management effortlessly.",
    challenge: "Manual portfolio calculation workflows capped advisor account capacity and slowed trade executions.",
    solution: "Designed and deployed a real-time event engine with PostgreSQL ledgers and WebAuthn biometric security.",
    hero: nexus,
    accent: "from-indigo-400/30 to-fuchsia-500/20",
    year: "2026",
    services: ["Real-Time Data Pipelines", "Fintech Compliance", "Advisor Workflow Automation"],
    stack: ["React", "Node.js", "PostgreSQL", "AWS Lambda", "TimescaleDB", "WebAuthn"],
    metrics: [
      { value: "10x", label: "Accounts Per Advisor" },
      { value: "$65M", label: "AUM on Platform" },
      { value: "99.99%", label: "Production Uptime" },
      { value: "<150ms", label: "Execution Latency" },
    ],
    chapters: [
      {
        title: "The Challenge",
        body: "Advisors at Stride were spending up to 40% of their working hours manually calculating asset rebalancing across client accounts. Growth was severely constrained by operational drag and regulatory audit overhead.",
      },
      {
        title: "Architectural Approach",
        body: "We designed a streaming architecture backed by TimescaleDB and Node.js microservices. Every portfolio adjustment triggers automated compliance checks and produces an immutable PostgreSQL ledger entry for instant audit verification.",
      },
      {
        title: "Engineering & Security",
        body: "Client authentication was upgraded to passwordless WebAuthn biometric login, eliminating phishing vulnerabilities and customer account lockout tickets completely.",
      },
      {
        title: "Business Impact",
        body: "Advisor capacity increased tenfold while keeping operational headcount flat. The platform currently manages over $65M in AUM with under 150ms calculation latency, reducing compliance audit preparation time from weeks to hours.",
      },
    ],
    result: "$65M AUM",
    featured: true,
  },
  {
    id: "CS_03",
    slug: "synapse-ai",
    client: "Synapse AI",
    industry: "AI Productivity / Enterprise",
    category: "AI Products",
    headline: "Deploying a RAG-powered cognitive assistant that automated 75% of internal ops Q&A.",
    summary:
      "Enterprise operations teams were losing hundreds of hours searching across 14 fragmented SaaS tools. We engineered a vector-search RAG agent integrated natively into Slack with strict enterprise role-based permissions.",
    challenge: "Internal knowledge was fragmented across Notion, Google Workspace, Linear, and Confluence dashboards.",
    solution: "Shipped a custom Pinecone vector RAG pipeline with Cloudflare Workers and Slack integration.",
    hero: orbit,
    accent: "from-amber-400/30 to-rose-500/20",
    year: "2025",
    services: ["RAG Architecture", "Agentic Workflows", "Enterprise AI Security"],
    stack: ["OpenAI API", "Pinecone", "TypeScript", "Cloudflare Workers", "Slack API"],
    metrics: [
      { value: "75%", label: "Automated Ops Q&A" },
      { value: "14", label: "Integrated SaaS Sources" },
      { value: "+64", label: "Internal Team NPS" },
      { value: "<1.1s", label: "Median Response Latency" },
    ],
    chapters: [
      {
        title: "The Challenge",
        body: "A rapidly growing 50-person operations team was repeatedly answering the same operational queries across disparate channels. Employee onboarding ramp times were escalating and internal team satisfaction scores were dropping.",
      },
      {
        title: "Architectural Approach",
        body: "Instead of building a separate portal, we brought the intelligence directly into Slack where engineers and ops staff work daily. The assistant indexes 14 enterprise document repositories into Pinecone vector spaces every 15 minutes.",
      },
      {
        title: "Engineering & Guardrails",
        body: "Security guardrails enforce user identity token validation at query time — ensuring staff only receive contextual answers derived from files they already have explicit permissions to view.",
      },
      {
        title: "Business Impact",
        body: "The cognitive agent resolves 75% of operational inquiries without human escalation, maintaining median answer latency under 1.1 seconds and saving over 30 hours per employee every month.",
      },
    ],
    result: "75% time saved",
    featured: true,
  },
  {
    id: "CS_04",
    slug: "flowstate-saas",
    client: "FlowState SaaS",
    industry: "Mobile / Mobile Banking",
    category: "Mobile Apps",
    headline: "Engineering a modern cross-platform mobile banking portal with a 4.9★ rating.",
    summary:
      "FlowState needed a consumer mobile banking experience offering biometric security, instant P2P transfers, and real-time card telemetry built on a unified codebase.",
    challenge: "Tight 12-week time-to-market deadline to launch cross-platform iOS and Android banking apps.",
    solution: "Shipped React Native app with native biometric bridges, Plaid account verification, and Stripe Issuing.",
    hero: vault,
    accent: "from-sky-400/30 to-violet-500/20",
    year: "2025",
    services: ["Mobile Product Design", "Native Engineering", "Payment Processing"],
    stack: ["React Native", "Firebase", "AWS Lambda", "Plaid API", "Stripe Issuing"],
    metrics: [
      { value: "4.9★", label: "App Store Rating" },
      { value: "<2.5s", label: "Dashboard Load Time" },
      { value: "94%", label: "Biometric Adoption" },
      { value: "0", label: "P1 Launch Incidents" },
    ],
    chapters: [
      {
        title: "The Challenge",
        body: "FlowState required an intuitive mobile application capable of serving thousands of active banking clients with zero compromise on security, compliance, or UI fluid responsiveness.",
      },
      {
        title: "Architectural Approach",
        body: "We selected React Native for maximum cross-platform code reuse while implementing lightweight native C++/Objective-C bridges for hardware biometric verification and secure key storage.",
      },
      {
        title: "Engineering & Integrations",
        body: "Integrated Plaid for instant bank account linking and verification alongside Stripe Issuing for real-time virtual card provisioning and instant push telemetry notifications.",
      },
      {
        title: "Business Impact",
        body: "Launched on target in 12 weeks to an overwhelming 4.9★ App Store rating. Over 94% of users activated biometric logins, and cold-start rendering speeds clocked in under 2.5 seconds.",
      },
    ],
    result: "4.9★ store rating",
    featured: true,
  },
];

export function getStoredPortfolioItems(): PortfolioItem[] {
  if (typeof window === "undefined") return INITIAL_PORTFOLIO_ITEMS;
  try {
    const item = window.localStorage.getItem(STORAGE_KEY);
    if (!item) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PORTFOLIO_ITEMS));
      return INITIAL_PORTFOLIO_ITEMS;
    }
    return JSON.parse(item);
  } catch (e) {
    console.error("Failed to read portfolio items from localStorage", e);
    return INITIAL_PORTFOLIO_ITEMS;
  }
}

export function saveStoredPortfolioItems(items: PortfolioItem[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event(PORTFOLIO_EVENT));
  } catch (e) {
    console.error("Failed to save portfolio items to localStorage", e);
  }
}

export function savePortfolioItem(itemToSave: PortfolioItem) {
  const current = getStoredPortfolioItems();
  const index = current.findIndex((item) => item.slug === itemToSave.slug || item.id === itemToSave.id);
  let updated: PortfolioItem[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = itemToSave;
  } else {
    updated = [itemToSave, ...current];
  }
  saveStoredPortfolioItems(updated);
}

export function deletePortfolioItem(slugOrId: string) {
  const current = getStoredPortfolioItems();
  const updated = current.filter((item) => item.slug !== slugOrId && item.id !== slugOrId);
  saveStoredPortfolioItems(updated);
}

export function resetPortfolioToDefault() {
  saveStoredPortfolioItems(INITIAL_PORTFOLIO_ITEMS);
}

export function usePortfolioItems(): PortfolioItem[] {
  const [items, setItems] = useState<PortfolioItem[]>(() => getStoredPortfolioItems());

  useEffect(() => {
    // Initial sync
    setItems(getStoredPortfolioItems());

    const handleUpdate = () => {
      setItems(getStoredPortfolioItems());
    };

    window.addEventListener(PORTFOLIO_EVENT, handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener(PORTFOLIO_EVENT, handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  return items;
}
