import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ContactInquirySection.css";
import image1 from "../assets/images/contactsection.jpg";

export default function ContactInquirySection() {
  return (
    <section className="container-fluid py-5">
      <div className="container inquiry-containercd-flex justify-content-center align-items-center ">
        <div className="row inquiry-box d-flex justify-content-center align-items-center my-5">
          {/* LEFT IMAGE CONTENT */}
          <div className="col-md-7  ">
            <img
              src={image1}
              alt="Left Decorative"
              className="image-content px-lg-5 w-100 "
            />
          </div>

          {/* RIGHT FORM */}
          <div className="col-md-5 inquiry-right py-5 px-5">
            <h4 className="form-title">Inquire about this offer</h4>
            <form>
              {/* FULL NAME */}
              <div className="floating-field mb-4">
                <input
                  id="fullname"
                  type="text"
                  className="form-control inquiry-input"
                  placeholder=" "
                  required
                />
                <label htmlFor="fullname">Full Name</label>
              </div>

              {/* EMAIL */}
              <div className="floating-field mb-4">
                <input
                  id="email"
                  type="email"
                  className="form-control inquiry-input"
                  placeholder=" "
                  required
                />
                <label htmlFor="email">Email</label>
              </div>

              {/* PHONE */}
              <div className="floating-field mb-4">
                <input
                  id="phone"
                  type="tel"
                  className="form-control inquiry-input"
                  placeholder=" "
                />
                <label htmlFor="phone">Phone Number</label>
              </div>

              {/* ENQUIRE TYPE — SIMPLE & CORRECT */}
              <div className="mb-4 select-field">
                <label className="select-label">Enquire type</label>
                <select
                  className="form-select inquiry-input bg-black"
                  defaultValue=""
                  required
                >
                  <option value="" disabled hidden>
                    Select type
                  </option>
                  <option value="investment">Investment</option>
                  <option value="residential">Residential</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div className="floating-field mb-4">
                <textarea
                  id="message"
                  rows="3"
                  className="form-control inquiry-input"
                  placeholder=" "
                />
                <label htmlFor="message">Message (Maximum 250 words)</label>
              </div>

              {/* CHECKBOXES */}
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="agree"
                />
                <label className="form-check-label" htmlFor="agree">
                  I agree to receive commercial electronic messages.
                </label>
              </div>

              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="policy"
                />
                <label className="form-check-label" htmlFor="policy">
                  I accept the <span>Cookies</span> and{" "}
                  <span>Privacy Policy</span>.
                </label>
              </div>

              <button type="submit" className="btn submit-btn w-100">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
