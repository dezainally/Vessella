import React from "react";
import { Container, Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/TestimonialsSection.css";

// ✅ Import images directly from src/assets/oimages
import user1 from "../assets/images/test-1.png";
import user2 from "../assets/images/test-2.png";
import user3 from "../assets/images/test-3.png";
import user4 from "../assets/images/test-4.png";
import user5 from "../assets/images/test-5.png";
import user6 from "../assets/images/test-3.png";

const testimonials = [
  {
    name: "Client Name Here",
    handle: "@davidtech",
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    image: user1,
  },
  {
    name: "Client Name Here",
    handle: "@sofiaml",
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive.",
    image: user2,
  },
  {
    name: "Client Name Here",
    handle: "@emmaai",
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    image: user3,
  },
  {
    name: "Client Name Here",
    handle: "@jcdev",
    text: "Super intuitive and efficient. Our team productivity improved drastically thanks to this platform.",
    image: user4,
  },
  {
    name: "Client Name Here",
    handle: "@linacode",
    text: "A must-have for developers who want fast, clean integrations. Absolutely recommend it!",
    image: user5,
  },
  {
    name: "Client Name Here",
    handle: "@ravik",
    text: "The user experience is seamless, and the support team is top-notch. Great product overall!",
    image: user6,
  },
];

const TestimonialsSection = () => {
  const repeatedTestimonials = [...testimonials, ...testimonials]; // for continuous scroll

  return (
    <section className="testimonials-section text-center">
      <div className="container">
        <h2 className="section-title mb-3">Trusted by developers worldwide</h2>
        <p className="section-subtitle mb-5">
          Join thousands of developers who are already building the future with our platform
        </p>

        <div className="testimonial-slider">
          <div className="testimonial-track">
            {repeatedTestimonials.map((t, i) => (
              <div className="testimonial-card-wrapper" key={i}>
                <div className="testimonial-card mx-2">
                  <div>
                    <div className="d-flex align-items-center mb-3">
                      <Image
                        src={t.image}
                        roundedCircle
                        className="me-3 testimonial-img"
                      />
                      <div className="text-start">
                        <h6 className="testimonial-name navy-blue mb-0">{t.name}</h6>
                        {/* <small className="testimonial-handle">{t.handle}</small> */}
                      </div>
                    </div>
                    <div className="testimonial-text text-dark mt-2">{t.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
