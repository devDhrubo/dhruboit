import { Reveal } from "./Reveal";
import { Zap, Cpu, Search, Layers, Brain, LifeBuoy } from "lucide-react";

const features = [
  { i: Zap, t: "Fast Delivery", d: "Weekly shipping cycles, not quarterly waterfalls." },
  { i: Cpu, t: "Modern Technologies", d: "React 19, Next.js 15, edge runtimes — current to 2026." },
  { i: Search, t: "SEO Optimization", d: "100/100 Lighthouse SEO baked into every build." },
  { i: Layers, t: "Scalable Architecture", d: "Multi-tenant, multi-region from day one." },
  { i: Brain, t: "AI Expertise", d: "LLMs, RAG, agents — in production, not in demos." },
  { i: LifeBuoy, t: "Dedicated Support", d: "Direct Slack with the engineers who built your system." },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16">
          <div className="text-accent text-[10px] uppercase tracking-widest mb-4">[ 05 ] Why Dhrubo</div>
          <h2 className="text-4xl md:text-5xl font-display uppercase">Engineered for trust</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {features.map((f, i) => (
            <Reveal key={f.t} delay={(i % 3) * 0.08} className="p-10 border-r border-b border-border group hover:bg-white/[0.02] transition">
              <f.i className="size-6 text-accent mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold uppercase mb-3 group-hover:text-accent transition-colors">{f.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
