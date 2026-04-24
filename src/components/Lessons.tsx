import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Code2, CheckCircle2 } from "lucide-react";

const lessons = [
  {
    id: "01",
    file: "aula_01_pandas.md",
    title: "Python · Pandas Essentials",
    desc: "Manipulação de DataFrames, filtros, agregações e merge.",
    materials: 4,
    challenges: 2,
    solutions: 2,
    accent: "primary",
  },
  {
    id: "02",
    file: "aula_02_viz.md",
    title: "Visualização de Dados",
    desc: "Matplotlib + Seaborn: gráficos que contam histórias.",
    materials: 3,
    challenges: 1,
    solutions: 1,
    accent: "accent",
  },
  {
    id: "03",
    file: "aula_03_clean.md",
    title: "Limpeza & Tratamento",
    desc: "Missing values, outliers, normalização e feature engineering.",
    materials: 5,
    challenges: 3,
    solutions: 2,
    accent: "highlight",
  },
  {
    id: "04",
    file: "aula_04_ml.md",
    title: "Intro a Machine Learning",
    desc: "Regressão, classificação e avaliação de modelos.",
    materials: 6,
    challenges: 2,
    solutions: 1,
    accent: "primary",
  },
];

const accentMap: Record<string, string> = {
  primary: "text-primary",
  accent: "text-accent",
  highlight: "text-highlight",
};

const Lessons = () => {
  return (
    <section id="aulas" className="container py-20">
      <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
        <div>
          <p className="font-mono text-sm text-primary mb-2">// encontros</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Aulas & Encontros</h2>
          <p className="text-muted-foreground mt-2 max-w-xl">
            Cada aula tem materiais, desafios e resoluções organizados em um só lugar.
          </p>
        </div>
        <Button variant="outline" size="sm">Ver todas</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {lessons.map((l) => (
          <Card
            key={l.id}
            className="card-surface border-border/60 hover:border-primary/50 hover:-translate-y-1 transition-all group"
          >
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`font-mono text-xs ${accentMap[l.accent]}`}>{l.file}</span>
                <Badge variant="outline" className="font-mono">aula {l.id}</Badge>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {l.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{l.desc}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                <span className="flex items-center gap-1.5"><FileText className="size-3.5" /> {l.materials}</span>
                <span className="flex items-center gap-1.5"><Code2 className="size-3.5" /> {l.challenges}</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5" /> {l.solutions}</span>
              </div>
              <Button variant="secondary" size="sm" className="w-full">Abrir aula</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Lessons;
