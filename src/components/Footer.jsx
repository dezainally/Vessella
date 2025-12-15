import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterLogo from "../assets/images/logo/logo-white.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import "../styles/Footer.css";
import FooterBg from "../assets/images/footer-bg.png";

export default function FooterSection() {
  const backgroundStyle = {
    backgroundImage: `url(${FooterBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    filter: "brightness(0.55)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  return (
    <section className="footer-section position-relative vh-100 text-white overflow-hidden">
      {/* Background Image */}
      <div style={backgroundStyle}></div>

      {/* Logo */}
      <motion.div
        className="container m-2 d-flex"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img src={FooterLogo} alt="Logo" className="footer-logo mb-1 image-section" />
      </motion.div>

      {/* Overlay Content */}
      <div className="container h-90 d-flex flex-column justify-content-center position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-md-8 text-md-start justify-content-center hero-titles">
            {/* Links Section */}
            <div className="d-flex gap-5 align-items-center mb-3 links-section">
              {["About us", "Projects", "Blogs", "Careers", "Contact Us"].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-white text-decoration-none "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ scale: 1.1, color: "#FFD700" }}
                >
                  {link}
                </motion.a>
              ))}
            </div>

            {/* Heading Section */}
            <motion.h1
              className="display-3 hero-title fs-1 mb-0"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              INVEST IN THE FUTURE WITH CONFIDENCE
            </motion.h1>
          </div>

          {/* Right Side Contact Info */}
          <motion.div
            className="col-md-4 mt-2 mt-md-0"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="contact-box p-4 rounded-4"
              whileHover={{ scale: 1.03, boxShadow: "0px 0px 20px rgba(255,255,255,0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <h6 className="text-uppercase mb-3">Address</h6>
              <p className="mb-1">1st Floor, East Block, Cyber Meadows</p>
              <p className="mb-1">Kondapur, Hyderabad - 500048</p>
              <p className="mb-3">T.S. India</p>

              <hr className="border-light" />

              <h6 className="text-uppercase mb-3">Contacts</h6>
              <table className="contact-table text-white-50 small">
                <tbody>
                  <tr><td>Head Office:</td><td>040 23014498 / 99</td></tr>
                  <tr><td>Marketing Ph:</td><td>9121244421 / 03</td></tr>
                  <tr><td>Fax:</td><td>040 23014497</td></tr>
                  <tr>
                    <td>Email:</td>
                    <td>
                      <a href="mailto:info@vessella.in" className="email-link">
                        info@vessella.in
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Social Icons */}
              <div className="d-flex justify-content-center gap-3 mt-3">
                {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="social-icon"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ scale: 1.2, color: "#FFD700" }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="footer-bottom position-absolute bottom-0 start-0 w-100 small text-white-50 py-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container text-white d-flex justify-content-between align-items-center">
          <div className="ps-5">Privacy Policy</div>
          <div className="pe-5">© 2025 - VESSELLA GROUP. ALL RIGHTS RESERVED.</div>
        </div>
      </motion.div>
    </section>
  );
};

