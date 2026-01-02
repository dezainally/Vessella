import { useEffect, useRef } from "react";
import "../styles/AboutUsPage.css";
import image1 from "../assets/images/aboutus1.jpg";
import image2 from "../assets/images/aboutus2.jpg";

export default function RelentlessHero() {
    const bgRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !bgRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const progress = Math.min(
                Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
                1
            );

            const scale = 1 + progress * 0.3; // 1 → 1.3
            bgRef.current.style.transform = `scale(${scale})`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <section className="about-hero container-fluid py-5">
                <div className="container h-100 py-5">
                    <div className="about-content row h-100">
                        <div className="col-lg-8 d-flex flex-column left-side">
                            <h1>
                                We are a <br />
                                <span>relentless team</span>
                            </h1>


                            {/* <button className="about-btn">Explore</button> */}

                        </div>

                        <div className="col-lg-4 d-flex justify-content-end flex-column right-side">
                            <p className="about-subtext pertili-font">
                                Energy for tomorrow. <span>We drive sustainable growth and create shared
                                    value.</span>
                            </p>
                        </div>


                    </div>
                </div>

                <button
                    className="explore-btn"
                    onClick={() =>
                        document
                            .getElementById("about-section")
                            .scrollIntoView({ behavior: "smooth" })
                    }
                >
                    <span className="explore-arrows">
                        <svg viewBox="0 0 4 8">
                            <path d="M2.86 0.89L1.15 3.89L2.86 6.9" />
                        </svg>
                        <svg viewBox="0 0 4 8">
                            <path d="M2.86 0.89L1.15 3.89L2.86 6.9" />
                        </svg>
                        <svg viewBox="0 0 4 8">
                            <path d="M2.86 0.89L1.15 3.89L2.86 6.9" />
                        </svg>
                    </span>

                    <span className="explore-text geist-font">EXPLORE</span>
                </button>
                <div className="hero-blue-overlay" />



                {/* <div className="about-hero-label">EXPLORE</div> */}
            </section>
            <section className="about-section-three py-5 mt-5">
                <div className="container">
                    {/* Top label */}
                    <div className="about-label mb-4">
                        <span className="about-dot"></span>
                        <span className="about-label-text">
                            Pioneers in leadership and growth
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="about-heading mb-5">
                        We are a leading independent <br />
                        energy company <br />
                        operating in Vaca Muerta
                    </h2>

                    {/* Bottom Content */}
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="about-card">
                                <p>
                                    We unlock Argentina's energy potential by positioning the
                                    country as an exporter of reliable, affordable, and low-carbon
                                    energy.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="about-card">
                                <p>
                                    Driven by the professionalism of a world-class team and an
                                    entrepreneurial mindset, we build sustainable value in every
                                    step and decision we take.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="about-card">
                                <p>
                                    We innovate daily through an agile, efficient, and
                                    future-oriented operating model, with the ambition to lead the
                                    development of Vaca Muerta.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-4 mt-5">
                    <div className="about-label mb-4">
                        <span className="about-dot"></span>
                        <span className="about-label-text">
                            Pioneers in leadership and growth
                        </span>
                    </div>
                    <h2 className="about-heading">We develop Vaca Muerta <br /> shale oil</h2>
                    <div className="row py-5">
                        <div className="col-md-6">
                            <img src={image1} alt="About Us 1" className="img-fluid px-5 py-5" />
                        </div>
                        <div className="col-md-6 py-5">
                            <p className="text-gray-vessella pertili-font">
                                We are the largest independent oil operator in Argentina, with a leading position in Vaca Muerta, the most important shale play outside North America.
                            </p>
                            <p className="text-gray-vessella pertili-font">
                                Our investment thesis is based on ~229,000 high-quality net acres, with 335 producing wells as of September 2025.
                            </p>
                            <h4 className="mb-3">
                                Vaca Muerta: a pillar of Argentina's energy transformation
                            </h4>
                            <p className="text-gray-vessella pertili-font">
                                Over the past decade, Vaca Muerta’s production grew at a compound rate of 37% per annum. This has more than offset the production decline of all other Argentine plays combined and boosted light oil exports. Vaca Muerta represented almost 54% of the country’s oil production in 2024, and 80% of its oil exports. Vaca Muerta is shifting Argentina’s energy paradigm, from a view of scarcity to one of abundance. It has proven it can generate material oil exports, potentially creating a virtuous cycle of foreign currency inflows and growing investments, contributing to a healthier macroeconomic perspective for Argentina.
                            </p>
                        </div>
                    </div>
                    <div className="row py-5 mt-4">
                        <div className="col-md-6 py-5">
                            <div className="about-label mb-4">
                                <span className="about-dot"></span>
                                <span className="about-label-text">
                                    Pioneers in leadership and growth
                                </span>
                            </div>
                            <h1 className="mb-3">Our History</h1>
                            <p className="text-gray-vessella pertili-font">
                               Vista Energy was founded in 2017 as a SPAC in Mexico, with the purpose of building a competitive, international energy platform. In 2018, after acquiring two companies holding assets in Vaca Muerta, Argentina, we launched a sustainable growth strategy based on a high-quality well inventory and our leading operational performance.
                            </p>
                            <p className="text-gray-vessella pertili-font">
                                In July 2019, we listed the company on the New York Stock Exchange. With a focus on profitability, growth, and emissions reduction, we continue to pursue a strategic vision of transforming the region's energy development.
                            </p>
                            <p className="text-gray-vessella pertili-font">
                                Having invested over USD 5 billion and connected more than 311 wells, we are currently the largest independent oil producer and the most significant exporter in Argentina.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src={image2} alt="About Us 1" className="img-fluid px-5 py-5" />
                        </div>
                    </div>
                </div>
            </section>
        </>


    );
}
