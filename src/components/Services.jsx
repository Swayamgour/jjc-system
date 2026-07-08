import React, { useRef } from "react";
import { cards } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";

function Services() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef(null);

    useSectionAnimation({
        sectionRef,
        tagRef,
        titleRef,
        listRef: cardsRef,
    });

    return (
        <section
            ref={sectionRef}
            className="services-section"
        >
            <div className="container">

                <div className="section-heading">

                    <div
                        ref={tagRef}
                        className="section-tag"
                    >
                        PLATFORM
                    </div>

                    <h2
                        ref={titleRef}
                        className="section-title"
                    >
                        Your Useful Platform
                    </h2>

                </div>

                <div
                    ref={cardsRef}
                    className="services-grid"
                >
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="service-card"
                        >
                            <div className="service-card-icon">
                                {card.icon}
                            </div>

                            <div className="service-card-title">
                                {card.title}
                            </div>

                            <div className="service-card-desc">
                                {card.desc}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Services;