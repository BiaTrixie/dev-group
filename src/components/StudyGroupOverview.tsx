import { BookOpenText, Lightbulb, Target } from "lucide-react";

type SectionItem = {
  id: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  topics: string[];
  icon: typeof BookOpenText;
};

const sections: SectionItem[] = [
  {
    id: "sobre",
    title: "O que e o grupo de estudos",
    subtitle: "Aprendizado tecnico com consistencia e apoio coletivo.",
    paragraphs: [
      "O grupo de estudos nasce para reunir pessoas que querem evoluir em desenvolvimento com rotina, clareza e senso de comunidade.",
      "Aqui o foco nao e apenas assistir conteudo: e praticar, discutir solucoes, revisar codigo e construir repertorio em conjunto.",
    ],
    topics: ["Encontros semanais com pauta objetiva", "Troca de experiencias entre membros", "Ambiente seguro para tirar duvidas"],
    icon: BookOpenText,
  },
  {
    id: "ideia",
    title: "A ideia do grupo",
    subtitle: "Transformar teoria em pratica com direcionamento.",
    paragraphs: [
      "Cada ciclo de estudo conecta conceitos fundamentais com aplicacoes reais para facilitar a absorcao e evitar aprendizado superficial.",
      "A proposta e construir uma trilha progressiva, onde cada etapa prepara a proxima e fortalece a base tecnica da turma.",
    ],
    topics: ["Conteudo organizado por nivel", "Pratica guiada com projetos curtos", "Revisao de progresso ao fim de cada ciclo"],
    icon: Lightbulb,
  },
  {
    id: "proposito",
    title: "Nosso proposito",
    subtitle: "Formar base solida para oportunidades reais.",
    paragraphs: [
      "Nosso proposito e acelerar a evolucao de cada participante sem pular fundamentos importantes para carreira em tecnologia.",
      "Queremos que todos avancem com autonomia, qualidade de codigo e confianca para participar de processos seletivos e projetos profissionais.",
    ],
    topics: ["Disciplina de estudo no longo prazo", "Melhoria continua de logica e arquitetura", "Preparacao para desafios do mercado"],
    icon: Target,
  },
];

const StudyGroupOverview = () => {
  return (
    <div className="container py-16 md:py-24 space-y-6">
      {sections.map(({ id, title, subtitle, paragraphs, topics, icon: Icon }) => (
        <section
          key={id}
          id={id}
          className="min-h-[55vh] py-12 md:py-16 border-t border-border/60 first:border-t-0"
        >
          <div className="max-w-5xl space-y-6">
            <div className="inline-flex items-center gap-2 terminal-chip">
              <Icon className="size-4 text-primary" />
              sessao {id}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
            <p className="text-lg text-muted-foreground">{subtitle}</p>

            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="grid gap-2 md:grid-cols-3 text-sm md:text-base">
              {topics.map((topic) => (
                <li key={topic} className="rounded-md border border-border/60 bg-secondary/30 px-4 py-3">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
};

export default StudyGroupOverview;
