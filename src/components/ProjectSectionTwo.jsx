import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import BtnArrow from "../assets/images/arrow-round.png";
// import BtnArrow from "../assets/images/btn-arrow.png";
import img1 from "../assets/images/palms-project-img.png";
import img2 from "../assets/images/serene-project-img.png";
import img3 from "../assets/images/woods.jpg";
import img4 from "../assets/images/meadows.jpg";
import "../styles/ProjectSection2.css";

export default function ProjectSection2() {
  const projects = [
    {
      id: "01",
      title: "VESSELLA PALMS",
      desc: "A smart investment in Georgia's promising coast (Kobuleti)",
      img: img1,
    },
    {
      id: "02",
      title: "VESSELLA SERENE",
      desc: "An exclusive complex in the most prestigious part of the city",
      img: img2,
    },
    {
      id: "03",
      title: "VESSELLA VILLAS",
      desc: "Beachfront investment apartments on the Black Sea coast",
      img: img3,
    },
    {
      id: "04",
      title: "CYBER MEADOWS",
      desc: "Premium investment apartments in Bakuriani, Georgia's top ski resort",
      img: img4,
    },
  ];

  const text =
    "WELCOME TO VESSELLA TOUCH MODERN CONCEPTS AND DESIGNS WITH VESSELLA ARCHITECTURE";
  const words = text.trim().split(/\s+/);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };
  const word = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        {/* --- TOP HEADING SECTION --- */}
        <div className="row align-items-center mb-5">
          <div className="col-md-8">
            <motion.h2
              ref={ref}
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="pertili-font navy-blue fs-1"
            >
              {words.map((wordText, i) => (
                <motion.span
                  key={i}
                  variants={word}
                  style={{ display: "inline-block", marginRight: "0.4em" }}
                >
                  {wordText}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          <div className="col-md-4 d-flex justify-content-between align-items-end flex-column">
            <motion.p
              className="text-muted text-uppercase small mb-3 opacity-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our projects
            </motion.p>

            <motion.button
              className="btn px-4 py-2 primary-btn mt-2 cta-btn d-flex align-items-center"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              ALL PROJECTS
              <span className="arrow-circle d-flex align-items-center justify-content-center ms-2">
                <img src={BtnArrow} alt="arrow" className="btn-arrow" />
              </span>
            </motion.button>
          </div>
        </div>

        {/* --- PROJECT GRID --- */}
        <div className="row gy-4">
          {projects.map((p, index) => (
            <div key={p.id} className="col-lg-6 col-12 p-4">
              <motion.div
                className="project-wrapper"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Image Container */}
                <div className="project-image-container position-relative overflow-hidden">
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    className="img-fluid w-100 project-img"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Text Bottom Left */}
                  <div className="project-info position-absolute bottom-0 start-0 text-white p-3">
                    <h5 className="mb-1 fw-semibold">{p.title}</h5>
                    <p className="small mb-0">{p.desc}</p>
                  </div>

                  {/* Circle Logo Bottom Right */}
                  <div className="position-absolute bottom-0 end-0 m-3">
                    <div className="circle-logo d-flex align-items-center justify-content-center">
                      <img src={BtnArrow} alt="logo" className="w-50" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}  