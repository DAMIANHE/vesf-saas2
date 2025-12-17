import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ maxWidth: 960 }}>
      {/* HERO */}
      <h1>VEFS</h1>
      <h2>
        El radar que permite ver el riesgo antes de que impacte en el VAN
      </h2>

      <p style={{ marginTop: 16, opacity: 0.85 }}>
        VEFS detecta riesgos invisibles a partir de Señales Débiles
        y permite tomar decisiones estratégicas antes de que los
        problemas aparezcan en los reportes financieros.
      </p>

      <div style={{ marginTop: 24 }}>
        <Link href="/radar">
          👉 Ver DEMO estratégico
        </Link>
      </div>

      {/* PROBLEMA */}
      <section style={{ marginTop: 48 }}>
        <h3>El mayor riesgo no aparece en los reportes</h3>
        <p>
          La mayoría de las organizaciones detectan los riesgos
          cuando ya impactaron en resultados, liquidez o rentabilidad.
        </p>
        <p style={{ opacity: 0.85 }}>
          Los indicadores tradicionales miran el pasado.
          Las decisiones estratégicas necesitan ver antes.
        </p>
      </section>

      {/* QUÉ ES */}
      <section style={{ marginTop: 40 }}>
        <h3>¿Qué es VEFS?</h3>
        <p>
          VEFS es un sistema de inteligencia estratégica que permite
          visualizar riesgos emergentes a partir de Señales Débiles,
          antes de que se materialicen en impactos económicos.
        </p>
      </section>

      {/* CÓMO FUNCIONA */}
      <section style={{ marginTop: 40 }}>
        <h3>Cómo funciona</h3>
        <ul>
          <li>Identifica Señales Débiles del entorno y la organización</li>
          <li>Prioriza variables estratégicas críticas</li>
          <li>Visualiza escenarios de riesgo en un radar ejecutivo</li>
          <li>Permite anticipar decisiones antes del impacto financiero</li>
        </ul>
      </section>

      {/* BENEFICIOS */}
      <section style={{ marginTop: 40 }}>
        <h3>Qué gana el directorio con VEFS</h3>
        <ul>
          <li>Menos sorpresas estratégicas</li>
          <li>Mejores decisiones bajo incertidumbre</li>
          <li>Priorización clara de riesgos críticos</li>
          <li>Protección del VAN y del valor futuro</li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={{ marginTop: 48 }}>
        <h3>Ver antes cambia la calidad de las decisiones</h3>
        <p style={{ opacity: 0.85 }}>
          VEFS no predice el futuro.
          Reduce la incertidumbre estratégica.
        </p>

        <Link href="/radar">
          👉 Acceder al DEMO VEFS
        </Link>
      </section>
    </main>
  );
}
