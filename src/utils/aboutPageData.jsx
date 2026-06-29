import AboutImage from "../assets/banner2.png";

import {
  Building2,
  ShieldCheck,
  Users,
  Briefcase,
  HeartHandshake,
  Factory,
  Hospital,
  ShoppingBag,
  GraduationCap,
  Landmark,
  Building,
  Search,
  ClipboardList,
  Cog,
  TrendingUp,
  LifeBuoy,
  BadgeCheck,
  Target,
  Workflow,
} from "lucide-react";

const aboutPageData = {
  hero: {
    eyebrow: "ABOUT JJC SYSTEMS",
    title: "Why We Exist.\nWhere You Succeed.",
    description:
      "We deliver Microsoft-powered solutions that empower businesses to innovate, grow and lead in their industries.",

    primaryCta: {
      label: "Schedule Consultation",
      href: "/contact",
    },

    secondaryCta: {
      label: "Explore Services",
      href: "/services",
    },

    variant: "photo",

    visual: (
      <img
        src={AboutImage}
        alt="JJC Systems"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    ),
  },

  about: {
    image: AboutImage,

    badge: {
      icon: <Building2 size={18} />,
      text: "Microsoft Solutions Partner",
    },

    eyebrow: "WHO WE ARE",

    heading: "Building Solutions. Building Relationships.",

    description:
      "JJC Systems is a Microsoft Solutions Partner helping organizations transform the way they work. We combine deep industry knowledge with Microsoft technologies to deliver business value that lasts.",

    points: [
      "Microsoft Solutions Partner",
      "Certified & Experienced Team",
      "Customer-Centric Approach",
      "End-to-End Support",
    ],
  },

  features: {
    eyebrow: "WHY CLIENTS CHOOSE US",

    heading: "Committed To Your Success",

    columns: 4,

    cards: [
      {
        icon: <BadgeCheck size={22} />,
        title: "Microsoft Expertise",
        description:
          "Certified experts with deep Microsoft technology knowledge.",
      },

      {
        icon: <Target size={22} />,
        title: "Business-First Approach",
        description:
          "We align technology solutions with measurable business goals.",
      },

      {
        icon: <Workflow size={22} />,
        title: "End-To-End Delivery",
        description:
          "From strategy and implementation to support and optimization.",
      },

      {
        icon: <HeartHandshake size={22} />,
        title: "Long-Term Partnership",
        description: "We build relationships focused on growth and success.",
      },
    ],
  },

  stats: {
    stats: [
      {
        icon: <Briefcase size={30} />,
        value: "150+",
        label: "Projects Delivered",
      },

      {
        icon: <Users size={30} />,
        value: "50+",
        label: "Happy Clients",
      },

      {
        icon: <ShieldCheck size={30} />,
        value: "10+",
        label: "Years Experience",
      },

      {
        icon: <BadgeCheck size={30} />,
        value: "95%",
        label: "Client Satisfaction",
      },
    ],
  },

  process: {
    eyebrow: "OUR APPROACH",

    heading: "Proven Process. Predictable Results.",

    steps: [
      {
        icon: <Search size={22} />,
        title: "Discover",
        description: "Understand your business goals and challenges.",
      },

      {
        icon: <ClipboardList size={22} />,
        title: "Plan",
        description: "Design the right solution strategy and roadmap.",
      },

      {
        icon: <Cog size={22} />,
        title: "Implement",
        description: "Build and deploy with best practices.",
      },

      {
        icon: <TrendingUp size={22} />,
        title: "Optimize",
        description: "Improve performance and drive adoption.",
      },

      {
        icon: <LifeBuoy size={22} />,
        title: "Support",
        description: "Provide ongoing support and continuous improvement.",
      },
    ],
  },

  industries: {
    eyebrow: "INDUSTRIES WE SERVE",

    heading: "Solutions For Every Industry",

    industries: [
      {
        icon: <Factory size={20} />,
        label: "Manufacturing",
      },

      {
        icon: <Hospital size={20} />,
        label: "Healthcare",
      },

      {
        icon: <ShoppingBag size={20} />,
        label: "Retail",
      },

      {
        icon: <GraduationCap size={20} />,
        label: "Education",
      },

      {
        icon: <Landmark size={20} />,
        label: "Finance",
      },

      {
        icon: <Building size={20} />,
        label: "Professional Services",
      },
    ],
  },

  cta: {
    title: "Let's Build The Future Together",

    description: "Ready to transform your business with Microsoft solutions?",

    cta: {
      label: "Get In Touch",
      href: "/contact",
    },
  },
};

export default aboutPageData;
