import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

// Seções abaixo da dobra são isoladas em chunks separados: reduzem o bundle
// inicial sem perder SEO, pois next/dynamic ainda renderiza no servidor
// (ssr: true é o padrão) — o HTML final já sai completo.
const Features = dynamic(() => import("@/components/Features"), {
  loading: () => <SectionSkeleton />,
});
const PerformanceComparator = dynamic(
  () => import("@/components/PerformanceComparator"),
  { loading: () => <SectionSkeleton /> }
);
const DeliveryTimeline = dynamic(() => import("@/components/DeliveryTimeline"), {
  loading: () => <SectionSkeleton />,
});

function SectionSkeleton() {
  return <div aria-hidden="true" className="h-[420px] w-full" />;
}

export default function Home() {
  return (
    <main id="conteudo-principal">
      <Hero />
      <Features />
      <PerformanceComparator />
      <DeliveryTimeline />
    </main>
  );
}
