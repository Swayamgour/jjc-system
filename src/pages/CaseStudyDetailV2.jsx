import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Smile,
  PiggyBank,
  Briefcase,
  TrendingUp,
  Check,
  X,
  User,
  Building2,
  MapPin,
  Users,
  Calendar,
  Search,
  ClipboardList,
  Rocket,
  Settings,
  Headphones,
  Quote,
  ArrowRight,
  Download,
  Share2,
  Target,
  ShieldCheck,
  Lightbulb,
  Gauge,
} from "lucide-react";
import { useSplitText } from "../hooks/useSplitText";
import "./CaseStudyDetailV2.css";

/**
 * CaseStudyDetailV2
 * ------------------------------------------------------------------
 * ONE layout for case studies reached from BOTH "Browse By Industry"
 * and "Browse By Capability". Header/Footer excluded on purpose —
 * drop below your existing <Header /> and above <Footer />.
 *
 * Animation system matches the rest of the site (SectionRenderers.jsx):
 *   - useSplitText -> GSAP char-by-char reveal for big headings
 *   - Reveal + fadeUp/slideLeft/slideRight/stagger -> same scroll-in
 *     motion used by GridSection / BenefitsSection / ProcessSection
 *   - same whileHover lift + shadow used on grid-card / benefit-item
 *
 * Usage:
 *   import { mapCaseStudyData } from "../utils/mapCaseStudyData";
 *   const data = mapCaseStudyData(apiCaseStudy, "industry", parentIndustry);
 *   <CaseStudyDetailV2 data={data} />
 *
 *   // or from a capability page:
 *   const data = mapCaseStudyData(apiCaseStudy, "capability", parentCapability);
 *   <CaseStudyDetailV2 data={data} />
 *
 * Theme colors (data.theme.accent / accentDark / accentRgb) are applied
 * as CSS custom properties, same pattern as ServiceHero/ServicePage, so
 * a Healthcare case study and a Cybersecurity case study each pick up
 * their own accent automatically.
 */

// ---------------------------------------------------------------
// ICON REGISTRIES
// ---------------------------------------------------------------
const STAT_ICONS = { Smile, PiggyBank, Briefcase, TrendingUp, Users, Calendar };
const STEP_ICONS = { Search, ClipboardList, Rocket, Settings, Headphones, TrendingUp };
const CLIENT_ICONS = { User, Building2, MapPin, Users, Calendar };
const HIGHLIGHT_ICONS = { Target, ShieldCheck, Lightbulb, Gauge, TrendingUp, Users };

function Icon({ name, registry, size = 20, ...rest }) {
  const Cmp = registry[name] || registry.TrendingUp || Search;
  return <Cmp size={size} {...rest} />;
}

// ---------------------------------------------------------------
// SHARED ANIMATION VARIANTS (identical to SectionRenderers.jsx)
// ---------------------------------------------------------------
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

// ---------------------------------------------------------------
// REVEAL-ON-SCROLL WRAPPER (matches SectionRenderers.jsx conventions,
// supports the `stagger` boolean prop the same way)
// ---------------------------------------------------------------
function Reveal({ children, variants = fadeUp, className, style, as: Tag = motion.div, delay = 0, y, once = true, stagger: doStagger }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-60px" });
  const useVariants = doStagger ? stagger : variants;
  return (
    <Tag
      ref={ref}
      className={className}
      style={style}
      variants={useVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
}

// ---------------------------------------------------------------
// SPLIT-TEXT HEADING (GSAP char reveal, same hook used site-wide)
// ---------------------------------------------------------------
function SplitHeading({ as: Tag = "h2", className, children }) {
  const ref = useRef(null);
  useSplitText(ref);
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

const Arrow = ({ className = "" }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none">
    <motion.path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
  </svg>
);

function CsdFaqItem({ q, a, isOpen, onClick, index }) {
  return (
    <motion.div
      className={`csd2-faq-item ${isOpen ? "active" : ""}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="csd2-faq-question">
        <span>{q}</span>
        <motion.span
          className="csd2-faq-toggle"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          +
        </motion.span>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="csd2-faq-answer-wrap"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="csd2-faq-answer">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ---------------------------------------------------------------
// DEFAULT / DEMO DATA — mirrors the hospital case study reference
// ---------------------------------------------------------------
export const defaultCaseStudyData = {
  sourceType: "industry",
  theme: {
    accent: "#1e5fd9",
    accentDark: "#0b1e4d",
    accentLight: "#5b8def",
    accentSoft: "rgba(30,95,217,0.08)",
    accentRgb: "30, 95, 217",
  },
  breadcrumb: [
    { label: "Home", url: "/" },
    { label: "Client Success", url: "/client-success" },
    { label: "Healthcare", url: "/industries/healthcare" },
    { label: "Case Study", isActive: true },
  ],
  category: "HEALTHCARE CASE STUDY",
  title: "Modernizing IT Infrastructure for a Multi-location Hospital",
  description:
    "JJC Systems helped a leading healthcare provider modernize their legacy infrastructure, migrate to Microsoft 365 and Azure, and improve collaboration, security, and operational efficiency.",
  heroImage:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop",
  techBadges: ["Microsoft 365", "Azure", "SharePoint", "Power BI"],
  heroStats: [
    { icon: "Smile", value: "98%", label: "Client Satisfaction" },
    { icon: "PiggyBank", value: "40%", label: "Cost Savings" },
    { icon: "Briefcase", value: "150+", label: "Projects Delivered" },
  ],
  ctaLabel: "Schedule a Consultation",
  ctaLink: "/contact-us",
  clientInfo: [
    { icon: "User", label: "Client", value: "ABC Healthcare" },
    { icon: "Building2", label: "Industry", value: "Healthcare" },
    { icon: "MapPin", label: "Headquarters", value: "USA" },
    { icon: "Users", label: "Employees", value: "1,200+" },
    { icon: "Calendar", label: "Engagement Period", value: "6 Months" },
  ],
  overview: {
    tag: "PROJECT OVERVIEW",
    heading: "A Full-Scale Digital Transformation, Built Around Patient Care",
    intro:
      "ABC Healthcare operates 12 facilities across three states, serving over 400,000 patients a year. Growth had outpaced their IT foundation — every new clinic meant another disconnected server room, another support ticket queue, another risk. JJC Systems was brought in to rebuild that foundation from the ground up, without ever taking a single clinic offline during business hours.",
    highlights: [
      { icon: "Target", title: "Clear Objective", desc: "Replace 12 disconnected on-prem environments with one governed cloud platform." },
      { icon: "ShieldCheck", title: "Zero Downtime", desc: "Every migration phase was scheduled outside patient-facing hours." },
      { icon: "Lightbulb", title: "Staff-First Design", desc: "Workflows were rebuilt around how clinicians actually work, not the org chart." },
      { icon: "Gauge", title: "Measurable Impact", desc: "Every phase shipped with a before/after metric the client could track." },
    ],
  },
  challenge: {
    heading: "The Challenge",
    intro:
      "The organization was struggling with outdated infrastructure, siloed systems, and security vulnerabilities that affected efficiency and patient experience.",
    items: [
      "Legacy on-premise servers with frequent downtime",
      "High maintenance and operational costs",
      "Limited collaboration and remote access",
      "Security vulnerabilities and compliance risks",
      "Manual processes and reporting",
    ],
  },
  solution: {
    heading: "Our Solution",
    intro:
      "We designed and implemented a modern cloud solution using Microsoft technologies to transform their IT environment.",
    items: [
      "Migrated to Microsoft 365 and Azure",
      "Implemented Azure AD for secure access",
      "Deployed SharePoint for collaboration",
      "Automated workflows with Power Platform",
      "Real-time reporting with Power BI",
    ],
  },
  approach: {
    heading: "Our Approach",
    steps: [
      { number: "01", icon: "Search", title: "Assessment", desc: "Analyzed existing infrastructure and business needs." },
      { number: "02", icon: "ClipboardList", title: "Planning", desc: "Designed a secure and scalable cloud architecture." },
      { number: "03", icon: "Rocket", title: "Migration", desc: "Seamlessly migrated data and applications to the cloud." },
      { number: "04", icon: "Settings", title: "Implementation", desc: "Deployed Microsoft 365, Azure and integrated systems." },
      { number: "05", icon: "TrendingUp", title: "Testing", desc: "Performed rigorous testing for security and performance." },
      { number: "06", icon: "Headphones", title: "Training & Support", desc: "Provided user training and ongoing support." },
    ],
  },
  results: {
    heading: "Results & Impact",
    stats: [
      { icon: "TrendingUp", value: "60%", label: "Reduction in IT Issues" },
      { icon: "Building2", value: "40%", label: "Faster Reporting" },
      { icon: "Smile", value: "99.99%", label: "System Availability" },
      { icon: "PiggyBank", value: "30%", label: "Operational Cost Savings" },
      { icon: "Users", value: "200+", label: "Employees Trained" },
    ],
    closing: "",
  },
  technologies: {
    heading: "Technologies Used",
    items: [
      { name: "Microsoft 365" },
      { name: "Azure" },
      { name: "Azure AD" },
      { name: "SharePoint" },
      { name: "Power BI" },
      { name: "Power Platform" },
      { name: "Microsoft Intune" },
    ],
  },
  beforeAfter: {
    before: ["Manual Processes", "Limited Collaboration", "High Downtime", "Security Risks", "Multiple Disconnected Systems"],
    after: ["Automated Workflows", "Real-time Collaboration", "99.99% Uptime", "Enhanced Security", "Unified Cloud Platform"],
  },
  testimonial: {
    quote:
      "JJC Systems transformed our entire IT environment. Their team is professional, knowledgeable, and highly responsive. Our productivity and security have improved significantly.",
    author: "John Smith",
    role: "IT Director, ABC Healthcare",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  gallery: [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop",
  ],
  faqs: [
    {
      question: "How long did the full migration take?",
      answer:
        "The end-to-end engagement ran 6 months across all 12 facilities, rolled out in phased waves of 2-3 clinics at a time so clinical staff always had a stable environment to fall back on.",
    },
    {
      question: "Was there any disruption to patient care during migration?",
      answer:
        "No. Every cutover window was scheduled outside patient-facing hours, and each clinic ran a parallel fallback environment for the first 72 hours post-migration before the legacy systems were decommissioned.",
    },
    {
      question: "How was HIPAA compliance handled throughout the project?",
      answer:
        "Compliance was built into the architecture from day one — Azure AD Conditional Access, encrypted data at rest and in transit, and audit logging were configured before any patient data was migrated, not added afterward.",
    },
    {
      question: "What ongoing support does JJC Systems provide post-launch?",
      answer:
        "ABC Healthcare is on a managed support retainer covering 24/7 monitoring, quarterly security reviews, and a dedicated escalation path for clinical-hours incidents.",
    },
  ],
  resources: {
    heading: "Want the Full Breakdown?",
    description:
      "Get the complete case study as a PDF — architecture diagrams, migration timeline, and the full results breakdown included.",
    downloadLabel: "Download Full Case Study",
    downloadLink: "#",
    secondaryLabel: "Share This Story",
    secondaryLink: "#",
  },
  moreStories: [
    { category: "FINANCE", title: "Streamlining Operations with Microsoft 365", link: "#", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop" },
    { category: "MANUFACTURING", title: "Improving Efficiency with Power Platform", link: "#", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" },
    { category: "EDUCATION", title: "Enhancing Collaboration in Higher Education", link: "#", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop" },
    { category: "RETAIL", title: "Zero Trust Rollout Across 40 Retail Locations", link: "#", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop" },
  ],
};

// ---------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------
export default function CaseStudyDetailV2({ data = defaultCaseStudyData }) {
  const {
    theme,
    breadcrumb,
    category,
    title,
    description,
    heroImage,
    techBadges,
    heroStats,
    ctaLabel,
    ctaLink,
    clientInfo,
    overview,
    challenge,
    solution,
    approach,
    results,
    technologies,
    beforeAfter,
    testimonial,
    gallery,
    faqs,
    resources,
    moreStories,
  } = data;

  const [openFaq, setOpenFaq] = useState(0);

  const themeVars = {
    "--csd2-accent": theme?.accent,
    "--csd2-accent-dark": theme?.accentDark,
    "--csd2-accent-light": theme?.accentLight,
    "--csd2-accent-soft": theme?.accentSoft,
    "--csd2-accent-rgb": theme?.accentRgb,
  };

  return (
    <main className="csd2-page" style={themeVars}>
      {/* ---------------- HERO ---------------- */}
      <section className="csd2-hero">
        <div className="csd2-container csd2-hero-grid">
          <div className="csd2-hero-left">
            {breadcrumb?.length > 0 && (
              <motion.nav
                className="csd2-breadcrumb"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {breadcrumb.map((b, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <span className="csd2-crumb-sep">/</span>}
                    {b.isActive ? (
                      <span className="csd2-crumb-current">{b.label}</span>
                    ) : (
                      <a href={b.url || "#"} className="csd2-crumb-link">
                        {b.label}
                      </a>
                    )}
                  </React.Fragment>
                ))}
              </motion.nav>
            )}

            {category && (
              <motion.span
                className="csd2-eyebrow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {category}
              </motion.span>
            )}

            <SplitHeading as="h1" className="csd2-title">
              {title}
            </SplitHeading>

            {description && (
              <motion.p
                className="csd2-desc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {description}
              </motion.p>
            )}

            {techBadges?.length > 0 && (
              <Reveal stagger className="csd2-tech-row" delay={0.2}>
                {techBadges.map((t, i) => (
                  <motion.span className="csd2-tech-pill" variants={fadeUp} key={i}>
                    {t}
                  </motion.span>
                ))}
              </Reveal>
            )}

            <motion.a
              className="csd2-cta-btn"
              href={ctaLink || "#"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              whileHover={{ scale: 1.04, boxShadow: "0 14px 30px rgba(var(--csd2-accent-rgb, 30,95,217), 0.45)" }}
              whileTap={{ scale: 0.97 }}
            >
              {ctaLabel} <Arrow />
            </motion.a>
          </div>

          <div className="csd2-hero-right">
            {heroImage && (
              <motion.div
                className="csd2-hero-image-wrap"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
              >
                <img src={heroImage} alt={title} loading="lazy" />
              </motion.div>
            )}
            {heroStats?.length > 0 && (
              <Reveal stagger className="csd2-hero-stats" delay={0.4}>
                {heroStats.map((s, i) => (
                  <motion.div
                    className="csd2-hero-stat"
                    variants={fadeUp}
                    key={i}
                    whileHover={{ y: -4, scale: 1.03 }}
                  >
                    <span className="csd2-hero-stat-icon">
                      <Icon name={s.icon} registry={STAT_ICONS} size={18} />
                    </span>
                    <div>
                      <strong>{s.value}</strong>
                      <p>{s.label}</p>
                    </div>
                  </motion.div>
                ))}
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ---------------- CLIENT INFO BAR ---------------- */}
      {clientInfo?.length > 0 && (
        <section className="csd2-container">
          <Reveal stagger className="csd2-client-bar">
            {clientInfo.map((c, i) => (
              <motion.div className="csd2-client-item" variants={fadeUp} key={i}>
                <span className="csd2-client-icon">
                  <Icon name={c.icon} registry={CLIENT_ICONS} size={18} />
                </span>
                <div>
                  <p className="csd2-client-label">{c.label}</p>
                  <p className="csd2-client-value">{c.value}</p>
                </div>
              </motion.div>
            ))}
          </Reveal>
        </section>
      )}

      {/* ---------------- PROJECT OVERVIEW ---------------- */}
      {overview && (
        <section className="csd2-container csd2-section">
          <Reveal className="csd2-overview">
            {overview.tag && (
              <motion.span
                className="csd2-section-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                {overview.tag}
              </motion.span>
            )}
            {overview.heading && (
              <SplitHeading as="h2" className="csd2-h2 csd2-overview-heading">
                {overview.heading}
              </SplitHeading>
            )}
            {overview.intro && <p className="csd2-overview-intro">{overview.intro}</p>}
          </Reveal>

          {overview.highlights?.length > 0 && (
            <Reveal stagger className="csd2-highlight-grid">
              {overview.highlights.map((h, i) => (
                <motion.div
                  className="csd2-highlight-card"
                  variants={fadeUp}
                  key={i}
                  whileHover={{ y: -6, boxShadow: "0 16px 36px rgba(16,24,60,0.1)" }}
                >
                  <span className="csd2-highlight-icon">
                    <Icon name={h.icon} registry={HIGHLIGHT_ICONS} size={22} />
                  </span>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </motion.div>
              ))}
            </Reveal>
          )}
        </section>
      )}

      {/* ---------------- CHALLENGE / SOLUTION ---------------- */}
      <section className="csd2-container csd2-section">
        <div className="csd2-two-col">
          <Reveal variants={slideLeft} className="csd2-card csd2-card--challenge">
            <h3 className="csd2-card-title">{challenge?.heading}</h3>
            {challenge?.intro && <p className="csd2-card-intro">{challenge.intro}</p>}
            <Reveal stagger as={motion.ul} className="csd2-mark-list">
              {challenge?.items?.map((item, i) => (
                <motion.li variants={fadeUp} key={i}>
                  <span className="csd2-mark csd2-mark--x">
                    <X size={13} strokeWidth={3} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </Reveal>
          </Reveal>

          <Reveal variants={slideRight} className="csd2-card csd2-card--solution" delay={0.1}>
            <h3 className="csd2-card-title">{solution?.heading}</h3>
            {solution?.intro && <p className="csd2-card-intro">{solution.intro}</p>}
            <Reveal stagger as={motion.ul} className="csd2-mark-list">
              {solution?.items?.map((item, i) => (
                <motion.li variants={fadeUp} key={i}>
                  <span className="csd2-mark csd2-mark--check">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </Reveal>
          </Reveal>
        </div>
      </section>

      {/* ---------------- OUR APPROACH ---------------- */}
      {approach?.steps?.length > 0 && (
        <section className="csd2-container csd2-section">
          <Reveal className="csd2-section-head csd2-section-head--center">
            <SplitHeading as="h2" className="csd2-h2">
              {approach.heading}
            </SplitHeading>
          </Reveal>
          <Reveal stagger className="csd2-approach-row">
            {approach.steps.map((step, i) => (
              <motion.div className="csd2-approach-step" variants={fadeUp} key={i}>
                <motion.div
                  className="csd2-approach-circle"
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon name={step.icon} registry={STEP_ICONS} size={22} />
                </motion.div>
                <span className="csd2-approach-number">{step.number}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                {i < approach.steps.length - 1 && <span className="csd2-approach-arrow">→</span>}
              </motion.div>
            ))}
          </Reveal>
        </section>
      )}

      {/* ---------------- RESULTS & IMPACT ---------------- */}
      {results?.stats?.length > 0 && (
        <section className="csd2-container csd2-section csd2-results">
          <Reveal className="csd2-section-head csd2-section-head--center">
            <SplitHeading as="h2" className="csd2-h2">
              {results.heading}
            </SplitHeading>
          </Reveal>
          <Reveal stagger className="csd2-results-grid">
            {results.stats.map((s, i) => (
              <motion.div
                className="csd2-result-card"
                variants={fadeUp}
                key={i}
                whileHover={{ y: -8, scale: 1.03, boxShadow: "0 20px 40px rgba(16,24,60,0.12)" }}
              >
                <span className="csd2-result-icon">
                  <Icon name={s.icon} registry={STAT_ICONS} size={20} />
                </span>
                <strong>{s.value}</strong>
                <p>{s.label}</p>
              </motion.div>
            ))}
          </Reveal>
          {results.closing && <p className="csd2-p csd2-closing">{results.closing}</p>}
        </section>
      )}

      {/* ---------------- TECHNOLOGIES + BEFORE/AFTER ---------------- */}
      <section className="csd2-container csd2-section">
        <div className="csd2-two-col">
          {technologies?.items?.length > 0 && (
            <Reveal variants={slideLeft} className="csd2-card">
              <h3 className="csd2-card-title">{technologies.heading}</h3>
              <Reveal stagger className="csd2-tech-grid">
                {technologies.items.map((t, i) => (
                  <motion.span
                    className="csd2-tech-chip"
                    variants={fadeUp}
                    key={i}
                    whileHover={{ y: -3, scale: 1.05 }}
                  >
                    {t.name}
                  </motion.span>
                ))}
              </Reveal>
            </Reveal>
          )}

          {(beforeAfter?.before?.length > 0 || beforeAfter?.after?.length > 0) && (
            <Reveal variants={slideRight} className="csd2-card" delay={0.1}>
              <h3 className="csd2-card-title">Before vs After</h3>
              <div className="csd2-before-after">
                <div>
                  <p className="csd2-ba-label">Before</p>
                  <Reveal stagger as={motion.ul} className="csd2-mark-list csd2-mark-list--tight">
                    {beforeAfter.before.map((b, i) => (
                      <motion.li variants={fadeUp} key={i}>
                        <span className="csd2-mark csd2-mark--x">
                          <X size={12} strokeWidth={3} />
                        </span>
                        {b}
                      </motion.li>
                    ))}
                  </Reveal>
                </div>
                <div>
                  <p className="csd2-ba-label">After</p>
                  <Reveal stagger as={motion.ul} className="csd2-mark-list csd2-mark-list--tight">
                    {beforeAfter.after.map((a, i) => (
                      <motion.li variants={fadeUp} key={i}>
                        <span className="csd2-mark csd2-mark--check">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {a}
                      </motion.li>
                    ))}
                  </Reveal>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ---------------- TESTIMONIAL ---------------- */}
      {testimonial && (
        <section className="csd2-container csd2-section">
          <Reveal className="csd2-testimonial">
            <div className="csd2-testimonial-content">
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Quote className="csd2-quote-icon" size={28} />
              </motion.div>
              <p>{testimonial.quote}</p>
              <div className="csd2-testimonial-author">
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
            {testimonial.image && (
              <div className="csd2-testimonial-image">
                <img src={testimonial.image} alt={testimonial.author} loading="lazy" />
              </div>
            )}
          </Reveal>
        </section>
      )}

      {/* ---------------- PROJECT GALLERY ---------------- */}
      {gallery?.length > 0 && (
        <section className="csd2-container csd2-section">
          <Reveal className="csd2-section-head csd2-section-head--center">
            <SplitHeading as="h2" className="csd2-h2">
              Project Gallery
            </SplitHeading>
          </Reveal>
          <Reveal stagger className="csd2-gallery-grid">
            {gallery.map((img, i) => (
              <motion.div
                className="csd2-gallery-item"
                variants={fadeUp}
                key={i}
                whileHover={{ scale: 1.03 }}
              >
                <img src={img} alt="" loading="lazy" />
              </motion.div>
            ))}
          </Reveal>
        </section>
      )}

      {/* ---------------- FAQ ---------------- */}
      {faqs?.length > 0 && (
        <section className="csd2-container csd2-section">
          <Reveal className="csd2-section-head csd2-section-head--center">
            <SplitHeading as="h2" className="csd2-h2">
              Frequently Asked Questions
            </SplitHeading>
          </Reveal>
          <div className="csd2-faq-grid">
            {faqs.map((item, i) => (
              <CsdFaqItem
                key={i}
                q={item.question}
                a={item.answer}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                index={i}
              />
            ))}
          </div>
        </section>
      )}

      {/* ---------------- RESOURCES / DOWNLOAD ---------------- */}
      {resources && (
        <section className="csd2-container">
          <Reveal className="csd2-resources">
            <div>
              <h3>{resources.heading}</h3>
              {resources.description && <p>{resources.description}</p>}
            </div>
            <div className="csd2-resources-actions">
              {resources.downloadLabel && (
                <motion.a
                  href={resources.downloadLink || "#"}
                  className="csd2-cta-btn"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Download size={16} /> {resources.downloadLabel}
                </motion.a>
              )}
              {resources.secondaryLabel && (
                <motion.a
                  href={resources.secondaryLink || "#"}
                  className="csd2-resources-secondary"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Share2 size={16} /> {resources.secondaryLabel}
                </motion.a>
              )}
            </div>
          </Reveal>
        </section>
      )}

      {/* ---------------- MORE SUCCESS STORIES ---------------- */}
      {moreStories?.length > 0 && (
        <section className="csd2-container csd2-section">
          <Reveal className="csd2-section-head csd2-section-head--center">
            <SplitHeading as="h2" className="csd2-h2">
              More Success Stories
            </SplitHeading>
          </Reveal>
          <Reveal stagger className="csd2-more-grid">
            {moreStories.map((m, i) => (
              <motion.a
                className="csd2-more-card"
                href={m.link}
                variants={fadeUp}
                key={i}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(16,24,60,0.12)" }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="csd2-more-image">
                  <img src={m.image} alt="" loading="lazy" />
                </div>
                <div className="csd2-more-body">
                  {m.category && <span className="csd2-more-category">{m.category}</span>}
                  <h4>{m.title}</h4>
                  <span className="csd2-more-link">
                    View Case Study <Arrow />
                  </span>
                </div>
              </motion.a>
            ))}
          </Reveal>
        </section>
      )}

      {/* ---------------- BOTTOM CTA ---------------- */}
      <section className="csd2-cta-banner">
        <motion.div
          className="csd2-container csd2-cta-inner"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Reveal variants={slideLeft}>
            <h3>Ready to Achieve Similar Results?</h3>
            <p>Let's discuss how we can help you modernize your IT infrastructure and drive growth.</p>
          </Reveal>
          <Reveal variants={slideRight}>
            <motion.a
              href={ctaLink || "/contact-us"}
              className="csd2-cta-white-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              {ctaLabel} <Arrow />
            </motion.a>
          </Reveal>
        </motion.div>
      </section>
    </main>
  );
}