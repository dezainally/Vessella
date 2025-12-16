import React from "react";
import { motion } from "framer-motion";
import "../styles/Intro.css";
import arrowIcon from "../assets/images/arrow.png";
import HomeVideo from "../assets/images/vessella-intro-bg-video.webm";

const Intro = () => {
  const text = "Crafting Timeless Villas for Modern Living";
  const words = text.trim().split(/\s+/);

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
    <section className="video-hero">
      {/* 🎥 Background Video */}
      <video
        className="video-hero__video"
        src={HomeVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="video-hero__overlay text-center">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="pertili-font display-2 mb-lg-5 fw-bold text-white col-lg-8"
          style={{ textShadow: "5px 5px 5px black" }}
        >
          {words.map((wordText, i) => (
            <motion.span
              key={i}
              variants={word}
              style={{ display: "inline-block", marginRight: "0.4em" }}
            >
              {wordText}
            </motion.span>
          ))}
        </motion.h1>

        {/* CTA BUTTON */}

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
    </section>
  );
};

export default Intro;
