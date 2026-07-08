import React, { useRef } from "react";
import { useSectionAnimation } from "../hooks/useSectionAnimation";

function WhyJJCPartner() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const outroRef = useRef(null);

    useSectionAnimation({
        sectionRef,
        titleRef,
        descRef,
        outroRef,
    });

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
                        Why JJC Systems is Your Microsoft Consulting Partner
                    </h2>

                    <p
                        ref={descRef}
                        className="why-partner-desc"
                    >
                        JJC Systems combines Microsoft technology expertise with
                        business-focused consulting to help organizations achieve
                        digital transformation. Our team understands that every
                        business requires a unique technology approach. Therefore,
                        we deliver customized Microsoft solutions that improve
                        efficiency, security, and scalability.
                    </p>

                    <p
                        ref={outroRef}
                        className="why-partner-desc"
                    >
                        With expertise across Microsoft 365, Azure, Dynamics 365,
                        Power Platform, Business Central, SharePoint, Power BI,
                        and security solutions, we help businesses maximize their
                        technology investments.
                    </p>

                </div>

            </div>
        </section>
    );
}

export default WhyJJCPartner;