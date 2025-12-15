import React, { useEffect, useRef } from "react";
import "../styles/HeroBanner.css";
import heroImg from "../assets/images/HERO-SERENE.png"; // replace with your image

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

export default function HeroBanner() {
    const heroRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const hero = heroRef.current;
        const bg = bgRef.current;
        if (!hero || !bg) return;

        const startScale = 1;
        const endScale = 1.3;

        const onScroll = () => {
            const rect = hero.getBoundingClientRect();
            const heroHeight = hero.offsetHeight;

            // progress: 0 → 1 across hero scroll
            const progress = clamp(-rect.top / (heroHeight - window.innerHeight), 0, 1);

            const scale = startScale + (endScale - startScale) * progress;

            bg.style.transform = `scale(${scale})`;
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section ref={heroRef} className="hero">
            {/* background */}
            <div
                ref={bgRef}
                className="hero-bg"
                style={{ backgroundImage: `url(${heroImg})` }}
            />

            {/* sticky center content */}
            <div className="hero-overlay">
                <div className="hero-center">
                    <h1>Serene Living</h1>
                    <button>Explore Villas</button>
                </div>
            </div>
        </section>
    );
}
