import { useEffect, useState, useRef } from "react";
import "../styles/HeaderThree.css";
import HeaderLogo from "../assets/images/logo/blue-v-logo.png";
import SideDecorImage from "../assets/images/v-logo-30.png";
import project from "../assets/images/serene.png";
import PalmsImg from "../assets/images/palms.png";
import MeadowsImg from "../assets/images/meadows.png";
import VillasImg from "../assets/images/villas.png";
import WoodswsImg from "../assets/images/woods.png";

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
        { title: "Villa Serene", img: project },
        { title: "Palm Retreat", img: PalmsImg },
        { title: "Green Meadows", img: MeadowsImg },
        { title: "Luxury Villas", img: VillasImg },
        { title: "Whispering Woods", img: WoodswsImg },
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
                                    <div
                                        className="menu-dropdown-head"
                                        onClick={toggleProjects}
                                    >
                                        <span className={activeLink === link ? "active " : ""}>
                                            {link}
                                        </span>

                                        <span
                                            className={`caret fs-2 px-5 ${projectsOpen ? "open" : ""}`}
                                        >
                                            ^
                                        </span>
                                    </div>

                                    <div
                                        className={`projects-panel ${projectsOpen ? "show" : ""}`}
                                    >
                                        {projects.map((item) => (
                                            <div key={item.title} className="project-card">
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                    className="project-img"
                                                />
                                                <div className="project-title ">
                                                    {item.title}
                                                    <span className="arrow">→</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <a
                                key={link}
                                className={activeLink === link ? "active " : ""}
                                onClick={() => handleNavClick(link)}
                            >
                                {link}
                            </a>
                        );
                    })}
                </nav>

                {/* <img
                    src={SideDecorImage}
                    alt="Menu Decorative"
                    className="side-menu-decor"
                /> */}
            </aside>
        </>
    );
}