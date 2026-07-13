import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import platformServices from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { useHomeSection } from "../hooks/useHomeSection";

const DEFAULT_TAG = "MICROSOFT PLATFORMS";
const DEFAULT_TITLE = "Complete Microsoft Solutions for Business Growth";
const DEFAULT_DESCRIPTION =
    "Our Microsoft consulting approach begins by understanding your business challenges. Then, we design and implement solutions that improve performance, security, and operational efficiency.";

function PlatformServices() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const tabsRef = useRef(null);

    const [active, setActive] = useState(0);

    const { section, ready, isPublished } = useHomeSection("detailedServices");

    useSectionAnimation({
        sectionRef,
        tagRef,
        titleRef,
        descRef,
        listRef: tabsRef,
        ready,
    });

    if (!isPublished) return null;

    return (
        <section ref={sectionRef} className="platform-services-section">
            <div className="container">

                <div className="section-heading">
                    <div
                        ref={tagRef}
                        className="section-tag"
                    >
                        { DEFAULT_TAG}
                    </div>

                    <h2
                        ref={titleRef}
                        className="section-title"
                    >
                        { DEFAULT_TITLE}
                    </h2>

                    <p
                        ref={descRef}
                        className="section-description"
                    >
                        { DEFAULT_DESCRIPTION}
                    </p>
                </div>

                <div className="platform-services-layout">

                    {/* Left */}
                    <div className="platform-services-tabs-wrapper">

                        <div
                            ref={tabsRef}
                            className="platform-services-tabs"
                        >
                            {platformServices.map((service, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`platform-tab-btn ${active === index ? "active" : ""
                                        }`}
                                    onClick={() => setActive(index)}
                                >
                                    <span className="tab-icon">
                                        {service.icon}
                                    </span>

                                    <span className="tab-label">
                                        {service.shortTitle ||
                                            service.title.replace(
                                                " Consulting Services",
                                                ""
                                            )}
                                    </span>
                                </button>
                            ))}
                        </div>

                    </div>

                    {/* Right */}
                    <div className="platform-services-panel">

                        <AnimatePresence mode="wait">

                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.35 }}
                            >
                                <h3 className="platform-panel-title">
                                    {platformServices[active].title}
                                </h3>

                                <p className="platform-panel-subtitle">
                                    {platformServices[active].subtitle}
                                </p>

                                <p className="platform-panel-intro">
                                    {platformServices[active].intro}
                                </p>

                                <ul className="platform-panel-list">
                                    {platformServices[active].bullets.map(
                                        (bullet, index) => (
                                            <li key={index}>
                                                <FaCheck />
                                                <span>{bullet}</span>
                                            </li>
                                        )
                                    )}
                                </ul>

                                <p className="platform-panel-outro">
                                    {platformServices[active].outro}
                                </p>
                            </motion.div>

                        </AnimatePresence>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default PlatformServices;