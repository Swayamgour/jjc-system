import React, { useRef } from "react";
import { industries } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { useGetCategoriesBySlugQuery } from "../redux/api";
import { getIndustryIcon } from "../utils/industryIcons";
import * as Icons from "lucide-react";

function Industries() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const cardsRef = useRef(null);
    const buttonRef = useRef(null);

    useSectionAnimation({
        sectionRef,
        tagRef,
        titleRef,
        descRef,
        listRef: cardsRef,
        outroRef: buttonRef,
    });

    const { data } = useGetCategoriesBySlugQuery("industries");
    // console.log(data)

    return (
        <section
            ref={sectionRef}
            className="industries-section"
        >
            <div className="container">

                <div className="industries-header">

                    <div
                        ref={tagRef}
                        className="section-tag"
                    >
                        INDUSTRIES WE SERVE
                    </div>

                    <h2
                        ref={titleRef}
                        className="industries-title"
                    >
                        Industry Expertise. Real Impact.
                    </h2>

                    <p
                        ref={descRef}
                        className="industries-desc"
                    >
                        JJC Systems supports organizations across different
                        industries by delivering customized Microsoft technology
                        solutions that match specific business goals,
                        compliance needs, and operational challenges.
                    </p>

                </div>

                <div
                    ref={cardsRef}
                    className="industries-grid"
                >
                    {data?.data?.map((industry, index) => {
                        const Icon = Icons[industry?.icon] || Icons.Briefcase;

                        return (
                            <div key={index} className="industry-card">
                                <span className="industry-icon">
                                    <Icon />
                                </span>

                                <h4>{industry.name}</h4>
                            </div>
                        );
                    })}
                </div>

                {/* <div
                    ref={buttonRef}
                    className="industries-footer"
                >
                    <button className="industries-btn">
                        View All Industries <Icons.Arrow />
                    </button>
                </div> */}

            </div>
        </section>
    );
}

export default Industries;