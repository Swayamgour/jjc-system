import React, { useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { clientLogos } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";

function ClientLogos() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const marqueeRef = useRef(null);

    useSectionAnimation({
        sectionRef,
        tagRef,
        outroRef: marqueeRef,
    });

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
                        {" "}TRUSTED BY INDUSTRY LEADERS{" "}
                        <GoArrowRight style={{ fontSize: "16px" }} />
                    </div>

                </div>

                <div
                    ref={marqueeRef}
                    className="clients-marquee"
                >
                    <div className="clients-track">
                        {[...clientLogos, ...clientLogos].map((logo, index) => (
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