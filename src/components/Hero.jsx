

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
// import SplitText from "gsap/SplitText";
import SplitType from "split-type";
import { motion } from "framer-motion";

import { Icons, stats, floatingCards } from "../utils/data";

// gsap.registerPlugin(SplitText);

const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 }
    }
};

const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay: 0.2 }
    }
};

export default function Hero({
    tag,
    title,
    description,
    primaryButton,
    secondaryButton,
    partners,
    image,
    floatingCards
}) {

    // const titleRef = useRef(null);
    const heroRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const actionsRef = useRef(null);
    const partnersRef = useRef(null);
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            const split = new SplitType(titleRef.current, {
                types: "chars"
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

                .from(partnersRef.current.children, {
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

    }, []);


    return (
        // <section className="hero">
        <section ref={heroRef} className="hero">

            <div className="container-hero hero-container">

                {/* Left */}

                <motion.div
                    className="hero-content"
                    variants={fadeLeft}
                    initial="hidden"
                    animate="show"
                >
                    <span ref={tagRef} className="hero-tag">
                        {/* SMART SOLUTIONS. REAL IMPACT. */}
                        {tag}
                    </span>



                    <h1 ref={titleRef} className="hero-title">
                        {title}
                        {/* Microsoft Consulting
                        <br />
                        Services for
                        <span className="highlight"> Modern</span>
                        <br />
                        Business Operations */}
                    </h1>

                    <p ref={descRef} className="hero-description">
                        {/* JJC Partners helps enterprises unlock the full potential
                        of Microsoft technologies to drive efficiency,
                        agility, and growth. */}

                        {description}
                    </p>

                    <div ref={actionsRef} className="hero-actions">

                        <button className="btn-primary">
                            {primaryButton.text}
                            <Icons.Arrow />
                        </button>

                        <button className="btn-secondary">
                            {secondaryButton.text}
                        </button>

                    </div>

                    <div ref={partnersRef} className="hero-partners">
                        {partners.map((item, index) => (
                            <div className="partner-item" key={index}>
                                {item.icon}
                                <span>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right */}

                <div ref={imageRef} className="hero-image-area">

                    {/* <div className="hero-team-card"> */}
                    <img src={image} alt="team" />
                    {/* </div> */}

                    {floatingCards.map((card, index) => (
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