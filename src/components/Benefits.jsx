import React, { useRef } from "react";
import { benefits as DEFAULT_ITEMS } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { useHomeSection } from "../hooks/useHomeSection";
import { resolveIcon } from "../utils/resolveIcon";

const DEFAULT_TAG = "BENEFITS";
const DEFAULT_TITLE = "Microsoft Consulting Services Benefits";
const DEFAULT_DESCRIPTION =
    "Partnering with JJC Systems helps organizations achieve long-term value, not just short-term technology improvements.";

function Benefits() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const cardsRef = useRef(null);

    const { section, items, ready, isPublished } = useHomeSection("benefits");

    useSectionAnimation({
        sectionRef,
        tagRef,
        titleRef,
        descRef,
        listRef: cardsRef,
        ready,
    });

    if (!isPublished) return null;

    const benefitItems = items.length
        ? items.map((item) => ({
            icon: resolveIcon(item.icon),
            text: item.title,
        }))
        : DEFAULT_ITEMS;

    return (
        <section ref={sectionRef} className="benefits-section">
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

                    <p
                        ref={descRef}
                        className="benefits-intro"
                    >
                        {section?.description || DEFAULT_DESCRIPTION}
                    </p>

                </div>

                <div
                    ref={cardsRef}
                    className="why-choose-list"
                >
                    {benefitItems.map((item, index) => (
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
