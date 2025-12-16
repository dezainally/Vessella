import "../styles/MegaFooter.css";
import FooterLogo from "../assets/images/logo/footer-logo.png";
import { Link } from "react-router-dom";

import {
    FaPhone,
    FaEnvelope,
    FaLocationDot,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaXTwitter,
} from "react-icons/fa6";

const quickLinks = [
    { label: "Home", link: "/" },
    { label: "Why Us", link: "https://vessella.com/why-us/" },
    { label: "Profile", link: "https://vessella.com/profile/" },
    { label: "Projects", link: "https://vessella.com/projects/" },
    { label: "Contact", link: "https://vessella.com/contact/" },
];

const projects = [
    { label: "Serene", link: "/" },
    { label: "Palms", link: "/" },
    { label: "Woods", link: "https://vessella.com/project/vessella-woods/" },
    { label: "Meadows", link: "https://vessella.com/project/vessella-woods/" },
    { label: "Villas", link: "https://vessella.com/project/vessella-villas/" },
];


export default function MegaFooter() {
    return (
        <footer className="mega-footer">
            <div className="container">
                <div className="row footer-grid justify-content-between">

                    {/* Column 1 - Logo */}
                    <div className="col-lg-3 col-md-6 footer-col">
                        <img
                            src={FooterLogo}
                            alt="Vessella Logo"
                            className="footer-logo"
                        />

                        <div className="socials">
                            <a href="https://facebook.com/vessella" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                            <a href="https://instagram.com/vessella" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com/company/vessella" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://youtube.com/@vessella" target="_blank" rel="noopener noreferrer">
                                <FaYoutube />
                            </a>
                            <a href="https://x.com/vessella" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter />
                            </a>
                        </div>

                    </div>

                    {/* Column 2 - Quick Links */}
                    <div className="col-lg-2 col-md-6 footer-col">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-menu">
                            {quickLinks.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* Column 3 - Projects */}
                    <div className="col-lg-2 col-md-6 footer-col">
                        <h4 className="footer-title">Our Projects</h4>
                        <ul className="footer-menu">
                            {projects.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* Column 4 - Enquiry */}
                    <div className="col-lg-2 col-md-6 footer-col">
                        <h4 className="footer-title">Enquiry Now</h4>

                        <div className="footer-contact">
                            <p>
                                <FaPhone />
                                <a href="tel:040 23014498 ">Head Office: <br />	040 23014498 / 99</a>

                            </p>
                            <p>
                                <FaPhone />
                                <a href="tel:9121244421">Marketing Ph: <br />	9121244421 / 03</a>

                            </p>
                            <p>
                                <FaPhone />
                                <a href="tel:040 23014497">Fax: <br />040 23014497</a>

                            </p>

                            <p>
                                <FaEnvelope />
                                <a href="mailto:info@vessella.com">Email:<br />	info@vessella.in</a>
                            </p>

                            {/* <p>
                                <FaLocationDot />
                                <span>
                                    123, Business Park,<br />
                                    Mumbai, Maharashtra
                                </span>
                            </p> */}
                        </div>

                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <span>© VESSELLA. All Rights Reserved</span>

                    <div className="legal-links">
                        <a className="text-decoration-none" href="#">Privacy Policy</a>
                        <a className="text-decoration-none" href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
