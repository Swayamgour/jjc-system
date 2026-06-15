import React, { useRef } from 'react'
import { cases, Icons } from '../utils/data';
import { useInView , motion } from 'framer-motion';



function CaseStudies() {
    //   cases2

    const ref = useRef(null);
    const inView = useInView
        (ref, { once: true, margin: "-60px" });

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
            className="case-studies-section"
        >
            <div className="container">

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={
                        inView
                            ? "visible"
                            : "hidden"
                    }
                    className="case-studies-header"
                >
                    <div className="section-tag">
                        SUCCESS STORIES 
                    </div>
                </motion.div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate={
                        inView
                            ? "visible"
                            : "hidden"
                    }
                    className="case-studies-grid"
                >

                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            whileHover={{
                                scale: 1.02
                            }}
                            className="case-study-card"
                            style={{
                                background: item.color
                            }}
                        >

                            <div className="case-study-overlay" />

                            <div className="case-study-content">

                                <div className="case-study-tag">
                                    {item.tag}
                                </div>

                                <h3 className="case-study-title">
                                    {item.title}
                                </h3>

                                <p className="case-study-description">
                                    {item.desc}
                                </p>

                                <div className="case-study-link">
                                    Read Case Study  <Icons.Arrow />
                                </div>

                            </div>

                        </motion.div>
                    ))}

                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={
                        inView
                            ? "visible"
                            : "hidden"
                    }
                    className="case-studies-footer"
                >

                    <button className="industries-btn">
                        View All Case Studies  <Icons.Arrow />
                    </button>

                </motion.div>

            </div>
        </section>
    );
}

export default CaseStudies