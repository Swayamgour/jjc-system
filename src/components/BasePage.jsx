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
        "--svc-accent": d?.theme?.accent ||"#2563EB" ,
        "--svc-accent-dark": d?.theme?.accentDark || "#1D4ED8",
        "--svc-accent-light": d?.theme?.accentLight || "#4F8CFF",
        "--svc-accent-soft": d?.theme?.accentSoft || "rgba(37,99,235,0.08)",
        "--svc-hero-start": d?.theme?.heroStart || "#03153c",
        "--svc-hero-end": d?.theme?.heroEnd || "#0c5de8",
        "--accent-rgb": d?.theme?.accentRgb || "37,99,235",
    };

    const sections = [

        // --------------------
        // COMMON
        // --------------------

        d?.overview && {
            type: "overview",
            ...d.overview,
        },

        // --------------------
        // SERVICE / ABOUT
        // --------------------

        (d?.capabilities || d?.whyChooseUs) && {
            type: "grid",
            ...(d.capabilities || d.whyChooseUs),
        },

        (d?.benefits || d?.stats) && {
            type: "benefits",
            ...(d.benefits || d.stats),
        },

        (d?.implementationProcess || d?.process) && {
            type: "process",
            ...(d.implementationProcess || d.process),
        },

        d?.industries && {
            type: "iconStrip",
            ...d.industries,
        },

        d?.caseStudies && {
            type: "caseStudies",
            ...d.caseStudies,
            themeVars,
        },

        // --------------------
        // CONTACT PAGE
        // --------------------

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

        // --------------------
        // COMMON
        // --------------------

        d?.faqs && {
            type: "faq",
            ...d.faqs,
        },

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