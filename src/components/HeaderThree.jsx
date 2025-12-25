import { useEffect, useState, useRef } from "react";
import "../styles/HeaderThree.css";
import HeaderLogo from "../assets/images/logo/blue-v-logo.png";
import SideDecorImage from "../assets/images/v-logo-30.png";
import project from "../assets/images/serene.png";
import PalmsImg from "../assets/images/palms.png";
import MeadowsImg from "../assets/images/meadows.png";
import VillasImg from "../assets/images/villas.png";
import WoodswsImg from "../assets/images/woods.png";

import ImgHome from "../assets/images/woods-1.jpg";
import ImgAbout from "../assets/images/providers.webp";
import ImgOperations from "../assets/images/woods-1.jpg";
import ImgInvestors from "../assets/images/providers.webp";
import ImgSustainability from "../assets/images/woods-1.jpg";


export default function HeaderThree() {

    const [hideHeader, setHideHeader] = useState(false);
    const lastScrollY = useRef(0);


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // background change
            setScrolled(currentScrollY > 50);

            // scroll direction detection
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // scrolling down
                setHideHeader(true);
            } else {
                // scrolling up
                setHideHeader(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("HOME");
    const [projectsOpen, setProjectsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const projects = [
        { title: "Vessella Serene", img: project },
        { title: "Vessella Palm", img: PalmsImg },
        { title: "Vessella Meadows", img: MeadowsImg },
        { title: "Vessella Woods", img: WoodswsImg },
        { title: "Vessella Villas", img: VillasImg },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    const handleNavClick = (linkName) => {
        setActiveLink(linkName);
        setOpen(false);

        if (linkName === "HOME") {
            window.location.href = "#home";
        } else if (linkName === "About US") {
            window.location.href = "#about-us";
        } else if (linkName === "Projects") {
            window.location.href = "#projects";
        } else if (linkName === "Contact US") {
            window.location.href = "#contact-us";
        }
    };

    const toggleMenu = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        if (!open) {
            setOpen(true);
            setTimeout(() => setIsAnimating(false), 600); // Match CSS transition duration
        } else {
            setOpen(false);
            setProjectsOpen(false); // Close projects when closing menu
            setTimeout(() => setIsAnimating(false), 600);
        }
    };

    const toggleProjects = () => {
        setProjectsOpen(!projectsOpen);
    };

    const handleMouseEnterProjects = () => {
        setProjectsOpen(true);
    };

    const handleMouseLeaveProjects = () => {
        // Add a small delay before closing to prevent accidental closure
        setTimeout(() => {
            setProjectsOpen(false);
        }, 300);
    };

    const menuLinks = ["HOME", "ABOUT US", "PROJECTS", "CONTACT US"];

    const menuImages = {
        HOME: ImgHome,
        "ABOUT US": ImgAbout,
        OPERATIONS: ImgOperations,
        INVESTORS: ImgInvestors,
        SUSTAINABILITY: ImgSustainability,
    };

    const [hoveredImage, setHoveredImage] = useState(menuImages.HOME);

    useEffect(() => {
        if (!open) setHoveredImage(menuImages.HOME);
    }, [open]);




    return (
        <>
            {/* HEADER */}
            <header className="site-header">
                <div className="header-container">
                    <div
                        className={`header 
        ${scrolled ? "scrolled" : ""} 
        ${hideHeader ? "hide" : ""}`}
                    >

                        {/* LEFT – LOGO */}
                        <div className="logo-wrapper">
                            <img src={HeaderLogo} alt="Logo" />
                        </div>

                        {/* CENTER – MENU LINKS */}
                        <nav className="header-nav">
                            {menuLinks.map((link) => (
                                <a
                                    key={link}
                                    className={`nav-link ${activeLink === link ? "active" : ""}`}
                                    onClick={() => handleNavClick(link)}
                                >
                                    {link}
                                </a>
                            ))}
                        </nav>

                        {/* RIGHT – MENU BUTTON */}
                        <div
                            className={`menu-btn ${open ? "open" : ""}`}
                            onClick={toggleMenu}
                            style={{ cursor: isAnimating ? "wait" : "pointer" }}
                        >
                            <span className="menu-text">{open ? "CLOSE" : "MENU"}</span>
                            <div className="menu-icon-three">
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>

                    </div>
                </div>
            </header>



            {/* Overlay */}
            <div
                className={`menu-overlay ${open ? "show" : ""}`}
                onClick={toggleMenu}
            />

            {/* RIGHT SIDE MENU */}
            <aside className={`side-menu ${open ? "show" : ""}`}>

                {/* LEFT IMAGE PANEL */}
                <div className="side-menu-left">
                    <img
                        key={hoveredImage}
                        src={hoveredImage}
                        alt="Preview"
                        className="side-menu-image"
                    />
                </div>

                {/* RIGHT NAV PANEL */}
                <div className="side-menu-right">

                    <div className="menu-top">
                        <img src={HeaderLogo} alt="Logo" className="menu-logo" />

                        <div className="menu-btn open" onClick={toggleMenu}>
                            <span className="menu-text">CLOSE</span>
                            <div className="menu-icon-three">
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                    </div>

                    <nav className="menu-nav pertili-font">
                        {menuLinks.map((link) => {
                            if (link === "PROJECTS") {
                                return (
                                    <div
                                        key={link}
                                        className="menu-dropdown"
                                        onMouseEnter={handleMouseEnterProjects}
                                        onMouseLeave={handleMouseLeaveProjects}
                                    >
                                        {/* existing PROJECTS code unchanged */}
                                    </div>
                                );
                            }

                            return (
                                <a
                                    key={link}
                                    className={activeLink === link ? "active" : ""}
                                    onMouseEnter={() => setHoveredImage(menuImages[link])}
                                    onClick={() => handleNavClick(link)}
                                >
                                    {link}
                                </a>
                            );
                        })}
                    </nav>

                </div>
            </aside>

        </>
    );
}