import React, { useRef } from "react";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { useHomeSection } from "../hooks/useHomeSection";

const DEFAULT_TAG = "OUR PROCESS";
const DEFAULT_TITLE = "Microsoft Consulting Process";
const DEFAULT_DESCRIPTION =
    "We follow a structured process to deliver reliable Microsoft solutions.";

const DEFAULT_STEPS = [
    {
        num: "01",
        title: "Business Assessment",
        desc: "First, we analyze your current technology environment, business objectives, and operational challenges.",
    },
    {
        num: "02",
        title: "Solution Planning",
        desc: "Next, our Microsoft consultants create a strategy aligned with your business goals.",
    },
    {
        num: "03",
        title: "Implementation",
        desc: "Then, we deploy Microsoft solutions using proven methodologies and best practices.",
    },
    {
        num: "04",
        title: "Optimization & Support",
        desc: "Finally, we continuously improve your Microsoft environment to ensure long-term success.",
    },
];

const DEFAULT_EXPERTISE_TAG = "WHY JJC SYSTEMS";
const DEFAULT_EXPERTISE_TITLE = "Why JJC Systems is Your Microsoft Consulting Partner";
const DEFAULT_EXPERTISE_PARAGRAPHS = [
    "JJC Systems combines Microsoft technology expertise with business-focused consulting to help organizations achieve digital transformation.",
    "Our team understands that every business requires a unique technology approach. Therefore, we deliver customized Microsoft solutions that improve efficiency, security, and scalability.",
    "With expertise across Microsoft 365, Azure, Dynamics 365, Power Platform, Business Central, SharePoint, Power BI, and Microsoft Security solutions, we help businesses maximize their technology investments.",
];

function DeliveryProcess() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const timelineRef = useRef(null);
    const cardRef = useRef(null);
    const tagRef = useRef(null);
    const descRef = useRef(null);

    const { section, items, ready, isPublished } = useHomeSection("deliveryProcess", sectionRef);
    const { section: partnerSection } = useHomeSection("whyJJCPartner", sectionRef);

    useSectionAnimation({
        sectionRef,
        tagRef,
        descRef,
        titleRef,
        listRef: timelineRef,
        outroRef: cardRef,
        ready,
    });

    if (!isPublished) return null;

    const steps = items.length
        ? items.map((item, index) => ({
            num: String(index + 1).padStart(2, "0"),
            title: item.title,
            desc: item.description,
        }))
        : DEFAULT_STEPS;

    const expertiseParagraphs = partnerSection?.description
        ? [partnerSection.description, partnerSection.outro].filter(Boolean)
        : DEFAULT_EXPERTISE_PARAGRAPHS;

    return (
        <section ref={sectionRef} className="approach-section">


            <div className="industries-header">

                <div
                    ref={tagRef}
                    className="section-tag"
                >
                    {section?.tag || DEFAULT_TAG}
                </div>

                <h2
                    ref={titleRef}
                    className="industries-title"
                >
                    {section?.title || DEFAULT_TITLE}

                </h2>

                <p
                    ref={descRef}
                    className="industries-desc"
                >
                    {section?.description || DEFAULT_DESCRIPTION}
                </p>

            </div>


            <div className="container approach-container">

                {/* LEFT */}

                <div className="approach-content">

                    <div className="approach-timeline">

                        <div className="timeline-line" />

                        <div ref={timelineRef}>

                            {steps.map((step) => (
                                <div
                                    key={step.num}
                                    className="timeline-item"
                                >
                                    <div className="timeline-number">
                                        {step.num}
                                    </div>

                                    <div className="timeline-content">

                                        <h3 className="timeline-title">
                                            {step.title}
                                        </h3>

                                        <p className="timeline-description">
                                            {step.desc}
                                        </p>

                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

                {/* RIGHT */}

                <div
                    ref={cardRef}
                    className="expertise-card"
                >

                    <div className="expertise-tag">
                        {DEFAULT_EXPERTISE_TAG}
                    </div>

                    <h3 className="expertise-title">
                        {partnerSection?.title || DEFAULT_EXPERTISE_TITLE}
                    </h3>

                    {expertiseParagraphs.map((para, i) => (
                        <p key={i} className="expertise-description">
                            {para}
                        </p>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default DeliveryProcess;
