import ResourceBanner from "../assets/bread-contact.webp";

export const resourcesPageData = {
  hero: {
    eyebrow: "RESOURCES",
    title: "Insights, Guides &\nTechnology Updates",

    description:
      "Explore industry trends, Microsoft solutions, implementation guides, and best practices to accelerate your business transformation.",

    primaryCta: {
      label: "Explore Resources",
      href: "#resources",
    },

    secondaryCta: {
      label: "Contact Experts",
      href: "/contact",
    },

    variant: "photo",

    visual: (
      <img
        src={ResourceBanner}
        alt="Resources"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    ),
  },

  searchFilter: {
    tabs: [
      "All",
      "Articles",
      "Case Studies",
      "Guides",
      "News",
      "Videos",
    ],
  },

  featuredGuide: {
    tag: "FEATURED GUIDE",

    title: "Digital Transformation With Microsoft Dynamics 365",

    description:
      "Learn how organizations streamline operations, improve productivity, and unlock business insights using Microsoft Dynamics 365.",

    link: {
      label: "Read Guide",
      href: "/resources/dynamics-365-guide",
    },

    visual: (
      <img
        src={ResourceBanner}
        alt="Featured Guide"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    ),
  },

  resources: [
    {
      category: "Articles",

      title: "Microsoft Copilot For Business",

      description:
        "Discover how AI-powered productivity tools are transforming modern workplaces.",

      link: {
        label: "Read Article",
        href: "#",
      },
    },

    {
      category: "Guides",

      title: "ERP Readiness Checklist",

      description:
        "A practical checklist to prepare your organization for ERP implementation.",

      link: {
        label: "Download Guide",
        href: "#",
      },
    },

    {
      category: "Case Studies",

      title: "Manufacturing Success Story",

      description:
        "How a manufacturing company improved operational efficiency by 35%.",

      link: {
        label: "View Case Study",
        href: "#",
      },
    },

    {
      category: "News",

      title: "Latest Dynamics 365 Updates",

      description:
        "Explore the newest capabilities added to Dynamics 365 this quarter.",

      link: {
        label: "Read Update",
        href: "#",
      },
    },

    {
      category: "Videos",

      title: "Power BI Dashboard Demo",

      description:
        "Watch how interactive dashboards help executives make faster decisions.",

      link: {
        label: "Watch Video",
        href: "#",
      },
    },

    {
      category: "Articles",

      title: "Cybersecurity Best Practices",

      description:
        "Key security recommendations for businesses using Microsoft cloud services.",

      link: {
        label: "Read Article",
        href: "#",
      },
    },
  ],

  cta: {
    title: "Need Expert Guidance?",

    description:
      "Our consultants can help you choose and implement the right Microsoft solutions for your business.",

    cta: {
      label: "Talk To Our Team",
      href: "/contact",
    },
  },
};