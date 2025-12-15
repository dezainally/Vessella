import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/style.css";
import HomeBanner from "../components/HeroSerene";
import About from "../components/About";
import Form2 from "../components/MatchForm";
import ProjectsTwo from "../components/ProjectSectionTwo";
import Testimonials from "../components/Testimonials";
import Map from "../components/MapPins";
import AboutSerene from "../components/AboutSerene";
import GallerySerene from "../components/GallerySerene";


function Home() {


    return (
        <section id="home">
            {/* Header visible only in home */}
            {/* <Header /> */}

            <HomeBanner />
            <AboutSerene />
            <GallerySerene />

            {/* <AboutUs /> */}
            <About />
            {/* <Stats /> */}
            {/* <Projects /> */}
            <ProjectsTwo />
            <Testimonials />
            {/* <TestimonialsSection /> */}
            {/* <Form /> */}
            <Form2 />
            {/* <Map /> */}
            <Map />
        </section>
    );
}

export default Home;
