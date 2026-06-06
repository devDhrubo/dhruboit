import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

const stats = [
  { v: 70, s: "+", l: "Projects Completed" },
  { v: 98, s: "%", l: "Happy Clients" },
  { v: 2, s: "yrs", l: "Years Experience" },
  { v: 12, s: "", l: "Countries Served" },
];

export function Stats() {
  return (
    <section className="py-24 px-6 border-t border-border bg-white/[0.01]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.08} className="bg-background p-10 text-center">
            <div className="text-5xl md:text-7xl font-display text-accent mb-3">
              <Counter to={s.v} suffix={s.s} />
            </div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
