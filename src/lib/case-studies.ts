import veridian from "@/assets/project-veridian.jpg";
import nexus from "@/assets/project-nexus.jpg";
import orbit from "@/assets/project-orbit.jpg";
import vault from "@/assets/project-vault.jpg";

export type Metric = { value: string; label: string };
export type Chapter = { title: string; body: string };

export type CaseStudy = {
  slug: string;
  id: string;
  client: string;
  industry: string;
  category: "E-commerce" | "SaaS" | "AI Products" | "Mobile Apps";
  headline: string;
  summary: string;
  hero: string;
  accent: string;
  year: string;
  services: string[];
  stack: string[];
  metrics: Metric[];
  chapters: Chapter[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "veridian-store",
    id: "CS_01",
    client: "Veridian Store",
    industry: "E-Commerce",
    category: "E-commerce",
    headline: "Rebuilding a fashion retailer into a $12M/yr headless commerce engine.",
    summary:
      "A legacy Shopify storefront was losing Black Friday traffic to mobile crashes. We rebuilt the entire purchase path as a headless, edge-rendered experience — and the next peak season ran without a single minute of downtime.",
    hero: veridian,
    accent: "from-emerald-400/30 to-cyan-500/20",
    year: "2025",
    services: ["Headless commerce", "Performance engineering", "Subscription billing"],
    stack: ["Next.js 15", "Supabase", "Stripe", "Vercel Edge", "Sanity CMS"],
    metrics: [
      { value: "+47%", label: "Mobile conversion" },
      { value: "0.4s", label: "LCP, p75" },
      { value: "$12M+", label: "Annual revenue" },
      { value: "99.99%", label: "Peak-season uptime" },
    ],
    chapters: [
      {
        title: "Challenge",
        body: "Veridian's six-year-old Shopify theme buckled the moment a paid campaign went live. Mobile sessions crashed mid-checkout, the storefront cached aggressively, and the team had no way to ship a new PDP without a developer. Conversion had slipped 31% over two quarters and the founders were losing sleep every November.",
      },
      {
        title: "Approach",
        body: "We treated the rebuild as a platform decision, not a refresh. Discovery ran for two weeks — analytics, session replays, and a checkout teardown — before a single component was drawn. The new architecture split cleanly into a fast, edge-rendered storefront, a Supabase-backed content and product layer, and Stripe as the single source of truth for subscriptions and one-off orders.",
      },
      {
        title: "Build",
        body: "We migrated in three waves: PDP and PLP first, then the cart and checkout, then the post-purchase flows and account area. Each wave shipped behind a feature flag, with the legacy theme hot-swappable if anything went wrong. We built a small set of composable PDP blocks in Sanity so the merchandising team could finally ship a campaign without filing a ticket.",
      },
      {
        title: "Outcome",
        body: "Black Friday launched on the new stack. LCP on mobile dropped from 4.1s to 0.4s, conversion recovered and then surpassed pre-incident levels, and the team ran a flash sale two weeks later without asking engineering. Subscription attach rate grew 22% in the first quarter on the new platform.",
      },
    ],
  },
  {
    slug: "nexus-finance",
    id: "CS_02",
    client: "Nexus Finance",
    industry: "Fintech / SaaS",
    category: "SaaS",
    headline: "Scaling a wealth platform from 200 accounts per advisor to 2,000.",
    summary:
      "Nexus's portfolio rebalancing was a spreadsheet. We engineered a real-time engine, a biometric-secured client portal, and the operations tooling to let a single advisor run a $50M book.",
    hero: nexus,
    accent: "from-indigo-400/30 to-fuchsia-500/20",
    year: "2025",
    services: ["Real-time data engineering", "Advisor workflow design", "Compliance & audit"],
    stack: ["React", "Node.js", "PostgreSQL", "AWS", "TimescaleDB", "WebAuthn"],
    metrics: [
      { value: "10x", label: "Accounts per advisor" },
      { value: "$50M", label: "AUM on platform" },
      { value: "99.99%", label: "Uptime" },
      { value: "<200ms", label: "Rebalance decision latency" },
    ],
    chapters: [
      {
        title: "Challenge",
        body: "Nexus's advisors were spending two days a week rebalancing portfolios by hand. Every new account was a copy-paste job. The founders knew they could grow 5x in eighteen months — but not on spreadsheets and not with the operational drag they were carrying.",
      },
      {
        title: "Approach",
        body: "We started with the advisor's day. Job-shadowing three advisors across two weeks, mapping every portfolio decision, every client message, every compliance checkpoint. The new system had to feel faster than the spreadsheet it was replacing, or advisors would route around it.",
      },
      {
        title: "Build",
        body: "We built a real-time rebalancing engine on TimescaleDB and Node, with a PostgreSQL ledger that produced an immutable audit trail. The advisor UI is a React workspace with streaming portfolio views. Client access runs through a biometric WebAuthn flow — no passwords, no support tickets, no account recovery emails to phish.",
      },
      {
        title: "Outcome",
        body: "Advisors now run 10x the account volume with the same headcount. The platform holds $50M in AUM, has not lost a minute of production time in the last nine months, and the compliance team reports that audit prep dropped from three weeks to three days.",
      },
    ],
  },
  {
    slug: "orbit-ai",
    id: "CS_03",
    client: "Orbit AI",
    industry: "AI Productivity",
    category: "AI Products",
    headline: "A RAG-powered knowledge assistant that cut ops Q&A time by 70%.",
    summary:
      "A 40-person ops team was drowning in repetitive questions spread across 14 SaaS tools. We shipped an agentic assistant that reads where the team already works, with the guardrails the security team needed.",
    hero: orbit,
    accent: "from-amber-400/30 to-rose-500/20",
    year: "2025",
    services: ["RAG architecture", "Agentic workflow design", "Enterprise integrations"],
    stack: ["OpenAI", "Pinecone", "TypeScript", "Cloudflare Workers", "Slack API"],
    metrics: [
      { value: "70%", label: "Time saved on Q&A" },
      { value: "14", label: "Connected sources" },
      { value: "+62", label: "Internal NPS" },
      { value: "<1.2s", label: "Median answer latency" },
    ],
    chapters: [
      {
        title: "Challenge",
        body: "Orbit's ops team answered the same 80 questions in different shapes every day. Sources were scattered across Notion, Google Drive, Linear, Confluence, and four internal dashboards. The team's NPS had cratered and the cost of every new hire's ramp was climbing.",
      },
      {
        title: "Approach",
        body: "We refused to ship a chatbot nobody would open. The product had to live in Slack, where the questions were already being asked, and it had to cite the source document in the same message as the answer. Anything else would not be trusted.",
      },
      {
        title: "Build",
        body: "Pinecone holds a vector index refreshed every 15 minutes from the 14 connected sources. A Cloudflare Worker runs the retrieval and orchestrates a small agent loop: classify the question, fetch the right slice, draft an answer, cite the source, send it back to Slack. Permissions are enforced at retrieval — you only see what you could already see.",
      },
      {
        title: "Outcome",
        body: "The team got 30% of their week back. The bot resolves 78% of questions without human escalation, median answer latency sits at 1.2 seconds, and the internal NPS for the tool is +62 — the highest of any internal system the company has ever shipped.",
      },
    ],
  },
  {
    slug: "vault-mobile",
    id: "CS_04",
    client: "Vault Mobile",
    industry: "Mobile / Finance",
    category: "Mobile Apps",
    headline: "A cross-platform mobile bank that shipped to a 4.9★ store rating.",
    summary:
      "Vault needed a consumer banking app that felt like a fintech-native product on day one — biometric login, instant transfers, and a card experience that didn't feel like a 2014 banking portal.",
    hero: vault,
    accent: "from-sky-400/30 to-violet-500/20",
    year: "2024",
    services: ["Product design", "Native engineering", "Payments & cards"],
    stack: ["React Native", "Firebase", "AWS", "Plaid", "Stripe Issuing"],
    metrics: [
      { value: "4.9★", label: "App store rating" },
      { value: "<3s", label: "Cold-start to dashboard" },
      { value: "92%", label: "Biometric login rate" },
      { value: "0", label: "P1 incidents post-launch" },
    ],
    chapters: [
      {
        title: "Challenge",
        body: "Vault's roadmap was ambitious and the team was small. The MVP had to ship in twelve weeks, with biometric login, P2P transfers, a virtual card, and a spending insights view — all on a single codebase the team could maintain for the next three years.",
      },
      {
        title: "Approach",
        body: "We worked backwards from the moment a customer opens the app. Every design choice — onboarding, animations, empty states — was tested against a single question: does this make Vault feel like a tool you'd keep on your home screen, or one you'd bury in a folder?",
      },
      {
        title: "Build",
        body: "React Native for the app shell, with a thin native bridge for biometrics and secure storage. The backend is a small set of Firebase + AWS Lambda services, with Plaid for bank linking and Stripe Issuing for the card program. We treated observability as a feature from day one — every screen, every action, every error.",
      },
      {
        title: "Outcome",
        body: "The app shipped on schedule, hit a 4.9★ store rating within the first month, and has not had a P1 incident since launch. 92% of logins use biometrics, cold-start to dashboard runs in under three seconds, and the team has shipped two major feature releases without growing the engineering org.",
      },
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
