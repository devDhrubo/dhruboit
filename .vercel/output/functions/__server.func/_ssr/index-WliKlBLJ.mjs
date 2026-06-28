import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as ThemeToggle, u as usePortfolioItems } from "./ThemeToggle-BTaRGtvI.mjs";
import { F as Footer, R as Reveal } from "./Footer-v3iy5PqC.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion, A as AnimatePresence, u as useInView, a as animate } from "../_libs/framer-motion.mjs";
import { A as ArrowUpRight, Z as Zap, f as Cpu, g as Search, L as Layers, B as Brain, h as LifeBuoy, b as Star, c as CircleCheck, M as Mail, i as MapPin, j as MessageCircle, k as Check } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "./router-CHxHafPH.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-3 group", "aria-label": "Dhrubo IT home", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.png", alt: "Dhrubo IT Logo", className: "size-12 object-contain transition-transform group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl font-display tracking-widest", children: [
            "DHRUBO",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent italic", children: "_" }),
            "IT"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-medium", children: [
            links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "hover:text-accent transition-colors", children: l.label }, l.href)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "text-accent hover:opacity-80 transition", children: "[ Contact ]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {})
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
const logos = [
  { name: "TAJ INTERNATIONAL" },
  { name: "UNIQUE TELECOM" },
  { name: "SAFE PHARMA" },
  { name: "ACE HONOR LTD" }
];
function TrustedBy() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6 border-b border-border bg-white/[0.005]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center mb-10", children: "Trusted by Industry Leaders & Enterprises" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-5xl mx-auto", children: logos.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "group border border-border/60 px-6 py-4 text-center hover:border-accent transition-all duration-300 bg-background/50 backdrop-blur-sm cursor-default min-w-[180px]",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm font-display tracking-[0.2em] text-foreground/80 group-hover:text-accent transition-colors", children: l.name })
      },
      l.name
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-4 font-mono font-bold", children: "[ 01 ] Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-display uppercase", children: "Technical Capabilities" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground max-w-xs md:text-right font-mono", children: "Advanced engineering solutions focused on high-performance architecture and cognitive automation." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border bg-background", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Reveal,
      {
        delay: i % 3 * 0.08,
        className: "p-10 border-r border-b border-border group hover:bg-accent/5 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `size-8 mb-6 border flex items-center justify-center text-[10px] font-mono font-bold ${i === 0 ? "border-accent text-accent bg-accent/10" : "border-border text-muted-foreground"}`,
              children: s.n
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold uppercase mb-4 group-hover:text-accent transition-colors", children: s.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-8 leading-relaxed", children: s.d }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-[10px] font-mono uppercase tracking-wider space-y-2 text-muted-foreground font-semibold", children: s.b.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "- ",
            x
          ] }, x)) })
        ]
      },
      s.n
    )) })
  ] }) });
}
const cats = ["All", "Web Apps", "Mobile Apps", "AI Products", "SaaS", "E-commerce"];
function Projects() {
  const [cat, setCat] = reactExports.useState("All");
  const allItems = usePortfolioItems();
  const projects = allItems.map((item) => ({
    id: item.id,
    slug: item.slug,
    title: item.client,
    industry: item.industry,
    cat: item.category,
    desc: item.summary,
    tech: item.stack,
    img: item.hero,
    result: item.result,
    featured: item.featured !== false
  })).filter((p) => p.featured);
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
          className: `px-4 py-2 text-[10px] uppercase tracking-widest border transition-colors ${cat === c ? "border-accent text-accent bg-accent/10 font-bold" : "border-border text-muted-foreground hover:text-foreground"}`,
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-accent mb-4 tracking-widest font-mono font-bold", children: [
              "CASE_STUDY_",
              p.id,
              " // ",
              p.industry.toUpperCase()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-4xl font-display uppercase mb-4", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6 leading-relaxed", children: p.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 bg-muted border border-border/80 text-foreground text-[10px] font-mono tracking-widest", children: t.toUpperCase() }, t)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pt-6 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", children: [
                "Result: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-bold", children: p.result })
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
      p.slug
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-border p-6 bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-2", children: "[ Archive ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-base", children: "Want the full write-up — problem, approach, build, outcomes?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/case-studies",
          className: "inline-flex items-center gap-3 px-5 py-3 bg-foreground text-background text-[10px] uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors font-bold",
          children: [
            "View all case studies ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4" })
          ]
        }
      )
    ] })
  ] }) });
}
function CaseStudies() {
  const allItems = usePortfolioItems();
  const studies = allItems.slice(0, 3).map((item) => ({
    n: item.id,
    client: item.client,
    challenge: item.challenge || item.summary,
    solution: item.solution || item.headline,
    stack: item.stack.slice(0, 4),
    outcome: item.metrics.slice(0, 3).map((m) => ({ k: m.label, v: m.value }))
  }));
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-accent tracking-widest mb-2 font-mono font-bold", children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-display uppercase mb-4", children: s.client }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-2 font-mono", children: "Challenge" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed mb-4 text-foreground/90", children: s.challenge }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-2 font-mono", children: "Solution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-foreground/90", children: s.solution })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${i % 2 === 1 ? "md:order-1 md:pr-12 md:text-right" : "md:pl-12"} pl-20 md:pl-12`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-background/80 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-4 font-mono", children: "Stack" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex flex-wrap gap-2 mb-6 ${i % 2 === 1 ? "md:justify-end" : ""}`, children: s.stack.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 bg-muted border border-border/80 text-[10px] font-mono tracking-widest text-foreground", children: t }, t)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 pt-6 border-t border-border", children: s.outcome.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: i % 2 === 1 ? "md:text-right" : "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display text-accent", children: o.v }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", children: o.k })
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "process", className: "py-24 md:py-32 px-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-4 font-mono font-bold", children: "[ 04 ] Process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-display uppercase", children: "From signal to shipped" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { as: "div", delay: i * 0.06, className: "bg-background p-8 group hover:bg-accent/5 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-accent tracking-widest font-mono font-bold", children: [
          "STEP_",
          s.n
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-display text-muted-foreground group-hover:text-accent transition-colors", children: s.n })
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-4 font-mono font-bold", children: "[ 05 ] Why Dhrubo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-display uppercase", children: "Engineered for trust" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border bg-background", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i % 3 * 0.08, className: "p-10 border-r border-b border-border group hover:bg-accent/5 transition", children: [
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
  {
    name: "Engr. Tariqul Islam",
    role: "Managing Director",
    company: "TAJ INTERNATIONAL",
    badge: "TI",
    quote: "Dhrubo IT modernized our core operational systems and enterprise software pipeline. Their technical precision, architectural depth, and execution speed are outstanding."
  },
  {
    name: "Tanvir Ahmed",
    role: "Head of Operations & Infra",
    company: "UNIQUE TELECOM",
    badge: "UT",
    quote: "The real-time telemetry dashboard and high-throughput web portal engineered by Dhrubo IT allowed us to scale service delivery with zero downtime during peak network loads."
  },
  {
    name: "Dr. Mahfuzur Rahman",
    role: "Chief Information Officer",
    company: "SAFE PHARMA",
    badge: "SP",
    quote: "Security, auditability, and data compliance were critical for our supply chain management platform. Dhrubo IT delivered a rock-solid, type-safe architecture on schedule."
  },
  {
    name: "Alex",
    role: "CEO",
    company: "ACE HONOR LTD",
    badge: "AH",
    quote: "Working with Dhrubo IT was an excellent experience. They built our Shopify store exactly as we envisioned, with a beautiful, modern, and user-friendly design. The team was professional, responsive, and paid attention to every detail, from product pages to mobile optimization."
  }
];
function Testimonials() {
  const [i, setI] = reactExports.useState(0);
  const t = items[i];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 px-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-4", children: "[ 07 ] Testimonials" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-display uppercase", children: "Client & Partner Feedback" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-background/60 backdrop-blur-sm p-8 md:p-16 relative min-h-[340px] shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.figure,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -16 },
          transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 fill-accent text-accent" }, k)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-[9px] font-mono uppercase tracking-widest", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-3" }),
                " Verified Client"
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-2xl md:text-3xl font-display uppercase leading-tight mb-8", children: [
              '"',
              t.quote,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "flex items-center gap-4 pt-6 border-t border-border/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 bg-accent/10 border-2 border-accent text-accent flex items-center justify-center font-display text-xl font-bold tracking-widest shrink-0", children: t.badge }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold uppercase tracking-widest text-foreground", children: t.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-widest text-accent font-mono", children: [
                  t.role,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "//" }),
                  " ",
                  t.company
                ] })
              ] })
            ] })
          ]
        },
        t.name
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mt-10", children: items.map((it, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setI(k),
          "aria-label": `Show testimonial for ${it.company}`,
          className: `h-1.5 transition-all cursor-pointer ${k === i ? "w-12 bg-accent" : "w-6 bg-border hover:bg-muted-foreground"}`
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
    {
      setSubmitError("Email service is not configured. Please email us directly.");
      return;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-24 md:py-32 px-6 border-t border-border bg-white/[0.01]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-4", children: "[ 10 ] Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-6xl font-display uppercase mb-8 leading-none", children: "Start the conversation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-12 max-w-md leading-relaxed", children: "Tell us about your product, your timeline, and where you're stuck. We respond within one business day." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-6", children: [
        { i: Mail, l: "Email", v: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@dhruboit.tech", className: "hover:text-accent transition-colors", children: "hello@dhruboit.tech" }) },
        { i: MapPin, l: "Operations", v: "Remote — EU, US, APAC" },
        { i: MessageCircle, l: "Book a 1-on-1 Meeting", v: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-accent hover:underline flex items-center gap-1", target: "_blank", rel: "noopener noreferrer", href: "https://calendly.com/hello-dhruboit/30min", children: "Click Here to Book" }) }
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen text-foreground relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
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
  ] }) });
}
export {
  Index as component
};
