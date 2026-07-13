import React, { useRef } from "react";
import { cards as DEFAULT_CARDS } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { useHomeSection } from "../hooks/useHomeSection";
import { resolveIcon } from "../utils/resolveIcon";

const DEFAULT_TAG = "PLATFORM";
const DEFAULT_TITLE = "Your Useful Platform";

function Services() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef(null);

    const { section, items, ready, isPublished } = useHomeSection("platformCards");

    useSectionAnimation({
        sectionRef,
        tagRef,
        titleRef,
        listRef: cardsRef,
        ready,
    });

    if (!isPublished) return null;

    const cards = items.length
        ? items.map((item) => ({
            icon: resolveIcon(item.icon),
            title: item.title,
            desc: item.description,
        }))
        : DEFAULT_CARDS;

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
                        {section?.tag || DEFAULT_TAG}
                    </div>

                    <h2
                        ref={titleRef}
                        className="section-title"
                    >
                        {section?.title || DEFAULT_TITLE}
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
