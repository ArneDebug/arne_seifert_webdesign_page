export default function LegalSection({ title, children }) {
    return (
        <section className="pt-16 mt-16 border-t border-white/10">
            <h2 className="text-xl font-medium">
                {title}
            </h2>

            <div className="mt-5 text-white/70 leading-8 space-y-5">
                {children}
            </div>
        </section>
    );
}