import React, { useRef } from "react";
import { Icons } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";

const steps = [
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

function DeliveryProcess() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const timelineRef = useRef(null);
    const cardRef = useRef(null);
    const tagRef = useRef(null);
    const descRef = useRef(null);

    useSectionAnimation({
        sectionRef,
        tagRef,
        descRef ,
        titleRef,
        listRef: timelineRef,
        outroRef: cardRef,
    });

    return (
        <section ref={sectionRef} className="approach-section">


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
                    Microsoft Consulting Process
                   
                </h2>

                <p
                    ref={descRef}
                    className="industries-desc"
                >
                    We follow a structured process to deliver reliable
                    Microsoft solutions.
                </p>

            </div>


            <div className="container approach-container">

                {/* LEFT */}



                <div className="approach-content">

                    {/* <div className="section-tag">
                        MICROSOFT CONSULTING PROCESS
                    </div> */}



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
                        WHY JJC SYSTEMS
                    </div>

                    <h3 className="expertise-title">
                        Why JJC Systems is Your Microsoft Consulting Partner
                    </h3>

                    <p className="expertise-description">
                        JJC Systems combines Microsoft technology expertise
                        with business-focused consulting to help organizations
                        achieve digital transformation.
                    </p>

                    <p className="expertise-description">
                        Our team understands that every business requires a
                        unique technology approach. Therefore, we deliver
                        customized Microsoft solutions that improve efficiency,
                        security, and scalability.
                    </p>

                    <p className="expertise-description">
                        With expertise across Microsoft 365, Azure, Dynamics
                        365, Power Platform, Business Central, SharePoint,
                        Power BI, and Microsoft Security solutions, we help
                        businesses maximize their technology investments.
                    </p>


                </div>

            </div>
        </section>
    );
}

export default DeliveryProcess;