import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "../styles/About.css";
import VillaIcon from "../assets/images/villa.png";

const About = () => {
  const [hoverTextIndex, setHoverTextIndex] = useState(null);

  const text = "BUILDING LEGACIES IN LUXURY VILLAS";
  const words = text.trim().split(/\s+/); // split by spaces properly

  const [ref, inView] = useInView({
    // triggerOnce: true,
    threshold: 0.4,
  });

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15, // ⬅ slower stagger (was 0.07)
      },
    },
  };

  const word = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9, // ⬅ slower animation (was 0.5)
        ease: [0.25, 0.1, 0.25, 1], // ⬅ smooth easing
      },
    },
  };

  const stats = [
    {
      icon: VillaIcon,
      number: "15+",
      text: "Development Expertise",
    },
    {
      icon: VillaIcon,
      number: "5+",
      text: "Successful Projects",
    },
    {
      icon: VillaIcon,
      number: "95%",
      text: "Customer Loyalty",
    },
    {
      icon: VillaIcon,
      number: "100+",
      text: "Global Partnerships",
    },
  ];

  const [hoverTransform, setHoverTransform] = useState({});
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateLimit = 15;
    const moveLimit = 20;

    const rotateX = ((y - centerY) / centerY) * -rotateLimit;
    const rotateY = ((x - centerX) / centerX) * rotateLimit;

    const moveX = ((x - centerX) / centerX) * moveLimit;
    const moveY = ((y - centerY) / centerY) * moveLimit;

    const shadowX = ((x - centerX) / centerX) * -25;
    const shadowY = ((y - centerY) / centerY) * 25;

    setHoverTransform({
      [index]: {
        card: `
        perspective(900px)
        translate(${moveX}px, ${moveY}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.06)
      `,
        icon: `translateZ(40px)`,
        number: `translateZ(55px)`,
        text: `translateZ(35px)`,
        shadow: `${shadowX}px ${shadowY}px 15px rgba(0,0,0,0.1)`,
      },
    });

    setHoverIndex(index);
  };

  const handleMouseLeave = (index) => {
    setHoverTransform({
      [index]: {
        card: "perspective(900px) translate(0px,0px) rotateX(0deg) rotateY(0deg) scale(1)",
        icon: "translateZ(0px)",
        number: "translateZ(0px)",
        text: "translateZ(0px)",
        shadow: "0px 0px 0px rgba(0,0,0,0)",
      },
    });
    setHoverIndex(null);
  };

  return (
    <section id="about" className="about-section container-fluid px-0 pt-5">
      <div className="container pt-4">
        <div className="text-part px-5">
          <motion.h2
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="pertili-font navy-blue fs-1  text-center"
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
          {/* <h2 className="text-center fs-1">
                   BUILDING LEGACIES IN LUXURY VILLAS

                </h2> */}
          <motion.p className="text-center">
            we believe every villa should be more than a residence it should be
            a lasting legacy. Each of our creations blends timeless architecture
            with modern comforts, designed to inspire generations. From concept
            to completion, we craft every detail with precision, elegance, and
            passion. Because when you choose us, you’re not just buying a home
            you’re investing in a legacy that endures.
          </motion.p>
        </div>

        <div className="row mt-4 justify-content-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-6 p-4 text-center mb-4 position-relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.5,
                ease: "easeOut",
              }}
              viewport={{ amount: 0.4 }}
            >
              <div
                className="stats-circle p-4"
                onMouseEnter={() => setHoverIndex(index)}   // 👈 Track hover start
                onMouseLeave={() => setHoverIndex(null)}   // 👈 Track hover end
                onMouseMove={(e) => handleMouseMove(e, index)}
                style={{
                  transform: hoverTransform[index]?.card || "perspective(900px)",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.2s ease-out",
                  boxShadow: hoverTransform[index]?.shadow,
                  border:
                    hoverIndex === index
                      ? "1px solid #2e4b65"
                      : "1px solid #1e79c3",
                  filter:
                    hoverIndex === index
                      ? "drop-shadow(0 0 15px #00000000)"
                      : "none",
                }}
              >
                {/* GOLD DOT */}
                <div
                  className="golden-dot"
                  style={{ transform: hoverTransform[index]?.icon }}
                >
                  <div className="dot-ring">
                    <div className="dot-inner"></div>
                  </div>
                </div>

                {/* ICON */}
                <div
                  className="stats-icon"
                  style={{ transform: hoverTransform[index]?.icon }}
                >
                  <img src={item.icon} className="img-fluid" alt="" />
                </div>

                {/* ✅ NUMBER with shadow on hover */}
                <h2
                  className="stats-number navy-blue"
                  style={{
                    transform: hoverTransform[index]?.number,
                    transition: "all 0.3s ease",
                    filter:
                      hoverIndex === index
                        ? "drop-shadow(7px 9px 5px rgba(2, 2, 2, 0.5))"
                        : "none",
                  }}
                >
                  {item.number}
                </h2>

                {/* ✅ TEXT scales when hover on circle */}
                <p
                  className="stats-text fs-5 fw-semibold"
                  style={{
                    transform: hoverIndex === index ? "scale(0.9)" : "scale(1)",
                    transition: "transform 0.35s ease",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>


      <motion.div
        className="moving-text-section d-flex align-item-center"
        initial={{ y: 60, opacity: 0, filter: "blur(8px)", scale: 0.94 }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="text-wrapper">
          <h1 className="moving-text magistral">LUXURY. LEGACY. LIFESTYLE.</h1>
          <h1 className="moving-text magistral">LUXURY. LEGACY. LIFESTYLE.</h1>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
