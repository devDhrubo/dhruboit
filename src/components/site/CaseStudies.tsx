import { Reveal } from "./Reveal";
import { usePortfolioItems } from "@/lib/portfolio-store";

export function CaseStudies() {
  const allItems = usePortfolioItems();

  const studies = allItems.slice(0, 3).map((item) => ({
    n: item.id,
    client: item.client,
    challenge: item.challenge || item.summary,
    solution: item.solution || item.headline,
    stack: item.stack.slice(0, 4),
    outcome: item.metrics.slice(0, 3).map((m) => ({ k: m.label, v: m.value })),
  }));

  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16">
          <div className="text-accent text-[10px] uppercase tracking-widest mb-4">[ 03 ] Case Studies</div>
          <h2 className="text-4xl md:text-5xl font-display uppercase">Outcomes, not deliverables</h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" aria-hidden />
          <div className="space-y-16">
            {studies.map((s, i) => (
              <Reveal key={s.n} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div
                  className={`absolute left-8 md:left-1/2 top-2 size-3 -translate-x-1/2 bg-accent ${
                    i === 0 ? "ring-4 ring-accent/20" : ""
                  }`}
                  aria-hidden
                />
                <div className={`${i % 2 === 1 ? "md:order-2" : ""} pl-20 md:pl-0 md:pr-12 md:text-right`}>
                  <div className="text-[10px] text-accent tracking-widest mb-2 font-mono font-bold">{s.n}</div>
                  <h3 className="text-2xl md:text-3xl font-display uppercase mb-4">{s.client}</h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-mono">Challenge</p>
                  <p className="text-sm leading-relaxed mb-4 text-foreground/90">{s.challenge}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-mono">Solution</p>
                  <p className="text-sm leading-relaxed text-foreground/90">{s.solution}</p>
                </div>
                <div className={`${i % 2 === 1 ? "md:order-1 md:pr-12 md:text-right" : "md:pl-12"} pl-20 md:pl-12`}>
                  <div className="border border-border bg-background/80 p-6">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-mono">Stack</p>
                    <div className={`flex flex-wrap gap-2 mb-6 ${i % 2 === 1 ? "md:justify-end" : ""}`}>
                      {s.stack.map((t) => (
                        <span key={t} className="px-3 py-1 bg-muted border border-border/80 text-[10px] font-mono tracking-widest text-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                      {s.outcome.map((o) => (
                        <div key={o.k} className={i % 2 === 1 ? "md:text-right" : ""}>
                          <div className="text-2xl font-display text-accent">{o.v}</div>
                          <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">{o.k}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
