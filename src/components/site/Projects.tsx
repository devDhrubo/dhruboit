import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import veridian from "@/assets/project-veridian.jpg";
import nexus from "@/assets/project-nexus.jpg";
import orbit from "@/assets/project-orbit.jpg";
import vault from "@/assets/project-vault.jpg";

type Cat = "All" | "Web Apps" | "Mobile Apps" | "AI Products" | "SaaS" | "E-commerce";

type Project = {
  id: string;
  slug: string;
  title: string;
  industry: string;
  cat: Exclude<Cat, "All">;
  desc: string;
  tech: string[];
  img: string;
  result: string;
};

const projects: Project[] = [
  { id: "04", slug: "veridian-store", title: "Veridian Store", industry: "E-Commerce", cat: "E-commerce", desc: "Headless commerce engine processing $12M+ annual revenue with 0.4s page loads.", tech: ["Next.js", "Supabase", "Stripe"], img: veridian, result: "+47% conversion" },
  { id: "03", slug: "nexus-finance", title: "Nexus Finance", industry: "Fintech / SaaS", cat: "SaaS", desc: "Enterprise asset management platform with real-time portfolio rebalancing.", tech: ["React", "PostgreSQL", "Node.js"], img: nexus, result: "$50M AUM" },
  { id: "02", slug: "orbit-ai", title: "Orbit AI", industry: "AI Productivity", cat: "AI Products", desc: "RAG-powered knowledge assistant with custom agentic workflows for enterprise teams.", tech: ["OpenAI", "Pinecone", "TypeScript"], img: orbit, result: "70% time saved" },
  { id: "01", slug: "vault-mobile", title: "Vault Mobile", industry: "Mobile / Finance", cat: "Mobile Apps", desc: "Cross-platform mobile banking app with biometric security and instant transfers.", tech: ["React Native", "Firebase", "AWS"], img: vault, result: "4.9★ store rating" },
];

const cats: Cat[] = ["All", "Web Apps", "Mobile Apps", "AI Products", "SaaS", "E-commerce"];

export function Projects() {
  const [cat, setCat] = useState<Cat>("All");
  const filtered = cat === "All" ? projects : projects.filter((p) => p.cat === cat);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
          <div>
            <div className="text-accent text-[10px] uppercase tracking-widest mb-4">[ 02 ] Featured Work</div>
            <h2 className="text-4xl md:text-5xl font-display uppercase">
              Selected <span className="text-accent">Outputs</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 text-[10px] uppercase tracking-widest border transition-colors ${
                  cat === c ? "border-accent text-accent bg-accent/5" : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-background group relative overflow-hidden"
              >
                <div className="aspect-16/10 overflow-hidden border-b border-border">
                  <img
                    src={p.img}
                    alt={`${p.title} — ${p.industry}`}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div className="text-[10px] text-accent mb-4 tracking-widest">
                    CASE_STUDY_{p.id} // {p.industry.toUpperCase()}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display uppercase mb-4">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/5 text-[10px] tracking-widest">
                        {t.toUpperCase()}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-border">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Result: <span className="text-accent">{p.result}</span>
                    </span>
                    <Link
                      to="/case-studies/$slug"
                      params={{ slug: p.slug }}
                      className="group/link inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold border-b border-accent pb-1 hover:text-accent transition-colors"
                    >
                      Read case study
                      <ArrowUpRight className="size-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <Reveal className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-border p-6">
          <div>
            <div className="text-accent text-[10px] uppercase tracking-widest mb-2">[ Archive ]</div>
            <p className="text-sm md:text-base">
              Want the full write-up — problem, approach, build, outcomes?
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-3 px-5 py-3 bg-foreground text-background text-[10px] uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            View all case studies <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
