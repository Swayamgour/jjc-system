import { useInView , motion } from 'framer-motion';
import React, { useRef } from 'react'

function ClientLogos() {
    const logos = ["Microsoft", "Coca-Cola", "Nestlé", "SAP", "Siemens", "Roche", "Danone", "Unilever"];

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
                    <div className="clients-tag">
                        → TRUSTED BY INDUSTRY LEADERS →
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={
                        inView
                            ? { opacity: 1 }
                            : {}
                    }
                    transition={{ duration: 0.6 }}
                    className="clients-logos"
                >
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                scale: 1.1
                            }}
                            className="client-logo-card"
                        >
                            {logo}
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

export default ClientLogos