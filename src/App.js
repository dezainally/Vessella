import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/HeaderThree";
import IntroOverlay from "./components/IntroOverlay";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutUsPage";
import Serene from "./pages/Serene";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer3";
import ProjectUspage from "./pages/ProjectUspage";


import "./styles/style.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <BrowserRouter>
      {showIntro && (
        <IntroOverlay onFinish={() => setShowIntro(false)} />
      )}

      {!showIntro && (
        <>
                  <ScrollToTop />

          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/serene" element={<Serene />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectUspage />} />
          </Routes>

          <ScrollToTop />
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}


export default App;
