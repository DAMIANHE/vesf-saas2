import Link from "next/link";

export default function OnboardingPage() {
  return (
    <main>
      <h2>Onboarding VEFS</h2>

      <p>
        VEFS no se basa en indicadores tradicionales.
        Analiza Señales Débiles que aún no aparecen en los reportes,
        pero que ya están afectando el futuro del negocio.
      </p>

      <p>
        En el siguiente paso verás un Radar VEFS con 10 variables
        estratégicas priorizadas.
      </p>

      <Link href="/radar">
        Ver Radar VEFS →
      </Link>
    </main>
  );
}
