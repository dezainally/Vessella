import React, { useEffect, useRef } from "react";
import "../styles/HeroBanner.css";
import SereneAboutImg from "../assets/serene-images/serene-logo.png";

export default function AboutSerene() {

    return (
        <section className="about-serene d-none">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <img className="img-fluid" src={SereneAboutImg} alt="" />
                        </div>
                        <div className="col-lg-6">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
