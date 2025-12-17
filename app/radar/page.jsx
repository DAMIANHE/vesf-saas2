import dynamic from "next/dynamic";

const RadarChartClient = dynamic(
  () => import("./RadarChartClient"),
  { ssr: false }
);

export default function RadarPage() {
  return (
    <main>
      <h2 style={{ marginBottom: 8 }}>Radar VEFS — DEMO</h2>
      <p style={{ opacity: 0.85, maxWidth: 720 }}>
        Visualización ejecutiva de riesgos invisibles detectados a partir de
        Señales Débiles. El área y la forma del polígono revelan patrones que
        anticipan impacto potencial en el VAN.
      </p>

      <RadarChartClient />

      <p style={{ marginTop: 24, opacity: 0.75 }}>
        *Datos simulados con fines demostrativos.
      </p>
    </main>
  );
}

