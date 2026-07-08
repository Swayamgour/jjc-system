import React, { useRef } from 'react'
import { useInView, motion } from 'framer-motion';
import { useSplitText } from '../hooks/useSplitText';
import { Icons } from '../utils/data';

function Overview() {
    const points = [
        "Improving workplace productivity",
        "Simplifying business processes",
        "Strengthening data security",
        "Enabling smarter decision-making",
        "Creating scalable technology environments",
    ];

    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });
    const titleRef = useRef(null);
    useSplitText(titleRef);

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.08 } },
    };

    return (
        <section ref={ref} className="overview-section">
            <div className="container">

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="section-heading"
                >
                    <div className="section-tag">WHY CHOOSE JJC SYSTEMS</div>

                    <h2 ref={titleRef} className="section-title">
                        Why Choose JJC Systems for Microsoft Consulting?
                    </h2>

                    <p className="section-description">
                        As a trusted Microsoft solutions provider, we help businesses implement,
                        optimize, and manage Microsoft technologies that align with their goals.
                        Our experts support organizations across Microsoft 365, Azure, Dynamics 365,
                        Power Platform, Business Central, SharePoint, Power BI, and Microsoft security
                        solutions.
                    </p>

                    <p className="section-description">
                        Businesses often face challenges such as disconnected systems, inefficient
                        workflows, limited data visibility, and increasing security risks. Therefore,
                        JJC Systems provides strategic Microsoft Consulting Services that connect
                        technology with business objectives.
                    </p>
                </motion.div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="overview-points-grid"
                >
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            className="overview-point-item"
                        >
                            <span className="overview-point-icon">
                                <Icons.Check />
                            </span>
                            <span>{point}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="overview-footnote"
                >
                    Moreover, our Microsoft consulting experts combine technical knowledge with
                    industry experience to deliver solutions that support long-term growth.
                </motion.p>

            </div>
        </section>
    );
}

export default Overview
