import { useEffect, useRef, useState } from "react";
import "../styles/AboutUsPage.css";
import image1 from "../assets/images/aboutus1.jpg";
import image2 from "../assets/images/aboutus2.jpg";
import AboutBg from "../assets/images/about-us-img.svg";
import { executiveData } from "../data/leadershipData";

export default function RelentlessHero() {
    const bgRef = useRef(null);
    const sectionRef = useRef(null);

    const [activeTab, setActiveTab] = useState("executive");
    const [leaders, setLeaders] = useState(executiveData);  
    const [index, setIndex] = useState(0);

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

    const [selectedLeader, setSelectedLeader] = useState(null);

    //   const [progress, setProgress] = useState(0);
    //   const [lineDirection, setLineDirection] = useState("to-right");

   

    /* reset line when tab changes */
    const switchTab = (tab) => {
        setActiveTab(tab);
        setLeaders(tab === "executive");
        setIndex(0);
    };

    const visibleSlides = 4;
    const maxIndex = leaders.length - visibleSlides;

    // progress goes from -100% → 0%
    const progress = maxIndex <= 0 ? 0 : (index / maxIndex) * 100;

    const nextSlide = () => {
        if (index < maxIndex) setIndex(index + 1);
    };

    const prevSlide = () => {
        if (index > 0) setIndex(index - 1);
    };

    return (
        <>
            <section className="about-hero container-fluid py-5">
                <div className="container h-100 py-5 px-lg-0">
                    <div className="about-content py-5 row h-100">
                        <div className="col-lg-7 px-lg-0  d-flex flex-column left-side">
                            <h1 className="display-3">
                                We build our projects <br />
                                <span>with your dreams and ideas</span>
                            </h1>


                            {/* <button className="about-btn">Explore</button> */}

                        </div>

                        <div className="col-lg-5 px-lg-0 d-flex justify-content-end flex-column right-side">
                            <p className="about-subtext pertili-font">
                                The Vessella Group stands a level above with a strong foundation and wealth of experience in building homes. <span>we like to think of ourselves as ‘fine home connoisseurs’ delivering innovative, premium experiences to residents looking for a touch of class and calm in their living spaces.
                                </span>
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

            {/* <div
                ref={containerRef}
                className="relative overflow-hidden aspect-[375/500] max-h-screen w-full md:aspect-[1440/600]"
            >
                <img
                    ref={imageRef}
                    src="/images/about/hero-2.jpg"
                    alt=""
                    className="h-full w-full object-cover will-change-transform"
                    style={{ transform: "translate3d(0px, 0%, 0px) scale(1.2)" }}
                />
            </div> */}
            <section className="about-section-three py-5 mt-5">
                <div className="container">
                    {/* Top label */}
                    <div className="about-label mb-4">
                        <span className="about-dot"></span>
                        <span className="about-label-text">
                            Our Capabilities
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="about-heading mb-5">
                        Unique solutions for your home through a personalized process.
                    </h2>

                    {/* Bottom Content */}
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="about-card">
                                <p>
                                    We adhere to high standards of honesty and strong business ethics. We do right by all our customers and stakeholders every time with no exceptions
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="about-card">
                                <p>
                                    We strive to motivate, influence, energize and stimulate our employees through the most conducive work environment.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="about-card">
                                <p>
                                    We encourage progressive and forward-thinkers who engage in fresh ideas for better solutions and superior outcomes.
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
                            <p className="text-gray-vessella pertili-font   ">
                                Vista Energy was founded in 2017 as a SPAC in Mexico, with the purpose of building a competitive, international energy platform. In 2018, after acquiring two companies holding assets in Vaca Muerta, Argentina, we launched a sustainable growth strategy based on a high-quality well inventory and our leading operational performance.
                            </p>
                            <p className="text-gray-vessella pertili-font   ">
                                In July 2019, we listed the company on the New York Stock Exchange. With a focus on profitability, growth, and emissions reduction, we continue to pursue a strategic vision of transforming the region's energy development.
                            </p>
                            <p className="text-gray-vessella pertili-font   ">
                                Having invested over USD 5 billion and connected more than 311 wells, we are currently the largest independent oil producer and the most significant exporter in Argentina.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src={image2} alt="About Us 1" className="img-fluid px-5 py-5" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="leadership-section py-5">
                <div className="container">
                    <div className="d-flex align-items-center mb-3">
                        <span className="dot"></span>
                        <span className="section-label">GET TO KNOW</span>
                    </div>

                    <h2 className="section-title mb-4">
                        Leadership with <br /> vision of future
                    </h2>

                    {/* Tabs */}
                    <div className="d-flex gap-4 mb-4 leadership-tabs">
                        <span
                            className={activeTab === "executive" ? "active" : ""}
                            onClick={() => switchTab("executive")}
                        >
                            EQUIPMENT EXECUTIVE
                        </span>
                        {/* <span
              className={activeTab === "admin" ? "active" : ""}
              onClick={() => switchTab("admin")}
            >
              ADVICE OF ADMINISTRATION
            </span> */}
                    </div>

                    {/* Slider */}
                    <div className="slider-wrapper">
                        <div
                            className="slider-track"
                            style={{ transform: `translateX(-${index * 25}%)` }}
                        >
                            {executiveData.map((item, i) => (
                                <div className="slider-item" key={i}>
                                    <div
                                        className="leader-card"
                                        onClick={() => setSelectedLeader(item)}
                                    >
                                        <div className="icon">+</div>
                                        <div className="leader-info">
                                            <h5>{item.name}</h5>
                                            <p>{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom line */}
                    {/* Bottom line */}
                    {/* Controls */}
                    <div className="embla-controls">
                        <div className="embla-progress">
                            <div
                                className="embla-progress-bar"
                                style={{
                                    transform: `translate3d(${progress}%, 0, 0)`,
                                }}
                            />
                        </div>

                        <div className="embla-buttons">
                            <button
                                className="nav-btns"
                                onClick={prevSlide}
                            // disabled={index === 0}
                            >
                                ←
                            </button>

                            <button
                                className="nav-btns"
                                onClick={nextSlide}
                            // disabled={index >= leaders.length - visibleSlides}
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {selectedLeader && (
                <div className="leader-modal-overlay">
                    <div className="leader-modal">
                        <button
                            className="close-btn"
                            onClick={() => setSelectedLeader(null)}
                        >
                            ✕
                        </button>

                        <h2>{selectedLeader.name}</h2>
                        <h4>{selectedLeader.role}</h4>

                        {selectedLeader.bio.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                </div>
            )}
        </>


    );
}
