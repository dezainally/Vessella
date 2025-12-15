import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import "../styles/ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;

      setProgress(scrollProgress);
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll-btn ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <svg
        className="progress-circle"
        width="56"
        height="56"
        viewBox="0 0 56 56"
      >
        <circle className="bg" cx="28" cy="28" r="24" />
        <circle
          className="progress"
          cx="28"
          cy="28"
          r="24"
          style={{ strokeDashoffset: `calc(150.72 - (150.72 * ${progress}) / 100)` }}
        />
      </svg>

      <ArrowUp className="icon" size={22} />
    </div>
  );
};

export default ScrollToTop;
