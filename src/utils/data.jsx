import imageBg from '../assets/team.jpg'

// ============================================================
// ICONS (SVG inline)
// ============================================================
export const Icons = {
    Logo: () => (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="#2563EB" strokeWidth="2" fill="none" />
            <text x="16" y="21" textAnchor="middle" fill="#2563EB" fontSize="12" fontWeight="bold">JJC</text>
        </svg>
    ),
    ChevronDown: () => (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    Arrow: () => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    M365: () => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="2" y="2" width="10" height="10" rx="2" fill="#F25022" />
            <rect x="16" y="2" width="10" height="10" rx="2" fill="#7FBA00" />
            <rect x="2" y="16" width="10" height="10" rx="2" fill="#00A4EF" />
            <rect x="16" y="16" width="10" height="10" rx="2" fill="#FFB900" />
        </svg>

    ),
    M365: () => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="2" y="2" width="10" height="10" rx="2" fill="#F25022" />
            <rect x="16" y="2" width="10" height="10" rx="2" fill="#7FBA00" />
            <rect x="2" y="16" width="10" height="10" rx="2" fill="#00A4EF" />
            <rect x="16" y="16" width="10" height="10" rx="2" fill="#FFB900" />
        </svg>

    ),
    Azure: () => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 3L5 24h7l9-12-7 12h9L14 3z" fill="#0089D6" />
        </svg>
    ),
    Dynamics: () => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M6 6h10a6 6 0 010 12H6V6z" fill="#002050" />
            <circle cx="18" cy="12" r="4" fill="#0070CC" />
        </svg>
    ),
    Shield: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 6v6c0 5.5 3.4 10.7 8 12 4.6-1.3 8-6.5 8-12V6L12 2z" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <path d="M9 12l2 2 4-4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    Cloud: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 10a4 4 0 00-7.7-1.5A4 4 0 006 12a4 4 0 000 8h12a3 3 0 000-6" stroke="#2563EB" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
    ),
    Grid: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="7" height="7" rx="1" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <rect x="14" y="3" width="7" height="7" rx="1" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <rect x="3" y="14" width="7" height="7" rx="1" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <rect x="14" y="14" width="7" height="7" rx="1" stroke="#2563EB" strokeWidth="1.5" fill="none" />
        </svg>
    ),
    Power: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2v6M8 4.5A8 8 0 1016 4.5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
    ),
    Star: ({ filled }) => (
        <svg width="14" height="14" viewBox="0 0 14 14" fill={filled ? "#F59E0B" : "none"}>
            <path d="M7 1l1.8 3.7 4 .6-2.9 2.8.7 4L7 10.2 3.4 12.1l.7-4L1.2 5.3l4-.6L7 1z" stroke="#F59E0B" strokeWidth="1" />
        </svg>
    ),
    LinkedIn: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9zM4 6a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
    ),
    Check: () => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8l3.5 3.5L13 5" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    Disconnect: () => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="11" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <path d="M10 10l8 8M18 10l-8 8" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    Productivity: () => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="4" y="4" width="20" height="20" rx="3" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <path d="M9 14l3 3 7-7" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    Lock: () => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="6" y="13" width="16" height="11" rx="2" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <path d="M9 13V9a5 5 0 0110 0v4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    Dollar: () => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="11" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <path d="M14 8v12M11 10.5a3 3 0 013-2.5h1a2.5 2.5 0 010 5h-1a2.5 2.5 0 000 5h1a3 3 0 013 2.5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    Chart: () => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M4 22L9 15l5 3 6-9 4 5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    Rocket: () => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 4s4 2 6 8-2 10-6 12c-4-2-8-6-6-12s6-8 6-8z" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <circle cx="14" cy="13" r="2" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <path d="M9 20l-3 3M19 20l3 3" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    People: () => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="10" cy="9" r="3" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <circle cx="18" cy="9" r="3" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <path d="M4 22a6 6 0 0112 0M16 22a6 6 0 0112 0" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    Factory: () => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M4 22V14l6-4v4l6-4v4l6-4v12H4z" stroke="#2563EB" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
            <rect x="10" y="16" width="3" height="6" stroke="#2563EB" strokeWidth="1.5" fill="none" />
        </svg>
    ),
    Heart: () => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 22S4 16 4 10a5 5 0 0110-1 5 5 0 0110 1c0 6-10 12-10 12z" stroke="#2563EB" strokeWidth="1.5" fill="none" />
        </svg>
    ),
    Building: () => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="4" y="4" width="20" height="20" rx="1" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <path d="M9 22V12h4v10M15 22V8h4v14" stroke="#2563EB" strokeWidth="1.5" />
        </svg>
    ),
    Briefcase: () => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="3" y="10" width="22" height="14" rx="2" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <path d="M10 10V7a2 2 0 012-2h4a2 2 0 012 2v3" stroke="#2563EB" strokeWidth="1.5" />
        </svg>
    ),
    Leaf: () => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 4c0 0 8 2 8 10s-8 10-8 10S6 22 6 14 14 4 14 4z" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <path d="M14 24V14" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    Truck: () => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="2" y="8" width="16" height="12" rx="1" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <path d="M18 12h4l3 4v4h-7V12z" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <circle cx="7" cy="21" r="2" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <circle cx="21" cy="21" r="2" stroke="#2563EB" strokeWidth="1.5" fill="none" />
        </svg>
    ),
    GraduationCap: () => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 6L3 12l11 6 11-6L14 6z" stroke="#2563EB" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
            <path d="M7 15v5a7 7 0 0014 0v-5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    Database: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" stroke="#2563EB" strokeWidth="1.5" fill="none" />
        </svg>
    ),
    Book: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 4h7a2 2 0 012 2v14H6a2 2 0 01-2-2V4zM20 4h-7a2 2 0 00-2 2v14h7a2 2 0 002-2V4z" stroke="#2563EB" strokeWidth="1.5" fill="none" />
        </svg>
    ),
    FileText: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8L14 2z" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <path d="M14 2v6h6M8 13h8M8 17h5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    HelpCircle: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <path d="M9.1 9a3 3 0 015.8 1c0 2-3 3-3 3" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="12" cy="17" r="0.5" fill="#2563EB" stroke="#2563EB" />
        </svg>
    ),
    ClipboardList: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <rect x="8" y="2" width="8" height="4" rx="1" stroke="#2563EB" strokeWidth="1.5" fill="none" />
            <path d="M9 12h6M9 16h4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    Quote: () => (
        <svg width="32" height="28" viewBox="0 0 32 28" fill="none">
            <path d="M0 28V16C0 7.2 5.3 2 16 0l2 3.5C11.5 5.2 8.5 8.5 8 13h6v15H0zm18 0V16C18 7.2 23.3 2 34 0l2 3.5C29.5 5.2 26.5 8.5 26 13h6v15H18z" fill="#2563EB" opacity="0.15" />
        </svg>
    ),
    Phone: () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-1z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
    ),
    Mail: () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    MapPin: () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
    ),
    Twitter: () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
    ),
    Reddit: () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
            <path d="M17 12a2 2 0 012-2 2 2 0 012 2" fill="none" stroke="white" strokeWidth="1" />
        </svg>
    ),
};

// ============================================================
// MEGA MENU DATA
// ============================================================
export const megaMenus = {
    "What We Do": [

        // { label: "Microsoft 365", sub: "Empower your workforce", slug: "microsoft-365" },
        // { label: "Dynamics 365", sub: "Business applications", slug: "dynamics-365" },
        // { label: "Power Platform", sub: "Automate & analyze", slug: "power-platform" },
        // { label: "Power Bi", sub: "Automate & analyze", slug: "power-bi" },
        // { label: "SharePoint", sub: "Collaboration intranet", slug: "sharepoint" },
        // { label: "Azure", sub: "Cloud infrastructure", slug: "" },
        // { label: "Security", sub: "Protect your environment", slug: "" },
        // { label: "Teams", sub: "Communication hub", slug: "" },
        // { label: "Copilot", sub: "AI-powered productivity", slug: "" },
    ],



    Solutions: [
        { label: "Modern Work", sub: "Hybrid workforce solutions" },
        { label: "Security", sub: "Zero-trust framework" },
        { label: "Infrastructure", sub: "Cloud-first architecture" },
        { label: "Data & AI", sub: "Intelligent insights" },
        { label: "Cloud Migration", sub: "Seamless transition" },
        { label: "Workflow Automation", sub: "Process efficiency" },
        { label: "Managed Services", sub: "24/7 support" },
    ],
    Industries: [
        { label: "Manufacturing", sub: "Smart factory solutions" },
        { label: "Healthcare", sub: "HIPAA-compliant systems" },
        { label: "Construction", sub: "Project management" },
        { label: "Professional Services", sub: "Client-centric delivery" },
        { label: "Financial Services", sub: "Compliance & security" },
        { label: "Nonprofit", sub: "Mission-driven tech" },
        { label: "Energy", sub: "Operations optimization" },
        { label: "Logistics", sub: "Supply chain visibility" },
        { label: "Education", sub: "Modern learning tools" },
    ],
    Company: [
        { label: "About Us", sub: "Our story & mission" },
        { label: "Microsoft Expertise", sub: "Partner certifications" },
        { label: "Delivery Approach", sub: "How we work" },
        { label: "Careers", sub: "Join our team" },
        { label: "Contact", sub: "Get in touch" },
    ],
};

export const menuData = [
    {
        title: "What We Do",
        hasDropdown: true,
        groups: [
            {
                heading: "Industry Solutions",
                items: [

                    { label: "Healthcare", path: "/industries/healthcare" },
                    { label: "Legal", path: "/industries/legal" },
                    { label: "Professional Services", path: "/industries/professional-services" },
                    { label: "Financial Services", path: "/industries/financial-services" },
                    { label: "Manufacturing", path: "/industries/manufacturing" },
                    { label: "Nonprofits & Associations", path: "/industries/nonprofits-associations" },
                    { label: "Education", path: "/industries/education" },
                    { label: "Construction & Field Services", path: "/industries/construction-field-services" },
                    { label: "Small & Mid-Market Enterprises", path: "/industries/small-mid-market-enterprises" }
                ]
            },
            {
                heading: "Services",
                items: [
                    { label: "ERP, Finance & Operations", path: "/services/microsoft-erp" },
                    { label: "CRM, Customer Service & Sales Operations", path: "/services/microsoft-crm" },
                    { label: "AI Readiness & Copilot Enablement", path: "/services/ai-copilot" },
                    { label: "Modern Workplace", path: "/services/modern-workplace" },
                    { label: "Intranet Portals & Document Management", path: "/services/sharepoint" },
                    { label: "Security, Identity & Compliance", path: "/services/security-identity-compliance" },
                    { label: "Data, Business Intelligence & Reporting", path: "/services/data-bi-reporting" },
                    { label: "Endpoint & Device Management", path: "/services/endpoint-device-management" },
                    { label: "Business Process Automation", path: "/services/business-process-automation" },
                    { label: "Teams Calling & Business Voice", path: "/services/teams-calling-business-voice" },
                    { label: "Cloud, Virtual Desktop & Infrastructure", path: "/services/cloud-virtual-desktop-infrastructure" },
                    { label: "Enterprise System Integration", path: "/services/enterprise-system-integration" },
                    { label: "Microsoft Licensing & Optimization", path: "/services/microsoft-licensing-optimization" },
                    { label: "dynamics365SalesData", path: "/services/dynamics-365-SalesData" }
                ]
            },
            {
                heading: "Platforms",

                items: [
                    {
                        label: "Dynamics 365 Business Central",
                        path: "/platforms/dynamics-365-business-central"
                    },
                    {
                        label: "Dynamics 365 Sales",
                        path: "/platforms/dynamics-365-sales"
                    },
                    {
                        label: "Dynamics 365 Customer Insights",
                        path: "/platforms/dynamics-365-customer-insights"
                    },
                    {
                        label: "Dynamics 365 Customer Service",
                        path: "/platforms/dynamics-365-customer-service"
                    },
                    {
                        label: "Dynamics 365 Finance Service",
                        path: "/platforms/dynamics-365-customer-service"
                    },
                    {
                        label: "Dynamics 365 Field Service",
                        path: "/platforms/dynamics-365-field-service"
                    },
                    {
                        label: "Microsoft 365",
                        path: "/platforms/microsoft-365"
                    },
                    {
                        label: "Microsoft Copilot",
                        path: "/platforms/microsoft-copilot"
                    },
                    {
                        label: "Microsoft Purview",
                        path: "/platforms/microsoft-purview"
                    },
                    {
                        label: "Microsoft Fabric",
                        path: "/platforms/microsoft-fabric"
                    },
                    {
                        label: "Microsoft Intune",
                        path: "/platforms/microsoft-intune"
                    },
                    {
                        label: "Microsoft Defender",
                        path: "/platforms/microsoft-defender"
                    },
                    {
                        label: "Microsoft Power Platform",
                        path: "/platforms/microsoft-power-platform"
                    },
                    {
                        label: "Microsoft Azure Cloud",
                        path: "/platforms/microsoft-azure-cloud"
                    },
                    {
                        label: "Microsoft Azure Virtual Desktop",
                        path: "/platforms/microsoft-azure-virtual-desktop"
                    }
                ]
            },

        ],
        featured: {
            title: "Transform Your Business with Microsoft Cloud & AI Solutions",
            tag: "Featured Solution"
        }
    },
    {
        title: "Why Us",
        path: "/About",
        hasDropdown: false,
        groups: [
            {
                heading: "About Us",
                items: [
                    "Company Overview",
                    "Leadership Team",
                    "Our Methodology",
                    "Microsoft Partnerships"
                ]
            },
            {
                heading: "Success Stories",
                items: [
                    "Case Studies",
                    "Client Testimonials",
                    "Customer Success Stories",
                    "Industry Experience"
                ]
            },
            {
                heading: "Our Advantages",
                items: [
                    "Certified Experts",
                    "24/7 Support",
                    "Security First Approach",
                    "Proven Delivery Framework"
                ]
            }
        ],
        featured: {
            title: "Trusted Microsoft Partner for Digital Transformation",
            tag: "Why Organizations Choose Us"
        }
    },
    {
        title: "Resources",
        hasDropdown: false,
        path: "/Resources",
        groups: [
            {
                heading: "Insights",
                items: [
                    "Blog",
                    "Articles",
                    "Whitepapers",
                    "Industry Reports"
                ]
            },
            {
                heading: "Learning Center",
                items: [
                    "Microsoft 365 Guides",
                    "Azure Resources",
                    "Security Best Practices",
                    "Power Platform Tutorials"
                ]
            },
            {
                heading: "Downloads",
                items: [
                    "eBooks",
                    "Case Studies",
                    "Solution Briefs",
                    "Webinars"
                ]
            }
        ],
        featured: {
            title: "Latest Microsoft Technology Insights & Best Practices",
            tag: "Knowledge Hub"
        }
    },
    {
        title: "Contact Us",
        hasDropdown: false,
        path: "/Contact",

    }
];

export const stats = [
    { value: "100+", label: "Certifications" },
    { value: "150+", label: "Successful Projects" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support" },
];

export const floatingCards = [
    { value: "+42%", label: "Business Growth", icon: "📈" },
    { value: "98%", label: "Client Satisfaction", icon: "⭐" },
    { value: "40%", label: "Cost Savings", icon: "💰" },
];

export const cards = [
    { icon: <Icons.M365 />, title: "Microsoft 365", desc: "Empower teams and improve collaboration." },
    { icon: <Icons.Azure />, title: "Azure", desc: "Build, migrate and modernize in the cloud." },
    { icon: <Icons.Dynamics />, title: "Dynamics 365", desc: "Transform sales, service and operations." },
    { icon: <Icons.Power />, title: "Power Platform", desc: "Automate workflows and build custom apps." },
    { icon: <Icons.Shield />, title: "Security", desc: "Protect your data, users and infrastructure." },
    { icon: <Icons.Grid />, title: "More Services", desc: "Explore all Microsoft technology offerings." },
];


export const cols = [
    {
        title: "Microsoft Services",
        links: ["Microsoft 365", "Azure", "Dynamics 365", "Power Platform", "Security", "View All Services →"],
    },
    {
        title: "Solutions",
        links: ["Modern Work", "Security", "Infrastructure", "Data & AI", "Cloud Migration", "View All Solutions →"],
    },
    {
        title: "Industries",
        links: ["Manufacturing", "Healthcare", "Construction", "Professional Services", "Education", "View All Industries →"],
    },
    {
        title: "Company",
        links: ["About Us", "Microsoft Expertise", "Why Choose Us", "Delivery Approach", "Careers"],
    },
];


export const team = [
    { name: "James L. Chapman", title: "CEO & Founder" },
    { name: "David M. Brown", title: "Chief Technology Officer" },
    { name: "Shalini Williams", title: "Chief Solutions Officer" },
    { name: "Mark T. Anderson", title: "Chief Delivery Officer" },
    { name: "Priya N. Patel", title: "Head of Client Success" },
];


export const reviews = [
    {
        text: "JJC Systems transformed our business operations with Microsoft solutions. Their expertise and commitment to our success is unmatched.",
        name: "Sarah Johnson", title: "CTO, Global Retail Corp",
    },
    {
        text: "The team's deep Microsoft knowledge and strategic approach helped us achieve 85% increase in productivity. Highly recommended!",
        name: "Michael Chen", title: "IT Director, Manufacturing Inc.",
    },
    {
        text: "Professional, responsive, and results-driven. JJC Systems delivered beyond our expectations on every project.",
        name: "Emily Rodriguez", title: "Head of Digital, Finance Group",
    },
];

export const items = [
    { icon: <Icons.Book />, title: "Blog", sub: "Industry insights and latest trends", link: "Explore Blog →" },
    { icon: <Icons.FileText />, title: "Guides", sub: "In-depth guides to solve business challenges", link: "View Guides →" },
    { icon: <Icons.Database />, title: "Resources", sub: "Tools and templates to speed delivery", link: "View Resources →" },
    { icon: <Icons.ClipboardList />, title: "Checklists", sub: "Step-by-step checklists for common solutions", link: "View Checklists →" },
    { icon: <Icons.HelpCircle />, title: "FAQs", sub: "Answers to common questions", link: "View FAQs →" },
];


export const cases = [
    {
        tag: "Manufacturing",
        title: "Streamlined Operations with Dynamics 365",
        desc: "Implemented Dynamics 365 to unify operations and improve productivity by 30%.",
        color: "#1a4a8a",
        img: imageBg

    },
    {
        tag: "Healthcare",
        title: "Secure Collaboration with Microsoft 365",
        desc: "Enabled secure remote collaboration and improved patient communication.",
        color: "#0f3460",
        img: imageBg
    },
    {
        tag: "Construction",
        title: "Power BI Dashboards for Data-Driven Decisions",
        desc: "Built real-time dashboards that improved project visibility and reduced delays.",
        color: "#0d2b6b",
        img: imageBg
    },
];

export const industries = [
    { icon: <Icons.Factory />, label: "Manufacturing" },
    { icon: <Icons.Heart />, label: "Healthcare" },
    { icon: <Icons.Building />, label: "Construction" },
    { icon: <Icons.Briefcase />, label: "Professional Services" },
    { icon: <Icons.Dollar />, label: "Financial Services" },
    { icon: <Icons.People />, label: "Nonprofit" },
    { icon: <Icons.Leaf />, label: "Energy" },
    { icon: <Icons.Truck />, label: "Logistics" },
    { icon: <Icons.GraduationCap />, label: "Education" },
];





export const clientLogos = [

    {
        name: "Adama US",
        image: "https://jjcsystems.com/wp-content/uploads/2025/07/Adama-JJC-Client.png"
    },
    {
        name: "Infleqtion",
        image: "https://jjcsystems.com/wp-content/uploads/2025/06/JJC-Client-Infleqtion.png"
    },
    {
        name: "Sharps",
        image: "https://jjcsystems.com/wp-content/uploads/2026/04/Sharps-JJC-Client.png"
    },
    {
        name: "WCBDD",
        image: "https://jjcsystems.com/wp-content/uploads/2026/02/WCBDD-JJC-Client.png"
    },
    {
        name: "OSS",
        image: "https://jjcsystems.com/wp-content/uploads/2026/02/OSS-JJC-Client-1.png"
    },
    {
        name: "Rantoul Foods",
        image: "https://jjcsystems.com/wp-content/uploads/2025/11/Rantoul-foods-.png"
    },
    {
        name: "Hohman",
        image: "https://jjcsystems.com/wp-content/uploads/2025/03/JJC-Client-Hohman.png"
    },
    {
        name: "Phillips Murrah",
        image: "https://jjcsystems.com/wp-content/uploads/2025/09/Phillips-Murrah-Client.png"
    },
    {
        name: "High Plains",
        image: "https://jjcsystems.com/wp-content/uploads/2026/02/High-Plains-JJC-Client-1.png"
    },
    {
        name: "Bali",
        image: "https://jjcsystems.com/wp-content/uploads/2025/04/JJC-Bali-Client.png"
    },
    {
        name: "ESS",
        image: "https://jjcsystems.com/wp-content/uploads/2025/11/ESS-.png"
    },
    {
        name: "JJC Client 4",
        image: "https://jjcsystems.com/wp-content/uploads/2024/08/JJC-Client-4.png"
    },
    {
        name: "Conrad Polygraph",
        image: "https://jjcsystems.com/wp-content/uploads/2024/08/Conrad-Polygraph-JJC-Client-1-1.png"
    },
    {
        name: "QPR",
        image: "https://jjcsystems.com/wp-content/uploads/2024/08/QPR-JJC-Client-2-2.png"
    },
    {
        name: "JJC Client 3",
        image: "https://jjcsystems.com/wp-content/uploads/2024/08/JJC-Client-3.png"
    },
    {
        name: "JJC Client 6",
        image: "https://jjcsystems.com/wp-content/uploads/2024/08/JJC-Client-6.png"
    },
    {
        name: "JJC Client 7",
        image: "https://jjcsystems.com/wp-content/uploads/2024/09/JJC-Client-7.png"
    },
    {
        name: "JJC Client 8",
        image: "https://jjcsystems.com/wp-content/uploads/2024/08/JJC-Client-8.png"
    },
    {
        name: "JJC Client 5",
        image: "https://jjcsystems.com/wp-content/uploads/2024/08/JJC-Client-5.png"
    },
    {
        name: "JJC Client 9",
        image: "https://jjcsystems.com/wp-content/uploads/2024/08/JJC-Client-9.png"
    },
    {
        name: "JJC Client 10",
        image: "https://jjcsystems.com/wp-content/uploads/2024/08/JJC-Client-10.png"
    },
    {
        name: "JJC VA Affairs",
        image: "https://jjcsystems.com/wp-content/uploads/2025/04/JJC-VA-Affairs.png"
    },
    {
        name: "GSA",
        image: "https://jjcsystems.com/wp-content/uploads/2025/02/GSA-Logo-1.png"
    },
    {
        name: "ACU",
        image: "https://jjcsystems.com/wp-content/uploads/2025/01/JJC-Client-ACU.png"
    },
    {
        name: "Tico Tractors",
        image: "https://jjcsystems.com/wp-content/uploads/2025/05/JJC-Tico-Tractors.png"
    },
    {
        name: "Invio Automation",
        image: "https://jjcsystems.com/wp-content/uploads/2025/06/Invio-Automation-JJC-Client.png"
    },
    {
        name: "Carr",
        image: "https://jjcsystems.com/wp-content/uploads/2025/04/JJC-Client-Carr.png"
    },
];





import {
    Building2,
    Users,
    Bot,
    MonitorSmartphone,
    FolderKanban,
    ShieldCheck,
    BarChart3,
    Laptop,
    Workflow,
    PhoneCall,
    Cloud,
    PlugZap,
    BadgeDollarSign,
} from "lucide-react";

export const businessServices = [
    {
        icon: <Building2 />,
        title: "ERP, Finance & Operations",
        desc: "Streamline finance, supply chain, procurement, and operational processes."
    },
    {
        icon: <Users />,
        title: "CRM, Customer Service & Sales Operations",
        desc: "Enhance customer engagement, sales performance, and service delivery."
    },
    {
        icon: <Bot />,
        title: "AI Readiness & Copilot Enablement",
        desc: "Prepare your organization for AI adoption and Microsoft Copilot."
    },
    {
        icon: <MonitorSmartphone />,
        title: "Modern Workplace",
        desc: "Empower hybrid work with collaboration, productivity, and communication tools."
    },
    {
        icon: <FolderKanban />,
        title: "Intranet Portals & Document Management",
        desc: "Create intelligent intranets and manage business content efficiently."
    },
    {
        icon: <ShieldCheck />,
        title: "Security, Identity & Compliance",
        desc: "Protect users, devices, applications, and sensitive business data."
    },
    {
        icon: <BarChart3 />,
        title: "Data, Business Intelligence & Reporting",
        desc: "Turn data into actionable insights with analytics and reporting solutions."
    },
    {
        icon: <Laptop />,
        title: "Endpoint & Device Management",
        desc: "Manage and secure desktops, laptops, mobile devices, and applications."
    },
    {
        icon: <Workflow />,
        title: "Business Process Automation",
        desc: "Automate workflows, approvals, and repetitive business operations."
    },
    {
        icon: <PhoneCall />,
        title: "Teams Calling & Business Voice",
        desc: "Enable enterprise-grade calling, voice solutions, and communication."
    },
    {
        icon: <Cloud />,
        title: "Cloud, Virtual Desktop & Infrastructure",
        desc: "Modernize infrastructure with Azure, cloud services, and virtual desktops."
    },
    {
        icon: <PlugZap />,
        title: "Enterprise System Integration",
        desc: "Connect business applications, data sources, and enterprise platforms."
    },
    // {
    //     icon: <BadgeDollarSign />,
    //     title: "Microsoft Licensing & Optimization",
    //     desc: "Optimize Microsoft licensing, costs, compliance, and software investments."
    // }
];