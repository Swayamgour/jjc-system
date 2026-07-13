import { useGetHomeSectionQuery } from "../redux/api";

/**
 * Fetches a single Home Page content section (by its sectionKey) and
 * exposes it in a shape that's convenient for components:
 *
 *   const { section, items, ready, isPublished } = useHomeSection("whyChooseUs");
 *
 * - `section`     the raw section document ({ tag, title, description, ... })
 *                 or undefined while first loading.
 * - `items`       section.items array, or [] if empty/loading.
 * - `ready`       false only during the very first fetch — use this to gate
 *                 entrance animations so they play once, on real content.
 * - `isPublished` true unless the admin explicitly unpublished the section.
 *
 * Components should merge `section?.field` with a sensible static fallback
 * so the page never renders blank while data is loading:
 *   section?.title || "Some default title"
 */
export function useHomeSection(key) {
    const { data, isLoading, isFetching, isError } = useGetHomeSectionQuery(key);

    const section = data?.data;

    return {
        section,
        items: section?.items || [],
        ready: !isLoading,
        isFetching,
        isError,
        isPublished: section?.isPublished !== false,
    };
}

export default useHomeSection;
