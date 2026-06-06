import { Reveal } from "./Reveal";

const studies = [
  {
    n: "CS_01",
    client: "Veridian Store",
    challenge: "Legacy Shopify storefront couldn't handle Black Friday traffic and bled conversions on mobile.",
    solution: "Rebuilt as a headless Next.js storefront on Vercel Edge with Supabase + Stripe billing.",
    stack: ["Next.js 15", "Supabase", "Stripe", "Vercel Edge"],
    outcome: [{ k: "Conversion", v: "+47%" }, { k: "LCP", v: "0.4s" }, { k: "Revenue", v: "$12M+/yr" }],
  },
  {
    n: "CS_02",
    client: "Nexus Finance",
    challenge: "Manual portfolio rebalancing capped client growth at ~200 accounts per advisor.",
    solution: "Designed and shipped a real-time rebalancing engine with biometric-secured client portal.",
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    outcome: [{ k: "Accounts/Advisor", v: "10x" }, { k: "AUM", v: "$50M" }, { k: "Uptime", v: "99.99%" }],
  },
  {
    n: "CS_03",
    client: "Orbit AI",
    challenge: "Knowledge ops team buried under repetitive Q&A across 14 SaaS tools.",
    solution: "Custom RAG agent with vector search across all sources, surfaced via a Slack-native UI.",
    stack: ["OpenAI", "Pinecone", "TypeScript", "Cloudflare"],
    outcome: [{ k: "Time Saved", v: "70%" }, { k: "Sources", v: "14" }, { k: "NPS", v: "+62" }],
  },
];

export function CaseStudies() {
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
                  <div className="text-[10px] text-accent tracking-widest mb-2">{s.n}</div>
                  <h3 className="text-2xl md:text-3xl font-display uppercase mb-4">{s.client}</h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Challenge</p>
                  <p className="text-sm leading-relaxed mb-4">{s.challenge}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Solution</p>
                  <p className="text-sm leading-relaxed">{s.solution}</p>
                </div>
                <div className={`${i % 2 === 1 ? "md:order-1 md:pr-12 md:text-right" : "md:pl-12"} pl-20 md:pl-12`}>
                  <div className="border border-border p-6">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Stack</p>
                    <div className={`flex flex-wrap gap-2 mb-6 ${i % 2 === 1 ? "md:justify-end" : ""}`}>
                      {s.stack.map((t) => (
                        <span key={t} className="px-3 py-1 bg-white/5 text-[10px] tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                      {s.outcome.map((o) => (
                        <div key={o.k} className={i % 2 === 1 ? "md:text-right" : ""}>
                          <div className="text-2xl font-display text-accent">{o.v}</div>
                          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{o.k}</div>
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
