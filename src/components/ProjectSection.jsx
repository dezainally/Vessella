import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "../styles/ProjectSection.css";
import img1 from "../assets/images/palms-project-img.png";
import img2 from "../assets/images/serene-project-img.png";
import img3 from "../assets/images/woods.jpg";
import img4 from "../assets/images/meadows.jpg";
import BtnArrow from "../assets/images/arrow-round.png";

export default function ProjectsSection() {
  const projects = [
    {
      id: "01",
      title: "VESSELLA PALMS",
      desc: "A smart investment in Georgia's promising coast (Kobuleti)",
      img: img1,
      link: "#",
      position: "up", // first image up
    },
    {
      id: "02",
      title: "VESSELLA SERENE",
      desc: "An exclusive complex in the most prestigious part of the city",
      img: img2,
      link: "#",
      position: "down", // second image down
    },
    {
      id: "03",
      title: "VESSALLA VILLAS",
      desc: "Beachfront investment apartments on the Black Sea coast",
      img: img3,
      link: "#",
      position: "up", // third image up
    },
    {
      id: "04",
      title: "CYBER MEADOWS",
      desc: "Premium investment apartments in Bakuriani, Georgia's top ski resort",
      img: img4,
      link: "#",
      position: "down", // fourth image down
    },
  ];

  const text = "WELCOME TO VESSELLA TOUCH MODERN CONCEPTS AND DESIGNS WITH VESSELLA ARCHITECTURE random testing";
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
  return (
    <section id="projects" className="projects-section">
      <div className="container-fluid d-flex align-items-center justify-content-center px-md-0 py-5">

        <div className="container">
          {/* Top Section */}
          <div className=" d-flex align-content-between">
            {/* Left: dropdown */}

            <div className="col-md-8 mt-4 mt-md-2">
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
                    style={{ display: "inline-block", marginRight: "0.4em" }} // 👈 adds space visually
                  >
                    {wordText}
                  </motion.span>
                ))}
              </motion.h2>
            </div>

            {/* Right: heading */}
            <div className="col-md-4 d-flex justify-content-between align-items-end flex-column">
              <motion.p className="text-muted text-uppercase small  mb-3  opacity-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}>
                Our projects
              </motion.p>



              <motion.button
                className="btn px-4 py-2 primary-btn mt-3 cta-btn d-flex"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                ALL PROJECTS{" "}
                <span className="arrow-circle d-flex align-items-center justify-content-center ms-2">
                  {/* <ArrowRight size={18} /> */}
                  <img
                    src={BtnArrow}
                    alt="arrow"
                    className="btn-arrow"
                  />
                </span>

              </motion.button>
            </div>

          </div>




        </div>

      </div>
      <div className="container-fluid project-row mb-5">
        <div className="container">
          {/* Bottom: project images with staggered layout */}


          <motion.div
            className="row mt-4 pb-5  staggered-layout"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
          >
            {projects.map((p, index) => (
              <motion.div
                key={p.id}
                className={`col-md-3 col-6 gap-0 p-2 project-box ${p.position}-position`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: index * 0.5, // optional smooth delay for each card
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="project-image-wrapper overflow-hidden gap-0">
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    className="project-img img-fluid"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="project-content px-3 py-3">
                    <h5 className="project-title mb-1">{p.title}</h5>
                    <p className="small mb-1 text-white project-desc">{p.desc}</p>
                    {/* <span className="project-number">{p.id}</span> */}
                    <a
                      href={p.link}
                      rel="noopener noreferrer"
                      className="project-link-wrapper project-number"
                    >
                      <img
                        src={BtnArrow}
                        alt="arrow"
                        className="project-arrow"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
