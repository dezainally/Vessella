import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import "../styles/Form.css";
import buildingImg from "../assets/images/form.png"; // replace with your image

const Form = () => {

    const text = "REQUEST MORE INFORMATION";
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

    const handleFocus = (field) => setFocus((prev) => ({ ...prev, [field]: true }));
    const handleBlur = (field, value) => {
        if (!value) setFocus((prev) => ({ ...prev, [field]: false }));
    };

    const [focus, setFocus] = useState({
        name: false,
        email: false,
        phone: false,
        type: false,
        message: false,
    });

    // Motion Variants
    const formVariants = {
        hidden: { opacity: 0, y: 60 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.15,
            },
        },
    };

    const fieldVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section className="offer-section bg-navy container-fluid px-0 py-5">
            <div className="container">
                <div className="row g-0 align-items-center justify-content-center">
                    {/* ===== LEFT SIDE (Project Info) ===== */}
                    <div className="col-lg-5 offer-left position-relative">
                        <img src={buildingImg} alt="Project" className="img-fluid w-100 h-100 object-fit-cover" />
                    </div>

                    {/* ===== RIGHT SIDE (Form) ===== */}
                    <div className="col-lg-5 offer-form-bg p-4 p-md-5 d-flex flex-column justify-content-center">
                        <motion.h2
                            ref={ref}
                            variants={container}
                            initial="hidden"
                            animate={inView ? "show" : "hidden"}
                            className="pertili-font text-white fs-1  col-lg-10"
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

                        <motion.form
                            className="offer-form p-3"
                            variants={formVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
                        >
                            {/* Full Name */}
                            <motion.div
                                variants={fieldVariants}
                                className={`floating-group ${focus.name ? "active" : ""}`}
                            >
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onFocus={() => handleFocus("name")}
                                    onBlur={(e) => handleBlur("name", e.target.value)}
                                />
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                variants={fieldVariants}
                                className={`floating-group ${focus.email ? "active" : ""}`}
                            >
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    onFocus={() => handleFocus("email")}
                                    onBlur={(e) => handleBlur("email", e.target.value)}
                                />
                            </motion.div>

                            {/* Phone */}
                            <motion.div
                                variants={fieldVariants}
                                className={`floating-group ${focus.phone ? "active" : ""}`}
                            >
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    onFocus={() => handleFocus("phone")}
                                    onBlur={(e) => handleBlur("phone", e.target.value)}
                                />
                            </motion.div>

                            {/* Enquiry Type */}
                            <motion.div
                                variants={fieldVariants}
                                className={`floating-group ${focus.type ? "active" : ""}`}
                            >
                                <label>Enquiry Type</label>
                                <select
                                    className="form-select"
                                    onFocus={() => handleFocus("type")}
                                    onBlur={(e) => handleBlur("type", e.target.value)}
                                    defaultValue=""
                                >
                                    <option className="text-dark" value="" disabled hidden></option>
                                    <option className="text-dark">General Inquiry</option>
                                    <option className="text-dark">Booking</option>
                                    <option className="text-dark">Payment Plan</option>
                                </select>
                            </motion.div>

                            {/* Message */}
                            <motion.div
                                variants={fieldVariants}
                                className={`floating-group ${focus.message ? "active" : ""}`}
                            >
                                <label>Message (Max 250 words)</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    maxLength="250"
                                    onFocus={() => handleFocus("message")}
                                    onBlur={(e) => handleBlur("message", e.target.value)}
                                ></textarea>
                            </motion.div>

                            {/* Checkboxes */}
                            <motion.div variants={fieldVariants} className="form-check mb-2">
                                <input type="checkbox" className="form-check-input" id="check1" />
                                <label htmlFor="check1" className="form-check-label small text-light">
                                    I agree to receive commercial electronic messages.
                                </label>
                            </motion.div>

                            <motion.div variants={fieldVariants} className="form-check mb-4">
                                <input type="checkbox" className="form-check-input" id="check2" />
                                <label htmlFor="check2" className="form-check-label small text-light">
                                    By using this form, you accept the{" "}
                                    <a href="#" className="text-warning text-decoration-none">
                                        Website Cookies
                                    </a>{" "}
                                    and{" "}
                                    <a href="#" className="text-warning text-decoration-none">
                                        Privacy Policy
                                    </a>
                                    .
                                </label>
                            </motion.div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                className="btn bg-white text-white px-4 primary-btn mt-3 cta-btn d-lg-flex rounded-0"
                                variants={fieldVariants}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                SUBMIT{" "}
                                <span className="arrow-circle d-flex align-items-center justify-content-center ms-2">
                                    <ArrowRight size={18} />
                                </span>
                            </motion.button>
                        </motion.form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Form;
