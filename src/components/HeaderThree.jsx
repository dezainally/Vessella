import { useEffect, useState } from "react";
import "../styles/HeaderThree.css";

import HeaderLogo from "../assets/images/logo/blue-v-logo.png";

export default function HeaderThree() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        // <div className="p-3">
            <header
                className={`header fixed-top d-flex align-items-center justify-content-between px-4 px-lg-5
        ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}
            >
                {/* LOGO */}
                <div className="logo-wrapper">
                    <img src={HeaderLogo} alt="Vessella Group" />
                </div>

                {/* MENU */}
                <div
                    className={`menu-btn ${open ? "open" : ""}`}
                    onClick={() => setOpen(!open)}
                    role="button"
                >
                    <div className="menu-text">MENU</div>

                    <div className="menu-icon-three">
                        <i />
                        <i />
                        <i />
                    </div>
                </div>
            </header>
        // </div>

    );
}
