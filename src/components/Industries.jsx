import React, { useRef } from "react";
import { Icons, industries } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";

function Industries() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const cardsRef = useRef(null);
    const buttonRef = useRef(null);

    useSectionAnimation({
        sectionRef,
        tagRef,
        titleRef,
        descRef,
        listRef: cardsRef,
        outroRef: buttonRef,
    });

    return (
        <section
            ref={sectionRef}
            className="industries-section"
        >
            <div className="container">

                <div className="industries-header">

                    <div
                        ref={tagRef}
                        className="section-tag"
                    >
                        INDUSTRIES WE SERVE
                    </div>

                    <h2
                        ref={titleRef}
                        className="industries-title"
                    >
                        Industry Expertise. Real Impact.
                    </h2>

                    <p
                        ref={descRef}
                        className="industries-desc"
                    >
                        JJC Systems supports organizations across different
                        industries by delivering customized Microsoft technology
                        solutions that match specific business goals,
                        compliance needs, and operational challenges.
                    </p>

                </div>

                <div
                    ref={cardsRef}
                    className="industries-grid"
                >
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="industry-card"
                        >
                            <div className="industry-icon">
                                {industry.icon}
                            </div>

                            <div className="service-card-title">
                                {industry.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div
                    ref={buttonRef}
                    className="industries-footer"
                >
                    <button className="industries-btn">
                        View All Industries <Icons.Arrow />
                    </button>
                </div> */}

            </div>
        </section>
    );
}

export default Industries;