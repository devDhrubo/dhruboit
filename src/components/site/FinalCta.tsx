import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <Reveal className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-2 bg-accent/10 text-accent text-[10px] uppercase tracking-widest mb-10">
          Ready to deploy?
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display uppercase mb-8 tracking-tight leading-none">
          Ready to build your <span className="italic">next</span> digital product?
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Let's discuss your idea and turn it into reality. Two ways to get started.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="#contact" className="p-8 border border-border hover:border-accent text-left transition-all group block">
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2">Option A</div>
            <div className="text-xl font-bold uppercase mb-4">Schedule a Call</div>
            <p className="text-xs text-muted-foreground mb-6">A 30-minute strategy session with a senior engineer.</p>
            <div className="text-accent text-xs uppercase tracking-widest font-bold">Book Call {"->"}</div>
          </a>
          <a href="#contact" className="p-8 border border-border hover:border-accent text-left transition-all group block bg-white/[0.02]">
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2">Option B</div>
            <div className="text-xl font-bold uppercase mb-4">Get a Quote</div>
            <p className="text-xs text-muted-foreground mb-6">Written estimate within one business day.</p>
            <div className="text-accent text-xs uppercase tracking-widest font-bold">Request Quote {"->"}</div>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
