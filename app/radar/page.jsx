import dynamic from "next/dynamic";

const RadarChartClient = dynamic(
  () => import("./RadarChartClient"),
  { ssr: false }
);

export default function RadarPage() {
  return (
    <main>
      <h2>Radar VEFS – DEMO</h2>

      <p>
        Visualización interactiva de riesgos invisibles basada en
        Señales Débiles. Datos simulados con fines demostrativos.
      </p>

      <RadarChartClient />

      <p style={{ marginTop: 30, opacity: 0.8 }}>
        En la versión completa, este radar permite simular escenarios
        y evaluar impacto en el VAN.
      </p>
    </main>
  );
}
