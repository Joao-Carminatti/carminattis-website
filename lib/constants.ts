// lib/constants.ts

export const SITE_NAME = "Carminatti's Web Agency";

// TODO: ajustar para o domínio real quando o deploy de produção existir.
export const SITE_URL = "https://carminattis.com.br";

export const SITE_DESCRIPTION =
  "Engenharia de software para imobiliárias que querem vender mais. Sites em Next.js com nota 100 no Google Lighthouse, entregues em até 5 dias úteis.";

// TODO: substituir pelo número real da agência (formato internacional, só dígitos).
export const WHATSAPP_NUMBER = "5548991711203";

export function buildWhatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vi o site da Carminatti's Web Agency e quero um diagnóstico gratuito para a minha imobiliária.";

export type LighthouseCategory = {
  key: "performance" | "acessibilidade" | "praticas" | "seo";
  label: string;
  score: number;
};

export const LIGHTHOUSE_SCORES: LighthouseCategory[] = [
  { key: "performance", label: "Performance", score: 100 },
  { key: "acessibilidade", label: "Acessibilidade", score: 100 },
  { key: "praticas", label: "Boas Práticas", score: 100 },
  { key: "seo", label: "SEO", score: 100 },
];
