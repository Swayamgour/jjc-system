// utils/IndustryData.js

import {
    HeartPulse,
    FileText,
    Briefcase,
    Landmark,
    Factory,
    Sprout,
    School,
    Home,
    Building2,
    Users,
    Shield,
    Brain,
    Cloud,
    Database,
    MessageCircle,
    Video,
    BarChart,
    Search,
    ClipboardList,
    Settings,
    Plug,
    GraduationCap,
    LifeBuoy
} from "lucide-react";

import banner from '../assets/team.jpg'

// Industry themes
const industryThemes = {
    healthcare: {
        accent: "#00B4D8",
        accentDark: "#0096B5",
        accentLight: "#48CAE4",
        accentSoft: "rgba(0,180,216,0.08)",
        heroStart: "#0A1E2E",
        heroEnd: "#005A7A",
        accentRgb: "0, 180, 216"
    },
    legal: {
        accent: "#6B2FA0",
        accentDark: "#552580",
        accentLight: "#8A5AB8",
        accentSoft: "rgba(107,47,160,0.08)",
        heroStart: "#1A0A2A",
        heroEnd: "#4A1A7A",
        accentRgb: "107, 47, 160"
    },
    "professional-services": {
        accent: "#0078D4",
        accentDark: "#005A9E",
        accentLight: "#4BA8E8",
        accentSoft: "rgba(0,120,212,0.08)",
        heroStart: "#0A1E2E",
        heroEnd: "#004B8A",
        accentRgb: "0, 120, 212"
    },
    "financial-services": {
        accent: "#F25022",
        accentDark: "#D4401A",
        accentLight: "#FF6B3D",
        accentSoft: "rgba(242,80,34,0.08)",
        heroStart: "#1A0A0A",
        heroEnd: "#4A201A",
        accentRgb: "242, 80, 34"
    },
    manufacturing: {
        accent: "#7C3AED",
        accentDark: "#5B21B6",
        accentLight: "#A78BFA",
        accentSoft: "rgba(124,58,237,0.08)",
        heroStart: "#0F0A2A",
        heroEnd: "#1E1060",
        accentRgb: "124, 58, 237"
    },
    "nonprofits-associations": {
        accent: "#059669",
        accentDark: "#047857",
        accentLight: "#34D399",
        accentSoft: "rgba(5,150,105,0.08)",
        heroStart: "#0A1A1A",
        heroEnd: "#004B3A",
        accentRgb: "5, 150, 105"
    },
    education: {
        accent: "#7C3AED",
        accentDark: "#5B21B6",
        accentLight: "#A78BFA",
        accentSoft: "rgba(124,58,237,0.08)",
        heroStart: "#1A0A2A",
        heroEnd: "#3A1A6A",
        accentRgb: "124, 58, 237"
    },
    "construction-field-services": {
        accent: "#FF6B35",
        accentDark: "#E55A2A",
        accentLight: "#FF8A5A",
        accentSoft: "rgba(255,107,53,0.08)",
        heroStart: "#2A1A0A",
        heroEnd: "#5A3A1A",
        accentRgb: "255, 107, 53"
    },
    "small-mid-market-enterprises": {
        accent: "#00A3AD",
        accentDark: "#00858A",
        accentLight: "#33BCC6",
        accentSoft: "rgba(0,163,173,0.08)",
        heroStart: "#0A1A1A",
        heroEnd: "#005A5A",
        accentRgb: "0, 163, 173"
    }
};

// Industry icons
const industryIcons = {
    healthcare: <HeartPulse size={40} />,
    legal: <FileText size={40} />,
    "professional-services": <Briefcase size={40} />,
    "financial-services": <Landmark size={40} />,
    manufacturing: <Factory size={40} />,
    "nonprofits-associations": <Sprout size={40} />,
    education: <School size={40} />,
    "construction-field-services": <Home size={40} />,
    "small-mid-market-enterprises": <Building2 size={40} />
};

// Industry badges
const industryBadges = {
    healthcare: "TRANSFORM PATIENT CARE. IMPROVE OUTCOMES.",
    legal: "MODERNIZE LEGAL PRACTICE. DRIVE EFFICIENCY.",
    "professional-services": "DELIVER EXCELLENCE. DRIVE GROWTH.",
    "financial-services": "ENSURE COMPLIANCE. DRIVE INNOVATION.",
    manufacturing: "OPTIMIZE OPERATIONS. DRIVE EFFICIENCY.",
    "nonprofits-associations": "ADVANCE MISSIONS. DRIVE IMPACT.",
    education: "EMPOWER LEARNING. SHAPE FUTURES.",
    "construction-field-services": "DELIVER PROJECTS. BUILD SUCCESS.",
    "small-mid-market-enterprises": "GROW SMARTER. SCALE FASTER."
};

export const industryConfigs = [
    { label: "Healthcare", value: "healthcare" },
    { label: "Legal", value: "legal" },
    { label: "Professional Services", value: "professional-services" },
    { label: "Financial Services", value: "financial-services" },
    { label: "Manufacturing", value: "manufacturing" },
    { label: "Nonprofits & Associations", value: "nonprofits-associations" },
    { label: "Education", value: "education" },
    { label: "Construction & Field Services", value: "construction-field-services" },
    { label: "Small & Mid-Market Enterprises", value: "small-mid-market-enterprises" }
];

// Generate industry data
function generateIndustryData(slug) {
    const label = industryConfigs.find(c => c.value === slug)?.label || slug;
    const icon = industryIcons[slug];
    const theme = industryThemes[slug];
    const badge = industryBadges[slug];

    // Industry-specific descriptions
    const descriptions = {
        healthcare: "Empower healthcare organizations with Microsoft solutions to deliver better patient care, streamline operations, and ensure compliance with industry regulations.",
        legal: "Empower law firms and legal departments with Microsoft solutions to streamline case management, enhance collaboration, and deliver better client service.",
        "professional-services": "Empower professional services firms with Microsoft solutions to deliver exceptional client service, streamline operations, and drive business growth.",
        "financial-services": "Empower financial services organizations with Microsoft solutions to ensure compliance, drive innovation, and deliver exceptional client experiences.",
        manufacturing: "Empower manufacturing organizations with Microsoft solutions to optimize operations, improve efficiency, and drive innovation.",
        "nonprofits-associations": "Empower nonprofits and associations with Microsoft solutions to advance missions, engage stakeholders, and maximize impact.",
        education: "Empower educational institutions with Microsoft solutions to enhance learning, improve outcomes, and prepare students for the future.",
        "construction-field-services": "Empower construction and field service organizations with Microsoft solutions to deliver projects on time, improve efficiency, and build success.",
        "small-mid-market-enterprises": "Empower small and mid-market enterprises with Microsoft solutions to grow smarter, scale faster, and achieve business goals."
    };

    // Industry-specific checklist items
    const checklists = {
        healthcare: [
            "Enhance patient care with AI-powered insights",
            "Streamline clinical workflows and reduce administrative burden",
            "Ensure compliance with HIPAA and healthcare regulations",
            "Enable secure telemedicine and remote patient monitoring"
        ],
        legal: [
            "Streamline case and matter management",
            "Enable secure client communication and collaboration",
            "Ensure compliance with legal industry regulations",
            "Automate document management and workflows"
        ],
        "professional-services": [
            "Streamline project and client management",
            "Enable seamless collaboration with clients and teams",
            "Deliver exceptional client service with digital tools",
            "Drive business growth with data-driven insights"
        ],
        "financial-services": [
            "Ensure compliance with financial regulations",
            "Drive innovation with AI-powered insights",
            "Deliver exceptional client experiences",
            "Streamline operations and reduce costs"
        ],
        manufacturing: [
            "Optimize supply chain and operations",
            "Improve efficiency with AI-powered insights",
            "Streamline production and inventory management",
            "Drive innovation with digital tools"
        ],
        "nonprofits-associations": [
            "Advance missions with digital tools",
            "Engage stakeholders and donors effectively",
            "Streamline operations and reduce costs",
            "Maximize impact with data-driven insights"
        ],
        education: [
            "Enhance learning with digital tools",
            "Improve student outcomes with AI-powered insights",
            "Streamline administrative operations",
            "Prepare students for the future with modern technology"
        ],
        "construction-field-services": [
            "Deliver projects on time and on budget",
            "Improve field operations with mobile tools",
            "Streamline project management and collaboration",
            "Build success with data-driven insights"
        ],
        "small-mid-market-enterprises": [
            "Grow your business with digital tools",
            "Scale operations with cloud technology",
            "Improve efficiency with AI-powered insights",
            "Achieve business goals with modern solutions"
        ]
    };

    // Industry-specific benefits
    const benefits = {
        healthcare: [
            "Improved Patient Outcomes — Leverage AI and data insights for better care",
            "Enhanced Care Coordination — Enable seamless collaboration among care teams",
            "Operational Efficiency — Streamline administrative workflows and reduce costs",
            "Regulatory Compliance — Ensure HIPAA and healthcare compliance",
            "Patient Engagement — Empower patients with digital tools and communication",
            "Clinical Innovation — Leverage cutting-edge technology for better diagnostics"
        ],
        legal: [
            "Improved Efficiency — Streamline case management and workflows",
            "Enhanced Collaboration — Enable secure collaboration with clients and teams",
            "Better Client Service — Deliver exceptional service with digital tools",
            "Regulatory Compliance — Ensure compliance with legal regulations",
            "Data-Driven Decisions — Gain insights from case data",
            "Practice Growth — Scale your practice with modern technology"
        ],
        // ... Add for all industries
    };

    // Grid items
    const gridItems = {
        healthcare: [
            { icon: <HeartPulse size={24} />, title: "Patient Management", desc: "Streamline patient registration, scheduling, and care coordination." },
            { icon: <Brain size={24} />, title: "Clinical Decision Support", desc: "Leverage AI to assist clinical decisions and improve outcomes." },
            { icon: <Users size={24} />, title: "Care Coordination", desc: "Enable seamless collaboration among care teams with Microsoft Teams." },
            { icon: <Shield size={24} />, title: "Compliance & Security", desc: "Protect patient data with HIPAA-compliant security measures." },
            { icon: <Video size={24} />, title: "Telemedicine", desc: "Deliver virtual care with secure video consultations." },
            { icon: <BarChart size={24} />, title: "Healthcare Analytics", desc: "Gain insights from patient data to improve care quality." }
        ],
        legal: [
            { icon: <FileText size={24} />, title: "Case & Matter Management", desc: "Streamline case management and matter tracking." },
            { icon: <Users size={24} />, title: "Client Collaboration", desc: "Enable secure collaboration with clients and teams." },
            { icon: <Shield size={24} />, title: "Compliance & Security", desc: "Protect client data with legal-grade security." },
            { icon: <Brain size={24} />, title: "Legal Analytics", desc: "Gain insights from case data and improve outcomes." },
            { icon: <Cloud size={24} />, title: "Document Management", desc: "Manage legal documents with secure cloud storage." },
            { icon: <MessageCircle size={24} />, title: "Client Communication", desc: "Enable secure communication with clients and stakeholders." }
        ],
        // ... Add for all industries
    };

    return {
        breadcrumb: ["Home", "Industries", label],
        badge: badge,
        title: (
            <>
                {label}.{" "}
                <span style={{ color: `var(--svc-accent-light, ${theme.accentLight})` }}>
                    Transform Your Industry.{" "}
                </span>
                <span style={{ color: `var(--svc-accent-light, ${theme.accentLight})` }}>
                    Achieve More.
                </span>
            </>
        ),
        description: descriptions[slug],
        subDescription: `JJC Systems helps ${label} organizations leverage Microsoft technologies to achieve better outcomes and drive business growth.`,
        heroBadges: [
            "Microsoft Solutions Partner",
            `${label} Industry Experts`,
            "End-to-End Support",
            "Proven Results"
        ],
        heroImage: banner,
        floatingIcons: [
            { icon: <Users size={22} />, position: { top: -10, left: "12%" } },
            { icon: <Brain size={22} />, position: { top: -18, left: "52%" } },
            { icon: <Shield size={22} />, position: { top: 40, left: "88%" } },
            { icon: <BarChart size={22} />, position: { top: 110, left: "92%" } }
        ],
        theme: theme,
        sections: [
            {
                type: "overview",
                tag: `${label.toUpperCase()} SOLUTIONS`,
                title: `Transform ${label} with Microsoft`,
                brandLabel: label,
                image: `${slug}-hero.jpg`,
                coreIcon: icon,
                orbitIcons: [
                    <Users size={24} />,
                    <Shield size={24} />,
                    <Brain size={24} />,
                    <BarChart size={24} />
                ],
                paragraphs: [
                    `Microsoft solutions help ${label} organizations achieve better outcomes, streamline operations, and drive business growth.`,
                    `From digital transformation to AI-powered insights, we help ${label} organizations leverage technology to succeed.`
                ],
                checklist: checklists[slug]
            },
            {
                type: "grid",
                tag: "KEY SOLUTIONS",
                title: `Comprehensive ${label} Technology`,
                subtitle: `Modernize your ${label} organization with Microsoft's powerful solutions.`,
                bg: "white",
                columns: 6,
                alignLeft: false,
                items: gridItems[slug]
            },
            {
                type: "splitPanel",
                tag: "BUSINESS BENEFITS",
                title: `Transform Your ${label} Organization`,
                desc: `Microsoft solutions help ${label} organizations achieve better outcomes while improving operational efficiency.`,
                visualIcon: "🚀",
                miniIcons: ["📊", "🤝", "🧠", "💼"],
                list: benefits[slug] || [
                    "Improved Efficiency — Streamline operations with digital tools",
                    "Better Decision Making — Gain insights from data analytics",
                    "Enhanced Collaboration — Enable seamless teamwork",
                    "Business Growth — Scale your organization with modern technology"
                ],
                buttonLabel: `Schedule a ${label} Consultation`
            },
            {
                type: "process",
                tag: "OUR IMPLEMENTATION PROCESS",
                title: `Your Path to ${label} Transformation`,
                subtitle: "A structured 6-step process that ensures successful technology implementation.",
                steps: [
                    {
                        num: "01",
                        icon: <Search size={18} />,
                        title: "Discover",
                        desc: `Understand your ${label} organization's goals and challenges.`
                    },
                    {
                        num: "02",
                        icon: <ClipboardList size={18} />,
                        title: "Plan",
                        desc: `Design solutions that align with your ${label} business needs.`
                    },
                    {
                        num: "03",
                        icon: <Settings size={18} />,
                        title: "Configure",
                        desc: `Set up solutions to meet ${label} industry requirements.`
                    },
                    {
                        num: "04",
                        icon: <Plug size={18} />,
                        title: "Integrate",
                        desc: "Seamlessly integrate with your existing systems and tools."
                    },
                    {
                        num: "05",
                        icon: <GraduationCap size={18} />,
                        title: "Train",
                        desc: `Train your ${label} teams on new technologies and workflows.`
                    },
                    {
                        num: "06",
                        icon: <LifeBuoy size={18} />,
                        title: "Go Live & Support",
                        desc: "Launch with confidence and get ongoing support."
                    }
                ]
            },
            {
                type: "iconStrip",
                tag: "TECHNOLOGIES",
                title: `Microsoft Solutions for ${label}`,
                subtitle: "Leverage the power of Microsoft to transform your organization.",
                columns: 4,
                items: [
                    { icon: <Database size={22} />, label: "Dynamics 365", desc: "Business Management" },
                    { icon: <Cloud size={22} />, label: "Azure Cloud", desc: "Secure Infrastructure" },
                    { icon: <MessageCircle size={22} />, label: "Microsoft 365", desc: "Productivity & Collaboration" },
                    { icon: <Brain size={22} />, label: "AI & Analytics", desc: "Data-Driven Insights" }
                ],
                footerLink: `Explore ${label} Solutions`
            },
            {
                type: "caseStudies",
                tag: "SUCCESS STORIES",
                title: `Real ${label} Transformation`,
                subtitle: `See how we've helped ${label} organizations achieve better outcomes.`,
                items: [
                    {
                        tag: label,
                        title: `Transforming ${label} with Microsoft Solutions`,
                        desc: `A leading ${label} organization achieved significant improvements using Microsoft solutions.`,
                        color: `linear-gradient(135deg, ${theme.heroStart} 0%, ${theme.accent} 100%)`,
                        stat: "100%",
                        statLabel: "Business Transformation"
                    }
                ]
            },
            {
                type: "faq",
                tag: "FREQUENTLY ASKED QUESTIONS",
                title: `${label} Technology Questions Answered`,
                items: [
                    {
                        q: `How can Microsoft solutions help ${label} organizations?`,
                        a: `Microsoft solutions help ${label} organizations achieve better outcomes, streamline operations, and drive business growth with digital tools and AI-powered insights.`
                    },
                    {
                        q: `Are these solutions secure for ${label} data?`,
                        a: `Yes. Microsoft solutions are designed with enterprise-grade security and compliance features to protect your ${label} organization's data.`
                    }
                ]
            },
            {
                type: "cta",
                title: `Ready to Transform Your ${label} Organization?`,
                description: `Let's empower your organization with innovative Microsoft solutions to achieve better outcomes and drive business growth.`,
                primaryLabel: `Schedule a ${label} Consultation`,
                secondaryLabel: "Request a Demo"
            }
        ]
    };
}

// Generate data for all industries
const healthcareData = generateIndustryData("healthcare");
const legalData = generateIndustryData("legal");
const professionalServicesData = generateIndustryData("professional-services");
const financialServicesData = generateIndustryData("financial-services");
const manufacturingData = generateIndustryData("manufacturing");
const nonprofitsData = generateIndustryData("nonprofits-associations");
const educationData = generateIndustryData("education");
const constructionData = generateIndustryData("construction-field-services");
const smeData = generateIndustryData("small-mid-market-enterprises");

export const industryDataMap = {
    healthcare: healthcareData,
    legal: legalData,
    "professional-services": professionalServicesData,
    "financial-services": financialServicesData,
    manufacturing: manufacturingData,
    "nonprofits-associations": nonprofitsData,
    education: educationData,
    "construction-field-services": constructionData,
    "small-mid-market-enterprises": smeData
};

export function getIndustryData(slug) {
    return industryDataMap[slug] || null;
}

