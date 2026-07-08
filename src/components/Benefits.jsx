import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useSplitText } from "../hooks/useSplitText";
import { Icons , benefits } from "../utils/data";
import { FaCheck } from "react-icons/fa6";
import { useSectionAnimation } from "../hooks/useSectionAnimation";



function Benefits() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const cardsRef = useRef(null);

    useSectionAnimation({
        sectionRef,
        tagRef,
        titleRef,
        descRef,
        listRef: cardsRef,
    });

    return (
        <section ref={sectionRef} className="benefits-section">
            <div className="container">

                <div className="section-heading">

                    <div
                        ref={tagRef}
                        className="section-tag"
                    >
                        BENEFITS
                    </div>

                    <h2
                        ref={titleRef}
                        className="section-title"
                    >
                        Microsoft Consulting Services Benefits
                    </h2>

                    <p
                        ref={descRef}
                        className="benefits-intro"
                    >
                        Partnering with JJC Systems helps organizations achieve long-term
                        value, not just short-term technology improvements.
                    </p>

                </div>

                <div
                    ref={cardsRef}
                    className="why-choose-list"
                >
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="why-choose-item"
                        >
                            <span className="why-icon">
                                {item.icon}
                            </span>

                            <span className="why-text">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Benefits;
