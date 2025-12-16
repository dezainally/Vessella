import "../styles/ProjectNew.css";

import VessellaImg from "../assets/images/serene.png"
import PalmsImg from "../assets/images/palms.png"
import MeadowsImg from "../assets/images/meadows.png"
import VillasImg from "../assets/images/villas.png"
import WoodswsImg from "../assets/images/woods.png"



const services = [
    {
        title: "Vessella Serene",
        image: VessellaImg,
    },
    {
        title: "Vessella Palms",
        image: PalmsImg,
    },
    {
        title: "Vessella Meadows",
        image: MeadowsImg,
    },
    {
        title: "Vessella Villas",
        image: VillasImg,
    },
    {
        title: "Vessella Woods",
        image: WoodswsImg,
    },
    // {
    //     title: "Cyber Meadows",
    //     image: VessellaImg,
    // },
];

export default function Services() {
    return (
        <>
            <section className="services">
                <span className="services-badge">OUR PROJECTS</span>

                <h2 className="services-title">
                    Take a brief look at <br /> some of the services <br /> we offer
                </h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div>
                            <div
                                key={index}
                                className="service-card position-relative"
                            >
                                <div className="arrow-card position-absolute">
                                    <button className="arrow-btn img-fluid">
                                        <span>↗</span>
                                    </button>
                                </div>

                                <div className="position-absolute ">

                                </div>


                                <h3>
                                    {service.title.split("\n").map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </h3>

                                <img src={service.image} alt={service.title} />
                            </div>
                        </div>

                    ))}
                </div>

                <div className="mt-4">
                    <p className="services-footer text-center fs-5 fw-semibold">
                        Discover top-tier real estate development Projects.
                        <a href="#" className="text-decoration-none text-black"> View all Projects</a>
                    </p>
                </div>

            </section>
        </>

    );
}
