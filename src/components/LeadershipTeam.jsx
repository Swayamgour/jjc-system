import React, { useRef } from "react";
import { Icons, team } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";

function LeadershipTeam() {
    const colors = [
        "#2563EB",
        "#0F3D91",
        "#4F8CFF",
        "#1D4ED8",
        "#3B82F6",
    ];

    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const cardsRef = useRef(null);

    useSectionAnimation({
        sectionRef,
        tagRef,
        listRef: cardsRef,
    });

    return (
        <section
            ref={sectionRef}
            className="leadership-section"
        >
            <div className="container">

                <div className="leadership-header">

                    <div
                        ref={tagRef}
                        className="section-tag"
                    >
                        OUR LEADERSHIP TEAM
                    </div>

                </div>

                <div
                    ref={cardsRef}
                    className="leadership-grid"
                >
                    {team.map((member, i) => (
                        <div
                            key={i}
                            className="leader-card"
                        >
                            <div
                                className="leader-image"
                                style={{
                                    background: `linear-gradient(
                                        160deg,
                                        ${colors[i]},
                                        ${colors[(i + 2) % colors.length]}
                                    )`,
                                }}
                            >
                                <svg
                                    width="60"
                                    height="70"
                                    viewBox="0 0 60 70"
                                    fill="none"
                                >
                                    <circle
                                        cx="30"
                                        cy="24"
                                        r="16"
                                        fill="rgba(255,255,255,0.3)"
                                    />

                                    <path
                                        d="M5 65a25 25 0 0150 0"
                                        fill="rgba(255,255,255,0.2)"
                                    />
                                </svg>
                            </div>

                            <div className="leader-name">
                                {member.name}
                            </div>

                            <div className="leader-role">
                                {member.title}
                            </div>

                            <div className="linkedin-btn">
                                <Icons.LinkedIn />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default LeadershipTeam;