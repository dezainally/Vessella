import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ConsultationSection.css";

import arrowIcon from "../assets/images/arrow.png";
import bgImage from "../assets/images/contact-bg.jpg";
import vectorImage from "../assets/images/vectorimage1.png";

export default function ConsultationSection() {
  return (
    <section className="consultation-wrapper py-5">
      <div className="container">
        {/* BG IMAGE WRAPPER */}
        <div className="bg-box position-relative py-5 px-3">
          <img src={bgImage} alt="Background" className="bg-img " />
          <div className="overlay-gradient"></div>

          <div className="row justify-content-center align-items-center">
            <div className="col-lg-10">
              <div className="consultation-card text-center py-5 px-4">
                {/* VECTORS */}
                {/* <img src={vectorImage} alt="" className="vector vector-left" />
                <img src={vectorImage} alt="" className="vector vector-right" /> */}

                {/* Badge */}
                <span className="badge-tag d-inline-flex align-items-center justify-content-center mb-3">
                  QUERY • QUICK
                </span>

                {/* Title */}
                <h2 className="title mb-4">
                  Get specialist advice for residential,
                  <br /> commercial or property
                </h2>

                {/* FORM */}
                <div className="row justify-content-center">
                  <div className="col-md-4 mb-3">
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Your Name *"
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <input
                      type="email"
                      className="form-control custom-input"
                      placeholder="Email *"
                    />
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-md-4 mb-3">
                    <input
                      type="tel"
                      className="form-control custom-input"
                      placeholder="Phone Number *"
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <div className="select-wrapper">
                      <select className="form-control custom-input">
                        <option>You inquiry about...</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Property</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Bottom */}
                <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mt-3">
                  <p className="note mb-0">
                    We're excited to connect with you!
                    <br />
                    Required fields are marked *
                  </p>

                  <button className="callback-btn">
                    Get A Call Back
                    <span>
                      <img src={arrowIcon} alt="arrow" className="arrow-circle p-2"/>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
