import { Reveal } from "./Reveal";

const groups = [
  { l: "Frontend", items: ["React", "Next.js", "Angular", "TypeScript", "TanStack", "Tailwind"] },
  { l: "Backend", items: ["Node.js", "Express", "Supabase", "PostgreSQL", "Prisma", "Redis"] },
  { l: "AI", items: ["OpenAI", "Gemini", "Claude", "Pinecone", "LangChain", "Vercel AI SDK"] },
  { l: "Cloud", items: ["Vercel", "AWS", "Cloudflare", "Fly.io", "Docker", "Terraform"] },
];

export function Stack() {
  return (
    <section id="stack" className="py-24 md:py-32 px-6 border-t border-border bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16">
          <div className="text-accent text-[10px] uppercase tracking-widest mb-4">[ 06 ] Stack</div>
          <h2 className="text-4xl md:text-5xl font-display uppercase">Modern by default</h2>
        </Reveal>

        <div className="space-y-px bg-border border border-border">
          {groups.map((g) => (
            <Reveal key={g.l} className="bg-background grid grid-cols-1 md:grid-cols-4 gap-px">
              <div className="p-8 md:border-r border-border flex items-center">
                <div>
                  <div className="text-[10px] text-accent tracking-widest mb-2">{`/${g.l.toLowerCase()}`}</div>
                  <h3 className="text-3xl font-display uppercase">{g.l}</h3>
                </div>
              </div>
              <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-px bg-border">
                {g.items.map((it) => (
                  <div
                    key={it}
                    className="bg-background p-6 text-sm font-bold uppercase tracking-widest hover:bg-accent/5 hover:text-accent transition-colors"
                  >
                    {it}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
