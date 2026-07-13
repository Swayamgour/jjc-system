import React from 'react'
import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import Services from '../components/Services'
import DetailedServices from '../components/DetailedServices'
import Challenges from '../components/Challenges'
import SolutionAreas from '../components/SolutionAreas'
import Industries from '../components/Industries'
import CaseStudies from '../components/CaseStudies'
import DeliveryProcess from '../components/DeliveryProcess'
import Benefits from '../components/Benefits'
import Resources from '../components/Resources'
import ClientLogos from '../components/ClientLogos'
import Testimonials from '../components/Testimonials'
import LeadershipTeam from '../components/LeadershipTeam'
import WhyJJCPartner from '../components/WhyJJCPartner'
import CTASection from '../components/CTASection'
import BusinessServices from '../components/BusinessServices'
import ContactFAQ from '../components/contact/ContactFAQ'

import { floatingCards as defaultFloatingCards, Icons } from "../utils/data";
import heroImage from "../assets/1-01.png";
import { useGetHomeHeroQuery } from '../redux/api';
import { useHomeSection } from '../hooks/useHomeSection';
import { resolveIcon } from '../utils/resolveIcon';

// ---- Fallback content (used until real data loads, or for any field the
// admin hasn't filled in yet) so the homepage never renders empty. ----

const DEFAULT_HERO = {
    tag: "SMART SOLUTIONS. REAL IMPACT.",
    title: "Microsoft Consulting Services for Modern Business Operations",
    highlightedText: "Modern",
    description:
        "Modern businesses require secure, scalable, and intelligent technology solutions to improve efficiency and stay competitive. JJC Systems delivers Microsoft Consulting Services that help organizations modernize operations, enhance productivity, strengthen cybersecurity, and accelerate digital transformation.",
    primaryButtonText: "Schedule a Microsoft Consultation",
    primaryButtonLink: "/contact",
    secondaryButtonText: "Explore Microsoft Services",
    secondaryButtonLink: "/services",
};

const DEFAULT_PARTNERS = [
    { icon: <Icons.M365 />, title: "Microsoft 365" },
    { icon: <Icons.Azure />, title: "Azure" },
    { icon: <Icons.Dynamics />, title: "Dynamics 365" },
];

const DEFAULT_FAQS = [
    {
        q: "What are Microsoft Consulting Services?",
        id: 1,
        a: "Microsoft Consulting Services help businesses implement, optimize, and manage Microsoft technologies such as Microsoft 365, Azure, Dynamics 365, Power Platform, and security solutions.",
    },
    {
        q: "Why should businesses hire a Microsoft consultant?",
        id: 2,
        a: "A Microsoft consultant helps organizations choose the right solutions, improve implementation success, reduce technology challenges, and maximize Microsoft investments.",
    },
    {
        q: "What Microsoft solutions does JJC Systems provide?",
        id: 3,
        a: "JJC Systems provides Microsoft consulting for Microsoft 365, Azure, Dynamics 365, Power Platform, Business Central, SharePoint, Power BI, and Microsoft security solutions.",
    },
    {
        q: "How can Microsoft Azure help my business?",
        id: 4,
        a: "Azure provides secure cloud infrastructure, scalable applications, flexible computing resources, and modern cloud capabilities.",
    },
    {
        q: "Can Microsoft solutions integrate with existing systems?",
        id: 5,
        a: "Yes. Microsoft solutions can integrate with existing applications, workflows, and business platforms to improve efficiency.",
    },
    {
        q: "Does JJC Systems provide ongoing Microsoft support?",
        id: 6,
        a: "Yes. JJC Systems provides optimization, guidance, and support services to help businesses maintain successful Microsoft environments.",
    },
];

// Wraps the `highlightedText` substring (if present in `title`) with the
// `.highlight` accent span used across the design.
function renderHighlightedTitle(title, highlight) {
    if (!title) return title;
    if (!highlight) return title;

    const idx = title.indexOf(highlight);
    if (idx === -1) return title;

    return (
        <>
            {title.slice(0, idx)}
            <span className="highlight">{title.slice(idx, idx + highlight.length)}</span>
            {title.slice(idx + highlight.length)}
        </>
    );
}

function Home() {
    // ---- Hero ----
    const { data: heroRes, isLoading: heroLoading } = useGetHomeHeroQuery();
    const hero = heroRes?.data;

    const heroContent = {
        tag: hero?.tag || DEFAULT_HERO.tag,
        title: renderHighlightedTitle(
            hero?.title || DEFAULT_HERO.title,
            hero?.highlightedText ?? DEFAULT_HERO.highlightedText
        ),
        description: hero?.description || DEFAULT_HERO.description,
        primaryButton: {
            text: hero?.primaryButtonText || DEFAULT_HERO.primaryButtonText,
            link: hero?.primaryButtonLink || DEFAULT_HERO.primaryButtonLink,
        },
        secondaryButton: {
            text: hero?.secondaryButtonText || DEFAULT_HERO.secondaryButtonText,
            link: hero?.secondaryButtonLink || DEFAULT_HERO.secondaryButtonLink,
        },
        image: hero?.image?.url || heroImage,
        partners: hero?.partners?.length
            ? hero.partners.map((p) => ({
                icon: p.icon ? resolveIcon(p.icon) : null,
                title: p.title,
            }))
            : DEFAULT_PARTNERS,
        floatingCards: hero?.floatingCards?.length
            ? hero.floatingCards.map((c, i) => ({
                icon: c.icon
                    ? resolveIcon(c.icon)
                    : defaultFloatingCards[i % defaultFloatingCards.length].icon,
                value: c.title,
                label: c.subtitle,
            }))
            : defaultFloatingCards,
    };

    // ---- FAQs (drives the ContactFAQ accordion) ----
    const { section: faqSection, items: faqItems, ready: faqReady } = useHomeSection("faqs");
    const faqs = faqItems.length
        ? faqItems.map((item, i) => ({
            id: item._id || i + 1,
            q: item.title,
            a: item.description,
        }))
        : DEFAULT_FAQS;

    return (
        <div>
            <Hero {...heroContent} ready={!heroLoading} />
            <WhyChooseUs />
            <BusinessServices />
            <DetailedServices />
            <Challenges />
            <SolutionAreas />
            <Industries />
            <CaseStudies />
            <DeliveryProcess />
            <Benefits />
            <Resources />
            <ClientLogos />
            <Testimonials />
            <LeadershipTeam />
            <WhyJJCPartner />

            <ContactFAQ
                faqs={faqs}
                tag={faqSection?.tag}
                title={faqSection?.title}
                description={faqSection?.description}
                ready={faqReady}
            />
            {/* <Services />2 */}
            <CTASection />
        </div>
    )
}

export default Home
