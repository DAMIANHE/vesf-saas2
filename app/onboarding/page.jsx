import Link from "next/link";

export default function OnboardingPage() {
  return (
    <main>
      <h1>Onboarding VEFS</h1>
      <p>Paso introductorio</p>

      <Link href="/radar">
        Ir al Radar
      </Link>
    </main>
  );
}
