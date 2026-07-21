import React, { useRef } from "react";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { useHomeSection } from "../hooks/useHomeSection";
import { resolveIcon } from "../utils/resolveIcon";

const DEFAULT_TAG = "WHY US";
const DEFAULT_TITLE = "Why Choose JJC Systems for Microsoft Consulting?";
const DEFAULT_DESCRIPTION =
    "Businesses often face challenges such as disconnected systems, inefficient workflows, limited data visibility, and increasing security risks. JJC Systems provides strategic Microsoft Consulting Services that connect technology with business objectives.";
const DEFAULT_OUTRO =
    "Our Microsoft consulting experts combine technical knowledge with industry experience to deliver solutions that support long-term growth.";

const DEFAULT_POINTS = [
    { icon: "FaUsers", title: "Improving workplace productivity" },
    { icon: "FaCogs", title: "Simplifying business processes" },
    { icon: "FaShieldAlt", title: "Strengthening data security" },
    { icon: "FaChartLine", title: "Enabling smarter decision-making" },
    { icon: "FaServer", title: "Creating scalable technology environments" },
];

function WhyChooseUs() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const listRef = useRef(null);
    const outroRef = useRef(null);

    const { section, items, ready, isPublished } = useHomeSection("whyChooseUs", sectionRef);

    useSectionAnimation({
        sectionRef,
        tagRef,
        titleRef,
        descRef,
        listRef,
        outroRef,
        ready,
    });

    if (!isPublished) return null;

    const points = items.length ? items : DEFAULT_POINTS;

    return (
        <section ref={sectionRef} className="why-choose-section">
            <div className="container">
                <div className="why-choose-content">
                    <div className="solutions-header">
                        <div ref={tagRef} className="section-tag">
                            {section?.tag || DEFAULT_TAG}
                        </div>

                        <h2 ref={titleRef} className="section-title">
                            {section?.title || DEFAULT_TITLE}
                        </h2>

                        <p ref={descRef} className="section-description">
                            {section?.description || DEFAULT_DESCRIPTION}
                        </p>

                        {(section?.outro || DEFAULT_OUTRO) && (
                            <p ref={outroRef} className="section-description text-center">
                                {section?.outro || DEFAULT_OUTRO}
                            </p>
                        )}
                    </div>

                    <ul ref={listRef} className="why-choose-list">
                        {points.map((item, index) => (
                            <li key={item._id || index} className="why-choose-item">

                                <div className="why-icon">
                                    {resolveIcon(item.icon)}
                                </div>

                                <span className="why-text">
                                    {item.title}
                                </span>

                            </li>
                        ))}
                    </ul>


                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
