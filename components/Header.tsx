"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { buildWhatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#recursos", label: "Recursos" },
  { href: "#comparativo", label: "Comparativo" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          aria-label="Carminatti's Web Agency, voltar ao topo"
          className="rounded-sm font-display text-lg font-semibold tracking-tight text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
        >
          Carminatti&apos;s<span className="text-good">.</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm text-muted transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={buildWhatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Carminatti's Web Agency pelo WhatsApp"
            className="hidden items-center rounded-full bg-good px-4 py-2 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal sm:inline-flex"
          >
            Diagnóstico grátis
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex items-center justify-center rounded-md p-2 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal md:hidden"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Navegação móvel" className="border-t border-line bg-ink px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-sm text-sm text-muted hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={buildWhatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-good px-4 py-2 text-sm font-semibold text-ink"
              >
                Diagnóstico grátis
              </a>
            </li>
          </ul>
        </nav>
      )}
    </motion.header>
  );
}
