import React, { useRef } from 'react'
import { Icons, reviews } from '../utils/data';
import { useInView , motion } from 'framer-motion';
import { FaQuoteLeft } from "react-icons/fa6";



function Testimonials() {
    //    reviews

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
            className="testimonials-section"
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
                    className="testimonials-header"
                >
                    <div className="section-tag">
                        WHAT OUR CLIENTS SAY
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
                    className="testimonials-grid"
                >
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            whileHover={{
                                y: -4,
                                boxShadow:
                                    "0 16px 40px rgba(0,0,0,0.08)"
                            }}
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
                                        {[...Array(5)].map(
                                            (_, i) => (
                                                <Icons.Star
                                                    key={i}
                                                    filled
                                                />
                                            )
                                        )}
                                    </div>

                                </div>

                            </div>

                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

export default Testimonials