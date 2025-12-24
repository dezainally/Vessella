import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { motion } from "framer-motion";
import "../styles/style.css";
import Header from "../components/Header";
import Hero from "../components/HeroThree";
import HomeBanner from "../components/HomeBanner";
import AboutUs from "../components/About-2";
import About from "../components/About";
import AboutTwo from "../components/HeroSection";
import Stats from "../components/StatsSection";
import Form from "../components/Form";
import Form2 from "../components/MatchForm";
import Projects from "../components/ProjectNew";
import ProjectsTwo from "../components/ProjectSectionTwo";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactInquirySection";
import TestimonialsSection from "../components/TestimonialsSection";
import Map from "../components/MapPins";


function Home() {
    return (
        <section id="home">
            <Hero />
            <AboutTwo />
            <Projects />
            <ContactSection />
        </section>
    );
}

export default Home;
