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
                className="bg-[#161616] rounded-3xl p-10"
                onClick={(e) => e.stopPropagation()}
            >
                <h2>Hello 👋</h2>

                <button onClick={handleClose}>
                    Close
                </button>
            </div>
        </div>
    );
    
}