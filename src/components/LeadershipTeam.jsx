import React, { useRef } from 'react'
import { Icons, team } from '../utils/data';
import { useInView , motion } from 'framer-motion';


function LeadershipTeam() {
    //    team

    const colors = ["#2563EB", "#0F3D91", "#4F8CFF", "#1D4ED8", "#3B82F6"];

    const ref = useRef(null);
     const inView = useInView(ref, { once: true, amount: 0.2 });

     const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.1 } },
    };

    // Icons

    return (
        <section
            ref={ref}
            className="leadership-section"
        >
            <div className="container">

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={
                        inView
                            ? "visible"
                            : "hidden"
                    }
                    className="leadership-header"
                >
                    <div className="section-tag">
                        OUR LEADERSHIP TEAM
                    </div>
                </motion.div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate={
                        inView
                            ? "visible"
                            : "hidden"
                    }
                    className="leadership-grid"
                >
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            whileHover={{ y: -6 }}
                            className="leader-card"
                        >

                            <div
                                className="leader-image"
                                style={{
                                    background: `linear-gradient(
                160deg,
                ${colors[i]},
                ${colors[(i + 2) % 5]}
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

                            <motion.div
                                whileHover={{
                                    scale: 1.2,
                                }}
                                className="linkedin-btn"
                            >
                                <Icons.LinkedIn />
                            </motion.div>

                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

export default LeadershipTeam