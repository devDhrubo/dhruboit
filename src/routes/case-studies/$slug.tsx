import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { Reveal } from "@/components/site/Reveal";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/case-studies/$slug")({
  component: CaseStudyDetail,
});

function PageNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border backdrop-blur-md bg-background/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-display tracking-widest" aria-label="Dhrubo IT home">
          DHRUBO<span className="text-accent italic">_</span>IT
        </Link>
        <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-medium">
          <Link to="/case-studies" className="hover:text-accent transition-colors flex items-center gap-2">
            <ArrowLeft className="size-3" /> All case studies
          </Link>
          <Link to="/" hash="contact" className="text-accent hover:opacity-80 transition">
            [ Contact ]
          </Link>
        </div>
      </div>
    </nav>
  );
}

function CaseStudyDetail() {
  const { slug } = Route.useParams();
  const study = getCaseStudy(slug);
  if (!study) throw notFound();

  const idx = caseStudies.findIndex((c) => c.slug === study.slug);
  const others = caseStudies.filter((_, i) => i !== idx).slice(0, 3);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <PageNav />

      <section className="px-6 pt-12 md:pt-20">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
              <Link to="/case-studies" className="hover:text-accent transition-colors">
                Case studies
              </Link>
              <span>/</span>
              <span className="text-accent">{study.id}</span>
              <span>/</span>
              <span>{study.year}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase max-w-5xl leading-[0.95]">
              {study.headline}
            </h1>
          </Reveal>

          <Reveal className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
              {study.metrics.map((m) => (
                <div key={m.label} className="bg-background p-6 md:p-8">
                  <div className="text-3xl md:text-5xl font-display text-accent">{m.value}</div>
                  <div className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 mt-16 md:mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-video md:aspect-21/9 overflow-hidden border border-border">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${study.hero})` }}
              aria-hidden
            />
            <div className={`absolute inset-0 bg-linear-to-br ${study.accent} mix-blend-overlay`} aria-hidden />
            <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" aria-hidden />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/80 mb-1">Client</div>
                <div className="text-2xl md:text-3xl font-display uppercase text-white">
                  {study.client}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-widest text-white/80 mb-1">Industry</div>
                <div className="text-sm md:text-base text-white">{study.industry}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          <div className="md:sticky md:top-24 md:self-start">
            <div className="text-accent text-[10px] uppercase tracking-widest mb-4">[ Brief ]</div>
            <h2 className="text-2xl md:text-3xl font-display uppercase mb-6">
              The short version
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {study.summary}
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Services</div>
                <div className="flex flex-wrap gap-2">
                  {study.services.map((s) => (
                    <span key={s} className="px-3 py-1 border border-border text-[10px] uppercase tracking-widest">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Stack</div>
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/5 text-[10px] uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-20">
            {study.chapters.map((ch, i) => (
              <Reveal key={ch.title}>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent text-xs font-display">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display uppercase tracking-widest">
                    {ch.title}
                  </h3>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 max-w-2xl">
                  {ch.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-accent text-[10px] uppercase tracking-widest mb-4">[ Other work ]</div>
            <h2 className="text-3xl md:text-5xl font-display uppercase mb-12">More case studies</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/case-studies/$slug"
                params={{ slug: o.slug }}
                className="group bg-background p-6 hover:bg-white/2 transition-colors"
              >
                <div
                  className="aspect-16/10 bg-cover bg-center mb-6 border border-border"
                  style={{ backgroundImage: `url(${o.hero})` }}
                  aria-hidden
                />
                <div className="text-[10px] uppercase tracking-widest text-accent mb-2">
                  [{o.id}] {o.industry}
                </div>
                <h3 className="text-xl font-display uppercase mb-3 group-hover:text-accent transition-colors">
                  {o.client}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {o.summary}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest">
                  Read the case study <ArrowRight className="size-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <div>
            <div className="text-accent text-[10px] uppercase tracking-widest mb-4">[ Next ]</div>
            <h3 className="text-3xl md:text-5xl font-display uppercase">
              Want a build like this one?
            </h3>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-muted-foreground leading-relaxed md:max-w-md md:ml-auto mb-6">
              We run a small number of engagements each quarter. Reach out and we will tell you
              honestly whether we are the right team for the work.
            </p>
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-accent-foreground text-[10px] uppercase tracking-widest hover:opacity-90 transition"
            >
              Start a conversation <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
