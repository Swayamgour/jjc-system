import { useInView, motion, useSpring } from 'framer-motion';
import React, { useRef } from 'react'
import { items } from '../utils/data';
import { useSplitText } from '../hooks/useSplitText';



function Resources() {
    //    items

    const ref = useRef(null);
     const inView = useInView(ref, { once: true, amount: 0.2 });




    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.1 } },
    };

    // const textRef = useRef(null)

    // useSpring(textRef)

    const textRef = useRef(null)
    useSplitText(textRef)


    return (
        <section
            ref={ref}
            className="resources-section"
        >
            <div className="container">

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="resources-header"
                >
                    <div className="section-tag">
                        RESOURCES & INSIGHTS
                    </div>

                    <h2 ref={textRef} className="resources-title">
                        Learn. Explore. Stay Ahead.
                    </h2>
                </motion.div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="resources-grid"
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            whileHover={{
                                y: -6,
                                boxShadow:
                                    "0 16px 40px rgba(37,99,235,0.1)"
                            }}
                            className="resource-card"
                        >
                            <div className="resource-icon">
                                {item.icon}
                            </div>

                            <div className="service-card-title">
                                {item.title}
                            </div>

                            <div style={{marginBottom:'5px'}} className="service-card-desc">
                                {item.sub}
                            </div>

                            <div className="resource-link">
                                {item.link}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

export default Resources