import { useEffect, useState, useRef } from "react";
import "../styles/HeaderThree.css";
import HeaderLogo from "../assets/images/logo/blue-v-logo.png";
import SideDecorImage from "../assets/images/v-logo-30.png";
import project from "../assets/images/serene-logo.png";
import PalmsImg from "../assets/images/palms-logo.png";
import MeadowsImg from "../assets/images/meadows-logo.png";
import VillasImg from "../assets/images/villas-logo.png";
import WoodswsImg from "../assets/images/woods-logo.png";
import MokilaImg from "../assets/images/mokila-logo.png";
import KarimnagarImg from "../assets/images/karimnagar-logo.png";

import ImgHome from "../assets/images/nav-1.jpg";
import ImgAbout from "../assets/images/nav-2.jpg";
import ImgProject from "../assets/images/nav-3.jpg";
import ImgContact from "../assets/images/nav-4.jpg";

export default function HeaderThree() {
  const [hideHeader, setHideHeader] = useState(false);
  const lastScrollY = useRef(0);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(ImgHome);
  const [isImageChanging, setIsImageChanging] = useState(false);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [nextImage, setNextImage] = useState(ImgHome);
  const isTransitioningRef = useRef(false);
  const hasOpenedOnceRef = useRef(false);
  const [isFirstOpen, setIsFirstOpen] = useState(true);

  const projects = [
    { title: "Vessella Serene", img: project, navImg: ImgProject },
    { title: "Vessella Palms", img: PalmsImg, navImg: ImgProject },
    { title: "Vessella Meadows", img: MeadowsImg, navImg: ImgProject },
    { title: "Vessella Woods", img: WoodswsImg, navImg: ImgProject },
    { title: "Vessella Villas", img: VillasImg, navImg: ImgProject },
    { title: "Mokilla", img: MokilaImg, navImg: ImgProject },
    { title: "Karimnagar", img: KarimnagarImg, navImg: ImgProject },
  ];

  const menuLinks = ["HOME", "ABOUT US", "PROJECTS", "CONTACT US"];

  const menuImages = {
    HOME: ImgHome,
    "ABOUT US": ImgAbout,
    PROJECTS: ImgProject,
    "CONTACT US": ImgContact,
  };
  useEffect(() => {
    if (open && isFirstOpen) {
      setIsFirstOpen(false);
    }
  }, [open, isFirstOpen]);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Reset hovered image when menu closes
  useEffect(() => {
    if (!open) {
      setHoveredImage(menuImages.HOME);
      setActiveLink("HOME");
    }
  }, [open]);
  const changeImage = (newImage) => {
    if (newImage === hoveredImage || isTransitioningRef.current) return;

    isTransitioningRef.current = true;

    setNextImage(newImage);
    setIsImageChanging(true);

  setTimeout(() => {
  setHoveredImage(newImage);
  setIsImageChanging(false);
  isTransitioningRef.current = false;
}, 600); // must match opacity duration

  };

  const handleNavClick = (linkName) => {
    setActiveLink(linkName);
    setOpen(false);

    // Smooth scroll to sections
    if (linkName === "HOME") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const sectionId = linkName.toLowerCase().replace(" ", "-");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleMenu = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
      setProjectsOpen(false);
    }
    setTimeout(() => setIsAnimating(false), 600);
  };

  const toggleProjects = () => {
    setProjectsOpen(!projectsOpen);
  };

  const handleMouseEnterProjects = () => {
    setProjectsOpen(true);
    changeImage(menuImages.PROJECTS);
  };

  const handleMouseLeaveProjects = () => {
    // Don't auto-close projects on mouse leave for better UX
    // setProjectsOpen(false);
  };

  const handleProjectHover = (projectItem) => {
    changeImage(projectItem.navImg || menuImages.PROJECTS);
  };

  const handleLinkHover = (link) => {
    if (link !== "PROJECTS") {
      changeImage(menuImages[link]);
    }
  };

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
      <aside
        className={`side-menu ${open ? "show" : ""} ${
          isFirstOpen ? "first-open" : ""
        }`}
      >
        {/* LEFT IMAGE PANEL */}
        <div className="side-menu-left">
          <div className="image-container">
            {/* Current image */}
            <img
              src={hoveredImage}
              alt=""
              className={`menu-img active ${isImageChanging ? "fade-out" : ""}`}
            />

            {/* Next image */}
            <img
              src={nextImage}
              alt=""
              className={`menu-img next ${isImageChanging ? "fade-in" : ""}`}
            />

            <div className="image-overlay" />
          </div>
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
                    <div
                      className="menu-dropdown-head"
                      onClick={toggleProjects}
                    >
                      <span className={activeLink === link ? "active" : ""}>
                        {link}
                      </span>
                      <span
                        className={`caret fs-2 px-5 ${
                          projectsOpen ? "open" : ""
                        }`}
                      >
                        ^
                      </span>
                    </div>

                    <div
                      className={`projects-panel     flex-wrap h-100 ${
                        projectsOpen ? "show" : ""
                      }`}
                    >
                      {projects.map((item) => (
                        <div key={item.title} className="col-lg-3 d-flex">
                          <div
                            className="project-card d-flex flex-column justify-content-between p-3 w-100 h-100"
                            onMouseEnter={() => handleProjectHover(item)}
                            onClick={() => handleNavClick("PROJECTS")}
                          >
                            <img
                              src={item.img}
                              alt={item.title}
                              className="project-img"
                            />

                            <div className="project-title">
                              {item.title}
                              <span className="arrow">→</span>
                            </div>
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
                  className={activeLink === link ? "active" : ""}
                  onMouseEnter={() => handleLinkHover(link)}
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
