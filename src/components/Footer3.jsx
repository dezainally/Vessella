import React from "react";
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
  return (
    <footer className="footer bg-black text-white">
      <div className="container-fluid px-lg-5 px-3 py-5">
        {/* TOP CONTENT */}
        <div className="row align-items-center justify-content-center gy-5">
          {/* LEFT : LOGO + SOCIALS */}
          <div className="col-lg-6 col-md-6 text-center">
            <img src={logo} alt="Vessella Logo" className="footer-logo mb-5" />

            <div className="socials justify-content-center">
              <a href="#" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="#" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="#" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="#" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="#" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* RIGHT : LINKS */}
          <div className="col-lg-6 col-md-6 text-center text-md-start">
            <ul className="footer-links list-unstyled mb-0  ">
              <li>OUR STORY</li>
              <li>OUR PROJECTS</li>
              <li>BLOGS</li>
              <li>MEDIA</li>
              <li>EVENTS</li>
              <li>CAREERS</li>
              <li>ENQUIRE</li>
              <li>PARTNER WITH US</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottoms mt-5 pt-4">
          <span>© VESSELLA ALL RIGHTS RESERVED</span>
          <span>Cookies & Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Refunds / Cancellations</span>
        </div>
      </div>
    </footer>
  );
}
