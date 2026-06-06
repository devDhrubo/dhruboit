import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "./Reveal";
import { Star } from "lucide-react";

const items = [
  { name: "Sarah Chen", role: "CEO, Veridian", quote: "Dhrubo IT shipped our headless storefront in six weeks. Conversion is up 47%. This is the partner I wish I'd found two years ago.", initial: "SC" },
  { name: "Marcus Rivera", role: "CTO, Nexus Finance", quote: "Engineering quality is genuinely elite. Their team thinks in systems, not tickets. Our platform now runs 10x the load with the same headcount.", initial: "MR" },
  { name: "Priya Sharma", role: "Head of Product, Orbit AI", quote: "The agentic workflow they built quietly replaced an entire support tier. Our NPS climbed 62 points in one quarter.", initial: "PS" },
  { name: "Daniel Okafor", role: "Founder, Vault", quote: "Premium design, ruthless execution. They treated our mobile MVP like their own product, not a contract.", initial: "DO" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = items[i];

  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <Reveal className="mb-12">
          <div className="text-accent text-[10px] uppercase tracking-widest mb-4">[ 07 ] Testimonials</div>
          <h2 className="text-4xl md:text-5xl font-display uppercase">Operator feedback</h2>
        </Reveal>

        <div className="border border-border p-8 md:p-16 relative min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-display uppercase leading-tight mb-8">
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <div className="size-12 border border-accent text-accent flex items-center justify-center font-display text-lg">
                  {t.initial}
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="flex gap-2 mt-10">
            {items.map((it, k) => (
              <button
                key={it.name}
                onClick={() => setI(k)}
                aria-label={`Show testimonial ${k + 1}`}
                className={`h-1 transition-all ${k === i ? "w-12 bg-accent" : "w-6 bg-border hover:bg-muted-foreground"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
