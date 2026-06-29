import React from 'react'
import { cols, Icons } from '../utils/data';
import { useInView, motion } from 'framer-motion';
import { LiaLinkedin } from 'react-icons/lia';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/logo.png'


function Footer() {


    return (
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

                            {col.links.map((link, i) => (
                                <div
                                    key={i}
                                    className={`footer-link ${link.includes("→")
                                        ? "footer-link-primary"
                                        : ""
                                        }`}
                                >
                                    {link}
                                </div>
                            ))}
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

                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            className="footer-btn"
                        >
                            Schedule Consultation
                        </motion.button>

                    </div>

                </div>

                {/* Bottom */}

                <div className="footer-bottom">

                    <div className="footer-copyright">
                        © 2026 JJC Systems. All Rights Reserved.
                    </div>

                    <div className="footer-bottom-links">

                        {["Privacy Policy", "Terms of Use"].map(
                            (item) => (
                                <div
                                    key={item}
                                    className="footer-bottom-link"
                                >
                                    {item}
                                </div>
                            )
                        )}

                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer