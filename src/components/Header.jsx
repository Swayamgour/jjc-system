import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Icons, megaMenus } from "../utils/data";

export default function Header() {
    const [openMenu, setOpenMenu] = useState(null);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        "Microsoft Services",
        "Solutions",
        "Industries",
        "Case Studies",
        "Insights",
        "Company",
    ];

    return (
        <motion.header
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`header ${scrolled ? "header-scrolled" : ""}`}
            onMouseLeave={() => setOpenMenu(null)}
        >
            <div className="header-container">

                {/* Logo */}
                <div className="header-logo">
                    {/* <Icons.Logo />

                    <div>
                        <div className="header-logo-title">
                            JJC
                        </div>

                        <div className="header-logo-subtitle">
                            SYSTEMS
                        </div>
                    </div> */}.

                    <img src='https://jjcsystems.com/wp-content/uploads/2024/07/jjc-systems-logo-mobile.png' alt="jjc system logo" />
                </div>

                {/* Desktop Menu */}
                <div className="right-section">

                    <nav className="header-nav">

                        {navItems.map((item) => {

                            const hasMega = megaMenus[item];

                            return (
                                <div
                                    key={item}
                                    className="nav-item-wrapper"
                                    onMouseEnter={() =>
                                        hasMega
                                            ? setOpenMenu(item)
                                            : setOpenMenu(null)
                                    }
                                >
                                    <button
                                        className={`nav-item ${openMenu === item
                                            ? "nav-item-active"
                                            : ""
                                            }`}
                                    >
                                        {item}

                                        {hasMega && (
                                            <Icons.ChevronDown />
                                        )}
                                    </button>

                                    <AnimatePresence>

                                        {openMenu === item &&
                                            hasMega && (

                                                <motion.div
                                                    className="mega-menu"

                                                >

                                                    {megaMenus[item].map(
                                                        (menu) => (
                                                            <div
                                                                key={
                                                                    menu.label
                                                                }
                                                                className="mega-menu-item"
                                                            >
                                                                {/* <div className="mega-icon">
                                                                    🚀
                                                                </div> */}

                                                                <div>
                                                                    <div className="mega-menu-title">
                                                                        {
                                                                            menu.label
                                                                        }
                                                                    </div>

                                                                    <div className="mega-menu-subtitle">
                                                                        {
                                                                            menu.sub
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </motion.div>
                                            )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </nav>

                    <button className="header-btn">
                        Contact Us
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() =>
                        setMobileMenu(!mobileMenu)
                    }
                >
                    {mobileMenu ? (
                        <HiX size={28} />
                    ) : (
                        <HiMenuAlt3 size={28} />
                    )}
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>

                {mobileMenu && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                            duration: 0.35,
                        }}
                    >
                        {navItems.map((item) => (
                            <div
                                key={item}
                                className="mobile-item"
                            >
                                {item}
                            </div>
                        ))}

                        <button className="mobile-btn">
                            Contact Us
                        </button>
                    </motion.div>
                )}

            </AnimatePresence>
        </motion.header>
    );
}