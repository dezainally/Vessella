import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import "../styles/Header.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

import HeaderLogo from "../assets/images/logo/logo-white.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [isActive, setIsActive] = useState(false);

    // 🔹 Toggle menu open/close
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setIsActive(!isActive);
    };

    // Variants for staggered animation
    const listVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.5 },
        },
    };

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    // 🔹 Close menu (for mobile nav links, etc.)
    const closeMenu = () => {
        setMenuOpen(false);
        setIsActive(false);
    };

    // 🔹 Show header shadow / background when scrolling
    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            {/* ===== Header Bar ===== */}
            <motion.header className="main-header position-fixed container d-flex align-items-center justify-content-between px-0 py-3"
                initial={{ y: -50, opacity: 0 }}
                animate={{
                    y: visible ? -60 : 0,    // ✅ hide/show without duplication
                    opacity: visible ? 0 : 1,
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}>
                <Link to="/" aria-label="Vessella Home">
                    <img
                        src={HeaderLogo}
                        alt="Vessella logo"
                        className="header-logo"
                    />
                </Link>

                {/* ✅ FIXED MENU ICON */}
                <div
                    className={`menu-icon d-flex align-items-center justify-content-between flex-column ${isActive ? "menu-active" : ""}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                </div>

                {/* ✅ FIXED MENU ICON */}
                {/* <div
                    className={`menu-icon d-flex align-items-center justify-content-between flex-column ${isActive ? "menu-active" : ""}`}
                    onClick={toggleMenu}
                >
                    <div></div>
                    <div></div>
                </div> */}

            </motion.header>

            {/* ===== Sidebar Overlay with Motion ===== */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="sidebar-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={closeMenu}
                    >
                        {/* 🔹 Left Sidebar */}
                        <motion.div
                            className="sidebar-left d-flex justify-content-center"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween", duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                        >
                            {/* 🔹 Nav Links */}
                            <motion.ul
                                className="sidebar-nav text-end list-unstyled"
                                variants={listVariants}
                                initial="hidden"
                                animate="show"
                            >
                                {[
                                    { label: "ABOUT US", href: "#about" },
                                    { label: "OUR PROJECTS", href: "#projects" },
                                    { label: "BLOGS", href: "#blogs" },
                                    { label: "CONTACT US", href: "#contact" },
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        variants={itemVariants}
                                        className="fs-5 my-2"
                                        onClick={closeMenu}
                                    >
                                        <a href={item.href} className="sidebar-link text-decoration-none">
                                            {item.label}
                                        </a>
                                    </motion.li>
                                ))}
                            </motion.ul>


                            {/* 🔹 Social Media Links */}
                            <motion.div
                                className="sidebar-social d-flex justify-content-end gap-3 mt-5 flex-wrap flex-column"
                                // initial={{ opacity: 0, x: -50 }}
                                // animate={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: "-100%" }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <div className="d-flex align-items-center justify-content-end gap-3">
                                    <a href="tel:+911234567890" className="social-icon-btn d-flex align-items-center justify-content-center call" aria-label="Call">
                                        <FiPhoneCall />
                                    </a>
                                    <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="social-icon-btn d-flex align-items-center justify-content-center whatsapp" aria-label="WhatsApp">
                                        <FaWhatsapp />
                                    </a>
                                    <a href="#" className="social-icon-btn d-flex align-items-center justify-content-center facebook" aria-label="Facebook">
                                        <FaFacebookF />
                                    </a>
                                </div>

                                <div className="d-flex align-items-center justify-content-end gap-3">
                                    <a href="#" className="social-icon-btn d-flex align-items-center justify-content-center instagram" aria-label="Instagram">
                                        <FaInstagram />
                                    </a>
                                    <a href="#" className="social-icon-btn d-flex align-items-center justify-content-center twitter" aria-label="Twitter">
                                        <FaTwitter />
                                    </a>
                                    <a href="#" className="social-icon-btn d-flex align-items-center justify-content-center youtube" aria-label="YouTube">
                                        <FaYoutube />
                                    </a>
                                </div>


                            </motion.div>




                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
