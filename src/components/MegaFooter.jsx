import "../styles/MegaFooter.css";

const menuLinks = [
    "Our Story",
    "Our Projects",
    "Blogs",
    "Media",
    "Events",
    "Careers",
    "Enquire",
    "Partner With Us",
];

export default function MegaFooter() {
    return (
        <footer className="mega-footer container-fluid">
            <div className="container">
                <div className="footer-content row">
                    {/* Left Menu */}
                    <div className="footer-brand col-lg-6">
                        <h1>
                            ASBL<span>®</span>
                        </h1>

                        <div className="socials">
                            <a href="#">f</a>
                            <a href="#">◎</a>
                            <a href="#">in</a>
                            <a href="#">▶</a>
                            <a href="#">✕</a>
                        </div>
                    </div>

                    {/* Right Branding */}

                    <div className="col-lg-6">
                        <ul className="footer-menu">
                            {menuLinks.map((item, index) => (
                                <li key={index}>
                                    <a href="#">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <span>© ASBL ALL RIGHTS RESERVED</span>

                    <div className="legal-links">
                        <a href="#">Cookies & Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Refunds / Cancellations</a>
                    </div>
                </div>
            </div>

        </footer>
    );
}
