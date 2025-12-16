import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HeroSection.css";
import outlineimage from "../assets/images/outlinelogo.png";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>

      <div className="container">
        <div className="row vh-100 align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-7">
            <div className="hero-content">
              <span className="hero-eyebrow">• About Us</span>

              <h1 className="hero-text">
                At Vessella, we design and build spaces that elevate everyday
                living. With a focus on quality, design, and detail, we create
                homes that stand the test of time.
              </h1>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-5 d-flex align-items-center justify-content-end">
            <img src={outlineimage} alt="" className="hero-outline-img" />
          </div>
        </div>
      </div>

      {/* BOTTOM CLIP */}
      <div className="hero-clip"></div>
    </section>
  );
}
