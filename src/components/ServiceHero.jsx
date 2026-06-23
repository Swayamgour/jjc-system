import { motion } from "framer-motion";
import { ArrowBigDown } from "lucide-react";

function ServiceHero({ d }) {
    return (
        <section className="service-hero">
            {/* Breadcrumb */}
            <div className="container-hero breadcrumb-bar">
                <motion.div
                    className="breadcrumb"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {d.breadcrumb.map((item, i) => (
                        <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            {i > 0 && <span className="breadcrumb-sep">/</span>}
                            <span className={i === d.breadcrumb.length - 1 ? "breadcrumb-current" : "breadcrumb-link"}>
                                {item}
                            </span>
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Text content grid */}
            <div className="container-hero service-hero-grid">
                <div>
                    <motion.div
                        className="service-hero-tag"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {d.badge}
                    </motion.div>

                    <motion.h1
                        className="service-hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {d.title}
                    </motion.h1>

                    <motion.p
                        className="service-hero-desc"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {d.description}
                    </motion.p>

                    <motion.p
                        className="service-hero-desc"
                        style={{ marginBottom: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {d.subDescription}
                    </motion.p>

                    <motion.div
                        className="service-hero-actions"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.button
                            className="service-btn-primary"
                            whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(0,0,0,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Schedule a Consultation <ArrowBigDown />
                        </motion.button>
                        <motion.button
                            className="service-btn-secondary"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {d.exploreLabel || "Explore Our Services"}
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="service-hero-badges"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        {d.heroBadges.map((b, i) => (
                            <motion.div
                                key={i}
                                className="service-hero-badge"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + i * 0.08 }}
                            >
                                {/* {CheckCircle("rgba(255,255,255,0.85)")} {b} */}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Right column intentionally empty — image is now positioned absolutely below */}
                <div />
            </div>

            {/* Background image — absolute, covers right side of whole section */}
            <div className="service-hero-image-wrap">
                <motion.div
                    className="service-hero-image"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    {d.heroImage ? (
                        <motion.img
                            src={d.heroImage}
                            alt={d.title}
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.8 }}
                        />
                    ) : (
                        <div style={{ color: "rgba(255,255,255,0.5)" }}>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                                <rect x="8" y="14" width="48" height="32" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
                                <path d="M24 50h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    )}
                </motion.div>

                {(d.floatingIcons || []).map((f, i) => (
                    <motion.div
                        key={i}
                        className="service-float-icon"
                        style={f.position}
                        initial={{ opacity: 0, y: -20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 + i * 0.12, type: "spring", stiffness: 200 }}
                        whileHover={{ y: -8, scale: 1.12, rotate: 5 }}
                    >
                        <motion.img
                            src={f.icon}
                            alt={f.label}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 30 + i * 5, repeat: Infinity, ease: "linear" }}
                        />
                        {f.label && <span className="service-float-label">{f.label}</span>}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default ServiceHero;