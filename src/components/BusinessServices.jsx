import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { businessServices } from "../utils/data";
import { useSplitText } from "../hooks/useSplitText";

function BusinessServices() {

    const ref = useRef(null);
    const titleRef = useRef(null);
    useSplitText(titleRef);

    const inView = useInView(ref, {
        once: true,
        amount: 0.2
    });



    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section ref={ref} className="business-services-section">

            <div className="container">

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="section-heading"
                >
                    <div className="section-tag">
                        BUSINESS OUTCOMES
                    </div>

                    <h2
                        ref={titleRef}
                        className="section-title"
                    >
                        Services That Drive Business Growth
                    </h2>

                    {/* <p className="section-description">
                        Transform operations, improve efficiency and unlock innovation with Microsoft-powered solutions.
                    </p> */}
                </motion.div>

                <div className="business-services-grid">

                    {businessServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 30
                            }}
                            animate={inView ? {
                                opacity: 1,
                                y: 0
                            } : {}}
                            transition={{
                                delay: index * 0.08
                            }}
                            className="business-service-card "
                        >
                            <span className="solution-icon">
                                {service.icon}
                            </span>

                            <h3 className="service-card-title">{service.title}</h3>

                            <p className="service-card-desc">{service.desc}</p>
                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default BusinessServices;