import React, { useRef } from "react";
import { businessServices } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";

function BusinessServices() {
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
        <section ref={sectionRef} className="business-services-section">

            <div className="container">

                <div className="section-heading">

                    <div
                        ref={tagRef}
                        className="section-tag"
                    >
                        BUSINESS OUTCOMES
                    </div>

                    <h2
                        ref={titleRef}
                        className="section-title"
                    >
                        Services That Drive Business Growth
                    </h2>

                </div>

                <div
                    ref={cardsRef}
                    className="business-services-grid"
                >
                    {businessServices.map((service, index) => (
                        <div
                            key={index}
                            className="business-service-card"
                        >
                            <span className="solution-icon">
                                {service.icon}
                            </span>

                            <h3 className="service-card-title">
                                {service.title}
                            </h3>

                            <p className="service-card-desc">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}

export default BusinessServices;