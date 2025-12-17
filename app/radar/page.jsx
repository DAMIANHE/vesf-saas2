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
<p style={{ marginBottom: 16, maxWidth: 760 }}>
  Este radar no muestra indicadores históricos.  
  Muestra <strong>riesgos invisibles</strong> detectados a partir de Señales Débiles
  que aún no impactan en los reportes tradicionales, pero ya están
  condicionando el valor futuro del negocio.
</p>

<p style={{ marginBottom: 24, maxWidth: 760, opacity: 0.85 }}>
  <strong>Cómo leerlo:</strong> cuanto más irregular y extendida es la forma del
  polígono, mayor es la dispersión de riesgos estratégicos y mayor la
  probabilidad de impacto silencioso en el VAN si no se actúa a tiempo.
</p>

      <RadarChartClient />

      <p style={{ marginTop: 24, opacity: 0.75 }}>
        *Datos simulados con fines demostrativos.
      </p>
      <section style={{ marginTop: 40 }}>
  <h3>Lectura estratégica por variable</h3>

  <table
    style={{
      width: "100%",
      marginTop: 16,
      borderCollapse: "collapse"
    }}
  >
    <tbody>
      <tr>
        <td><strong>Inflación</strong></td>
        <td>
          Señales tempranas de presión sobre costos y poder adquisitivo
          que aún no se reflejan completamente en precios ni márgenes.
        </td>
      </tr>
      <tr>
        <td><strong>Morosidad</strong></td>
        <td>
          Cambios sutiles en comportamiento de pago que anticipan deterioro
          de cartera antes de aparecer en indicadores formales.
        </td>
      </tr>
      <tr>
        <td><strong>Fondeo</strong></td>
        <td>
          Dependencia creciente de fuentes de financiamiento más sensibles
          al contexto macroeconómico.
        </td>
      </tr>
      <tr>
        <td><strong>Crecimiento</strong></td>
        <td>
          Ritmo de expansión que puede estar sostenido por factores no
          estructurales o de corta duración.
        </td>
      </tr>
      <tr>
        <td><strong>Liquidez</strong></td>
        <td>
          Tensiones incipientes entre ingresos y egresos que aún no
          comprometen la operación diaria, pero sí la flexibilidad futura.
        </td>
      </tr>
      <tr>
        <td><strong>Capital</strong></td>
        <td>
          Capacidad de absorción de shocks que podría verse erosionada
          si varias señales débiles se materializan simultáneamente.
        </td>
      </tr>
      <tr>
        <td><strong>Digitalización</strong></td>
        <td>
          Brechas tecnológicas que no generan problemas hoy, pero limitan
          la velocidad de reacción ante cambios del entorno.
        </td>
      </tr>
      <tr>
        <td><strong>Productividad</strong></td>
        <td>
          Desalineaciones operativas que reducen eficiencia sin ser
          evidentes en los reportes de corto plazo.
        </td>
      </tr>
      <tr>
        <td><strong>Confianza</strong></td>
        <td>
          Variaciones sutiles en la percepción de clientes, asociados o
          equipos internos que anticipan cambios de comportamiento.
        </td>
      </tr>
      <tr>
        <td><strong>Regulación</strong></td>
        <td>
          Señales tempranas de cambios normativos que podrían alterar
          costos, procesos o márgenes futuros.
        </td>
      </tr>
    </tbody>
  </table>
</section>
<section style={{ marginTop: 40, maxWidth: 760 }}>
  <h3>¿Qué decisión habilita VEFS?</h3>
  <p>
    VEFS no reemplaza el análisis financiero tradicional.
    Lo complementa, permitiendo actuar <strong>antes</strong> de que los
    riesgos se vuelvan visibles en los estados financieros.
  </p>
  <p style={{ opacity: 0.85 }}>
    La ventaja no está en predecir el futuro, sino en
    <strong>reducir sorpresas estratégicas</strong>.
  </p>
</section>

    </main>
  );
}

