import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react'
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { clientLogos } from '../utils/data';

function ClientLogos() {
    const logos = ["Microsoft", "Coca-Cola", "Nestlé", "SAP", "Siemens", "Roche", "Danone", "Unilever"];

    const ref = useRef(null);
     const inView = useInView(ref, { once: true, amount: 0.2 });

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
            className="clients-section"
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
                    className="clients-header"
                >
                    <div className="section-tag">
                        <GoArrowLeft style={{ fontSize: '16px' }} />  TRUSTED BY INDUSTRY LEADERS <GoArrowRight style={{ fontSize: '16px' }} />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 8 }}
                    className="clients-marquee"
                >
                    <div className="clients-track">
                        {[...clientLogos, ...clientLogos].map((logo, index) => (
                            <div
                                key={index}
                                className="client-logo-card"
                            >
                                <img src={logo.image} alt={logo.name} />
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default ClientLogos