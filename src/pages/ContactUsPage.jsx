import React from "react";
import '../styles/ContactUsPage.css';

const ContactUs = () => {
  return (
    <section className="contact-section py-5">
      <div className="container py-5">
        <div className="row py-5">

          {/* LEFT SIDE */}
          <div className="col-md-5">
            <h1 className="contact-title">Contact</h1>
            <p className="contact-subtext">
              Select the reason for inquiry to access the appropriate form.
            </p>

            <div className="linkedin-box mb-4">
              in
            </div>

            <div className="investor-info">
              <p className="mb-1 text-primary">Investor Contact</p>
              <p className="text-muted">ir@vistaenergy.com</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-7">
            
            {/* TABS */}
            {/* <div className="contact-tabs mb-4">
              <span className="active">INVESTORS</span>
              <span>SUPPLIERS</span>
              <span>EMPLOYMENT</span>
              <span>COMMUNITY</span>
            </div> */}

            {/* FORM */}
            <form>
              <div className="row mb-4">
                <div className="col">
                  <input type="text" className="form-input" placeholder="Name *" />
                </div>
                <div className="col">
                  <input type="text" className="form-input" placeholder="Last name *" />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col">
                  <input type="text" className="form-input" placeholder="Company" />
                </div>
                <div className="col">
                  <input type="email" className="form-input" placeholder="Email *" />
                </div>
              </div>

              <div className="mb-4">
                <input type="text" className="form-input" placeholder="Reason for inquiry *" />
              </div>

              <div className="mb-4">
                <textarea className="form-input" placeholder="Message"></textarea>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button className="btn submit-btn">SUBMIT</button>
                <button type="button" className="btn arrow-btn">»</button>
              </div>

              <p className="form-note mt-3">
                Complete all required fields to enable submission.
              </p>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
