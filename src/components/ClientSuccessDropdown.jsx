import { useRef } from "react";
import {
    ArrowRight,
    ArrowUpRight,
    Cloud,
    Share2,
    BarChart3,
    LayoutGrid,
    ShieldCheck,
    Building2,
} from "lucide-react";
import { useSectionAnimation } from "../hooks/useSectionAnimation";


const CAPABILITY_ICONS = {
    "Cloud & Infrastructure": Cloud,
    "SharePoint & Modern Work": Share2,
    "Data & Business Intelligence": BarChart3,
    "Business Applications": LayoutGrid,
    "Cybersecurity & Compliance": ShieldCheck,
};

export default function ClientSuccessDropdown({ menu, handlePanelLinkClick }) {
    const sectionRef = useRef(null);
    const titleRef = useRef(null); // promo heading -> SplitType char reveal
    const descRef = useRef(null); // promo paragraph
    const listRef = useRef(null); // wraps the 4 groups: industry / capability / featured / footer
    const outroRef = useRef(null); // footer links row

    useSectionAnimation({ sectionRef, titleRef, descRef, listRef, outroRef });

    const industryCol = menu.columns.find((c) => c.heading === "Browse By Industry") || menu.columns[0];
    const capabilityCol = menu.columns.find((c) => c.heading === "Browse By Capability") || menu.columns[1];

    return (
        <div className="csdd-layout" ref={sectionRef}>
            {/* ---------------- MAIN AREA ---------------- */}
            <section className="csdd-main">
                <div className="csdd-groups" ref={listRef}>
                    {/* ---- Browse By Industry (text-link list) ---- */}
                    {industryCol && (
                        <div className="csdd-group">
                            <h3 className="csdd-heading">
                                {industryCol.icon && (
                                    <span className="csdd-heading-icon">
                                        <industryCol.icon size={16} />
                                    </span>
                                )}
                                {industryCol.heading}
                            </h3>
                            <div className="csdd-industry-list">
                                {industryCol.items.map((item, i) => (
                                    <button
                                        key={item.label + i}
                                        className="csdd-industry-link"
                                        onClick={() => handlePanelLinkClick(item.path)}
                                    >
                                        <span className="csdd-industry-bar" />
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ---- Browse By Capability (icon-chip card list) ---- */}
                    {capabilityCol && (
                        <div className="csdd-group">
                            <h3 className="csdd-heading">
                                {capabilityCol.icon && (
                                    <span className="csdd-heading-icon">
                                        <capabilityCol.icon size={16} />
                                    </span>
                                )}
                                {capabilityCol.heading}
                            </h3>
                            <div className="csdd-capability-list">
                                {capabilityCol.items.map((item, i) => {
                                    const ItemIcon = CAPABILITY_ICONS[item.label] || Building2;
                                    return (
                                        <button
                                            key={item.label + i}
                                            className="csdd-capability-card"
                                            onClick={() => handlePanelLinkClick(item.path)}
                                        >
                                            <span className="csdd-capability-icon">
                                                <ItemIcon size={16} />
                                            </span>
                                            <span className="csdd-capability-label">{item.label}</span>
                                            <ArrowRight size={14} className="csdd-capability-arrow" />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* ---- Featured Success Story ---- */}
                    {menu.featuredCard && (
                        <div className="csdd-group csdd-featured-group">
                            <h3 className="csdd-heading">
                                {menu.featuredCard.icon && (
                                    <span className="csdd-heading-icon">
                                        <menu.featuredCard.icon size={16} />
                                    </span>
                                )}
                                {menu.featuredCard.heading}
                            </h3>

                            <button
                                className="csdd-featured-card"
                                onClick={() => handlePanelLinkClick(menu.featuredCard.path)}
                            >
                                {menu.featuredCard.image && (
                                    <span className="csdd-featured-image">
                                        <img src={menu.featuredCard.image} alt={menu.featuredCard.title} />
                                    </span>
                                )}
                                <span className="csdd-featured-body">
                                    <strong>{menu.featuredCard.title}</strong>
                                    <p>{menu.featuredCard.description}</p>
                                    <span className="csdd-featured-cta">
                                        {menu.featuredCard.ctaLabel} <ArrowRight size={13} />
                                    </span>
                                </span>
                            </button>
                        </div>
                    )}
                </div>

                {/* ---- Footer links ---- */}
                {menu.footerLinks && (
                    <div className="csdd-footer" ref={outroRef}>
                        {menu.footerLinks.map((link) => {
                            const LinkIcon = link.icon;
                            return (
                                <button
                                    key={link.label}
                                    className="csdd-footer-link"
                                    onClick={() => handlePanelLinkClick(link.path)}
                                >
                                    <span className="csdd-footer-icon">
                                        <LinkIcon size={18} />
                                    </span>
                                    <span className="csdd-footer-text">
                                        <strong>{link.label}</strong>
                                        <small>{link.sub}</small>
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                )}
            </section>

            {/* ---------------- RIGHT PROMO PANEL ---------------- */}
            {menu.promo && (
                <aside className="csdd-promo">
                    <div className="csdd-promo-icon">
                        <menu.promo.icon size={26} />
                    </div>
                    <h3 ref={titleRef}>{menu.promo.title}</h3>
                    <p ref={descRef}>{menu.promo.text}</p>
                    <button className="csdd-promo-cta" onClick={() => handlePanelLinkClick(menu.promo.path)}>
                        {menu.promo.cta} <ArrowUpRight size={16} />
                    </button>
                </aside>
            )}
        </div>
    );
}