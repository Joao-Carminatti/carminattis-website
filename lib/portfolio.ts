// lib/portfolio.ts

export type PortfolioProject = {
  slug: string;
  name: string;
  description: string;
  url: string;
  accentColor: string;
  tags: string[];
};

// TODO: confirme a URL definitiva da mood e ajuste accentColor pra bater
// exatamente com a identidade visual real do site dela antes de publicar.
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "mood",
    name: "mood",
    description:
      "Site institucional para imobiliária em Florianópolis, com foco em performance mobile e captação de leads via WhatsApp.",
    url: "https://carminattis-boilerplate.vercel.app/",
    accentColor: "#1B3A5C",
    tags: ["Next.js", "Vercel", "Lighthouse 100"],
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

// Adicione depoimentos reais aqui, sempre com autorização explícita do
// cliente. Formato: { quote: "...", author: "Nome", role: "Cargo, Empresa" }
// Fica vazio de propósito — a seção mostra um estado "em breve" limpo
// enquanto isso, em vez de depoimento fictício.
export const TESTIMONIALS: Testimonial[] = [];
