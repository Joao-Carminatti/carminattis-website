import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Em 32px o recorte do anel (o detalhe que lembra um "C") praticamente some —
// então aqui usamos o anel fechado, mais legível em tamanho de ícone.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0E12",
          borderRadius: 7,
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            border: "5px solid #0CCE6B",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
