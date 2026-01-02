import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HeroSection.css";
import outlineimage from "../assets/images/outlinelogo.png";
import heroBg from "../assets/images/about-bg-3-2.svg";


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const heroText =
  "Vessella Group presents exclusive luxury villas in Hyderabad’s prime locations, crafted for refined living. Discover a home where elegance, comfort, and excellence come together.";

const heroWords = heroText.trim().split(/\s+/);


const wordContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,   // slower word gap
      delayChildren: 0.2,      // calm start
    },
  },
};

const wordVariant = {
  hidden: {
    y: 40, opacity: 0, filter: "blur(6px)"
  },
  show: {
    y: 0, opacity: 1, filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};





export default function HeroSection() {
  return (
    <section className="hero-section" id="about-section">
      {/* <div className="hero-overlay"></div> */}
       <img src={heroBg} className="hero-bg" alt="" />

      <div className="container">
        <motion.div
          className="row vh-100 align-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >

          {/* LEFT CONTENT */}
          <div className="col-lg-7">
            <motion.div className="hero-content">
              <motion.span
                className="hero-eyebrow geist-font"
              // variants={itemVariants}
              >
                ABOUT US
              </motion.span>

              <motion.h1
                variants={wordContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
                className="hero-text fw-lighter text-white"
              >
                {heroWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordVariant}
                    style={{ display: "inline-block", marginRight: "0.35em" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>



            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-5 d-flex align-items-center justify-content-end p-5">

          </div>
        </motion.div>
      </div>

      {/* BOTTOM CLIP */}
      <div
        className="hero-clip"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      />
    </section>
  );
}
