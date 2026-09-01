"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function PortfolioGrid() {
  return (
    <section aria-labelledby="portfolio-heading" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h1
            id="portfolio-heading"
            className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
          >
            Sites que já colocamos no ar
          </h1>
          <p className="mt-4 text-muted">
            Cada projeto listado aqui está publicado, indexado e rodando com
            a mesma estrutura técnica que você vê nesta página. Clique num
            card para visitar o site de verdade.
          </p>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PORTFOLIO_PROJECTS.map((project) => (
            <motion.li key={project.slug} variants={item}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar o site do projeto ${project.name} (abre em nova aba)`}
                className="group block overflow-hidden rounded-2xl border border-line bg-panel transition-colors hover:border-good focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                {/* "Foto" do card — como não usamos imagem raster no site,
                    representamos o site do cliente com um mockup de
                    navegador tingido na cor da marca dele. */}
                <div
                  className="relative flex h-40 items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(160deg, ${project.accentColor}33, var(--color-ink))`,
                  }}
                  aria-hidden="true"
                >
                  <div className="absolute left-4 top-4 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-line" />
                    <span className="h-2 w-2 rounded-full bg-line" />
                    <span className="h-2 w-2 rounded-full bg-line" />
                  </div>
                  <span
                    className="font-display text-3xl font-semibold"
                    style={{ color: project.accentColor }}
                  >
                    {project.name}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="font-display text-lg font-semibold text-fg">
                      {project.name}
                    </h2>
                    <ExternalLink
                      size={16}
                      className="text-muted transition-colors group-hover:text-good"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
