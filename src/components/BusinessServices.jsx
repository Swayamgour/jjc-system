import React, { useRef } from "react";
import { businessServices as DEFAULT_SERVICES } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { useHomeSection } from "../hooks/useHomeSection";
import { resolveIcon } from "../utils/resolveIcon";
import { useGetCategoriesBySlugQuery } from "../redux/api";
import { getServiceIcon } from "../utils/serviceIcons";
// import { getServiceIcon } from "../utils/serviceIcons";

const DEFAULT_TAG = "BUSINESS OUTCOMES";
const DEFAULT_TITLE = "Services That Drive Business Growth";

function BusinessServices() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef(null);

    const { section, items, ready, isPublished } =
        useHomeSection("businessServices", sectionRef);

    const { data } = useGetCategoriesBySlugQuery("Services");

    useSectionAnimation({
        sectionRef,
        tagRef,
        titleRef,
        listRef: cardsRef,
        ready,
    });

    if (!isPublished) return null;

    const services = data?.data?.items?.length
        ? data.data.items
        : items.length
            ? items.map((item) => ({
                label: item.title,
                icon: resolveIcon(item.icon),
            }))
            : DEFAULT_SERVICES;

    return (
        <section ref={sectionRef} className="business-services-section">
            <div className="container">
                <div className="section-heading">
                    <div ref={tagRef} className="section-tag">
                        {section?.tag || DEFAULT_TAG}
                    </div>

                    <h2 ref={titleRef} className="section-title">
                        {section?.title || DEFAULT_TITLE}
                    </h2>
                </div>

                <div
                    ref={cardsRef}
                    className="business-services-grid"
                >
                    {services.map((service, index) => {
                        const Icon =  getServiceIcon(service.label);

                        return (
                            <div
                                key={index}
                                className="business-service-card"
                            >
                                <span className="solution-icon">
                                    <Icon
                                        size={36}
                                        strokeWidth={1.8}
                                    />
                                </span>

                                <h3 className="service-card-title">
                                    {service.label}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default BusinessServices;