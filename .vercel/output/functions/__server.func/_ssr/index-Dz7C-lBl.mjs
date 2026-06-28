import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useCaseStudies } from "./case-studies-9DHTy_FO.mjs";
import { R as Reveal, F as Footer } from "./Footer-v3iy5PqC.mjs";
import { T as ThemeToggle } from "./ThemeToggle-BTaRGtvI.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowUpRight, l as ArrowLeft } from "../_libs/lucide-react.mjs";
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
import "./router-CHxHafPH.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const filters = ["All", "E-commerce", "SaaS", "AI Products", "Mobile Apps"];
function PageNav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "sticky top-0 z-50 border-b border-border backdrop-blur-md bg-background/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", "aria-label": "Dhrubo IT home", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.png", alt: "Dhrubo IT Logo", className: "size-8 object-contain transition-transform group-hover:scale-105" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl font-display tracking-widest", children: [
        "DHRUBO",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent italic", children: "_" }),
        "IT"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "hover:text-accent transition-colors flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-3" }),
          " Home"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "contact", className: "text-accent hover:opacity-80 transition", children: "[ Contact ]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {})
    ] })
  ] }) });
}
function CaseStudiesIndex() {
  const caseStudies = useCaseStudies();
  const [active, setActive] = reactExports.useState("All");
  const list = active === "All" ? caseStudies : caseStudies.filter((c) => c.category === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "top", className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-24 md:pt-32 pb-16 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-4", children: "[ Index // Case Studies ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-6xl font-display uppercase max-w-4xl", children: "The work, in detail." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed", children: "Four products we shipped end-to-end. Each one was a real engagement with a real team — not a demo reel, not a concept. Click through for the full story: the problem, the approach, the build, and the numbers." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 border-y border-border py-4", children: [
        filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(f), className: `px-4 py-2 text-[10px] uppercase tracking-widest border transition-colors ${active === f ? "bg-accent text-accent-foreground border-accent" : "border-border hover:border-accent/60 hover:text-accent"}`, children: f }, f)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto text-[10px] uppercase tracking-widest text-muted-foreground self-center", children: [
          String(list.length).padStart(2, "0"),
          " / ",
          String(caseStudies.length).padStart(2, "0"),
          " projects"
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, className: "grid grid-cols-1 md:grid-cols-2 gap-px bg-border", children: list.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.article, { layout: true, initial: {
      opacity: 0,
      y: 24
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: 12
    }, transition: {
      duration: 0.45,
      ease: "easeOut"
    }, className: "group relative bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-studies/$slug", params: {
      slug: c.slug
    }, className: "block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105", style: {
          backgroundImage: `url(${c.hero})`
        }, "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${c.accent} mix-blend-overlay`, "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 text-[10px] uppercase tracking-widest text-white/90", children: [
          "[",
          c.id,
          "]"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 text-[10px] uppercase tracking-widest text-white/90", children: c.year })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] uppercase tracking-widest text-accent mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.industry }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-display uppercase mb-3 leading-tight", children: c.client }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-6", children: c.summary }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 border-t border-border pt-4 mb-6", children: c.metrics.slice(0, 3).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-display text-accent", children: m.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-widest text-muted-foreground", children: m.label })
        ] }, m.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-foreground group-hover:text-accent transition-colors", children: "Read the case study" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center size-9 border border-border group-hover:border-accent group-hover:text-accent transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" }) })
        ] })
      ] })
    ] }) }, c.slug)) }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 py-24 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-4", children: "[ CTA ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-5xl font-display uppercase", children: "Have a product you want shipped like this?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed md:max-w-md md:ml-auto mb-6", children: "We take on a small number of engagements each quarter. Tell us about the work and we will tell you whether we are the right team for it." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", hash: "contact", className: "inline-flex items-center gap-3 px-6 py-3 bg-accent text-accent-foreground text-[10px] uppercase tracking-widest hover:opacity-90 transition", children: [
          "Start a conversation ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  CaseStudiesIndex as component
};
