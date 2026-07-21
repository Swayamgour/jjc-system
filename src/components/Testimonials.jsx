import React, { useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import { Icons, reviews as DEFAULT_REVIEWS } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { useHomeSection } from "../hooks/useHomeSection";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const DEFAULT_TAG = "WHAT OUR CLIENTS SAY";
const DEFAULT_TITLE = "Testimonials";

function Testimonials() {
    const sectionRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef(null);

    const { section, items, ready, isPublished } = useHomeSection("testimonials", sectionRef);

    useSectionAnimation({
        sectionRef,
        tagRef,
        titleRef,
        listRef: cardsRef,
        ready,
    });

    if (!isPublished) return null;

    const testimonials = items.length
        ? items.map((item) => ({
            text: item.description,
            name: item.title,
            title: item.subtitle,
        }))
        : DEFAULT_REVIEWS;

    return (
        <section
            ref={sectionRef}
            className="testimonials-section"
        >
            <div className="container">

                <div className="testimonials-header">

                    <div
                        ref={tagRef}
                        className="section-tag"
                    >
                        {section?.tag || DEFAULT_TAG}
                    </div>

                    <h2
                        ref={titleRef}
                        className="resources-title"
                    >
                        {section?.title || DEFAULT_TITLE}
                    </h2>

                </div>

                <div
                    ref={cardsRef}
                    className="testimonials-grid"
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={3}
                        centeredSlides={false}
                        speed={800}
                         loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{ clickable: true }}
                        loop={testimonials.length > 3}
                        grabCursor
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 16,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {testimonials.map((review, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial-card">
                                    <div className="testimonial-quote">
                                        <FaQuoteLeft />
                                    </div>

                                    <p className="testimonial-text">
                                        {review.text}
                                    </p>

                                    <div className="testimonial-user">
                                        <div className="testimonial-avatar">
                                            {review.name?.[0]}
                                        </div>

                                        <div>
                                            <div className="testimonial-name">
                                                {review.name}
                                            </div>

                                            <div className="testimonial-role">
                                                {review.title}
                                            </div>

                                            <div className="testimonial-stars">
                                                {[...Array(5)].map((_, i) => (
                                                    <Icons.Star
                                                        key={i}
                                                        filled
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

            </div>
        </section>
    );
}

export default Testimonials;
