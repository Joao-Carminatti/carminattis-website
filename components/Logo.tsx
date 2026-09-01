type LogoProps = {
  variant?: "full" | "icon" | "wordmark";
  className?: string;
};

// Geometria do anel: raio 24 numa viewBox 64x64, com um recorte de ~15%
// da circunferência para ler como "C" e ecoar o anel do LighthouseGauge.
const RING_DASHARRAY = "128 23";
const RING_DASHOFFSET = "11";

function Ring({ size = 32 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className="shrink-0 text-good"
      aria-hidden="true"
    >
      <circle
        cx="32"
        cy="32"
        r="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={RING_DASHARRAY}
        strokeDashoffset={RING_DASHOFFSET}
      />
    </svg>
  );
}

function Wordmark() {
  return (
    <span className="font-display text-lg font-semibold tracking-tight text-fg">
      Carminatti&apos;s<span className="text-good">.</span>
    </span>
  );
}

export default function Logo({ variant = "full", className = "" }: LogoProps) {
  if (variant === "icon") return <Ring />;
  if (variant === "wordmark") return <Wordmark />;

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Ring size={28} />
      <Wordmark />
    </span>
  );
}
