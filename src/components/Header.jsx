import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ChevronDown, ChevronRight, Menu, X, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import logo from '../assets/Original.png';
import { useNavigate } from 'react-router';
import { useGetCategoryQuery } from '../redux/api';

// MUI imports for mobile drawer
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import headerImage from '../assets/bread-contact.webp';
import './Header.css'

// ─── Desktop mega-dropdown content: left promo card + right link columns ──
// (UNCHANGED — still used by "Why Us", "Insights", and any future menu)
const MegaDropdownContent = ({ menu, handlePanelLinkClick }) => {
    return (
        <div className="mega-layout">

            <aside className="dropdown-left-card">
                <div className="dropdown-left-inner">

                    <div className="dropdown-left-image-wrapper">
                        <img
                            src={headerImage}
                            alt={menu.title}
                        />
                    </div>

                    <div className="dropdown-left-content">
                        <h3>{menu.title}</h3>

                        <p>
                            Discover our {menu.title.toLowerCase()} and explore how
                            we help organizations achieve measurable business value.
                        </p>
                    </div>

                </div>
            </aside>

            <section className="dropdown-main">
                <div className="dropdown-header">
                    <h2>
                        {menu.title}
                        <ArrowUpRight size={20} className="dropdown-title-icon" />
                    </h2>
                </div>

                <div className="dropdown-columns">
                    {menu.groups.map((group) => (
                        <div className="dropdown-column" key={group.heading}>
                            <h3>{group.heading}</h3>
                            <div className="dropdown-links">
                                {group.items.map((item) => (
                                    <button
                                        key={item.path}
                                        className="dropdown-link"
                                        onClick={() => handlePanelLinkClick(item.path)}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

// ─── NEW: "What We Do" exclusive mega-dropdown layout ──────────────────────
// Left: same promo card (image + title + description) — reuses the shared
// .dropdown-left-card styling so it stays visually consistent with the
// other menus.
// Right: a two-pane hover system.
//   - Middle pane lists menu.groups (category headings) as a vertical nav.
//   - Right pane shows the items of whichever group is currently
//     hovered/focused — updates live, exactly like the reference video.
// Still built entirely off menu.groups (same data shape used everywhere
// else), so no change to the API/Redux data structure is required, and the
// layout adapts automatically if categories or items increase.
const WhatWeDoDropdownContent = ({ menu, handlePanelLinkClick }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeGroup = menu.groups[activeIndex] || null;

    return (
        <div className="mega-layout what-we-do-layout">

            <aside className="dropdown-left-card">
                <div className="dropdown-left-inner">

                    <div className="dropdown-left-image-wrapper">
                        <img
                            src={headerImage}
                            alt={menu.title}
                        />
                    </div>

                    <div className="dropdown-left-content">
                        <h3>Tailored Solutions</h3>
                        <p>
                            Let's Make Ideas Happen - Your Journey to
                            Excellence Begins with our Digital Transformation Solutions!
                        </p>
                    </div>

                </div>
            </aside>

            <section className="dropdown-main what-we-do-main">
                <div className="what-we-do-panes">

                    {/* Middle pane — category list, hover to switch active group */}
                    <div className="what-we-do-nav-col">
                        {menu.groups.map((group, idx) => {
                            const hasItems = group.items && group.items.length > 0;
                            const isActive = idx === activeIndex;
                            return (
                                <button
                                    key={group.heading}
                                    className={`what-we-do-nav-item ${isActive ? 'active' : ''}`}
                                    onMouseEnter={() => setActiveIndex(idx)}
                                    onFocus={() => setActiveIndex(idx)}
                                    onClick={() => setActiveIndex(idx)}
                                >
                                    <span>{group.heading}</span>
                                    {hasItems && (
                                        <ChevronRight size={16} className="what-we-do-nav-chevron" />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Right pane — items belonging to the active group */}
                    <div className="what-we-do-content-col">
                        {activeGroup?.items?.map((item) => (
                            <button
                                key={item.path}
                                className="what-we-do-content-link"
                                onClick={() => handlePanelLinkClick(item.path)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                </div>
            </section>

        </div>
    );
};

// ─── Main Navbar ─────────────────────────────────────────────────────────────
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const dropdownTimerRef = useRef(null);
    const navbarRef = useRef(null);

    const navigate = useNavigate();

    const { data } = useGetCategoryQuery();

    const menuData = useMemo(() => [

        {
            title: "What We Do",
            hasDropdown: true,
            groups:
                data?.data?.map((category) => ({
                    heading: category.name,
                    items:
                        category.items?.map((item) => ({
                            label: item.label,
                            path:
                                category.slug === "industry-solutions"
                                    ? `/industries/${item.slug}`
                                    : category.slug === "platforms"
                                        ? `/platforms/${item.slug}`
                                        : category.slug === "services"
                                            ? `/services/${item.slug}`
                                            : `/${item.slug}`,
                        }))
                })) || []
        },
        {
            title: "Case study",
            path: "/About",
            hasDropdown: false
        },

        {
            title: "Why Us",
            hasDropdown: true,
            groups: [
                {
                    heading: "Get Started",
                    items: [
                        { label: "Onboarding Guide", path: "/why-us/onboarding-guide" },
                        { label: "Open A Ticket", path: "/why-us/open-a-ticket" },
                        { label: "Our Approach", path: "/why-us/our-approach" },
                        { label: "FAQs", path: "/why-us/faq" },
                    ],
                },
                {
                    heading: "Company",
                    items: [
                        { label: "About Us", path: "/About" },
                        { label: "Team", path: "/why-us/team" },
                        { label: "Partners", path: "/why-us/partners" },
                        { label: "Locations", path: "/why-us/locations" },
                        { label: "Careers", path: "/why-us/careers" },
                    ],
                },
                {
                    heading: "Legal",
                    items: [
                        { label: "Privacy Policy", path: "/why-us/privacy-policy" },
                        { label: "Return Policy", path: "/why-us/return-policy" },
                        { label: "Terms of Service", path: "/why-us/terms-of-service" },
                    ],
                },
            ],
        },

        {
            title: "Insights",
            hasDropdown: true,
            groups: [
                {
                    heading: "Resources",
                    items: [
                        { label: "Blog", path: "/blog" },
                        { label: "Guides", path: "/resources/guides" },
                        { label: "Checklists", path: "/resources/checklists" },
                        { label: "Whitepaper", path: "/resources/whitepapers" },
                        { label: "Infographic", path: "/resources/infographics" },
                    ],
                },
                {
                    heading: "Events",
                    items: [
                        { label: "Events", path: "/resources/events" },
                    ],
                },
            ],
        },
        {
            title: "Contact Us",
            path: "/Contact",
            hasDropdown: false
        }
    ], [data]);

    const closeDropdown = () => setActiveDropdown(null);

    const handleNavItemClick = (menu) => {
        if (menu.hasDropdown) return;

        navigate(
            menu.path || `/${menu.title.toLowerCase().replace(/\s+/g, "-")}`
        );

        closeDropdown();
        setIsMobileMenuOpen(false);
    };

    const handlePanelLinkClick = (path) => {
        navigate(`/${path}`);
        closeDropdown();
        setIsMobileMenuOpen(false);
    };

    const handleLogoClick = () => {
        navigate('/');
        closeDropdown();
        setIsMobileMenuOpen(false);
    };

    // Lock page scroll while the mobile drawer or a mega-dropdown is open.
    useEffect(() => {
        const shouldLock = isMobileMenuOpen || activeDropdown !== null;
        document.body.style.overflow = shouldLock ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMobileMenuOpen, activeDropdown]);

    useEffect(() => {
        const DESKTOP_BREAKPOINT = 1024;
        const handleResize = () => {
            if (window.innerWidth > DESKTOP_BREAKPOINT) {
                setIsMobileMenuOpen(false);
                setActiveMobileSubmenu(null);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close the dropdown on outside click (touch devices / clicking away).
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (navbarRef.current && !navbarRef.current.contains(e.target)) {
                closeDropdown();
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    useEffect(() => {
        gsap.to(".btn-contact", {
            scale: 1.05,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        gsap.set(".navbar-container", { y: -100 });
        gsap.to(".navbar-container", {
            y: 0,
            duration: 1,
            ease: "power4.out",
            onComplete: () => gsap.set(".navbar-container", { clearProps: "transform" }),
        });
    }, []);

    // ─── Hover-only open/close (no click-to-toggle) ──────────────────────
    const handleDropdownEnter = (index) => {
        if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
        setActiveDropdown(index);
    };

    const handleDropdownLeave = () => {
        dropdownTimerRef.current = setTimeout(closeDropdown, 80);
    };

    const handleDropdownStay = () => {
        if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    };

    const toggleMobileSubmenu = (index) => {
        setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setActiveMobileSubmenu(null);
    };

    const mobileListVariants = {
        open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
        closed: {}
    };

    const mobileItemVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: 24 }
    };

    return (
        <nav className="navbar-container" ref={navbarRef}>
            <div className="navbar">
                {/* Logo */}
                <div onClick={handleLogoClick} className="nav-logo">
                    <img src={logo} alt='logo' />
                </div>

                {/* Desktop Nav */}
                <ul className="nav-menu">
                    {menuData.map((menu, idx) => (
                        <li
                            key={idx}
                            className={`nav-item ${activeDropdown === idx ? "active" : ""}`}
                            onMouseEnter={() => {
                                if (!menu.hasDropdown) return;
                                handleDropdownEnter(idx);
                            }}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <span
                                className="nav-links"
                                onClick={() => handleNavItemClick(menu)}
                            >
                                {menu.title}
                                {menu.hasDropdown && (
                                    <ChevronDown
                                        size={16}
                                        className="chevron-icon"
                                        style={{
                                            transform: activeDropdown === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)'
                                        }}
                                    />
                                )}
                                {menu.hasDropdown && <span className="nav-indicator"></span>}
                            </span>

                            {menu.hasDropdown && (
                                <AnimatePresence>
                                    {activeDropdown === idx && (
                                        <motion.div
                                            className="mega-dropdown"
                                            initial={{ opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' }}
                                            animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
                                            exit={{ opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' }}
                                            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                                            onMouseEnter={handleDropdownStay}
                                            onMouseLeave={handleDropdownLeave}
                                        >
                                            {/* Hover bridge */}
                                            <div className="mega-dropdown-bridge" />

                                            <div className="mega-dropdown-content">
                                                <div className="mega-dropdown-wrapper">
                                                    {menu.title === "What We Do" ? (
                                                        <WhatWeDoDropdownContent
                                                            menu={menu}
                                                            handlePanelLinkClick={handlePanelLinkClick}
                                                        />
                                                    ) : (
                                                        <MegaDropdownContent
                                                            menu={menu}
                                                            handlePanelLinkClick={handlePanelLinkClick}
                                                        />
                                                    )}
                                                </div>
                                            </div>

                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="nav-actions">
                    <button
                        className="btn-contact"
                        onClick={() => { closeDropdown(); navigate('/contact'); }}
                    >
                        Contact Us
                    </button>
                    <button
                        className="menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* ─────────────── Mobile Menu — App-style drawer ─────────────── */}
            <Drawer
                anchor="right"
                open={isMobileMenuOpen}
                onClose={closeMobileMenu}
                ModalProps={{ keepMounted: true }}

            >
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }} role="presentation">

                    {/* Header */}
                    <div className="mobile-menu-header">
                        <img src={logo} alt="logo" />
                        <button
                            className="mobile-menu-close"
                            onClick={closeMobileMenu}
                            aria-label="Close menu"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Scrollable nav list */}
                    <motion.div
                        className="mobile-menu-body"
                        initial="closed"
                        animate={isMobileMenuOpen ? "open" : "closed"}
                        variants={mobileListVariants}
                    >
                        {menuData.map((menu, idx) => (
                            <motion.div
                                key={idx}
                                className="mobile-nav-item"
                                variants={mobileItemVariants}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                            >
                                {menu.hasDropdown ? (
                                    <>
                                        <button
                                            className="mobile-nav-link"
                                            onClick={() => toggleMobileSubmenu(idx)}
                                        >
                                            <span className="mobile-nav-icon-wrap">
                                                <Menu size={18} />
                                            </span>
                                            <span className="mobile-nav-link-text">{menu.title}</span>
                                            <ChevronDown
                                                size={20}
                                                className="chevron-icon"
                                                style={{
                                                    transform: activeMobileSubmenu === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                                                }}
                                            />
                                        </button>
                                        <AnimatePresence initial={false}>
                                            {activeMobileSubmenu === idx && (
                                                <motion.div
                                                    className="mobile-submenu"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                >
                                                    {menu.groups.map((group, gIdx) => (
                                                        <div key={gIdx}>
                                                            <div className="mobile-sub-title">{group.heading}</div>
                                                            {group.items.map((item, iIdx) => (
                                                                <a
                                                                    key={iIdx}
                                                                    href={`/${item?.label}`}
                                                                    onClick={(e) => { e.preventDefault(); handlePanelLinkClick(item?.path); }}
                                                                >
                                                                    {item?.label}
                                                                    <ArrowRight size={14} />
                                                                </a>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </>
                                ) : (
                                    <a
                                        href={`/${menu.title.toLowerCase()}`}
                                        className="mobile-nav-link"
                                        onClick={(e) => { e.preventDefault(); handleNavItemClick(menu, e); }}
                                    >
                                        <span className="mobile-nav-icon-wrap">
                                            <ArrowRight size={18} />
                                        </span>
                                        <span className="mobile-nav-link-text">{menu.title}</span>
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Sticky footer CTA */}
                    <div className="mobile-menu-footer">
                        <button
                            className="mobile-cta"
                            onClick={() => { navigate('/Contact'); closeMobileMenu(); }}
                        >
                            Contact Us <ArrowRight size={18} />
                        </button>
                    </div>
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;