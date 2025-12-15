import React from "react";
import { motion } from "framer-motion";
import "../styles/HomeBanner.css";
import bannerVideo from "../assets/images/home-banner-2.mp4"; // 🔹 replace with your actual video path

const HomeBanner = () => {
    return (
        <section className="home-banner position-relative d-flex align-items-center justify-content-start">
            {/* 🔹 Background Video */}
            <video
                className="banner-video"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={bannerVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* 🔹 Black Overlay */}
            <div className="banner-overlay"></div>

            {/* Add your banner text or content here if needed */}
        </section>

    );
};

export default HomeBanner;
