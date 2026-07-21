import { useEffect, useState } from "react";
import { useGetHomeSectionQuery } from "../redux/api";

/**
 * Fetches a single Home Page content section (by its sectionKey) and
 * exposes it in a shape that's convenient for components:
 *
 *   const sectionRef = useRef(null);
 *   const { section, items, ready, isPublished } = useHomeSection("whyChooseUs", sectionRef);
 *
 * - `section`     the raw section document ({ tag, title, description, ... })
 *                 or undefined while first loading / not yet in view.
 * - `items`       section.items array, or [] if empty/loading.
 * - `ready`       false until the section has actually been fetched — use
 *                 this to gate entrance animations so they play once, on
 *                 real content.
 * - `isPublished` true unless the admin explicitly unpublished the section.
 *
 * Components should merge `section?.field` with a sensible static fallback
 * so the page never renders blank while data is loading:
 *   section?.title || "Some default title"
 *
 * `viewRef` (optional): a ref pointing at the section's root DOM node. When
 * given, the API call is held off (via RTK Query's `skip`) until that node
 * scrolls near the viewport, instead of firing for every homepage section
 * the moment the page mounts. Pass the same ref you already attach to the
 * <section> element for entrance animations — no extra DOM node needed.
 * Omit it (or pass nothing) to fetch immediately, e.g. for above-the-fold
 * content.
 */
export function useHomeSection(key, viewRef) {
    const [inView, setInView] = useState(!viewRef);

    useEffect(() => {
        if (!viewRef) return; // no ref passed -> fetch immediately, as before
        if (inView) return; // already triggered, nothing left to observe

        const node = viewRef.current;
        if (!node || typeof IntersectionObserver === "undefined") {
            setInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            // Start fetching a little before the section is actually
            // visible so content is ready by the time the user scrolls to it.
            { rootMargin: "300px 0px", threshold: 0.01 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [viewRef, inView]);

    const { data, isLoading, isFetching, isError } = useGetHomeSectionQuery(key, {
        skip: !inView,
    });

    const section = data?.data;

    return {
        section,
        items: section?.items || [],
        ready: inView && !isLoading,
        isFetching,
        isError,
        isPublished: section?.isPublished !== false,
    };
}

export default useHomeSection;
