import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Lock,
  Plus,
  Edit,
  Trash2,
  RotateCcw,
  ExternalLink,
  LogOut,
  CheckCircle2,
  Sparkles,
  Layers,
  Star,
  X,
  PlusCircle,
  FolderKanban,
} from "lucide-react";
import { toast, Toaster } from "sonner";
import {
  type PortfolioItem,
  type Metric,
  type Chapter,
  usePortfolioItems,
  savePortfolioItem,
  deletePortfolioItem,
  resetPortfolioToDefault,
} from "@/lib/portfolio-store";
import { ThemeToggle } from "@/components/site/ThemeToggle";

import veridian from "@/assets/project-veridian.jpg";
import nexus from "@/assets/project-nexus.jpg";
import orbit from "@/assets/project-orbit.jpg";
import vault from "@/assets/project-vault.jpg";

export const Route = createFileRoute("/portfolio-admin")({
  component: AdminPage,
});

const DEFAULT_PASSCODE = "DhruboIT@2026";
const PRESET_IMAGES = [
  { name: "Veridian (E-Commerce)", url: veridian },
  { name: "Nexus (Fintech)", url: nexus },
  { name: "Orbit (AI)", url: orbit },
  { name: "Vault (Mobile)", url: vault },
];

const PRESET_ACCENTS = [
  { name: "Emerald & Cyan", value: "from-emerald-400/30 to-cyan-500/20" },
  { name: "Indigo & Fuchsia", value: "from-indigo-400/30 to-fuchsia-500/20" },
  { name: "Amber & Rose", value: "from-amber-400/30 to-rose-500/20" },
  { name: "Sky & Violet", value: "from-sky-400/30 to-violet-500/20" },
];

function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState(false);

  const items = usePortfolioItems();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<PortfolioItem>>({});
  const [newStackTag, setNewStackTag] = useState("");
  const [newServiceTag, setNewServiceTag] = useState("");

  useEffect(() => {
    const session = sessionStorage.getItem("dhruboit_admin_auth");
    if (session === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
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
      year: new Date().getFullYear().toString(),
      services: ["Product Engineering", "UI/UX Architecture"],
      stack: ["React", "TypeScript", "Tailwind CSS"],
      metrics: [{ value: "100%", label: "Satisfaction" }],
      chapters: [
        { title: "Challenge", body: "Describe the core challenge faced by the client." },
        { title: "Solution", body: "Explain the architectural and product solution provided." },
      ],
      result: "High Impact",
      featured: true,
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item: PortfolioItem) => {
    setEditingItem(item);
    setFormData({ ...item });
    setIsModalOpen(true);
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.client || !formData.headline) {
      toast.error("Please fill in required fields (Title & Headline)");
      return;
    }

    const slug =
      formData.slug?.trim() ||
      formData.client
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

    const completeItem: PortfolioItem = {
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
      featured: formData.featured !== false,
    };

    savePortfolioItem(completeItem);
    toast.success(editingItem ? "Portfolio item updated!" : "New portfolio item created!");
    setIsModalOpen(false);
  };

  const handleDelete = (item: PortfolioItem) => {
    if (confirm(`Are you sure you want to delete "${item.client}"?`)) {
      deletePortfolioItem(item.slug);
      toast.success(`Deleted "${item.client}"`);
    }
  };

  const handleToggleFeatured = (item: PortfolioItem) => {
    const updated = { ...item, featured: !item.featured };
    savePortfolioItem(updated);
    toast.success(`${item.client} is now ${updated.featured ? "Featured" : "Hidden from Homepage"}`);
  };

  const handleResetDefaults = () => {
    if (confirm("Reset all portfolio items back to initial demo dataset? Custom items will be lost.")) {
      resetPortfolioToDefault();
      toast.success("Portfolio store reset to initial seed data");
    }
  };

  // Stack tag helpers
  const addStackTag = () => {
    if (!newStackTag.trim()) return;
    setFormData({ ...formData, stack: [...(formData.stack || []), newStackTag.trim()] });
    setNewStackTag("");
  };
  const removeStackTag = (tag: string) => {
    setFormData({ ...formData, stack: (formData.stack || []).filter((t) => t !== tag) });
  };

  // Service tag helpers
  const addServiceTag = () => {
    if (!newServiceTag.trim()) return;
    setFormData({ ...formData, services: [...(formData.services || []), newServiceTag.trim()] });
    setNewServiceTag("");
  };
  const removeServiceTag = (tag: string) => {
    setFormData({ ...formData, services: (formData.services || []).filter((s) => s !== tag) });
  };

  // Metric helpers
  const updateMetric = (index: number, field: keyof Metric, val: string) => {
    const metrics = [...(formData.metrics || [])];
    metrics[index] = { ...metrics[index], [field]: val };
    setFormData({ ...formData, metrics });
  };
  const addMetric = () => {
    setFormData({ ...formData, metrics: [...(formData.metrics || []), { value: "+50%", label: "Growth" }] });
  };
  const removeMetric = (index: number) => {
    setFormData({ ...formData, metrics: (formData.metrics || []).filter((_, i) => i !== index) });
  };

  // Chapter helpers
  const updateChapter = (index: number, field: keyof Chapter, val: string) => {
    const chapters = [...(formData.chapters || [])];
    chapters[index] = { ...chapters[index], [field]: val };
    setFormData({ ...formData, chapters });
  };
  const addChapter = () => {
    setFormData({
      ...formData,
      chapters: [...(formData.chapters || []), { title: "New Chapter", body: "Chapter contents..." }],
    });
  };
  const removeChapter = (index: number) => {
    setFormData({ ...formData, chapters: (formData.chapters || []).filter((_, i) => i !== index) });
  };

  // Filtering
  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.client.toLowerCase().includes(search.toLowerCase()) ||
      item.industry.toLowerCase().includes(search.toLowerCase()) ||
      item.stack.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#080808] text-foreground flex items-center justify-center px-4 relative overflow-hidden">
        <Toaster position="top-right" theme="dark" />
        <div className="fixed inset-0 grid-lines pointer-events-none opacity-20" aria-hidden />
        
        <div className="relative z-10 w-full max-w-md bg-background/90 border border-border p-8 rounded-none shadow-2xl backdrop-blur-xl">
          <div className="text-center mb-8">
            <img src="/logo.png" alt="Dhrubo IT Logo" className="size-16 object-contain mx-auto mb-4" />
            <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2 font-mono">
              [ ACCESS CONTROL ]
            </div>
            <h1 className="text-3xl font-display uppercase tracking-wider">Admin Portal</h1>
            <p className="text-xs text-muted-foreground mt-2">
              Enter master passcode to manage dynamic portfolio content
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                Security Passcode
              </label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setAuthError(false);
                }}
                placeholder="Enter security passcode"
                className={`w-full bg-black/60 border ${
                  authError ? "border-red-500 focus:ring-red-500" : "border-border focus:border-accent"
                } px-4 py-3 text-sm font-mono text-foreground focus:outline-none transition-colors`}
              />
              {authError && (
                <p className="text-xs text-red-400 mt-2">Incorrect security passcode.</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest py-3 px-4 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-bold cursor-pointer"
            >
              Authenticate System <Sparkles className="size-4" />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border/60 text-center">
            <Link to="/" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              ← Return to Main Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-foreground font-sans">
      <Toaster position="top-right" theme="dark" />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/90 border-b border-border backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Dhrubo IT Logo" className="size-10 object-contain" />
            <div>
              <div className="text-[10px] uppercase tracking-widest text-accent font-mono">
                [ MANAGEMENT CONSOLE ]
              </div>
              <h1 className="text-2xl font-display uppercase tracking-widest">
                DHRUBO<span className="text-accent">_</span>IT PORTFOLIO ADMIN
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={handleResetDefaults}
              className="px-4 py-2 border border-border hover:border-accent text-xs uppercase tracking-widest flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              title="Reset dataset to default demo portfolio"
            >
              <RotateCcw className="size-3.5" /> Reset Demo
            </button>

            <Link
              to="/"
              target="_blank"
              className="px-4 py-2 bg-white/5 border border-border hover:border-accent text-xs uppercase tracking-widest flex items-center gap-2 transition-colors"
            >
              Live Site <ExternalLink className="size-3.5" />
            </Link>

            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 text-xs uppercase tracking-widest flex items-center gap-2 transition-colors cursor-pointer"
            >
              Logout <LogOut className="size-3.5" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* Analytics Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-background border border-border p-6 relative overflow-hidden">
            <div className="text-accent text-[10px] uppercase tracking-widest font-mono mb-2">Total Items</div>
            <div className="text-4xl font-display text-foreground">{items.length}</div>
            <FolderKanban className="absolute right-4 bottom-4 size-10 text-white/5" />
          </div>
          <div className="bg-background border border-border p-6 relative overflow-hidden">
            <div className="text-accent text-[10px] uppercase tracking-widest font-mono mb-2">Featured on Homepage</div>
            <div className="text-4xl font-display text-accent">
              {items.filter((i) => i.featured !== false).length}
            </div>
            <Star className="absolute right-4 bottom-4 size-10 text-accent/10" />
          </div>
          <div className="bg-background border border-border p-6 relative overflow-hidden">
            <div className="text-accent text-[10px] uppercase tracking-widest font-mono mb-2">Total Story Chapters</div>
            <div className="text-4xl font-display text-foreground">
              {items.reduce((acc, i) => acc + (i.chapters?.length || 0), 0)}
            </div>
            <Layers className="absolute right-4 bottom-4 size-10 text-white/5" />
          </div>
          <div className="bg-background border border-border p-6 relative overflow-hidden">
            <div className="text-accent text-[10px] uppercase tracking-widest font-mono mb-2">Active Categories</div>
            <div className="text-4xl font-display text-foreground">
              {new Set(items.map((i) => i.category)).size}
            </div>
            <CheckCircle2 className="absolute right-4 bottom-4 size-10 text-white/5" />
          </div>
        </div>

        {/* Action Bar & Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-background border border-border p-4">
          <div className="flex flex-wrap items-center gap-2">
            {["All", "E-commerce", "SaaS", "AI Products", "Mobile Apps", "Web Apps"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-[10px] uppercase tracking-widest border transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-accent text-accent-foreground border-accent font-bold"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search by title or tech..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-black/60 border border-border px-4 py-2 text-xs font-mono focus:outline-none focus:border-accent w-full md:w-64"
            />
            <button
              onClick={handleOpenAddModal}
              className="px-5 py-2 bg-accent text-accent-foreground text-xs font-mono uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-opacity font-bold whitespace-nowrap cursor-pointer"
            >
              <Plus className="size-4" /> Add Project
            </button>
          </div>
        </div>

        {/* Portfolio Table / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.slug}
              className="bg-background border border-border overflow-hidden group hover:border-accent/60 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video overflow-hidden border-b border-border bg-black/40">
                  <img
                    src={item.hero}
                    alt={item.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 px-2 py-1 text-[9px] font-mono uppercase tracking-widest text-accent border border-border">
                    {item.id} // {item.category}
                  </div>
                  <button
                    onClick={() => handleToggleFeatured(item)}
                    className={`absolute top-3 right-3 p-1.5 border backdrop-blur-md transition-colors cursor-pointer ${
                      item.featured !== false
                        ? "bg-accent/20 border-accent text-accent"
                        : "bg-black/60 border-border text-muted-foreground hover:text-white"
                    }`}
                    title={item.featured !== false ? "Featured on homepage" : "Click to feature"}
                  >
                    <Star className="size-4 fill-current" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h2 className="text-2xl font-display uppercase tracking-wide">{item.client}</h2>
                    <span className="text-[10px] font-mono text-muted-foreground border border-border px-2 py-0.5">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-xs text-accent font-mono mb-3">{item.headline}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-white/5 border border-border text-[9px] font-mono uppercase tracking-widest"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white/2 border-t border-border flex items-center justify-between">
                <div className="text-[10px] font-mono uppercase text-muted-foreground">
                  Result: <span className="text-accent font-bold">{item.result}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenEditModal(item)}
                    className="px-3 py-1.5 border border-border hover:border-accent text-xs uppercase font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Edit className="size-3.5" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item)}
                    className="px-3 py-1.5 border border-red-500/30 text-red-400 hover:bg-red-500/20 text-xs uppercase font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Trash2 className="size-3.5" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Edit/Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-background border border-border w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 my-8 relative shadow-2xl">
            <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
              <div>
                <div className="text-[10px] font-mono text-accent uppercase tracking-widest">
                  [ {editingItem ? "EDIT PORTFOLIO ITEM" : "CREATE NEW PORTFOLIO ITEM"} ]
                </div>
                <h2 className="text-2xl font-display uppercase">
                  {formData.client || "New Engagement"}
                </h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <X className="size-6" />
              </button>
            </div>

            <form onSubmit={handleSaveForm} className="space-y-8">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[10px] uppercase font-mono text-muted-foreground mb-2">
                    Client / Project Title *
                  </label>
                  <input
                    type="text"
                    value={formData.client || ""}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    placeholder="e.g. Acme Cloud"
                    required
                    className="w-full bg-black/60 border border-border px-4 py-2.5 text-xs font-mono focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-mono text-muted-foreground mb-2">
                    Slug (URL Identifier)
                  </label>
                  <input
                    type="text"
                    value={formData.slug || ""}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="acme-cloud (auto-generated if empty)"
                    className="w-full bg-black/60 border border-border px-4 py-2.5 text-xs font-mono focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-mono text-muted-foreground mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category || "SaaS"}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value as PortfolioItem["category"] })
                    }
                    className="w-full bg-black/60 border border-border px-4 py-2.5 text-xs font-mono focus:border-accent focus:outline-none"
                  >
                    <option value="SaaS">SaaS</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="AI Products">AI Products</option>
                    <option value="Mobile Apps">Mobile Apps</option>
                    <option value="Web Apps">Web Apps</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[10px] uppercase font-mono text-muted-foreground mb-2">
                    Industry
                  </label>
                  <input
                    type="text"
                    value={formData.industry || ""}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    placeholder="e.g. Fintech / SaaS"
                    className="w-full bg-black/60 border border-border px-4 py-2.5 text-xs font-mono focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-mono text-muted-foreground mb-2">
                    Year
                  </label>
                  <input
                    type="text"
                    value={formData.year || ""}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    placeholder="2026"
                    className="w-full bg-black/60 border border-border px-4 py-2.5 text-xs font-mono focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-mono text-muted-foreground mb-2">
                    Result Badge Text
                  </label>
                  <input
                    type="text"
                    value={formData.result || ""}
                    onChange={(e) => setFormData({ ...formData, result: e.target.value })}
                    placeholder="e.g. +47% conversion"
                    className="w-full bg-black/60 border border-border px-4 py-2.5 text-xs font-mono focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              {/* Headline & Summary */}
              <div>
                <label className="block text-[10px] uppercase font-mono text-muted-foreground mb-2">
                  Main Headline *
                </label>
                <input
                  type="text"
                  value={formData.headline || ""}
                  onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
                  placeholder="e.g. Rebuilding a fashion retailer into a $12M/yr engine."
                  required
                  className="w-full bg-black/60 border border-border px-4 py-2.5 text-xs font-mono focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-mono text-muted-foreground mb-2">
                  Brief Summary
                </label>
                <textarea
                  rows={3}
                  value={formData.summary || ""}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  placeholder="Overview of the project engagement..."
                  className="w-full bg-black/60 border border-border p-4 text-xs font-mono focus:border-accent focus:outline-none"
                />
              </div>

              {/* Media & Styling */}
              <div className="border-t border-border pt-6 space-y-4">
                <div className="text-xs font-display uppercase text-accent">[ Image & Aesthetic ]</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase font-mono text-muted-foreground mb-2">
                      Hero Image URL
                    </label>
                    <input
                      type="text"
                      value={formData.hero || ""}
                      onChange={(e) => setFormData({ ...formData, hero: e.target.value })}
                      placeholder="Image URL or preset"
                      className="w-full bg-black/60 border border-border px-4 py-2.5 text-xs font-mono focus:border-accent focus:outline-none mb-3"
                    />
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] font-mono text-muted-foreground self-center">Presets:</span>
                      {PRESET_IMAGES.map((img) => (
                        <button
                          key={img.name}
                          type="button"
                          onClick={() => setFormData({ ...formData, hero: img.url })}
                          className="px-2 py-1 border border-border text-[9px] font-mono hover:border-accent cursor-pointer"
                        >
                          {img.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-mono text-muted-foreground mb-2">
                      Gradient Accent Theme
                    </label>
                    <select
                      value={formData.accent || PRESET_ACCENTS[0].value}
                      onChange={(e) => setFormData({ ...formData, accent: e.target.value })}
                      className="w-full bg-black/60 border border-border px-4 py-2.5 text-xs font-mono focus:border-accent focus:outline-none"
                    >
                      {PRESET_ACCENTS.map((acc) => (
                        <option key={acc.name} value={acc.value}>
                          {acc.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="border-t border-border pt-6 space-y-4">
                <div className="text-xs font-display uppercase text-accent">[ Tech Stack & Services ]</div>
                <div>
                  <label className="block text-[10px] uppercase font-mono text-muted-foreground mb-2">
                    Technologies Used
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {(formData.stack || []).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-border text-xs font-mono flex items-center gap-2"
                      >
                        {tech}
                        <button
                          type="button"
                          onClick={() => removeStackTag(tech)}
                          className="hover:text-red-400 cursor-pointer"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={newStackTag}
                      onChange={(e) => setNewStackTag(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addStackTag();
                        }
                      }}
                      placeholder="Add tech (e.g. Next.js, GraphQL) & press Enter"
                      className="bg-black/60 border border-border px-4 py-2 text-xs font-mono focus:border-accent focus:outline-none w-72"
                    />
                    <button
                      type="button"
                      onClick={addStackTag}
                      className="px-3 py-2 bg-white/10 text-xs font-mono uppercase cursor-pointer hover:bg-white/20"
                    >
                      Add Tag
                    </button>
                  </div>
                </div>
              </div>

              {/* Metrics Builder */}
              <div className="border-t border-border pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-display uppercase text-accent">[ Key Metrics ]</div>
                  <button
                    type="button"
                    onClick={addMetric}
                    className="text-xs font-mono uppercase text-accent hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <PlusCircle className="size-3.5" /> Add Metric
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(formData.metrics || []).map((metric, idx) => (
                    <div key={idx} className="bg-black/40 border border-border p-4 flex items-center gap-3">
                      <div className="w-1/3">
                        <input
                          type="text"
                          value={metric.value}
                          onChange={(e) => updateMetric(idx, "value", e.target.value)}
                          placeholder="+47%"
                          className="w-full bg-black border border-border px-3 py-1.5 text-xs font-mono text-accent focus:outline-none"
                        />
                      </div>
                      <div className="flex-1">
                        <input
                          type="text"
                          value={metric.label}
                          onChange={(e) => updateMetric(idx, "label", e.target.value)}
                          placeholder="Label (e.g. Conversion)"
                          className="w-full bg-black border border-border px-3 py-1.5 text-xs font-mono focus:outline-none"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeMetric(idx)}
                        className="text-muted-foreground hover:text-red-400 p-1 cursor-pointer"
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Story Chapters */}
              <div className="border-t border-border pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-display uppercase text-accent">[ Story Chapters ]</div>
                  <button
                    type="button"
                    onClick={addChapter}
                    className="text-xs font-mono uppercase text-accent hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <PlusCircle className="size-3.5" /> Add Chapter
                  </button>
                </div>

                <div className="space-y-4">
                  {(formData.chapters || []).map((chapter, idx) => (
                    <div key={idx} className="bg-black/40 border border-border p-4 space-y-3">
                      <div className="flex items-center justify-between gap-4">
                        <input
                          type="text"
                          value={chapter.title}
                          onChange={(e) => updateChapter(idx, "title", e.target.value)}
                          placeholder="Chapter Title (e.g. Challenge)"
                          className="w-full bg-black border border-border px-3 py-1.5 text-xs font-mono font-bold text-foreground focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => removeChapter(idx)}
                          className="text-muted-foreground hover:text-red-400 p-1 cursor-pointer"
                        >
                          <X className="size-4" />
                        </button>
                      </div>
                      <textarea
                        rows={3}
                        value={chapter.body}
                        onChange={(e) => updateChapter(idx, "body", e.target.value)}
                        placeholder="Detailed chapter narrative..."
                        className="w-full bg-black border border-border p-3 text-xs font-mono text-muted-foreground focus:outline-none"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="border-t border-border pt-6 flex items-center justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 border border-border text-xs font-mono uppercase tracking-widest hover:border-accent transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-accent text-accent-foreground text-xs font-mono uppercase tracking-widest font-bold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {editingItem ? "Save Changes" : "Create Item"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
