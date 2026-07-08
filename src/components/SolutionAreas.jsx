import React, { useRef } from "react";
import { solutions } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";

function SolutionAreas() {
  const sectionRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useSectionAnimation({
    sectionRef,
    tagRef,
    titleRef,
    listRef: cardsRef,
  });

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
            OUR SOLUTION AREAS
          </div>

          <h2
            ref={titleRef}
            className="solutions-title"
          >
            Solutions That Drive Real Business Outcomes
          </h2>

        </div>

        <div
          ref={cardsRef}
          className="solutions-grid"
        >
          {solutions.map((sol, index) => (
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