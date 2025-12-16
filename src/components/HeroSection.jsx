import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HeroSection.css";
import outlineimage from "../assets/images/outlinelogo.png";

/* Parent container animation */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25, // one after another
    },
  },
};

/* Child elements animation */
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60, // bottom → top
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* <div className="hero-overlay"></div> */}

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
                className="hero-eyebrow"
                variants={itemVariants}
              >
                ABOUT US
              </motion.span>

              <motion.h1
                className="hero-text text-white"
                variants={itemVariants}
              >
                At Vessella, we design and build spaces that elevate everyday
                living. With a focus on quality, design, and detail, we create
                homes that stand the test of time.
              </motion.h1>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-5 d-flex align-items-center justify-content-end p-5">
            {/* <motion.img
              src={outlineimage}
              alt=""
              className="hero-outline-img"
              variants={itemVariants}
            /> */}
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
