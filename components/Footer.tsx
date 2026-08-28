import { MessageCircle, Mail, MapPin } from "lucide-react";
import { buildWhatsappLink, WHATSAPP_DEFAULT_MESSAGE, SITE_NAME } from "@/lib/constants";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      id="contato"
      aria-labelledby="footer-heading"
      className="border-t border-line bg-panel/40 py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="footer-heading" className="sr-only">
          Contato e informações da agência
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-display text-lg font-semibold text-fg">
              Carminatti&apos;s<span className="text-good">.</span>
            </p>
            <p className="mt-3 max-w-sm text-sm text-muted">
              Engenharia de software para imobiliárias de Florianópolis e
              região que querem um site rápido, sem burocracia e pronto para
              vender.
            </p>
          </div>

          <nav aria-label="Links do site">
            <p className="font-mono text-xs uppercase tracking-wide text-muted">
              Navegação
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#recursos" className="text-muted hover:text-fg">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#comparativo" className="text-muted hover:text-fg">
                  Comparativo
                </a>
              </li>
              <li>
                <a href="#processo" className="text-muted hover:text-fg">
                  Processo
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-muted">
              Contato
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={buildWhatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chamar no WhatsApp"
                  className="flex items-center gap-2 text-muted hover:text-fg"
                >
                  <MessageCircle size={16} aria-hidden="true" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@carminattis.com.br"
                  className="flex items-center gap-2 text-muted hover:text-fg"
                >
                  <Mail size={16} aria-hidden="true" /> contato@carminattis.com.br
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted">
                <MapPin size={16} aria-hidden="true" /> Florianópolis, SC
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {YEAR} {SITE_NAME}. Todos os direitos reservados.
          </p>
          <p>Construído com Next.js e hospedado na Vercel.</p>
        </div>
      </div>
    </footer>
  );
}
