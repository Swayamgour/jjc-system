import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUp, ChevronRight, Shield, Lock, FileText, CheckCircle, Mail, Phone } from "lucide-react";
import "./LegalPage.css";
import ServiceHero from "./ServiceHero";

// ============================================================
// LEGAL PAGE - Follows the same pattern as BasePage
// ============================================================

export default function LegalPage({ data, pageType = "legal", key }) {
  const [activeId, setActiveId] = useState(data?.sections?.[0]?.id);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [key]);

  // Theme variables from data
  // const themeVars = {
  //   "--legal-accent": data?.theme?.accent || "#2563EB",
  //   "--legal-accent-dark": data?.theme?.accentDark || "#1D4ED8",
  //   "--legal-accent-light": data?.theme?.accentLight || "#4F8CFF",
  //   "--legal-accent-soft": data?.theme?.accentSoft || "rgba(37,99,235,0.08)",
  //   "--legal-hero-start": data?.theme?.heroStart || "#021B4E",
  //   "--legal-hero-end": data?.theme?.heroEnd || "#0B5ED7",
  // };

  const themeVars = {
    "--svc-accent": data?.theme?.accent || "#2563EB",
    "--svc-accent-dark": data?.theme?.accentDark || "#1D4ED8",
    "--svc-accent-light": data?.theme?.accentLight || "#4F8CFF",
    "--svc-accent-soft": data?.theme?.accentSoft || "rgba(37,99,235,0.08)",
    "--svc-hero-start": data?.theme?.heroStart || "#03153c",
    "--svc-hero-end": data?.theme?.heroEnd || "#0c5de8",
    "--accent-rgb": data?.theme?.accentRgb || "37,99,235",
  };

  console.log(data)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  // Get icon based on section heading
  const getSectionIcon = (heading) => {
    const iconMap = {
      "Agreement to Our Legal Terms": <Shield size={20} />,
      "Information Collection and Use": <FileText size={20} />,
      "Privacy Policy": <Lock size={20} />,
      "Security": <Shield size={20} />,
      "Returns": <FileText size={20} />,
      "Refunds": <FileText size={20} />,
    };
    return iconMap[heading] || <FileText size={20} />;
  };

  // Build sections array - same pattern as BasePage
  const sections = [
    // Overview section (if exists)
    data?.overview && {
      type: "overview",
      ...data.overview,
    },

    // Legal sections from data
    ...(data?.sections?.map((s) => ({
      type: "legal-section",
      ...s,
    })) || []),

    // Contact section
    data?.cta && {
      type: "cta",
      ...data.cta,
    },
  ].filter(Boolean);

  // Section renderer map - similar to BasePage
  const SECTION_MAP = {
    "legal-section": LegalSection,
    overview: OverviewSection,
    cta: CTASection,
  };

  // Prepare data for ServiceHero - matches the expected format
  const heroData = {
    title: data?.title || "Legal",
    badge: data?.badge || "LEGAL",
    hero: {
      description: data?.intro || "",
      subDescription: data?.updated ? `Last updated: ${data.updated}` : "",
      badges: data?.badges || [],
    },
    breadcrumb: data?.breadcrumb || ["Home", "Legal", data?.title || "Legal"],
    theme: data?.theme,
  };

  return (
    <div className="legal-page" ref={sectionRef} style={themeVars}>
      {/* Hero Section - Using ServiceHero */}
      <ServiceHero d={heroData} />

      {/* Main Body */}
      <section className="legal-body">
        <div className="legal-body-inner">
          {/* Table of Contents */}
          <aside className="legal-toc">
            <div className="legal-toc-sticky">
              <div className="legal-toc-label">On this page</div>
              <nav className="legal-toc-nav">
                {data?.sections?.map((s) => (
                  <button
                    key={s.id}
                    className={`legal-toc-link ${activeId === s.id ? "active" : ""}`}
                    onClick={() => scrollTo(s.id)}
                  >
                    <span className="legal-toc-icon">{getSectionIcon(s.heading)}</span>
                    <span className="legal-toc-text">{s.heading}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="legal-content" ref={contentRef}>
            {sections.map((section, index) => {
              const Renderer = SECTION_MAP[section.type];
              if (!Renderer) return null;
              return <Renderer key={index} s={section} index={index} />;
            })}

            {/* Contact Box - Similar to BasePage's CTA */}
            <div className="legal-contact-box">
              <div className="legal-contact-box-content">
                <h3>Have Questions About This Policy?</h3>
                <p>
                  Reach out to our team any time at{" "}
                  <a href="mailto:info@jjcsystems.com">info@jjcsystems.com</a>{" "}
                  or call <a href="tel:+18883290625">+1 (888) 329-0625</a>.
                </p>
                <div className="legal-contact-actions">
                  <Link to="/contact" className="legal-contact-btn primary">
                    Contact Us
                  </Link>
                  <Link to="/open-a-ticket" className="legal-contact-btn secondary">
                    Open a Support Ticket
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top */}
      
    </div>
  );
}

// ============================================================
// SECTION RENDERERS
// ============================================================

// ---------- Legal Section ----------
function LegalSection({ s, index }) {
  return (
    <motion.div
      id={s.id}
      className="legal-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.05 }}
    >
      <h2 className="legal-section-heading">
        <span className="legal-section-number">{String(index + 1).padStart(2, "0")}</span>
        {s.heading}
      </h2>

      {s.paragraphs?.map((p, pi) => (
        <p key={pi} className="legal-paragraph">{p}</p>
      ))}

      {s.list?.length > 0 && (
        <ul className="legal-list">
          {s.list.map((item, li) => (
            <li key={li}>
              <span className="legal-list-bullet"></span>
              {item}
            </li>
          ))}
        </ul>
      )}

      {s.address && (
        <div className="legal-address-box">
          <div className="legal-address">
            <strong>{s.address.company}</strong>
            <span>Attn: {s.address.attn}</span>
            <span>{s.address.rma}</span>
            <span>{s.address.street}</span>
            <span>{s.address.apt}</span>
            <span>{s.address.city}, {s.address.state} {s.address.zip}</span>
            <span>{s.address.country}</span>
          </div>
        </div>
      )}

      {s.note && (
        <div className="legal-note">
          <span className="legal-note-icon">ℹ️</span>
          <p>{s.note}</p>
        </div>
      )}

      {s.contact && (
        <div className="legal-contact-info">
          <p><Phone size={16} /> <strong>Phone:</strong> <a href={`tel:${s.contact.phone}`}>{s.contact.phone}</a></p>
          <p><Mail size={16} /> <strong>Email:</strong> <a href={`mailto:${s.contact.email}`}>{s.contact.email}</a></p>
        </div>
      )}
    </motion.div>
  );
}

// ---------- Overview Section ----------
function OverviewSection({ s }) {
  return (
    <motion.div
      className="legal-overview"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      {s.tag && <span className="legal-section-tag">{s.tag}</span>}
      {s.title && <h2 className="legal-section-title">{s.title}</h2>}
      {s.subtitle && <p className="legal-section-subtitle">{s.subtitle}</p>}
      {s.paragraphs?.map((p, i) => (
        <p key={i} className="legal-paragraph">{p}</p>
      ))}
      {s.checklist?.length > 0 && (
        <ul className="legal-list">
          {s.checklist.map((item, i) => (
            <li key={i}>
              <span className="legal-list-bullet"></span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

// ---------- CTA Section ----------
function CTASection({ s }) {
  return (
    <motion.div
      className="legal-cta-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <h3>{s.title}</h3>
      <p>{s.description}</p>
      <div className="legal-cta-actions">
        <Link to="/contact" className="legal-cta-btn primary">
          {s.primaryLabel || "Contact Us"}
        </Link>
        <Link to="/open-a-ticket" className="legal-cta-btn secondary">
          {s.secondaryLabel || "Open a Ticket"}
        </Link>
      </div>
    </motion.div>
  );
}