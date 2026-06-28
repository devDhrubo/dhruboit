import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center gap-2 p-2 border border-border bg-background hover:border-accent text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer text-[10px] uppercase tracking-widest ${className}`}
      title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <>
          <Moon className="size-3.5 text-accent" />
          <span className="hidden sm:inline">[ Dark ]</span>
        </>
      ) : (
        <>
          <Sun className="size-3.5 text-accent" />
          <span className="hidden sm:inline">[ Light ]</span>
        </>
      )}
    </button>
  );
}
