import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { W as Wrench, F as FolderKanban, C as Cog, L as Layers, A as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-DQCDx_E3.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const items = [
  { href: "#services", label: "Services", Icon: Wrench },
  { href: "#projects", label: "Work", Icon: FolderKanban },
  { href: "#process", label: "Process", Icon: Cog },
  { href: "#stack", label: "Stack", Icon: Layers },
  { href: "#contact", label: "Contact", Icon: ArrowUpRight, accent: true }
];
const sectionIds = items.map((i) => i.href.slice(1));
function MobileBottomNav() {
  const [active, setActive] = reactExports.useState("services");
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const targets = sectionIds.map((id) => document.getElementById(id)).filter((el) => el !== null);
    if (targets.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "nav",
    {
      "aria-label": "Mobile section navigation",
      className: "fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-border bg-background/85 backdrop-blur-md pb-[env(safe-area-inset-bottom)]",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-5", children: items.map((it) => {
        const isActive = active === it.href.slice(1);
        return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: it.href,
            "aria-current": isActive ? "page" : void 0,
            className: `flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] uppercase tracking-widest transition active:scale-95 ${it.accent ? "text-accent" : isActive ? "text-accent" : "text-muted-foreground hover:text-foreground"}`,
            children: [
              isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  "aria-hidden": true,
                  className: "absolute top-0 left-1/2 -translate-x-1/2 size-1 rounded-full bg-accent"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(it.Icon, { className: "size-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: it.label })
            ]
          }
        ) }, it.href);
      }) })
    }
  );
}
const initialState = {
  theme: "dark",
  setTheme: () => null
};
const ThemeProviderContext = reactExports.createContext(initialState);
function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "dhruboit_theme",
  ...props
}) {
  const [theme, setTheme] = reactExports.useState(
    () => typeof window !== "undefined" ? localStorage.getItem(storageKey) || defaultTheme : defaultTheme
  );
  reactExports.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(theme);
  }, [theme]);
  const value = {
    theme,
    setTheme: (theme2) => {
      localStorage.setItem(storageKey, theme2);
      setTheme(theme2);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProviderContext.Provider, { ...props, value, children });
}
const useTheme = () => {
  const context = reactExports.useContext(ThemeProviderContext);
  if (context === void 0) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
function BackgroundCanvas() {
  const canvasRef = reactExports.useRef(null);
  const { theme } = useTheme();
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let scrollVelocity = 0;
    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    const mouse = { x: -1e3, y: -1e3, radius: 200 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    const particleCount = Math.min(Math.floor(width * height / 12e3), 85);
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 1e3 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: Math.random() * 0.5 + 0.2,
        radius: Math.random() * 1.8 + 1,
        baseAlpha: Math.random() * 0.5 + 0.3
      });
    }
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const prevScrollY = currentScrollY;
      currentScrollY += (targetScrollY - currentScrollY) * 0.08;
      scrollVelocity = (currentScrollY - prevScrollY) * 0.15;
      const isLight = document.documentElement.classList.contains("light");
      const primaryColor = isLight ? "0, 179, 134" : "0, 255, 194";
      const secondaryColor = isLight ? "99, 102, 241" : "129, 140, 248";
      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const scrollProgress = currentScrollY / maxScroll;
      const baseZoom = 1 + scrollProgress % 0.4 * 0.35 + Math.abs(scrollVelocity) * 0.02;
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.scale(baseZoom, baseZoom);
      ctx.translate(-width / 2, -height / 2);
      const gridSize = 50;
      const gridOffsetY = currentScrollY * 0.2 % gridSize;
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = isLight ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.03)";
      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = -gridSize; y < height + gridSize; y += gridSize) {
        ctx.moveTo(0, y + gridOffsetY);
        ctx.lineTo(width, y + gridOffsetY);
      }
      ctx.stroke();
      const projectedParticles = [];
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.z -= p.vz + scrollVelocity * 0.8;
        p.x += p.vx;
        p.y += p.vy;
        if (p.z <= 1) {
          p.z = 1e3;
          p.x = (Math.random() - 0.5) * width * 1.5;
          p.y = (Math.random() - 0.5) * height * 1.5;
        } else if (p.z > 1e3) {
          p.z = 1;
        }
        const fov = 400;
        const scale = fov / (fov + p.z);
        const projX = p.x * scale + width / 2;
        const projY = p.y * scale + height / 2;
        if (projX < -50 || projX > width + 50 || projY < -50 || projY > height + 50) {
          continue;
        }
        const dx = mouse.x - projX;
        const dy = mouse.y - projY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let alpha = p.baseAlpha * scale * (1 - p.z / 1e3);
        const currentRadius = p.radius * scale * 1.8;
        if (dist < mouse.radius) {
          alpha = Math.min(1, alpha + 0.5);
        }
        projectedParticles.push({ x: projX, y: projY, alpha, radius: currentRadius });
        ctx.beginPath();
        ctx.arc(projX, projY, Math.max(0.5, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${primaryColor}, ${alpha})`;
        ctx.shadowBlur = dist < mouse.radius ? 12 : 3;
        ctx.shadowColor = `rgba(${primaryColor}, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      for (let i = 0; i < projectedParticles.length; i++) {
        const p1 = projectedParticles[i];
        for (let j = i + 1; j < projectedParticles.length; j++) {
          const p2 = projectedParticles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 120;
          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.2 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = j % 2 === 0 ? `rgba(${primaryColor}, ${lineAlpha})` : `rgba(${secondaryColor}, ${lineAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref: canvasRef,
      className: "fixed inset-0 pointer-events-none z-0 transition-opacity duration-700",
      "aria-hidden": "true"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#080808" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Dhrubo IT" }
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/logo.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@400;500;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$5.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ThemeProvider, { defaultTheme: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundCanvas, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-20 md:pb-0 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MobileBottomNav, {})
    ] })
  ] });
}
const BASE_URL = "";
const Route$4 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$3 = () => import("./portfolio-admin-8ElX6YzI.mjs");
const Route$3 = createFileRoute("/portfolio-admin")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-WliKlBLJ.mjs");
const TITLE = "Dhrubo IT — Building Digital Products That Drive Growth";
const DESCRIPTION = "Dhrubo IT is a senior software studio engineering premium SaaS, AI-native systems, and modern web & mobile products for ambitious founders and enterprises.";
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: TITLE
    }, {
      name: "description",
      content: DESCRIPTION
    }, {
      property: "og:title",
      content: TITLE
    }, {
      property: "og:description",
      content: DESCRIPTION
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "/"
    }, {
      name: "twitter:title",
      content: TITLE
    }, {
      name: "twitter:description",
      content: DESCRIPTION
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Dhrubo IT",
        description: DESCRIPTION,
        url: "/",
        logo: "/logo.png",
        sameAs: ["https://linkedin.com/company/dhrubo-it"]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-Dz7C-lBl.mjs");
const Route$1 = createFileRoute("/case-studies/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("../_slug-D58KKHuI.mjs");
const Route = createFileRoute("/case-studies/$slug")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$4.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$5
});
const PortfolioAdminRoute = Route$3.update({
  id: "/portfolio-admin",
  path: "/portfolio-admin",
  getParentRoute: () => Route$5
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const CaseStudiesIndexRoute = Route$1.update({
  id: "/case-studies/",
  path: "/case-studies/",
  getParentRoute: () => Route$5
});
const CaseStudiesSlugRoute = Route.update({
  id: "/case-studies/$slug",
  path: "/case-studies/$slug",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  PortfolioAdminRoute,
  SitemapDotxmlRoute,
  CaseStudiesSlugRoute,
  CaseStudiesIndexRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  router as r,
  useTheme as u
};
