// src/pages/ResourcesPage.jsx
import React, { useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServicePage.css';
import ServiceHero from '../components/ServiceHero';
import {
    GridSection,
    OverviewSection,
    BenefitsSection,
    FaqSection,
    CtaSection,
    IconStripSection,
} from '../components/SectionRenderers';
import { resourcesData } from '../utils/resourcesData';

export default function ResourcesPage() {
    const { resourceType } = useParams();
    const location = useLocation();

    // Get the data for the current resource type
    const data = resourcesData[resourceType] || resourcesData.guides;

    const themeVars = {
        "--svc-accent": data?.theme?.accent || "#2563EB",
        "--svc-accent-dark": data?.theme?.accentDark || "#1D4ED8",
        "--svc-accent-light": data?.theme?.accentLight || "#4F8CFF",
        "--svc-accent-soft": data?.theme?.accentSoft || "rgba(37,99,235,0.08)",
        "--svc-hero-start": data?.theme?.heroStart || "#03153c",
        "--svc-hero-end": data?.theme?.heroEnd || "#0c5de8",
        "--accent-rgb": data?.theme?.accentRgb || "37,99,235",
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [resourceType, location.pathname]);

    // Helper function to get grid items based on section type
    const getGridItems = (type) => {
        if (type === 'guides' && data.guides) {
            return data.guides.map(guide => ({
                icon: guide.icon || 'FileText',
                title: guide.title,
                description: guide.summary || guide.description
            }));
        }
        if (type === 'whitepapers' && data.papers) {
            return data.papers.map(paper => ({
                icon: paper.icon || 'FileText',
                title: paper.title,
                subtitle: `${paper.pages || 0} pages`,
                description: paper.summary || paper.description
            }));
        }
        if (type === 'infographics' && data.graphics) {
            return data.graphics.map(graphic => ({
                icon: graphic.icon || 'Image',
                title: graphic.title,
                description: graphic.description
            }));
        }
        if (type === 'checklists' && data.items) {
            return data.items.map(item => ({
                icon: 'CheckSquare',
                title: item,
                description: ''
            }));
        }
        if (type === 'events' && data.upcoming) {
            return data.upcoming.map(event => ({
                icon: event.icon || 'Calendar',
                title: event.title,
                subtitle: `${event.type} • ${event.date}`,
                description: `${event.speaker} - ${event.description}`
            }));
        }
        return [];
    };

    // Determine what type of content we're showing
    const getContentType = () => {
        if (data.guides) return 'guides';
        if (data.papers) return 'whitepapers';
        if (data.graphics) return 'infographics';
        if (data.items) return 'checklists';
        if (data.upcoming) return 'events';
        return 'guides';
    };

    const contentType = getContentType();
    const gridItems = getGridItems(contentType);

    // Determine column count based on content type
    const getColumns = () => {
        switch (contentType) {
            case 'guides': return 3;
            case 'whitepapers': return 2;
            case 'infographics': return 2;
            case 'checklists': return 4;
            case 'events': return 2;
            default: return 3;
        }
    };

    // Determine grid title
    const getGridTitle = () => {
        switch (contentType) {
            case 'guides': return 'Implementation Guides';
            case 'whitepapers': return 'Enterprise Whitepapers';
            case 'infographics': return 'Visual Learning Resources';
            case 'checklists': return 'Essential Security Checklist';
            case 'events': return 'Upcoming Events';
            default: return 'Resources';
        }
    };

    // Determine grid subtitle
    const getGridSubtitle = () => {
        switch (contentType) {
            case 'guides': return 'Step-by-step guides for successful implementation';
            case 'whitepapers': return 'In-depth analysis for enterprise decision-making';
            case 'infographics': return 'Visual guides to understand complex technologies';
            case 'checklists': return 'Comprehensive security and deployment checklist';
            case 'events': return 'Join our expert-led webinars and workshops';
            default: return '';
        }
    };

    // Build sections based on the data structure
    const sections = [
        // Overview
        data?.overview && {
            type: "overview",
            ...data.overview,
        },

        // Main Content - Grid Section
        gridItems.length > 0 && {
            type: "grid",
            tag: data?.overview?.tag || "RESOURCES",
            title: getGridTitle(),
            subtitle: getGridSubtitle(),
            items: gridItems,
            columns: getColumns(),
        },

        // Benefits
        data?.benefits && {
            type: "benefits",
            ...data.benefits,
        },

        // FAQ (if available)
        data?.faqs && {
            type: "faq",
            ...data.faqs,
        },

        // CTA
        data?.cta && {
            type: "cta",
            ...data.cta,
        },
    ].filter(Boolean);

    const SECTION_MAP = {
        overview: OverviewSection,
        grid: GridSection,
        benefits: BenefitsSection,
        faq: FaqSection,
        cta: CtaSection,
        iconStrip: IconStripSection,
    };

    return (
        <div className="service-page" style={themeVars}>
            <ServiceHero d={data} pageType="resource" />

            {sections.map((section, index) => {
                const Renderer = SECTION_MAP[section.type];
                if (!Renderer) return null;
                return <Renderer key={index} s={section} themeVars={themeVars} />;
            })}
        </div>
    );
}