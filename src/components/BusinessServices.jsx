import React, { useRef } from "react";
import { businessServices as DEFAULT_SERVICES } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { useHomeSection } from "../hooks/useHomeSection";
import { resolveIcon } from "../utils/resolveIcon";
import { useGetCategoriesBySlugQuery } from "../redux/api";
import { getServiceIcon } from "../utils/serviceIcons";
import * as Icons from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";

// import { getServiceIcon } from "../utils/serviceIcons";

const DEFAULT_TAG = "BUSINESS OUTCOMES";
const DEFAULT_TITLE = "Services That Drive Business Growth";

function BusinessServices() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef(null);

    const { section, items, ready, isPublished } = useHomeSection("businessServices", sectionRef);

    const { data } = useGetCategoriesBySlugQuery("Services");

    useSectionAnimation({
        sectionRef,
        tagRef,
        titleRef,
        listRef: cardsRef,
        ready,
    });

    if (!isPublished) return null;


    return (
        <section ref={sectionRef} className="business-services-section">
            <div className="container">
                <div className="section-heading">
                    <div ref={tagRef} className="section-tag">
                        {section?.tag || DEFAULT_TAG}
                    </div>

                    <h2 ref={titleRef} className="section-title">
                        {section?.title || DEFAULT_TITLE}
                    </h2>
                </div>

                <Swiper
                    modules={[Grid, Autoplay]}
                    slidesPerView={3}
                    grid={{
                        rows: 2,
                        fill: "row",
                    }}
                    spaceBetween={24}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            grid: {
                                rows: 2,
                            },
                        },
                        768: {
                            slidesPerView: 2,
                            grid: {
                                rows: 2,
                            },
                        },
                        1200: {
                            slidesPerView: 3,
                            grid: {
                                rows: 2,
                            },
                        },
                    }}
                >
                    {data?.data?.map((service, index) => {
                        const Icon = Icons[service.icon] || Icons.Briefcase;

                        return (
                            <SwiperSlide key={index}>
                                <div className="business-service-card">
                                    <span className="solution-icon">
                                        <Icon />
                                    </span>

                                    <h3 className="service-card-title">
                                        {service.name}
                                    </h3>

                                    <p>{service.description}</p>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
}

export default BusinessServices;