import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "./Reveal";
import { Plus } from "lucide-react";

const faqs = [
  { q: "How is pricing structured?", a: "Fixed-scope projects start at $15k. Ongoing engagements run on monthly retainers (typically $20–60k/month) sized to the team you need." },
  { q: "How long does a typical project take?", a: "MVPs: 4–8 weeks. Full SaaS builds: 10–16 weeks. We ship weekly, so you see value from week one." },
  { q: "Do you offer maintenance after launch?", a: "Yes. Every build includes 30 days of post-launch support. Most clients continue on a retainer with SLA-backed monitoring." },
  { q: "How are revisions handled?", a: "Unlimited revisions within scope. Major scope changes are quoted transparently before any work begins." },
  { q: "Who owns the code and stack choices?", a: "You own 100% of the code and IP. We recommend the modern, boring stack — React, Next.js, Postgres, Vercel — unless a constraint requires otherwise." },
  { q: "Can you work with our existing team?", a: "Absolutely. We embed with internal teams via Slack, Linear, and your repos. We're additive, not replacement." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <Reveal className="mb-12">
          <div className="text-accent text-[10px] uppercase tracking-widest mb-4">[ 09 ] FAQ</div>
          <h2 className="text-4xl md:text-5xl font-display uppercase">Common questions</h2>
        </Reveal>

        <div className="border-t border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-bold uppercase tracking-wider group-hover:text-accent transition-colors">
                    {f.q}
                  </span>
                  <Plus
                    className={`size-5 text-accent shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
