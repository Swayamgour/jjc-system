import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react'
import { Icons } from '../utils/data';




function Challenges() {
    const items = [
        { icon: <Icons.Disconnect />, title: "Disconnected Systems", sub: "and data silos" },
        { icon: <Icons.Productivity />, title: "Low Productivity", sub: "and manual processes" },
        { icon: <Icons.Lock />, title: "Security Risks", sub: "and compliance gaps" },
        { icon: <Icons.Dollar />, title: "High IT Costs", sub: "and inflated infrastructure" },
        { icon: <Icons.Chart />, title: "Lack of Insights", sub: "for better decisions" },
        { icon: <Icons.Rocket />, title: "Slow Pace", sub: "of digital transformation" },
    ];

    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.1 } },
    };

    return (
        <section
            ref={ref}
            className="challenges-section"
        >
            <div className="container">

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="challenges-header"
                >
                    <div className="section-tag">
                        BUSINESS CHALLENGES WE SOLVE
                    </div>

                    <h2 className="challenges-title">
                        Helping You Overcome What's Holding You Back
                    </h2>
                </motion.div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="challenges-grid"
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            whileHover={{ scale: 1.04 }}
                            className={`challenge-card ${index !== items.length - 1 ? "with-divider" : ""
                                }`}
                        >
                            <div className="challenge-icon">
                                {item.icon}
                            </div>

                            <div className="challenge-title">
                                {item.title}
                            </div>

                            <div className="challenge-subtitle">
                                {item.sub}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

export default Challenges