import React from "react";
import ProjectNew from "../components/ProjectNew";


export default function ProjectUspage() {
    return (
        <>
    
           <section className="about-hero container-fluid py-5">
                <div className="container h-100 py-5 px-lg-0">
                    <div className="about-content py-5 row h-100">
                        <div className="col-lg-7 px-lg-0  d-flex flex-column left-side">
                            <h1 className="display-3">
                                We build our projects <br />
                                <span>with your dreams and ideas</span>
                            </h1>


                            {/* <button className="about-btn">Explore</button> */}

                        </div>

                        <div className="col-lg-5 px-lg-0 d-flex justify-content-end flex-column right-side">
                            <p className="about-subtext pertili-font">
                                The Vessella Group stands a level above with a strong foundation and wealth of experience in building homes. <span>we like to think of ourselves as ‘fine home connoisseurs’ delivering innovative, premium experiences to residents looking for a touch of class and calm in their living spaces.
                                </span>
                            </p>
                        </div>


                    </div>
                </div>

                <button
                    className="explore-btn"
                    onClick={() =>
                        document
                            .getElementById("about-section")
                            .scrollIntoView({ behavior: "smooth" })
                    }
                >
                    <span className="explore-arrows">
                        <svg viewBox="0 0 4 8">
                            <path d="M2.86 0.89L1.15 3.89L2.86 6.9" />
                        </svg>
                        <svg viewBox="0 0 4 8">
                            <path d="M2.86 0.89L1.15 3.89L2.86 6.9" />
                        </svg>
                        <svg viewBox="0 0 4 8">
                            <path d="M2.86 0.89L1.15 3.89L2.86 6.9" />
                        </svg>
                    </span>

                    <span className="explore-text geist-font">EXPLORE</span>
                </button>
                <div className="hero-blue-overlay" />



            
            </section>

        
                <ProjectNew />


</>

    );
}
