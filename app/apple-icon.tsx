import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        }}
      >
        <div
          style={{
            width: 108,
            height: 108,
            borderRadius: "50%",
            border: "20px solid #0CCE6B",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
