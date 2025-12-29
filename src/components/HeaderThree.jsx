import { useEffect, useState, useRef } from "react";
import "../styles/HeaderThree.css";
import HeaderLogo from "../assets/images/logo/blue-v-logo.png";
import { motion, AnimatePresence } from "framer-motion";
import SideDecorImage from "../assets/images/v-logo-30.png";
import project from "../assets/images/serene-logo-gray.png";
import PalmsImg from "../assets/images/palms-logo-gray.png";
import MeadowsImg from "../assets/images/meadows-logo-gray.png";
import VillasImg from "../assets/images/villas-logo-gray.png";
import WoodswsImg from "../assets/images/woods-logo-gray.png";
import MokilaImg from "../assets/images/mokila-logo-gray.png";
import KarimnagarImg from "../assets/images/karimnagar-logo-gray.png";

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
  // const [hoveredImage, setHoveredImage] = useState(ImgHome);
  // const [isImageChanging, setIsImageChanging] = useState(false);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  // const [nextImage, setNextImage] = useState(ImgHome);
  // const isTransitioningRef = useRef(false);
  const hasOpenedOnceRef = useRef(false);
  // const [isFirstOpen, setIsFirstOpen] = useState(true);

  const projects = [
    { title: "Serene", img: project, navImg: ImgProject },
    { title: "Palms", img: PalmsImg, navImg: ImgProject },
    { title: "Meadows", img: MeadowsImg, navImg: ImgProject },
    { title: "Woods", img: WoodswsImg, navImg: ImgProject },
    { title: "Villas", img: VillasImg, navImg: ImgProject },
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

  const rightPanelVariant = {
    hidden: {
      x: 120,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 14,   // controls bounce (lower = more bounce)
        mass: 0.9,
      },
    },
    exit: {
      x: 120,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const leftPanelVariant = {
    hidden: {
      y: 120,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      y: 120,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };


  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 500);

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

  // Handle menu animations on first open
  useEffect(() => {
    if (open) {
      // Force reflow to trigger CSS animations
      const leftPanel = document.querySelector(".side-menu-left");
      const rightPanel = document.querySelector(".side-menu-right");

      if (leftPanel && rightPanel && hasOpenedOnceRef.current) {
        // Trigger reflow for smooth animations
        void leftPanel.offsetHeight;
        void rightPanel.offsetHeight;
      }
    }
  }, [open]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  useEffect(() => {
    const images = [ImgHome, ImgAbout, ImgProject, ImgContact];

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Reset hovered image when menu closes

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

  const menuContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const menuItem = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Add this useEffect right after your other useEffects
  useEffect(() => {
    // Preload all images and force GPU rendering
    const preloadImages = () => {
      const allImages = [
        ImgHome, ImgAbout, ImgProject, ImgContact,
        project, PalmsImg, MeadowsImg, VillasImg,
        WoodswsImg, MokilaImg, KarimnagarImg
      ];

      allImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();

    // Force GPU acceleration for smooth animations
    const style = document.createElement('style');
    style.textContent = `
    .side-menu * {
      transform: translateZ(0);
      backface-visibility: hidden;
    }
  `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const toggleMenu = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (!open) {
      // Set open immediately to show the menu
      setOpen(true);
      // Force a reflow to trigger CSS transitions
      setTimeout(() => {
        const leftPanel = document.querySelector(".side-menu-left");
        const rightPanel = document.querySelector(".side-menu-right");
        if (leftPanel && rightPanel) {
          // This triggers the browser to recognize the element for transitions
          void leftPanel.offsetWidth;
          void rightPanel.offsetWidth;
        }
      }, 10);
    } else {
      setOpen(false);
      setProjectsOpen(false);
    }

    setTimeout(() => setIsAnimating(false), 700);
  };

  const toggleProjects = () => {
    setProjectsOpen(!projectsOpen);
  };

  const handleMouseEnterProjects = () => {
    setProjectsOpen(true);
    setActiveLink("PROJECTS");
  };

  const handleMouseLeaveProjects = () => {
    // Don't auto-close projects on mouse leave for better UX
    // setProjectsOpen(false);
  };

  const handleProjectHover = () => {
    setActiveLink("PROJECTS");
  };

  const handleLinkHover = (link) => {
    if (link !== "PROJECTS") {
      setActiveLink(link);
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
            <nav className="header-nav pertili-font">
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
              <span className="menu-text pertili-font">
                {open ? "CLOSE" : "MENU"}
              </span>
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

      <AnimatePresence>
        {open && (
          <aside className={`side-menu ${open ? "show" : ""}`}>
            {/* LEFT IMAGE PANEL */}
            <motion.div
              className="side-menu-left"
              variants={leftPanelVariant}
              initial="hidden"
              animate={open ? "show" : "hidden"}
              exit="exit"
            >
              <div className="image-container">
                {/* Current image */}
                <img
                  src={ImgHome}
                  className={`menu-img ${activeLink === "HOME" ? "active" : ""}`}
                  alt=""
                />
                <img
                  src={ImgAbout}
                  className={`menu-img ${activeLink === "ABOUT US" ? "active" : ""
                    }`}
                  alt=""
                />
                <img
                  src={ImgProject}
                  className={`menu-img ${activeLink === "PROJECTS" ? "active" : ""
                    }`}
                  alt=""
                />
                <img
                  src={ImgContact}
                  className={`menu-img ${activeLink === "CONTACT US" ? "active" : ""
                    }`}
                  alt=""
                />

                <div className="image-overlay" />
              </div>
            </motion.div>

            {/* RIGHT NAV PANEL */}
            <motion.div
              className="side-menu-right"
              variants={rightPanelVariant}
              initial="hidden"
              animate={open ? "show" : "hidden"}
              exit="exit"
            >

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

              <motion.nav
                className="menu-nav pertili-font"
                variants={menuContainer}
                initial="hidden"
                animate={open ? "show" : "hidden"}
              >
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
                            className={`caret fs-2 px-5 ${projectsOpen ? "open" : ""
                              }`}
                          >
                            ^
                          </span>
                        </div>

                        <div
                          className={`projects-panel p-0 flex-wrap h-100 ${projectsOpen ? "show" : ""
                            }`}
                        >
                          {projects.map((item) => (
                            <div key={item.title} className="col-lg-3 d-flex p-2">
                              <div
                                className="project-card position-relative d-flex flex-column justify-content-between p-3 w-100 h-100"
                                onMouseEnter={() => handleProjectHover(item)}
                                onClick={() => handleNavClick("PROJECTS")}
                              >
                                <img
                                  src={item.img}
                                  alt={item.title}
                                  className="project-img"
                                />

                                <div className="arrow-card position-absolute">
                                  <button className="arrow-btn">
                                    <span>↗</span>
                                  </button>
                                </div>

                                <div className="project-title">
                                  {item.title}
                                  {/* <span className="arrow">→</span> */}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* <motion.div
                      className="row g-4 mb-lg-5 pb-lg-5"
                      layout
                    >


                      <AnimatePresence mode="popLayout">
                        {filteredServices.map((service) => (
                          <motion.div
                            key={service.title} 
                            className="col-md-4 text-start"
                            variants={cardVariant}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            layout
                          >
                            <Link to={service.link} className="service-link">
                              <div className="service-card position-relative h-100">
                                <div className="arrow-card position-absolute">
                                  <button className="arrow-btn">
                                    <span>↗</span>
                                  </button>
                                </div>

                                <h3 className="fw-light">{service.title}</h3>
                                <img src={service.image} alt={service.title} />
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </AnimatePresence>

                    </motion.div> */}
                      </div>
                    );
                  }

                  return (
                    <motion.a
                      key={link}
                      variants={menuItem}
                      className={activeLink === link ? "active" : ""}
                      onMouseEnter={() => handleLinkHover(link)}
                      onClick={() => handleNavClick(link)}
                    >
                      {link}
                    </motion.a>
                  );
                })}
              </motion.nav>
            </motion.div>
          </aside>
        )}
      </AnimatePresence>

    </>
  );
}
