import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Layers, MessagesSquare, ExternalLink } from "lucide-react";

const items = [
  {
    icon: Brain,
    tag: "quiz.run",
    color: "text-accent",
    title: "Quiz Interativo",
    desc: "Teste seus conhecimentos com perguntas dinâmicas. Integração com Kahoot disponível.",
    cta: "Iniciar quiz",
    external: true,
  },
  {
    icon: Layers,
    tag: "flashcards/",
    color: "text-primary",
    title: "Flashcards",
    desc: "Memorize conceitos chave com cards interativos por tópico de cada aula.",
    cta: "Estudar agora",
  },
  {
    icon: MessagesSquare,
    tag: "forum.thread",
    color: "text-highlight",
    title: "Fórum & Dúvidas",
    desc: "Espaço aberto para dúvidas, discussões e colaboração entre os membros do grupo.",
    cta: "Entrar no fórum",
  },
];

const Interaction = () => {
  return (
    <section id="interacao" className="container py-20">
      <div className="text-center mb-12">
        <p className="font-mono text-sm text-accent mb-2">// interaja</p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Aprenda fazendo, junto
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <Card
              key={it.title}
              className="card-surface border-border/60 hover:border-accent/50 transition-all"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className={`size-10 rounded-lg bg-secondary flex items-center justify-center ${it.color}`}>
                    <Icon className="size-5" />
                  </div>
                  <span className={`font-mono text-xs ${it.color}`}>{it.tag}</span>
                </div>
                <CardTitle className="text-xl">{it.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{it.desc}</p>
                <Button variant="ghost" size="sm" className="px-0 text-primary hover:text-primary/80">
                  {it.cta} {it.external ? <ExternalLink className="size-3.5" /> : "→"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Interaction;
