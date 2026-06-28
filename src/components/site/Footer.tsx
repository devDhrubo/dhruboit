export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Dhrubo IT Logo" className="size-6 object-contain" />
          <div className="text-xs tracking-widest font-bold">
            &copy; 2026 DHRUBO IT <span className="mx-4 text-muted-foreground font-normal">//</span> ALL RIGHTS RESERVED
          </div>
        </div>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-muted-foreground">
          <span className="text-accent">Terminal_v1.0.4</span>
        </div>
      </div>
    </footer>
  );
}
