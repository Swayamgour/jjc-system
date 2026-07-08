import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useSplitText } from "../hooks/useSplitText";
import { Icons } from "../utils/data";



function FAQ() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });
    const titleRef = useRef(null);
    useSplitText(titleRef);

    const [open, setOpen] = useState(0);

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section ref={ref} className="faq-section">
            <div className="container">

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="section-heading"
                >
                    <div className="section-tag">FAQs</div>
                    <h2 ref={titleRef} className="section-title">
                        Frequently Asked Questions
                    </h2>
                </motion.div>

                <div className="faq-list">
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${open === index ? "open" : ""}`}
                            onClick={() => setOpen(open === index ? -1 : index)}
                        >
                            <div className="faq-question">
                                <span>{item.q}</span>
                                <Icons.Arrow />
                            </div>

                            <AnimatePresence initial={false}>
                                {open === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="faq-answer-wrap"
                                    >
                                        <p className="faq-answer">{item.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default FAQ;
