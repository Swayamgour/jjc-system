import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react'
import { Icons } from '../utils/data';



function CTASection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    const slideRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    const slideLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    // Icons

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
                        Ready to Transform Your Business
                        <br />
                        with Microsoft Solutions?
                    </h2>

                    <p className="cta-description">
                        Let's build the future together.
                    </p>
                </motion.div>

                <motion.div
                    variants={slideRight}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="cta-actions"
                >

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="cta-btn-primary"
                    >
                        Schedule Consultation
                        <Icons.Arrow />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="cta-btn-secondary"
                    >
                        Request Assessment
                    </motion.button>

                </motion.div>

            </div>

        </section>
    );
}

export default CTASection