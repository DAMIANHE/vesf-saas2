import Link from "next/link";

export default function DemoPage() {
  return (
    <main>
      <h2>VEFS DEMO 10 DÍAS</h2>

      <p>
        Esta versión demo muestra cómo VEFS permite visualizar riesgos
        invisibles a partir de Señales Débiles, antes de que impacten
        en el valor futuro de la organización.
      </p>

      <ul>
        <li>✔ Datos simulados</li>
        <li>✔ Sin fórmulas</li>
        <li>✔ Enfoque directivo</li>
      </ul>

      <Link href="/onboarding">
        Continuar al Onboarding →
      </Link>
    </main>
  );
}

