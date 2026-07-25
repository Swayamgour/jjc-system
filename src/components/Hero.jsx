

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { motion } from "framer-motion";

import { Icons } from "../utils/data";
import { useNavigate } from "react-router";

const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 }
    }
};

export default function Hero({
    tag,
    title,
    description,
    subDescription,
    primaryButton,
    secondaryButton,
    partners,
    image,
    floatingCards,
    ready = true,
    budge,
    align,
    d
}) {

    const heroRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const actionsRef = useRef(null);
    const partnersRef = useRef(null);
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        if (!ready) return;

        const ctx = gsap.context(() => {

            const split = new SplitType(titleRef.current, {
                // types: "chars"
                types: "lines, words, chars",
            });

            const tl = gsap.timeline({
                defaults: {
                    ease: "power4.out"
                }
            });

            tl.from(tagRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.6
            })

                .from(split.chars, {
                    x: 150,
                    opacity: 0,
                    duration: 0.7,
                    stagger: 0.04,
                    ease: "power4.out"
                }, "-=0.2")

                .from(descRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 0.6
                }, "-=0.3")

                .from(actionsRef.current.children, {
                    y: 30,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 0.5
                }, "-=0.3")

                .from(partnersRef.current?.children || [], {
                    y: 20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.5
                }, "-=0.2")

                .from(imageRef.current, {
                    y: -120,
                    opacity: 0,
                    scale: 0.9,
                    duration: 1.2,
                    ease: "power4.out"
                }, "-=0.8");

            // Floating cards entry
            gsap.from(".floating-card", {
                scale: 0,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(1.7)",
                delay: 1.4
            });

            // Floating motion
            gsap.to(".floating-card", {
                y: -15,
                duration: 2,
                repeat: -1,
                yoyo: true,
                stagger: 0.2,
                ease: "sine.inOut"
            });

            // Mouse parallax
            const moveImage = (e) => {
                gsap.to(imageRef.current, {
                    y: (e.clientY - window.innerHeight / 2) * 0.02,
                    duration: 1,
                    ease: "power2.out"
                });
            };

            window.addEventListener("mousemove", moveImage);

            // Responsive split refresh
            const handleResize = () => {
                split.revert();

                const newSplit = new SplitType(titleRef.current, {
                    types: "chars"
                });

                gsap.from(newSplit.chars, {
                    x: 150,
                    opacity: 0,
                    duration: 0.7,
                    stagger: 0.04,
                    ease: "power4.out"
                });
            };

            window.addEventListener("resize", handleResize);

            return () => {
                split.revert();
                window.removeEventListener("mousemove", moveImage);
                window.removeEventListener("resize", handleResize);
            };

        }, heroRef);

        return () => ctx.revert();

    }, [ready]);

    const navigate = useNavigate()

    const CheckCircle = (color) => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <motion.circle
                cx="8" cy="8" r="7"
                stroke={color} strokeWidth="1.4" fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <motion.path
                d="M5 8l2 2 4-4"
                stroke={color} strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
            />
        </svg>
    );


    return (
        <section ref={heroRef} className="hero">

            <div style={{ alignItems: align ? "end" : "flex-start" }} className="container-hero hero-container" >

                {/* Left */}

                <motion.div
                    className="hero-content"
                    variants={fadeLeft}
                    initial="hidden"
                    animate="show"
                >

                    <div className="breadcrumb-bar">
                        <div className="breadcrumb">
                            {d?.breadcrumb?.map((item, i) => (
                                <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    {i > 0 && <span className="breadcrumb-sep">/</span>}
                                    <span className={i === d?.breadcrumb?.length - 1 ? "breadcrumb-current" : "breadcrumb-link"}>
                                        {item}
                                    </span>
                                </span>
                            ))}
                        </div>
                    </div>

                    <span ref={tagRef} className="service-hero-tag">
                        {tag || d?.badge}
                    </span>

                    <h1 ref={titleRef} className="hero-title">
                        {title}
                    </h1>

                    <p ref={descRef} className="service-hero-desc">
                        {description}
                    </p>

                    {subDescription &&
                        <p ref={descRef} className="service-hero-desc">
                            {subDescription}
                        </p>}

                    <div ref={actionsRef} className="hero-actions">

                        <button
                            type="button"
                            className="btn-primary"
                            onClick={() => navigate("/contact")}
                        >
                            Schedule a Consultation
                            <Icons.Arrow />
                        </button>

                        <button
                            type="button"
                            className="btn-secondary"
                            onClick={() => navigate(secondaryButton?.link || "/services")}
                        >
                            {secondaryButton?.text || secondaryButton}
                        </button>

                    </div>

                    {partners?.length > 0 && (
                        <div ref={partnersRef} className="hero-partners">
                            {partners.map((item, index) => (
                                <div className="partner-item" key={index}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {budge && <div ref={imageRef} className="service-hero-badges">
                        {budge?.map((b, i) => (
                            <div key={i} className="service-hero-badge">
                                {CheckCircle("rgba(255,255,255,0.85)")} {b}
                            </div>
                        ))}
                    </div>}
                </motion.div>

                {/* Right */}

                <div ref={imageRef} className="hero-image-area">

                    <img style={{ borderRadius: '10px' }} src={image} alt="JJC Systems" />

                    {floatingCards?.map((card, index) => (
                        <motion.div
                            key={index}
                            className={`floating-card floating-card-${index}`}
                            initial={{
                                opacity: 0,
                                scale: 0.8
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: [0, -10, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: index * 0.2
                            }}
                        >
                            <div className="floating-icon">
                                {card.icon}
                            </div>

                            <div className="floating-value">
                                {card.value}
                            </div>

                            <div style={{ color: 'var(--bg-white)' }} className="floating-label">
                                {card.label}
                            </div>
                        </motion.div>
                    ))}

                </div>

            </div>



        </section>
    );
}
