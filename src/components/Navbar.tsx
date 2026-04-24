import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="container flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="text-primary font-mono">&gt;_</span>
          <span>devGroup</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 font-mono text-sm text-muted-foreground">
          <a href="#sobre" className="hover:text-primary transition-colors">./sobre</a>
          <a href="#ideia" className="hover:text-primary transition-colors">./ideia</a>
          <a href="#proposito" className="hover:text-primary transition-colors">./proposito</a>
        </nav>
        <Button asChild size="sm" className="font-semibold">
          <a href="/login"><LogIn className="size-4" /> login</a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
