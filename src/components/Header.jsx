import React, { useState, useEffect, useRef } from 'react';
import {
    ChevronDown, Menu, X, ArrowRight, ArrowUpRight,
    Layers, Building2, Boxes, BookOpen, Sparkles,
    Rocket, LifeBuoy, Compass, HelpCircle,
    Users, Handshake, MapPin, Briefcase,
    ShieldCheck, FileCheck, Scale,
    Newspaper, ClipboardList, FileText, PieChart, CalendarClock,
} from 'lucide-react';
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

// ─── Helpers ──────────────────────────────────────────────────────────────
const slugify = (str) =>
    str
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

// Purely presentational: picks a lucide icon for a group/category heading
// so the sidebar + cards feel enterprise-grade. Falls back to a generic
// icon when nothing matches — never affects data, routing, or logic.
const HEADING_ICON_MAP = [
    [/service/i, Layers],
    [/industry|industries/i, Building2],
    [/platform/i, Boxes],
    [/resource/i, BookOpen],
    [/event/i, CalendarClock],
    [/get started/i, Rocket],
    [/compan/i, Users],
    [/legal/i, Scale],
];

const getHeadingIcon = (heading = '') => {
    const match = HEADING_ICON_MAP.find(([re]) => re.test(heading));
    return match ? match[1] : Sparkles;
};

// Icon + one-line description for the hardcoded "Why Us" / "Insights" links.
// Purely presentational metadata layered onto the existing static data —
// labels and paths are untouched, so routing behavior is identical.
const STATIC_ITEM_META = {
    "Onboarding Guide": { icon: Rocket, desc: "Get set up in a few simple steps" },
    "Open A Ticket": { icon: LifeBuoy, desc: "Get help from our support desk" },
    "Our Approach": { icon: Compass, desc: "How we deliver every engagement" },
    "FAQs": { icon: HelpCircle, desc: "Answers to common questions" },
    "About Us": { icon: Building2, desc: "Our story and mission" },
    "Team": { icon: Users, desc: "Meet the people behind the work" },
    "Partners": { icon: Handshake, desc: "Our technology alliances" },
    "Locations": { icon: MapPin, desc: "Where to find us" },
    "Careers": { icon: Briefcase, desc: "Join our growing team" },
    "Privacy Policy": { icon: ShieldCheck, desc: "How we handle your data" },
    "Return Policy": { icon: FileCheck, desc: "Our returns & refunds terms" },
    "Terms of Service": { icon: Scale, desc: "The terms that govern our services" },
    "Blog": { icon: Newspaper, desc: "News, ideas & perspectives" },
    "Guides": { icon: BookOpen, desc: "Step-by-step how-to resources" },
    "Checklists": { icon: ClipboardList, desc: "Practical, ready-to-use lists" },
    "Whitepaper": { icon: FileText, desc: "In-depth research & analysis" },
    "Infographic": { icon: PieChart, desc: "Insights, visualized" },
    "Events": { icon: CalendarClock, desc: "Webinars & upcoming events" },
};

const getItemMeta = (label) => STATIC_ITEM_META[label] || null;

// ─── Hardcoded 2-level "Services" mega menu ────────────────────────────────
// 7 top-level groups. Hovering a group reveals its items on the right.
const SERVICES_MEGA_MENU = [
    {
        heading: "Strategy & Advisory",
        blurb: "Plan the roadmap before you touch a single system.",
        items: [
            "IT Strategy & Consulting",
            "AI Readiness & Copilot Enablement",
            "Microsoft Licensing & Optimization",
            "Organizational Change Management",
        ],
    },
    {
        heading: "Managed & Secure IT",
        blurb: "Keep the lights on, the data safe, and the lines open.",
        items: [
            "Managed IT",
            "Cybersecurity, Identity & Compliance",
            "Cloud Infrastructure",
            "Data Center Hosting",
            "Teams Calling & Business Voice",
        ],
    },
    {
        heading: "Business Applications",
        blurb: "The systems your teams run finance, sales and service on.",
        items: [
            "Enterprise Resource Platform",
            "Finance",
            "Project Operations",
            "Sales & CRM",
            "Customer Service",
            "Contact Center",
            "Field Service",
            "Customer Insights",
        ],
    },
    {
        heading: "Data, AI & Integration",
        blurb: "Turn scattered systems into one connected source of truth.",
        items: [
            "Business Intelligence & Reporting",
            "Enterprise System Integration",
        ],
    },
    {
        heading: "Collaboration & Automation",
        blurb: "Give teams a faster, tidier way to work together.",
        items: [
            "Modern Workplace",
            "Intranet Portals & Document Management",
            "Business Process Automation",
            "Endpoint & Device Management",
        ],
    },
    {
        heading: "Digital Transformation",
        blurb: "Modernize the core of the business, not just the edges.",
        items: [
            "Enterprise Modernization",
        ],
    },
    {
        heading: "Talent",
        blurb: "Bring in the specialists the moment you need them.",
        items: [
            "IT Staffing",
        ],
    },
].map((group) => ({
    ...group,
    items: group.items.map((label) => ({
        label,
        path: `services/${slugify(label)}`,
    })),
}));

// ─── Animated Nub (desktop mega-dropdown) ────────────────────────────────
const DropdownNub = ({ activeTab }) => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        const tab = document.getElementById(`sidebar-tab-${activeTab}`);
        const panel = document.getElementById('dropdown-panel');
        if (!tab || !panel) return;

        const tabRect = tab.getBoundingClientRect();
        const panelRect = panel.getBoundingClientRect();

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

// ─── Promo panel: gradient/glass card shown on the right of every ────────
// desktop mega-dropdown. Copy adapts to the open menu, but the image,
// navigation, and click behavior use the same handlers as the rest of
// the header — purely additive UI, no new routes.
const MENU_PROMO_COPY = {
    "What We Do": {
        badge: "Microsoft Solutions Partner",
        heading: "Need Microsoft experts?",
        desc: "Schedule a free consultation with our certified Microsoft consultants.",
        cta: "Book a Consultation",
    },
    "Why Us": {
        badge: "Trusted Advisors",
        heading: "See why enterprises choose us",
        desc: "Meet the team and process behind every engagement we deliver.",
        cta: "Talk to Our Team",
    },
    "Insights": {
        badge: "Resources & Events",
        heading: "Stay ahead of the curve",
        desc: "Guides, whitepapers, and events from our Microsoft practice.",
        cta: "Explore Insights",
    },
};

const PromoPanel = ({ menuTitle, navigate, closeDropdown }) => {
    const copy = MENU_PROMO_COPY[menuTitle] || MENU_PROMO_COPY["What We Do"];

    const handleClick = () => {
        navigate('/contact');
        closeDropdown();
    };

    return (
        <div className="promo-panel">
            <img className="promo-panel-image" src={headerImage} alt={menuTitle} />
            <div className="promo-panel-scrim" />
            <div className="promo-panel-body">
                <span className="promo-badge">
                    <Sparkles size={12} />
                    {copy.badge}
                </span>
                <h3>{copy.heading}</h3>
                <p>{copy.desc}</p>
                <button type="button" className="promo-panel-cta" onClick={handleClick}>
                    {copy.cta}
                    <ArrowUpRight size={16} />
                </button>
            </div>
        </div>
    );
};

// ─── Services sub-panel: 7 points on the left, items on hover ─────────────
const ServicesPanel = ({ subGroups, handlePanelLinkClick }) => {
    const [activeSub, setActiveSub] = useState(0);
    const active = subGroups[activeSub];

    return (
        <div className="services-panel">
            <div className="services-panel-list">
                {subGroups.map((sg, i) => (
                    <a
                        key={i}
                        href={`/${sg.items[0]?.path}`}
                        className={`services-panel-item ${activeSub === i ? 'active' : ''}`}
                        onMouseEnter={() => setActiveSub(i)}
                        onFocus={() => setActiveSub(i)}
                        onClick={(e) => { e.preventDefault(); handlePanelLinkClick(sg.items[0]?.path); }}
                    >
                        <span className="services-panel-num">{String(i + 1).padStart(2, '0')}</span>
                        <span className="services-panel-label">{sg.heading}</span>
                        <ArrowRight size={15} className="services-panel-arrow" />
                    </a>
                ))}
            </div>

            <div className="services-panel-detail">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSub}
                        initial={{ opacity: 0, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -14 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                        <div className="services-panel-detail-head">
                            <h4>{active.heading}</h4>
                            <p>{active.blurb}</p>
                        </div>
                        <div className="services-panel-grid">
                            {active.items.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={`/${item.path}`}
                                    className="services-panel-link"
                                    onClick={(e) => { e.preventDefault(); handlePanelLinkClick(item.path); }}
                                >
                                    <span className="services-panel-dot" />
                                    <span>{item.label}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

// ─── "Why Us" / simple side-by-side columns panel: used by both the
// "Why Us" dropdown (Get Started / Company / Legal) and the "Insights"
// dropdown (Resources / Events). Bold heading + icon link list per
// column, every item visible at once, all columns top-aligned ─────────────
const WhyUsPanel = ({ groups, handlePanelLinkClick }) => {
    return (
        <div className="whyus-panel">
            {groups.map((group, gIdx) => {
                const HeadingIcon = getHeadingIcon(group.heading);
                return (
                    <div key={gIdx} className="whyus-column">
                        <h4 className="whyus-column-heading">
                            <HeadingIcon size={14} />
                            {group.heading}
                        </h4>
                        <div className="whyus-column-links">
                            {group.items.map((item, iIdx) => {
                                const meta = getItemMeta(item.label);
                                const ItemIcon = meta?.icon || ArrowRight;
                                return (
                                    <a
                                        key={iIdx}
                                        href={`/${item.path}`}
                                        className="whyus-column-link"
                                        onClick={(e) => { e.preventDefault(); handlePanelLinkClick(item.path); }}
                                    >
                                        <span className="whyus-link-icon">
                                            <ItemIcon size={15} />
                                        </span>
                                        <span className="whyus-link-text">
                                            {item.label}
                                            {meta?.desc && <span className="whyus-link-desc">{meta.desc}</span>}
                                        </span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

// ─── Dropdown Content with directional slide (desktop mega-dropdown) ────────
const MegaDropdownContent = ({ menu, activeTab, setActiveTab, prevTab, handlePanelLinkClick }) => {
    const dir = prevTab < activeTab ? 1 : -1;
    const activeGroup = menu.groups[activeTab];

    return (
        <div className="tabbed-dropdown-container" id="dropdown-panel" style={{ position: 'relative' }}>

            <div className="dropdown-sidebar" style={{ position: 'relative' }}>
                <DropdownNub activeTab={activeTab} />
                {menu.groups.map((group, gIdx) => {
                    const HeadingIcon = getHeadingIcon(group.heading);
                    return (
                        <a
                            id={`sidebar-tab-${gIdx}`}
                            key={gIdx}
                            href={group.items?.length > 0 ? `/${group.items[0].path}` : '#'}
                            className={`sidebar-tab-item ${activeTab === gIdx ? 'tab-active' : ''}`}
                            onMouseEnter={() => setActiveTab(gIdx)}
                            onClick={(e) => {
                                e.preventDefault();
                                if (group.items?.length > 0) {
                                    handlePanelLinkClick(group.items[0].path);
                                }
                            }}
                        >
                            <span className="sidebar-tab-icon">
                                <HeadingIcon size={16} />
                            </span>
                            <span className="sidebar-tab-label">{group.heading}</span>
                            <ArrowRight size={16} className="sidebar-arrow" />
                        </a>
                    );
                })}
            </div>

            <div className="dropdown-content-panel" style={{ overflowX: 'hidden' }}>
                {activeGroup?.subGroups ? (
                    <ServicesPanel
                        key={activeTab}
                        subGroups={activeGroup.subGroups}
                        handlePanelLinkClick={handlePanelLinkClick}
                    />
                ) : (
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
                                {activeGroup?.items.map((item, iIdx) => {
                                    const meta = getItemMeta(item?.label);
                                    const ItemIcon = meta?.icon || getHeadingIcon(activeGroup?.heading);
                                    return (
                                        <div
                                            key={iIdx}
                                            onClick={() => handlePanelLinkClick(item?.path)}
                                            className="panel-grid-link"
                                        >

                                            <span className="panel-grid-text">
                                                <span className="panel-grid-title">{item?.label}</span>
                                                {meta?.desc && <span className="panel-grid-desc">{meta.desc}</span>}
                                            </span>
                                            <ArrowRight size={15} className="panel-grid-arrow" />
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )}
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
    const justHoverOpenedRef = useRef(false);
    const hoverGuardTimerRef = useRef(null);
    const navbarRef = useRef(null);
    const logoRef = useRef(null);
    const menuRef = useRef(null);
    const ctaRef = useRef(null);

    const navigate = useNavigate();

    const { data } = useGetCategoryQuery();

    const menuData = [

        {
            title: "What We Do",
            hasDropdown: true,
            groups:
                data?.data?.map((category) => {
                    // Services gets a richer, two-level menu: 7 groups on the left,
                    // items revealed on hover on the right.
                    // if () {
                    //     return {
                    //         heading: category.name,
                    //         subGroups: SERVICES_MEGA_MENU,
                    //         // Fallback flat list (used for the sidebar-tab click target
                    //         // and for the mobile accordion's "click heading" fallback).
                    //         items: SERVICES_MEGA_MENU[0].items,
                    //     };
                    // }

                    return {
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
                    };
                }) || []
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
                        {
                            label: "Onboarding Guide",
                            path: "/why-us/onboarding-guide",
                        },
                        {
                            label: "Open A Ticket",
                            path: "/why-us/open-a-ticket",
                        },

                        {
                            label: "Our Approach",
                            path: "/why-us/our-approach",
                        },
                        {
                            label: "FAQs",
                            path: "/why-us/faq",
                        },
                    ],
                },

                {
                    heading: "Company",
                    items: [
                        {
                            label: "About Us",
                            path: "/About",
                        },
                        {
                            label: "Team",
                            path: "/why-us/team",
                        },
                        {
                            label: "Partners",
                            path: "/why-us/partners",
                        },
                        {
                            label: "Locations",
                            path: "/why-us/locations",
                        },
                        {
                            label: "Careers",
                            path: "/why-us/careers",
                        },
                    ],
                },

                {
                    heading: "Legal",
                    items: [
                        {
                            label: "Privacy Policy",
                            path: "/why-us/privacy-policy",
                        },
                        {
                            label: "Return Policy",
                            path: "/why-us/return-policy",
                        },
                        {
                            label: "Terms of Service",
                            path: "/why-us/terms-of-service",
                        },
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
                        {
                            label: "Blog",
                            path: "/blog",
                        },
                        {
                            label: "Guides",
                            path: "/resources/guides",
                        },
                        {
                            label: "Checklists",
                            path: "/resources/checklists",
                        },
                        {
                            label: "Whitepaper",
                            path: "/resources/whitepapers",
                        },
                        {
                            label: "Infographic",
                            path: "/resources/infographics",
                        },
                    ],
                },
                {
                    heading: "Events",
                    items: [
                        {
                            label: "Events",
                            path: "/resources/events",
                        },
                    ],
                },
            ],
        },
        {
            title: "Contact Us",
            path: "/Contact",
            hasDropdown: false
        }
    ];

    const closeDropdown = () => setActiveDropdown(null);

    const handleNavItemClick = (menu) => {
        if (menu.hasDropdown) return; // click toggling is handled by handleDropdownToggleClick

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

    // Close the dropdown on outside click, since click can now open it too.
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
            // Important: clear the inline transform once the intro finishes.
            // A leftover transform turns .navbar-container into a containing
            // block for its position:fixed descendants (the mega-dropdown),
            // which breaks true viewport-relative positioning.
            onComplete: () => gsap.set(".navbar-container", { clearProps: "transform" }),
        });
    }, []);

    const handleDropdownEnter = (index) => {
        if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
        if (activeDropdown !== index) {
            setPrevTab(0);
            setActiveTab(0);
        }
        setActiveDropdown(index);

        // A real mouse click always fires mouseenter right before click, so
        // the click handler below needs to know "this open was just caused
        // by hover" and not immediately treat the click as a close-toggle.
        justHoverOpenedRef.current = true;
        if (hoverGuardTimerRef.current) clearTimeout(hoverGuardTimerRef.current);
        hoverGuardTimerRef.current = setTimeout(() => {
            justHoverOpenedRef.current = false;
        }, 400);
    };

    const handleDropdownLeave = () => {
        dropdownTimerRef.current = setTimeout(closeDropdown, 450);
    };

    const handleDropdownStay = () => {
        if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    };

    // Click-to-toggle: works standalone on devices/situations where hover
    // doesn't fire (touch, trackpads, devtools), and doesn't fight the
    // hover-open thanks to the guard above.
    const handleDropdownToggleClick = (index) => {
        if (justHoverOpenedRef.current) {
            justHoverOpenedRef.current = false;
            return;
        }
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            handleDropdownEnter(index);
        }
    };

    const toggleMobileSubmenu = (index) => {
        setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setActiveMobileSubmenu(null);
    };

    // Stagger animation variants for mobile menu items
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
                <div onClick={handleLogoClick} ref={logoRef} className="nav-logo">
                    <img src={logo} alt='logo' />
                </div>

                {/* Desktop Nav */}
                <ul ref={menuRef} className="nav-menu">
                    {menuData.map((menu, idx) => (
                        <li
                            key={idx}
                            className={`nav-item ${activeDropdown === idx ? "active" : ""}`}
                            onMouseEnter={() => {
                                if (!menu.hasDropdown) return;
                                handleDropdownEnter(idx);
                            }}
                            onMouseLeave={handleDropdownLeave}
                            onClick={(e) => {
                                e.stopPropagation();
                                if (!menu.hasDropdown) return;
                                handleDropdownToggleClick(idx);
                            }}
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
                                            className={`mega-dropdown  ${menu.dropdownType === 'whyUs' ? 'mega-dropdown--whyus' : ''}`}
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 12 }}
                                            transition={{ duration: 0.22 }}
                                            onMouseEnter={handleDropdownStay}
                                            onMouseLeave={handleDropdownLeave}
                                        >
                                            {/* Hover bridge */}
                                            <div className="mega-dropdown-bridge" />


                                            <div className="mega-dropdown-right">
                                                <PromoPanel
                                                    menuTitle={menu.title}
                                                    navigate={navigate}
                                                    closeDropdown={closeDropdown}
                                                />
                                            </div>

                                            <div className="mega-dropdown-left">
                                                {menu.dropdownType === 'whyUs' ? (
                                                    <WhyUsPanel
                                                        groups={menu.groups}
                                                        handlePanelLinkClick={handlePanelLinkClick}
                                                    />
                                                ) : (
                                                    <MegaDropdownContent
                                                        menu={menu}
                                                        activeTab={activeTab}
                                                        prevTab={prevTab}
                                                        setActiveTab={handleTabChange}
                                                        handlePanelLinkClick={handlePanelLinkClick}
                                                    />
                                                )}
                                            </div>


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
                PaperProps={{
                    sx: {
                        width: {
                            xs: "85vw",
                            sm: "350px"
                        },
                        maxWidth: "350px",
                        height: "100vh",
                        background: "#fff",
                        boxShadow: "none",

                        "&.MuiDrawer-paper": {
                            width: {
                                xs: "85vw",
                                sm: "350px"
                            },
                            maxWidth: "350px",
                        }
                    },
                }}
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
                                                            {group.subGroups ? (
                                                                <div className="mobile-services-group">
                                                                    <div className="mobile-sub-title mobile-sub-title--main">
                                                                        {group.heading}
                                                                    </div>
                                                                    {group.subGroups.map((sg, sIdx) => (
                                                                        <div key={sIdx} className="mobile-services-subgroup">
                                                                            <div className="mobile-sub-title">
                                                                                {String(sIdx + 1).padStart(2, '0')} · {sg.heading}
                                                                            </div>
                                                                            {sg.items.map((item, iIdx) => (
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
                                                                </div>
                                                            ) : (
                                                                <>
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
                                                                </>
                                                            )}
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
        </nav >
    );
};

export default Navbar;