import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
      <div className="container relative py-24 md:py-32 text-center">
        <div className="terminal-chip mb-6 animate-fade-up">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          // grupo de estudos · v2.0
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 animate-fade-up">
          Aprenda. Codifique.{" "}
          <span className="text-gradient">Compartilhe<span className="text-primary animate-blink">_</span></span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up">
          Tudo do nosso grupo num lugar só: aulas, desafios, quiz, flashcards, fórum
          e o projeto final de análise de dados.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up">
          <Button asChild size="lg" className="font-semibold animate-pulse-glow">
            <a href="#enviar"><Send className="size-4" /> Enviar desafio agora</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#aulas">Ver aulas <ArrowRight className="size-4" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
