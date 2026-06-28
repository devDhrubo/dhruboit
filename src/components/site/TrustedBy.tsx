import { Reveal } from "./Reveal";

const logos = [
  { name: "TAJ INTERNATIONAL" },
  { name: "UNIQUE TELECOM" },
  { name: "SAFE PHARMA" },
  { name: "ACE HONOR LTD" },
];

export function TrustedBy() {
  return (
    <section className="py-20 px-6 border-b border-border bg-white/[0.005]">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center mb-10">
          Trusted by Industry Leaders & Enterprises
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {logos.map((l) => (
            <div
              key={l.name}
              className="group border border-border/60 px-6 py-4 text-center hover:border-accent transition-all duration-300 bg-background/50 backdrop-blur-sm cursor-default min-w-[180px]"
            >
              <div className="text-xs md:text-sm font-display tracking-[0.2em] text-foreground/80 group-hover:text-accent transition-colors">
                {l.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
