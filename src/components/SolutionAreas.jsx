import React, { useRef } from "react";
import { solutions as DEFAULT_ITEMS } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { useHomeSection } from "../hooks/useHomeSection";
import { resolveIcon } from "../utils/resolveIcon";

const DEFAULT_TAG = "OUR SOLUTION AREAS";
const DEFAULT_TITLE = "Solutions That Drive Real Business Outcomes";

function SolutionAreas() {
  const sectionRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  const { section, items, ready, isPublished } = useHomeSection("solutionAreas", sectionRef);

  useSectionAnimation({
    sectionRef,
    tagRef,
    titleRef,
    listRef: cardsRef,
    ready,
  });

  if (!isPublished) return null;

  const solutionItems = items.length
    ? items.map((item) => ({
      icon: resolveIcon(item.icon),
      title: item.title,
      desc: item.description,
    }))
    : DEFAULT_ITEMS;

  return (
    <section
      ref={sectionRef}
      className="solutions-section"
    >
      <div className="container">

        <div className="solutions-header">

          <div
            ref={tagRef}
            className="section-tag"
          >
            {section?.tag || DEFAULT_TAG}
          </div>

          <h2
            ref={titleRef}
            className="solutions-title"
          >
            {section?.title || DEFAULT_TITLE}
          </h2>

        </div>

        <div
          ref={cardsRef}
          className="solutions-grid"
        >
          {solutionItems.map((sol, index) => (
            <div
              key={index}
              className="solution-card"
            >
              <div className="solution-icon">
                {sol.icon}
              </div>

              <div className="service-card-title">
                {sol.title}
              </div>

              <div className="service-card-desc">
                {sol.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SolutionAreas;
