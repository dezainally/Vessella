import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroThreeImg from "../assets/images/hero-three.png";
import "../styles/HeroThree.css";

export default function HeroThree() {

    const text = "Crafting Timeless Villas for Modern Living";
    const words = text.trim().split(/\s+/);
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    // 🎯 Linear, predictable fade
    const overlayOpacity = useTransform(
        scrollYProgress,
        [0, 0.8],   // 0% → 80% scroll
        [0.2, 1]    // 20% → 100% opacity
    );

    return (
        <section
            ref={sectionRef}
            className="hero-three vh-100 position-relative"
        >
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-lg-6 d-flex align-items-center">
                        <motion.h1
                            initial="hidden"
                            animate="show"
                            className="pertili-font display-5 fw-bold text-black"
                            
                        >
                            {words.map((wordText, i) => (
                                <motion.span
                                    key={i}
                                    style={{ display: "inline-block", marginRight: "0.4em" }}
                                >
                                    {wordText}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </div>
                </div>
            </div>

            <img className="img-fluid hero-three-img position-absolute vh-100 w-100 object-fit-cover" src={HeroThreeImg} alt="" />

            {/* 🌈 Gradient Overlay */}
            {/* <motion.div
        className="gradient-overlay position-absolute top-0 start-0 w-100 vh-100"
        style={{ opacity: overlayOpacity }}
      /> */}
        </section>
    );
}
