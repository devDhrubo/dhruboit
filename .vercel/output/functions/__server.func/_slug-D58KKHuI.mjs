import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { Q as notFound } from "./_libs/tanstack__router-core.mjs";
import { u as useCaseStudies } from "./_ssr/case-studies-9DHTy_FO.mjs";
import { R as Reveal, F as Footer } from "./_ssr/Footer-v3iy5PqC.mjs";
import { T as ThemeToggle } from "./_ssr/ThemeToggle-BTaRGtvI.mjs";
import { R as Route } from "./_ssr/router-CHxHafPH.mjs";
import { m as ArrowRight, A as ArrowUpRight, l as ArrowLeft } from "./_libs/lucide-react.mjs";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "./_libs/framer-motion.mjs";
import "./_libs/motion-dom.mjs";
import "./_libs/motion-utils.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-studies", className: "hover:text-accent transition-colors flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-3" }),
          " All case studies"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "contact", className: "text-accent hover:opacity-80 transition", children: "[ Contact ]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {})
    ] })
  ] }) });
}
function CaseStudyDetail() {
  const {
    slug
  } = Route.useParams();
  const caseStudies = useCaseStudies();
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) throw notFound();
  const idx = caseStudies.findIndex((c) => c.slug === study.slug);
  const others = caseStudies.filter((_, i) => i !== idx).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "top", className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pt-12 md:pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/case-studies", className: "hover:text-accent transition-colors", children: "Case studies" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: study.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: study.year })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-display uppercase max-w-5xl leading-[0.95]", children: study.headline })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border", children: study.metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-6 md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl md:text-5xl font-display text-accent", children: m.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[10px] uppercase tracking-widest text-muted-foreground", children: m.label })
      ] }, m.label)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 mt-16 md:mt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video md:aspect-21/9 overflow-hidden border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
        backgroundImage: `url(${study.hero})`
      }, "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-linear-to-br ${study.accent} mix-blend-overlay`, "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-white/80 mb-1", children: "Client" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl md:text-3xl font-display uppercase text-white", children: study.client })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-white/80 mb-1", children: "Industry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm md:text-base text-white", children: study.industry })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:sticky md:top-24 md:self-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-4", children: "[ Brief ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-display uppercase mb-6", children: "The short version" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-base text-muted-foreground leading-relaxed", children: study.summary }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-2", children: "Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: study.services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 border border-border text-[10px] uppercase tracking-widest", children: s }, s)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-2", children: "Stack" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: study.stack.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 bg-muted border border-border/80 text-foreground text-[10px] uppercase tracking-widest font-mono", children: t }, t)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-20", children: study.chapters.map((ch, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-4 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent text-xs font-display", children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-display uppercase tracking-widest", children: ch.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg leading-relaxed text-foreground/90 max-w-2xl", children: ch.body })
      ] }, ch.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 py-24 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-4", children: "[ Other work ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-display uppercase mb-12", children: "More case studies" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border", children: others.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-studies/$slug", params: {
        slug: o.slug
      }, className: "group bg-background p-6 hover:bg-white/2 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-16/10 bg-cover bg-center mb-6 border border-border", style: {
          backgroundImage: `url(${o.hero})`
        }, "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-widest text-accent mb-2", children: [
          "[",
          o.id,
          "] ",
          o.industry
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-display uppercase mb-3 group-hover:text-accent transition-colors", children: o.client }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-3", children: o.summary }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest", children: [
          "Read the case study ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3" })
        ] })
      ] }, o.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 py-24 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest mb-4", children: "[ Next ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-5xl font-display uppercase", children: "Want a build like this one?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed md:max-w-md md:ml-auto mb-6", children: "We run a small number of engagements each quarter. Reach out and we will tell you honestly whether we are the right team for the work." }),
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
  CaseStudyDetail as component
};
