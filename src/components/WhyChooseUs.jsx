import React, { useRef } from "react";
import { FaCheck } from "react-icons/fa6";
import { useSectionAnimation } from "../hooks/useSectionAnimation";

import {
    FaUsers,
    FaCogs,
    FaShieldAlt,
    FaChartLine,
    FaServer,
} from "react-icons/fa";

const POINTS = [
    {
        icon: <FaUsers />,
        title: "Improving workplace productivity",
    },
    {
        icon: <FaCogs />,
        title: "Simplifying business processes",
    },
    {
        icon: <FaShieldAlt />,
        title: "Strengthening data security",
    },
    {
        icon: <FaChartLine />,
        title: "Enabling smarter decision-making",
    },
    {
        icon: <FaServer />,
        title: "Creating scalable technology environments",
    },
];


function WhyChooseUs() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const listRef = useRef(null);
    const outroRef = useRef(null);

    useSectionAnimation({
        sectionRef,
        tagRef,
        titleRef,
        descRef,
        listRef,
        outroRef,
    });

    return (
        <section ref={sectionRef} className="why-choose-section">
            <div className="container">
                <div className="why-choose-content">
                    <div className="solutions-header">
                        <div ref={tagRef} className="section-tag">
                            WHY US
                        </div>

                        <h2 ref={titleRef} className="section-title">
                            Why Choose JJC Systems for Microsoft Consulting?
                        </h2>

                        <p ref={descRef} className="section-description">
                            Businesses often face challenges such as disconnected systems,
                            inefficient workflows, limited data visibility, and increasing
                            security risks. JJC Systems provides strategic Microsoft
                            Consulting Services that connect technology with business
                            objectives.
                        </p>

                        <p ref={outroRef} className="section-description text-center">
                            Our Microsoft consulting experts combine technical knowledge with
                            industry experience to deliver solutions that support long-term
                            growth.
                        </p>
                    </div>

                    <ul ref={listRef} className="why-choose-list">
                        {POINTS.map((item, index) => (
                            <li key={index} className="why-choose-item">

                                <div className="why-icon">
                                    {item.icon}
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