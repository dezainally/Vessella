import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroThreeImg from "../assets/images/aa.png";
import "../styles/HeroThree.css";

export default function HeroThree() {

    // INTRO ANIMATIONS SCRIPT START
    const text = "Crafting Timeless Villas for Modern Living";
    const words = text.trim().split(/\s+/);

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.18,   // slower word gap
                delayChildren: 0.4,      // calm start
            },
        },
    };

    const wordVariant = {
        hidden: {
            opacity: 0,
            y: 28,
            filter: "blur(12px)",
        },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1.1,          // slow reveal
                ease: [0.22, 1, 0.36, 1], // luxury easing
            },
        },
    };

    const imageVariant = {
        hidden: {
            opacity: 0,
            scale: 1.4,
        },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 2,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const buttonVariant = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9,
                delay: 1.6, // after text animation
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    // INTRO ANIMATIONS SCRIPT END




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
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <motion.h1
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="pertili-font display-4 fw-lighter text-black mb-5"
                        >
                            {words.map((wordText, i) => (
                                <motion.span
                                    key={i}
                                    variants={wordVariant}
                                    style={{ display: "inline-block", marginRight: "0.4em" }}
                                >
                                    {wordText}
                                </motion.span>
                            ))}
                        </motion.h1>



                        {/* <motion.div
                            variants={buttonVariant}
                            initial="hidden"
                            animate="show"
                        >
                            <button className="ops-btn">
                                <span className="ops-text">OUR PROJECTS</span>
                                <span className="ops-icon">»»</span>
                            </button>
                        </motion.div> */}




                    </div>
                </div>
            </div>

            <motion.img
                variants={imageVariant}
                initial="hidden"
                animate="show"
                className="img-fluid hero-three-img position-absolute vh-100 w-100 object-fit-cover"
                src={HeroThreeImg}
                alt=""
            />


        </section>
    );
}
