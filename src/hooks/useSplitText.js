import { useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export const useSplitText = (ref) => {
    useLayoutEffect(() => {
        if (!ref.current) return;

        let split;

        const createSplit = () => {
            // Remove previous split
            if (split) {
                split.revert();
                ScrollTrigger.getAll().forEach((st) => {
                    if (st.trigger === ref.current) st.kill();
                });
            }

            split = new SplitType(ref.current, {
                types: "lines, words, chars",
            });

            gsap.from(split.chars, {
                x: 150,
                opacity: 0,
                duration: 0.7,
                stagger: 0.04,
                ease: "power4.out",

                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
                    once: true,
                },
            });
        };

        createSplit();

        const handleResize = () => {
            createSplit();
            ScrollTrigger.refresh();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);

            gsap.killTweensOf(ref.current);

            if (split) split.revert();

            ScrollTrigger.getAll().forEach((st) => {
                if (st.trigger === ref.current) st.kill();
            });
        };
    }, []);
};