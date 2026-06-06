import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="top" className="relative pt-20 pb-24 md:pt-28 md:pb-32 px-6 overflow-hidden border-b border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent text-accent text-[10px] uppercase tracking-widest mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-ping opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            System Status: Operational // 2026_CORE
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[120px] leading-[0.85] font-display uppercase tracking-tight text-balance mb-8">
            Building Digital <span className="text-stroke">Products</span> That Drive Growth
          </h1>
          <p className="max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed mb-10">
            Dhrubo IT engineers high-performance SaaS, AI-native systems, and premium web &amp; mobile products for
            ambitious founders and enterprises worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <a target="_blank"
              href="https://calendly.com/hello-dhruboit/30min"
              className="px-8 py-4 bg-accent text-accent-foreground font-bold uppercase text-xs tracking-widest hover:invert transition-all duration-300"
            >
              Book Free Consultation
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border border-border hover:border-accent font-bold uppercase text-xs tracking-widest transition-all duration-300 group inline-flex items-center gap-2"
            >
              View Our Work
              <span className="inline-block group-hover:translate-x-1 transition-transform">{"->"}</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-4 border-l border-border pl-8"
        >
          <dl className="space-y-8">
            {[
              { v: "70+", l: "Projects Deployed", accent: true },
              { v: "12", l: "Countries Served" },
              { v: "99.9%", l: "Uptime Guaranteed" },
            ].map((s) => (
              <div key={s.l}>
                <dt className={`text-4xl font-display ${s.accent ? "text-accent" : ""}`}>{s.v}</dt>
                <dd className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
