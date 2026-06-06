import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Discovery", d: "Workshops to align on business goals, users, and constraints." },
  { n: "02", t: "Strategy", d: "Roadmap, KPIs, and architecture decisions written down." },
  { n: "03", t: "Design", d: "Design system + high-fidelity prototypes you can click through." },
  { n: "04", t: "Development", d: "Type-safe, tested code shipped in weekly iterations." },
  { n: "05", t: "Testing", d: "Automated suites + manual QA on real devices and load tests." },
  { n: "06", t: "Deployment", d: "Zero-downtime release pipelines with rollback safety." },
  { n: "07", t: "Support", d: "SLA-backed monitoring, hot-patches, and growth iterations." },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 border-t border-border bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16">
          <div className="text-accent text-[10px] uppercase tracking-widest mb-4">[ 04 ] Process</div>
          <h2 className="text-4xl md:text-5xl font-display uppercase">From signal to shipped</h2>
        </Reveal>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {steps.map((s, i) => (
            <Reveal as="div" key={s.n} delay={i * 0.06} className="bg-background p-8 group hover:bg-white/[0.02] transition">
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-[10px] text-accent tracking-widest">STEP_{s.n}</span>
                <span className="text-4xl font-display text-muted-foreground/40 group-hover:text-accent transition-colors">
                  {s.n}
                </span>
              </div>
              <h3 className="text-xl font-bold uppercase mb-3">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
