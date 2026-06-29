import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
// import { , motion } from 'motion/react';
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { menuData } from '../utils/data';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router';

// ─── Animated Nub ───────────────────────────────────────────────────────────
const DropdownNub = ({ activeTab }) => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        const tab = document.getElementById(`sidebar-tab-${activeTab}`);
        const panel = document.getElementById('dropdown-panel');
        if (!tab || !panel) return;

        const tabRect = tab.getBoundingClientRect();
        const panelRect = panel.getBoundingClientRect();

        // Center of tab relative to the panel's left edge
        const center = tabRect.top + tabRect.height / 2 - panelRect.top;
        setLeft(center);
    }, [activeTab]);

    return (
        <motion.span
            animate={{ top: left }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{
                position: 'absolute',
                left: -6,
                width: 12,
                height: 12,
                background: 'var(--bg-white)',
                border: '1px solid var(--border-color)',
                borderRadius: 2,
                transform: 'rotate(45deg)',
                zIndex: 10,
                clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
            }}
        />
    );
};

// ─── Dropdown Content with directional slide ─────────────────────────────────
const MegaDropdownContent = ({ menu, activeTab, setActiveTab, prevTab, handlePanelLinkClick }) => {
    const dir = prevTab < activeTab ? 1 : -1; // 1 = coming from top, -1 = coming from bottom

    return (
        <div className="tabbed-dropdown-container" id="dropdown-panel" style={{ position: 'relative' }}>

            {/* LEFT SIDEBAR */}
            <div className="dropdown-sidebar" style={{ position: 'relative' }}>
                <DropdownNub activeTab={activeTab} />
                {menu.groups.map((group, gIdx) => (
                    <div
                        id={`sidebar-tab-${gIdx}`}
                        key={gIdx}
                        className={`sidebar-tab-item ${activeTab === gIdx ? 'tab-active' : ''}`}
                        onMouseEnter={() => setActiveTab(gIdx)}
                        onClick={() => {
                            if (group.items?.length > 0) {
                                handlePanelLinkClick(group.items[0].path);
                            }
                        }}
                    >
                        <span>{group.heading}</span>
                        <ArrowRight size={16} className="sidebar-arrow" />
                    </div>
                ))}
            </div>

            {/* RIGHT PANEL — directional slide */}
            <div className="dropdown-content-panel" style={{ overflow: 'hidden' }}>
                <AnimatePresence mode="wait" custom={dir}>
                    <motion.div
                        key={activeTab}
                        custom={dir}
                        initial={{ opacity: 0, x: dir * 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: dir * -30 }}
                        transition={{ duration: 0.22, ease: 'easeInOut' }}
                        style={{ width: '100%' }}
                    >
                        <div className="panel-links-grid">
                            {menu.groups[activeTab]?.items.map((item, iIdx) => (
                                <div
                                    key={iIdx}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => handlePanelLinkClick(item?.path)}
                                    className="panel-grid-link"
                                >
                                    <span>{item?.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

// ─── Main Navbar ─────────────────────────────────────────────────────────────
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeTab, setActiveTab] = useState(0);
    const [prevTab, setPrevTab] = useState(0);

    const dropdownTimerRef = useRef(null);
    const navbarRef = useRef(null);
    const logoRef = useRef(null);
    const menuRef = useRef(null);
    const ctaRef = useRef(null);

    const navigate = useNavigate();

    const closeDropdown = () => setActiveDropdown(null);

    const handleNavItemClick = (menu) => {
        if (menu.hasDropdown) {
            if (menu.path) {
                navigate(menu.path);
            }
        } else {
            navigate(menu.path || `/${menu.title.toLowerCase().replace(/\s+/g, "-")}`);
        }

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

    // Tab change — track previous for direction
    const handleTabChange = (gIdx) => {
        setPrevTab(activeTab);
        setActiveTab(gIdx);
    };

    // Prevent body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        gsap.to(".btn-contact", {
            scale: 1.05,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        gsap.set(".navbar-container", { y: -100 });
        gsap.to(".navbar-container", { y: 0, duration: 1, ease: "power4.out" });
    }, []);

    const handleDropdownEnter = (index) => {
        if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
        if (activeDropdown !== index) {
            setPrevTab(0);
            setActiveTab(0);
        }
        setActiveDropdown(index);
    };

    const handleDropdownLeave = () => {
        dropdownTimerRef.current = setTimeout(closeDropdown, 200);
    };

    const handleDropdownStay = () => {
        if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    };

    const toggleMobileSubmenu = (index) => {
        setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index);
    };

    return (
        <nav className="navbar-container" ref={navbarRef}>
            <div className="navbar">
                {/* Logo */}
                <div onClick={handleLogoClick} ref={logoRef} className="nav-logo">
                    <img src={logo} alt='logo' />
                </div>

                {/* Desktop Nav */}
                <ul ref={menuRef} className="nav-menu">
                    {menuData.map((menu, idx) => (
                        <li
                            key={idx}
                            className={`nav-item ${activeDropdown === idx ? 'active' : ''}`}
                            onMouseEnter={() => {
                                if (!menu.hasDropdown) return;
                                handleDropdownEnter(idx);
                            }}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <span
                                className="nav-links"
                                // onClick={(e) => {
                                //     if (!menu.hasDropdown) {
                                //         handleNavItemClick(menu, e, path);
                                //     }


                                // }}

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

                            {/* Mega Dropdown */}
                            {menu.hasDropdown && (
                                <AnimatePresence>
                                    {activeDropdown === idx && (
                                        <motion.div
                                            className="mega-dropdown show"
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 12 }}
                                            transition={{ duration: 0.22, ease: 'easeOut' }}
                                            onMouseEnter={handleDropdownStay}
                                            onMouseLeave={handleDropdownLeave}
                                            // Override the CSS-driven show/hide — motion handles it now
                                            style={{ opacity: 1, visibility: 'visible', pointerEvents: 'auto' }}
                                        >
                                            {/* Bridge gap so mouse doesn't lose hover */}
                                            <div style={{
                                                position: 'absolute',
                                                top: -24,
                                                left: 0,
                                                right: 0,
                                                height: 24
                                            }} />

                                            <MegaDropdownContent
                                                menu={menu}
                                                activeTab={activeTab}
                                                prevTab={prevTab}
                                                setActiveTab={handleTabChange}
                                                handlePanelLinkClick={handlePanelLinkClick}
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div ref={ctaRef} className="nav-actions">
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
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu — unchanged */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
                {menuData.map((menu, idx) => (
                    <div key={idx} className="mobile-nav-item">
                        {menu.hasDropdown ? (
                            <>
                                <button className="mobile-nav-link" onClick={() => toggleMobileSubmenu(idx)}>
                                    {menu.title}
                                    <ChevronDown
                                        size={20}
                                        style={{
                                            transform: activeMobileSubmenu === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.2s'
                                        }}
                                    />
                                </button>
                                <div className={`mobile-submenu ${activeMobileSubmenu === idx ? 'open' : ''}`}>
                                    {menu.groups.map((group, gIdx) => (

                                        <div key={gIdx}>
                                            {console.log(group)}
                                            <div className="mobile-sub-title">{group.heading}</div>
                                            {group.items.map((item, iIdx) => (
                                                <a
                                                    key={iIdx}
                                                    href={`/${item?.label}`}
                                                    onClick={(e) => { e.preventDefault(); handlePanelLinkClick(item?.path); }}
                                                >
                                                    {item?.label}
                                                </a>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <a
                                href={`/${menu.title.toLowerCase()}`}
                                className="mobile-nav-link"
                                onClick={(e) => { e.preventDefault(); handleNavItemClick(menu, e); }}
                            >
                                {menu.title}
                            </a>
                        )}
                    </div>
                ))}
                <button
                    className="mobile-cta"
                    onClick={() => { navigate('/contact'); setIsMobileMenuOpen(false); closeDropdown(); }}
                >
                    Contact Us
                </button>
            </div>
        </nav>
    );
};

export default Navbar;