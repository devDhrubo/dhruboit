import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-border backdrop-blur-md transition-colors ${
        scrolled ? "bg-background/90" : "bg-background/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group" aria-label="Dhrubo IT home">
          <img src="/logo.png" alt="Dhrubo IT Logo" className="size-12 object-contain transition-transform group-hover:scale-105" />
          <span className="text-xl font-display tracking-widest">
            DHRUBO<span className="text-accent italic">_</span>IT
          </span>
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-medium">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-accent transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="text-accent hover:opacity-80 transition">
              [ Contact ]
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
