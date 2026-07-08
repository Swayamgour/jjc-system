import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const useSectionAnimation = ({
    sectionRef,
    tagRef,
    titleRef,
    descRef,
    listRef,
    outroRef,
}) => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            let split = null;

            if (titleRef?.current) {
                split = new SplitType(titleRef.current, {
                    // types: "chars",
                      types: "lines, words, chars",
                });
            }

            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                    duration: 0.4,
                },
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            if (tagRef?.current) {
                tl.from(tagRef.current, {
                    y: 25,
                    opacity: 0,
                    duration: 0.35,
                });
            }

            if (split) {
                tl.from(
                    split.chars,
                    {
                        x: 70,
                        opacity: 0,
                        stagger: 0.015,
                        duration: 0.35,
                    },
                    "-=0.15"
                );
            }

            if (descRef?.current) {
                tl.from(
                    descRef.current,
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.35,
                    },
                    "-=0.2"
                );
            }

            if (listRef?.current?.children?.length) {
                gsap.set(listRef.current.children, {
                    opacity: 1,
                    x: 0,
                });

                tl.from(
                    [...listRef.current.children],
                    {
                        x: 30,
                        opacity: 0,
                        stagger: 0.06,
                        duration: 0.35,
                        ease: "power3.out",
                        clearProps: "all",
                    },
                    "-=0.15"
                );
            }

            if (outroRef?.current) {
                tl.from(
                    outroRef.current,
                    {
                        y: 15,
                        opacity: 0,
                        duration: 0.3,
                    },
                    "-=0.2"
                );
            }

            return () => {
                split?.revert();
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);
};