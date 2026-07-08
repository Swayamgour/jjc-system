import React, { useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import { Icons, reviews } from "../utils/data";
import { useSectionAnimation } from "../hooks/useSectionAnimation";

function Testimonials() {
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
            className="testimonials-section"
        >
            <div className="container">

                <div className="testimonials-header">

                    <div
                        ref={tagRef}
                        className="section-tag"
                    >
                        WHAT OUR CLIENTS SAY
                    </div>

                    <h2
                        ref={titleRef}
                        className="resources-title"
                    >
                        Testimonials
                    </h2>

                </div>

                <div
                    ref={cardsRef}
                    className="testimonials-grid"
                >
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="testimonial-card"
                        >
                            <div className="testimonial-quote">
                                <FaQuoteLeft />
                            </div>

                            <p className="testimonial-text">
                                {review.text}
                            </p>

                            <div className="testimonial-user">

                                <div className="testimonial-avatar">
                                    {review.name[0]}
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
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Testimonials;