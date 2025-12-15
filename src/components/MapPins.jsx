import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/MapPins.css";
import MapImg from "../assets/images/MapPins.png";
import Villa1 from "../assets/images/villa-1.jpg"
import Villa2 from "../assets/images/villa-2.jpg"

const MapPins = () => {
  const [activeIndex, setActiveIndex] = useState(null);


  const text = "EXPLORE OUR DEVELOPMENTS BY LOCATION";
  const words = text.trim().split(/\s+/); // split by spaces properly

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
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
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,          // ⬅ slower animation (was 0.5)
        ease: [0.25, 0.1, 0.25, 1], // ⬅ smooth easing
      },
    },
  };

  const locations = [
    {
      x: "61%",
      y: "22%",
      name: "Vessella Meadows",
      address: "Narsingi, Hyderabad",
      size: "141 MSO",
      link: "https://vessella.in/meadows",
      image:  Villa1,
    },
    {
      x: "39%",
      y: "18%",
      name: "Vessella Woods",
      address: "Kokapet, Hyderabad",
      size: "192 MSO",
      link: "#",
      image:  Villa2,
    },
  ];

  const openPopup = (index) => {
    setActiveIndex(index);
  };

  const closePopup = () => {
    setActiveIndex(null);
  };

  return (
    <section className="map-section px-0 py-5">
      <div className="container text-center mb-5">
        {/* <h2 className="map-title navy-blue">MAP PINS</h2> */}
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
      </div>

      <div className="map-wrapper w-100 position-relative">
        <img src={MapImg} className="map-image" alt="Hyderabad Map" />

        {locations.map((item, index) => (
          <div
            key={index}
            className="map-pin"
            style={{ top: item.y, left: item.x }}
            onMouseEnter={() => openPopup(index)}
            onMouseLeave={closePopup}
            onClick={() => openPopup(index)}
          >
            <span className="pin-dot"></span>

            {/* POPUP CARD */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="pin-card"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="pin-card-inner">
                    <img src={item.image} className="pin-img" alt="project" />

                    <div className="pin-info">
                      <h4 className="pin-title">{item.name}</h4>
                      <p className="pin-address">{item.address}</p>

                      <div className="pin-meta">
                       

                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pin-more"
                        >
                          INQUIRE FOR PRICING
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}
      </div>
    </section>
  );
};

export default MapPins;
