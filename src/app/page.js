'use client'

import { useState } from 'react'

export default function PremiumDeveloperPortfolio() {

  const [language, setLanguage] = useState('en')

  const translations = {
  en: {
    work: "Work",
    about: "About",
    contact: "Contact",

    navContact: "Let's Talk",

    modernWebDesignerAndDeveloper: "Modern Web Designer & Developer",

    heroTitle1: "Websites",
    heroTitle2: "that feel",
    heroHighlight: "premium.",
    heroDescription:
      "I build cinematic landing pages and modern digital experiences for businesses that want more than just a basic website.",

    viewProjects: "View Projects",
    philosophy: "My Philosophy",

    projects: "Projects",
    responsive: "Responsive",
    fast: "Fast",
    optimized: "Optimized",

    smoothAnimations: "Smooth Animations",
    gsapReady: "GSAP Ready",
    modernLandingPagesAndPremiumDigitalExperiences: "Modern landing pages and premium digital experiences.",
    responsiveDesign: "Responsive Design",
    mobileFirst: "Mobile First",

    selectedWork: "Selected Work",
    designedTo: "Designed to",
    standOut: "stand out.",

    clientProject: "Client Project",
    landingPageName: "Modern Business Landing Page",
    preview: "Preview",

    philosophyLabel: "Philosophy",
    philosophyTitle1: "Most websites are forgotten",
    philosophyTitle2: "within seconds.",
    philosophyText:
      "A modern website is not just information. It’s trust, perception, identity and emotion.",

    codeText1: "designing modern experiences",
    codeText2: "building responsive interfaces",
    codeText3: "optimizing performance",
    codeText4: "creating cinematic web design",
    
    ctaLabel: "Let's Build Something",
    ctaTitle1: "Your business",
    ctaTitle2: "deserves better design.",

    ctaText:
      "Modern websites for businesses that want to look professional, trustworthy and visually different from the competition.",

    startProject: "Start a Project",

    rightsReserved: "All rights reserved.",

  },

  de: {
    work: "Einblicke",
    about: "Über mich",
    contact: "Kontakt",

    navContact: "Loslegen",

    modernWebDesignerAndDeveloper: "Webdesigner & Entwickler",

    heroTitle1: "Webseiten",
    heroTitle2: "mit echtem",
    heroHighlight: "Premium-Gefühl.",

    heroDescription:
      "Ich entwickle moderne Landingpages und digitale Erlebnisse für Unternehmen, die mehr wollen als nur eine einfache Webseite.",

    viewProjects: "Projekte ansehen",
    philosophy: "Meine Philosophie",

    projects: "Projekte",
    responsive: "Responsiv",
    fast: "Schnell",
    optimized: "Optimiert",

    smoothAnimations: "Flüssige Animationen",
    gsapReady: "GSAP-Optimiert",
    modernLandingPagesAndPremiumDigitalExperiences: "Modernes Webdesign für starke Online-Auftritte",
    responsiveDesign: "Responsives Design",
    mobileFirst: "Mobil gedacht",

    selectedWork: "Ausgewählte Projekte",
    designedTo: "Entwickelt um",
    standOut: "aufzufallen.",

    clientProject: "Kundenprojekt",
    landingPageName: "Moderne Business-Landingpage",
    preview: "Vorschau",

    philosophyLabel: "Philosophie",
    philosophyTitle1: "Die meisten Webseiten werden",
    philosophyTitle2: "innerhalb von Sekunden vergessen.",
    philosophyText:
      "Eine moderne Webseite ist mehr als nur Information. Sie vermittelt Vertrauen, Identität und Emotion.",

    codeText1: "moderne Nutzererlebnisse gestalten",
    codeText2: "responsive Interfaces entwickeln",
    codeText3: "Performance gezielt optimieren",
    codeText4: "cinematisches Webdesign erschaffen",

    ctaLabel: "Gemeinsam Ideen verwirklichen",
    ctaTitle1: "Dein Unternehmen",
    ctaTitle2: "verdient besseres Design.",

    ctaText:
      "Moderne Webseiten für Unternehmen, die professionell, vertrauenswürdig und einzigartig wirken möchten.",

    startProject: "Projekt starten",

    rightsReserved: "Alle Rechte vorbehalten.",

  },
}
  const t = translations[language]

  const projects = [
  {
    title: "Classy Pizza Place",
    category: "Restaurant",
    image: "/pizza_place.png",
    link: "#",
  },

  {
    title: "Modern Tattoo Studio",
    category: "Tattoo Studio",
    image: "/tattoo-project.png",
    link: "#",
  },

  {
    title: "Fitness Brand Experience",
    category: "Fitness",
    image: "/fitness-project.png",
    link: "#",
  },

  {
    title: "Coming soon",
    category: "Unknown",
    image: "/physiotherapie.png",
    link: "#",
  },
]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-20rem] left-[-10rem] h-[40rem] w-[40rem] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-[-20rem] right-[-10rem] h-[40rem] w-[40rem] rounded-full bg-cyan-500/20 blur-3xl" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-xl font-bold tracking-widest uppercase">
            <a href= "#">Arne Seifert Webdesign.</a>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm text-white/70">
            <a href="#work" className="hover:text-white transition">
              {t.work}
            </a>
            <a href="#about" className="hover:text-white transition">
              {t.about}
            </a>
            <a href="#contact" className="hover:text-white transition">
              {t.contact}
            </a>
          </div>

          <div className="flex items-center gap-4">

            <div className="flex items-center p-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">

              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  language === 'en'
                    ? 'bg-white text-black shadow-lg'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                EN
              </button>

              <button
                onClick={() => setLanguage('de')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  language === 'de'
                    ? 'bg-white text-black shadow-lg'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                DE
              </button>
            </div>

            <a href= "#contact" className="px-5 py-2 rounded-full bg-white text-black font-medium hover:scale-105 transition">
              {t.navContact}
            </a>

          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 pt-32">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full text-sm text-white/70 backdrop-blur-lg">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              {t.modernWebDesignerAndDeveloper}
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight">

              <>
                {t.heroTitle1}
                <br />
                {t.heroTitle2}
                <br />
                <span className="text-white/40">
                  {t.heroHighlight}
                </span>
              </>

            </h1>

            <p className="mt-8 max-w-xl text-lg text-white/60 leading-relaxed">

              {t.heroDescription}

            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#work" className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition duration-300 shadow-2xl">
                {t.viewProjects}
              </a>

              <a href="#about" className="px-8 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300">
                {t.philosophy}
              </a>
            </div>

            <div className="mt-16 flex gap-10 text-white/50 text-sm">
              <div>
                <div className="text-3xl font-bold text-white">12+</div>
                {t.projects}
              </div>

              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                {t.responsive}
              </div>

              <div>
                <div className="text-3xl font-bold text-white">{t.fast}</div>
                {t.optimized}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative h-[600px] hidden lg:flex items-center justify-center">
            {/* Main Card */}
            <div className="relative w-[420px] h-[520px] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
  
          {/* Background Image */}
          <img
            src="/me.jpg"
            alt="Arne"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Browser Top */}
              <div className="flex items-center gap-2 px-6 py-5 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>

          <div className="absolute bottom-0 left-0 p-8 z-10">
            <div className="text-white/50 text-sm uppercase tracking-[0.3em]">
              Creative Developer
            </div>

            <h2 className="mt-3 text-5xl font-black tracking-tight">
              ARNE
            </h2>

            <p className="mt-4 max-w-xs text-white/70">
              {t.modernLandingPagesAndPremiumDigitalExperiences}
            </p>
          </div>

        </div>

            {/* Floating Cards */}
            <div className="absolute top-10 left-0 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl rotate-[-8deg] shadow-xl animate-bounce">
              <div className="text-xs text-white/50">{t.smoothAnimations}</div>
              <div className="mt-1 text-lg font-bold">{t.gsapReady}</div>
            </div>

            <div className="absolute bottom-16 right-0 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl rotate-[8deg] shadow-xl">
              <div className="text-xs text-white/50">{t.responsiveDesign}</div>
              <div className="mt-1 text-lg font-bold">{t.mobileFirst}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-white/10 overflow-hidden py-6 bg-white/[0.03]">
        <div className="flex justify-center gap-32 whitespace-nowrap text-white/40 text-xl font-semibold tracking-[0.3em] uppercase animate-pulse px-10">
          <span>Web Design</span>
          <span>Modern UX</span>
          <span>Performance</span>
          <span>Branding</span>
          <span>Landing Pages</span>
          <span>Creative Development</span>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">
              {t.selectedWork}
            </p>
            <h2 className="mt-4 text-5xl md:text-7xl font-black tracking-tight">
              {t.designedTo}
              <br />
              {t.standOut}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition duration-500"
              >
                <div className="h-[400px] bg-gradient-to-br from-white/5 to-white/[0.02] p-8 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-white/40 text-sm">{project.category}</div>
                      <h3 className="mt-2 text-3xl font-bold">
                        {project.title}
                      </h3>
                    </div>

                    <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:rotate-45 transition duration-500">
                      ↗
                    </div>
                  </div>

                  <div className="relative rounded-3xl overflow-hidden border border-white/10 h-[340px] bg-black flex items-center justify-center group">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        id="about"
        className="py-32 px-6 border-y border-white/10 bg-white/[0.02]"
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            {t.philosophyLabel}
          </p>

          <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight tracking-tight">
            {t.philosophyTitle1}
            <br />
            {t.philosophyTitle2}
          </h2>

          <p className="mt-10 text-lg text-white/60 leading-relaxed max-w-3xl mx-auto">
            {t.philosophyText}
          </p>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[2rem] border border-white/10 bg-white/[0.03] overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-6 py-5 border-b border-white/10 bg-black/40">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>

          <div className="p-10 font-mono text-green-400 text-lg leading-loose">
            <div>&gt; {t.codeText1}</div>
            <div>&gt; {t.codeText2}</div>
            <div>&gt; {t.codeText3}</div>
            <div>&gt; {t.codeText4}</div>
            <div className="animate-pulse">&gt; _</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10" />

          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">
              {t.ctaLabel}
            </p>

            <h2 className="mt-6 text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
              {t.ctaTitle1}
              <br />
              {t.ctaTitle2}
            </h2>

            <p className="mt-8 text-lg text-white/60 max-w-2xl mx-auto">
              {t.ctaText}
            </p>

            <button className="mt-12 px-10 py-5 rounded-full bg-white text-black text-lg font-semibold hover:scale-105 transition duration-300 shadow-2xl">
              {t.startProject}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 text-white/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-sm">
          <div>© 2026 Arne Seifert Webdesign. {t.rightsReserved}</div>

          <div className="flex gap-6">
            <a href="https://instagram.com/maxi.madness06" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              Instagram
            </a>
            <a href="https://facebook.com/Arne.Seifert06" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              Facebook
            </a>
            <a href="https://github.com/ArneDebug" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              GitHub
            </a>
            <a href="#" className="hover:text-white transition">
              {t.contact}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
