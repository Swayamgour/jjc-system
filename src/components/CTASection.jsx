import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react'
import { Icons } from '../utils/data';
import { useHomeSection } from '../hooks/useHomeSection';
import { useNavigate } from 'react-router';

const DEFAULT_TITLE = "Ready to Transform Your Business with Microsoft Solutions?";
const DEFAULT_DESCRIPTION = "Let's build the future together.";
const DEFAULT_PRIMARY_LABEL = "Schedule Consultation";
const DEFAULT_SECONDARY_LABEL = "Request Assessment";

function CTASection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const { section, isPublished } = useHomeSection("cta", ref);

    const slideRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    const slideLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    const navigate = useNavigate()

    if (!isPublished) return null;

    return (
        <section ref={ref} className="cta-section">

            <div className="container cta-container">

                <motion.div
                    variants={slideLeft}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="cta-content"
                >
                    <h2 className="cta-title">
                        {section?.title || DEFAULT_TITLE}
                    </h2>

                    <p className="cta-description">
                        {section?.description || DEFAULT_DESCRIPTION}
                    </p>
                </motion.div>

                <motion.div
                    variants={slideRight}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="cta-actions"
                >

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="cta-btn-primary"
                        onClick={() => navigate('/Contact')}
                    >
                        {section?.primaryLabel || DEFAULT_PRIMARY_LABEL}
                        <Icons.Arrow />
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="cta-btn-secondary"
                        onClick={() => navigate('/Contact')}
                    >
                        {section?.secondaryLabel || DEFAULT_SECONDARY_LABEL}
                    </motion.div>

                </motion.div>

            </div>

        </section>
    );
}

export default CTASection
