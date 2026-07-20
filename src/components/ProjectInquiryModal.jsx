"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import emailjs from "@emailjs/browser";

export default function ProjectInquiryModal({ isOpen, onClose }) {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const backdropRef = useRef(null);
    const modalRef = useRef(null);
    const contentRef = useRef(null);
    const successRef = useRef(null);
    const checkmarkRef = useRef(null);

    const [shouldRender, setShouldRender] = useState(isOpen);
    const [step, setStep] = useState(1);
    const [projectType, setProjectType] = useState("");
    const [businessDescription, setBusinessDescription] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [budget, setBudget] = useState("");

    const budgetOptions = [
        {
            title: "Starter",
            price: "from €500",
            description: "Perfect for simple landing pages or one-page websites.",
        },
        {
            title: "Growth",
            price: "€1,000+",
            description: "Ideal for most small business websites.",
        },
        {
            title: "Premium",
            price: "Custom",
            description: "Custom websites with advanced functionality.",
        },
        {
            title: "Not sure yet",
            price: "",
            description: "Let's find the right solution together.",
        },
    ];

    const changeStep = (nextStep) => {

        const direction = nextStep > step ? 1 : -1;

        gsap.to(contentRef.current, {
            x: -40 * direction,
            opacity: 0,
            duration: 0.2,
            ease: "power2.out",

            onComplete: () => {

                setStep(nextStep);

                gsap.fromTo(
                    contentRef.current,
                    {
                        x: 40 * direction,
                        opacity: 0,
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.35,
                        ease: "power3.out",
                    }
                );

            },
        });

    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        try {
            console.log({
            service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
            });
            await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            {
                name: name,
                email: email,
                phone: phone,
                projectType: projectType,
                budget: budget,
                businessDescription: businessDescription,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            setSubmitSuccess(true);

        } catch (err) {
            console.error(err);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeModal = () => {
        setStep(1);
        setProjectType("");
        setBusinessDescription("");
        setName("");
        setEmail("");
        setPhone("");
        setBudget("");
        setSubmitSuccess(false);

        onClose();
    };

    useEffect(() => {
        if (!submitSuccess) return;

        gsap.fromTo(
            checkmarkRef.current,
            {
            scale: 0,
            rotate: -20,
            },
            {
            scale: 1,
            rotate: 0,
            duration: 0.5,
            ease: "back.out(2)",
            delay: 0.2,
            }
        );
    }, [submitSuccess]);

    useEffect(() => {
        if (!submitSuccess) return;

        const timer = setTimeout(() => {
            closeModal();
        }, 10000);

        return () => clearTimeout(timer);
    }, [submitSuccess]);

  useEffect(() => {
    if (isOpen) {
        setShouldRender(true);

        document.body.style.overflow = "hidden";

        gsap.set(backdropRef.current, {
        opacity: 0,
        });

        gsap.set(modalRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 40,
        });

        const tl = gsap.timeline();

        tl.to(backdropRef.current, {
        opacity: 1,
        duration: 0.25,
        });

        tl.to(
        modalRef.current,
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
        },
        "-=0.1"
        );
    } else if (shouldRender){
        const tl = gsap.timeline({
        onComplete: () => {
            setShouldRender(false);
            document.body.style.overflow = "auto";
        },
        });

        tl.to(modalRef.current, {
        opacity: 0,
        scale: 0.92,
        y: 40,
        duration: 0.4,
        ease: "power2.in",
        });

        tl.to(
        backdropRef.current,
        {
            opacity: 0,
            duration: 0.3,
        },
        "-=0.15"
        );
    }
    }, [isOpen, shouldRender]);

  if (!shouldRender) return null;



  return (
    <div ref={backdropRef} className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md">

      <div ref={modalRef} className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#111] shadow-2xl">

                {submitSuccess ? (
                    <div
                        ref={successRef}
                        className="flex flex-1 flex-col items-center justify-center p-10 text-center"
                    >
                        <div ref={checkmarkRef} className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                        <svg
                            className="h-12 w-12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                            d="M5 13l4 4L19 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                        </div>

                        <h2 className="text-3xl font-semibold">
                            Let's build something great.
                        </h2>

                        <p className="mt-4 max-w-md text-zinc-400">
                        Your inquiry has been sent successfully.
                        <br />
                        I'll review your project and get back to you within 24 hours.
                        </p>

                        <button
                        onClick={closeModal}
                        className="mt-10 rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:scale-105"
                        >
                        Close
                        </button>
                    </div>
                ) : (

                <>

            <div className="flex-shrink-0 border-b border-white/10 bg-[#111] p-8">
                <div className="flex items-center justify-between">

                    <h2 className="text-4xl font-bold">
                        Start your Project
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-2xl text-zinc-500 hover:text-white transition"
                    >
                        ✕
                    </button>

                </div>

                <p className="mt-4 text-zinc-400 text-lg">
                    Tell me a little about your business.
                    This only takes about a minute.
                </p>

                <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                        className="h-full rounded-full bg-white transition-all duration-500"
                        style={{ width: `${(step / 3) * 100}%` }}
                    />
                </div>
            </div>


            <div
                ref={contentRef}
                className="flex-1 overflow-y-auto p-8"
            >
                


                {step === 1 && (
                    <>
                        <h3 className="mt-10 text-2xl font-semibold">
                        What kind of website do you need?
                        </h3>

                        <div className="mt-8 grid gap-4">

                            {[
                                {
                                    title: "Landing Page",
                                    description: "Perfect for promoting one service or product.",
                                },
                                {
                                    title: "Business Website",
                                    description: "A complete online presence for your company.",
                                },
                                {
                                    title: "Portfolio",
                                    description: "Showcase your work and previous projects.",
                                },
                                {
                                    title: "Online Shop",
                                    description: "Sell products directly through your website.",
                                },
                                {
                                    title: "I'm not sure yet",
                                    description: "We'll figure out the best solution together.",
                                },
                            ].map((option) => (

                                <button
                                    key={option.title}
                                    onClick={() => setProjectType(option.title)}
                                    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                                        projectType === option.title
                                        ? "border-white bg-white text-black"
                                        : "border-white/10 bg-white/5 hover:border-white/30"
                                    }`}
                                    >
                                    <h4 className="text-lg font-semibold">
                                        {option.title}
                                    </h4>

                                    <p
                                        className={`mt-1 text-sm ${
                                        projectType === option.title
                                            ? "text-black/70"
                                            : "text-zinc-400"
                                        }`}
                                    >
                                        {option.description}
                                    </p>
                                </button>
                            ))}

                        </div>
                    </>
                )}

                {step === 2 && (
                    <>
                        <h3 className="mt-10 text-2xl font-semibold">
                            Tell me about your project
                        </h3>

                        <p className="mt-2 text-zinc-400">
                            The more details you provide, the better I can understand your goals.
                        </p>

                        <textarea
                            value={businessDescription}
                            onChange={(e) => setBusinessDescription(e.target.value)}
                            placeholder="Describe your business, what you offer, your goals, and anything else you'd like me to know..."
                            maxLength={500}
                            className="mt-8 h-48 w-full resize-none rounded-2xl border border-white/10 bg-white/5 p-5 outline-none transition focus:border-white/40"
                        />

                        <div className="mt-2 flex items-center justify-between text-sm">

                            <span className="text-zinc-400">

                                {businessDescription.length < 50 &&
                                    "A few sentences are enough to get started."}

                                {businessDescription.length >= 50 &&
                                    businessDescription.length < 150 &&
                                    "Great start!"}

                                {businessDescription.length >= 150 &&
                                    businessDescription.length < 300 &&
                                    "Nice amount of detail."}

                                {businessDescription.length >= 300 &&
                                    "Perfect! This gives me a good understanding."}

                            </span>

                            <span className="text-zinc-500">
                                {businessDescription.length}/500
                            </span>

                        </div>
                    </>
                )}

                {step === 3 && (
                    <>
                        <h3 className="mt-10 text-2xl font-semibold">
                            Almost done!
                        </h3>

                        <p className="mt-2 text-zinc-400">
                            Just a few contact details so I can get back to you.
                        </p>

                        <div className="mt-8 space-y-5">

                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-white/40"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-white/40"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number (optional)"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-white/40"
                            />

                        </div>

                        <h4 className="mt-10 text-lg font-semibold">
                            Which option fits your project best?
                        </h4>

                        <p className="mt-2 text-zinc-400">
                            This just helps me understand the scope. We can always adjust it later.
                        </p>

                    <div className="mt-4 grid gap-4">

                            {budgetOptions.map((option) => (

                                <button
                                key={option.title}
                                onClick={() => setBudget(option.title)}
                                className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                                    budget === option.title
                                    ? "border-white bg-white text-black"
                                    : "border-white/10 bg-white/5 hover:border-white/30"
                                }`}
                                >

                                <div className="mt-5 flex items-center justify-between">

                                    <h4 className="text-lg font-semibold">
                                    {option.title}
                                    </h4>

                                    {option.price && (
                                    <span
                                        className={`text-sm ${
                                        budget === option.title
                                            ? "text-black/60"
                                            : "text-zinc-500"
                                        }`}
                                    >
                                        {option.price}
                                    </span>
                                    )}

                                </div>

                                <p
                                    className={`mt-3 text-sm ${
                                    budget === option.title
                                        ? "text-black/70"
                                        : "text-zinc-400"
                                    }`}
                                >
                                    {option.description}
                                </p>

                                </button>

                            ))}

                        </div>
                    </>
                )}
            </div>
            <div className="flex-shrink-0 border-t border-white/10 bg-[#111] p-6">

                <div className="flex items-center justify-between">

                    {step === 1 ? (
                        <div />
                    ) : (
                        <button
                            onClick={() => changeStep(step - 1)}
                            className="rounded-full border border-white/10 px-8 py-3 transition hover:border-white/30"
                        >
                            ← Back
                        </button>
                    )}

                    {step === 1 && (
                        <button
                            disabled={!projectType}
                            onClick={() => changeStep(2)}
                            className="rounded-full bg-white px-8 py-3 font-semibold text-black transition disabled:opacity-40"
                        >
                            Continue →
                        </button>
                    )}

                    {step === 2 && (
                        <button
                            disabled={!businessDescription.trim()}
                            onClick={() => changeStep(3)}
                            className="rounded-full bg-white px-8 py-3 font-semibold text-black transition disabled:opacity-40"
                        >
                            Continue →
                        </button>
                    )}

                    {step === 3 && (
                        <button
                            disabled={!name || !email || !budget || isSubmitting}
                            onClick={handleSubmit}
                            className="rounded-full bg-white px-8 py-3 font-semibold text-black transition disabled:opacity-40"
                        >
                            {isSubmitting ? "Sending..." : "Submit →"}
                        </button>
                    )}

                </div>

            </div>
            </>
        )}
      </div>
    </div>
  );
}