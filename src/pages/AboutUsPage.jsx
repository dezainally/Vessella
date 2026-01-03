import { useEffect, useRef, useState } from "react";
import "../styles/AboutUsPage.css";
import image1 from "../assets/images/vision.jpg";
import image2 from "../assets/images/mission.jpg";
import AboutBg from "../assets/images/about-us-img.svg";
import { executiveData } from "../data/leadershipData";

import TrustIcon from "../assets/icons/trusted-seller.png";
import EmpathyIcon from "../assets/icons/customer-engagement.png";
import CreativityIcon from "../assets/icons/creativity.png";


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

            <div

                className="container-fluid p-0"
            >
                <img

                    src={AboutBg}
                    alt=""
                    className="img-fluid"

                />
            </div>
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
                                <img src={TrustIcon} className="mb-3" alt="" 
                                style={{width:"50px"}}/>
                                <p>
                                    We adhere to high standards of honesty and strong business ethics. We do right by all our customers and stakeholders every time with no exceptions
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="about-card">
                                 <img src={EmpathyIcon} className="mb-3" alt="" 
                                style={{width:"50px"}}/>
                                <p>
                                    We strive to motivate, influence, energize and stimulate our employees through the most conducive work environment.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="about-card">
                                 <img src={CreativityIcon} className="mb-3" alt="" 
                                style={{width:"50px"}}/>
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
                    <h2 className="about-heading">Building Excellence, Creating Timeless Living</h2>
                    <div className="row py-5">
                        <div className="col-md-6 p-lg-3">
                            <img src={image1} alt="About Us 1" className="img-fluid " 
                            style={{borderRadius: "10px", borderEndEndRadius: "50px"}}
                            />
                        </div>
                        <div className="col-md-6 py-5">

                            <h1 className="mb-3">Vision</h1>
                            <p className="text-gray-vessella pertili-font   ">
                                Our vision is to be recognized for unsurpassed excellence in construction and design, setting new benchmarks in quality, innovation, and reliability. We strive to achieve leadership not only in business performance but also in brand credibility and trust. By consistently delivering superior value, we aim to secure a lasting place in the hearts and minds of our customers.
                            </p>

                            <p className="text-gray-vessella pertili-font   ">
                                We envision shaping communities that stand as symbols of architectural excellence and refined living. By embracing innovation, precision, and sustainable practices, we aim to redefine standards in the construction industry. Our focus is on creating developments that inspire confidence, pride, and long-term value for generations to come.
                            </p>
                        </div>
                    </div>
                    <div className="row py-5 mt-4">
                        <div className="col-md-6 py-5">

                            <h1 className="mb-3">Mission</h1>
                            <p className="text-gray-vessella pertili-font   ">
                                Our mission is to design and develop luxury living spaces in life-friendly, thoughtfully chosen locations that enhance everyday living. We are committed to creating world-class ambience within well-planned gated communities that balance modern architecture with comfort and sustainability. Through transparency, quality craftsmanship, and customer-centric values, we seek to build strong, long-term relationships with those who choose to live with us.
                            </p>

                            <p className="text-gray-vessella pertili-font   ">
                                We are dedicated to delivering thoughtfully designed homes that elevate lifestyles while respecting the environment and surrounding communities. Through meticulous planning, superior materials, and skilled craftsmanship, we ensure every project reflects quality and care. Our mission extends beyond construction—to continuously support our customers and nurture relationships built on trust, integrity, and shared growth.
                            </p>

                        </div>
                        <div className="col-md-6 p-lg-3">
                            <img src={image2} alt="About Us 1" className="img-fluid " 
                             style={{borderRadius: "10px", borderEndEndRadius: "50px"}}
                             />
                        </div>
                    </div>
                </div>
            </section>

            <section className="leadership-section py-5">
                <div className="container">
                    <div className="d-flex align-items-center mb-3">
                        <span className="about-dot"></span>
                        <span className="section-label">PIONEERS IN LEADERSHIP AND GROWTH</span>
                    </div>

                    <h2 className="section-title mb-4">
                        Leadership with <br /> vision of future
                    </h2>

                    {/* Tabs */}
                    

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
                                            <h4 className="display-6">{item.name}</h4>
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

                        <h2 className="display-5">{selectedLeader.name}</h2>
                        <h4 className="display-6">{selectedLeader.role}</h4>

                        {selectedLeader.bio.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                </div>
            )}
        </>


    );
}
