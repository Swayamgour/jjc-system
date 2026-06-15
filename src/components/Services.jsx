import { cards } from '../utils/data';
import React, { useRef } from 'react'
// import { useInView } from 'framer-motion';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";

function Services() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };
    // cards

    const stagger = {
        visible: { transition: { staggerChildren: 0.1 } },
    };


    const ref = useRef(null);
    const inView = useInView
        (ref, { once: true, margin: "-60px" });

    return (
        <section ref={ref} className="services-section">
            <div className="container">

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="section-heading"
                >
                    <div className="section-tag">
                        MICROSOFT SERVICES
                    </div>

                    <h2 className="section-title">
                        End-to-end Microsoft Solutions
                    </h2>
                </motion.div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="services-grid"
                >
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            whileHover={{
                                y: -6,
                                boxShadow:
                                    "0 16px 40px rgba(37,99,235,0.12)"
                            }}
                            className="service-card"
                        >
                            <div className="service-card-icon">
                                {card.icon}
                            </div>

                            <div className="service-card-title">
                                {card.title}
                            </div>

                            <div className="service-card-desc">
                                {card.desc}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

export default Services