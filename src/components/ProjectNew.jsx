import "../styles/ProjectNew.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import VessellaImg from "../assets/images/serene.png";
import PalmsImg from "../assets/images/palms.png";
import MeadowsImg from "../assets/images/meadows.png";
import VillasImg from "../assets/images/villas.png";
import WoodswsImg from "../assets/images/woods.png";
import MokilaImg from "../assets/images/m.png";
import KarimImg from "../assets/images/k.png";

const services = [
  {
    title: "Vessella Serene",
    image: VessellaImg,
    link: "#",
    status: "ongoing",
    type: "residential",
  },
  {
    title: "Vessella Palms",
    image: PalmsImg,
    link: "#",
    status: "upcoming",
    type: "residential",
  },
  {
    title: "Vessella Meadows",
    image: MeadowsImg,
    link: "https://vessella.com/project/vessella-meadows/",
    status: "completed",
    type: "residential",
  },
  {
    title: "Vessella Woods",
    image: WoodswsImg,
    link: "https://vessella.com/project/vessella-woods/",
    status: "completed",
    type: "residential",
  },
  {
    title: "Vessella Villas",
    image: VillasImg,
    link: "https://vessella.com/project/vessella-villas/",
    status: "completed",
    type: "residential",
  },
  {
    title: "Mokilla",
    image: MokilaImg,
    link: "#",
    status: "upcoming",
    type: "commercial",
  },
  {
    title: "Karimnagar",
    image: KarimImg,
    link: "#",
    status: "upcoming",
    type: "commercial",
  },
];


export default function Services() {

  // INTRO ANIMATIONS SCRIPT START
  const titleText = "Explore projects that define our design philosophy";
  const titleWords = titleText.trim().split(/\s+/);

  const titleContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.25,
      },
    },
  };

  const titleWord = {
    hidden: {
      opacity: 0,
      y: 28,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardsContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariant = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };


  const filtersContainer = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const filterItem = {
    hidden: {
      opacity: 0,
      y: 16,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };



  // INTRO ANIMATIONS SCRIPT END


  const [activeFilter, setActiveFilter] = useState("all");
  const [activeSubFilter, setActiveSubFilter] = useState("all");


  const handleMainFilter = (key) => {
    setActiveFilter(key);
    setActiveSubFilter("all");
  };



  // const [activeFilter, setActiveFilter] = useState("all");

  const filteredServices = services.filter((item) => {
    const statusMatch =
      activeFilter === "all" || item.status === activeFilter;

    const typeMatch =
      activeSubFilter === "all" || item.type === activeSubFilter;

    return statusMatch && typeMatch;
  });




  return (
    <section className="services position-relative">
      <div className="container pb-lg-5">
        <span className="services-badge mb-2">OUR PROJECTS</span>

        <motion.h2
          className="services-title fw-light col-lg-6"
          variants={titleContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              variants={titleWord}
              style={{ display: "inline-block", marginRight: "0.35em" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>


        <motion.div
          className="project-filters my-4 gap-3 d-flex flex-wrap"
          variants={filtersContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {[
            { key: "all", label: "All Projects" },
            { key: "ongoing", label: "Ongoing Projects" },
            { key: "upcoming", label: "Upcoming Projects" },
            { key: "completed", label: "Completed Projects" },
          ].map((btn) => (
            <motion.button
              key={btn.key}
              variants={filterItem}
              className={`filter-btns ${activeFilter === btn.key ? "active" : ""}`}
              onClick={() => setActiveFilter(btn.key)}
            >
              {btn.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="project-sub-filters mt-2 mb-4"
          variants={filtersContainer}
          initial="hidden"
          whileInView="show"
        >
          {[
            { key: "all", label: "All Types" },
            { key: "residential", label: "Residential" },
            { key: "commercial", label: "Commercial" },
          ].map((btn) => (
            <motion.button
              key={btn.key}
              variants={filterItem}
              className={`sub-filter-btn ${activeSubFilter === btn.key ? "active" : ""
                }`}
              onClick={() => setActiveSubFilter(btn.key)}
            >
              {btn.label}
            </motion.button>
          ))}
        </motion.div>







        {/* PROJECT ROW */}
        <motion.div
          className="row g-4 mb-lg-5 pb-lg-5"
          layout
        >


          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.title} // IMPORTANT: stable key
                className="col-md-4 text-start"
                variants={cardVariant}
                initial="hidden"
                animate="show"
                exit="exit"
                layout
              >
                <Link to={service.link} className="service-link">
                  <div className="service-card position-relative h-100">
                    <div className="arrow-card position-absolute">
                      <button className="arrow-btn">
                        <span>↗</span>
                      </button>
                    </div>

                    <h3 className="fw-light">{service.title}</h3>
                    <img src={service.image} alt={service.title} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>

        </motion.div>


      </div>


      {/* BOTTOM CLIP */}
      <div
        className="projects-clip"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      />
    </section>
  );
}
