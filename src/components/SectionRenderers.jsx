import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useSplitText } from "../hooks/useSplitText";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import contact from '../assets/contact.png'
import * as Icons from "lucide-react";
import ContactNewForm from "../pages/ContactNewForm";

// ============================================================
// ANIMATION VARIANTS
// ============================================================
const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeDown = {
    hidden: { opacity: 0, y: -36 },
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
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1
        }
    }
};

// ============================================================
// UTILITY COMPONENTS
// ============================================================
function Reveal({ children, variants = fadeUp, className, style, as: Tag = motion.div, delay = 0, once = true }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once, margin: "-60px" });
    return (
        <Tag
            ref={ref}
            className={className}
            style={style}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay }}
        >
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

// ============================================================
// SECTION COMPONENTS
// ============================================================

export function GridSection({ s }) {
    const cols = s?.columns || 4;
    const titleRef = useRef(null);
    useSplitText(titleRef);

    // Helper function to get column class
    const getColumnClass = () => {
        switch (cols) {
            case 2: return 'grid-cols-2';
            case 3: return 'grid-cols-3';
            case 4: return 'grid-cols-4';
            case 5: return 'grid-cols-5';
            case 6: return 'grid-cols-6';
            case 7: return 'grid-cols-7';
            default: return 'grid-cols-4';
        }
    };

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

                <Reveal stagger className={`grid-cards ${getColumnClass()}`}>
                    {s?.items?.map((item, i) => {
                        const Icon = Icons[item?.icon];
                        return (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className="grid-card align-left"
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                                    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {Icon && (
                                    <motion.div
                                        className="grid-card-icon"
                                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Icon size={32} />
                                    </motion.div>
                                )}
                                <div className="grid-card-title">{item?.title}</div>
                                {item?.subtitle && <div className="grid-card-sub-title">{item?.subtitle}</div>}
                                {item?.description && <div className="grid-card-desc">{item?.description}</div>}
                                {item?.summary && <div className="grid-card-desc">{item?.summary}</div>}
                            </motion.div>
                        );
                    })}
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

export function IconStripSection({ s }) {
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
                {/* import * as Icons from "lucide-react"; */}


                <Reveal
                    stagger
                    className="icon-strip-grid"
                    style={{
                        gridTemplateColumns: `repeat(${cols}, 1fr)`,
                    }}
                >
                    {s?.items?.map((item, i) => {
                        const Icon = Icons[item?.icon] || Icons.CircleCheck;

                        return (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{
                                    scale: 1.08,
                                    y: -4,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                className="icon-strip-card"
                            >
                                <motion.div
                                    className="icon-strip-icon"
                                    // whileHover={{
                                    //     rotate: [0, -15, 15, 0],
                                    //     scale: 1.15,
                                    // }}
                                    transition={{
                                        duration: 0.6,
                                    }}
                                >

                                    {/* <div className="grid-card-icon"> */}
                                    <Icon size={32} />

                                    {/* </div> */}

                                </motion.div>

                                <div className="icon-strip-label">
                                    {item?.label || item?.title || item?.industry}
                                </div>

                                {(item?.description || item?.desc || item?.example) && (
                                    <div className="icon-strip-desc">
                                        {item?.description || item?.desc || item?.example}
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </Reveal>
                {/* {s?.footerLink && (
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
                )} */}
            </div>
        </section>
    );
}

export function OverviewSection({ s }) {
    // console.log(s)
    const titleRef = useRef(null);
    useSplitText(titleRef);

    return (
        <section className="overview-section">
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

                    {/* {s?.subtitle && <p className="section-subtitle">{s?.paragraphs}</p>} */}
                </Reveal>




                <div className=" overview-grid">
                    <Reveal variants={slideLeft}>
                        <motion.div
                            className="overview-visual"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                        >
                            <motion.img
                                src={s?.image?.url || "https://res.cloudinary.com/sakshichak1/image/upload/v1783428245/jjc-systems/svmexbexebg6ny70okcm.png"}
                                alt={s?.brandLabel || s?.title}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </motion.div>

                    </Reveal>
                    <Reveal variants={slideRight}>

                        <div className="overview-checklist">
                            {s?.checklist?.map((item, i) => (
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
            </div>

        </section>
    );
}

export function ProcessSection({ s }) {
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
                                {step.step}
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

export function BenefitsSection({ s }) {
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
                    {s?.items?.map((item, i) => {
                        // const Icon = Icons[item?.icon];
                        const Icon = Icons[item?.icon] || Icons.CircleCheck;

                        return (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{
                                    scale: 1.06,
                                    y: -6,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                className="benefit-item"
                            >
                                <motion.div
                                    className="benefit-icon"
                                    whileHover={{
                                        rotate: [0, -20, 20, 0],
                                        scale: 1.15,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                    }}
                                >
                                    {Icon && <Icon size={32} />}
                                </motion.div>

                                <div className="benefit-title">
                                    {item?.title}
                                </div>

                                <div className="benefit-desc">
                                    {item?.description || item?.desc}
                                </div>
                            </motion.div>
                        );
                    })}
                </Reveal>
            </div>
        </section>
    );
}

export function SplitPanelSection({ s }) {
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

                    </Reveal>
                </motion.div>
            </div>
        </section>
    );
}

export function CaseStudiesSection({ s }) {
    // console.log(s)
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
                    {/* {console.log(s)} */}
                    {s?.items?.map((c, i) => {
                        const Icon = Icons[c?.icon] || Icons.CircleCheck;
                        return (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{ scale: 1.03, y: -8 }}
                                whileTap={{ scale: 0.97 }}
                                className="case-study-card"
                                style={{ background: s.themeVars?.["--svc-accent"] }}
                            >
                                <div className="case-study-overlay" />
                                <div className="case-study-content">
                                    <motion.div
                                        className="case-study-tag"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                    >
                                        {c.tag || c?.icon}
                                    </motion.div>
                                    <h3 className="case-study-title">{c.title}</h3>
                                    {/* {c.stat && (
                                        <motion.div
                                            className="case-study-stat"
                                            initial={{ scale: 0.5 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 300 }}
                                        >
                                            {c.stat}
                                        </motion.div>
                                    )} */}
                                    {/* <div className="case-study-stat-label">{c?.statLabel || c?.subtitle}</div> */}
                                    <p className="case-study-description">{c?.desc || c?.description}</p>
                                    <motion.div
                                        className="case-study-link"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        Read Case Study <Arrow />
                                    </motion.div>
                                </div>
                            </motion.div>
                        )
                    })}
                </Reveal>

            </div>
        </section>
    );
}

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

export function FaqSection({ s }) {
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
                                q={item?.question}
                                a={item?.answer}
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

export function CtaSection({ s }) {
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

export function ContactFormSection({ s }) {
    console.log(s)
    const titleRef = useRef(null);
    useSplitText(titleRef);

    return (
       <ContactNewForm />
    );
}



export function ContactInfoSection({ s }) {
    const titleRef = useRef(null);
    useSplitText(titleRef);

    return (
        <section className="benefits-section">
            <div className="container">

                <Reveal className="section-header-center">

                    {s?.tag && (
                        <div className="section-tag">
                            {s.tag}
                        </div>
                    )}

                    <h2 ref={titleRef} className="section-title">
                        {s?.title}
                    </h2>

                    {s?.subtitle && (
                        <p className="section-subtitle">
                            {s.subtitle}
                        </p>
                    )}

                </Reveal>

                <Reveal stagger className="benefits-grid">

                    {/* Phone */}

                    <motion.div variants={fadeUp} className="benefit-item">

                        <div className="benefit-icon">
                            <Phone size={26} />
                        </div>

                        <div className="benefit-title">
                            Phone
                        </div>

                        <div className="benefit-desc">
                            {s?.phone}
                        </div>

                    </motion.div>

                    {/* Email */}

                    <motion.div variants={fadeUp} className="benefit-item">

                        <div className="benefit-icon">
                            <Mail size={26} />
                        </div>

                        <div className="benefit-title">
                            Email
                        </div>

                        <div className="benefit-desc">
                            {s?.email}
                        </div>

                    </motion.div>

                    {/* Address */}

                    <motion.div variants={fadeUp} className="benefit-item">

                        <div className="benefit-icon">
                            <MapPin size={26} />
                        </div>

                        <div className="benefit-title">
                            Address
                        </div>

                        <div className="benefit-desc">
                            {s?.address}
                        </div>

                    </motion.div>

                    {/* Business Hours */}

                    <motion.div variants={fadeUp} className="benefit-item">

                        <div className="benefit-icon">
                            <Clock size={26} />
                        </div>

                        <div className="benefit-title">
                            Business Hours
                        </div>

                        <div className="benefit-desc">
                            {s?.hours}
                        </div>

                    </motion.div>

                </Reveal>

                {/* {(s?.responseTitle || s?.responseText) && (

                    <Reveal>

                        <div className="contact-response-box">

                            <h3>{s?.responseTitle}</h3>

                            <p>{s?.responseText}</p>

                        </div>

                    </Reveal>

                )} */}

            </div>
        </section>
    );
}

export function OfficeLocationsSection({ s }) {
    const titleRef = useRef(null);
    useSplitText(titleRef);

    return (
        <section className="grid-section bg-white">
            <div className="container">

                <Reveal className="section-header-center">
                    <h2 ref={titleRef} className="section-title">
                        {s?.title}
                    </h2>
                </Reveal>

                <Reveal stagger className="benefits-grid">

                    {s?.items?.map((office, index) => (

                        <motion.div
                            key={index}
                            variants={fadeUp}
                            className="benefit-item"
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                            }}
                        >

                            <div className="benefit-title">
                                {office.city}, {office.country}
                            </div>

                            <div className="benefit-desc">
                                <p>{office.address}</p>

                                <p>{office.phone}</p>

                                <p>{office.email}</p>
                            </div>

                        </motion.div>

                    ))}

                </Reveal>

            </div>
        </section>
    );
}



