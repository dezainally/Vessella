import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer3.css";
import logo from "../assets/images/logo/footer-logo.png";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {

  // INTRO ANIMATIONS SCRIPT START
  const footerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const socialsContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const socialItem = {
    hidden: {
      y: 12,
    },
    show: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // INTRO ANIMATIONS SCRIPT END


  return (
    <motion.footer
      className="footer bg-black text-white"
      variants={footerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >

      <div className="container-fluid px-lg-5 px-3 py-5">
        {/* TOP CONTENT */}
        <div className="row align-items-center justify-content-center gy-5">
          {/* LEFT : LOGO + SOCIALS */}
          <div className="col-lg-6 col-md-6 text-center">
            <motion.img
              src={logo}
              alt="Vessella Logo"
              className="footer-logo mb-5"
              variants={fadeUp}
            />


            <motion.div
              className="socials justify-content-center"
              variants={socialsContainer}
            >

              <motion.a href="#" variants={socialItem} rel="noopener noreferrer">
                <FaFacebookF />
              </motion.a>
              <motion.a href="#" variants={socialItem} rel="noopener noreferrer">
                <FaInstagram />
              </motion.a>
              <motion.a href="#" variants={socialItem} rel="noopener noreferrer">
                <FaLinkedinIn />
              </motion.a>
              <motion.a href="#" variants={socialItem} rel="noopener noreferrer">
                <FaYoutube />
              </motion.a>
              <motion.a href="#" variants={socialItem} rel="noopener noreferrer">
                <FaXTwitter />
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT : LINKS */}
          <div className="col-lg-6 col-md-6 text-center text-md-start">
            <motion.ul
              className="footer-links list-unstyled mb-0"
              variants={socialsContainer}
            >
              <motion.li className="fw-light pertili-font" variants={socialItem}>OUR STORY</motion.li>
              <motion.li className="fw-light pertili-font" variants={socialItem}>OUR PROJECTS</motion.li>
              <motion.li className="fw-light pertili-font" variants={socialItem}>BLOGS</motion.li>
              <motion.li className="fw-light pertili-font" variants={socialItem}>MEDIA</motion.li>
              <motion.li className="fw-light pertili-font" variants={socialItem}>EVENTS</motion.li>
              <motion.li className="fw-light pertili-font" variants={socialItem}>CAREERS</motion.li>
              <motion.li className="fw-light pertili-font" variants={socialItem}>ENQUIRE</motion.li>
              <motion.li className="fw-light pertili-font" variants={socialItem}>PARTNER WITH US</motion.li>
            </motion.ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <motion.div
          className="footer-bottoms geist-font mt-5 pt-4"
          variants={fadeUp}
        >

          <span>© VESSELLA ALL RIGHTS RESERVED. Designed and Developed by <a href="https://www.dezainally.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffffff', textDecoration: 'none' }}>Dezainally</a></span>
          <span></span>
          <span>Cookies & Privacy Policy</span>
          <span>Terms & Conditions</span>
          {/* <span>Refunds / Cancellations</span> */}
        </motion.div>
      </div>
    </motion.footer>
  );
}
