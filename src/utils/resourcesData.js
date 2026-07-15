 const sharedTheme = {
    accent: "#2563EB",
    accentDark: "#1D4ED8",
    accentLight: "#60A5FA",
    accentSoft: "rgba(37,99,235,.08)",
    heroStart: "#021B4E",
    heroEnd: "#0B5ED7",
    accentRgb: "37,99,235",
};

export const resourcesData = {
    guides: {
        hero: {
            heading: "Step-by-Step",
            highlightedHeading: "Implementation Guides",
            description: "Detailed implementation guides for Microsoft business solutions.",
            subDescription: "Comprehensive guides to help you plan, execute, and optimize your Microsoft technology implementations.",
            badges: ["Microsoft 365", "Azure", "SharePoint", "Cloud Migration"]
        },
        overview: {
            tag: "IMPLEMENTATION GUIDES",
            title: "Your Path to Successful Microsoft Deployments",
            brandLabel: "Expert-Led Guides",
            paragraphs: [
                "Our implementation guides provide step-by-step instructions for deploying and managing Microsoft business solutions. Each guide is crafted by certified experts with real-world experience.",
                "From initial planning to post-deployment optimization, these guides cover every aspect of the implementation journey."
            ],
            checklist: [
                "Step-by-step instructions",
                "Best practices and tips",
                "Troubleshooting guidance",
                "Security considerations"
            ]
        },
        guides: [
            {
                icon: "Cloud",
                title: "Microsoft 365 Migration Guide",
                summary: "Complete planning, assessment, migration, validation, security hardening and user training."
            },
            {
                icon: "Server",
                title: "Azure Migration Guide",
                summary: "Move workloads securely from on-premises infrastructure to Azure with minimal disruption."
            },
            {
                icon: "Share",
                title: "SharePoint Deployment Guide",
                summary: "Design modern collaboration environments with proper governance and security."
            }
        ],
        benefits: {
            tag: "WHY USE OUR GUIDES",
            title: "Benefits of Following Our Implementation Guides",
            subtitle: "Expert-approved methodologies for successful deployments",
            items: [
                {
                    icon: "TrendingUp",
                    title: "Reduced Risk",
                    description: "Minimize implementation risks with proven methodologies and best practices."
                },
                {
                    icon: "Clock",
                    title: "Faster Deployment",
                    description: "Accelerate your implementation timeline with clear, actionable steps."
                },
                {
                    icon: "ShieldCheck",
                    title: "Security First",
                    description: "Built-in security considerations at every stage of implementation."
                },
                {
                    icon: "Users",
                    title: "User Adoption",
                    description: "Strategies to ensure your team embraces and maximizes new technologies."
                }
            ]
        },
        cta: {
            title: "Ready to Start Your Implementation?",
            description: "Get expert guidance for your Microsoft deployment project.",
            primaryLabel: "Schedule a Consultation",
            secondaryLabel: "Contact Our Team"
        },
        theme: sharedTheme,
        title: "Implementation Guides",
        slug: "guides",
        urlPath: "/guides",
        shortDescription: "Step-by-step implementation guides for Microsoft business solutions.",
        badge: "GUIDES",
        breadcrumb: ["Home", "Resources", "Guides"]
    },

    checklists: {
        hero: {
            heading: "Deployment",
            highlightedHeading: "Checklists",
            description: "Essential security and deployment checklists for Microsoft environments.",
            subDescription: "Quick reference checklists to ensure nothing is overlooked during deployment and security hardening.",
            badges: ["Security", "Deployment", "Compliance", "Best Practices"]
        },
        overview: {
            tag: "DEPLOYMENT CHECKLISTS",
            title: "Essential Security & Deployment Checklists",
            brandLabel: "Quick Reference",
            paragraphs: [
                "Our deployment checklists help you ensure that every critical step is completed during your Microsoft implementation.",
                "From security hardening to compliance verification, these checklists cover the essential tasks for a successful deployment."
            ],
            checklist: [
                "Security configuration",
                "Compliance verification",
                "Backup and recovery",
                "User access management"
            ]
        },
        // items: [
        //     "Enable MFA for all users",
        //     "Configure Conditional Access policies",
        //     "Review and secure Administrator Accounts",
        //     "Enable Microsoft Defender for Office 365",
        //     "Configure backup for Microsoft 365",
        //     "Audit Security Policies and procedures",
        //     "Verify Compliance Settings",
        //     "Monitor Identity Protection and suspicious activity"
        // ],
        benefits: {
            tag: "WHY USE CHECKLISTS",
            title: "Benefits of Our Security Checklists",
            subtitle: "Ensure comprehensive security coverage",
            items: [
                {
                    icon: "ShieldCheck",
                    title: "Complete Coverage",
                    description: "Never miss a critical security step during deployment."
                },
                {
                    icon: "CheckSquare",
                    title: "Audit Ready",
                    description: "Maintain documentation for compliance and audit requirements."
                },
                {
                    icon: "Clock",
                    title: "Time Efficient",
                    description: "Streamline your deployment process with proven checklists."
                },
                {
                    icon: "UserCheck",
                    title: "Best Practices",
                    description: "Follow industry-standard security best practices."
                }
            ]
        },
        cta: {
            title: "Need Help with Deployment?",
            description: "Let our experts guide you through the security hardening process.",
            primaryLabel: "Get Expert Help",
            secondaryLabel: "Learn More"
        },
        theme: sharedTheme,
        title: "Deployment Checklists",
        slug: "checklists",
        urlPath: "/checklists",
        shortDescription: "Essential security and deployment checklists for Microsoft environments.",
        badge: "CHECKLISTS",
        breadcrumb: ["Home", "Resources", "Checklists"]
    },

    whitepapers: {
        hero: {
            heading: "Enterprise",
            highlightedHeading: "Whitepapers",
            description: "In-depth technical whitepapers for enterprise Microsoft solutions.",
            subDescription: "Comprehensive analysis and strategic guidance for enterprise Microsoft deployments.",
            badges: ["Enterprise", "Strategy", "ROI", "Cloud"]
        },
        overview: {
            tag: "ENTERPRISE WHITEPAPERS",
            title: "Strategic Insights for Enterprise Success",
            brandLabel: "In-Depth Analysis",
            paragraphs: [
                "Our whitepapers provide deep technical analysis and strategic guidance for enterprise Microsoft implementations.",
                "Each whitepaper is researched and written by industry experts with years of enterprise experience."
            ],
            checklist: [
                "Strategic analysis",
                "Technical deep-dives",
                "ROI calculations",
                "Implementation roadmaps"
            ]
        },
        papers: [
            {
                icon: "Building",
                title: "Digital Transformation with Microsoft Cloud",
                pages: 32,
                summary: "Business strategy, migration roadmap, governance, security and ROI analysis for enterprise transformation."
            },
            {
                icon: "DollarSign",
                title: "Azure Cost Optimization",
                pages: 24,
                summary: "Reduce cloud spend while maintaining performance and scalability in Azure."
            }
        ],
        benefits: {
            tag: "WHY READ OUR WHITEPAPERS",
            title: "Benefits of Our Enterprise Whitepapers",
            subtitle: "Strategic insights for informed decision-making",
            items: [
                {
                    icon: "TrendingUp",
                    title: "Strategic Guidance",
                    description: "Make informed decisions with strategic analysis and recommendations."
                },
                {
                    icon: "BarChart",
                    title: "ROI Analysis",
                    description: "Understand the financial impact of your technology investments."
                },
                {
                    icon: "ShieldCheck",
                    title: "Risk Assessment",
                    description: "Identify and mitigate risks in your implementation strategy."
                },
                {
                    icon: "Lightbulb",
                    title: "Best Practices",
                    description: "Learn from industry experts and proven enterprise implementations."
                }
            ]
        },
        cta: {
            title: "Ready to Transform Your Enterprise?",
            description: "Download our whitepapers or schedule a consultation with our experts.",
            primaryLabel: "Download Whitepapers",
            secondaryLabel: "Talk to an Expert"
        },
        theme: sharedTheme,
        title: "Enterprise Whitepapers",
        slug: "whitepapers",
        urlPath: "/whitepapers",
        shortDescription: "In-depth technical whitepapers for enterprise Microsoft solutions.",
        badge: "WHITEPAPERS",
        breadcrumb: ["Home", "Resources", "Whitepapers"]
    },

    infographics: {
        hero: {
            heading: "Visual Learning",
            highlightedHeading: "Infographics",
            description: "Visual guides to understand complex Microsoft technologies.",
            subDescription: "Simplify complex concepts with our easy-to-understand visual guides.",
            badges: ["Visual", "Learning", "Architecture", "Migration"]
        },
        overview: {
            tag: "VISUAL GUIDES",
            title: "Learn Complex Technologies Visually",
            brandLabel: "Visual Learning",
            paragraphs: [
                "Our infographics make complex Microsoft technologies easy to understand through visual representation.",
                "Perfect for training, presentations, and quick reference."
            ],
            checklist: [
                "Easy to understand",
                "Shareable format",
                "Training ready",
                "Quick reference"
            ]
        },
        graphics: [
            {
                icon: "Shield",
                title: "Microsoft 365 Security Architecture",
                description: "Visual overview of identity, endpoint, email and cloud protection layers."
            },
            {
                icon: "Cloud",
                title: "Azure Migration Journey",
                description: "Complete visual guide to assessment, planning, migration, optimization and management."
            }
        ],
        benefits: {
            tag: "WHY USE OUR INFOGRAPHICS",
            title: "Benefits of Visual Learning",
            subtitle: "Simplify complex concepts",
            items: [
                {
                    icon: "Eye",
                    title: "Visual Learning",
                    description: "Understand complex concepts quickly through visual representation."
                },
                {
                    icon: "Share",
                    title: "Easy to Share",
                    description: "Perfect for team training and stakeholder presentations."
                },
                {
                    icon: "Clock",
                    title: "Quick Reference",
                    description: "Get the big picture at a glance with our visual guides."
                },
                {
                    icon: "Users",
                    title: "Team Alignment",
                    description: "Get everyone on the same page with visual explanations."
                }
            ]
        },
        cta: {
            title: "Want to Learn More?",
            description: "Explore our visual guides or schedule a consultation with our team.",
            primaryLabel: "Explore More",
            secondaryLabel: "Contact Us"
        },
        theme: sharedTheme,
        title: "Infographics",
        slug: "infographics",
        urlPath: "/infographics",
        shortDescription: "Visual guides to understand complex Microsoft technologies.",
        badge: "INFOGRAPHICS",
        breadcrumb: ["Home", "Resources", "Infographics"]
    },

    events: {
        hero: {
            heading: "Upcoming",
            highlightedHeading: "Microsoft Events",
            description: "Join our expert-led webinars and workshops on Microsoft technologies.",
            subDescription: "Learn from industry experts and gain practical skills for your Microsoft journey.",
            badges: ["Webinars", "Workshops", "Expert-Led", "Interactive"]
        },
        overview: {
            tag: "UPCOMING EVENTS",
            title: "Learn from Industry Experts",
            brandLabel: "Events & Training",
            paragraphs: [
                "Join our upcoming events to learn from Microsoft experts and industry professionals.",
                "From webinars to hands-on workshops, we offer events for every learning style."
            ],
            checklist: [
                "Expert speakers",
                "Interactive sessions",
                "Practical skills",
                "Networking opportunities"
            ]
        },
        upcoming: [
            {
                icon: "Video",
                title: "Azure Migration Webinar",
                type: "Webinar",
                date: "2026-08-20",
                speaker: "Senior Azure Consultant",
                description: "Learn migration planning, security, governance and cost optimization strategies."
            },
            {
                icon: "Users",
                title: "Microsoft Copilot Workshop",
                type: "Workshop",
                date: "2026-09-05",
                speaker: "Microsoft AI Specialist",
                description: "Hands-on training for Microsoft 365 Copilot and AI integration."
            }
        ],
        benefits: {
            tag: "WHY ATTEND OUR EVENTS",
            title: "Benefits of Attending",
            subtitle: "Learn, network, and grow your skills",
            items: [
                {
                    icon: "GraduationCap",
                    title: "Skill Development",
                    description: "Gain practical skills you can apply immediately."
                },
                {
                    icon: "Users",
                    title: "Networking",
                    description: "Connect with peers and industry experts."
                },
                {
                    icon: "Award",
                    title: "Expert Insights",
                    description: "Learn from experienced Microsoft professionals."
                },
                {
                    icon: "Rocket",
                    title: "Stay Current",
                    description: "Keep up with the latest Microsoft technologies and best practices."
                }
            ]
        },
        cta: {
            title: "Ready to Level Up Your Skills?",
            description: "Register for an upcoming event or schedule a consultation.",
            primaryLabel: "Register Now",
            secondaryLabel: "Contact Us"
        },
        theme: sharedTheme,
        title: "Microsoft Events",
        slug: "events",
        urlPath: "/events",
        shortDescription: "Upcoming webinars and workshops on Microsoft technologies.",
        badge: "EVENTS",
        breadcrumb: ["Home", "Resources", "Events"]
    }
};