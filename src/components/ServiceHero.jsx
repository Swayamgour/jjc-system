import { motion } from "framer-motion";
import { Icons } from "../utils/data";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

import '../pages/ServicePage.css'
import { useSplitText } from "../hooks/useSplitText";

function ServiceHero({ d }) {
    // console.log(d)

    const heroRef = useRef(null);
    const breadcrumbRef = useRef(null);
    const tagRef = useRef(null);
    const titleRef = useRef(null);

    useSplitText(titleRef);
    const descRef = useRef(null);
    const subDescRef = useRef(null);
    const actionsRef = useRef(null);
    const badgesRef = useRef(null);
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                defaults: { ease: "power4.out" },
            });

            breadcrumbRef.current &&
                tl.from(breadcrumbRef.current, {
                    y: -30,
                    opacity: 0,
                    duration: 0.5,
                });

            tagRef.current &&
                tl.from(
                    tagRef.current,
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.5,
                    },
                    "-=0.2"
                );

            titleRef.current &&
                tl.from(
                    titleRef.current,
                    {
                        y: 40,
                        opacity: 0,
                        duration: 0.7,
                    },
                    "-=0.1"
                );

            descRef.current &&
                tl.from(
                    descRef.current,
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.5,
                    },
                    "-=0.3"
                );

            subDescRef.current &&
                tl.from(
                    subDescRef.current,
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.5,
                    },
                    "-=0.35"
                );

            actionsRef.current &&
                tl.from(
                    actionsRef.current,
                    {
                        y: 30,
                        opacity: 0,
                        stagger: 0.12,
                        duration: 0.5,
                    },
                    "-=0.3"
                );

            badgesRef.current &&
                tl.from(
                    badgesRef.current.children,
                    {
                        y: 20,
                        opacity: 0,
                        stagger: 0.08,
                        duration: 0.45,
                    },
                    "-=0.25"
                );

            imageRef.current &&
                tl.from(
                    imageRef.current,
                    {
                        y: -120,
                        opacity: 0,
                        scale: 0.9,
                        duration: 1.2,
                    },
                    "-=0.8"
                );

            const floatIcons =
                heroRef.current?.querySelectorAll(".service-float-icon") || [];

            if (floatIcons.length) {
                gsap.from(floatIcons, {
                    scale: 0,
                    opacity: 0,
                    stagger: 0.12,
                    ease: "back.out(1.7)",
                    duration: 0.8,
                    delay: 1,
                });

                gsap.to(floatIcons, {
                    y: -15,
                    repeat: -1,
                    yoyo: true,
                    stagger: 0.2,
                    ease: "sine.inOut",
                    duration: 2,
                });
            }

            let moveY;

            if (imageRef.current) {
                moveY = gsap.quickTo(imageRef.current, "y", {
                    duration: 1,
                    ease: "power2.out",
                });
            }

            const moveImage = (e) => {
                if (!moveY) return;
                moveY((e.clientY - window.innerHeight / 2) * 0.02);
            };

            window.addEventListener("mousemove", moveImage);

            return () => {
                window.removeEventListener("mousemove", moveImage);
                tl.kill();
            };
        }, heroRef);

        return () => {
            ctx.revert();
        };
    }, []);

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
        <section ref={heroRef} className="service-hero">

            {/* Breadcrumb */}
            <div className="container-hero breadcrumb-bar">
                <div ref={breadcrumbRef} className="breadcrumb">
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

            {/* Text content grid */}
            <div className="container-hero service-hero-grid">
                <div>
                    <div ref={tagRef} className="service-hero-tag">
                        {d?.badge}
                    </div>

                    <h1 ref={titleRef} className="service-hero-title">
                        {d?.title}
                    </h1>

                    <p ref={descRef} className="service-hero-desc">
                        {d?.description}
                    </p>

                    <p ref={subDescRef} className="service-hero-desc" style={{ marginBottom: 0 }}>
                        {d?.subDescription}
                    </p>

                    <div className="service-hero-actions" ref={actionsRef}>
                        {/* FIX: whileTap only works on motion.button, not plain <button> */}
                        <motion.button
                            className="service-btn-primary"
                            whileTap={{ scale: 0.95 }}
                        >
                            Schedule a Consultation <Icons.Arrow />
                        </motion.button>
                        <motion.button
                            className="service-btn-secondary"
                            whileTap={{ scale: 0.95 }}
                        >
                            {d?.exploreLabel || "Explore Our Services"}
                        </motion.button>
                    </div>

                    <div ref={badgesRef} className="service-hero-badges">
                        {d?.heroBadges?.map((b, i) => (
                            <div key={i} className="service-hero-badge">
                                {CheckCircle("rgba(255,255,255,0.85)")} {b}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right column — image positioned absolutely */}
                <div />
            </div>

            {/* Background image */}
            <div className="service-hero-image-wrap">
                <div ref={imageRef} className="service-hero-image">
                    {d?.heroImage && <img src={d?.heroImage} alt={d?.title} />}
                </div>
            </div>

            <svg className="hero-svg-defs" aria-hidden="true">
                <defs>
                    <clipPath id="heroCurveMask" clipPathUnits="objectBoundingBox">
                        <path d="M0.32,0 C0.10,0.22 0.08,0.78 0.20,1 L1,1 L1,0 Z" />
                    </clipPath>
                </defs>
            </svg>

            {/* Float icons — uncomment when ready */}
            {/* {(d?.floatingIcons || []).map((f, i) => (
                <div
                    key={i}
                    className="service-float-icon"
                    style={f.position}
                >
                    <img src={f.icon} alt={f.label} />
                    {f.label && <span className="service-float-label">{f.label}</span>}
                </div>
            ))} */}

        </section>
    );
}

export default ServiceHero;