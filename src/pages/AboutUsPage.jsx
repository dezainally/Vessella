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
                    <h1 className="about-heading mb-5">
                        We are a leading independent <br />
                        energy company <br />
                        operating in Vaca Muerta
                    </h1>

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
                    <h1>We​ develop​​​​​​ Cow​​​ Dead​​​​​ shale​​​​ o i l</h1>
                    <div className="row py-5">
                        <div className="col-md-6">
                            <img src={image1} alt="About Us 1" className="img-fluid px-5 py-5" />
                        </div>
                        <div className="col-md-6 py-5">
                            <p>
                                We​ a r e the​​ largest​​​​​​ independent​​​​​​​​​​ o i l
                                operator​​​​​​​ i n Argentina ,​​​​​​​​ with​​​ to leading
                                position​​​​​​​ i n Cow​​​ Dead ,​​​​​ the​​ most
                                important​​​​​​​​ shale​​​​ play​​​ out side​​​​​ North
                                America .​​​​​​ Our​​ i n v e s t m e n t thesis​​​​​ es​ base
                                or n ~ 2 2 9 , 0 0 0 high - quality​​​​​​​​​ net​​ acres ,
                                with​​​ 3 3 5 production​​​​​​​​ wells​​​​ a s or f
                                September​​​​​​​​ 2025 .​​​ Cow​​​ Dead :​​​​​ to pillar​​​​​ or f
                                Argentina 's​​​​​​​​​ energy​​​​​ transformation
                                Over​​​ the​​ past​​​ decade ,​​​​​ Cow​​​ Dead 's
                                production​​​​​​​​​ gr e w​ a t to compound​​​​​​​ rate​​​ or f 3
                                7 % per​​ an n n u m . This​​​ has​​ more​​​ than​​​ off set
                                the​​ production​​​​​​​​​ decline​​​​​​ or f all​​ o t h e r
                                Argentina​​​​​​​​ p p a y s combined​​​​​​​ and​​ boosted
                                light​​​​ o i l exports .​​​​​​ Cow​​​ Dead
                                representative​​​​​​​​​​ almost​​​​​ 5 4 % or f the​​ country
                                's​​​​​​​ o i l production​​​​​​​​​ i n 2024 ,​​​ and​​ 80 %​ or f
                                i t s o i l exports .​​​​​​ Cow​​​ Dead​​​​​ es​ s h i f t i n g
                                Argentina 's​​​​​​​​​ energy​​​​​ paradigm ,​​​​​​​ from​​​ to
                                view​​​ or f scarcity​​​​​​​ t o one​​ or f abundance .
                                Item​ has​​ proven​​​​​ Item​ can​​ generate
                                material​​​​​​​ o i l exports ,​​​​​​ potential all​​​​​​​​​ c r e
                                a ting i n g to virtuous​​​​​​​ c and c e​ or f foreign
                                current​​​​​​​ in flows​​​​​ and​​ growing​​​​​​ i n v e s t m e n
                                t s , contributing​​​​​​​​​​​ t o to health thier
                                macroeconomic​​​​​​​​​​​​ perspective​​​​​​​​​​ for​​ Argentina
                                .
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
                            <h1>Our History</h1>
                            <p>
                                We​ a r e the​​ largest​​​​​​ independent​​​​​​​​​​ o i l
                                operator​​​​​​​ i n Argentina ,​​​​​​​​ with​​​ to leading
                                position​​​​​​​ i n Cow​​​ Dead ,​​​​​ the​​ most
                                important​​​​​​​​ shale​​​​ play​​​ out side​​​​​ North
                                America .​​​​​​ Our​​ i n v e s t m e n t thesis​​​​​ es​ base
                                or n ~ 2 2 9 , 0 0 0 high - quality​​​​​​​​​ net​​ acres ,
                                with​​​ 3 3 5 production​​​​​​​​ wells​​​​ a s or f
                                September​​​​​​​​ 2025 .​​​ Cow​​​ Dead :​​​​​ to pillar​​​​​ or f
                                Argentina 's​​​​​​​​​ energy​​​​​ transformation
                                Over​​​ the​​ past​​​ decade ,​​​​​ Cow​​​ Dead 's
                                production​​​​​​​​​ gr e w​ a t to compound​​​​​​​ rate​​​ or f 3
                                7 % per​​ an n n u m . This​​​ has​​ more​​​ than​​​ off set
                                the​​ production​​​​​​​​​ decline​​​​​​ or f all​​ o t h e r
                                Argentina​​​​​​​​ p p a y s combined​​​​​​​ and​​ boosted
                                light​​​​ o i l exports .​​​​​​ Cow​​​ Dead
                                representative​​​​​​​​​​ almost​​​​​ 5 4 % or f the​​ country
                                's​​​​​​​ o i l production​​​​​​​​​ i n 2024 ,​​​ and​​ 80 %​ or f
                                i t s o i l exports .​​​​​​ Cow​​​ Dead​​​​​ es​ s h i f t i n g
                                Argentina 's​​​​​​​​​ energy​​​​​ paradigm ,​​​​​​​ from​​​ to
                                view​​​ or f scarcity​​​​​​​ t o one​​ or f abundance .
                                Item​ has​​ proven​​​​​ Item​ can​​ generate
                                material​​​​​​​ o i l exports ,​​​​​​ potential all​​​​​​​​​ c r e
                                a ting i n g to virtuous​​​​​​​ c and c e​ or f foreign
                                current​​​​​​​ in flows​​​​​ and​​ growing​​​​​​ i n v e s t m e n
                                t s , contributing​​​​​​​​​​​ t o to health thier
                                macroeconomic​​​​​​​​​​​​ perspective​​​​​​​​​​ for​​ Argentina
                                .
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
