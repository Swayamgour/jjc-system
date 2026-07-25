

import { useCallback, useEffect, useRef, useState } from "react";
import "./HomeHero.css";
import image from '../assets/New folder/download.jpg'
import image1 from '../assets/New folder/download (1).jpg'
import image2 from '../assets/New folder/download (2).jpg'
import image3 from '../assets/New folder/download (3).jpg'

const DEFAULT_SLIDES = [
    {
        eyebrow: "AI Readiness & ROI",
        title: "Feeling overwhelmed by the new AI wave?",
        text: "We help you evaluate where Microsoft Copilot and agentic AI genuinely pay off, cut through the uncertainty, and build a practical roadmap you can act on.",
        image: image,
        ctaLabel: "Get your free AI ROI assessment",
        ctaHref: "#contact",
    },
    {
        eyebrow: "What We Do",
        title: "Technology consulting aligned to the way business works",
        text: "We start with your applications and your goals, not a product catalogue — with full vendor transparency and deep Microsoft Dynamics 365 expertise when that's the right fit.",
        image: image1,
        ctaLabel: "Explore our services",
        ctaHref: "#services",
    },
    {
        eyebrow: "Customer Stories",
        title: "Helping clients across industries achieve real results",
        text: "Practical technology that improves how organizations operate, collaborate, see their data and grow — measured in outcomes, not deliverables.",
        image: image2,
        ctaLabel: "Explore success stories",
        ctaHref: "#success-stories",
    },
    {
        eyebrow: "Custom Solutions",
        title: "Custom solutions built inside the tools your teams already use",
        text: "Industry- and business-focused solutions delivered through Microsoft 365, Office and Dynamics Business Applications — so your people work smarter without changing how they work.",
        image: image3,
        ctaLabel: "Request your custom demo",
        ctaHref: "#solutions",
    },
    {
        eyebrow: "Client Testimonials",
        title: "See what our clients have to say",
        text: "Clients stay with us for the quality of the work, the speed of our response, and technology that improves both the daily grind and the long-term picture.",
        image: image,
        ctaLabel: "Read client testimonials",
        ctaHref: "#testimonials",
    },
];

function ArrowIcon({ direction = "right" }) {
    const d = direction === "right" ? "M3.8 12h15.4" : "M20.2 12H4.8";
    const arrowD =
        direction === "right" ? "m13.2 5.6 6 6.4-6 6.4" : "m10.8 5.6-6 6.4 6 6.4";
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d={d} />
            <path d={arrowD} />
        </svg>
    );
}

export default function HomeHero({ slides = DEFAULT_SLIDES, delay = 7000 }) {
    const [active, setActive] = useState(0);
    const timerRef = useRef(null);
    const touchX = useRef(null);
    const reduceMotion = useRef(
        typeof window !== "undefined" && window.matchMedia
            ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
            : false
    );

    const goTo = useCallback(
        (n) => {
            setActive(((n % slides.length) + slides.length) % slides.length);
        },
        [slides.length]
    );

    const next = useCallback(() => goTo(active + 1), [active, goTo]);
    const prev = useCallback(() => goTo(active - 1), [active, goTo]);

    const stop = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
    }, []);

    const start = useCallback(() => {
        if (reduceMotion.current) return;
        stop();
        timerRef.current = setInterval(() => {
            setActive((i) => (i + 1) % slides.length);
        }, delay);
    }, [delay, slides.length, stop]);

    useEffect(() => {
        start();
        return stop;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const restart = () => {
        stop();
        start();
    };

    const handleTouchStart = (e) => {
        touchX.current = e.touches[0].clientX;
        stop();
    };
    const handleTouchEnd = (e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) {
            dx < 0 ? next() : prev();
        }
        touchX.current = null;
        start();
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowRight") {
            next();
            restart();
        }
        if (e.key === "ArrowLeft") {
            prev();
            restart();
        }
    };

    return (
        <section
            className="jjc-hero"
            id="top"
            aria-roledescription="carousel"
            aria-label="JJC Systems highlights"
            onMouseEnter={stop}
            onMouseLeave={start}
            onFocus={stop}
            onBlur={start}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className="jjc-slides">
                {slides.map((slide, i) => (
                    <article
                        key={slide.title}
                        className={`jjc-slide${i === active ? " is-active" : ""}`}
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`${i + 1} of ${slides.length}: ${slide.eyebrow}`}
                    >
                        <div className="jjc-slide-media">
                            <img src={slide.image} alt="" loading={i === 0 ? "eager" : "lazy"} />
                        </div>
                        <div className="jjc-slide-grid">
                            <div className="jjc-slide-copy">
                                <span className="jjc-hero-eyebrow">{slide.eyebrow}</span>
                                <h1>{slide.title}</h1>
                                <p>{slide.text}</p>
                                <a className="jjc-btn jjc-btn-primary" href={slide.ctaHref}>
                                    {slide.ctaLabel} <ArrowIcon direction="right" />
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="jjc-hero-ui">
                <button
                    className="jjc-arrow"
                    aria-label="Previous slide"
                    onClick={() => {
                        prev();
                        restart();
                    }}
                >
                    <ArrowIcon direction="left" />
                </button>

                <div className="jjc-dots" aria-label="Choose slide">
                    {slides.map((slide, i) => (
                        <button
                            key={slide.title}
                            aria-label={`Go to slide ${i + 1}`}
                            aria-current={i === active}
                            onClick={() => {
                                goTo(i);
                                restart();
                            }}
                        />
                    ))}
                </div>

                <button
                    className="jjc-arrow"
                    aria-label="Next slide"
                    onClick={() => {
                        next();
                        restart();
                    }}
                >
                    <ArrowIcon direction="right" />
                </button>
            </div>
        </section>
    );
}