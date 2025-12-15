


import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Home from "./pages/Home";
import Serene from "./pages/Serene"
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/MegaFooter";
import "./styles/style.css";

function App() {
  const [hideIntro, setHideIntro] = useState(false);
  const [removeIntro, setRemoveIntro] = useState(false);

  useEffect(() => {
    // ✅ Always start from top & show intro on reload
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    const handleScroll = () => {
      if (window.scrollY > 50 && !hideIntro) {
        // ✅ Start fade-out when user scrolls 50px
        setHideIntro(true);
        document.body.style.overflow = "hidden";

        setTimeout(() => {
          setRemoveIntro(true);
          document.body.style.overflow = "auto";
          window.scrollTo({ top: 0, behavior: "instant" });
        }, 1200);
      }
    };

    // ✅ Delay adding listener until intro mounted
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
      window.addEventListener("scroll", handleScroll);
    }, 300);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hideIntro]);

  // 🔹 Function to manually trigger the fade-out (for scroll icon)
  const handleIntroExit = () => {
    if (!hideIntro) {
      setHideIntro(true);
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        setRemoveIntro(true);
        document.body.style.overflow = "auto";
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 1200);
    }
  };

return (
  <BrowserRouter>
    {/* === Intro Animation === */}
    {!removeIntro && (
      <Intro hideIntro={hideIntro} onExitIntro={handleIntroExit} />
    )}

    {/* === Show header only after intro removed === */}
    {removeIntro && <Header />}

    {/* === Main Site === */}
    <div className={`main-content ${removeIntro ? "show" : "hidden"}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/serene" element={<Serene />} />
      </Routes>
    </div>

    <ScrollToTop />
    <Footer />
  </BrowserRouter>
);

}

export default App;
