/**
 * mapCaseStudyData
 * ------------------------------------------------------------------
 * Normalizes a raw case-study record coming from the API into the
 * exact prop shape <CaseStudyDetailV2 /> expects.
 *
 * One mapper, two entry points:
 *   - "industry"    -> reached from Client Success > Browse By Industry
 *   - "capability"   -> reached from Client Success > Browse By Capability
 *
 * The only real difference between the two is the breadcrumb trail and
 * the "category" eyebrow label — everything else (challenge, solution,
 * approach, results, testimonial, gallery...) is read the same way
 * regardless of where the visitor came from.
 *
 * Usage:
 *   const data = mapCaseStudyData(apiCaseStudy, "industry", parentIndustry);
 *   const data = mapCaseStudyData(apiCaseStudy, "capability", parentCapability);
 */

const FALLBACK_THEME = {
    accent: "#2563EB",
    accentDark: "#1D4ED8",
    accentLight: "#4F8CFF",
    accentSoft: "rgba(37,99,235,0.08)",
    accentRgb: "37,99,235",
};

function buildBreadcrumb(cs, sourceType, parent) {
    const parentLabel =
        parent?.name || parent?.title || (sourceType === "industry" ? "Industry" : "Capability");
    const parentUrl =
        parent?.url ||
        (sourceType === "industry"
            ? `/industries/${parent?.slug || ""}`
            : `/capabilities/${parent?.slug || ""}`);

    return [
        { label: "Home", url: "/" },
        { label: "Client Success", url: "/client-success" },
        {
            label: sourceType === "industry" ? "Browse By Industry" : "Browse By Capability",
            url: sourceType === "industry" ? "/client-success#industry" : "/client-success#capability",
        },
        { label: parentLabel, url: parentUrl },
        { label: "Case Study", isActive: true },
    ];
}

function mapList(items, keyMap = {}) {
    if (!Array.isArray(items)) return [];
    return items.map((item) => {
        if (typeof item === "string") return item;
        const label = keyMap.label || "label";
        return item?.[label] ?? item?.value ?? item?.title ?? item;
    });
}

export function mapCaseStudyData(cs, sourceType = "industry", parent = {}) {
    if (!cs) return null;

    const theme = {
        accent: cs?.theme?.accent || parent?.theme?.accent || FALLBACK_THEME.accent,
        accentDark: cs?.theme?.accentDark || parent?.theme?.accentDark || FALLBACK_THEME.accentDark,
        accentLight: cs?.theme?.accentLight || parent?.theme?.accentLight || FALLBACK_THEME.accentLight,
        accentSoft: cs?.theme?.accentSoft || parent?.theme?.accentSoft || FALLBACK_THEME.accentSoft,
        accentRgb: cs?.theme?.accentRgb || parent?.theme?.accentRgb || FALLBACK_THEME.accentRgb,
    };

    return {
        sourceType,
        theme,
        breadcrumb: buildBreadcrumb(cs, sourceType, parent),

        category:
            cs?.category ||
            `${(parent?.name || sourceType).toString().toUpperCase()} CASE STUDY`,
        title: cs?.title,
        description: cs?.description || cs?.summary,
        heroImage: cs?.heroImage?.url || cs?.heroImage || cs?.image?.url,
        techBadges: cs?.techBadges || cs?.tags || [],
        heroStats: cs?.heroStats || [],

        ctaLabel: cs?.ctaLabel || "Schedule a Consultation",
        ctaLink: cs?.ctaLink || "/contact-us",

        clientInfo: cs?.clientInfo || [],

        overview: cs?.overview && {
            tag: cs.overview.tag || "PROJECT OVERVIEW",
            heading: cs.overview.heading,
            intro: cs.overview.intro,
            highlights: (cs.overview.highlights || []).map((h) => ({
                icon: h.icon,
                title: h.title,
                desc: h.desc || h.description,
            })),
        },

        challenge: cs?.challenge && {
            heading: cs.challenge.heading || "The Challenge",
            intro: cs.challenge.intro,
            items: mapList(cs.challenge.items),
        },

        solution: cs?.solution && {
            heading: cs.solution.heading || "Our Solution",
            intro: cs.solution.intro,
            items: mapList(cs.solution.items),
        },

        approach: cs?.approach && {
            heading: cs.approach.heading || "Our Approach",
            steps: (cs.approach.steps || []).map((s, i) => ({
                number: s.number || String(i + 1).padStart(2, "0"),
                icon: s.icon,
                title: s.title,
                desc: s.desc || s.description,
            })),
        },

        results: cs?.results && {
            heading: cs.results.heading || "Results & Impact",
            stats: cs.results.stats || [],
            closing: cs.results.closing || "",
        },

        technologies: cs?.technologies && {
            heading: cs.technologies.heading || "Technologies Used",
            items: (cs.technologies.items || []).map((t) =>
                typeof t === "string" ? { name: t } : { name: t.name }
            ),
        },

        beforeAfter: cs?.beforeAfter && {
            before: mapList(cs.beforeAfter.before),
            after: mapList(cs.beforeAfter.after),
        },

        testimonial: cs?.testimonial && {
            quote: cs.testimonial.quote,
            author: cs.testimonial.author,
            role: cs.testimonial.role,
            image: cs.testimonial.image?.url || cs.testimonial.image,
        },

        gallery: (cs?.gallery || []).map((g) => (typeof g === "string" ? g : g?.url)),

        faqs: (cs?.faqs || []).map((f) => ({
            question: f.question || f.q,
            answer: f.answer || f.a,
        })),

        resources: cs?.resources && {
            heading: cs.resources.heading || "Want the Full Breakdown?",
            description: cs.resources.description,
            downloadLabel: cs.resources.downloadLabel || "Download Full Case Study",
            downloadLink: cs.resources.downloadLink || cs.resources.pdfUrl,
            secondaryLabel: cs.resources.secondaryLabel,
            secondaryLink: cs.resources.secondaryLink,
        },

        moreStories: (cs?.moreStories || cs?.relatedCaseStudies || []).map((m) => ({
            category: m.category,
            title: m.title,
            link: m.link || `/client-success/${m.sourceType || sourceType}/${m.slug}`,
            image: m.image?.url || m.image,
        })),
    };
}

export default mapCaseStudyData;