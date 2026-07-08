import React, { useRef } from "react";
import { items } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";

function Resources() {
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
            className="resources-section"
        >
            <div className="container">

                <div className="resources-header">

                    <div
                        ref={tagRef}
                        className="section-tag"
                    >
                        RESOURCES & INSIGHTS
                    </div>

                    <h2
                        ref={titleRef}
                        className="resources-title"
                    >
                        Learn. Explore. Stay Ahead.
                    </h2>

                </div>

                <div
                    ref={cardsRef}
                    className="resources-grid"
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="resource-card"
                        >
                            <div className="resource-icon">
                                {item.icon}
                            </div>

                            <div className="service-card-title">
                                {item.title}
                            </div>

                            <div
                                className="service-card-desc"
                                style={{ marginBottom: "5px" }}
                            >
                                {item.sub}
                            </div>

                            <div className="resource-link">
                                {item.link}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Resources;