import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { TrustedBy } from "@/components/site/TrustedBy";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { Stack } from "@/components/site/Stack";
import { Testimonials } from "@/components/site/Testimonials";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

const TITLE = "Dhrubo IT — Building Digital Products That Drive Growth";
const DESCRIPTION =
  "Dhrubo IT is a senior software studio engineering premium SaaS, AI-native systems, and modern web & mobile products for ambitious founders and enterprises.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Dhrubo IT",
          description: DESCRIPTION,
          url: "/",
          logo: "/logo.png",
          sameAs: ["https://linkedin.com/company/dhrubo-it"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen text-foreground relative">
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <TrustedBy />
          <Services />
          <Projects />
          <CaseStudies />
          <Process />
          <WhyUs />
          <Stack />
          <Testimonials />
          <Stats />
          <About />
          <Contact />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </div>
  );
}
