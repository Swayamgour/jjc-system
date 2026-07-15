

const sharedTheme = {
  accent: "#2563EB",
  accentDark: "#1D4ED8",
  accentLight: "#60A5FA",
  accentSoft: "rgba(37,99,235,.08)",
  heroStart: "#021B4E",
  heroEnd: "#0B5ED7",
  accentRgb: "37,99,235",
};

// ------------------------------------------------------------
// 1. ONBOARDING GUIDE  ->  /onboarding-guide
// ------------------------------------------------------------
export const onboardingGuideData = {
  hero: {
    heading: "Onboarding Guide:",
    highlightedHeading: "Transform Your IT Integration with JJC Systems",
    description:
      "Welcome to Seamless IT Integration with JJC Systems! Our Onboarding Guide is designed to facilitate a smooth and efficient transition to your new IT systems.",
    subDescription:
      "Our unique approach ensures that your technology aligns perfectly with your business needs and operates at peak performance from day one.",
    badges: ["Tailored Onboarding", "Comprehensive Phases", "Expert Consultation", "Continuous Support"],
  },
  overview: {
    tag: "WHY CHOOSE JJC SYSTEMS",
    title: "Why Choose JJC Systems for Your IT Onboarding?",
    brandLabel: "IT Onboarding Excellence",
    paragraphs: [
      "Our onboarding process is not one-size-fits-all. We customize our approach to fit your specific industry needs and business goals. Whether you're in retail, healthcare, or any other sector, we design an onboarding plan that addresses your unique challenges.",
      "We break down our onboarding process into clear, manageable phases to ensure nothing is overlooked. From initial consultation to post-implementation support, each step is meticulously planned to provide a seamless transition.",
      "Our IT experts work closely with you to understand your current infrastructure and future goals. This consultation helps us create a detailed onboarding plan that addresses your specific requirements and sets the stage for successful integration.",
    ],
    checklist: [
      "Tailored Onboarding Solutions",
      "Comprehensive Onboarding Phases",
      "Expert Consultation and Planning",
      "Continuous Support and Optimization",
    ],
  },
  challenges: {
    tag: "OUR PROVEN IT ONBOARDING PROCESS",
    title: "Six Steps From Kickoff To Full Support",
    subtitle: "A predictable path that keeps your business running while we get to work behind the scenes.",
    items: [
      { step: 1, icon: "Search", title: "Initial Consultation and Needs Assessment", description: "We begin with a thorough assessment of your existing IT setup and business objectives. This helps us understand your needs and tailor our onboarding strategy accordingly." },
      { step: 2, icon: "ClipboardList", title: "Customized Onboarding Plan", description: "We develop a detailed plan that outlines every phase of the onboarding process, including timelines, milestones, and resource allocation. Our goal is to ensure that the transition is smooth and aligned with your business goals." },
      { step: 3, icon: "Settings", title: "Technical Setup and Configuration", description: "Our team handles all technical aspects of the setup, including hardware installation, software configuration, and system integration. We ensure that everything is configured to meet your business requirements." },
      { step: 4, icon: "DatabaseZap", title: "Secure Data Migration", description: "We manage the secure migration of your data to the new system, ensuring that all information is transferred accurately and without loss. Our approach minimizes disruption and maintains data integrity." },
      { step: 5, icon: "GraduationCap", title: "Training and Empowerment", description: "Once the systems are set up, we provide comprehensive training to your staff. Our training programs are designed to ensure that your team is proficient with the new technology and can leverage it effectively." },
      { step: 6, icon: "LifeBuoy", title: "Continuous Support and Optimization", description: "Our support doesn't end with the implementation. We offer ongoing assistance and conduct regular reviews to optimize system performance and address any emerging needs or issues." },
    ],
  },
  benefits: {
    tag: "FEATURES",
    title: "Benefits of Choosing JJC Systems For IT Onboarding",
    subtitle: "The same rollout process behind every successful client transition.",
    items: [
      { icon: "TrendingUp", title: "Enhanced Operational Efficiency", description: "Our tailored onboarding process helps streamline your IT operations, leading to increased productivity and efficiency." },
      { icon: "TimerReset", title: "Minimized Downtime", description: "We focus on a smooth transition with minimal downtime, allowing your business to continue running smoothly during the integration process." },
      { icon: "ShieldCheck", title: "Advanced Security and Compliance", description: "Our onboarding includes robust security measures to protect your data and ensure compliance with industry standards." },
      { icon: "RefreshCcw", title: "Ongoing Improvement", description: "We don't just set up and walk away. Our commitment to continuous support and optimization ensures that your systems evolve with your business." },
    ],
  },
  faqs: {
    tag: "ONBOARDING FAQS",
    title: "Questions About Getting Started",
    items: [
      { question: "How long does onboarding usually take?", answer: "Most engagements move from discovery call to full handover within a few weeks, depending on the size of your environment and how much data needs to migrate." },
      { question: "Will my team experience downtime during the switch?", answer: "We schedule the technical cutover around your business hours and build in rollback checkpoints so disruption is kept to a minimum." },
      { question: "Do I need a long-term contract to get started?", answer: "No — we offer flexible arrangements, whether you need ongoing managed support or help on a single project." },
      { question: "What happens after onboarding is complete?", answer: "You move onto our regular managed services support, including 24/7 monitoring, help desk access and periodic strategy reviews." },
    ],
  },
  cta: {
    title: "Ready To Begin Your IT Integration?",
    description: "Book a discovery call and we'll map out an onboarding plan built around your business.",
    primaryLabel: "Schedule a Consultation",
    secondaryLabel: "Open a Support Ticket",
  },
  theme: sharedTheme,
  title: "Onboarding Guide",
  slug: "onboarding-guide",
  urlPath: "/onboarding-guide",
  shortDescription: "A clear, phased walkthrough of how JJC Systems brings new clients onto managed IT.",
  badge: "ONBOARDING",
  breadcrumb: ["Home", "Services", "Onboarding Guide"],
};


export const openTicketData = {
  hero: {
    heading: "Help is Just a Click Away",
    highlightedHeading: "For Seamless Productivity",
    description:
      "Submit a ticket in our Help Center, and our engineers will begin working on it right away.",
    subDescription:
      "At JJC Systems, we understand that timely support is crucial for your business operations. Whether you're facing a technical issue or need assistance with your IT solutions, our team is here to help.",
    badges: ["24/7 Support", "Fast Response Times", "Expert Engineers", "Multiple Contact Methods"],
  },
  overview: {
    tag: "SUPPORT OPTIONS",
    title: "Multiple Ways to Submit a Support Request",
    brandLabel: "How to Get Help",
    paragraphs: [
      "We offer multiple convenient ways for you to submit a support request, ensuring you can reach us in the manner that best suits your needs.",
      "Simply log in to our Help Center Portal, provide the necessary details, and our team will start working on your issue right away.",
    ],
    checklist: ["Help Center Portal", "Email Support", "Phone Support", "24/7 Availability"],
  },
  challenges: {
    tag: "HOW TO SUBMIT A TICKET",
    title: "Simple Steps to Get Support",
    subtitle: "Follow these steps to submit your support request through our Help Center Portal.",
    items: [
      { step: 1, icon: "LogIn", title: "Log in to the Help Desk Portal", description: "Log in to the JJC Systems Help Desk Portal to access the ticket submission system." },
      { step: 2, icon: "FilePlus", title: "Click on 'Submit a Ticket'", description: "Navigate to the 'New Ticket' section to begin creating your support request." },
      { step: 3, icon: "FileText", title: "Fill in the Required Fields", description: "Enter a subject briefly describing your issue, provide detailed information about the problem, and upload any relevant files or screenshots." },
      { step: 4, icon: "Folder", title: "Select the Appropriate Category", description: "Choose the relevant category from the dropdown if available to help route your ticket correctly." },
      { step: 5, icon: "Send", title: "Submit the Ticket", description: "Click the 'Submit' button to send your request to our support team." },
      { step: 6, icon: "CheckCircle", title: "Receive Confirmation", description: "You'll receive a confirmation with a ticket number for tracking your request." },
    ],
  },
  benefits: {
    tag: "WHY CHOOSE US",
    title: "Our Support by the Numbers",
    subtitle: "Performance metrics that demonstrate our commitment to your success.",
    items: [
      { icon: "Clock", title: "2 Mins", description: "Average response time to get your issue addressed." },
      { icon: "Percent", title: "99%", description: "Client satisfaction rate for our support services." },
      { icon: "Award", title: "15+ Years", description: "Years of field experience in IT support and management." },
    ],
  },
  testimonial: {
    quote: "86 Ventures has been working with JJC Systems on a variety of projects and their service is top-notch. They go above and beyond in their efforts to help us. They were able to quickly troubleshoot an issue with one of our ChromeOS devices the night before Thanksgiving that saved us a client relationship. In a separate instance, they were able to quickly resolve an emergency outage for one of our client's Office 365 email. Their knowledge and expertise in this area was evident, and they were able to get our client back up and running in less than 1-hour. JJC Systems is currently helping us with a tenant to tenant migration as we exit the MSP sector. They have been a great partner in this process, and have been incredibly helpful in guiding us through the process. Overall, we highly recommend JJC Systems to anyone in need of managed service provider support. They are professional, reliable, and truly know their industry. Thank you JJC Systems for your great work!",
    author: "Amar Balikai",
    title: "The Service Alchemist - Desk Intelligence",
  },
  contactMethods: {
    tag: "CONTACT OPTIONS",
    title: "Choose Your Preferred Method",
    subtitle: "We're available through multiple channels to make support accessible.",
    items: [
      { icon: "Mail", title: "Email Support", description: "Just email us at support@jjcsystems.com with a brief description of your issue, and we'll take it from there." },
      { icon: "Phone", title: "Phone Support", description: "Give us a call at 312-585-7555, and select option 1. One of our support agents will assist you directly." },
      { icon: "MessageSquare", title: "Help Center Portal", description: "Log in and submit a ticket through our Help Center for comprehensive tracking and management." },
    ],
  },
  cta: {
    title: "We're Committed to Providing the Best Possible Support",
    description: "Choose the method that's most convenient for you, and let us handle the rest. If you need further assistance or have any questions, don't hesitate to reach out.",
    primaryLabel: "Open a Support Ticket",
    secondaryLabel: "Contact Us",
  },
  theme: sharedTheme,
  title: "Open a Ticket",
  slug: "open-a-ticket",
  urlPath: "/open-a-ticket",
  shortDescription: "Submit a support ticket and get help from our expert team quickly.",
  badge: "SUPPORT",
  breadcrumb: ["Home", "Support", "Open a Ticket"],
};


// ------------------------------------------------------------
// 2. OUR APPROACH  ->  /our-approach
// ------------------------------------------------------------
export const ourApproachData = {
  hero: {
    heading: "Our Proven Process",
    highlightedHeading: "For IT Success",
    description:
      "JJC Systems follows a systematic, multi-step process to ensure a smooth transition to managed IT services and deliver ongoing support to keep your business running at peak performance.",
    subDescription:
      "Every phase is designed around one goal — technology that supports your business instead of getting in its way.",
    badges: ["24/7 Live Support", "Proven Track Record", "Customer-Centric Approach", "Exceptional Service"],
  },
  overview: {
    tag: "ABOUT OUR COMPANY",
    title: "Boosting Your Business Using Our Team",
    brandLabel: "How JJC Systems Operates",
    paragraphs: [
      "At JJC Systems, we empower businesses with cutting-edge IT solutions, optimizing operations through our expertly crafted managed services. Our dedication to innovation, expertise, efficiency, and reliability guarantees that your IT infrastructure becomes a catalyst for your business success.",
      "Whether you're looking to enhance operational efficiency, strengthen cyber security defences, or embark on a transformative journey towards digital innovation, we are here to partner with you every step of the way.",
    ],
    checklist: ["24/7 Live Support", "Proven Track Record", "Dedicated Account Team", "Transparent Reporting"],
  },
  solutions: {
    tag: "OUR VALUES",
    title: "What Makes Us Different",
    subtitle: "A team built from diverse expertise, all pointed at one outcome: your success.",
    items: [
      { icon: "Users", title: "Diverse Expertise", description: "Our team is a melting pot of diverse expertise and skills. From seasoned industry professionals to young talents, each member brings a unique set of experiences." },
      { icon: "Target", title: "Customer-Centric Approach", description: "At JJC Systems, we understand that each client has unique needs. We specialize in creating customized solutions that align with your specific requirements, ensuring maximum efficiency and productivity." },
      { icon: "BookOpen", title: "Empowered Learning", description: "Technology evolves at a rapid pace, and at JJC Systems, we make it our business to stay ahead of the curve. You can trust us to provide the most modern, efficient, and secure IT solutions." },
      { icon: "Network", title: "Collaboration Culture", description: "JJC Systems leverages an extensive network of industry connections. This broad range of resources allows us to tackle any IT challenge that comes our way effectively and efficiently." },
      // { icon: "HeartHandshake", title: "Exceptional Customer Service", description: "JJC Systems prides itself on our exceptional customer service. Our clients can always expect prompt attention and open communication." },
    ],
  },
  industries: {
    tag: "OUR ACHIEVEMENTS",
    title: "By the Numbers",
    subtitle: "Performance metrics that demonstrate our commitment to excellence.",
    items: [
      { icon: "Calendar", title: "2022+", description: "Year Established" },
      { icon: "Award", title: "15+ Years", description: "Field Experience" },
      { icon: "Globe", title: "150+ Projects", description: "Done Around World" },
      { icon: "Percent", title: "99%", description: "Client Satisfaction" },
      { icon: "Clock", title: "2 Mins", description: "Response Time" },
    ],
  },
  relatedPlatforms: {
    tag: "OUR PROCESS",
    title: "A Six-Step Path To Managed IT",
    subtitle: "Systematic, repeatable, and built around your business — not a template.",
    items: [
      { step: 1, icon: "Search", title: "Deep Dive Discovery", description: "We understand your goals, infrastructure and challenges through in-depth consultation and assessment." },
      { step: 2, icon: "Layers", title: "Customized Solutions", description: "A personalized managed IT plan is built around your needs and your budget." },
      { step: 3, icon: "Rocket", title: "Seamless Implementation", description: "The transition to managed services is handled with minimal disruption to daily operations." },
      { step: 4, icon: "Radar", title: "Proactive Monitoring", description: "We continuously watch your environment, catching issues before they affect the business." },
      { step: 5, icon: "Wrench", title: "Ongoing Maintenance", description: "Regular maintenance, troubleshooting and user support keep systems running smoothly." },
      { step: 6, icon: "Compass", title: "Strategic Guidance", description: "We stay engaged as a partner, aligning technology decisions with where your business is headed." },
    ],
  },
  cta: {
    title: "Let's Get Started On Something Great",
    description: "Our team of IT experts looks forward to meeting with you and providing valuable insights tailored to your business.",
    primaryLabel: "Get An Appointment Now",
    secondaryLabel: "Contact Us",
  },
  theme: sharedTheme,
  title: "Our Approach",
  slug: "our-approach",
  urlPath: "/our-approach",
  shortDescription: "The systematic, multi-step process JJC Systems follows on every managed IT engagement.",
  badge: "OUR APPROACH",
  breadcrumb: ["Home", "Company", "Our Approach"],
};

// ------------------------------------------------------------
// 3. FAQ  ->  /faq
// ------------------------------------------------------------
export const faqPageData = {
  hero: {
    heading: "Our expert team give answers to",
    highlightedHeading: "your common questions",
    description:
      "Welcome to our FAQs section, where we address the most common questions and queries our clients and visitors often have.",
    subDescription:
      "Can't find what you're looking for? Reach out and we'll get back to you directly.",
    badges: ["24/7 Help Desk", "Fast Response Times", "Flexible Contracts", "All Major Platforms"],
  },
  faqs: {
    tag: "FREQUENTLY ASKED QUESTIONS",
    title: "Frequently Asked Questions",
    items: [
      { question: "How can Managed IT Services improve my business's productivity?", answer: "By outsourcing IT management to us, you can ensure that your IT infrastructure is optimized, secure, and reliable. This minimizes downtime, reduces IT-related issues, and allows your team to focus on their core responsibilities without IT distractions." },
      { question: "How do you ensure the security of my IT infrastructure?", answer: "We employ advanced cyber-security measures, including threat detection, regular security assessments, and robust data protection protocols. Our proactive approach helps prevent cyber-attacks and ensures your IT infrastructure remains secure." },
      { question: "Does JJC Systems offer ongoing support and maintenance for cybersecurity solutions?", answer: "Yes, JJC Systems provides ongoing support and maintenance for all cybersecurity solutions we implement. Our dedicated support team is available to address any issues or concerns you may have and ensure that your security infrastructure remains up-to-date and effective against emerging threats." },
      { question: "What types of computers do you set up?", answer: "We set up all types of computers, including desktops, laptops, and workstations, across various operating systems like Windows, macOS, and Linux. Whether for personal use or business, we tailor our services to meet your specific requirements." },
      { question: "How secure are cloud services provided by JJC Systems?", answer: "Security is a top priority at JJC Systems. We implement advanced cloud security measures, including data encryption, strict access controls, and regular security audits, to ensure your data is protected against threats and complies with industry standards." },
      { question: "Do you develop industry-specific applications?", answer: "Yes, we offer tailored solutions for various industries, including healthcare, fintech, education, retail, travel, real estate, and logistics." },
      { question: "How fast can you respond to a support request?", answer: "JJC Systems prides itself on providing fast and efficient IT support. Our IT help desk is available 24/7, and our remote IT support services allow us to resolve most issues quickly without the need for an on-site visit." },
      { question: "What is involved in data security training?", answer: "Data Security Training focuses on teaching employees how to handle, store, and protect sensitive information. This includes best practices for data encryption, secure file sharing, and compliance with data protection regulations." },
      { question: "What are the advantages of outsourcing NOC services to JJC Systems?", answer: "Outsourcing your NOC services to JJC Systems offers several advantages: Expertise: Access to a team of skilled professionals specializing in network management. Enhanced Reliability: Continuous monitoring and proactive issue resolution. Focus on Core Activities: Allows you to concentrate on your core business operations while we handle your network management." },
      { question: "Do you provide support for both macOS and iOS devices?", answer: "Absolutely. Our support services cover both macOS and iOS devices, ensuring seamless integration and functionality across your entire Apple ecosystem." },
      { question: "What cloud platforms does JJC Systems support?", answer: "We support all major cloud platforms, including: AWS Cloud Management, Azure Cloud Management, Google Cloud Platform Management, and Multi-Cloud Management Solutions." },
      { question: "Do I need to sign a long-term contract for on-site IT support services?", answer: "We offer flexible contract options tailored to your preferences, whether you require ongoing support or assistance on a project-by-project basis." },
      { question: "How can SharePoint improve my business's collaboration efforts?", answer: "SharePoint enhances collaboration by allowing team members to share documents, communicate in real-time, and work together on projects seamlessly. With features like shared document libraries, integrated communication tools, and real-time co-authoring, your team can stay connected and productive." },
      { question: "What is Azure Virtual Desktop (AVD)?", answer: "Azure Virtual Desktop is a cloud-based virtual desktop infrastructure solution by Microsoft that provides secure remote desktop services, allowing users to access their desktops and applications from anywhere." },
      { question: "How does HaaS differ from buying hardware?", answer: "Unlike purchasing, HaaS eliminates large upfront investments and provides managed services. You pay a monthly fee for the hardware and its upkeep." },
      { question: "Why is Vulnerability Testing Important?", answer: "Vulnerability testing is crucial because it helps in identifying and mitigating security risks before they can be exploited. This proactive approach enhances your cybersecurity posture, protects sensitive data, and ensures compliance with industry regulations." },
      { question: "What if I have a question not listed here?", answer: "No problem! Our team is happy to answer any questions you may have about IT procurement. Feel free to contact us directly." },
      { question: "How do you ensure the security of our servers?", answer: "We employ robust security measures including regular updates, firewalls, encryption, and comprehensive audits. Our team follows best practices to protect your data and networks from potential threats." },
    ],
  },
  benefits: {
    tag: "WHY OUR SERVICES ARE BETTER",
    title: "Why our services are better than others?",
    subtitle:
      "We don't believe in a one-size-fit-all approach. Our services are carefully customized to suit your specific need, ensuring you to achieve your goals.",
    items: [
      {
        icon: "Target",
        title: "Customized Solutions",
        description:
          "Every business is unique. We tailor our IT solutions to match your goals, workflows, and long-term growth strategy.",
      },
      {
        icon: "Zap",
        title: "Quick Response",
        description:
          "Our experienced support team responds rapidly to minimize downtime and resolve issues before they impact your business.",
      },
      {
        icon: "ShieldCheck",
        title: "Enterprise-Grade Security",
        description:
          "We implement advanced security practices, proactive monitoring, and compliance-focused solutions to keep your systems protected.",
      },
      {
        icon: "Headphones",
        title: "24/7 Expert Support",
        description:
          "Our dedicated IT professionals are available around the clock to provide reliable assistance whenever you need it.",
      },
      {
        icon: "TrendingUp",
        title: "Scalable & Future-Ready",
        description:
          "Our solutions are designed to grow with your business, making it easy to adapt to new technologies and changing requirements.",
      },
    ],
  },
  cta: {
    title: "Build your project with us, Make it world class",
    description: "Our projects are born from a passion for innovation that knows no bounds.",
    primaryLabel: "Book an appointment now",
    secondaryLabel: "Contact Us",
  },
  theme: sharedTheme,
  title: "Frequently Asked Questions",
  slug: "faq",
  urlPath: "/faq",
  shortDescription: "Answers to the questions we hear most often about our services and support.",
  badge: "FAQS",
  breadcrumb: ["Home", "Get Started", "FAQs"],
};

// ------------------------------------------------------------
// 4. TEAM  ->  /team
// ------------------------------------------------------------
export const teamPageData = {
  hero: {
    heading: "Meet The People",
    highlightedHeading: "Behind JJC Systems",
    description: "A leadership team combining deep Microsoft expertise with real-world business strategy.",
    subDescription: "From strategy to delivery, this is the team steering every engagement we take on.",
    badges: ["Certified Experts", "Cross-Industry Experience", "Client-First Mindset"],
  },
  overview: {
    tag: "OUR TEAM",
    title: "Experience Across Every Discipline",
    brandLabel: "Leadership at JJC Systems",
    paragraphs: [
      "Our leadership team is a mix of seasoned technologists and business strategists, brought together to make sure every recommendation we give is grounded in both.",
      "Each leader owns a distinct part of the client journey — from technical architecture through delivery and long-term client success.",
    ],
    checklist: ["Certified Microsoft Specialists", "Decades Of Combined Experience", "Dedicated Client Success Lead"],
  },
  capabilities: {
    tag: "LEADERSHIP",
    title: "Our Leadership Team",
    subtitle: "The people setting direction across strategy, technology, delivery and client success.",
    columns: 3,
    items: [
      { icon: "UserCog", title: "James L. Chapman", subtitle: "CEO & Founder", desc: "Sets the company's overall direction and long-term vision." },
      { icon: "Cpu", title: "David M. Brown", subtitle: "Chief Technology Officer", desc: "Owns the technical strategy behind every Microsoft solution we deliver." },
      { icon: "Layers3", title: "Shalini Williams", subtitle: "Chief Solutions Officer", desc: "Designs solutions that map technology directly to business outcomes." },
      { icon: "Workflow", title: "Mark T. Anderson", subtitle: "Chief Delivery Officer", desc: "Keeps every project on track from kickoff to go-live." },
      { icon: "HeartHandshake", title: "Priya N. Patel", subtitle: "Head of Client Success", desc: "Makes sure clients keep getting value long after implementation." },
    ],
  },
  cta: {
    title: "Want To Work With Our Team?",
    description: "Get in touch and we'll connect you with the right people for your project.",
    primaryLabel: "Schedule a Consultation",
    secondaryLabel: "View Careers",
  },
  theme: sharedTheme,
  title: "Our Team",
  slug: "team",
  urlPath: "/team",
  shortDescription: "The leadership team behind JJC Systems' Microsoft-powered IT solutions.",
  badge: "OUR TEAM",
  breadcrumb: ["Home", "Company", "Team"],
};

// ------------------------------------------------------------
// 5. LOCATIONS  ->  /locations
// ------------------------------------------------------------
export const locationsPageData = {
  hero: {
    heading: "Where To",
    highlightedHeading: "Find Us",
    description: "JJC Systems supports clients from offices across North America, the Middle East and South Asia.",
    subDescription: "Reach out to whichever office is closest to your team, or contact us directly — support is available 24/7 regardless of location.",
    badges: ["Multiple Regional Offices", "24/7 Remote Support", "On-Site Visits Available"],
  },
  officeLocations: {
    title: "Our Offices",
    items: [
      { city: "Houston", country: "USA", address: "Serving clients across Texas and the wider Gulf Coast region.", phone: "+1 (888) 329-0625", email: "info@jjcsystems.com" },
      { city: "Chicago", country: "USA", address: "Regional hub for the Midwest, supporting on-site and remote clients alike.", phone: "+1 (888) 329-0625", email: "info@jjcsystems.com" },
      { city: "Atlanta", country: "USA", address: "Supporting clients throughout the Southeast.", phone: "+1 (888) 329-0625", email: "info@jjcsystems.com" },
      { city: "Riyadh", country: "Saudi Arabia", address: "Extending our managed IT services across the Middle East.", phone: "+1 (888) 329-0625", email: "info@jjcsystems.com" },
      { city: "Hyderabad", country: "India", address: "Supporting delivery and engineering operations in South Asia.", phone: "+1 (888) 329-0625", email: "info@jjcsystems.com" },
    ],
  },
  contactInfo: {
    tag: "GET IN TOUCH",
    title: "Talk To Someone Today",
    subtitle: "However you'd like to reach us, we're available around the clock.",
    phone: "+1 (888) 329-0625",
    email: "info@jjcsystems.com",
    address: "Houston · Chicago · Atlanta · Riyadh · Hyderabad",
    hours: "Support available 24/7",
  },
  cta: {
    title: "Let's Get Started On Something Great",
    description: "Our team looks forward to meeting with you and providing insights tailored to your business.",
    primaryLabel: "Get An Appointment",
    secondaryLabel: "Contact Us",
  },
  theme: sharedTheme,
  title: "Locations",
  slug: "locations",
  urlPath: "/locations",
  shortDescription: "Find the JJC Systems office nearest you, or reach our 24/7 support team directly.",
  badge: "LOCATIONS",
  breadcrumb: ["Home", "Company", "Locations"],
};

// ------------------------------------------------------------
// 6. PARTNERS  ->  /partners
// ------------------------------------------------------------
export const partnersPageData = {
  hero: {
    heading: "Backed By The Partners",
    highlightedHeading: "You Trust",
    description: "As a Microsoft Solutions Partner, our accreditations reflect a consistent standard of delivery, security and client care.",
    subDescription: "These partnerships and recognitions shape how we build, manage and support every client environment.",
    badges: ["Microsoft Solutions Partner", "MSPAlliance Member", "BBB Accredited", "UpCity Award Winner"],
  },
  overview: {
    tag: "OUR PARTNERSHIPS",
    title: "Why These Partnerships Matter",
    brandLabel: "Trusted Affiliations",
    paragraphs: [
      "Our Microsoft Solutions Partner status means our engineers are certified on the platforms we recommend, not just familiar with them.",
      "Membership with recognized industry bodies keeps us accountable to standards well beyond our own internal processes.",
    ],
    checklist: ["Certified Microsoft Specialists", "Independently Verified Standards", "Recognized Industry Accreditation"],
  },
  capabilities: {
    tag: "AFFILIATIONS",
    title: "Partnerships & Accreditations",
    subtitle: "The organizations that hold us to a higher bar.",
    columns: 4,
    items: [
      { icon: "BadgeCheck", title: "Microsoft Solutions Partner", desc: "Certified expertise across Microsoft 365, Azure, Dynamics 365 and the Power Platform." },
      { icon: "ShieldCheck", title: "MSPAlliance Member", desc: "Part of the International Association of Cloud and Managed Service Providers." },
      { icon: "Landmark", title: "BBB Accredited", desc: "Held to the Better Business Bureau's standards for trust and business practice." },
      { icon: "Trophy", title: "UpCity Award Winner", desc: "Recognized among the best-rated IT providers in Illinois." },
    ],
  },
  cta: {
    title: "Interested In Partnering With Us?",
    description: "Whether as a client or a technology partner, we'd like to hear from you.",
    primaryLabel: "Contact Us",
    secondaryLabel: "Learn About Our Approach",
  },
  theme: sharedTheme,
  title: "Partners",
  slug: "partners",
  urlPath: "/partners",
  shortDescription: "The Microsoft partnership and industry accreditations behind JJC Systems' services.",
  badge: "PARTNERS",
  breadcrumb: ["Home", "Company", "Partners"],
};

// ------------------------------------------------------------
// 7. CAREERS  ->  /careers
// ------------------------------------------------------------
export const careersPageData = {
  hero: {
    heading: "You Have Great",
    highlightedHeading: "Opportunities Here",
    description: "If you're a talented, ambitious professional looking to make a mark in IT, we'd like to hear from you.",
    subDescription: "Our team is a collective of experts and visionaries from diverse fields, united by a passion for excellence.",
    badges: ["Managed Services & Products", "Flexibility & Adaptability", "Competitive Advantage"],
  },
  overview: {
    tag: "LIFE AT JJC SYSTEMS",
    title: "A Team Built On Excellence",
    brandLabel: "Careers",
    paragraphs: [
      "From concept to implementation, we hold every project to the same high standard — and that starts with the people we bring on board.",
      "We're always open to hearing from professionals who share that same commitment, even when a specific role isn't posted yet.",
    ],
    checklist: ["Collaborative, Expert-Led Team", "Real Client Impact", "Room To Grow With The Company"],
  },
  benefits: {
    tag: "OPEN POSITIONS",
    title: "Job Openings & Career Opportunities",
    subtitle: "There are no active openings listed right now — check back soon, or send us your resume anyway.",
    items: [
      { icon: "CalendarClock", title: "No Current Openings", description: "Please check back in a few days for new opportunities." },
      { icon: "Send", title: "Send Us Your Resume", description: "We keep strong candidates on file for when the right role opens up." },
      { icon: "Users2", title: "Diverse Fields Welcome", description: "We hire across engineering, cloud, security, support and client success." },
    ],
  },
  cta: {
    title: "Want To Be Considered For Future Roles?",
    description: "Reach out and introduce yourself — we're always glad to hear from good people.",
    primaryLabel: "Book an Appointment",
    secondaryLabel: "Contact Us",
  },
  theme: sharedTheme,
  title: "Careers",
  slug: "careers",
  urlPath: "/careers",
  shortDescription: "Current openings and what it's like working with the JJC Systems team.",
  badge: "CAREERS",
  breadcrumb: ["Home", "Company", "Careers"],
};



