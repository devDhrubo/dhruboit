import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { F as Footer, R as Reveal, v as veridian, n as nexus, o as orbit, a as vault } from "./Footer-CVp3iCQR.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { e as emailjs } from "../_libs/emailjs__browser.mjs";
import { m as motion, A as AnimatePresence, u as useInView, a as animate } from "../_libs/framer-motion.mjs";
import { A as ArrowUpRight, Z as Zap, a as Cpu, S as Search, L as Layers, B as Brain, b as LifeBuoy, c as Star, M as Mail, d as MapPin, e as Check } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const links = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "nav",
    {
      className: `sticky top-0 z-50 border-b border-border backdrop-blur-md transition-colors ${scrolled ? "bg-background/90" : "bg-background/60"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "text-xl font-display tracking-widest", "aria-label": "Dhrubo IT home", children: [
          "DHRUBO",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent italic", children: "_" }),
          "IT"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "hover:text-accent transition-colors", children: l.label }, l.href)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "text-accent hover:opacity-80 transition", children: "[ Contact ]" })
        ] })
      ] })
    }
  );
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "top", className: "relative pt-20 pb-24 md:pt-28 md:pb-32 px-6 overflow-hidden border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        className: "lg:col-span-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 border border-accent text-accent text-[10px] uppercase tracking-widest mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-accent animate-ping opacity-75" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" })
            ] }),
            "System Status: Operational // 2026_CORE"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl sm:text-6xl md:text-8xl lg:text-[120px] leading-[0.85] font-display uppercase tracking-tight text-balance mb-8", children: [
            "Building Digital ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-stroke", children: "Products" }),
            " That Drive Growth"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed mb-10", children: "Dhrubo IT engineers high-performance SaaS, AI-native systems, and premium web & mobile products for ambitious founders and enterprises worldwide." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                target: "_blank",
                href: "https://calendly.com/hello-dhruboit/30min",
                className: "px-8 py-4 bg-accent text-accent-foreground font-bold uppercase text-xs tracking-widest hover:invert transition-all duration-300",
                children: "Book Free Consultation"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#projects",
                className: "px-8 py-4 border border-border hover:border-accent font-bold uppercase text-xs tracking-widest transition-all duration-300 group inline-flex items-center gap-2",
                children: [
                  "View Our Work",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block group-hover:translate-x-1 transition-transform", children: "->" })
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
        className: "lg:col-span-4 border-l border-border pl-8",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "space-y-8", children: [
          { v: "70+", l: "Projects Deployed", accent: true },
          { v: "12", l: "Countries Served" },
          { v: "99.9%", l: "Uptime Guaranteed" }
        ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: `text-4xl font-display ${s.accent ? "text-accent" : ""}`, children: s.v }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: s.l })
        ] }, s.l)) })
      }
    )
  ] }) });
}
const items$1 = [
  "Next.js 15",
  "AI Automation",
  "Scalable Cloud",
  "TypeScript Core",
  "UI/UX Engineering",
  "Edge Compute",
  "Vector Search",
  "Stripe Payments"
];
function Marquee() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border py-4 bg-background overflow-hidden relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex whitespace-nowrap animate-marquee", children: [0, 1].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex shrink-0 gap-12 px-6 items-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold",
      "aria-hidden": k === 1,
      children: items$1.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: i }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 bg-accent" })
      ] }, i))
    },
    k
  )) }) });
}
const logos = ["NEXUS.AI", "VORTEX", "QUANTUM", "CLOUDSTRAT", "LUMINA", "HORIZON", "ATLAS", "MERIDIAN"];
function TrustedBy() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center mb-10", children: "Trusted by 150+ teams from seed to series C" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8 items-center", children: logos.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "text-center text-sm font-display tracking-[0.2em] text-muted-foreground/60 hover:text-foreground transition-colors",
        children: l
      },
      l
    )) })
  ] }) });
}
const services = [
  { n: "01", t: "Website Development", d: "Marketing sites engineered for speed, SEO, and conversion.", b: ["Next.js & Astro", "Headless CMS", "Edge Rendering"] },
  { n: "02", t: "Web Applications", d: "Complex SPAs and dashboards with real-time data and auth.", b: ["React 19", "TanStack Stack", "WebSockets"] },
  { n: "03", t: "Mobile Apps", d: "Native performance with cross-platform efficiency on iOS & Android.", b: ["React Native", "Expo", "Push Pipelines"] },
  { n: "04", t: "SaaS Development", d: "Multi-tenant architectures built for infinite horizontal scale.", b: ["Auth & Security", "Stripe Billing", "Real-time Sync"] },
  { n: "05", t: "AI Solutions", d: "Custom LLM integration and cognitive workflows.", b: ["RAG Architectures", "Agentic Workflows", "Vector DB Ops"] },
  { n: "06", t: "AI Automation", d: "Eliminate manual ops with intelligent process automation.", b: ["n8n / Zapier", "Custom Agents", "Event Pipelines"] },
  { n: "07", t: "UI/UX Design", d: "High-fidelity interfaces with technical precision.", b: ["Design Systems", "Interaction Design", "Prototyping"] },
  { n: "08", t: "API Development", d: "Type-safe APIs that scale from MVP to enterprise traffic.", b: ["REST & GraphQL", "tRPC / Zod", "Versioning"] },
  { n: "09", t: "Cloud Solutions", d: "Reliable infra on Vercel, AWS, and Cloudflare with observability built in.", b: ["IaC w/ Terraform", "Observability", "Cost Tuning"] }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "py-24 md:py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-4", children: "[ 01 ] Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-display uppercase", children: "Technical Capabilities" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground max-w-xs md:text-right", children: "Advanced engineering solutions focused on high-performance architecture and cognitive automation." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Reveal,
      {
        delay: i % 3 * 0.08,
        className: "p-10 border-r border-b border-border group hover:bg-white/[0.02] transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `size-8 mb-6 border flex items-center justify-center text-[10px] ${i === 0 ? "border-accent text-accent" : "border-white/20 text-white/40"}`,
              children: s.n
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold uppercase mb-4 group-hover:text-accent transition-colors", children: s.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-8 leading-relaxed", children: s.d }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-[10px] uppercase tracking-wider space-y-2 opacity-60", children: s.b.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "- ",
            x
          ] }, x)) })
        ]
      },
      s.n
    )) })
  ] }) });
}
const projects = [
  { id: "04", slug: "veridian-store", title: "Veridian Store", industry: "E-Commerce", cat: "E-commerce", desc: "Headless commerce engine processing $12M+ annual revenue with 0.4s page loads.", tech: ["Next.js", "Supabase", "Stripe"], img: veridian, result: "+47% conversion" },
  { id: "03", slug: "nexus-finance", title: "Nexus Finance", industry: "Fintech / SaaS", cat: "SaaS", desc: "Enterprise asset management platform with real-time portfolio rebalancing.", tech: ["React", "PostgreSQL", "Node.js"], img: nexus, result: "$50M AUM" },
  { id: "02", slug: "orbit-ai", title: "Orbit AI", industry: "AI Productivity", cat: "AI Products", desc: "RAG-powered knowledge assistant with custom agentic workflows for enterprise teams.", tech: ["OpenAI", "Pinecone", "TypeScript"], img: orbit, result: "70% time saved" },
  { id: "01", slug: "vault-mobile", title: "Vault Mobile", industry: "Mobile / Finance", cat: "Mobile Apps", desc: "Cross-platform mobile banking app with biometric security and instant transfers.", tech: ["React Native", "Firebase", "AWS"], img: vault, result: "4.9★ store rating" }
];
const cats = ["All", "Web Apps", "Mobile Apps", "AI Products", "SaaS", "E-commerce"];
function Projects() {
  const [cat, setCat] = reactExports.useState("All");
  const filtered = cat === "All" ? projects : projects.filter((p) => p.cat === cat);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "py-24 md:py-32 px-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-4", children: "[ 02 ] Featured Work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-display uppercase", children: [
          "Selected ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Outputs" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: cats.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setCat(c),
          className: `px-4 py-2 text-[10px] uppercase tracking-widest border transition-colors ${cat === c ? "border-accent text-accent bg-accent/5" : "border-border text-muted-foreground hover:text-foreground"}`,
          children: c
        },
        c
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        layout: true,
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        className: "bg-background group relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-16/10 overflow-hidden border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: p.img,
              alt: `${p.title} — ${p.industry}`,
              loading: "lazy",
              width: 1280,
              height: 800,
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-accent mb-4 tracking-widest", children: [
              "CASE_STUDY_",
              p.id,
              " // ",
              p.industry.toUpperCase()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-4xl font-display uppercase mb-4", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6 leading-relaxed", children: p.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 bg-white/5 text-[10px] tracking-widest", children: t.toUpperCase() }, t)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pt-6 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: [
                "Result: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: p.result })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/case-studies/$slug",
                  params: { slug: p.slug },
                  className: "group/link inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold border-b border-accent pb-1 hover:text-accent transition-colors",
                  children: [
                    "Read case study",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" })
                  ]
                }
              )
            ] })
          ] })
        ]
      },
      p.id
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-border p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-2", children: "[ Archive ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-base", children: "Want the full write-up — problem, approach, build, outcomes?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/case-studies",
          className: "inline-flex items-center gap-3 px-5 py-3 bg-foreground text-background text-[10px] uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors",
          children: [
            "View all case studies ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const studies = [
  {
    n: "CS_01",
    client: "Veridian Store",
    challenge: "Legacy Shopify storefront couldn't handle Black Friday traffic and bled conversions on mobile.",
    solution: "Rebuilt as a headless Next.js storefront on Vercel Edge with Supabase + Stripe billing.",
    stack: ["Next.js 15", "Supabase", "Stripe", "Vercel Edge"],
    outcome: [{ k: "Conversion", v: "+47%" }, { k: "LCP", v: "0.4s" }, { k: "Revenue", v: "$12M+/yr" }]
  },
  {
    n: "CS_02",
    client: "Nexus Finance",
    challenge: "Manual portfolio rebalancing capped client growth at ~200 accounts per advisor.",
    solution: "Designed and shipped a real-time rebalancing engine with biometric-secured client portal.",
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    outcome: [{ k: "Accounts/Advisor", v: "10x" }, { k: "AUM", v: "$50M" }, { k: "Uptime", v: "99.99%" }]
  },
  {
    n: "CS_03",
    client: "Orbit AI",
    challenge: "Knowledge ops team buried under repetitive Q&A across 14 SaaS tools.",
    solution: "Custom RAG agent with vector search across all sources, surfaced via a Slack-native UI.",
    stack: ["OpenAI", "Pinecone", "TypeScript", "Cloudflare"],
    outcome: [{ k: "Time Saved", v: "70%" }, { k: "Sources", v: "14" }, { k: "NPS", v: "+62" }]
  }
];
function CaseStudies() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 px-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-4", children: "[ 03 ] Case Studies" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-display uppercase", children: "Outcomes, not deliverables" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-16", children: studies.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `absolute left-8 md:left-1/2 top-2 size-3 -translate-x-1/2 bg-accent ${i === 0 ? "ring-4 ring-accent/20" : ""}`,
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${i % 2 === 1 ? "md:order-2" : ""} pl-20 md:pl-0 md:pr-12 md:text-right`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-accent tracking-widest mb-2", children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-display uppercase mb-4", children: s.client }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-2", children: "Challenge" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed mb-4", children: s.challenge }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-2", children: "Solution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: s.solution })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${i % 2 === 1 ? "md:order-1 md:pr-12 md:text-right" : "md:pl-12"} pl-20 md:pl-12`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-4", children: "Stack" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex flex-wrap gap-2 mb-6 ${i % 2 === 1 ? "md:justify-end" : ""}`, children: s.stack.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 bg-white/5 text-[10px] tracking-widest", children: t }, t)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 pt-6 border-t border-border", children: s.outcome.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: i % 2 === 1 ? "md:text-right" : "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display text-accent", children: o.v }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: o.k })
          ] }, o.k)) })
        ] }) })
      ] }, s.n)) })
    ] })
  ] }) });
}
const steps = [
  { n: "01", t: "Discovery", d: "Workshops to align on business goals, users, and constraints." },
  { n: "02", t: "Strategy", d: "Roadmap, KPIs, and architecture decisions written down." },
  { n: "03", t: "Design", d: "Design system + high-fidelity prototypes you can click through." },
  { n: "04", t: "Development", d: "Type-safe, tested code shipped in weekly iterations." },
  { n: "05", t: "Testing", d: "Automated suites + manual QA on real devices and load tests." },
  { n: "06", t: "Deployment", d: "Zero-downtime release pipelines with rollback safety." },
  { n: "07", t: "Support", d: "SLA-backed monitoring, hot-patches, and growth iterations." }
];
function Process() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "process", className: "py-24 md:py-32 px-6 border-t border-border bg-white/[0.01]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-4", children: "[ 04 ] Process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-display uppercase", children: "From signal to shipped" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { as: "div", delay: i * 0.06, className: "bg-background p-8 group hover:bg-white/[0.02] transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-accent tracking-widest", children: [
          "STEP_",
          s.n
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-display text-muted-foreground/40 group-hover:text-accent transition-colors", children: s.n })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold uppercase mb-3", children: s.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.d })
    ] }, s.n)) })
  ] }) });
}
const features = [
  { i: Zap, t: "Fast Delivery", d: "Weekly shipping cycles, not quarterly waterfalls." },
  { i: Cpu, t: "Modern Technologies", d: "React 19, Next.js 15, edge runtimes — current to 2026." },
  { i: Search, t: "SEO Optimization", d: "100/100 Lighthouse SEO baked into every build." },
  { i: Layers, t: "Scalable Architecture", d: "Multi-tenant, multi-region from day one." },
  { i: Brain, t: "AI Expertise", d: "LLMs, RAG, agents — in production, not in demos." },
  { i: LifeBuoy, t: "Dedicated Support", d: "Direct Slack with the engineers who built your system." }
];
function WhyUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 px-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-4", children: "[ 05 ] Why Dhrubo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-display uppercase", children: "Engineered for trust" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i % 3 * 0.08, className: "p-10 border-r border-b border-border group hover:bg-white/[0.02] transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(f.i, { className: "size-6 text-accent mb-6", strokeWidth: 1.5 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold uppercase mb-3 group-hover:text-accent transition-colors", children: f.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: f.d })
    ] }, f.t)) })
  ] }) });
}
const groups = [
  { l: "Frontend", items: ["React", "Next.js", "Angular", "TypeScript", "TanStack", "Tailwind"] },
  { l: "Backend", items: ["Node.js", "Express", "Supabase", "PostgreSQL", "Prisma", "Redis"] },
  { l: "AI", items: ["OpenAI", "Gemini", "Claude", "Pinecone", "LangChain", "Vercel AI SDK"] },
  { l: "Cloud", items: ["Vercel", "AWS", "Cloudflare", "Fly.io", "Docker", "Terraform"] }
];
function Stack() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "stack", className: "py-24 md:py-32 px-6 border-t border-border bg-white/[0.01]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-4", children: "[ 06 ] Stack" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-display uppercase", children: "Modern by default" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-px bg-border border border-border", children: groups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "bg-background grid grid-cols-1 md:grid-cols-4 gap-px", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 md:border-r border-border flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-accent tracking-widest mb-2", children: `/${g.l.toLowerCase()}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-display uppercase", children: g.l })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-px bg-border", children: g.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "bg-background p-6 text-sm font-bold uppercase tracking-widest hover:bg-accent/5 hover:text-accent transition-colors",
          children: it
        },
        it
      )) })
    ] }, g.l)) })
  ] }) });
}
const items = [
  { name: "Sarah Chen", role: "CEO, Veridian", quote: "Dhrubo IT shipped our headless storefront in six weeks. Conversion is up 47%. This is the partner I wish I'd found two years ago.", initial: "SC" },
  { name: "Marcus Rivera", role: "CTO, Nexus Finance", quote: "Engineering quality is genuinely elite. Their team thinks in systems, not tickets. Our platform now runs 10x the load with the same headcount.", initial: "MR" },
  { name: "Priya Sharma", role: "Head of Product, Orbit AI", quote: "The agentic workflow they built quietly replaced an entire support tier. Our NPS climbed 62 points in one quarter.", initial: "PS" },
  { name: "Daniel Okafor", role: "Founder, Vault", quote: "Premium design, ruthless execution. They treated our mobile MVP like their own product, not a contract.", initial: "DO" }
];
function Testimonials() {
  const [i, setI] = reactExports.useState(0);
  const t = items[i];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 px-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-4", children: "[ 07 ] Testimonials" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-display uppercase", children: "Operator feedback" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border p-8 md:p-16 relative min-h-[320px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.figure,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -16 },
          transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-6", children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 fill-accent text-accent" }, k)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-2xl md:text-3xl font-display uppercase leading-tight mb-8", children: [
              '"',
              t.quote,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 border border-accent text-accent flex items-center justify-center font-display text-lg", children: t.initial }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold uppercase tracking-widest", children: t.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: t.role })
              ] })
            ] })
          ]
        },
        t.name
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-10", children: items.map((it, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setI(k),
          "aria-label": `Show testimonial ${k + 1}`,
          className: `h-1 transition-all ${k === i ? "w-12 bg-accent" : "w-6 bg-border hover:bg-muted-foreground"}`
        },
        it.name
      )) })
    ] })
  ] }) });
}
function Counter({ to, suffix = "", duration = 2 }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v)
    });
    return () => controls.stop();
  }, [inView, to, duration]);
  const formatted = to >= 100 ? Math.round(val).toLocaleString() : val.toFixed(to % 1 === 0 ? 0 : 1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    formatted,
    suffix
  ] });
}
const stats = [
  { v: 70, s: "+", l: "Projects Completed" },
  { v: 98, s: "%", l: "Happy Clients" },
  { v: 2, s: "yrs", l: "Years Experience" },
  { v: 12, s: "", l: "Countries Served" }
];
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 border-t border-border bg-white/[0.01]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 0.08, className: "bg-background p-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl md:text-7xl font-display text-accent mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.v, suffix: s.s }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: s.l })
  ] }, s.l)) }) });
}
const pillars = [
  {
    l: "Mission",
    d: "Engineer software that moves real business metrics — revenue, retention, velocity — for founders who refuse average."
  },
  {
    l: "Vision",
    d: "Be the studio the best founders quietly recommend to each other, wherever they're building from."
  },
  {
    l: "Values",
    d: "Taste. Rigor. Ownership. No hand-offs. No mediocrity. No fluff — for any client, in any time zone."
  },
  {
    l: "Craft",
    d: "A deep bench of senior engineers, designers and product thinkers — invested fully in every project we take on."
  },
  {
    l: "Coverage",
    d: "Distributed across continents. Async-first, with real overlap hours for EU and US teams, and on-call for the rest."
  }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "py-24 md:py-32 px-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-4", children: "[ 08 ] About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-display uppercase max-w-4xl", children: [
        "A senior studio, building product for the",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: " whole world." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base md:text-lg leading-relaxed mt-6 max-w-3xl", children: "We're Dhrubo IT — a product, design and engineering studio working globally with founders, scale-ups and enterprise teams. We ship the software they actually need: SaaS platforms, AI-native systems, mobile apps and the brand systems that hold them together. Remote-first since day one, timezone-friendly by design, senior by default." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border", children: pillars.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-accent tracking-widest mb-4", children: [
        "/",
        c.l.toLowerCase()
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-display uppercase mb-3", children: c.l }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: c.d })
    ] }, c.l)) })
  ] }) });
}
const schema = objectType({
  name: stringType().trim().min(2, "Name is required").max(100),
  email: stringType().trim().email("Valid email required").max(255),
  company: stringType().trim().max(120).optional(),
  message: stringType().trim().min(10, "Tell us a bit more").max(2e3)
});
const EMAILJS = {
  serviceId: "service_s8953xt",
  templateId: "template_kkbubak",
  publicKey: "OmN-VJKFPHmO-hJnE"
};
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  const [submitError, setSubmitError] = reactExports.useState(null);
  const [sending, setSending] = reactExports.useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      company: fd.get("company") || void 0,
      message: fd.get("message")
    });
    if (!parsed.success) {
      const errs = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          from_name: parsed.data.name,
          from_email: parsed.data.email,
          company: parsed.data.company ?? "",
          message: parsed.data.message,
          reply_to: parsed.data.email
        },
        { publicKey: EMAILJS.publicKey }
      );
      setSent(true);
    } catch (err) {
      console.error("[Contact] EmailJS send failed:", err);
      setSubmitError("Something went wrong sending your message. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-24 md:py-32 px-6 border-t border-border bg-white/[0.01]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-4", children: "[ 10 ] Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-6xl font-display uppercase mb-8 leading-none", children: "Start the conversation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-12 max-w-md leading-relaxed", children: "Tell us about your product, your timeline, and where you're stuck. We respond within one business day." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-6", children: [
        { i: Mail, l: "Email", v: "hello.dhruboit@gmail.com" },
        { i: MapPin, l: "Operations", v: "Remote — EU, US, APAC" },
        { i: MapPin, l: "Book a One to One Metting", v: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-[#00FFC2]", target: "_blank", href: "https://calendly.com/hello-dhruboit/30min", children: "Click Here to Book" }) }
      ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4 border-b border-border pb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(c.i, { className: "size-5 text-accent mt-1", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-1", children: c.l }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold tracking-wide", children: c.v })
        ] })
      ] }, c.l)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit, className: "border border-border p-8 md:p-10 space-y-6", noValidate: true, children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 border border-accent text-accent flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-7" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-display uppercase mb-3", children: "Transmission received" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-sm", children: "We've logged your message. Expect a reply from a senior engineer within one business day." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      [
        { id: "name", l: "Your Name", type: "text", required: true },
        { id: "email", l: "Email", type: "email", required: true },
        { id: "company", l: "Company (optional)", type: "text" }
      ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: f.id, className: "text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: f.l }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: f.id,
            name: f.id,
            type: f.type,
            required: f.required,
            className: "w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-sm transition-colors"
          }
        ),
        errors[f.id] && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-destructive mt-2", children: errors[f.id] })
      ] }, f.id)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "text-[10px] uppercase tracking-widest text-muted-foreground block mb-2", children: "Project Brief" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            id: "message",
            name: "message",
            rows: 5,
            required: true,
            className: "w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-sm resize-none transition-colors"
          }
        ),
        errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-destructive mt-2", children: errors.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "submit",
          disabled: sending,
          className: "w-full px-8 py-4 bg-accent text-accent-foreground font-bold uppercase text-xs tracking-widest hover:invert transition-all duration-300 mt-4 disabled:opacity-60 disabled:cursor-not-allowed",
          children: [
            sending ? "Transmitting..." : "Transmit Brief",
            " ",
            "->"
          ]
        }
      ),
      submitError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-destructive mt-2 text-center", children: submitError })
    ] }) }) })
  ] }) });
}
function FinalCta() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 px-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-4xl mx-auto text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block px-4 py-2 bg-accent/10 text-accent text-[10px] uppercase tracking-widest mb-10", children: "Ready to deploy?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-5xl md:text-7xl lg:text-8xl font-display uppercase mb-8 tracking-tight leading-none", children: [
      "Ready to build your ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "next" }),
      " digital product?"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-12 max-w-xl mx-auto", children: "Let's discuss your idea and turn it into reality. Two ways to get started." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "p-8 border border-border hover:border-accent text-left transition-all group block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground uppercase tracking-widest mb-2", children: "Option A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold uppercase mb-4", children: "Schedule a Call" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-6", children: "A 30-minute strategy session with a senior engineer." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-accent text-xs uppercase tracking-widest font-bold", children: [
          "Book Call ",
          "->"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "p-8 border border-border hover:border-accent text-left transition-all group block bg-white/[0.02]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground uppercase tracking-widest mb-2", children: "Option B" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold uppercase mb-4", children: "Get a Quote" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-6", children: "Written estimate within one business day." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-accent text-xs uppercase tracking-widest font-bold", children: [
          "Request Quote ",
          "->"
        ] })
      ] })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 grid-lines pointer-events-none opacity-30 z-0", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrustedBy, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStudies, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCta, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] })
  ] });
}
export {
  Index as component
};
