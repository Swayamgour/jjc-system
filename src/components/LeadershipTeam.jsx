import React, { useRef, useState } from "react";
import { Icons, team as DEFAULT_TEAM } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { useHomeSection } from "../hooks/useHomeSection";

const DEFAULT_TAG = "OUR LEADERSHIP TEAM";
const DEFAULT_TITLE = "Meet Our Visionary Leaders";
const DEFAULT_SUBTITLE = "Passionate experts driving innovation and excellence in everything we do";

function LeadershipTeam() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const cardsRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

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

    const handleLinkedInClick = (e, link) => {
        e.stopPropagation();
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <section
            ref={sectionRef}
            className="leadership-section"
        >
            <div className="container">
                <div className="testimonials-header">
                    <div ref={tagRef} className="section-tag">
                        {section?.tag || DEFAULT_TAG}
                    </div>
                    <h2 className="section-title">
                        {section?.title || DEFAULT_TITLE}
                    </h2>
                    <p className="section-subtitle">
                        {section?.subtitle || DEFAULT_SUBTITLE}
                    </p>
                </div>

                <div ref={cardsRef} className="leadership-grid">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className={`leader-card ${!member.photo ? 'loading' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="leader-image">
                                {member?.photo ? (
                                    <img
                                        src={member.photo}
                                        alt={member?.name || 'Team member'}
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="placeholder-avatar">
                                        {member?.name?.charAt(0) || 'T'}
                                    </div>
                                )}

                                {member?.link && (
                                    <div className="social-badge">
                                        <div
                                            className="linkedin-btn"
                                            onClick={(e) => handleLinkedInClick(e, member.link)}
                                            aria-label={`Connect with ${member?.name} on LinkedIn`}
                                        >
                                            <svg viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="leader-name">
                                {member?.name || 'Team Member'}
                            </div>

                            <div className="leader-role">
                                {member?.title || 'Role'}
                            </div>

                            {member?.link && (
                                <div className="linkedin-btn"
                                    onClick={(e) => handleLinkedInClick(e, member.link)}
                                    style={{ opacity: hoveredIndex === index ? 1 : 0.7 }}
                                >
                                    <svg viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LeadershipTeam;