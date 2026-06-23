import { useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useSplitText = (ref) => {
    useLayoutEffect(() => {
        if (!ref.current) return;

        const split = new SplitType(ref.current, {
            types: "chars"
        });

        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
                once: true
            },
            x: 150,
            opacity: 0,
            duration: 0.7,
            stagger: 0.04,
            ease: "power4.out"
        });

        const handleResize = () => {
            split.revert();

            const newSplit = new SplitType(ref.current, {
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
            window.removeEventListener("resize", handleResize);
        };
    }, [ref]);
};