import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import LogoOutlineImg from "../assets/images/logo/v-outline.png"
import "../styles/Testimonials.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
// ✅ Import images directly from src/assets/oimages
import user1 from "../assets/images/test-1.png";
import user2 from "../assets/images/test-2.png";
import user3 from "../assets/images/test-3.png";
import user4 from "../assets/images/test-4.png";
import user5 from "../assets/images/test-5.png";
import user6 from "../assets/images/test-3.png";

const Testimonials = () => {
    const testimonials = [
        {
            title: "“Exceptional Quality & Timely Delivery”",
            text: "Their team delivered our villa exactly as promised, with flawless finishing and top-class materials. Truly impressed with their commitment to timelines.",
            name: "R. Praveen Kumar",
            image: user1,
        },
        {
            title: "“A Smooth and Transparent Buying Experience”",
            text: "From the first site visit to handover, everything was clear and professionally handled. I felt confident and stress-free throughout the process.",
            name: "Sangeetha Reddy",
            image: user2,
        },
        {
            title: "“Premium Villas With Modern Planning”",
            text: "The space planning, ventilation and luxury details exceeded our expectations. It feels like living in a resort every single day.",
            name: "S. Harish Chandra",
            image: user3,
        },
        {
            title: "“Trustworthy and Highly Professional Team”",
            text: "They guided us with genuine suggestions and helped us choose the right villa. The entire journey was transparent and customer-friendly.",
            name: "Meenakshi Rao",
            image: user4,
        },
        {
            title: "“Luxury Living at Its Finest”",
            text: "Every corner of the villa reflects quality workmanship and elegant design. It’s a perfect home for families seeking comfort and class.",
            name: "Aditya Varma",
            image: user5,
        },
        {
            title: "“Impressive Build Quality & Attention to Detail”",
            text: "The craftsmanship and detailing in the villa are remarkable. We are extremely satisfied with the overall finish and design aesthetics.",
            name: "Dr. Manohar Reddy",
            image: user6,
        },
    ];


    const text = "VOICES OF OUR HAPPY HOMEOWNERS";
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
            transition: { duration: 2, ease: "easeOut" },
        },
    };

    return (
        <div className="testimonial-section bg-navy container-fluid py-5">
            <div className="container">
                <div className="row align-items-start">

                    {/* ✅ LEFT SIDE TEXT — col-3 */}
                    <div className="col-lg-3 col-md-4 col-12 mb-5">

                        <motion.p
                            className="text-uppercase text-white mb-0"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Testimonials
                        </motion.p>

                        <motion.h2
                            ref={ref}
                            variants={container}
                            initial="hidden"
                            animate={inView ? "show" : "hidden"}
                            className="text-white fs-1 mt-3"
                        >
                            {words.map((wordText, i) => (
                                <motion.span
                                    key={i}
                                    variants={word}
                                    style={{
                                        display: "inline-block",
                                        marginRight: "0.4em",
                                        // fontSize: "3rem",
                                        fontWeight: wordText === "HOMEOWNERS" ? "500" : "100", // ✅ Bold only HOMEOWNERS
                                    }}
                                >
                                    {wordText}
                                </motion.span>
                            ))}
                        </motion.h2>

                    </div>

                    {/* ✅ RIGHT SIDE TESTIMONIALS — col-9 */}
                    <div className="col-lg-9 col-md-8 col-12">

                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={2}   // ✅ TWO CARDS ON DESKTOP
                            centeredSlides={false}
                            navigation
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            loop={true}
                            className="testimonial-swiper pb-5"
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 15 },
                                768: { slidesPerView: 1, spaceBetween: 20 },
                                1024: { slidesPerView: 2, spaceBetween: 30 },  // ✅ two cards
                            }}
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <motion.div
                                        className="testimonial-card border-0 rounded-4 p-4 shadow-sm position-relative h-100"
                                        initial={{ x: 30, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                    >
                                        <div className="testi-logo-bg">
                                            <img src={LogoOutlineImg} alt="logo" className="img-fluid testi-outline-img" />
                                        </div>

                                        <h5 className="testimonial-title mb-3">{item.title}</h5>
                                        <p className="testimonial-text mb-3">{item.text}</p>

                                        <div className="d-flex align-items-center gap-3 mt-auto">
                                            <img src={item.image} alt={item.name} className="testimonial-img" />
                                            <div>
                                                <h6 className="m-0 text-dark">{item.name}</h6>
                                                <small className="text-muted">{item.designation}</small>
                                            </div>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>

                </div>
            </div>



        </div>
    );
};

export default Testimonials;
