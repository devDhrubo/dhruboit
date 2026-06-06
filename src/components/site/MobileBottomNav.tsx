import { useEffect, useState } from "react";
import {
  Wrench,
  FolderKanban,
  Cog,
  Layers,
  User2,
  ArrowUpRight,
} from "lucide-react";

type Item = {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  accent?: boolean;
};

const items: Item[] = [
  { href: "#services", label: "Services", Icon: Wrench },
  { href: "#projects", label: "Work", Icon: FolderKanban },
  { href: "#process", label: "Process", Icon: Cog },
  { href: "#stack", label: "Stack", Icon: Layers },
  { href: "#contact", label: "Contact", Icon: ArrowUpRight, accent: true },
];

const sectionIds = items.map((i) => i.href.slice(1));

export function MobileBottomNav() {
  const [active, setActive] = useState<string>("services");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="Mobile section navigation"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-border bg-background/85 backdrop-blur-md pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="grid grid-cols-5">
        {items.map((it) => {
          const isActive = active === it.href.slice(1);
          return (
            <li key={it.href} className="relative">
              <a
                href={it.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] uppercase tracking-widest transition active:scale-95 ${
                  it.accent
                    ? "text-accent"
                    : isActive
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute top-0 left-1/2 -translate-x-1/2 size-1 rounded-full bg-accent"
                  />
                )}
                <it.Icon className="size-4" />
                <span>{it.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
