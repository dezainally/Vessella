import "../styles/ProjectNew.css";
import { useState } from "react";


import VessellaImg from "../assets/images/serene.png"
import PalmsImg from "../assets/images/palms.png"
import MeadowsImg from "../assets/images/meadows.png"
import VillasImg from "../assets/images/villas.png"
import WoodswsImg from "../assets/images/woods.png"

import { Link } from "react-router-dom";


const services = [
  {
    title: "Vessella Serene",
    image: VessellaImg,
    link: "#",
    status: "ongoing",
  },
  {
    title: "Vessella Palms",
    image: PalmsImg,
    link: "#",
    status: "upcoming",
  },
  {
    title: "Vessella Meadows",
    image: MeadowsImg,
    link: "https://vessella.com/project/vessella-meadows/",
    status: "completed",
  },
  {
    title: "Vessella Woods",
    image: WoodswsImg,
    link: "https://vessella.com/project/vessella-woods/",
    status: "ongoing",
  },
  {
    title: "Vessella Villas",
    image: VillasImg,
    link: "https://vessella.com/project/vessella-villas/",
    status: "completed",
  },
];

export default function Services() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((item) => item.status === activeFilter);

  return (
    <section className="services">
      <span className="services-badge">OUR PROJECTS</span>

      <h2 className="services-title">
        Take a brief look at <br /> some of the services <br /> we offer
      </h2>

      {/* FILTER BUTTONS */}
      <div className="project-filters">
        {[
          { key: "all", label: "All Projects" },
          { key: "ongoing", label: "Ongoing Projects" },
          { key: "upcoming", label: "Upcoming Projects" },
          { key: "completed", label: "Completed Projects" },
        ].map((btn) => (
          <button
            key={btn.key}
            className={`filter-btns ${
              activeFilter === btn.key ? "active" : ""
            }`}
            onClick={() => setActiveFilter(btn.key)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div className="services-grid">
        {filteredServices.map((service, index) => (
          <Link to={service.link} key={index} className="service-link">
            <div className="service-card position-relative">
              <div className="arrow-card position-absolute">
                <button className="arrow-btn">
                  <span>↗</span>
                </button>
              </div>

              <h3>{service.title}</h3>
              <img src={service.image} alt={service.title} />
            </div>
          </Link>
        ))}
      </div>

      <p className="services-footer text-center fs-5 fw-semibold mt-4">
        Discover top-tier real estate development Projects.
        <a
          href="https://vessella.com/projects/"
          className="text-decoration-none text-black ms-2"
        >
          View all Projects
        </a>
      </p>
    </section>
  );
}