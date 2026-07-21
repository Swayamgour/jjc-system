import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
    ChevronDown, ChevronRight, Menu, X, ArrowRight, ArrowUpRight,
    Boxes, Building2, Layers, LayoutGrid, FileText,
    Users, MapPin, Handshake, Award, Compass, MessageCircle,
    MessageSquare, HelpCircle, Phone, Mail,  Lightbulb,
    Calendar, Star,
} from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import logo from '../assets/Original.png';
import { useNavigate } from 'react-router';
import { useGetCategoryQuery } from '../redux/api';
import { FaLinkedinIn } from "react-icons/fa";

// MUI imports for mobile drawer
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import headerImage from '../assets/bread-contact.webp';
import './Header.css'

// ─── Desktop mega-dropdown content: left promo card + right link columns ──
// (UNCHANGED — kept as a generic fallback layout, currently unused now that
// Why Us / Insights / Contact Us all use InfoDropdownContent below, but left
// in place in case a future simple menu needs it.)
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

                <div className="dropdown-scroll">
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
                </div>
            </section>

        </div>
    );
};

// ─── "What We Do" exclusive mega-dropdown layout ──────────────────────────
const CATEGORY_ICONS = {
    services: Boxes,
    industries: Building2,
    platforms: Layers,
};

const CATEGORY_META = {
    services: {
        title: "Technology Consulting Built for Business Outcomes",
        text: "We align strategy, platforms, and execution to solve complex challenges and drive measurable results that matter.",
        cta: "Talk to an Advisor",
        footerLinks: [
            { label: "Explore All Services", sub: "View our complete service catalog", icon: LayoutGrid, path: "services" },
            { label: "View Case Studies", sub: "See how we help clients succeed", icon: FileText, path: "case-studies" },
        ],
    },
    industries: {
        title: "Industry Expertise That Fits Your Environment",
        text: "From compliance to operations, we design technology strategies that align with the demands of your industry.",
        cta: "Explore Industry Solutions",
        footerLinks: [
            { label: "Explore Industry Solutions", sub: "View solutions tailored to your industry", icon: LayoutGrid, path: "industries" },
            { label: "View Client Success", sub: "See how we help organizations succeed", icon: FileText, path: "case-studies" },
        ],
    },
    platforms: {
        title: "Microsoft Expertise. Business-First Guidance.",
        text: "We help organizations select, implement, and optimize the Microsoft platforms that drive productivity, innovation, and growth.",
        cta: "Talk to an Expert",
        footerLinks: [
            { label: "Explore All Platforms", sub: "View our complete platform catalog", icon: LayoutGrid, path: "platforms" },
            { label: "Talk to an Expert", sub: "Get guidance on the right platforms for your business", icon: FileText, path: "contact" },
        ],
    },
};

const WhatWeDoDropdownContent = ({ menu, handlePanelLinkClick }) => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const activeCategory = menu.groups[activeCategoryIndex] || null;
    const meta = CATEGORY_META[activeCategory?.slug] || CATEGORY_META.services;
    const PromoIcon = CATEGORY_ICONS[activeCategory?.slug] || Boxes;

    return (
        <div className="mega-layout what-we-do-layout">

            {/* Left — top-level category rail (Services / Industries / Platforms) */}
            <aside className="what-we-do-category-col">
                {menu.groups.map((category, idx) => {
                    const Icon = CATEGORY_ICONS[category.slug] || Boxes;
                    const isActive = idx === activeCategoryIndex;
                    return (
                        <button
                            key={category.heading}
                            className={`what-we-do-category-item ${isActive ? 'active' : ''}`}
                            onMouseEnter={() => setActiveCategoryIndex(idx)}
                            onFocus={() => setActiveCategoryIndex(idx)}
                            onClick={() => setActiveCategoryIndex(idx)}
                        >
                            <span className="what-we-do-category-icon">
                                <Icon size={18} />
                            </span>
                            <span>{category.heading}</span>
                        </button>
                    );
                })}
            </aside>

            {/* Middle — subcategory columns for the active top-level category */}
            <section className="dropdown-main what-we-do-main">
                <div className="dropdown-scroll">
                    <div className="dropdown-columns what-we-do-columns">
                        {activeCategory?.subcategories?.map((sub) => (
                            <div className="dropdown-column" key={sub.heading}>
                                <h3>{sub.heading}</h3>
                                <div className="dropdown-links">
                                    {sub.items.map((item) => (
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
                </div>

                <div className="what-we-do-footer">
                    {meta.footerLinks.map((link) => {
                        const LinkIcon = link.icon;
                        return (
                            <button
                                key={link.label}
                                className="what-we-do-footer-link"
                                onClick={() => handlePanelLinkClick(link.path)}
                            >
                                <span className="what-we-do-footer-icon">
                                    <LinkIcon size={18} />
                                </span>
                                <span className="what-we-do-footer-text">
                                    <strong>{link.label}</strong>
                                    <small>{link.sub}</small>
                                </span>
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* Right — dark promo card, content swaps with the active category */}
            <aside className="what-we-do-promo-card">
                <div className="what-we-do-promo-icon">
                    <PromoIcon size={26} />
                </div>
                <h3>{meta.title}</h3>
                <p>{meta.text}</p>
                <button
                    className="what-we-do-promo-cta"
                    onClick={() => handlePanelLinkClick('contact')}
                >
                    {meta.cta} <ArrowRight size={16} />
                </button>
            </aside>

        </div>
    );
};

// ─── NEW: "Info" mega-dropdown layout ──────────────────────────────────────
// Used for "Why Us", "Insights", and "Contact Us". Shape:
//   menu.columns      -> array of { heading, icon?, variant?: "rows",
//                                    items: [{ label, path?, href?, icon?, sub? }],
//                                    footerLink?: { label, path } }
//   menu.featuredCard  -> optional single highlighted card (used by Insights):
//                          { icon, heading, image?, title, description, ctaLabel, path }
//   menu.extraCard     -> optional full-width card below the columns (used by Why Us):
//                          { icon, heading, description, ctaLabel, path }
//   menu.footerLinks   -> optional row of 2-3 footer link tiles (icon, label, sub, path)
//   menu.promo         -> right-side dark promo card: { icon, title, text, cta, path }
//
// A column item with `href` renders as a plain <a> (tel:, mailto:, external links).
// A column item with `path` renders as a button that calls handlePanelLinkClick.
// A column item with neither renders as a static (non-clickable) row — used for
// display-only info like office addresses.
const InfoRow = ({ item, handlePanelLinkClick }) => {
    const Icon = item.icon;
    const inner = (
        <>
            {Icon && (
                <span className="info-row-icon">
                    <Icon size={16} />
                </span>
            )}
            <span className="info-row-text">
                <strong>{item.label}</strong>
                {item.sub && <small>{item.sub}</small>}
            </span>
        </>
    );

    if (item.href) {
        return (
            <a
                className="info-row"
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            >
                {inner}
            </a>
        );
    }

    if (item.path) {
        return (
            <button className="info-row" onClick={() => handlePanelLinkClick(item.path)}>
                {inner}
            </button>
        );
    }

    return <div className="info-row info-row-static">{inner}</div>;
};

const InfoDropdownContent = ({ menu, handlePanelLinkClick }) => {
    const columnCount = menu.columns.length + (menu.featuredCard ? 1 : 0);

    return (
        <div className="mega-layout info-dropdown-layout">

            {/* Middle — columns (+ optional extra card) + footer link row */}
            <section className="dropdown-main what-we-do-main info-dropdown-main">
                <div className="dropdown-scroll">
                    <div className={`info-columns-grid info-columns-${columnCount}`}>
                        {menu.columns.map((col) => (
                            <div className="info-column" key={col.heading}>
                                <h3 className="info-column-heading">
                                    {col.icon && (
                                        <span className="info-column-icon">
                                            <col.icon size={16} />
                                        </span>
                                    )}
                                    {col.heading}
                                </h3>

                                <div className={`info-column-items ${col.variant === 'rows' ? 'info-column-rows' : ''}`}>
                                    {col.items.map((item, idx) => (
                                        col.variant === 'rows' ? (
                                            <InfoRow
                                                key={item.label + idx}
                                                item={item}
                                                handlePanelLinkClick={handlePanelLinkClick}
                                            />
                                        ) : (
                                            <button
                                                key={item.label + idx}
                                                className="dropdown-link"
                                                onClick={() => handlePanelLinkClick(item.path)}
                                            >
                                                {item.label}
                                            </button>
                                        )
                                    ))}
                                </div>

                                {col.footerLink && (
                                    <button
                                        className="info-column-footer-link"
                                        onClick={() => handlePanelLinkClick(col.footerLink.path)}
                                    >
                                        {col.footerLink.label} <ArrowRight size={13} />
                                    </button>
                                )}
                            </div>
                        ))}

                        {menu.featuredCard && (
                            <div className="info-column info-featured-column">
                                <h3 className="info-column-heading">
                                    {menu.featuredCard.icon && (
                                        <span className="info-column-icon">
                                            <menu.featuredCard.icon size={16} />
                                        </span>
                                    )}
                                    {menu.featuredCard.heading}
                                </h3>

                                <div className="info-featured-card">
                                    <span className="info-featured-icon">
                                        <menu.featuredCard.icon size={20} />
                                    </span>
                                    <div className="info-featured-content">
                                        <strong>{menu.featuredCard.title}</strong>
                                        <p>{menu.featuredCard.description}</p>
                                        <button
                                            className="info-featured-cta"
                                            onClick={() => handlePanelLinkClick(menu.featuredCard.path)}
                                        >
                                            {menu.featuredCard.ctaLabel} <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {menu.extraCard && (
                        <div className="info-extra-card">
                            <span className="info-extra-icon">
                                <menu.extraCard.icon size={20} />
                            </span>
                            <div className="info-extra-content">
                                <strong>{menu.extraCard.heading}</strong>
                                <p>{menu.extraCard.description}</p>
                                <button
                                    className="info-extra-cta"
                                    onClick={() => handlePanelLinkClick(menu.extraCard.path)}
                                >
                                    {menu.extraCard.ctaLabel} <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {menu.footerLinks && (
                    <div className="what-we-do-footer">
                        {menu.footerLinks.map((link) => {
                            const LinkIcon = link.icon;
                            return (
                                <button
                                    key={link.label}
                                    className="what-we-do-footer-link"
                                    onClick={() => handlePanelLinkClick(link.path)}
                                >
                                    <span className="what-we-do-footer-icon">
                                        <LinkIcon size={18} />
                                    </span>
                                    <span className="what-we-do-footer-text">
                                        <strong>{link.label}</strong>
                                        <small>{link.sub}</small>
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                )}
            </section>

            {/* Right — dark promo card */}
            {menu.promo && (
                <aside className="what-we-do-promo-card">
                    <div className="what-we-do-promo-icon">
                        <menu.promo.icon size={26} />
                    </div>
                    <h3>{menu.promo.title}</h3>
                    <p>{menu.promo.text}</p>
                    <button
                        className="what-we-do-promo-cta"
                        onClick={() => handlePanelLinkClick(menu.promo.path)}
                    >
                        {menu.promo.cta} <ArrowRight size={16} />
                    </button>
                </aside>
            )}

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
            // Preserve the full category -> subcategory -> item hierarchy
            // returned by the API (previously this flattened straight to
            // category.items, which doesn't exist on the real response —
            // items live one level deeper, under each subcategory).
            groups:
                data?.data?.map((category) => ({
                    heading: category.name,
                    slug: category.slug,
                    subcategories:
                        category.subcategories?.map((sub) => ({
                            heading: sub.name,
                            slug: sub.slug,
                            items:
                                sub.items?.map((item) => ({
                                    label: item.name,
                                    path:
                                        category.slug === "industries"
                                            ? `/industries/${item.slug}`
                                            : category.slug === "platforms"
                                                ? `/platforms/${item.slug}`
                                                : category.slug === "services"
                                                    ? `/services/${item.slug}`
                                                    : `/${item.slug}`,
                                })) || [],
                        })) || [],
                })) || []
        },
        {
            title: "Case study",
            path: "/About",
            hasDropdown: false
        },

        // ── Why Us — icon-headed columns + highlight card + footer + promo ──
        {
            title: "Why Us",
            hasDropdown: true,
            layout: "info",
            columns: [
                {
                    heading: "About JJC",
                    icon: Building2,
                    items: [
                        { label: "About Us", path: "/About" },
                        { label: "Leadership & Team", path: "/why-us/team" },
                        { label: "Locations", path: "/why-us/locations" },
                        { label: "Partners", path: "/why-us/partners" },
                        { label: "Careers", path: "/why-us/careers" },
                    ],
                },
                {
                    heading: "Working With Us",
                    icon: Users,
                    items: [
                        { label: "Our Approach", path: "/why-us/our-approach" },
                        { label: "Onboarding Guide", path: "/why-us/onboarding-guide" },
                        { label: "Frequently Asked Questions", path: "/why-us/faq" },
                        { label: "Client Portal", path: "/client-portal" },
                        { label: "Open a Support Ticket", path: "/why-us/open-a-ticket" },
                    ],
                },
            ],
            extraCard: {
                icon: Award,
                heading: "Why Organizations Choose JJC",
                description: "Organizations choose JJC for our practical guidance, accountable delivery, and experienced technology professionals who deliver results that matter.",
                ctaLabel: "Meet JJC Systems",
                path: "/About",
            },
            footerLinks: [
                { icon: Compass, label: "Our Approach", sub: "See how we guide projects from discovery to delivery", path: "/why-us/our-approach" },
                { icon: Mail, label: "Contact JJC", sub: "Connect with our team for next steps", path: "/contact" },
            ],
            promo: {
                icon: Handshake,
                title: "A Partner You Can Count On.",
                text: "We blend strategy, implementation, and support with accountability at every step so you can move forward with confidence.",
                cta: "Learn About JJC",
                path: "/About",
            },
        },

        // ── Insights — resources + topics + featured article + promo ──
        {
            title: "Insights",
            hasDropdown: true,
            layout: "info",
            columns: [
                {
                    heading: "Resources",
                    icon: FileText,
                    items: [
                        { label: "Blog", path: "/blog" },
                        { label: "Guides", path: "/resources/guides" },
                        { label: "Checklists", path: "/resources/checklists" },
                        { label: "Whitepaper", path: "/resources/whitepapers" },
                        { label: "Infographic", path: "/resources/infographics" },
                    ],
                },
                {
                    heading: "Explore By Topic",
                    icon: Compass,
                    items: [
                        { label: "Artificial Intelligence", path: "/resources/topics/ai" },
                        { label: "Cybersecurity", path: "/resources/topics/cybersecurity" },
                        { label: "Microsoft 365", path: "/resources/topics/microsoft-365" },
                        { label: "Dynamics 365", path: "/resources/topics/dynamics-365" },
                        { label: "Data & Analytics", path: "/resources/topics/data-analytics" },
                        { label: "Cloud & Infrastructure", path: "/resources/topics/cloud-infrastructure" },
                    ],
                },
            ],
            featuredCard: {
                icon: Star,
                heading: "Featured Insight",
                title: "Preparing Your Organization for Microsoft Copilot",
                description: "Learn how to build a strong foundation for Copilot success with planning, governance, and user readiness.",
                ctaLabel: "Read The Article",
                path: "/blog/preparing-your-organization-for-microsoft-copilot",
            },
            footerLinks: [
                { icon: LayoutGrid, label: "Explore Resources", sub: "Browse articles, guides, and practical tools", path: "/resources" },
                { icon: Calendar, label: "Upcoming Events", sub: "See webinars, sessions, and educational content", path: "/resources/events" },
            ],
            promo: {
                icon: Lightbulb,
                title: "Insights That Help You Move Forward.",
                text: "We turn complex technical topics into practical guidance so you can make smarter decisions and drive meaningful results.",
                cta: "View All Insights",
                path: "/resources",
            },
        },

        // ── Contact Us — get in touch / office locations / connect + promo ──
        {
            title: "Contact Us",
            hasDropdown: true,
            layout: "info",
            columns: [
                {
                    heading: "Get In Touch",
                    variant: "rows",
                    items: [
                        { icon: MessageCircle, label: "Talk to an Expert", sub: "Share your goals and get guidance from our team.", path: "/contact" },
                        { icon: FileText, label: "Request a Consultation", sub: "Tell us about your needs and we'll connect you with the right expert.", path: "/contact" },
                        { icon: HelpCircle, label: "General Inquiries", sub: "Questions about solutions, services, or partnerships.", path: "/contact" },
                        { icon: Handshake, label: "Partnership Opportunities", sub: "Let's build innovative solutions together.", path: "/contact" },
                    ],
                },
                {
                    heading: "Office Locations",
                    variant: "rows",
                    items: [
                        { icon: MapPin, label: "Westlake, OH (Headquarters)", sub: "24900 Sperry Drive, Suite 300\nWestlake, OH 44145" },
                        { icon: MapPin, label: "Cleveland, OH", sub: "600 Superior Avenue East\nSuite 1400, Cleveland, OH 44114" },
                    ],
                    footerLink: { label: "View All Locations", path: "/why-us/locations" },
                },
                {
                    heading: "Connect",
                    variant: "rows",
                    items: [
                        { icon: Phone, label: "Call Us", sub: "(440) 471-5800", href: "tel:+14404715800" },
                        { icon: Mail, label: "Email Us", sub: "info@jjcsi.com", href: "mailto:info@jjcsi.com" },
                        { icon: FaLinkedinIn, label: "LinkedIn", sub: "Follow Us", href: "https://www.linkedin.com/company/jjc-systems" },
                    ],
                },
            ],
            footerLinks: [
                { icon: Compass, label: "How We Work", sub: "See our delivery process", path: "/why-us/our-approach" },
                { icon: Award, label: "Client Success", sub: "See how we help clients succeed", path: "/case-studies" },
                { icon: HelpCircle, label: "Frequently Asked Questions", sub: "Get quick answers", path: "/why-us/faq" },
            ],
            promo: {
                icon: MessageSquare,
                title: "Start a conversation.",
                text: "We're here to help you find the right technology solution for your business.",
                cta: "Let's Talk",
                path: "/contact",
            },
        },
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
        dropdownTimerRef.current = setTimeout(closeDropdown, 150);
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

    // Flattens a menu's desktop content shape into a uniform list of
    // { heading, items } groups for the mobile accordion drawer.
    const getMobileGroups = (menu) => {
        if (menu.title === "What We Do") {
            return menu.groups.flatMap((category) => category.subcategories || []);
        }
        if (menu.layout === "info") {
            const groups = [...menu.columns];
            if (menu.featuredCard) {
                groups.push({
                    heading: menu.featuredCard.heading,
                    items: [{ label: menu.featuredCard.title, path: menu.featuredCard.path }],
                });
            }
            if (menu.extraCard) {
                groups.push({
                    heading: menu.extraCard.heading,
                    items: [{ label: menu.extraCard.ctaLabel, path: menu.extraCard.path }],
                });
            }
            return groups;
        }
        return menu.groups;
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
                                            initial={{ opacity: 0, y: -10, clipPath: 'inset(100% 0% 0% 0%)' }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                clipPath: 'inset(0% 0% 0% 0%)',
                                                transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] }
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -10,
                                                clipPath: 'inset(100% 0% 0% 0%)',
                                                transition: { duration: 0.18, ease: [0.4, 0, 1, 1] }
                                            }}
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
                                                    ) : menu.layout === "info" ? (
                                                        <InfoDropdownContent
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
                                                    {getMobileGroups(menu).map((group, gIdx) => (
                                                        <div key={gIdx}>
                                                            <div className="mobile-sub-title">{group.heading}</div>
                                                            {group.items.map((item, iIdx) => (
                                                                item?.href ? (
                                                                    <a
                                                                        key={iIdx}
                                                                        href={item.href}
                                                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                                                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                                                                    >
                                                                        {item.label}
                                                                        <ArrowRight size={14} />
                                                                    </a>
                                                                ) : (
                                                                    <a
                                                                        key={iIdx}
                                                                        href={`/${item?.label}`}
                                                                        onClick={(e) => { e.preventDefault(); item?.path && handlePanelLinkClick(item.path); }}
                                                                    >
                                                                        {item?.label}
                                                                        <ArrowRight size={14} />
                                                                    </a>
                                                                )
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