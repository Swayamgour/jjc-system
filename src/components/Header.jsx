import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import gsap from "gsap";
import { menuData } from '../utils/data';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeTab, setActiveTab] = useState(0); // Track right side panel slider
    const [isScrolling, setIsScrolling] = useState(false);

    const dropdownTimerRef = useRef(null);
    const navbarRef = useRef(null);
    const logoRef = useRef(null);
    const menuRef = useRef(null);
    const ctaRef = useRef(null);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
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
        gsap.to(".navbar-container", {
            y: 0,
            duration: 1,
            ease: "power4.out"
        });
    }, []);

    // Handle dropdown hover with delay
    const handleDropdownEnter = (index) => {
        if (dropdownTimerRef.current) {
            clearTimeout(dropdownTimerRef.current);
        }
        setActiveDropdown(index);
        setActiveTab(0); // Reset to first tab when opening a new dropdown
    };

    const handleDropdownLeave = () => {
        dropdownTimerRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 200);
    };

    const handleDropdownStay = () => {
        if (dropdownTimerRef.current) {
            clearTimeout(dropdownTimerRef.current);
        }
    };

    const toggleMobileSubmenu = (index) => {
        setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index);
    };

    const handleDropdownScroll = (e) => {
        e.stopPropagation();
        setIsScrolling(true);
        clearTimeout(dropdownTimerRef.current);
        dropdownTimerRef.current = setTimeout(() => {
            setIsScrolling(false);
        }, 100);
    };

    return (
        <nav className="navbar-container" ref={navbarRef}>
            <div className="navbar">
                {/* Brand Logo */}
                <div ref={logoRef} className="nav-logo">
                    <img src='https://jjcsystems.com/wp-content/uploads/2024/07/jjc-systems-logo-mobile.png' alt='logo' />
                </div>

                {/* Desktop Navigation Links */}
                <ul ref={menuRef} className="nav-menu">
                    {menuData.map((menu, idx) => (
                        <li
                            key={idx}
                            className={`nav-item ${activeDropdown === idx ? 'active' : ''}`}
                            onMouseEnter={(e) => {
                                if (!menu.hasDropdown) return;
                                handleDropdownEnter(idx);

                                const dropdown = e.currentTarget.querySelector(".mega-dropdown");
                                gsap.fromTo(dropdown,
                                    { opacity: 0, y: 15, scale: 0.99 },
                                    { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" }
                                );
                            }}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <span className="nav-links">
                                {menu.title}
                                {menu.hasDropdown && <ChevronDown size={16} className="chevron-icon" />}
                                {menu.hasDropdown && <span className="nav-indicator"></span>}
                            </span>

                            {/* --- New Tabbed Mega Dropdown Layout --- */}
                            {menu.hasDropdown && (
                                <div
                                    className={`mega-dropdown ${activeDropdown === idx ? 'show' : ''}`}
                                    onMouseEnter={handleDropdownStay}
                                    onMouseLeave={handleDropdownLeave}
                                    onScroll={handleDropdownScroll}
                                >
                                    <div className="tabbed-dropdown-container">

                                        {/* LEFT SIDEBAR: Vertical Tabs */}
                                        <div className="dropdown-sidebar">
                                            {menu.groups.map((group, gIdx) => (
                                                <div
                                                    key={gIdx}
                                                    className={`sidebar-tab-item ${activeTab === gIdx ? 'tab-active' : ''}`}
                                                    onMouseEnter={() => setActiveTab(gIdx)}
                                                >
                                                    <span>{group.heading}</span>
                                                    <ArrowRight size={16} className="sidebar-arrow" />
                                                </div>
                                            ))}
                                        </div>

                                        {/* RIGHT SIDEBAR: Content Dynamic Panel Slider */}
                                        <div className="dropdown-content-panel">
                                            {menu.groups.map((group, gIdx) => (
                                                <div
                                                    key={gIdx}
                                                    className={`panel-pane ${activeTab === gIdx ? 'pane-active' : ''}`}
                                                >
                                                    {/* <div className="panel-header-desc">
                                                        <h3>{group.heading}</h3>
                                                        <p>{group.description}</p>
                                                       
                                                    </div> */}

                                                    <div className="panel-links-grid">
                                                        {group.items.map((item, iIdx) => (
                                                            <a
                                                                key={iIdx}
                                                                href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                                className="panel-grid-link"
                                                            >
                                                                <span>{item}</span>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Right Side Actions / CTA */}
                <div ref={ctaRef} className="nav-actions">
                    <button className="btn-contact">Contact Us</button>
                    <button
                        className="menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* --- Mobile Fullscreen Accordion Menu --- */}
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
                                            <div className="mobile-sub-title">{group.heading}</div>
                                            {group.items.map((item, iIdx) => (
                                                <a
                                                    key={iIdx}
                                                    href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {item}
                                                </a>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <a
                                href={`/#${menu.title.toLowerCase()}`}
                                className="mobile-nav-link"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {menu.title}
                            </a>
                        )}
                    </div>
                ))}
                <button className="mobile-cta">Contact Us</button>
            </div>
        </nav>
    );
};

export default Navbar;