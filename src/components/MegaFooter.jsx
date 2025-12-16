import "../styles/MegaFooter.css";
import FooterLogo from "../assets/images/logo/footer-logo.png";
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
    "Home",
    "Our Story",
    "Our Team",
    "Contact Us",
];

const projects = [
    "Serene",
    "Palms",
    "Meadows",
    "Woods",
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
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedinIn /></a>
                            <a href="#"><FaYoutube /></a>
                            <a href="#"><FaXTwitter /></a>
                        </div>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div className="col-lg-2 col-md-6 footer-col">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-menu">
                            {quickLinks.map((item, index) => (
                                <li key={index}>
                                    <a href="#">{item}</a>
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
                                    <a href="#">{item}</a>
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
                                <a href="tel:+919999999999">Head Office: <br />	040 23014498 / 99</a>
                                
                            </p>
                            <p>
                                <FaPhone />
                                <a href="tel:+919999999999">Marketing Ph: <br />	9121244421 / 03</a>
                                
                            </p>
                            <p>
                                <FaPhone />
                                <a href="tel:+919999999999">Fax: <br />040 23014497</a>
                                
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
