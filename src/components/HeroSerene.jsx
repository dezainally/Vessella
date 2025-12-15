import React, { useEffect, useRef } from "react";
import "../styles/HeroSerene.css";
import bannerImg from "../assets/images/HERO-SERENE.png"

const clamp = (v, a, b) => Math.min(Math.max(v, a), b);

export default function ProjectHeader({
    imageSrc = "../assets/images/HERO-SERENE.png",
    title = "The MYSS Project by MR Group",
    description = "Analytics and design, UX/UI design, illustrations, motion design, Bitrix",
    tags = ["Promotional websites", "Digital identity", "Graphic design and 3D", "Integrations"],
}) {
    const containerRef = useRef(null);
    const imageRef = useRef(null);       // wrapper that receives transform
    const imgElRef = useRef(null);       // actual <img> element reference
    const rafRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const imageWrapper = imageRef.current;
        const imgEl = imgElRef.current;
        if (!container || !imageWrapper || !imgEl) return;

        const startScale = 1.3;
        const endScale = 1.1;
        let ticking = false;
        let imageHeight = 0; // will hold the full image height

        // function to measure image height and set container height so the full image is visible
        function measureAndSet() {
            const rect = imgEl.getBoundingClientRect();
            if (!rect.height) return;

            // compensate for scale
            const compensatedHeight = rect.height * startScale;

            container.style.height = `${compensatedHeight}px`;
            imageWrapper.style.height = `${rect.height}px`;
        }

        // animation update (uses imageHeight to compute progress)
        function update() {
            const rect = container.getBoundingClientRect();

            // if imageHeight is zero fallback to container rect.height
            const refHeight = imageHeight || rect.height || window.innerHeight;

            // progress goes 0 -> 1 as header top moves up by refHeight
            const progress = clamp((-rect.top) / refHeight, 0, 1);

            const scale = startScale + (endScale - startScale) * progress;

            imageWrapper.style.transform = `translate3d(0px, 0px, 0px) scale(${scale}, ${scale})`;

            ticking = false;
        }

        function onScroll() {
            if (!ticking) {
                ticking = true;
                rafRef.current = window.requestAnimationFrame(update);
            }
        }

        // Re-measure after image loads (in case it's not loaded yet)
        function onImgLoad() {
            measureAndSet();
            // set initial transform and run an update to match current scroll
            imageWrapper.style.transform = `translate3d(0px,0px,0px) scale(${startScale},${startScale})`;
            onScroll();
        }

        // Attach load handler (and measure now if already loaded)
        if (imgEl.complete && imgEl.naturalHeight) {
            onImgLoad();
        } else {
            imgEl.addEventListener("load", onImgLoad, { once: true });
        }

        // Also re-measure on window resize (image will resize)
        const onResize = () => {
            measureAndSet();
            onScroll();
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);

        // cleanup
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
            if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
            imgEl.removeEventListener("load", onImgLoad);
        };
    }, []);

    return (
        <section className="ProjectHeader_container vh-100">
            <div className="ProjectHeader_background">
                <div
                    className="ProjectHeader_image"
                    ref={imageRef}
                    aria-hidden="true"
                    style={{ transform: "translate3d(0,0,0) scale(1.3)" }}
                >
                    <picture style={{ backgroundAttachment: "fixed" }}>
                        <source srcSet={bannerImg} media="(min-width: 768px)" />
                        {/* keep a ref on the actual <img> so we can measure its height */}
                        <img
                            ref={imgElRef}
                            alt={title}
                            fetchPriority="high"
                            width="1"
                            height="1"
                            decoding="async"
                            style={{ color: "transparent", display: "block", width: "100%", height: "auto" }}
                            src={bannerImg}
                        />
                    </picture>
                </div>
            </div>

            {/* ✅ STICKY OVERLAY */}
            <div className="ProjectHeader_overlay">
                <div className="ProjectHeader_centerContent">
                    <h1 className="hero-title">Serene Living</h1>
                    <button className="hero-btn">Explore Villas</button>
                </div>
            </div>


        </section>
    );
}
