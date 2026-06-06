import { Reveal } from "./Reveal";

const logos = ["NEXUS.AI", "VORTEX", "QUANTUM", "CLOUDSTRAT", "LUMINA", "HORIZON", "ATLAS", "MERIDIAN"];

export function TrustedBy() {
  return (
    <section className="py-20 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center mb-10">
          Trusted by 150+ teams from seed to series C
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8 items-center">
          {logos.map((l) => (
            <div
              key={l}
              className="text-center text-sm font-display tracking-[0.2em] text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
