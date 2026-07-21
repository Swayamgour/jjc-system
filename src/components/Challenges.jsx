import React, { useRef } from "react";
import { ChallengesData as DEFAULT_ITEMS } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { useHomeSection } from "../hooks/useHomeSection";
import { resolveIcon } from "../utils/resolveIcon";

const DEFAULT_TAG = "BUSINESS CHALLENGES WE SOLVE";
const DEFAULT_TITLE = "Turning Technology Challenges into Business Opportunities";
const DEFAULT_DESCRIPTION =
    "Every organization faces technology challenges while growing. However, the right Microsoft solutions can simplify operations, improve productivity, and create better business outcomes.";

function Challenges() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const cardsRef = useRef(null);

    const { section, items, ready, isPublished } = useHomeSection("challenges", sectionRef);

    useSectionAnimation({
        sectionRef,
        tagRef,
        titleRef,
        descRef,
        listRef: cardsRef,
        ready,
    });

    if (!isPublished) return null;

    const challenges = items.length
        ? items.map((item) => ({
            icon: resolveIcon(item.icon),
            title: item.title,
            sub: item.description,
        }))
        : DEFAULT_ITEMS;

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
                        {section?.tag || DEFAULT_TAG}
                    </div>

                    <h2
                        ref={titleRef}
                        className="challenges-title"
                    >
                        {section?.title || DEFAULT_TITLE}
                    </h2>

                    <p
                        ref={descRef}
                        className="challenges-desc"
                    >
                        {section?.description || DEFAULT_DESCRIPTION}
                    </p>

                </div>

                <div
                    ref={cardsRef}
                    className="challenges-grid"
                >
                    {challenges.map((item, index) => (
                        <div
                            key={index}
                            className={`challenge-card ${index !== challenges.length - 1
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
