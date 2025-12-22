import { useEffect, useState } from "react";
import "../styles/HeaderTwo.css";
import vessellaLogo from "../assets/images/logo/vessella-logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="header">
      <div className={`header-inner ${scrolled ? "scrolled" : ""}`}>
        {/* LOGO */}
        <div className="logo">
          <img
            src={scrolled ? "/vessella-logo.png" : "/logo-gray.png"}
            alt="Logo"
          />
        </div>

        {/* DESKTOP NAV */}
        <nav className="nav desktop-nav">
          <a className="active" href="/">
            HOME
          </a>
          <a href="https://vessella.com/why-us/">WHY US</a>
          <a href="https://vessella.com/profile/">PROFILE</a>
          <a href="https://vessella.com/projects/">PROJECTS</a>
          <a href="https://vessella.com/contact/">CONTACT US</a>
        </nav>

        {/* RIGHT */}
        <div className="right">
          <a
            href="https://vessella.com/contact/"
            className="contact desktop-only"
          >
            CONTACT
          </a>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {/* CLOSE BUTTON */}

        <div className="logo">
          <img
            src={vessellaLogo}
            alt="Logo"
          />
        </div>
        <button
          className="mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <a href="/" onClick={() => setMenuOpen(false)}>
          HOME
        </a>
        <a
          href="https://vessella.com/why-us/"
          onClick={() => setMenuOpen(false)}
        >
          WHY US
        </a>
        <a
          href="https://vessella.com/profile/"
          onClick={() => setMenuOpen(false)}
        >
          PROFILE
        </a>
        <a
          href="https://vessella.com/projects/"
          onClick={() => setMenuOpen(false)}
        >
          PROJECTS
        </a>
        <a
          href="https://vessella.com/contact/"
          onClick={() => setMenuOpen(false)}
        >
          CONTACT US
        </a>
      </div>
    </header>
  );
}
