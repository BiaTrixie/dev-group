import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Upload, Send, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const SubmitChallenge = () => {
  const [fileName, setFileName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Desafio enviado!", {
      description: "Sua entrega foi registrada (demo). Em breve com upload real.",
    });
  };

  return (
    <section id="enviar" className="container py-20">
      <Card className="card-surface border-primary/30 p-8 md:p-12 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 size-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="grid lg:grid-cols-2 gap-10 items-start relative">
          <div>
            <div className="terminal-chip mb-4">
              <Zap className="size-3" /> envio rápido
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Enviar desafio <span className="text-gradient">agora</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Submeta seu código, PDF ou link em segundos — perfeito pra entrega
              durante a aula. Aceita arquivos até 25MB.
            </p>
            <ul className="space-y-2 font-mono text-sm text-muted-foreground">
              <li><span className="text-primary">✓</span> Entrega em tempo real</li>
              <li><span className="text-primary">✓</span> Upload de arquivos (.py, .ipynb, .pdf, .zip)</li>
              <li><span className="text-primary">✓</span> Histórico por aula</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Seu nome</Label>
              <Input id="name" placeholder="Ex: Ana Silva" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lesson">Aula / Desafio</Label>
              <Input id="lesson" placeholder="Ex: Aula 02 — Visualização" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Comentários</Label>
              <Textarea id="notes" placeholder="Algo que queira compartilhar sobre a entrega…" rows={3} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="file">Arquivo</Label>
              <label
                htmlFor="file"
                className="flex items-center gap-3 px-4 py-3 rounded-md border border-dashed border-border bg-secondary/40 cursor-pointer hover:border-primary/60 transition-colors"
              >
                <Upload className="size-4 text-primary" />
                <span className="text-sm text-muted-foreground truncate">
                  {fileName || "Clique para escolher um arquivo"}
                </span>
                <input
                  id="file"
                  type="file"
                  className="hidden"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                />
              </label>
            </div>
            <Button type="submit" className="w-full font-semibold" size="lg">
              <Send className="size-4" /> Enviar desafio
            </Button>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default SubmitChallenge;
