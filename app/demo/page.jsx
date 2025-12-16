import Link from "next/link";

export default function DemoPage() {
  return (
    <main>
      <h1>VEFS DEMO 10 DÍAS</h1>
      <p>Acceso de prueba</p>

      <Link href="/onboarding">
        Comenzar onboarding
      </Link>
    </main>
  );
}
