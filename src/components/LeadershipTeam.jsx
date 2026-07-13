import React, { useRef } from "react";
import { Icons, team as DEFAULT_TEAM } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { useHomeSection } from "../hooks/useHomeSection";

const DEFAULT_TAG = "OUR LEADERSHIP TEAM";

const GRADIENT_COLORS = [
    "#2563EB",
    "#0F3D91",
    "#4F8CFF",
    "#1D4ED8",
    "#3B82F6",
];

function LeadershipTeam() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const cardsRef = useRef(null);

    const { section, items, ready, isPublished } = useHomeSection("leadershipTeam");

    useSectionAnimation({
        sectionRef,
        tagRef,
        listRef: cardsRef,
        ready,
    });

    if (!isPublished) return null;

    const team = items.length
        ? items.map((item) => ({
            name: item.title,
            title: item.subtitle,
            photo: item.image?.url,
            link: item.link,
        }))
        : DEFAULT_TEAM;

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
                        {section?.tag || DEFAULT_TAG}
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
                            {member.photo ? (
                                <div
                                    className="leader-image"
                                    style={{
                                        backgroundImage: `url(${member.photo})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                />
                            ) : (
                                <div
                                    className="leader-image"
                                    style={{
                                        background: `linear-gradient(
                                            160deg,
                                            ${GRADIENT_COLORS[i % GRADIENT_COLORS.length]},
                                            ${GRADIENT_COLORS[(i + 2) % GRADIENT_COLORS.length]}
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
                            )}

                            <div className="leader-name">
                                {member.name}
                            </div>

                            <div className="leader-role">
                                {member.title}
                            </div>

                            {/* <a
                                className="linkedin-btn"
                                href={member.link || undefined}
                                target={member.link ? "_blank" : undefined}
                                rel={member.link ? "noopener noreferrer" : undefined}
                            >
                                <Icons.LinkedIn />
                            </a> */}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default LeadershipTeam;
