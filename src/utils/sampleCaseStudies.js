/**
 * sampleCaseStudies.js
 * ------------------------------------------------------------------
 * 2 dummy rows in the exact shape the API is expected to return.
 * Row 1 -> sourceType: "industry"    (Client Success > Browse By Industry)
 * Row 2 -> sourceType: "capability"   (Client Success > Browse By Capability)
 *
 * Drop these straight into your RTK query mock, or console.log them
 * through mapCaseStudyData() to sanity-check the mapper:
 *
 *   import { mapCaseStudyData } from "./mapCaseStudyData";
 *   import { sampleCaseStudies } from "./sampleCaseStudies";
 *
 *   const row = sampleCaseStudies[0];
 *   const data = mapCaseStudyData(row, row.sourceType, row.parent);
 */

export const sampleCaseStudies = [
    // ------------------------------------------------------------
    // ROW 1 — reached from "Browse By Industry" -> Healthcare
    // ------------------------------------------------------------
    {
        slug: "hospital-it-modernization",
        sourceType: "industry",
        parent: {
            name: "Healthcare",
            slug: "healthcare",
            theme: {
                accent: "#1e5fd9",
                accentDark: "#0b1e4d",
                accentLight: "#5b8def",
                accentSoft: "rgba(30,95,217,0.08)",
                accentRgb: "30, 95, 217",
            },
        },

        title: "Modernizing IT Infrastructure for a Multi-location Hospital",
        description:
            "JJC Systems helped a leading healthcare provider modernize their legacy infrastructure, migrate to Microsoft 365 and Azure, and improve collaboration, security, and operational efficiency.",
        heroImage: {
            url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop",
        },
        techBadges: ["Microsoft 365", "Azure", "SharePoint", "Power BI"],
        heroStats: [
            { icon: "Smile", value: "98%", label: "Client Satisfaction" },
            { icon: "PiggyBank", value: "40%", label: "Cost Savings" },
            { icon: "Briefcase", value: "150+", label: "Projects Delivered" },
        ],

        ctaLabel: "Schedule a Consultation",
        ctaLink: "/contact-us",

        clientInfo: [
            { icon: "User", label: "Client", value: "ABC Healthcare" },
            { icon: "Building2", label: "Industry", value: "Healthcare" },
            { icon: "MapPin", label: "Headquarters", value: "USA" },
            { icon: "Users", label: "Employees", value: "1,200+" },
            { icon: "Calendar", label: "Engagement Period", value: "6 Months" },
        ],

        overview: {
            tag: "PROJECT OVERVIEW",
            heading: "A Full-Scale Digital Transformation, Built Around Patient Care",
            intro:
                "ABC Healthcare operates 12 facilities across three states, serving over 400,000 patients a year. Growth had outpaced their IT foundation — every new clinic meant another disconnected server room and another support queue. JJC Systems rebuilt that foundation from the ground up without ever taking a clinic offline during business hours.",
            highlights: [
                { icon: "Target", title: "Clear Objective", desc: "Replace 12 disconnected on-prem environments with one governed cloud platform." },
                { icon: "ShieldCheck", title: "Zero Downtime", desc: "Every migration phase was scheduled outside patient-facing hours." },
                { icon: "Lightbulb", title: "Staff-First Design", desc: "Workflows were rebuilt around how clinicians actually work." },
                { icon: "Gauge", title: "Measurable Impact", desc: "Every phase shipped with a before/after metric the client could track." },
            ],
        },

        challenge: {
            heading: "The Challenge",
            intro:
                "The organization was struggling with outdated infrastructure, siloed systems, and security vulnerabilities that affected efficiency and patient experience.",
            items: [
                "Legacy on-premise servers with frequent downtime",
                "High maintenance and operational costs",
                "Limited collaboration and remote access",
                "Security vulnerabilities and compliance risks",
                "Manual processes and reporting",
            ],
        },

        solution: {
            heading: "Our Solution",
            intro:
                "We designed and implemented a modern cloud solution using Microsoft technologies to transform their IT environment.",
            items: [
                "Migrated to Microsoft 365 and Azure",
                "Implemented Azure AD for secure access",
                "Deployed SharePoint for collaboration",
                "Automated workflows with Power Platform",
                "Real-time reporting with Power BI",
            ],
        },

        approach: {
            heading: "Our Approach",
            steps: [
                { number: "01", icon: "Search", title: "Assessment", desc: "Analyzed existing infrastructure and business needs." },
                { number: "02", icon: "ClipboardList", title: "Planning", desc: "Designed a secure and scalable cloud architecture." },
                { number: "03", icon: "Rocket", title: "Migration", desc: "Seamlessly migrated data and applications to the cloud." },
                { number: "04", icon: "Settings", title: "Implementation", desc: "Deployed Microsoft 365, Azure and integrated systems." },
                { number: "05", icon: "TrendingUp", title: "Testing", desc: "Performed rigorous testing for security and performance." },
                { number: "06", icon: "Headphones", title: "Training & Support", desc: "Provided user training and ongoing support." },
            ],
        },

        results: {
            heading: "Results & Impact",
            stats: [
                { icon: "TrendingUp", value: "60%", label: "Reduction in IT Issues" },
                { icon: "Building2", value: "40%", label: "Faster Reporting" },
                { icon: "Smile", value: "99.99%", label: "System Availability" },
                { icon: "PiggyBank", value: "30%", label: "Operational Cost Savings" },
                { icon: "Users", value: "200+", label: "Employees Trained" },
            ],
            closing: "",
        },

        technologies: {
            heading: "Technologies Used",
            items: ["Microsoft 365", "Azure", "Azure AD", "SharePoint", "Power BI", "Power Platform", "Microsoft Intune"],
        },

        beforeAfter: {
            before: ["Manual Processes", "Limited Collaboration", "High Downtime", "Security Risks", "Multiple Disconnected Systems"],
            after: ["Automated Workflows", "Real-time Collaboration", "99.99% Uptime", "Enhanced Security", "Unified Cloud Platform"],
        },

        testimonial: {
            quote:
                "JJC Systems transformed our entire IT environment. Their team is professional, knowledgeable, and highly responsive.",
            author: "John Smith",
            role: "IT Director, ABC Healthcare",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
        },

        gallery: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop",
        ],

        faqs: [
            {
                question: "How long did the full migration take?",
                answer:
                    "The engagement ran 6 months across all 12 facilities, rolled out in phased waves of 2-3 clinics at a time.",
            },
            {
                question: "Was there any disruption to patient care during migration?",
                answer:
                    "No. Every cutover window was scheduled outside patient-facing hours, with a 72-hour fallback environment kept live after each cutover.",
            },
            {
                question: "How was HIPAA compliance handled?",
                answer:
                    "Compliance was built into the architecture from day one — Conditional Access, encryption at rest and in transit, and audit logging were live before any patient data moved.",
            },
            {
                question: "What ongoing support is provided post-launch?",
                answer:
                    "ABC Healthcare is on a managed retainer covering 24/7 monitoring, quarterly security reviews, and a dedicated clinical-hours escalation path.",
            },
        ],

        resources: {
            heading: "Want the Full Breakdown?",
            description:
                "Get the complete case study as a PDF — architecture diagrams, migration timeline, and the full results breakdown included.",
            downloadLabel: "Download Full Case Study",
            downloadLink: "#",
            secondaryLabel: "Share This Story",
            secondaryLink: "#",
        },

        moreStories: [
            {
                category: "IT & CYBERSECURITY",
                title: "Zero Trust Rollout Across 40 Retail Locations",
                sourceType: "capability",
                slug: "zero-trust-rollout-retail",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
            },
        ],
    },

    // ------------------------------------------------------------
    // ROW 2 — reached from "Browse By Capability" -> Cybersecurity & Compliance
    // ------------------------------------------------------------
    {
        slug: "zero-trust-rollout-retail",
        sourceType: "capability",
        parent: {
            name: "Cybersecurity & Compliance",
            slug: "cybersecurity-compliance",
            theme: {
                accent: "#c2410c",
                accentDark: "#7c2d12",
                accentLight: "#f97316",
                accentSoft: "rgba(194,65,12,0.08)",
                accentRgb: "194, 65, 12",
            },
        },

        title: "Zero Trust Rollout Across 40 Retail Locations",
        description:
            "JJC Systems designed and deployed a Zero Trust security model for a national retail chain, cutting incident response time and closing compliance gaps ahead of a PCI-DSS audit.",
        heroImage: {
            url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
        },
        techBadges: ["Microsoft Entra ID", "Intune", "Defender for Endpoint", "Sentinel"],
        heroStats: [
            { icon: "TrendingUp", value: "70%", label: "Faster Incident Response" },
            { icon: "PiggyBank", value: "25%", label: "Lower Compliance Cost" },
            { icon: "Briefcase", value: "40", label: "Locations Secured" },
        ],

        ctaLabel: "Schedule a Consultation",
        ctaLink: "/contact-us",

        clientInfo: [
            { icon: "User", label: "Client", value: "Northline Retail Group" },
            { icon: "Building2", label: "Industry", value: "Retail" },
            { icon: "MapPin", label: "Headquarters", value: "USA" },
            { icon: "Users", label: "Employees", value: "3,000+" },
            { icon: "Calendar", label: "Engagement Period", value: "4 Months" },
        ],

        overview: {
            tag: "PROJECT OVERVIEW",
            heading: "Closing the Gap Before the Auditors Walked In",
            intro:
                "Northline Retail Group had grown to 40 stores on a flat, perimeter-only network — one compromised till could expose payment systems chain-wide. With a PCI-DSS audit six weeks out, JJC Systems rebuilt identity and device policy as the new security perimeter, store by store, without a single day of downtime.",
            highlights: [
                { icon: "Target", title: "Clear Objective", desc: "Move from perimeter security to a verified Zero Trust model across 40 stores." },
                { icon: "ShieldCheck", title: "Audit-Ready", desc: "Every control was mapped directly against PCI-DSS requirements." },
                { icon: "Lightbulb", title: "No Shared Logins", desc: "Every store, every device, every login became individually accountable." },
                { icon: "Gauge", title: "Fast Rollout", desc: "40 stores onboarded in 4 months without a single store closure." },
            ],
        },

        challenge: {
            heading: "The Challenge",
            intro:
                "A flat network across 40 stores meant one compromised endpoint could expose payment systems chain-wide, and a PCI-DSS audit was six weeks out.",
            items: [
                "Flat, perimeter-only network architecture",
                "No consistent endpoint policy across stores",
                "Slow detection and response to threats",
                "Upcoming PCI-DSS audit with known gaps",
                "Shared local-admin credentials in the field",
            ],
        },

        solution: {
            heading: "Our Solution",
            intro:
                "We rolled out a Zero Trust architecture built on Microsoft's security stack, with identity as the new perimeter.",
            items: [
                "Deployed Microsoft Entra ID Conditional Access",
                "Enforced device compliance with Intune",
                "Rolled out Defender for Endpoint chain-wide",
                "Centralized threat monitoring with Sentinel",
                "Eliminated shared local-admin credentials",
            ],
        },

        approach: {
            heading: "Our Approach",
            steps: [
                { number: "01", icon: "Search", title: "Assessment", desc: "Mapped identity, device, and network risk across all 40 stores." },
                { number: "02", icon: "ClipboardList", title: "Planning", desc: "Designed a phased Zero Trust rollout ahead of the audit." },
                { number: "03", icon: "Rocket", title: "Pilot", desc: "Piloted Conditional Access and Intune at 3 flagship stores." },
                { number: "04", icon: "Settings", title: "Rollout", desc: "Rolled out policies chain-wide with zero downtime." },
                { number: "05", icon: "TrendingUp", title: "Validation", desc: "Ran audit-readiness checks against PCI-DSS controls." },
                { number: "06", icon: "Headphones", title: "Handover", desc: "Trained the IT team on Sentinel monitoring and response." },
            ],
        },

        results: {
            heading: "Results & Impact",
            stats: [
                { icon: "TrendingUp", value: "70%", label: "Faster Threat Response" },
                { icon: "Building2", value: "100%", label: "PCI-DSS Controls Passed" },
                { icon: "Smile", value: "0", label: "Shared Admin Accounts Left" },
                { icon: "PiggyBank", value: "25%", label: "Lower Compliance Cost" },
                { icon: "Users", value: "40", label: "Stores Fully Onboarded" },
            ],
            closing: "",
        },

        technologies: {
            heading: "Technologies Used",
            items: ["Microsoft Entra ID", "Intune", "Defender for Endpoint", "Microsoft Sentinel", "Conditional Access"],
        },

        beforeAfter: {
            before: ["Flat Network", "Shared Admin Logins", "Slow Threat Detection", "Audit Gaps", "No Central Monitoring"],
            after: ["Zero Trust Architecture", "Per-user Conditional Access", "Real-time Threat Detection", "Audit-Ready", "Central SOC Visibility"],
        },

        testimonial: {
            quote:
                "The rollout was seamless and we passed our PCI-DSS audit with zero findings. JJC Systems made Zero Trust practical for a retail team, not just a slide deck.",
            author: "Priya Nair",
            role: "Head of IT Security, Northline Retail Group",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1200&auto=format&fit=crop",
        },

        gallery: [
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
        ],

        faqs: [
            {
                question: "How did you roll this out without closing any stores?",
                answer:
                    "Policies were piloted at 3 flagship stores first, then rolled out chain-wide in staged batches overnight, with Conditional Access enforced remotely — no store ever needed to close.",
            },
            {
                question: "Did the audit actually pass?",
                answer:
                    "Yes — Northline passed its PCI-DSS audit with zero findings, six weeks after this engagement wrapped.",
            },
            {
                question: "What happened to the old shared admin logins?",
                answer:
                    "Every shared local-admin account was retired and replaced with per-user Entra ID identities tied to Conditional Access and Intune device compliance.",
            },
            {
                question: "How is the environment monitored now?",
                answer:
                    "Microsoft Sentinel gives the security team a single, chain-wide view, with automated alerting tuned during the engagement's final phase.",
            },
        ],

        resources: {
            heading: "Want the Full Breakdown?",
            description:
                "Get the complete case study as a PDF — the Zero Trust architecture, rollout timeline, and full audit results included.",
            downloadLabel: "Download Full Case Study",
            downloadLink: "#",
            secondaryLabel: "Share This Story",
            secondaryLink: "#",
        },

        moreStories: [
            {
                category: "HEALTHCARE",
                title: "Modernizing IT Infrastructure for a Multi-location Hospital",
                sourceType: "industry",
                slug: "hospital-it-modernization",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop",
            },
        ],
    },
];

export default sampleCaseStudies;