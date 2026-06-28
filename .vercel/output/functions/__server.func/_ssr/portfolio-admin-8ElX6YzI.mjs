import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { T as Toaster, t as toast } from "../_libs/sonner.mjs";
import { u as usePortfolioItems, T as ThemeToggle, v as veridian, n as nexus, o as orbit, a as vault, r as resetPortfolioToDefault, s as savePortfolioItem, d as deletePortfolioItem } from "./ThemeToggle-BTaRGtvI.mjs";
import { S as Sparkles, R as RotateCcw, E as ExternalLink, a as LogOut, F as FolderKanban, b as Star, L as Layers, c as CircleCheck, P as Plus, d as SquarePen, T as Trash2, X, e as CirclePlus } from "../_libs/lucide-react.mjs";
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
const DEFAULT_PASSCODE = "DhruboIT@2026";
const PRESET_IMAGES = [{
  name: "Veridian (E-Commerce)",
  url: veridian
}, {
  name: "Nexus (Fintech)",
  url: nexus
}, {
  name: "Orbit (AI)",
  url: orbit
}, {
  name: "Vault (Mobile)",
  url: vault
}];
const PRESET_ACCENTS = [{
  name: "Emerald & Cyan",
  value: "from-emerald-400/30 to-cyan-500/20"
}, {
  name: "Indigo & Fuchsia",
  value: "from-indigo-400/30 to-fuchsia-500/20"
}, {
  name: "Amber & Rose",
  value: "from-amber-400/30 to-rose-500/20"
}, {
  name: "Sky & Violet",
  value: "from-sky-400/30 to-violet-500/20"
}];
function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = reactExports.useState(false);
  const [passcode, setPasscode] = reactExports.useState("");
  const [authError, setAuthError] = reactExports.useState(false);
  const items = usePortfolioItems();
  const [search, setSearch] = reactExports.useState("");
  const [selectedCategory, setSelectedCategory] = reactExports.useState("All");
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [editingItem, setEditingItem] = reactExports.useState(null);
  const [formData, setFormData] = reactExports.useState({});
  const [newStackTag, setNewStackTag] = reactExports.useState("");
  const [newServiceTag, setNewServiceTag] = reactExports.useState("");
  reactExports.useEffect(() => {
    const session = sessionStorage.getItem("dhruboit_admin_auth");
    if (session === "true") {
      setIsAuthenticated(true);
    }
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === DEFAULT_PASSCODE) {
      setIsAuthenticated(true);
      sessionStorage.setItem("dhruboit_admin_auth", "true");
      toast.success("Welcome back, Admin!");
    } else {
      setAuthError(true);
      toast.error("Invalid security passcode");
    }
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("dhruboit_admin_auth");
    toast.info("Logged out successfully");
  };
  const handleOpenAddModal = () => {
    const newId = `CS_0${items.length + 1}`;
    setEditingItem(null);
    setFormData({
      id: newId,
      slug: "",
      client: "",
      industry: "",
      category: "SaaS",
      headline: "",
      summary: "",
      challenge: "",
      solution: "",
      hero: veridian,
      accent: PRESET_ACCENTS[0].value,
      year: (/* @__PURE__ */ new Date()).getFullYear().toString(),
      services: ["Product Engineering", "UI/UX Architecture"],
      stack: ["React", "TypeScript", "Tailwind CSS"],
      metrics: [{
        value: "100%",
        label: "Satisfaction"
      }],
      chapters: [{
        title: "Challenge",
        body: "Describe the core challenge faced by the client."
      }, {
        title: "Solution",
        body: "Explain the architectural and product solution provided."
      }],
      result: "High Impact",
      featured: true
    });
    setIsModalOpen(true);
  };
  const handleOpenEditModal = (item) => {
    setEditingItem(item);
    setFormData({
      ...item
    });
    setIsModalOpen(true);
  };
  const handleSaveForm = (e) => {
    e.preventDefault();
    if (!formData.client || !formData.headline) {
      toast.error("Please fill in required fields (Title & Headline)");
      return;
    }
    const slug = formData.slug?.trim() || formData.client.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const completeItem = {
      id: formData.id || `CS_${Date.now()}`,
      slug,
      client: formData.client || "Untitled Project",
      industry: formData.industry || "Technology",
      category: formData.category || "SaaS",
      headline: formData.headline || "",
      summary: formData.summary || "",
      challenge: formData.challenge || "",
      solution: formData.solution || "",
      hero: formData.hero || veridian,
      accent: formData.accent || PRESET_ACCENTS[0].value,
      year: formData.year || "2026",
      services: formData.services || [],
      stack: formData.stack || [],
      metrics: formData.metrics || [],
      chapters: formData.chapters || [],
      result: formData.result || "Success",
      featured: formData.featured !== false
    };
    savePortfolioItem(completeItem);
    toast.success(editingItem ? "Portfolio item updated!" : "New portfolio item created!");
    setIsModalOpen(false);
  };
  const handleDelete = (item) => {
    if (confirm(`Are you sure you want to delete "${item.client}"?`)) {
      deletePortfolioItem(item.slug);
      toast.success(`Deleted "${item.client}"`);
    }
  };
  const handleToggleFeatured = (item) => {
    const updated = {
      ...item,
      featured: !item.featured
    };
    savePortfolioItem(updated);
    toast.success(`${item.client} is now ${updated.featured ? "Featured" : "Hidden from Homepage"}`);
  };
  const handleResetDefaults = () => {
    if (confirm("Reset all portfolio items back to initial demo dataset? Custom items will be lost.")) {
      resetPortfolioToDefault();
      toast.success("Portfolio store reset to initial seed data");
    }
  };
  const addStackTag = () => {
    if (!newStackTag.trim()) return;
    setFormData({
      ...formData,
      stack: [...formData.stack || [], newStackTag.trim()]
    });
    setNewStackTag("");
  };
  const removeStackTag = (tag) => {
    setFormData({
      ...formData,
      stack: (formData.stack || []).filter((t) => t !== tag)
    });
  };
  const updateMetric = (index, field, val) => {
    const metrics = [...formData.metrics || []];
    metrics[index] = {
      ...metrics[index],
      [field]: val
    };
    setFormData({
      ...formData,
      metrics
    });
  };
  const addMetric = () => {
    setFormData({
      ...formData,
      metrics: [...formData.metrics || [], {
        value: "+50%",
        label: "Growth"
      }]
    });
  };
  const removeMetric = (index) => {
    setFormData({
      ...formData,
      metrics: (formData.metrics || []).filter((_, i) => i !== index)
    });
  };
  const updateChapter = (index, field, val) => {
    const chapters = [...formData.chapters || []];
    chapters[index] = {
      ...chapters[index],
      [field]: val
    };
    setFormData({
      ...formData,
      chapters
    });
  };
  const addChapter = () => {
    setFormData({
      ...formData,
      chapters: [...formData.chapters || [], {
        title: "New Chapter",
        body: "Chapter contents..."
      }]
    });
  };
  const removeChapter = (index) => {
    setFormData({
      ...formData,
      chapters: (formData.chapters || []).filter((_, i) => i !== index)
    });
  };
  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.client.toLowerCase().includes(search.toLowerCase()) || item.industry.toLowerCase().includes(search.toLowerCase()) || item.stack.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#080808] text-foreground flex items-center justify-center px-4 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-right", theme: "dark" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 grid-lines pointer-events-none opacity-20", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full max-w-md bg-background/90 border border-border p-8 rounded-none shadow-2xl backdrop-blur-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.png", alt: "Dhrubo IT Logo", className: "size-16 object-contain mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-accent mb-2 font-mono", children: "[ ACCESS CONTROL ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display uppercase tracking-wider", children: "Admin Portal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "Enter master passcode to manage dynamic portfolio content" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase tracking-widest text-muted-foreground mb-2", children: "Security Passcode" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: passcode, onChange: (e) => {
              setPasscode(e.target.value);
              setAuthError(false);
            }, placeholder: "Enter security passcode", className: `w-full bg-black/60 border ${authError ? "border-red-500 focus:ring-red-500" : "border-border focus:border-accent"} px-4 py-3 text-sm font-mono text-foreground focus:outline-none transition-colors` }),
            authError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-400 mt-2", children: "Incorrect security passcode." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest py-3 px-4 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-bold cursor-pointer", children: [
            "Authenticate System ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-6 border-t border-border/60 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-xs text-muted-foreground hover:text-accent transition-colors", children: "← Return to Main Website" }) })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#080808] text-foreground font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-right", theme: "dark" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 bg-background/90 border-b border-border backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 h-20 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.png", alt: "Dhrubo IT Logo", className: "size-10 object-contain" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-accent font-mono", children: "[ MANAGEMENT CONSOLE ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-display uppercase tracking-widest", children: [
            "DHRUBO",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "_" }),
            "IT PORTFOLIO ADMIN"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleResetDefaults, className: "px-4 py-2 border border-border hover:border-accent text-xs uppercase tracking-widest flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer", title: "Reset dataset to default demo portfolio", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "size-3.5" }),
          " Reset Demo"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", target: "_blank", className: "px-4 py-2 bg-white/5 border border-border hover:border-accent text-xs uppercase tracking-widest flex items-center gap-2 transition-colors", children: [
          "Live Site ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleLogout, className: "px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 text-xs uppercase tracking-widest flex items-center gap-2 transition-colors cursor-pointer", children: [
          "Logout ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "size-3.5" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-7xl mx-auto px-6 py-10 space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border p-6 relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest font-mono mb-2", children: "Total Items" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-display text-foreground", children: items.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FolderKanban, { className: "absolute right-4 bottom-4 size-10 text-white/5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border p-6 relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest font-mono mb-2", children: "Featured on Homepage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-display text-accent", children: items.filter((i) => i.featured !== false).length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "absolute right-4 bottom-4 size-10 text-accent/10" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border p-6 relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest font-mono mb-2", children: "Total Story Chapters" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-display text-foreground", children: items.reduce((acc, i) => acc + (i.chapters?.length || 0), 0) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "absolute right-4 bottom-4 size-10 text-white/5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border p-6 relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent text-[10px] uppercase tracking-widest font-mono mb-2", children: "Active Categories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-display text-foreground", children: new Set(items.map((i) => i.category)).size }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "absolute right-4 bottom-4 size-10 text-white/5" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-background border border-border p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-2", children: ["All", "E-commerce", "SaaS", "AI Products", "Mobile Apps", "Web Apps"].map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedCategory(cat), className: `px-3 py-1.5 text-[10px] uppercase tracking-widest border transition-colors cursor-pointer ${selectedCategory === cat ? "bg-accent text-accent-foreground border-accent font-bold" : "border-border text-muted-foreground hover:text-foreground"}`, children: cat }, cat)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search by title or tech...", value: search, onChange: (e) => setSearch(e.target.value), className: "bg-black/60 border border-border px-4 py-2 text-xs font-mono focus:outline-none focus:border-accent w-full md:w-64" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleOpenAddModal, className: "px-5 py-2 bg-accent text-accent-foreground text-xs font-mono uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-opacity font-bold whitespace-nowrap cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4" }),
            " Add Project"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: filteredItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border overflow-hidden group hover:border-accent/60 transition-colors flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video overflow-hidden border-b border-border bg-black/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.hero, alt: item.client, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 bg-black/80 px-2 py-1 text-[9px] font-mono uppercase tracking-widest text-accent border border-border", children: [
              item.id,
              " // ",
              item.category
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleToggleFeatured(item), className: `absolute top-3 right-3 p-1.5 border backdrop-blur-md transition-colors cursor-pointer ${item.featured !== false ? "bg-accent/20 border-accent text-accent" : "bg-black/60 border-border text-muted-foreground hover:text-white"}`, title: item.featured !== false ? "Featured on homepage" : "Click to feature", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 fill-current" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display uppercase tracking-wide", children: item.client }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-muted-foreground border border-border px-2 py-0.5", children: item.year })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-accent font-mono mb-3", children: item.headline }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-4", children: item.summary }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-4", children: item.stack.map((tech) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 bg-white/5 border border-border text-[9px] font-mono uppercase tracking-widest", children: tech }, tech)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-white/2 border-t border-border flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-mono uppercase text-muted-foreground", children: [
            "Result: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-bold", children: item.result })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleOpenEditModal(item), className: "px-3 py-1.5 border border-border hover:border-accent text-xs uppercase font-mono flex items-center gap-1.5 transition-colors cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "size-3.5" }),
              " Edit"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleDelete(item), className: "px-3 py-1.5 border border-red-500/30 text-red-400 hover:bg-red-500/20 text-xs uppercase font-mono flex items-center gap-1.5 transition-colors cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-3.5" }),
              " Delete"
            ] })
          ] })
        ] })
      ] }, item.slug)) })
    ] }),
    isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 my-8 relative shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border pb-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-mono text-accent uppercase tracking-widest", children: [
            "[ ",
            editingItem ? "EDIT PORTFOLIO ITEM" : "CREATE NEW PORTFOLIO ITEM",
            " ]"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display uppercase", children: formData.client || "New Engagement" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsModalOpen(false), className: "p-2 text-muted-foreground hover:text-foreground cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-6" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSaveForm, className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase font-mono text-muted-foreground mb-2", children: "Client / Project Title *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: formData.client || "", onChange: (e) => setFormData({
              ...formData,
              client: e.target.value
            }), placeholder: "e.g. Acme Cloud", required: true, className: "w-full bg-black/60 border border-border px-4 py-2.5 text-xs font-mono focus:border-accent focus:outline-none" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase font-mono text-muted-foreground mb-2", children: "Slug (URL Identifier)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: formData.slug || "", onChange: (e) => setFormData({
              ...formData,
              slug: e.target.value
            }), placeholder: "acme-cloud (auto-generated if empty)", className: "w-full bg-black/60 border border-border px-4 py-2.5 text-xs font-mono focus:border-accent focus:outline-none" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase font-mono text-muted-foreground mb-2", children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: formData.category || "SaaS", onChange: (e) => setFormData({
              ...formData,
              category: e.target.value
            }), className: "w-full bg-black/60 border border-border px-4 py-2.5 text-xs font-mono focus:border-accent focus:outline-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "SaaS", children: "SaaS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "E-commerce", children: "E-commerce" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "AI Products", children: "AI Products" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Mobile Apps", children: "Mobile Apps" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Web Apps", children: "Web Apps" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase font-mono text-muted-foreground mb-2", children: "Industry" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: formData.industry || "", onChange: (e) => setFormData({
              ...formData,
              industry: e.target.value
            }), placeholder: "e.g. Fintech / SaaS", className: "w-full bg-black/60 border border-border px-4 py-2.5 text-xs font-mono focus:border-accent focus:outline-none" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase font-mono text-muted-foreground mb-2", children: "Year" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: formData.year || "", onChange: (e) => setFormData({
              ...formData,
              year: e.target.value
            }), placeholder: "2026", className: "w-full bg-black/60 border border-border px-4 py-2.5 text-xs font-mono focus:border-accent focus:outline-none" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase font-mono text-muted-foreground mb-2", children: "Result Badge Text" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: formData.result || "", onChange: (e) => setFormData({
              ...formData,
              result: e.target.value
            }), placeholder: "e.g. +47% conversion", className: "w-full bg-black/60 border border-border px-4 py-2.5 text-xs font-mono focus:border-accent focus:outline-none" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase font-mono text-muted-foreground mb-2", children: "Main Headline *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: formData.headline || "", onChange: (e) => setFormData({
            ...formData,
            headline: e.target.value
          }), placeholder: "e.g. Rebuilding a fashion retailer into a $12M/yr engine.", required: true, className: "w-full bg-black/60 border border-border px-4 py-2.5 text-xs font-mono focus:border-accent focus:outline-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase font-mono text-muted-foreground mb-2", children: "Brief Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, value: formData.summary || "", onChange: (e) => setFormData({
            ...formData,
            summary: e.target.value
          }), placeholder: "Overview of the project engagement...", className: "w-full bg-black/60 border border-border p-4 text-xs font-mono focus:border-accent focus:outline-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display uppercase text-accent", children: "[ Image & Aesthetic ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase font-mono text-muted-foreground mb-2", children: "Hero Image URL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: formData.hero || "", onChange: (e) => setFormData({
                ...formData,
                hero: e.target.value
              }), placeholder: "Image URL or preset", className: "w-full bg-black/60 border border-border px-4 py-2.5 text-xs font-mono focus:border-accent focus:outline-none mb-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-muted-foreground self-center", children: "Presets:" }),
                PRESET_IMAGES.map((img) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setFormData({
                  ...formData,
                  hero: img.url
                }), className: "px-2 py-1 border border-border text-[9px] font-mono hover:border-accent cursor-pointer", children: img.name }, img.name))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase font-mono text-muted-foreground mb-2", children: "Gradient Accent Theme" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: formData.accent || PRESET_ACCENTS[0].value, onChange: (e) => setFormData({
                ...formData,
                accent: e.target.value
              }), className: "w-full bg-black/60 border border-border px-4 py-2.5 text-xs font-mono focus:border-accent focus:outline-none", children: PRESET_ACCENTS.map((acc) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: acc.value, children: acc.name }, acc.name)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display uppercase text-accent", children: "[ Tech Stack & Services ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase font-mono text-muted-foreground mb-2", children: "Technologies Used" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: (formData.stack || []).map((tech) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-3 py-1 bg-white/5 border border-border text-xs font-mono flex items-center gap-2", children: [
              tech,
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeStackTag(tech), className: "hover:text-red-400 cursor-pointer", children: "×" })
            ] }, tech)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: newStackTag, onChange: (e) => setNewStackTag(e.target.value), onKeyDown: (e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addStackTag();
                }
              }, placeholder: "Add tech (e.g. Next.js, GraphQL) & press Enter", className: "bg-black/60 border border-border px-4 py-2 text-xs font-mono focus:border-accent focus:outline-none w-72" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: addStackTag, className: "px-3 py-2 bg-white/10 text-xs font-mono uppercase cursor-pointer hover:bg-white/20", children: "Add Tag" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display uppercase text-accent", children: "[ Key Metrics ]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: addMetric, className: "text-xs font-mono uppercase text-accent hover:underline flex items-center gap-1 cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "size-3.5" }),
              " Add Metric"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: (formData.metrics || []).map((metric, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black/40 border border-border p-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: metric.value, onChange: (e) => updateMetric(idx, "value", e.target.value), placeholder: "+47%", className: "w-full bg-black border border-border px-3 py-1.5 text-xs font-mono text-accent focus:outline-none" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: metric.label, onChange: (e) => updateMetric(idx, "label", e.target.value), placeholder: "Label (e.g. Conversion)", className: "w-full bg-black border border-border px-3 py-1.5 text-xs font-mono focus:outline-none" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeMetric(idx), className: "text-muted-foreground hover:text-red-400 p-1 cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" }) })
          ] }, idx)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display uppercase text-accent", children: "[ Story Chapters ]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: addChapter, className: "text-xs font-mono uppercase text-accent hover:underline flex items-center gap-1 cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "size-3.5" }),
              " Add Chapter"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: (formData.chapters || []).map((chapter, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black/40 border border-border p-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: chapter.title, onChange: (e) => updateChapter(idx, "title", e.target.value), placeholder: "Chapter Title (e.g. Challenge)", className: "w-full bg-black border border-border px-3 py-1.5 text-xs font-mono font-bold text-foreground focus:outline-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeChapter(idx), className: "text-muted-foreground hover:text-red-400 p-1 cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, value: chapter.body, onChange: (e) => updateChapter(idx, "body", e.target.value), placeholder: "Detailed chapter narrative...", className: "w-full bg-black border border-border p-3 text-xs font-mono text-muted-foreground focus:outline-none" })
          ] }, idx)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-6 flex items-center justify-end gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setIsModalOpen(false), className: "px-6 py-3 border border-border text-xs font-mono uppercase tracking-widest hover:border-accent transition-colors cursor-pointer", children: "Cancel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "px-8 py-3 bg-accent text-accent-foreground text-xs font-mono uppercase tracking-widest font-bold hover:opacity-90 transition-opacity cursor-pointer", children: editingItem ? "Save Changes" : "Create Item" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  AdminPage as component
};
