import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Projetos e depoimentos",
  description:
    "Veja os sites que a Carminatti's Web Agency já colocou no ar para imobiliárias, e o que os clientes dizem sobre a estrutura.",
};

export default function ProjetosPage() {
  return (
    <main id="conteudo-principal" className="pt-32">
      <PortfolioGrid />
      <Testimonials />
    </main>
  );
}
