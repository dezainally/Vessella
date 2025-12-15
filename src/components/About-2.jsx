import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "../styles/About-2.css";
import AboutImg from "../assets/images/about-us-image.jpeg"
import LogoOutlineImg from "../assets/images/logo/v-outline.png"

const AboutUs = () => {

    

    const text = "EACH VILLA REFLECTS OUR COMMITMENT TO DESIGN AND CRAFTSMANSHIP";
    const words = text.trim().split(/\s+/); // split by spaces properly

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.07,
            },
        },
    };

    const word = {
        hidden: { y: 30, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };



    return (
        <section id="about" className="about-section my-5 py-5">
            <div className="container">
                {/* Top Intro Text */}
                <div className="mb-5 d-flex align-items-center justify-content-between flex-wrap-reverse">
                 
                    <motion.h2
                        ref={ref}
                        variants={container}
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                        className="pertili-font navy-blue fs-1  col-lg-10"
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
                    <motion.p
                        className="text-uppercase opacity-50  mb-0"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        About Us
                    </motion.p>
                </div>

                {/* Info Boxes */}
                <div className="row g-0">
                    <div className="col-lg-3 about-info-card px-4 py-2 d-flex ailgn-items-center flex-column justify-content-between">
                        <h3 className="   mb-5 display-4">15+</h3>
                        <p className="mt-5">
                            experience in development, construction and sales
                        </p>
                    </div>
                    <div className="col-lg-6 about-info-card p-0 border-0 d-flex align-items-center justify-content-center">
                        <img src={LogoOutlineImg} alt="vessella-about-us-image" className="img-fluid about-us-image" />
                    </div>
                    <div className="col-lg-3 about-info-card px-4 py-2 d-flex ailgn-items-center flex-column justify-content-between">
                        <h3 className="   mb-5 display-4">5+</h3>
                        <p className="mt-5">
                            successful investment projects
                        </p>
                    </div>
                    <div className="col-lg-3 about-info-card px-4 py-2 d-flex ailgn-items-center flex-column justify-content-between">
                        <h3 className="   mb-5 display-4">95%</h3>
                        <p className="mt-5">
                            of our customers choose us again and again
                        </p>
                    </div>
                    <div className="col-lg-3 about-info-card px-4 py-2 d-flex ailgn-items-center flex-column justify-content-between">
                        <h3 className="   mb-5 display-4">100+</h3>
                        <p className="mt-5">
                            successful global partnerships
                        </p>
                    </div>
                    <div className="col-lg-6 about-info-card p-4 d-flex align-items-end justify-content-center">
                        <p className="">
                            We offer our clients and investors comprehensive services, including project selection guidance, payment assistance, legal support, and lease management.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
