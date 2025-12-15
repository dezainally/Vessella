import React from "react";
import { motion } from "framer-motion";
import "../styles/Intro.css";
import HomeVideo from "../assets/images/vessella-intro-bg-video.webm";
import IntroLogo from "../assets/images/logo/intro-logo.png";

const Intro = ({ hideIntro, onExitIntro }) => {
  const text = "Crafting Timeless Villas for Modern Living";
  const words = text.trim().split(/\s+/);

  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 2,     // <-- wait 2s, then start children
        staggerChildren: 0.07
      }
    }
  };

  const word = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className={`video-hero position-fixed top-0 start-0 w-100 vh-100 ${hideIntro ? "hide" : ""
        }`}
      initial={{ opacity: 1, scale: 1 }}
      animate={hideIntro ? { opacity: 0, scale: 1.05 } : { opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* 🎥 Background Video */}
      <video
        className="video-hero__video"
        src={HomeVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🩵 Overlay */}
      <div className="video-hero__overlay d-flex flex-column justify-content-center align-items-center text-center">
        {/* <motion.img
          src={IntroLogo}
          alt="Logo"
          className="intro-logo mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        /> */}

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="pertili-font text-dark display-2 fw-bold mt-5 col-lg-8"
          style={{ lineHeight: "1.4em" }}
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



        {/* 🖱️ Scroll Down (click triggers exit) */}
        <motion.div
          className="scroll-down mt-5"
          onClick={onExitIntro} // ✅ this now calls App’s fade-out handler
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 4, ease: "easeOut" }}
          style={{ cursor: "pointer" }}
        >
          <div className="mouse position-relative">
            <div className="wheel position-absolute bg-dark"></div>
          </div>
          <p className="text-dark mt-2">Scroll Down</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Intro;
