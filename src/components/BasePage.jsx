import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "../pages/ServicePage.css";
import ServiceHero from "../components/ServiceHero";
import { useSplitText } from "../hooks/useSplitText";
import {
    GridSection,
    IconStripSection,
    OverviewSection,
    ProcessSection,
    BenefitsSection,
    SplitPanelSection,
    CaseStudiesSection,
    FaqSection,
    CtaSection,
    ContactFormSection,
    ContactInfoSection,
} from "../components/SectionRenderers";

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function BasePage({ data, pageType = "service" }) {
    const d = data;

    console.log(d)

    const themeVars = {
        "--svc-accent": d.theme.accent,
        "--svc-accent-dark": d.theme.accentDark,
        "--svc-accent-light": d.theme.accentLight,
        "--svc-accent-soft": d.theme.accentSoft,
        "--svc-hero-start": d.theme.heroStart,
        "--svc-hero-end": d.theme.heroEnd,
        "--accent-rgb": d.theme.accentRgb || "37, 99, 235",
    };

    const SECTION_MAP = {
        grid: GridSection,
        iconStrip: IconStripSection,
        overview: OverviewSection,
        process: ProcessSection,
        benefits: BenefitsSection,
        splitPanel: SplitPanelSection,
        caseStudies: CaseStudiesSection,
        faq: FaqSection,
        contactForm: ContactFormSection,
        contactInfo: ContactInfoSection,
        cta: CtaSection,
    };

    return (
        <div className="service-page" style={themeVars}>
            <ServiceHero d={d} pageType={pageType} />

            {d?.sections?.map((s, i) => {
                const Renderer = SECTION_MAP[s?.type];
                if (!Renderer) return null;
                return <Renderer key={i} s={s} />;
            })}
        </div>
    );
}