'use client'

import ProjectInquiryModal from "../components/ProjectInquiryModal";
import ContactModal from "../components/ContactModal";
import { useEffect, useState, useRef } from 'react';
import { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


export default function PremiumDeveloperPortfolio() {

  const [language, setLanguage] = useState('de')
  const [modalOpen, setModalOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const navRef = useRef(null);
  const heroRef = useRef(null)
  const heroLeftRef = useRef(null)
  const heroRightRef = useRef(null)
  const heroButtonsRef = useRef(null)

  const projectsRef = useRef([]);
  
  const scrollToSection = (id, button) => {
    gsap.fromTo(
      button,
      { scale: 1 },
      {
        scale: 0.92,
        duration: 0.12,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(button, { clearProps: "all" });

          gsap.to(window, {
            scrollTo: `#${id}`,
            duration: 1.2,
            ease: "power3.inOut",
          });
        },
      }
    );
  };

  const openProjectModal = (button) => {
    gsap.fromTo(
      button,
      { scale: 1 },
      {
        scale: 0.92,
        duration: 0.12,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(button, { clearProps: "all" });
          setModalOpen(true);
        },
      }
    );
  };


  // Language
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")

    if (savedLanguage) {
      setLanguage(savedLanguage)
    } else {
      const browserLanguage = navigator.language.toLowerCase()

      if (browserLanguage.startsWith("en")) {
        setLanguage("en")
      } else {
        setLanguage("de")
      }
    }
  }, [])

  // GSAP Animations
  useLayoutEffect(() => {

    gsap.set(heroRef.current, {
      autoAlpha: 0,
    });

    gsap.set(heroLeftRef.current, {
      opacity: 0,
      x: -60,
    });

    gsap.set(heroRightRef.current, {
      opacity: 0,
      x: 80,
    });

    gsap.set(navRef.current, {
      opacity: 0,
      y: -80,
      filter: "blur(10px)",
    });

    const tl = gsap.timeline();

    tl.to(navRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power3.out",
    });

    tl.to(heroRef.current, {
      autoAlpha: 1,
      duration: 0.01,
    });

    tl.to(heroLeftRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
    })

    tl.to(heroRightRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.6")

    tl.from(heroButtonsRef.current, {
      opacity: 0,
      y: 60,
      scale: 0.92,
      duration: 0.9,
      ease: "back.out(1.8)",
    }, "-=0.1");

    projectsRef.current.forEach((card) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        scale: 0.97,
        duration: 0.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });
    });


  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

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

      projectList: [
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
          title: "Strong Fitness Experiences",
          category: "Fitness",
          image: "/fitness-project.png",
          link: "#",
        },
        {
          title: "Mindset Coaching",
          category: "Online Coaching",
          image: "/mindset_coaching_project.png",
          link: "#",
        },
      ],

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

     modal: {
        title: "Start your Project",
        subtitle: "Tell me a little about your business. This only takes about a minute.",

        successTitle: "Let's build something great.",
        successText: "Your inquiry has been sent successfully.\nI'll review your project and get back to you within 24 hours.",
        close: "Close",

        step1Title: "What kind of website do you need?",

        landingPage: "Landing Page",
        landingPageDescription: "Perfect for promoting one service or product.",

        businessWebsite: "Business Website",
        businessWebsiteDescription: "A complete online presence for your company.",

        portfolio: "Portfolio",
        portfolioDescription: "Showcase your work and previous projects.",

        onlineShop: "Online Shop",
        onlineShopDescription: "Sell products directly through your website.",

        notSure: "I'm not sure yet",
        notSureDescription: "We'll figure out the best solution together.",

        step2Title: "Tell me about your project",
        step2Subtitle: "The more details you provide, the better I can understand your goals.",

        projectPlaceholder: "Describe your business, what you offer, your goals, and anything else you'd like me to know...",

        helper1: "A few sentences are enough to get started.",
        helper2: "Great start!",
        helper3: "Nice amount of detail.",
        helper4: "Perfect! This gives me a good understanding.",

        step3Title: "Almost done!",
        step3Subtitle: "Just a few contact details so I can get back to you.",

        namePlaceholder: "Your Name",
        emailPlaceholder: "Email Address",
        phonePlaceholder: "Phone Number (optional)",

        budgetTitle: "Which option fits your project best?",
        budgetSubtitle: "This just helps me understand the scope. We can always adjust it later.",

        starter: "Starter",
        starterPrice: "from €500",
        starterDescription: "Perfect for simple landing pages or one-page websites.",

        growth: "Growth",
        growthPrice: "€1,000+",
        growthDescription: "Ideal for most small business websites.",

        premium: "Premium",
        premiumPrice: "Custom",
        premiumDescription: "Custom websites with advanced functionality.",

        unsureBudget: "Not sure yet",
        unsureBudgetDescription: "Let's find the right solution together.",

        back: "← Back",
        continue: "Continue →",
        submit: "Submit →",
        sending: "Sending...",
      }

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


      projectList: [
          {
            title: "Stilvolle Pizzeria",
            category: "Restaurant",
            image: "/pizza_place.png",
            link: "#",
          },
          {
            title: "Modernes Tattoo Studio",
            category: "Tattoo Studio",
            image: "/tattoo-project.png",
            link: "#",
          },
          {
            title: "Starke Fitness Erlebnisse",
            category: "Fitness",
            image: "/fitness-project.png",
            link: "#",
          },
          {
            title: "Mindset Coaching",
            category: "Online Coaching",
            image: "/mindset_coaching_project.png",
            link: "#",
          },
      ],

      philosophyLabel: "Philosophie",
      philosophyTitle1: "Die meisten Webseiten werden",
      philosophyTitle2: "innerhalb von Sekunden vergessen.",
      philosophyText: "Eine moderne Webseite ist mehr als nur Information. Sie vermittelt Vertrauen, Identität und Emotion.",

      codeText1: "moderne Nutzererlebnisse gestalten",
      codeText2: "responsive Interfaces entwickeln",
      codeText3: "Performance gezielt optimieren",
      codeText4: "cinematisches Webdesign erschaffen",

      ctaLabel: "Gemeinsam Ideen verwirklichen",
      ctaTitle1: "Dein Unternehmen",
      ctaTitle2: "verdient besseres Design.",

      ctaText: "Moderne Webseiten für Unternehmen, die professionell, vertrauenswürdig und einzigartig wirken möchten.",

      startProject: "Projekt starten",

      rightsReserved: "Alle Rechte vorbehalten.",

      modal: {
        title: "Projekt starten",
        subtitle: "Erzähl mir etwas über dein Unternehmen. Das dauert nur etwa eine Minute.",

        successTitle: "Lass uns etwas Großartiges erschaffen.",
        successText: "Deine Anfrage wurde erfolgreich versendet.\nIch schaue sie mir an und melde mich innerhalb von 24 Stunden bei dir.",
        close: "Schließen",

        step1Title: "Welche Art von Webseite benötigst du?",

        landingPage: "Landingpage",
        landingPageDescription: "Ideal, um eine Dienstleistung oder ein Produkt zu präsentieren.",

        businessWebsite: "Unternehmenswebseite",
        businessWebsiteDescription: "Ein professioneller Webauftritt für dein Unternehmen.",

        portfolio: "Portfolio",
        portfolioDescription: "Präsentiere deine Arbeiten und bisherigen Projekte.",

        onlineShop: "Onlineshop",
        onlineShopDescription: "Verkaufe deine Produkte direkt über deine Webseite.",

        notSure: "Ich bin mir noch nicht sicher",
        notSureDescription: "Gemeinsam finden wir die passende Lösung.",

        step2Title: "Erzähl mir von deinem Projekt",
        step2Subtitle: "Je mehr Informationen du angibst, desto besser kann ich deine Ziele verstehen.",

        projectPlaceholder: "Beschreibe dein Unternehmen, deine Leistungen, deine Ziele und alles Weitere, was ich wissen sollte...",

        helper1: "Ein paar Sätze reichen völlig aus.",
        helper2: "Guter Anfang!",
        helper3: "Das sind schon hilfreiche Informationen.",
        helper4: "Perfekt! So bekomme ich ein gutes Bild von deinem Projekt.",

        step3Title: "Fast geschafft!",
        step3Subtitle: "Nur noch ein paar Kontaktdaten, damit ich mich bei dir melden kann.",

        namePlaceholder: "Dein Name",
        emailPlaceholder: "E-Mail-Adresse",
        phonePlaceholder: "Telefonnummer (optional)",

        budgetTitle: "Welche Option passt am besten zu deinem Projekt?",
        budgetSubtitle: "Das hilft mir dabei, den Umfang besser einzuschätzen. Wir können das später jederzeit anpassen.",

        starter: "Starter",
        starterPrice: "ab 500 €",
        starterDescription: "Perfekt für Landingpages oder einfache Onepager.",

        growth: "Pro",
        growthPrice: "ab 1.000 €",
        growthDescription: "Ideal für die meisten Unternehmenswebseiten.",

        premium: "Premium",
        premiumPrice: "Individuell",
        premiumDescription: "Maßgeschneiderte Webseiten mit erweiterten Funktionen.",

        unsureBudget: "Noch unsicher",
        unsureBudgetDescription: "Gemeinsam finden wir die passende Lösung.",

        back: "← Zurück",
        continue: "Weiter →",
        submit: "Absenden →",
        sending: "Wird gesendet...",
      }

    },
  }
  const t = translations[language]

  const projects = t.projectList

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
      <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/20 opacity-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex items-center justify-between">
          <div className="text-xl font-bold tracking-widest uppercase">
            <button onClick={() => scrollToSection("hero")} className="cursor-pointer">
              Arne Seifert Webdesign.
            </button>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm text-white/70">
            <button onClick={() => scrollToSection("work")} className="cursor-pointer hover:text-white transition">
              {t.work}
            </button>
            <button onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-white transition">
              {t.about}
            </button>
            <button onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-white transition">
              {t.contact}
            </button>
          </div>

          <div className="flex items-center gap-4">

            <div className="flex items-center p-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">

              <button
                onClick={() => changeLanguage("en")}
                className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  language === 'en'
                    ? 'bg-white text-black shadow-lg'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                EN
              </button>

              <button
                onClick={() => changeLanguage("de")}
                className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  language === 'de'
                    ? 'bg-white text-black shadow-lg'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                DE
              </button>
            </div>

            <button onClick={(e) => scrollToSection("contact", e.currentTarget)} className="cursor-pointer px-5 py-2 rounded-full bg-white text-black font-medium hover:scale-105 transition">
              {t.navContact}
            </button>

          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center px-6 pt-32 opacity-0">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div ref={heroLeftRef} className="opacity-0">
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

            <div ref={heroButtonsRef} className="mt-10 flex flex-wrap gap-4">
              <button onClick={(e) => scrollToSection("work", e.currentTarget)} className="cursor-pointer px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition duration-300 shadow-2xl">
                {t.viewProjects}
              </button>

              <button onClick={(e) => scrollToSection("about", e.currentTarget)} className="cursor-pointer px-8 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300">
                {t.philosophy}
              </button>
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
          <div ref={heroRightRef} className="relative h-[420px] flex items-center justify-center lg:h-[600px] opacity-0">
            {/* Main Card */}
            <div className="relative w-[280px] h-[360px] md:w-[420px] md:h-[520px] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
  
          {/* Background Image */}
          <img
            src="single_seating_image_pullover.png"
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
            <div className="absolute hidden md:block top-10 left-0 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl rotate-[-8deg] shadow-xl animate-bounce">
              <div className="text-xs text-white/50">{t.smoothAnimations}</div>
              <div className="mt-1 text-lg font-bold">{t.gsapReady}</div>
            </div>

            <div className="absolute hidden md:block bottom-16 right-0 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl rotate-[8deg] shadow-xl">
              <div className="text-xs text-white/50">{t.responsiveDesign}</div>
              <div className="mt-1 text-lg font-bold">{t.mobileFirst}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Marquee */}
      <section className="hidden md:block border-y border-white/10 overflow-hidden py-6 bg-white/[0.03]">
        <div className="flex justify-center gap-32 whitespace-nowrap text-white/40 text-xl font-semibold tracking-[0.3em] uppercase px-10">
          <span>Web Design</span>
          <span>Modern UX</span>
          <span>Performance</span>
          <span>Branding</span>
          <span>Landing Pages</span>
          <span>Creative Development</span>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="md:hidden border-y border-white/10 py-6 bg-white/[0.03]">
        <div className="grid grid-cols-2 gap-y-4 text-center text-white/40 text-xs font-semibold tracking-[0.25em] uppercase">
          <span>Web Design</span>
          <span>Modern UX</span>
          <span>Performance</span>
          <span>Branding</span>
          <span>Landing Pages</span>
          <span>Development</span>
        </div>
      </section>

      {/* Project Section */}
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
                ref={(el) => (projectsRef.current[index] = el)}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition duration-500"
              >
                <div className="h-[320px] md:h-[400px] bg-gradient-to-br from-white/5 to-white/[0.02] p-8 flex flex-col justify-between">
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

                  <div className="relative rounded-3xl overflow-hidden border border-white/10 h-[180px] md:h-[340px] bg-black flex items-center justify-center group">

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
      <section id="contact" className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10" />

          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">
              {t.ctaLabel}
            </p>

            <h2 className="mt-6 text-4xl md:text-7xl font-black tracking-tight leading-[0.95]">
              {t.ctaTitle1}
              <br />
              {t.ctaTitle2}
            </h2>

            <p className="mt-8 text-lg text-white/60 max-w-2xl mx-auto">
              {t.ctaText}
            </p>

            <button onClick={(e) => openProjectModal(e.currentTarget)} className="cursor-pointer mt-12 px-10 py-5 rounded-full bg-white text-black text-lg font-semibold hover:scale-105 transition duration-300 shadow-2xl">
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
            <a href="https://instagram.com/arne.webdesign" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              Instagram
            </a>
            <a href="https://facebook.com/Arne.Seifert06" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              Facebook
            </a>
            <a href="https://github.com/ArneDebug" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              GitHub
            </a>
            <button onClick={() => setContactOpen(true)} className="hover:text-white transition">
              {t.contact}
            </button>
          </div>
        </div>
      </footer>

      <ProjectInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        t={t.modal}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
     />      

    </div>
  
  )

}
