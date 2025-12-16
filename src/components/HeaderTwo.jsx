import { useEffect, useState } from "react";
import "../styles/HeaderTwo.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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

        {/* NAV */}
        <nav className="nav">
          <a className="active" href="/">HOME</a>
          <a href="https://vessella.com/why-us/">WHY US</a>
          <a href="https://vessella.com/profile/">PROFIILE</a>
          <a href="https://vessella.com/projects/">PROJECTS</a>
          <a href="https://vessella.com/contact/">CONTACT US</a>
        </nav>

        {/* RIGHT */}
        <div className="right">
          <a href="https://vessella.com/contact/" className="contact">CONTACT</a>
          <button className="menu-btn">☰</button>
        </div>
      </div>
    </header>
  );
}
