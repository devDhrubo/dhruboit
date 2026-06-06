const items = [
  "Next.js 15",
  "AI Automation",
  "Scalable Cloud",
  "TypeScript Core",
  "UI/UX Engineering",
  "Edge Compute",
  "Vector Search",
  "Stripe Payments",
];

export function Marquee() {
  return (
    <div className="border-b border-border py-4 bg-background overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-marquee">
        {[0, 1].map((k) => (
          <div
            key={k}
            className="flex shrink-0 gap-12 px-6 items-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold"
            aria-hidden={k === 1}
          >
            {items.map((i) => (
              <span key={i} className="flex items-center gap-12">
                <span>{i}</span>
                <span className="w-1 h-1 bg-accent" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
