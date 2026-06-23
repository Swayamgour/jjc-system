import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react'
import { Icons } from '../utils/data';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { useSplitText } from '../hooks/useSplitText';



function DeliveryProcess() {
    const steps = [
        { num: "01", title: "Assess", desc: "We evaluate your current environment and business goals." },
        { num: "02", title: "Design", desc: "We design the right solution architecture tailored to your needs." },
        { num: "03", title: "Implement", desc: "Our experts implement with best practices and quality." },
        { num: "04", title: "Optimize", desc: "We validate data and make smarter, faster decisions." },
        { num: "05", title: "Manage", desc: "We provide ongoing support to drive user adoption." },
    ];

    const ref = useRef(null);
     const inView = useInView(ref, { once: true, amount: 0.2 });

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };
    const stagger = {
        visible: { transition: { staggerChildren: 0.1 } },
    };

    const slideRight = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const textRef = useRef(null)

    useSplitText(textRef)




    return (
        <section
            ref={ref}
            className="approach-section"
        >
            <div className="container approach-container">

                {/* Left */}

                <div className="approach-content">

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={
                            inView
                                ? "visible"
                                : "hidden"
                        }
                    >
                        {/* <div style={{textAlign:'start'}} className="section-tag">
                            <GoArrowLeft style={{ fontSize: '16px' }} />  OUR APPROACH <GoArrowRight style={{ fontSize: '16px' }} />
                        </div> */}

                        <h2 ref={textRef} className="approach-title">
                            A Proven Approach to Deliver Value.
                        </h2>
                    </motion.div>

                    <div className="approach-timeline">

                        <div className="timeline-line" />

                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            animate={
                                inView
                                    ? "visible"
                                    : "hidden"
                            }
                        >
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="timeline-item"
                                >

                                    <div className="timeline-number">
                                        {step.num}
                                    </div>

                                    <div className="timeline-content">

                                        <div className="timeline-title">
                                            {step.title}
                                        </div>

                                        <div className="timeline-description">
                                            {step.desc}
                                        </div>

                                    </div>

                                </motion.div>
                            ))}
                        </motion.div>

                    </div>

                </div>

                {/* Right */}

                <motion.div
                    variants={slideRight}
                    initial="hidden"
                    animate={
                        inView
                            ? "visible"
                            : "hidden"
                    }
                    className="expertise-card"
                >

                    <div className="expertise-tag">
                        MICROSOFT EXPERTISE
                    </div>

                    <h3 className="expertise-title">
                        Backed By Microsoft.
                        Built For Impact.
                    </h3>

                    <p className="expertise-description">
                        Our team holds deep expertise across Microsoft technologies
                        and stays ahead with continuous training and certifications.
                    </p>

                    <div className="expertise-stats">

                        {[
                            {
                                value: "100+",
                                label: "Microsoft Certifications",
                            },
                            {
                                value: "150+",
                                label: "Successful Projects",
                            },
                            {
                                value: "98%",
                                label: "Client Satisfaction",
                            },
                            {
                                value: "10+",
                                label: "Years of Experience",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="expertise-stat"
                            >

                                <div className="expertise-icon">
                                    🏆
                                </div>

                                <div>

                                    <div className="expertise-value">
                                        {item.value}
                                    </div>

                                    <div className="expertise-label">
                                        {item.label}
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="expertise-btn"
                    >
                        Our Microsoft Expertise
                        <Icons.Arrow />
                    </motion.button>

                </motion.div>

            </div>
        </section>
    );
}

export default DeliveryProcess