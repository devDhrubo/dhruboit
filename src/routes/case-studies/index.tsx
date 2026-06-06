import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";
import { Reveal } from "@/components/site/Reveal";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/case-studies/")({
  component: CaseStudiesIndex,
});

const filters: Array<CaseStudy["category"] | "All"> = [
  "All",
  "E-commerce",
  "SaaS",
  "AI Products",
  "Mobile Apps",
];

function PageNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border backdrop-blur-md bg-background/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-display tracking-widest" aria-label="Dhrubo IT home">
          DHRUBO<span className="text-accent italic">_</span>IT
        </Link>
        <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-medium">
          <Link to="/" className="hover:text-accent transition-colors flex items-center gap-2">
            <ArrowLeft className="size-3" /> Home
          </Link>
          <Link to="/" hash="contact" className="text-accent hover:opacity-80 transition">
            [ Contact ]
          </Link>
        </div>
      </div>
    </nav>
  );
}

function CaseStudiesIndex() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const list = active === "All" ? caseStudies : caseStudies.filter((c) => c.category === active);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <PageNav />

      <section className="pt-24 md:pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-accent text-[10px] uppercase tracking-widest mb-4">[ Index // Case Studies ]</div>
            <h1 className="text-4xl md:text-6xl font-display uppercase max-w-4xl">
              The work, in detail.
            </h1>
            <p className="mt-6 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
              Four products we shipped end-to-end. Each one was a real engagement with a real team —
              not a demo reel, not a concept. Click through for the full story: the problem, the
              approach, the build, and the numbers.
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <div className="flex flex-wrap gap-2 border-y border-border py-4">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-4 py-2 text-[10px] uppercase tracking-widest border transition-colors ${
                    active === f
                      ? "bg-accent text-accent-foreground border-accent"
                      : "border-border hover:border-accent/60 hover:text-accent"
                  }`}
                >
                  {f}
                </button>
              ))}
              <div className="ml-auto text-[10px] uppercase tracking-widest text-muted-foreground self-center">
                {String(list.length).padStart(2, "0")} / {String(caseStudies.length).padStart(2, "0")} projects
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border"
            >
              {list.map((c) => (
                <motion.article
                  layout
                  key={c.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="group relative bg-background"
                >
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: c.slug }}
                    className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${c.hero})` }}
                        aria-hidden
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${c.accent} mix-blend-overlay`} aria-hidden />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" aria-hidden />
                      <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-white/90">
                        [{c.id}]
                      </div>
                      <div className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-white/90">
                        {c.year}
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-accent mb-3">
                        <span>{c.industry}</span>
                        <span>{c.category}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-display uppercase mb-3 leading-tight">
                        {c.client}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {c.summary}
                      </p>

                      <div className="grid grid-cols-3 gap-4 border-t border-border pt-4 mb-6">
                        {c.metrics.slice(0, 3).map((m) => (
                          <div key={m.label}>
                            <div className="text-xl font-display text-accent">{m.value}</div>
                            <div className="text-[9px] uppercase tracking-widest text-muted-foreground">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-widest text-foreground group-hover:text-accent transition-colors">
                          Read the case study
                        </span>
                        <span className="inline-flex items-center justify-center size-9 border border-border group-hover:border-accent group-hover:text-accent transition-colors">
                          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <div className="text-accent text-[10px] uppercase tracking-widest mb-4">[ CTA ]</div>
            <h3 className="text-3xl md:text-5xl font-display uppercase">
              Have a product you want shipped like this?
            </h3>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-muted-foreground leading-relaxed md:max-w-md md:ml-auto mb-6">
              We take on a small number of engagements each quarter. Tell us about the work and we
              will tell you whether we are the right team for it.
            </p>
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-accent-foreground text-[10px] uppercase tracking-widest hover:opacity-90 transition"
            >
              Start a conversation <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
