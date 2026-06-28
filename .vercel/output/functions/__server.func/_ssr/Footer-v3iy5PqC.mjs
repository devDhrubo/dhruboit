import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  ...rest
}) {
  const Comp = as === "section" ? motion.section : motion.div;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
      className,
      ...rest,
      children
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "py-12 px-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.png", alt: "Dhrubo IT Logo", className: "size-6 object-contain" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs tracking-widest font-bold", children: [
        "© 2026 DHRUBO IT ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-4 text-muted-foreground font-normal", children: "//" }),
        " ALL RIGHTS RESERVED"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-8 text-[10px] uppercase tracking-widest text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Terminal_v1.0.4" }) })
  ] }) });
}
export {
  Footer as F,
  Reveal as R
};
