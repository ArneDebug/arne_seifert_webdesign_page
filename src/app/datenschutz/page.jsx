import Link from "next/link";
import LegalSection from "@/components/LegalSection";

export default function Datenschutz() {
    return (
        <main className="min-h-screen bg-black text-white">
            <section className="mx-auto max-w-4xl px-6 py-24">

                <Link href="/">
                    ← Back
                </Link>

                <h1 className="mt-10 text-5xl font-semibold tracking-tight">
                    Datenschutzerklärung
                </h1>

                <p className="mt-5 leading-8 text-white/70">
                    Zuletzt aktualisiert
                </p>

                <LegalSection title="1. Allgemeine Hinweise">
                    <p></p>
                </LegalSection>

                <LegalSection title="2. Verantwortlicher">
                    <p></p>
                </LegalSection>

                <LegalSection title="3. Hosting">
                    <p></p>
                </LegalSection>

            </section>
        </main>
    );
}