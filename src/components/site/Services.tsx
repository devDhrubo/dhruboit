import { Reveal } from "./Reveal";

const services = [
  { n: "01", t: "Website Development", d: "Marketing sites engineered for speed, SEO, and conversion.", b: ["Next.js & Astro", "Headless CMS", "Edge Rendering"] },
  { n: "02", t: "Web Applications", d: "Complex SPAs and dashboards with real-time data and auth.", b: ["React 19", "TanStack Stack", "WebSockets"] },
  { n: "03", t: "Mobile Apps", d: "Native performance with cross-platform efficiency on iOS & Android.", b: ["React Native", "Expo", "Push Pipelines"] },
  { n: "04", t: "SaaS Development", d: "Multi-tenant architectures built for infinite horizontal scale.", b: ["Auth & Security", "Stripe Billing", "Real-time Sync"] },
  { n: "05", t: "AI Solutions", d: "Custom LLM integration and cognitive workflows.", b: ["RAG Architectures", "Agentic Workflows", "Vector DB Ops"] },
  { n: "06", t: "AI Automation", d: "Eliminate manual ops with intelligent process automation.", b: ["n8n / Zapier", "Custom Agents", "Event Pipelines"] },
  { n: "07", t: "UI/UX Design", d: "High-fidelity interfaces with technical precision.", b: ["Design Systems", "Interaction Design", "Prototyping"] },
  { n: "08", t: "API Development", d: "Type-safe APIs that scale from MVP to enterprise traffic.", b: ["REST & GraphQL", "tRPC / Zod", "Versioning"] },
  { n: "09", t: "Cloud Solutions", d: "Reliable infra on Vercel, AWS, and Cloudflare with observability built in.", b: ["IaC w/ Terraform", "Observability", "Cost Tuning"] },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16">
          <div>
            <div className="text-accent text-[10px] uppercase tracking-widest mb-4">[ 01 ] Services</div>
            <h2 className="text-4xl md:text-5xl font-display uppercase">Technical Capabilities</h2>
          </div>
          <p className="text-xs text-muted-foreground max-w-xs md:text-right">
            Advanced engineering solutions focused on high-performance architecture and cognitive automation.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {services.map((s, i) => (
            <Reveal
              key={s.n}
              delay={(i % 3) * 0.08}
              className="p-10 border-r border-b border-border group hover:bg-white/[0.02] transition-colors"
            >
              <div
                className={`size-8 mb-6 border flex items-center justify-center text-[10px] ${
                  i === 0 ? "border-accent text-accent" : "border-white/20 text-white/40"
                }`}
              >
                {s.n}
              </div>
              <h3 className="text-xl font-bold uppercase mb-4 group-hover:text-accent transition-colors">{s.t}</h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">{s.d}</p>
              <ul className="text-[10px] uppercase tracking-wider space-y-2 opacity-60">
                {s.b.map((x) => (
                  <li key={x}>- {x}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
