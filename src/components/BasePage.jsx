import "../pages/ServicePage.css";
import ServiceHero from "../components/ServiceHero";

import {
    GridSection,
    IconStripSection,
    OverviewSection,
    ProcessSection,
    BenefitsSection,
    CaseStudiesSection,
    FaqSection,
    CtaSection,
    ContactFormSection,
    ContactInfoSection,
    OfficeLocationsSection,
} from "../components/SectionRenderers";

export default function BasePage({ data, pageType = "service" }) {

    const d = data;

    //      theme: {
    //     accent: "#2563EB", accentDark: "#1D4ED8", accentLight: "#4F8CFF",
    //     accentSoft: "rgba(37,99,235,0.08)", heroStart: "#03153c", heroEnd: "#0c5de8",
    //   },

    const themeVars = {
        "--svc-accent": d?.theme?.accent || "#2563EB",
        "--svc-accent-dark": d?.theme?.accentDark || "#1D4ED8",
        "--svc-accent-light": d?.theme?.accentLight || "#4F8CFF",
        "--svc-accent-soft": d?.theme?.accentSoft || "rgba(37,99,235,0.08)",
        "--svc-hero-start": d?.theme?.heroStart || "#03153c",
        "--svc-hero-end": d?.theme?.heroEnd || "#0c5de8",
        "--accent-rgb": d?.theme?.accentRgb || "37,99,235",
    };

    const sections = [

        // ==========================
        // COMMON OVERVIEW
        // ==========================

        d?.overview && {
            type: "overview",
            ...d.overview,
        },


        // ==========================
        // GRID SECTIONS
        // services + platform + industry
        // ==========================

        d?.capabilities && {
            type: "grid",
            ...d.capabilities,
        },

        d?.challenges && {
            type: "grid",
            ...d.challenges,
        },

        d?.serviceScope && {
            type: "grid",
            ...d.serviceScope,
        },

        d?.solutions && {
            type: "grid",
            ...d.solutions,
        },

        d?.costFactors && {
            type: "grid",
            ...d.costFactors,
        },


        // ==========================
        // PROCESS
        // ==========================

        (
            d?.implementationProcess ||
            d?.deliveryProcess ||
            d?.process
        ) && {
            type: "process",
            ...(
                d.implementationProcess ||
                d.deliveryProcess ||
                d.process
            ),
        },


        // ==========================
        // ICON STRIP
        // platforms + industries
        // ==========================

        d?.relatedPlatforms && {
            type: "iconStrip",
            ...d.relatedPlatforms,
        },

        d?.industries && {
            type: "iconStrip",
            ...d.industries,
        },

        d?.industryExamples && {
            type: "iconStrip",
            title: d.industryExamples.title,
            tag: d.industryExamples.tag,
            subtitle: d.industryExamples.subtitle,

            items: d.industryExamples.items?.map(item => ({
                icon: item.icon,
                title: item.industry,
                description: item.example
            }))
        },


        d?.technologies && {
            type: "iconStrip",
            ...d.technologies,
        },


        // ==========================
        // BENEFITS
        // ==========================

        d?.benefits && {
            type: "benefits",
            ...d.benefits,
        },


        // ==========================
        // CASE STUDIES
        // ==========================

        d?.caseStudies && {
            type: "caseStudies",
            ...d.caseStudies,
            themeVars,
        },


        // ==========================
        // CONTACT PAGE SUPPORT
        // ==========================

        d?.contactForm && {
            type: "contactForm",
            ...d.contactForm,
        },

        d?.contactInfo && {
            type: "contactInfo",
            ...d.contactInfo,
        },

        d?.officeLocations && {
            type: "officeLocations",
            ...d.officeLocations,
        },


        // ==========================
        // FAQ
        // ==========================

        d?.faqs && {
            type: "faq",
            ...d.faqs,
        },


        // ==========================
        // CTA
        // ==========================

        d?.cta && {
            type: "cta",
            ...d.cta,
        },


    ].filter(Boolean);

    const SECTION_MAP = {

        overview: OverviewSection,

        grid: GridSection,

        benefits: BenefitsSection,

        process: ProcessSection,

        iconStrip: IconStripSection,

        caseStudies: CaseStudiesSection,

        contactForm: ContactFormSection,

        contactInfo: ContactInfoSection,

        officeLocations: OfficeLocationsSection,

        faq: FaqSection,

        cta: CtaSection,

    };

    return (

        <div
            className="service-page"
            style={themeVars}
        >

            <ServiceHero
                d={d}
                pageType={pageType}
            />

            {sections.map((section, index) => {

                const Renderer = SECTION_MAP[section.type];

                if (!Renderer) return null;

                return (
                    <Renderer
                        key={index}
                        s={section}
                        themeVars={themeVars}
                    />
                );

            })}

        </div>

    );

}