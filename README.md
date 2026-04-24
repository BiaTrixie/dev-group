# devGroup

Landing page do **devGroup**, nosso grupo de estudos de desenvolvimento. O
projeto apresenta a identidade do grupo (o que é, ideia e propósito) e prepara
a base para futuras funcionalidades como login e envio de desafios.

## Stack

- **Vite** — bundler e dev server
- **React 18 + TypeScript** — camada de UI
- **Tailwind CSS** — estilos utilitários e tema
- **shadcn/ui + Radix UI** — componentes acessíveis reutilizáveis
- **React Router** — navegação entre páginas
- **Vitest + Testing Library** — testes de componentes

## Pré-requisitos

- Node.js 18+
- npm 9+

## Como rodar

Instalar dependências:

```bash
npm install
```

Rodar em modo de desenvolvimento (http://localhost:8080):

```bash
npm run dev
```

Gerar build de produção:

```bash
npm run build
```

Pré-visualizar o build:

```bash
npm run preview
```

Rodar lint:

```bash
npm run lint
```

Rodar testes:

```bash
npm run test
```

## Estrutura do projeto

```
src/
  components/          Componentes de UI e blocos da página
    Hero.tsx           Hero principal com identidade do grupo
    StudyGroupOverview Seções de sobre, ideia e propósito
    Navbar.tsx         Cabeçalho com navegação e botão de login
    Footer.tsx         Rodapé simples
    ui/                Componentes base (shadcn/ui)
  pages/
    Index.tsx          Landing page
    NotFound.tsx       Página 404
  hooks/               Hooks reutilizáveis
  lib/                 Utilidades compartilhadas
  test/                Setup e exemplos de testes
```

## Próximos passos

- Criar a página `/login` para autenticação.
- Área logada com envio de desafios.
- Listagem de materiais de estudo por ciclo.
