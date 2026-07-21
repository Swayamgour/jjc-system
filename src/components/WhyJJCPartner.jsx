import React, { useRef } from "react";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { useHomeSection } from "../hooks/useHomeSection";

const DEFAULT_TITLE = "Why JJC Systems is Your Microsoft Consulting Partner";
const DEFAULT_DESCRIPTION =
    "JJC Systems combines Microsoft technology expertise with business-focused consulting to help organizations achieve digital transformation. Our team understands that every business requires a unique technology approach. Therefore, we deliver customized Microsoft solutions that improve efficiency, security, and scalability.";
const DEFAULT_OUTRO =
    "With expertise across Microsoft 365, Azure, Dynamics 365, Power Platform, Business Central, SharePoint, Power BI, and security solutions, we help businesses maximize their technology investments.";

function WhyJJCPartner() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const outroRef = useRef(null);

    const { section, ready, isPublished } = useHomeSection("whyJJCPartner", sectionRef);

    useSectionAnimation({
        sectionRef,
        titleRef,
        descRef,
        outroRef,
        ready,
    });

    if (!isPublished) return null;

    return (
        <section
            ref={sectionRef}
            className="why-partner-section"
        >
            <div className="container">

                <div className="why-partner-content">

                    <h2
                        ref={titleRef}
                        className="why-partner-title"
                    >
                        {section?.title || DEFAULT_TITLE}
                    </h2>

                    <p
                        ref={descRef}
                        className="why-partner-desc"
                    >
                        {section?.description || DEFAULT_DESCRIPTION}
                    </p>

                    <p
                        ref={outroRef}
                        className="why-partner-desc"
                    >
                        {section?.outro || DEFAULT_OUTRO}
                    </p>

                </div>

            </div>
        </section>
    );
}

export default WhyJJCPartner;
