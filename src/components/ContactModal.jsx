"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ContactModal({ isOpen, onClose }) {
    
    const [shouldRender, setShouldRender] = useState(false);
    const backdropRef = useRef(null);
    const modalRef = useRef(null);

    const handleClose = () => {
        onClose();
    };

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
        <div
        ref={backdropRef}
        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
        onClick={handleClose}
        >
            <div
                ref={modalRef}
                className="relative w-full max-w-[500px] rounded-3xl bg-[#161616] px-10 py-10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute right-6 top-6 text-white/60 transition hover:text-white w-10 h-10 rounded-full hover:bg-white/10"
                >
                    ✕
                </button>

                {/* Heading */}
                <h2 className="text-3xl font-semibold text-white">
                    Let's connect.
                </h2>

                <p className="mt-3 text-white/70 leading-relaxed">
                    Have a project in mind or just a quick question?
                    I'd love to hear from you.
                </p>

                {/* Contact Info */}
                <div className="mt-8 space-y-4">

                    <a
                        href="mailto:YOURMAIL"
                        className="block text-white hover:text-white/80 transition"
                    >
                        <Mail /> arnemaxseifert@gmail.com
                    </a>

                    <a
                        href="tel:+49..."
                        className="block text-white hover:text-white/80 transition"
                    >
                        <Phone /> +49 163 1292449
                    </a>

                </div>

                {/* Small note */}
                <p className="mt-8 text-sm text-white/50">
                    Usually replies within 24 hours.
                </p>

                {/* CTA */}
                <button
                    className="mt-8 w-full rounded-full bg-white py-4 text-black font-medium transition hover:scale-[1.02]"
                >
                    Start your Project →
                </button>

            </div>
        </div>
    );
    
}