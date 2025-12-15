import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/GallerySerene.css";

import Img1 from "../assets/serene-images/1.jpg";
import Img2 from "../assets/serene-images/2.jpg";
import Img3 from "../assets/serene-images/3.jpg";
import Img4 from "../assets/serene-images/4.jpg";
import Img5 from "../assets/serene-images/5.jpg";
import Img6 from "../assets/serene-images/6.jpg";
import Img7 from "../assets/serene-images/7.jpg";
import Img8 from "../assets/serene-images/8.jpg";
import Img9 from "../assets/serene-images/9.jpg";
import Img10 from "../assets/serene-images/10.jpg";

const images = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
];

// export default images;

const AUTO_PLAY_DELAY = 4000;

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState(0);
    const thumbsRef = useRef(null);
    const autoPlayRef = useRef(null);

    /* ---------- Thumbnail Auto Scroll ---------- */
    const scrollToThumb = (index) => {
        const container = thumbsRef.current;
        const thumb = container?.children[index];
        if (!thumb) return;

        container.scrollTo({
            left:
                thumb.offsetLeft -
                container.offsetWidth / 2 +
                thumb.offsetWidth / 2,
            behavior: "smooth",
        });
    };

    /* ---------- Image Change ---------- */
    const changeImage = (index) => {
        setActiveIndex(index);
        scrollToThumb(index);
        resetAutoplay();
    };

    const next = () =>
        changeImage((activeIndex + 1) % images.length);

    const prev = () =>
        changeImage(
            (activeIndex - 1 + images.length) % images.length
        );

    /* ---------- Auto Play ---------- */
    const resetAutoplay = () => {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = setInterval(next, AUTO_PLAY_DELAY);
    };

    useEffect(() => {
        autoPlayRef.current = setInterval(next, AUTO_PLAY_DELAY);
        return () => clearInterval(autoPlayRef.current);
    }, [activeIndex]);

    /* ---------- Keyboard Navigation ---------- */
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [activeIndex]);

    return (
        <section className="gallery">
            {/* MAIN IMAGE */}
            <div className="gallery-main">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={activeIndex}
                        src={images[activeIndex]}
                        alt=""
                        className="main-image"
                        initial={{scale: 1.03 }}
                        animate={{scale: 1 }}
                        exit={{  }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(e, info) => {
                            if (info.offset.x < -80) next();
                            if (info.offset.x > 80) prev();
                        }}
                    />
                </AnimatePresence>
            </div>

            {/* THUMBNAILS */}
            <div className="gallery-thumbs">
                <div className="gallery-navigations">
                    <button onClick={prev} className="nav-btn">‹</button>
                    <button onClick={next} className="nav-btn">›</button>
                </div>

                <div
                    ref={thumbsRef}
                    className="thumbs-wrapper"
                >
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            onClick={() => changeImage(i)}
                            className={`thumb ${i === activeIndex ? "active" : ""}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
