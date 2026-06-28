import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "./Reveal";
import { Star, CheckCircle2, Building2 } from "lucide-react";

const items = [
  {
    name: "Engr. Tariqul Islam",
    role: "Managing Director",
    company: "TAJ INTERNATIONAL",
    badge: "TI",
    quote: "Dhrubo IT modernized our core operational systems and enterprise software pipeline. Their technical precision, architectural depth, and execution speed are outstanding.",
  },
  {
    name: "Tanvir Ahmed",
    role: "Head of Operations & Infra",
    company: "UNIQUE TELECOM",
    badge: "UT",
    quote: "The real-time telemetry dashboard and high-throughput web portal engineered by Dhrubo IT allowed us to scale service delivery with zero downtime during peak network loads.",
  },
  {
    name: "Dr. Mahfuzur Rahman",
    role: "Chief Information Officer",
    company: "SAFE PHARMA",
    badge: "SP",
    quote: "Security, auditability, and data compliance were critical for our supply chain management platform. Dhrubo IT delivered a rock-solid, type-safe architecture on schedule.",
  },
  {
    name: "Alex",
    role: "CEO",
    company: "ACE HONOR LTD",
    badge: "AH",
    quote: "Working with Dhrubo IT was an excellent experience. They built our Shopify store exactly as we envisioned, with a beautiful, modern, and user-friendly design. The team was professional, responsive, and paid attention to every detail, from product pages to mobile optimization.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = items[i];

  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <Reveal className="mb-12">
          <div className="text-accent text-[10px] uppercase tracking-widest mb-4">[ 07 ] Testimonials</div>
          <h2 className="text-4xl md:text-5xl font-display uppercase">Client & Partner Feedback</h2>
        </Reveal>

        <div className="border border-border bg-background/60 backdrop-blur-sm p-8 md:p-16 relative min-h-[340px] shadow-xl">
          <AnimatePresence mode="wait">
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-[9px] font-mono uppercase tracking-widest">
                    <CheckCircle2 className="size-3" /> Verified Client
                  </span>
                </div>
              </div>

              <blockquote className="text-2xl md:text-3xl font-display uppercase leading-tight mb-8">
                "{t.quote}"
              </blockquote>

              <figcaption className="flex items-center gap-4 pt-6 border-t border-border/60">
                <div className="size-14 bg-accent/10 border-2 border-accent text-accent flex items-center justify-center font-display text-xl font-bold tracking-widest shrink-0">
                  {t.badge}
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-foreground">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-accent font-mono">
                    {t.role} <span className="text-muted-foreground">//</span> {t.company}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="flex items-center gap-2 mt-10">
            {items.map((it, k) => (
              <button
                key={it.name}
                onClick={() => setI(k)}
                aria-label={`Show testimonial for ${it.company}`}
                className={`h-1.5 transition-all cursor-pointer ${
                  k === i ? "w-12 bg-accent" : "w-6 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
