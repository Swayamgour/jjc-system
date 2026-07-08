import React, { useRef } from "react";
import { ChallengesData } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";

function Challenges() {
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
        <section
            ref={sectionRef}
            className="challenges-section"
        >
            <div className="container">

                <div className="challenges-header">

                    <div
                        ref={tagRef}
                        className="section-tag"
                    >
                        BUSINESS CHALLENGES WE SOLVE
                    </div>

                    <h2
                        ref={titleRef}
                        className="challenges-title"
                    >
                        Turning Technology Challenges into Business Opportunities
                    </h2>

                    <p
                        ref={descRef}
                        className="challenges-desc"
                    >
                        Every organization faces technology challenges while growing.
                        However, the right Microsoft solutions can simplify operations,
                        improve productivity, and create better business outcomes.
                    </p>

                </div>

                <div
                    ref={cardsRef}
                    className="challenges-grid"
                >
                    {ChallengesData.map((item, index) => (
                        <div
                            key={index}
                            className={`challenge-card ${index !== ChallengesData.length - 1
                                    ? "with-divider"
                                    : ""
                                }`}
                        >
                            <div className="challenge-icon">
                                {item.icon}
                            </div>

                            <div className="service-card-title">
                                {item.title}
                            </div>

                            <div className="service-card-desc">
                                {item.sub}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Challenges;