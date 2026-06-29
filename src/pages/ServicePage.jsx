import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./ServicePage.css";
import ServiceHero from "../components/ServiceHero";
import { useSplitText } from "../hooks/useSplitText";

// ============================================================
// ENHANCED ANIMATION VARIANTS
// ============================================================
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeDown = {
  hidden: { opacity: 0, y: -36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const slideUp = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const floatAnimation = {
  float: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
};

const pulseGlow = {
  pulse: {
    scale: [1, 1.05, 1],
    boxShadow: [
      "0 0 20px rgba(var(--accent-rgb), 0.3)",
      "0 0 40px rgba(var(--accent-rgb), 0.6)",
      "0 0 20px rgba(var(--accent-rgb), 0.3)"
    ],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }
};

function Reveal({
  children,
  variants = fadeUp,
  className,
  style,
  stagger: useStagger,
  margin = "-60px",
  as: Tag = motion.div,
  delay = 0,
  once = true
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin });
  return (
    <Tag
      ref={ref}
      className={className}
      style={style}
      variants={useStagger ? stagger : variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
}

// ============================================================
// ANIMATED ICONS
// ============================================================
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

const CheckSm = (color) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <motion.path
      d="M2 7l3.5 3.5L12 4"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
  </svg>
);

const CheckCircle = (color) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <motion.circle
      cx="8"
      cy="8"
      r="7"
      stroke={color}
      strokeWidth="1.4"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    />
    <motion.path
      d="M5 8l2 2 4-4"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
    />
  </svg>
);

// ============================================================
// FAQ ACCORDION ITEM
// ============================================================
function FaqItem({ q, a, isOpen, onClick, index }) {
  return (
    <motion.div
      className={`faq-item ${isOpen ? "active" : ""}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="faq-question">
        <span>{q}</span>
        <motion.span
          className="faq-toggle"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          +
        </motion.span>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="faq-answer-wrap"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="faq-answer">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ============================================================
// SECTION RENDERERS
// ============================================================

function GridSection({ s, accent }) {
  const cols = s?.columns || 4;
  const titleRef = useRef(null);
  useSplitText(titleRef);
  return (
    <section className={`grid-section ${s?.bg === "section" ? "bg-section" : "bg-white"}`}>
      <div className="container">
        <Reveal className="section-header-center">
          <motion.div
            className="section-tag"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {s?.tag}
          </motion.div>
          <h2 ref={titleRef} className="section-title">{s?.title}</h2>
          {s?.subtitle && <p className="section-subtitle">{s?.subtitle}</p>}
        </Reveal>
        <Reveal stagger className={`grid-cards grid-cols-${cols}`}>
          {s?.items?.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`grid-card ${s?.alignLeft ? "align-left" : ""}`}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="grid-card-icon"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.div>
              <div className="grid-card-title">{item.title}</div>
              <div className="grid-card-desc">{item.desc}</div>
            </motion.div>
          ))}
        </Reveal>
        {s?.footerLink && (
          <Reveal>
            <div className="grid-footer">
              <motion.button
                className="text-link-btn"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.95 }}
              >
                {s?.footerLink} <Arrow />
              </motion.button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function IconStripSection({ s, accent }) {
  const cols = s?.columns || 6;
  const titleRef = useRef(null);
  useSplitText(titleRef);
  return (
    <section className="grid-section bg-white">
      <div className="container">
        <Reveal className="section-header-center">
          <motion.div
            className="section-tag"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {s?.tag}
          </motion.div>
          <h2 ref={titleRef} className="section-title">{s?.title}</h2>
          {s?.subtitle && <p className="section-subtitle">{s?.subtitle}</p>}
        </Reveal>
        <Reveal stagger className="icon-strip-grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {s?.items?.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="icon-strip-card"
            >
              <motion.div
                className="icon-strip-icon"
                whileHover={{ rotate: [0, -15, 15, 0], scale: 1.15 }}
                transition={{ duration: 0.6 }}
              >
                {item.icon}
              </motion.div>
              <div className="icon-strip-label">{item.label}</div>
              {item.desc && <div className="icon-strip-desc">{item.desc}</div>}
            </motion.div>
          ))}
        </Reveal>
        {s?.footerLink && (
          <Reveal>
            <div className="grid-footer">
              <motion.button
                className="text-link-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {s?.footerLink} <Arrow />
              </motion.button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function OverviewSection({ s }) {
  const titleRef = useRef(null);
  useSplitText(titleRef);

  return (
    <section className="overview-section">
      <div className="container overview-grid">
        <Reveal variants={slideLeft}>
          {s?.image ? (
            <motion.div
              className="overview-visual"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src={s?.image}
                alt={s?.brandLabel || s?.title}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          ) : (
            <div className="overview-visual">
              <motion.div
                className="overview-visual-core"
                animate={{
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.15, rotate: 0 }}
              >
                <motion.span
                  style={{ fontSize: 36 }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {s?.coreIcon || "🧩"}
                </motion.span>
              </motion.div>
              {(s?.orbitIcons || []).map((icon, i) => {
                const pos = [{ top: 36, left: 46 }, { top: 36, right: 46 }, { bottom: 70, left: 46 }, { bottom: 70, right: 46 }][i] || {};
                return (
                  <motion.div
                    key={i}
                    className="overview-orbit-icon"
                    style={pos}
                    initial={{ opacity: 0, scale: 0.7, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    animate={{
                      y: [0, -5, 0],
                      transition: { duration: 2 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }
                    }}
                  >
                    {icon}
                  </motion.div>
                );
              })}
              {s?.brandLabel && (
                <motion.div
                  className="overview-brand-label"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {s?.brandLabel}
                </motion.div>
              )}
            </div>
          )}
        </Reveal>
        <Reveal variants={slideRight}>
          <motion.h2
            className="overview-content-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {s?.title}
          </motion.h2>
          {s?.paragraphs?.map((p, i) => (
            <motion.p
              key={i}
              className="overview-paragraph"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              {p}
            </motion.p>
          ))}
          <div className="overview-checklist">
            {s?.checklist.map((item, i) => (
              <motion.div
                key={i}
                className="overview-check-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                whileHover={{ x: 5 }}
              >
                {CheckSm("var(--accent)")} {item}
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSection({ s }) {
  const cols = s?.steps?.length;
  const titleRef = useRef(null);
  useSplitText(titleRef);
  return (
    <section className="process-section">
      <div className="container">
        <Reveal className="section-header-center">
          <motion.div
            className="section-tag"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {s?.tag}
          </motion.div>
          <h2 ref={titleRef} className="section-title">{s?.title}</h2>
          {s?.subtitle && <p className="section-subtitle">{s?.subtitle}</p>}
        </Reveal>
        <Reveal stagger className="process-track" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          <motion.div
            className="process-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
          {s?.steps?.map((step, i) => (
            <motion.div key={i} variants={fadeUp} className="process-step">
              <motion.div
                className="process-number"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
              >
                {step.num}
              </motion.div>
              <motion.div
                className="process-step-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                {step.title}
              </motion.div>
              <motion.div
                className="process-step-desc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {step.desc}
              </motion.div>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function BenefitsSection({ s }) {
  const titleRef = useRef(null);
  useSplitText(titleRef);
  return (
    <section className="benefits-section">
      <div className="container">
        <Reveal className="section-header-center">
          <motion.div
            className="section-tag"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {s?.tag}
          </motion.div>
          <h2 ref={titleRef} className="section-title">{s?.title}</h2>
          {s?.subtitle && <p className="section-subtitle">{s?.subtitle}</p>}
        </Reveal>
        <Reveal stagger className="benefits-grid">
          {s?.items?.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.06, y: -6 }}
              whileTap={{ scale: 0.95 }}
              className="benefit-item"
            >
              <motion.div
                className="benefit-icon"
                whileHover={{ rotate: [0, -20, 20, 0], scale: 1.15 }}
                transition={{ duration: 0.6 }}
              >
                {item.icon}
              </motion.div>
              <div className="benefit-title">{item.title}</div>
              <div className="benefit-desc">{item.desc}</div>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function SplitPanelSection({ s }) {
  return (
    <section className="split-panel-section">
      <div className="container">
        <motion.div
          className="split-panel"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Reveal variants={slideLeft} className="split-panel-visual">
            <motion.div
              style={{ textAlign: "center" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="split-panel-visual-icon"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.4 }}
              >
                {s?.visualIcon || "☁️"}
              </motion.div>
              {s?.miniIcons && (
                <div className="split-panel-mini-icons">
                  {s?.miniIcons?.map((icon, i) => (
                    <motion.div
                      key={i}
                      className="split-mini-icon"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {icon}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </Reveal>
          <Reveal variants={slideRight}>
            <motion.div
              className="split-panel-tag"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {s?.tag}
            </motion.div>
            <h2 className="split-panel-title">{s?.title}</h2>
            <p className="split-panel-desc">{s?.desc}</p>
            <div className="split-panel-list">
              {s?.list.map((item, i) => (
                <motion.div
                  key={i}
                  className="split-panel-list-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  whileHover={{ x: 5 }}
                >
                  {CheckSm("var(--accent)")} {item}
                </motion.div>
              ))}
            </div>
            <motion.button
              className="split-panel-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              {s?.buttonLabel} <Arrow />
            </motion.button>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}

function CaseStudiesSection({ s }) {
  return (
    <section className="case-studies-section">
      <div className="container">
        <Reveal className="section-header-center">
          <motion.div
            className="section-tag"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {s?.tag}
          </motion.div>
          <h2 className="section-title">{s?.title}</h2>
          {s?.subtitle && <p className="section-subtitle">{s?.subtitle}</p>}
        </Reveal>
        <Reveal stagger className="case-studies-grid">
          {s?.items?.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.03, y: -8 }}
              whileTap={{ scale: 0.97 }}
              className="case-study-card"
              style={{ background: c.color }}
            >
              <div className="case-study-overlay" />
              <div className="case-study-content">
                <motion.div
                  className="case-study-tag"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {c.tag}
                </motion.div>
                <h3 className="case-study-title">{c.title}</h3>
                {c.stat && (
                  <motion.div
                    className="case-study-stat"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 300 }}
                  >
                    {c.stat}
                  </motion.div>
                )}
                {c.statLabel && <div className="case-study-stat-label">{c.statLabel}</div>}
                {!c.stat && <p className="case-study-description">{c.desc}</p>}
                <motion.div
                  className="case-study-link"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  Read Case Study <Arrow />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </Reveal>
        <Reveal>
          <div className="case-studies-footer">
            <motion.button
              className="text-link-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Case Studies <Arrow />
            </motion.button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqSection({ s }) {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <section className="faq-section">
      <div className="container">
        <Reveal className="section-header-center">
          <motion.div
            className="section-tag"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {s?.tag}
          </motion.div>
          <h2 className="section-title">{s?.title}</h2>
        </Reveal>
        <Reveal stagger className="faq-grid">
          {s?.items?.map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <FaqItem
                q={item.q}
                a={item.a}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                index={i}
              />
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function CtaSection({ s }) {
  return (
    <section className="cta-section">
      <motion.div
        className="container cta-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Reveal variants={slideLeft} className="cta-content">
          <motion.h2
            className="cta-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {s?.title}
          </motion.h2>
          <motion.p
            className="cta-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {s?.description}
          </motion.p>
        </Reveal>
        <Reveal variants={slideRight} className="cta-actions">
          <motion.button
            className="cta-btn-primary"
            whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            {s?.primaryLabel || "Schedule a Consultation"} <Arrow />
          </motion.button>
          <motion.button
            className="cta-btn-secondary"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.95 }}
          >
            {s?.secondaryLabel || "Request an Assessment"}
          </motion.button>
        </Reveal>
      </motion.div>
    </section>
  );
}

function ContactFormSection({ s }) {
  const titleRef = useRef(null);
  useSplitText(titleRef);

  return (
    <section className="split-panel-section">
      <div className="container">

        <Reveal className="section-header-center">
          {s?.tag && <div className="section-tag">{s?.tag}</div>}
          <h2 ref={titleRef} className="section-title">
            {s?.title}
          </h2>
          {s?.subtitle && (
            <p className="section-subtitle">{s?.subtitle}</p>
          )}
        </Reveal>

        <div className="split-panel">

          <Reveal variants={slideLeft}>
            <div className="contact-form-card">

              <h3 className="split-panel-title">
                {s?.form?.title}
              </h3>

              <form className="contact-form">

                <div className="form-grid">

                  <div className="form-group">
                    <label>{s?.form?.fields?.fullName.label}</label>
                    <input
                      type="text"
                      placeholder={s?.form?.fields?.fullName.placeholder}
                    />
                  </div>

                  <div className="form-group">
                    <label>{s?.form?.fields?.companyName.label}</label>
                    <input
                      type="text"
                      placeholder={s?.form?.fields?.companyName.placeholder}
                    />
                  </div>

                  <div className="form-group">
                    <label>{s?.form?.fields?.email.label}</label>
                    <input
                      type="email"
                      placeholder={s?.form?.fields?.email.placeholder}
                    />
                  </div>

                  <div className="form-group">
                    <label>{s?.form?.fields?.phone.label}</label>
                    <input
                      type="text"
                      placeholder={s?.form?.fields?.phone.placeholder}
                    />
                  </div>

                  <div className="form-group full">
                    <label>{s?.form?.fields?.service.label}</label>

                    <select>
                      <option>
                        {s?.form?.fields?.service.placeholder}
                      </option>

                      {s?.form?.fields?.service.options?.map((item, i) => (
                        <option key={i}>{item}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group full">
                    <label>{s?.form?.fields?.message.label}</label>

                    <textarea
                      rows={6}
                      placeholder={s?.form?.fields?.message.placeholder}
                    />
                  </div>

                </div>

                <button className="split-panel-btn">
                  {s?.form?.buttonText}
                  <Arrow />
                </button>

              </form>

            </div>
          </Reveal>

          <Reveal variants={slideRight}>
            <div className="contact-side-image">

              <img
                src={s?.image}
                alt={s?.title}
              />

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function ContactInfoSection({ s }) {
  const titleRef = useRef(null);
  useSplitText(titleRef);

  return (
    <section className="benefits-section">

      <div className="container">

        <Reveal className="section-header-center">

          {s?.tag && (
            <div className="section-tag">
              {s?.tag}
            </div>
          )}

          <h2 ref={titleRef} className="section-title">
            {s?.title}
          </h2>

          {s?.subtitle && (
            <p className="section-subtitle">
              {s?.subtitle}
            </p>
          )}

        </Reveal>

        <Reveal stagger className="benefits-grid">

          <motion.div variants={fadeUp} className="benefit-item">
            <div className="benefit-icon">
              {s?.icons?.phone}
            </div>

            <div className="benefit-title">
              Phone
            </div>

            <div className="benefit-desc">
              {s?.contact?.phone}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="benefit-item">
            <div className="benefit-icon">
              {s?.icons?.email}
            </div>

            <div className="benefit-title">
              Email
            </div>

            <div className="benefit-desc">
              {s?.contact?.email}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="benefit-item">
            <div className="benefit-icon">
              {s?.icons?.location}
            </div>

            <div className="benefit-title">
              Address
            </div>

            <div className="benefit-desc">
              {s?.contact?.address}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="benefit-item">
            <div className="benefit-icon">
              {s?.icons?.clock}
            </div>

            <div className="benefit-title">
              Business Hours
            </div>

            <div className="benefit-desc">
              {s?.contact?.hours}
            </div>
          </motion.div>

        </Reveal>

      </div>
    </section>
  );
}

const SECTION_MAP = {
  grid: GridSection,
  iconStrip: IconStripSection,
  overview: OverviewSection,
  process: ProcessSection,
  benefits: BenefitsSection,
  splitPanel: SplitPanelSection,
  caseStudies: CaseStudiesSection,
  faq: FaqSection,

  // contactForm: ContactFormSection,
  // contactInfo: ContactInfoSection,


  cta: CtaSection,
};

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function ServicePage({ data }) {
  const d = data;

  // console.log(d)

  const themeVars = {
    "--svc-accent": d.theme.accent,
    "--svc-accent-dark": d.theme.accentDark,
    "--svc-accent-light": d.theme.accentLight,
    "--svc-accent-soft": d.theme.accentSoft,
    "--svc-hero-start": d.theme.heroStart,
    "--svc-hero-end": d.theme.heroEnd,
    "--accent-rgb": d.theme.accentRgb || "37, 99, 235",
  };

  console.log(d)

  return (
    <div className="service-page" style={themeVars}>
      {/* HERO */}

      <ServiceHero d={d} />


      {/* DYNAMIC SECTION STACK */}
      {d?.sections?.map((s, i) => {
        const Renderer = SECTION_MAP[s?.type];
        if (!Renderer) return null;
        return <Renderer key={i} s={s} />;
      })}
    </div>
  );
}