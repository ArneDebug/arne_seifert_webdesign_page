import Link from "next/link";

export default function ImpressumPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <section className="mx-auto max-w-4xl px-6 py-24">

                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-white/50 transition hover:text-white"
                >
                    ← Back to Home
                </Link>

                <h1 className="mt-10 text-5xl font-semibold tracking-tight">
                    Impressum
                </h1>

                <p className="mt-4 text-white/60">
                    Information according to § 5 TMG
                </p>

                <div className="mt-16 space-y-10">
                    <div>
                        <h2 className="text-lg font-medium text-white">
                            Provider
                        </h2>

                        <div className="mt-4 space-y-1 text-white/70 leading-7">

                            <p>Arne Seifert</p>

                            <p>Rotbuchenweg 5</p>

                            <p>44339, Dortmund</p>

                            <p>Germany</p>

                        </div>
                    </div>
                </div>

                <div className="mt-14">
                    <h2 className="text-lg font-medium text-white pt-16 mt-16 border-t border-white/10">
                        Contact
                    </h2>

                    <div className="mt-4 space-y-1 text-white/70">

                        <p>
                            Email:{" "}
                            <a
                                href="mailto:arnemaxseifert@gmail.com"
                                className="cursor-pointer hover:text-white transition"
                            >
                                arnemaxseifert@gmail.com
                            </a>
                        </p>

                        <p>
                            Phone:{" "}
                            <a
                                href="tel:+491631292449"
                                className="cursor-pointer hover:text-white transition"
                            >
                                +49 163 1292449
                            </a>
                        </p>

                    </div>
                </div>

                <div className="mt-14">
                    <h2 className="text-lg font-medium text-white pt-16 mt-16 border-t border-white/10">
                        Responsible for content according to § 18 MStV
                    </h2>

                    <p className="mt-4 text-white/70">
                        Arne Seifert
                    </p>
                </div>

                <div className="mt-24 pt-8 border-t border-white/10">

                    <p className="text-sm text-white/40">
                        Last updated: 27 July 2026
                    </p>

                </div>

            </section>

        </main>
    );
}