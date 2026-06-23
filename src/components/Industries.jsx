import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react'
import { Icons, industries } from '../utils/data';
import { useSplitText } from '../hooks/useSplitText';



function Industries() {
    //    industries

    const ref = useRef(null);
     const inView = useInView(ref, { once: true, amount: 0.2 });

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.1 } },
    };


    const textRef = useRef(null)


    useSplitText(textRef)

    return (
        <section
            ref={ref}
            className="industries-section"
        >
            <div className="container">

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="industries-header"
                >
                    <div className="section-tag">
                        INDUSTRIES WE SERVE
                    </div>

                    <h2 ref={textRef} className="industries-title">
                        Industry Expertise. Real Impact.
                    </h2>
                </motion.div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="industries-grid"
                >
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            whileHover={{ scale: 1.08 }}
                            className="industry-card"
                        >
                            <div className="industry-icon">
                                {industry.icon}
                            </div>

                            <div className="service-card-title">
                                {industry.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="industries-footer"
                >
                    <button className="industries-btn">
                        View All Industries  <Icons.Arrow />
                    </button>
                </motion.div>

            </div>
        </section>
    );
}

export default Industries