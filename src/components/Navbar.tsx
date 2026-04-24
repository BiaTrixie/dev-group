import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="container flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="text-primary font-mono">&gt;_</span>
          <span>devGroup</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 font-mono text-sm text-muted-foreground">
          <a href="#aulas" className="hover:text-primary transition-colors">./aulas</a>
          <a href="#interacao" className="hover:text-primary transition-colors">./interacao</a>
          <a href="#projeto" className="hover:text-primary transition-colors">./projeto</a>
          <a href="#forum" className="hover:text-primary transition-colors">./forum</a>
        </nav>
        <Button asChild size="sm" className="font-semibold">
          <a href="#enviar"><Terminal className="size-4" /> enviar desafio</a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
