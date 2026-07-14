import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import platformServices from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { useHomeSection } from "../hooks/useHomeSection";
import { resolveIcon } from "../utils/resolveIcon";

const DEFAULT_TAG = "MICROSOFT PLATFORMS";
const DEFAULT_TITLE = "What Should Our Platforms Do For You";

// Combines `intro` + `outro` into a single flowing paragraph for the
// showcase card, dropping the trailing "...services include:" lead-in
// that was written to introduce a bullet list.
function buildDescription(intro = "", outro = "") {
    const sentences = intro.split(/(?<=[.!?])\s+/).filter(Boolean);
    if (sentences.length && /:$/.test(sentences[sentences.length - 1].trim())) {
        sentences.pop();
    }
    return [sentences.join(" "), outro].filter(Boolean).join(" ");
}

function PlatformServices() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const pillsRef = useRef(null);

    const [active, setActive] = useState(0);

    const { section, ready, isPublished } = useHomeSection("detailedServices");

    // console.log(section)

    useSectionAnimation({
        sectionRef,
        tagRef,
        titleRef,
        listRef: pillsRef,
        ready,
    });

    if (!isPublished) return null;

    const activeService = section?.items[active];
    console.log(activeService)

    return (
        <section ref={sectionRef} className="platform-services-section">
            <div className="container">

                <h2
                    ref={titleRef}
                    className="platform-services-heading"
                >
                    {section?.title || DEFAULT_TITLE}
                </h2>
               

                <div ref={pillsRef} className="platform-pills">
                    {section?.items?.map((service, index) => (
                        <button
                            key={service._id}
                            type="button"
                            className={`platform-pill ${active === index ? "active" : ""}`}
                            onClick={() => setActive(index)}
                        >
                            <span className="platform-pill-icon">
                                {resolveIcon(service.icon)}
                            </span>

                            <span className="platform-pill-label">
                                {service.title}
                            </span>
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {activeService && (
                        <motion.div
                            key={activeService._id}
                            className="platform-showcase"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.35 }}
                        >
                            <div className="platform-showcase-image">
                                <img
                                    src={activeService.image?.url}
                                    alt={activeService.title}
                                />
                            </div>

                            <div className="platform-showcase-card">
                                <div className="platform-showcase-topbar">
                                    <div className="platform-showcase-dots">
                                        <span className="dot dot-red" />
                                        <span className="dot dot-yellow" />
                                        <span className="dot dot-green" />
                                    </div>

                                    <div className="platform-showcase-more">
                                        •••
                                    </div>
                                </div>

                                <h3 className="platform-showcase-title">
                                    {/* <span className="platform-showcase-title-icon">
                                        {resolveIcon(activeService.icon)}
                                    </span> */}

                                    {activeService.subtitle}
                                </h3>

                                <div className="platform-showcase-desc">
                                    <p>{activeService.description}</p>
                                </div>

                                <a
                                    href={activeService.link || "/contact"}
                                    className="platform-showcase-cta"
                                    aria-label={activeService.title}
                                >
                                    <ArrowUpRight />
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}

export default PlatformServices;
