const vefsData = [
  { variable: "Inflación", valor: 72 },
  { variable: "Morosidad", valor: 68 },
  { variable: "Fondeo", valor: 55 },
  { variable: "Crecimiento", valor: 61 },
  { variable: "Liquidez", valor: 58 },
  { variable: "Capital", valor: 64 },
  { variable: "Digitalización", valor: 49 },
  { variable: "Productividad", valor: 57 },
  { variable: "Confianza", valor: 66 },
  { variable: "Regulación", valor: 53 }
];

export default function RadarPage() {
  return (
    <main>
      <h2>Radar VEFS – Datos DEMO</h2>

      <p>
        Este radar representa un análisis preliminar de riesgo invisible
        basado en Señales Débiles. Los valores son simulados y se
        presentan únicamente con fines demostrativos.
      </p>

      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th align="left">Variable</th>
            <th align="left">Nivel de Riesgo</th>
          </tr>
        </thead>
        <tbody>
          {vefsData.map((item) => (
            <tr key={item.variable}>
              <td style={{ padding: "8px 0" }}>{item.variable}</td>
              <td style={{ padding: "8px 0" }}>{item.valor} / 100</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ marginTop: "30px", opacity: 0.8 }}>
        En la versión completa, estos datos se visualizan en un Radar
        interactivo y se comparan contra escenarios futuros.
      </p>
    </main>
  );
}
