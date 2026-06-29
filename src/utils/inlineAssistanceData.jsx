import AboutImage from "../assets/bread-contact.webp";

export const supportPageData = {
  // =========================
  // HERO (BreadHero)
  // =========================
  breadHero: {
    eyebrow: "Contact Us",

    title: "Let's Start A Conversation",

    description:
      "Tell Us About Your Goal And Challenges. Our Experts are here to Help.",

    primaryCta: {
      label: "Schedule a Meeting",
      href: "/contact",
    },

    secondaryCta: {
      label: "Explore Services",
      href: "/services",
    },

    variant: "photo",

    // ✅ SAFE: only image reference
    visual: AboutImage,
  },

  // =========================
  // INLINE ASSISTANCE
  // =========================
  inlineAssistance: {
    title: "Need Immediate Assistance?",

    description:
      "Our support team is available 24/7 to help you with queries, technical issues, or service support.",

    phone: "+91 98765 43210",

    cta: {
      label: "Call Now",
      href: "tel:+919876543210",
      onClick: () => {
        window.location.href = "tel:+919876543210";
      },
    },
  },

  // =========================
  // CONTACT US PAGE
  // =========================
  contactUs: {
    contactInfo: {
      phone: "+91 98765 43210",
      email: "support@yourcompany.com",
      hours: "Mon - Sat: 9:00 AM - 6:00 PM",
      address: "Kanpur, Uttar Pradesh, India",
    },

    services: [
      "Website Development",
      "UI/UX Design",
      "Mobile App Development",
      "SEO Optimization",
      "Cloud Services",
    ],
  },


  bottomCTA: {
    title: "Let's Build The Future Together",

    description:
      "Ready to transform your business with Microsoft solutions?",

    cta: {
      label: "Get In Touch",
      href: "/contact",
      onClick: () => {
        window.location.href = "/contact";
      },
    },
  },
};