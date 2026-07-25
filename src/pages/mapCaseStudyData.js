// utils/mapCaseStudyData.js
//
// Single adapter that turns EITHER an Industry-linked case study
// OR a Capability/Platform-linked case study into one normalized
// shape that <CaseStudyDetailV2 /> knows how to render.
//
// Why this exists:
// "Browse By Industry" pages (Industries.jsx / IndustrieGrid.jsx) and
// "Browse By Capability" pages (ServicePage.jsx via Platforms/Services)
// each carry their own success-story data with slightly different
// field names + nesting. Rather than forking the detail page in two,
// we map both into ONE schema and render with ONE component.
//
// Adjust the field-name fallbacks below (the `||` chains) to match
// your actual Mongoose response shape once the Case Study model /
// API endpoint is finalized — everything is read defensively so
// missing fields just fall back to sane defaults instead of crashing.

const FALLBACK_THEME = {
  accent: "#1e5fd9",
  accentDark: "#0b1e4d",
  accentLight: "#5b8def",
  accentSoft: "rgba(30,95,217,0.08)",
  accentRgb: "30, 95, 217",
};

function pick(...vals) {
  return vals.find((v) => v !== undefined && v !== null && v !== "");
}

function mapStatList(raw = []) {
  return raw.map((r) => ({
    icon: r.icon || r.iconName || "TrendingUp",
    value: pick(r.value, r.stat, r.number, ""),
    label: pick(r.label, r.title, r.desc, ""),
  }));
}

function mapChecklist(raw = []) {
  return raw.map((r) => (typeof r === "string" ? r : pick(r.text, r.label, r.title, "")));
}

/**
 * @param {object} source     Raw case-study record as it arrives from the API
 *                             (could be embedded inside an Industry doc, a
 *                             Capability/Service doc, or standalone).
 * @param {"industry"|"capability"} sourceType  Where it's being browsed from —
 *                             drives breadcrumb labels + category tag wording
 *                             and which parent object's theme colors to use.
 * @param {object} parent     Optional parent Industry/Capability object, used
 *                             for theme + breadcrumb name when the case study
 *                             itself doesn't carry that info.
 */
export function mapCaseStudyData(source = {}, sourceType = "industry", parent = {}) {
  const cs = source.caseStudy || source; // some payloads nest it, some don't
  const parentName = pick(parent.name, parent.title, source.industryName, source.capabilityName);
  const parentSlug = pick(parent.slug, source.industrySlug, source.capabilitySlug, "");
  const theme = pick(parent.theme, source.theme, cs.theme, FALLBACK_THEME);

  const browseLabel = sourceType === "capability" ? "Browse By Capability" : "Browse By Industry";
  const browsePath = sourceType === "capability" ? "/capabilities" : "/industries";

  return {
    sourceType,
    theme: { ...FALLBACK_THEME, ...theme },

    breadcrumb: [
      { label: "Home", url: "/" },
      { label: "Client Success", url: "/client-success" },
      { label: browseLabel, url: browsePath },
      ...(parentName ? [{ label: parentName, url: `${browsePath}/${parentSlug}` }] : []),
      { label: "Case Study", isActive: true },
    ],

    category: pick(
      cs.categoryTag,
      parentName && `${parentName.toUpperCase()} CASE STUDY`,
      sourceType === "capability" ? "CAPABILITY CASE STUDY" : "INDUSTRY CASE STUDY"
    ),

    title: pick(cs.title, cs.heading, "Untitled Case Study"),
    description: pick(cs.description, cs.summary, cs.excerpt, ""),
    heroImage: pick(cs.heroImage, cs.image, cs.banner, ""),

    techBadges: pick(cs.techBadges, cs.technologies?.map((t) => t.name || t), cs.tags, []),

    heroStats: mapStatList(pick(cs.heroStats, cs.headlineStats, [])),

    ctaLabel: pick(cs.ctaLabel, "Schedule a Consultation"),
    ctaLink: pick(cs.ctaLink, "/contact-us"),

    clientInfo: [
      { icon: "User", label: "Client", value: pick(cs.client, cs.clientName, "—") },
      {
        icon: "Building2",
        label: "Industry",
        value: pick(cs.industry, parentName, "—"),
      },
      { icon: "MapPin", label: "Headquarters", value: pick(cs.headquarters, cs.location, "—") },
      { icon: "Users", label: "Employees", value: pick(cs.employees, cs.headcount, "—") },
      {
        icon: "Calendar",
        label: "Engagement Period",
        value: pick(cs.engagementPeriod, cs.duration, "—"),
      },
    ],

    challenge: {
      heading: pick(cs.challenge?.heading, "The Challenge"),
      intro: pick(cs.challenge?.intro, cs.challengeIntro, ""),
      items: mapChecklist(pick(cs.challenge?.items, cs.challenges, [])),
    },

    solution: {
      heading: pick(cs.solution?.heading, "Our Solution"),
      intro: pick(cs.solution?.intro, cs.solutionIntro, ""),
      items: mapChecklist(pick(cs.solution?.items, cs.solutions, [])),
    },

    approach: {
      heading: pick(cs.approach?.heading, "Our Approach"),
      steps: pick(cs.approach?.steps, cs.processSteps, []).map((s, i) => ({
        number: pick(s.number, String(i + 1).padStart(2, "0")),
        icon: pick(s.icon, "Search"),
        title: pick(s.title, s.label, ""),
        desc: pick(s.desc, s.description, ""),
      })),
    },

    results: {
      heading: pick(cs.results?.heading, "Results & Impact"),
      stats: mapStatList(pick(cs.results?.stats, cs.resultStats, [])),
      closing: pick(cs.results?.closing, cs.resultsClosing, ""),
    },

    technologies: {
      heading: pick(cs.technologies?.heading, "Technologies Used"),
      items: pick(cs.technologies?.items, cs.techStack, []).map((t) => ({
        icon: pick(t.icon, t.logo, ""),
        name: pick(t.name, t, ""),
      })),
    },

    beforeAfter: {
      before: mapChecklist(pick(cs.beforeAfter?.before, cs.before, [])),
      after: mapChecklist(pick(cs.beforeAfter?.after, cs.after, [])),
    },

    testimonial: cs.testimonial
      ? {
          quote: pick(cs.testimonial.quote, ""),
          author: pick(cs.testimonial.author, cs.testimonial.name, ""),
          role: pick(cs.testimonial.role, cs.testimonial.title, ""),
          image: pick(cs.testimonial.image, cs.heroImage, ""),
        }
      : null,

    gallery: pick(cs.gallery, cs.images, []),

    moreStories: pick(cs.moreStories, cs.related, cs.relatedCaseStudies, []).map((r) => ({
      image: pick(r.image, r.heroImage, ""),
      category: pick(r.category, r.industry, ""),
      title: pick(r.title, ""),
      link: pick(r.link, r.url, "#"),
    })),
  };
}

export default mapCaseStudyData;
