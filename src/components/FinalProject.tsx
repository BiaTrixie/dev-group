import { Button } from "@/components/ui/button";
import { Database, GitBranch, Sparkles } from "lucide-react";

const steps = [
  { icon: Database, label: "Limpeza de dados", desc: "Tratamento de missing, outliers e normalização." },
  { icon: GitBranch, label: "Análise exploratória", desc: "Estatística, correlações e visualizações." },
  { icon: Sparkles, label: "Interpretação", desc: "Insights, conclusões e apresentação dos resultados." },
];

const FinalProject = () => {
  return (
    <section id="projeto" className="container py-20">
      <div className="card-surface border border-border/60 rounded-2xl p-8 md:p-14 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="relative">
          <p className="font-mono text-sm text-highlight mb-2">// projeto_final/</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl mb-4">
            Análise de um <span className="text-gradient">dataset real</span> — em grupo.
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10 text-lg">
            Aplique tudo o que aprendeu num desafio de ponta a ponta.
            Forme equipes, escolha um dataset e construa uma análise completa.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex gap-4 p-5 rounded-xl bg-secondary/40 border border-border/40">
                  <div className="shrink-0 size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground mb-1">step_{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="font-semibold mb-1">{s.label}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="font-semibold">Ver briefing completo</Button>
            <Button size="lg" variant="outline">Formar grupo</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalProject;
