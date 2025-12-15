import "../styles/ProjectNew.css";

import VessellaImg from "../assets/images/v.png"
import VessellaIm from "../assets/images/v.png"

const projects = [
    {
        title: "Real Estate Development",
        image: VessellaImg,
    },
    {
        title: "Project Management",
        image: VessellaImg,
    },
    // {
    //     title: "Investment & Capital",
    //     image: VessellaImg,
    // },
    // {
    //     title: "Construction Management",
    //     image: VessellaImg,
    // },
    // {
    //     title: "Architecture & Design",
    //     image: VessellaImg,
    // },
];

export default function Services() {
    return (
        <section className="services">
            <span className="services-badge">WE OFFER</span>

            <h2 className="services-title">
                Take a brief look at <br /> some of the services <br /> we offer
            </h2>

            <div className="services-grid row g-4">
                {projects.map((service, index) => (
                    <div key={index} className="col-lg-6 col-md-12">
                        <a
                            href={`/projects/${service.slug}`}
                            className="service-link"
                        >
                            <div className="service-card position-relative rounded-3 p-4 pb-0">
                                <span className="service-arrow">↗</span>

                                <h3>{service.title}</h3>

                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>


            <p className="services-footer">
                Discover top-tier real estate development services.
                <a href="#"> View all services</a>
            </p>
        </section>
    );
}
