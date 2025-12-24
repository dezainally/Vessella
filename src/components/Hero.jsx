import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/Intro.css";
import arrowIcon from "../assets/images/arrow.png";
import HomeVideo from "../assets/images/vessella-intro-bg-video.webm";

const Intro = () => {
  const sectionRef = useRef(null);

  const text = "Crafting Timeless Villas for Modern Living";
  const words = text.trim().split(/\s+/);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* Boost opacity by +20% and clamp to 1 */
  const overlayOpacity = useTransform(scrollYProgress, (value) => {
    // return Math.min(value + 0.4, 1);
    return Math.min(Math.pow(value, 0.7) + 0.2, 1);
    // return Math.min(value * 1.25, 1);
  });



  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.07,
      },
    },
  };

  const word = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section className="video-hero" ref={sectionRef}>
      {/* 🎥 Background Video */}
      <video
        className="video-hero__video"
        src={HomeVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="video-hero__overlay text-center">
        <motion.h1
          initial="hidden"
          animate="show"
          className="pertili-font display-2 mb-lg-5 fw-bold text-white col-lg-8"
          style={{ textShadow: "5px 5px 5px black" }}
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

        <motion.a
          className="callback-btn text-decaration-none"
          href="https://vessella.com/projects/"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
        >
          Our Projects
          <span>
            <img src={arrowIcon} alt="arrow" className="arrow-circle p-2" />
          </span>
        </motion.a>
      </div>

      {/* 🌈 Gradient Overlay */}
      <motion.div
        className="gradient-overlay vh-100 w-100 position-absolute start-0"
        style={{ opacity: overlayOpacity }}
      />

    </section>
  );
};

export default Intro;
