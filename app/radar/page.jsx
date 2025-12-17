import dynamic from "next/dynamic";

const RadarChartClient = dynamic(
  () => import("./RadarChartClient"),
  { ssr: false }
);

export default function RadarPage() {
  return (
    <main>
      <h2 style={{ marginBottom: 8 }}>
  VEFS — Radar Estratégico de Riesgo Invisible
</h2>

     
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
<section style={{ marginTop: 24, maxWidth: 760 }}>
  <p>
    En la mayoría de las organizaciones, los riesgos se detectan
    cuando ya impactaron en resultados, liquidez o rentabilidad.
  </p>
  <p style={{ opacity: 0.85 }}>
    VEFS cambia ese enfoque: permite visualizar señales tempranas
    de tensión estratégica y actuar antes de que el riesgo se
    vuelva evidente.
  </p>
</section>

      <RadarChartClient />

      <p style={{ marginTop: 24, opacity: 0.75 }}>
        *Datos simulados con fines demostrativos.
      </p>
      <h3 style={{ marginTop: 40 }}>
  ¿Qué está mostrando este radar?
</h3>

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

<section style={{ marginTop: 48, maxWidth: 760 }}>
  <h3>¿Qué decisión habilita VEFS?</h3>

  <p>
    VEFS no reemplaza los estados financieros ni los indicadores
    tradicionales. Los complementa.
  </p>

  <p style={{ opacity: 0.85 }}>
    Su valor está en reducir sorpresas estratégicas,
    permitiendo al directorio anticipar escenarios,
    priorizar acciones y proteger el VAN antes de que
    el impacto sea irreversible.
  </p>

  <p style={{ marginTop: 16, fontWeight: "bold" }}>
    La ventaja competitiva no está en reaccionar rápido,
    sino en ver antes.
  </p>
</section>

    </main>
  );
}

