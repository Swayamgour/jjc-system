import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { cols, Icons } from '../utils/data';
import { useInView, motion } from 'framer-motion';
import { LiaLinkedin } from 'react-icons/lia';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/logo.png'
import { ArrowUp } from 'lucide-react';
// import { ContactFormSection } from './SectionRenderers';
// import BasePage from "../components/BasePage";
import { contactUsData } from "../utils/servicesData";
import '../pages/ServicePage.css'
import { useLocation } from "react-router-dom";
import ContactNewFrom from '../pages/ContactNewForm'


function Footer() {

    const [showBackToTop, setShowBackToTop] = useState(false);

    const location = useLocation();
    // console.log();


    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const themeVars = {
        "--svc-accent": "#2563EB",
        "--svc-accent-dark": "#1D4ED8",
        "--svc-accent-light": "#4F8CFF",
        "--svc-accent-soft": "rgba(37,99,235,0.08)",
        "--svc-hero-start": "#03153c",
        "--svc-hero-end": "#0c5de8",
        "--accent-rgb": "37,99,235",
    };




    return (
        <>
            {location.pathname !== '/Contact' && <ContactNewFrom s={contactUsData?.contactForm} />}
            {showBackToTop && (
                <button
                    className="legal-back-to-top"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    aria-label="Back to top"
                >
                    <ArrowUp size={20} />
                </button>
            )}
            <footer className="footer">
                <div className="container footer-container">

                    <div className="footer-grid">

                        {/* Brand */}

                        <div className="footer-brand">

                            <div className="footer-logo">

                                {/* <div className="footer-logo-icon">
                                <span>JJC</span>
                            </div>

                            <div className="footer-logo-text">
                                JJC SYSTEMS
                            </div> */}

                                <div>
                                    <img src={logo} alt='logo' />
                                </div>

                            </div>

                            <p className="footer-description">
                                JJC Systems is a trusted Microsoft solutions partner helping
                                organizations modernize, innovate and grow with Microsoft technologies.
                            </p>

                            <div className="footer-socials">
                                {[<FaLinkedinIn />, <FaFacebookF />, <FaInstagram />].map((item, index) => (
                                    <div
                                        key={index}
                                        className="footer-social"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Footer Links */}

                        {cols.map((col, index) => (
                            <div
                                key={index}
                                className="footer-column"
                            >
                                <h4 className="footer-title">
                                    {col.title}
                                </h4>

                                {col.links.map((link, i) => {
                                    const isPrimary =
                                        typeof link === "string"
                                            ? link.includes("→")
                                            : false;
                                    const label =
                                        typeof link === "string" ? link : link.label;

                                    if (typeof link === "string" || !link.to) {
                                        // external link (or legacy plain-string link)
                                        return (
                                            <a
                                                key={i}
                                                href={link?.href || "#"}
                                                target={link?.external ? "_blank" : undefined}
                                                rel={link?.external ? "noopener noreferrer" : undefined}
                                                className={`footer-link ${isPrimary ? "footer-link-primary" : ""}`}
                                            >
                                                {label}
                                            </a>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={i}
                                            to={link.to}
                                            className="footer-link"
                                        >
                                            {label}
                                        </Link>
                                    );
                                })}
                            </div>
                        ))}

                        {/* Contact */}

                        <div className="footer-contact">

                            <h4 className="footer-title">
                                Contact
                            </h4>

                            {[
                                {
                                    icon: <Icons.Phone />,
                                    text: "(234) 325-0903",
                                },
                                {
                                    icon: <Icons.Mail />,
                                    text: "info@jjcsystems.com",
                                },
                                {
                                    icon: <Icons.MapPin />,
                                    text: "Chicago, IL, USA",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="footer-contact-item"
                                >
                                    <span className="footer-contact-icon">
                                        {item.icon}
                                    </span>

                                    <span>
                                        {item.text}
                                    </span>
                                </div>
                            ))}

                            <button
                                whileHover={{ scale: 1.04 }}
                                className="footer-btn"
                            >
                                Schedule Consultation
                            </button>

                        </div>

                    </div>

                    {/* Bottom */}

                    <div className="footer-bottom">

                        <div className="footer-copyright">
                            © 2026 JJC Systems. All Rights Reserved.
                        </div>

                        <div className="footer-bottom-links">

                            {[
                                { label: "Privacy Policy", to: "/privacy-policy" },
                                { label: "Terms of Use", to: "/terms-of-service" },
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.to}
                                    className="footer-bottom-link"
                                >
                                    {item.label}
                                </Link>
                            ))}

                        </div>

                    </div>

                </div>
            </footer>
        </>
    );
}

export default Footer