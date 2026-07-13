import React, { useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { clientLogo as DEFAULT_LOGOS } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { useHomeSection } from "../hooks/useHomeSection";

const DEFAULT_TAG = "TRUSTED BY INDUSTRY LEADERS";

function ClientLogos() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const marqueeRef = useRef(null);

    const { section, items, ready, isPublished } = useHomeSection("clientLogos");

    useSectionAnimation({
        sectionRef,
        tagRef,
        outroRef: marqueeRef,
        ready,
    });

    if (!isPublished) return null;

    const logos = items.length
        ? items
            .filter((item) => item.image?.url)
            .map((item) => ({ name: item.title, image: item.image.url }))
        : DEFAULT_LOGOS;

    if (!logos.length) return null;

    return (
        <section
            ref={sectionRef}
            className="clients-section"
        >
            <div className="container">

                <div className="clients-header">

                    <div
                        ref={tagRef}
                        className="section-tag"
                    >
                        <GoArrowLeft style={{ fontSize: "16px" }} />
                        {" "}{section?.tag || section?.title || DEFAULT_TAG}{" "}
                        <GoArrowRight style={{ fontSize: "16px" }} />
                    </div>

                </div>

                <div
                    ref={marqueeRef}
                    className="clients-marquee"
                >
                    <div className="clients-track">
                        {[...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className="client-logo-card"
                            >
                                <img
                                    src={logo.image}
                                    alt={logo.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ClientLogos;
