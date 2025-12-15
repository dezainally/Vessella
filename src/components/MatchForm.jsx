import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/MatchForm.css";

import FormImg from "../assets/images/form-img.jpg"
import BtnArrow from "../assets/images/arrow-round.png";
import { ArrowRight } from "lucide-react";

const MatchForm = () => {

  const text = "START YOUR HOME JOURNEY CONNECT WITH OUR EXPERTS TODAY";
  const words = text.trim().split(/\s+/); // split by spaces properly

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,   // ⬅ slower stagger (was 0.07)
      },
    },
  };

  const word = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,          // ⬅ slower animation (was 0.5)
        ease: [0.25, 0.1, 0.25, 1], // ⬅ smooth easing
      },
    },
  };

  const inputVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30; // control movement range
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div id="contact" className="match-section container-fluid d-flex align-item-center justify-content-center py-5" >
      <div className="container">
        <div className="row g-0 justify-content-center">
          {/* LEFT SIDE */}
          <div className="col-md-5 d-flex align-item-center justify-content-center flex-column p-4 form-side">
            <div>
              {/* <h3 className="fw-semibold mb-4 text-white fs-3">
                Get matched with the perfect freelancer for your design project
              </h3> */}
              <motion.h2
                ref={ref}
                variants={container}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="pertili-font text-white fs-1 mb-4"
              >
                {words.map((wordText, i) => (
                  <motion.span
                    key={i}
                    variants={word}
                    style={{ display: "inline-block", marginRight: "0.4em" }} // 👈 adds space visually
                  >
                    {wordText}
                  </motion.span>
                ))}
              </motion.h2>

              <motion.form
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.7 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.15 }
                  }
                }}
              >
                <motion.div variants={inputVariant} className="row mb-3">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Full Name" required />
                  </div>
                </motion.div>

                <motion.div variants={inputVariant} className="mb-3">
                  <input type="email" className="form-control" placeholder="Your email address" required />
                </motion.div>

                <motion.div variants={inputVariant} className="mb-3">
                  <input type="tel" className="form-control" placeholder="Your Phone Number" required />
                </motion.div>

                <motion.div variants={inputVariant} className="mb-3">
                  <textarea className="form-control" rows="3" placeholder="Additional details..."></textarea>
                </motion.div>

                <motion.div variants={inputVariant} className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="agreeCheck" required />
                  <label className="form-check-label text-white" htmlFor="agreeCheck">
                    I agree to receive commercial electronic messages.
                  </label>
                </motion.div>

                <motion.button
                  variants={inputVariant}
                  className="btn px-4 py-2 primary-btn mt-3 cta-btn d-flex"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SUBMIT
                  <span className="arrow-circle d-flex align-items-center justify-content-center ms-2">
                    <img src={BtnArrow} alt="arrow" className="btn-arrow" />
                  </span>
                </motion.button>
              </motion.form>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            className="col-md-6 p-0 image-side"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div
              className="curved-image-wrapper"
              animate={{
                x: offset.x,
                y: offset.y,
                transition: { type: "spring", stiffness: 80, damping: 10 },
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.25)",
                transition: { type: "spring", stiffness: 150, damping: 15 },
              }}
            >
              <img src={FormImg} alt="Design studio" className="curved-image" />
              <div className="image-gradient"></div>
              <div className="image-caption">
                {/* <p>
                  Access our global talent network with{" "}
                  <strong>100,000+ world-class designers.</strong>
                </p> */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </div >
  );
};

export default MatchForm;
