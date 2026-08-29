import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Carminatti's Web Agency — Engenharia de software para imobiliárias que querem vender mais";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0A0E12";
const PANEL = "#10161C";
const LINE = "#1F2830";
const FG = "#EDF2F5";
const MUTED = "#8A97A3";
const GOOD = "#0CCE6B";

const HEADLINE_LINES = [
  "Engenharia de software para",
  "imobiliárias",
  "que querem vender mais",
];
const TAGLINE = "Sites em Next.js com nota 100 no Google Lighthouse";
const KICKER = "AUDITADO PELO GOOGLE LIGHTHOUSE";
const GAUGES = ["Performance", "Acessibilidade", "Práticas", "SEO"];

/**
 * Carrega a Space Grotesk direto do Google Fonts, já filtrada só com os
 * caracteres usados nesta imagem (inclui os acentos do português). Se a
 * busca falhar por qualquer motivo, cai num fallback sans-serif — a
 * imagem nunca quebra o build por causa da fonte.
 */
async function loadFont(): Promise<ArrayBuffer | null> {
  try {
    const text = [
      ...HEADLINE_LINES,
      TAGLINE,
      KICKER,
      ...GAUGES,
      "100",
      "carminattis.com.br",
      "Carminatti's",
    ].join("");
    const cssUrl = `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&text=${encodeURIComponent(
      text
    )}`;
    const css = await (await fetch(cssUrl)).text();
    const match = css.match(
      /src: url\(([^)]+)\) format\('(opentype|truetype)'\)/
    );
    if (!match) return null;
    const fontRes = await fetch(match[1]);
    return await fontRes.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function Image() {
  const fontData = await loadFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          position: "relative",
          backgroundColor: INK,
          padding: "64px",
          fontFamily: fontData ? "Space Grotesk" : "sans-serif",
        }}
      >
        {/* marcas de canto, no mesmo espírito de "desenho técnico" do site */}
        <div
          style={{
            position: "absolute",
            top: 32,
            left: 32,
            width: 28,
            height: 28,
            borderTop: `2px solid ${LINE}`,
            borderLeft: `2px solid ${LINE}`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 32,
            right: 32,
            width: 28,
            height: 28,
            borderTop: `2px solid ${LINE}`,
            borderRight: `2px solid ${LINE}`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: 32,
            width: 28,
            height: 28,
            borderBottom: `2px solid ${LINE}`,
            borderLeft: `2px solid ${LINE}`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 32,
            width: 28,
            height: 28,
            borderBottom: `2px solid ${LINE}`,
            borderRight: `2px solid ${LINE}`,
            display: "flex",
          }}
        />

        {/* Coluna esquerda: headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "60%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: GOOD,
              fontSize: 19,
              letterSpacing: 2,
              marginBottom: 26,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: GOOD,
                display: "flex",
              }}
            />
            {KICKER}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 52,
              fontWeight: 700,
              lineHeight: 1.18,
              maxWidth: 640,
            }}
          >
            <div style={{ display: "flex", color: FG }}>
              {HEADLINE_LINES[0]}
            </div>
            <div style={{ display: "flex", color: GOOD }}>
              {HEADLINE_LINES[1]}
            </div>
            <div style={{ display: "flex", color: FG }}>
              {HEADLINE_LINES[2]}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 30,
              fontSize: 24,
              color: MUTED,
            }}
          >
            {TAGLINE}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 36,
              fontSize: 21,
              color: MUTED,
              letterSpacing: 1,
            }}
          >
            carminattis.com.br
          </div>
        </div>

        {/* Coluna direita: cluster de notas 100/100 */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
            width: "40%",
            gap: 22,
          }}
        >
          {GAUGES.map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "42%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 104,
                  height: 104,
                  borderRadius: "50%",
                  border: `9px solid ${GOOD}`,
                  backgroundColor: PANEL,
                  color: FG,
                  fontSize: 32,
                  fontWeight: 700,
                }}
              >
                100
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 10,
                  fontSize: 14,
                  color: MUTED,
                  textAlign: "center",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: "Space Grotesk", data: fontData, style: "normal", weight: 700 }]
        : [],
    }
  );
}
