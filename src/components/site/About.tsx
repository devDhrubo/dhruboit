import { Reveal } from "./Reveal";

const pillars = [
  {
    l: "Mission",
    d: "Engineer software that moves real business metrics — revenue, retention, velocity — for founders who refuse average.",
  },
  {
    l: "Vision",
    d: "Be the studio the best founders quietly recommend to each other, wherever they're building from.",
  },
  {
    l: "Values",
    d: "Taste. Rigor. Ownership. No hand-offs. No mediocrity. No fluff — for any client, in any time zone.",
  },
  {
    l: "Craft",
    d: "A deep bench of senior engineers, designers and product thinkers — invested fully in every project we take on.",
  },
  {
    l: "Coverage",
    d: "Distributed across continents. Async-first, with real overlap hours for EU and US teams, and on-call for the rest.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16">
          <div className="text-accent text-[10px] uppercase tracking-widest mb-4">[ 08 ] About</div>
          <h2 className="text-4xl md:text-5xl font-display uppercase max-w-4xl">
            A senior studio, building product for the
            <span className="text-accent"> whole world.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-6 max-w-3xl">
            We're Dhrubo IT — a product, design and engineering studio working globally with founders,
            scale-ups and enterprise teams. We ship the software they actually need: SaaS platforms,
            AI-native systems, mobile apps and the brand systems that hold them together. Remote-first
            since day one, timezone-friendly by design, senior by default.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
          {pillars.map((c) => (
            <div key={c.l} className="bg-background p-8">
              <div className="text-[10px] text-accent tracking-widest mb-4">/{c.l.toLowerCase()}</div>
              <h3 className="text-lg font-display uppercase mb-3">{c.l}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
