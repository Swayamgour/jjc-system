// ============================================================
// SERVICE PAGE DATA — one object per service.
// Each defines: breadcrumb/hero copy, a `theme` (accent colors),
// and a `sections` array that composes the page body.
// Pass any of these into <ServicePage data={...} /> to render it.
// ============================================================
import microsoft365Img from '../assets/team.jpg'

// ---------- shared icon shorthands (emoji keeps this file framework-free) ----------
const I = {
  sales: "📊", customer: "💙", finance: "🏦", marketing: "📣", ops: "⚙️",
  field: "🛠️", supply: "🔗", shield: "🛡️", link: "🔌", warn: "⚠️",
  users: "👥", gear: "⚙️", plane: "✈️", layers: "🗂️", trend: "📈",
  coin: "💰", scale: "⚖️", cloud: "☁️", search: "🔍", plan: "📝",
  design: "🎨", build: "🧱", test: "🧪", rocket: "🚀", manufacturing: "🏭",
  health: "❤️", retail: "🛍️", finserv: "💼", proserv: "🧑‍💼", construction: "🏗️",
  education: "🎓", nonprofit: "🤝", apps: "📱", automate: "🔁", bot: "🤖",
  data: "🗃️", chart: "📉", connect: "🔌", model: "🧮", report: "📑",
  insight: "💡", governance: "🏛️", portal: "🌐", document: "📄", process: "🔄",
  custom: "🧩", migrate: "📦", support: "🎧",
};







// ============================================================
// 1. MICROSOFT 365
// ============================================================
export const microsoft365Data = {
  breadcrumb: ["Home", "Microsoft Services", "Microsoft 365 Consulting"],
  badge: "MICROSOFT 365",
  title: "Microsoft 365 Consulting Services",
  description: "Empower your team, improve collaboration, and secure your business with Microsoft 365.",
  subDescription: "JJC Systems helps organizations implement, optimize, and manage Microsoft 365 for maximum productivity.",
  heroBadges: ["Microsoft Experts", "Proven Methodology", "Secure & Compliant", "Ongoing Support"],
  heroImage: microsoft365Img,
  floatingIcons: [
    { icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtWMkFH36qDheMlqWqZFlBRdzCDvtOmq4bfQdhcabsSA&s=10", position: { top: -10, left: "18%" }, label: "" },
    { icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwkHgqCRsHEV-0kxy1YTbmqhftCUTXEpgzksA5w55LTw&s=10", position: { top: -26, left: "50%" } },
    { icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyhFL3PY5sYQNyKtYuNzuucAIr6QwFlVgYEHEGuJ7WMQ&s=10", position: { top: 36, left: "80%" } },
    { icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3K62Hegfo6wllNIQFhB-633lkxFV22e3-SeF8OGtYmQ&s=10", position: { top: 100, left: "90%" } },
  ],
  theme: {
    accent: "#2563EB", accentDark: "#1D4ED8", accentLight: "#4F8CFF",
    accentSoft: "rgba(37,99,235,0.08)", heroStart: "#03153c", heroEnd: "#0c5de8",
  },
  sections: [
    {
      type: "overview",
      title: "What is Microsoft 365 Consulting?",
      brandLabel: "Microsoft 365",
      image: "https://it.wustl.edu/app/uploads/2023/06/M365-Apps-1024x837.png",
      coreIcon: "🟦",
      orbitIcons: ["📧", "📊", "📁", "👥"],
      paragraphs: [
        "Microsoft 365 consulting helps organizations leverage the full power of Microsoft 365 suite to improve productivity, collaboration, security, and business outcomes.",
        "Our experts assess your current environment, design a tailored strategy, implement the right solutions, and optimize your Microsoft 365 experience for long-term success.",
      ],
      checklist: ["Modern Workplace Transformation", "Seamless Collaboration", "Enterprise-grade Security", "Scalable & Future-ready Solutions"],
    },
    {
      type: "grid", tag: "CHALLENGES WE SOLVE", title: "Challenges We Solve",
      subtitle: "We help organizations overcome common productivity and collaboration challenges.",
      columns: 5,
      items: [
        { icon: I.link, title: "Disconnected Teams & Data", desc: "Silos, scattered data, and poor collaboration slow down your business." },
        { icon: I.shield, title: "Security & Compliance Risks", desc: "Protect sensitive data and meet compliance requirements with confidence." },
        { icon: I.gear, title: "Inefficient Processes", desc: "Manual tasks and outdated processes reduce productivity and increase costs." },
        { icon: I.plane, title: "Complex Migration", desc: "Moving to Microsoft 365 can be complex without the right planning." },
        { icon: I.warn, title: "Low Adoption & Utilization", desc: "Employees struggle to adopt tools, leading to low ROI on your investment." },
      ],
    },
    {
      type: "grid", tag: "WHAT WE OFFER", title: "Our Microsoft 365 Consulting Services",
      subtitle: "End-to-end services to help you plan, implement, and optimize Microsoft 365.",
      columns: 4, bg: "white",
      items: [
        { icon: I.users, title: "Microsoft 365 Strategy & Planning", desc: "We assess your business needs and create a roadmap aligned with your goals." },
        { icon: I.gear, title: "Microsoft 365 Implementation", desc: "Seamless deployment of Microsoft 365 tailored to your organization's requirements." },
        { icon: I.plane, title: "Migration to Microsoft 365", desc: "Migrate email, files, and applications to Microsoft 365 with minimal disruption." },
        { icon: I.shield, title: "Security & Compliance Management", desc: "Implement security, governance, and compliance best practices to protect your data." },
        { icon: I.users, title: "Teams & Collaboration Solutions", desc: "Optimize Microsoft Teams for seamless communication and collaboration." },
        { icon: I.layers, title: "SharePoint & Intranet Solutions", desc: "Build modern intranets and knowledge hubs with SharePoint." },
        { icon: I.trend, title: "Microsoft 365 Optimization", desc: "Improve performance, user adoption, and ROI with continuous optimization." },
        { icon: I.gear, title: "Training & Change Management", desc: "Empower your team with training and support for successful adoption." },
      ],
    },
    {
      type: "process", tag: "OUR PROCESS", title: "Our Microsoft 365 Migration Process",
      subtitle: "A proven approach to ensure a smooth and successful migration.",
      steps: [
        { num: "01", title: "Assess", desc: "We evaluate your current environment, tools, and business needs." },
        { num: "02", title: "Plan", desc: "We design a tailored migration plan and strategy." },
        { num: "03", title: "Prepare", desc: "We prepare your environment, data, and users." },
        { num: "04", title: "Migrate", desc: "We migrate your data and workloads securely and efficiently." },
        { num: "05", title: "Optimize", desc: "We optimize, test, and ensure adoption for maximum impact." },
        { num: "06", title: "Support", desc: "We provide ongoing support and continuous improvement." },
      ],
    },
    {
      type: "benefits", tag: "BENEFITS", title: "Benefits of Microsoft 365",
      subtitle: "Drive productivity, collaboration, and growth with Microsoft 365.",
      items: [
        { icon: I.users, title: "Improve Productivity", desc: "Empower your team with tools that help them do more, from anywhere." },
        { icon: I.link, title: "Enhanced Collaboration", desc: "Work together in real-time with secure and seamless collaboration tools." },
        { icon: I.shield, title: "Enterprise Security", desc: "Protect your data with built-in security and compliance capabilities." },
        { icon: I.scale, title: "Scalability", desc: "Scale your solutions as your business grows and evolves." },
        { icon: I.coin, title: "Cost Efficiency", desc: "Reduce IT costs and maximize ROI with Microsoft 365." },
      ],
    },
    {
      type: "caseStudies", tag: "CASE STUDIES", title: "Case Studies",
      subtitle: "See how we help organizations succeed with Microsoft 365.",
      items: [
        { tag: "Professional Services", title: "Improved Collaboration for a Consulting Firm", desc: "Implemented Microsoft 365 and Teams to improve collaboration across multiple locations and increase productivity by 35%.", color: "#163a73" },
        { tag: "Healthcare", title: "Secure Data & Better Patient Communication", desc: "Migrated to Microsoft 365 and enhanced security, enabling secure collaboration and improved patient communication.", color: "#0f3d91" },
        { tag: "Manufacturing", title: "Streamlined Operations with Microsoft 365", desc: "Unified communication and document management with Microsoft 365, reducing operational costs by 28%.", color: "#0d2b6b" },
      ],
    },
    {
      type: "faq", tag: "GOT QUESTIONS", title: "Frequently Asked Questions",
      items: [
        { q: "What is Microsoft 365 consulting?", a: "Microsoft 365 consulting is a service that helps organizations plan, implement, and optimize Microsoft 365 to improve productivity, collaboration, and security." },
        { q: "What are the benefits of Microsoft 365?", a: "Key benefits include improved productivity, real-time collaboration, enterprise-grade security, scalability, and reduced IT costs." },
        { q: "How long does a Microsoft 365 migration take?", a: "Migration timelines vary based on organization size and complexity, typically ranging from a few weeks to a few months." },
        { q: "Do you provide training and support?", a: "Yes, we provide comprehensive training and ongoing support to ensure successful adoption across your organization." },
        { q: "Is Microsoft 365 secure for businesses?", a: "Yes, Microsoft 365 includes enterprise-grade security, compliance, and data protection features built in." },
        { q: "Can you customize Microsoft 365 for our business?", a: "Absolutely. We tailor configurations, workflows, and integrations to match your specific business requirements." },
      ],
    },
    {
      type: "cta", title: "Ready to Transform Your Workplace with Microsoft 365?",
      description: "Let's build a more productive, secure, and collaborative organization together.",
    },
  ],
};

// ============================================================
// 2. DYNAMICS 365 (includes industry icon strip + migration split panel)
// ============================================================
export const dynamics365Data = {
  breadcrumb: ["Home", "Microsoft Services", "Dynamics 365 Consulting"],
  badge: "UNIFY. AUTOMATE. GROW.",
  title: "Dynamics 365 Consulting Services",
  description: "Transform the way you engage customers, streamline operations, and drive growth with Microsoft Dynamics 365.",
  subDescription: "Our experts help you implement, customize, and optimize Dynamics 365 to meet your unique business needs.",
  heroBadges: ["Microsoft Certified Experts", "Proven Implementation Methodology", "Tailored Solutions for Your Business", "Ongoing Support & Optimization"],
  heroImage: microsoft365Img,
  floatingIcons: [
    { icon: I.sales, position: { top: -10, left: "8%" }, label: "Sales" },
    { icon: I.customer, position: { top: -22, left: "62%" }, label: "Customer Service" },
    { icon: I.finance, position: { top: 40, left: "-6%" }, label: "Finance" },
    { icon: I.marketing, position: { top: 36, left: "94%" }, label: "Marketing" },
    { icon: I.ops, position: { top: 130, left: "14%" }, label: "Operations" },
    { icon: I.field, position: { top: 130, left: "78%" }, label: "Field Service" },
    { icon: I.supply, position: { top: 168, left: "46%" }, label: "Supply Chain Management" },
  ],
  theme: {
    accent: "#5B5FEF", accentDark: "#4346C9", accentLight: "#7C80FF",
    accentSoft: "rgba(91,95,239,0.08)", heroStart: "#0a0e2a", heroEnd: "#1c2470",
  },
  sections: [
    {
      type: "grid", tag: "DYNAMICS 365 MODULES", title: "Powerful Applications. Unified Platform.",
      subtitle: "Choose the right apps to solve your business challenges and drive results.",
      columns: 7, bg: "white",
      items: [
        { icon: I.sales, title: "Sales", desc: "Close more deals and build stronger customer relationships." },
        { icon: I.customer, title: "Customer Service", desc: "Deliver exceptional service and improve customer satisfaction." },
        { icon: I.finance, title: "Finance", desc: "Streamline financial management and gain real-time insights." },
        { icon: I.supply, title: "Supply Chain Management", desc: "Optimize inventory, reduce costs, and improve supply chain visibility." },
        { icon: I.marketing, title: "Marketing", desc: "Engage the right customers with personalized campaigns." },
        { icon: I.ops, title: "Operations", desc: "Automate processes and improve operational efficiency." },
        { icon: I.field, title: "Field Service", desc: "Empower field teams and deliver outstanding service onsite." },
      ],
      footerLink: "View All Dynamics 365 Capabilities",
    },
    {
      type: "process", tag: "OUR IMPLEMENTATION PROCESS", title: "A Proven Approach for Successful Outcomes",
      subtitle: "We follow a structured methodology to ensure your Dynamics 365 implementation is on time and on budget.",
      steps: [
        { num: "01", title: "Discover", desc: "We understand your business challenges, and goals." },
        { num: "02", title: "Plan", desc: "We define the solution scope, roadmap, and success metrics." },
        { num: "03", title: "Design", desc: "We design the solution architecture tailored to your needs." },
        { num: "04", title: "Implement", desc: "We configure, customize, and integrate Dynamics 365 to fit your business." },
        { num: "05", title: "Test & Train", desc: "We test thoroughly and train your team for seamless adoption." },
        { num: "06", title: "Go-Live & Support", desc: "We ensure a smooth go-live and provide ongoing support." },
      ],
    },
    {
      type: "iconStrip", tag: "INDUSTRY USE CASES", title: "Solutions That Drive Results Across Industries",
      subtitle: "Dynamics 365 adapts to your industry's unique needs.",
      columns: 4,
      items: [
        { icon: I.manufacturing, label: "Manufacturing", desc: "Streamline production, improve quality, and optimize operations." },
        { icon: I.health, label: "Healthcare", desc: "Improve patient engagement, ensure compliance, and streamline operations." },
        { icon: I.retail, label: "Retail", desc: "Enhance customer experiences and optimize inventory and supply chains." },
        { icon: I.finserv, label: "Financial Services", desc: "Improve risk management, ensure compliance, and deliver better experiences." },
        { icon: I.proserv, label: "Professional Services", desc: "Increase project profitability and deliver exceptional client service." },
        { icon: I.construction, label: "Construction", desc: "Manage projects, resources, and finances more efficiently." },
        { icon: I.education, label: "Education", desc: "Enhance student engagement and streamline administrative processes." },
        { icon: I.nonprofit, label: "Nonprofit", desc: "Improve donor engagement and maximize mission impact." },
      ],
      footerLink: "View All Industries",
    },
    {
      type: "splitPanel", tag: "MIGRATION PLANNING", title: "Move to Dynamics 365 with Confidence",
      desc: "We help you migrate from legacy systems or previous CRM/ERP solutions to Dynamics 365 with minimal risk and maximum value.",
      visualIcon: "☁️",
      miniIcons: [I.migrate, I.layers, I.design],
      list: ["Assessment & Planning", "Data Migration & Cleansing", "System Integration", "User Adoption & Training", "Ongoing Optimization"],
      buttonLabel: "Plan Your Migration",
    },
    {
      type: "caseStudies", tag: "CASE STUDIES", title: "Real Success Stories from Real Clients",
      items: [
        { tag: "Manufacturing", title: "Streamlined Operations with Dynamics 365", desc: "Implemented Dynamics 365 Finance & Supply Chain Management to reduce operational costs by 22%.", color: "#1c2470" },
        { tag: "Healthcare", title: "Improved Patient Engagement and Care", desc: "Unified patient data and processes with Dynamics 365 to improve patient satisfaction by 35%.", color: "#272b8a" },
        { tag: "Financial Services", title: "Enhanced Sales Productivity and Compliance", desc: "Built a unified sales platform with Dynamics 365 Sales, improving productivity by 30%.", color: "#15184f" },
      ],
    },
    {
      type: "faq", tag: "GOT QUESTIONS", title: "Frequently Asked Questions",
      items: [
        { q: "What is Microsoft Dynamics 365?", a: "Dynamics 365 is a suite of intelligent business applications combining CRM and ERP capabilities to help manage sales, customer service, finance, and operations." },
        { q: "Which Dynamics 365 modules do I need?", a: "It depends on your business needs — we assess your operations and recommend the right combination of Sales, Customer Service, Finance, Operations, or other modules." },
        { q: "How long does a Dynamics 365 implementation take?", a: "Implementation timelines vary by scope, typically ranging from a few weeks for simple deployments to several months for complex, multi-module projects." },
        { q: "Is Dynamics 365 cloud-based?", a: "Yes, Dynamics 365 is primarily cloud-based, offering scalability, automatic updates, and accessibility from anywhere." },
        { q: "Can Dynamics 365 integrate with my existing systems?", a: "Yes, Dynamics 365 integrates seamlessly with Microsoft 365, Power Platform, and many third-party systems via connectors and APIs." },
        { q: "What kind of support do you provide after go-live?", a: "We provide ongoing support, monitoring, training, and continuous optimization to ensure long-term success." },
      ],
    },
    {
      type: "cta", title: "Ready to Transform Your Business with Dynamics 365?",
      description: "Let's build a smarter, more connected organization together.",
    },
  ],
};

// ============================================================
// 3. POWER PLATFORM (purple theme)
// ============================================================
export const powerPlatformData = {
  breadcrumb: ["Home", "Microsoft Services", "Power Platform Consulting"],
  badge: "BUILD. AUTOMATE. EMPOWER.",
  title: "Power Platform Consulting Services",
  description: "Build custom applications, automate workflows, and unlock productivity with Microsoft Power Platform.",
  subDescription: "We help organizations connect data, empower teams, and deliver solutions faster with Power Apps, Power Automate, Power BI, and Power Virtual Agents.",
  heroBadges: ["Microsoft Certified Experts", "Proven Methodology", "Secure & Scalable", "Ongoing Support"],
  heroImage: microsoft365Img,
  floatingIcons: [
    { icon: I.apps, position: { top: -10, left: "10%" } },
    { icon: I.automate, position: { top: -24, left: "55%" } },
    { icon: I.chart, position: { top: 40, left: "88%" } },
    { icon: I.bot, position: { top: 110, left: "94%" } },
  ],
  theme: {
    accent: "#7C3AED", accentDark: "#6025C9", accentLight: "#A78BFA",
    accentSoft: "rgba(124,58,237,0.08)", heroStart: "#1a0b3d", heroEnd: "#5b21b6",
  },
  sections: [
    {
      type: "grid", tag: "POWER PLATFORM CAPABILITIES", title: "Power Platform Capabilities",
      subtitle: "Everything you need to innovate and automate on one secure, unified platform.",
      columns: 4, bg: "white",
      items: [
        { icon: I.apps, title: "Power Apps", desc: "Build custom apps faster with low-code tools and modern experiences." },
        { icon: I.automate, title: "Power Automate", desc: "Automate workflows and business processes across apps and services." },
        { icon: I.chart, title: "Power BI", desc: "Turn your data into powerful insights with interactive dashboards." },
        { icon: I.bot, title: "Power Virtual Agents", desc: "Create intelligent chatbots and virtual agents to engage and support customers." },
      ],
      footerLink: "Explore All Capabilities",
    },
    {
      type: "process", tag: "OUR IMPLEMENTATION PROCESS", title: "A Proven Approach to Deliver Solutions That Drive Real Business Value.",
      steps: [
        { num: "01", title: "Discover", desc: "Understand your challenges, goals, and requirements." },
        { num: "02", title: "Design", desc: "Design the right solution and plan your roadmap." },
        { num: "03", title: "Build", desc: "Build and configure apps, flows, reports, and agents." },
        { num: "04", title: "Test", desc: "Test, validate, and refine for optimal performance." },
        { num: "05", title: "Deploy", desc: "Deploy securely and prepare your team for adoption." },
        { num: "06", title: "Support", desc: "Provide ongoing support and continuous improvement." },
      ],
    },
    {
      type: "iconStrip", tag: "USE CASES ACROSS INDUSTRIES", title: "Use Cases Across Industries",
      subtitle: "Power Platform adapts to your industry's unique needs.",
      columns: 6,
      items: [
        { icon: I.finserv, label: "Finance", desc: "Automate reporting and approvals." },
        { icon: I.health, label: "Healthcare", desc: "Patient intake and case management." },
        { icon: I.manufacturing, label: "Manufacturing", desc: "Quality tracking and processes." },
        { icon: I.retail, label: "Retail", desc: "Inventory, orders, and customer apps." },
        { icon: I.proserv, label: "HR & Operations", desc: "Automate HR and internal workflows." },
        { icon: I.customer, label: "Customer Service", desc: "Case management and self-service." },
      ],
      footerLink: "View More Use Cases",
    },
    {
      type: "caseStudies", tag: "SUCCESS STORIES", title: "Success Stories",
      items: [
        { tag: "Manufacturing", title: "Automated Quality Inspections with Power Apps", stat: "45%", statLabel: "Time Saved", desc: "Reduced inspection time by 45% and improved accuracy.", color: "#3b1078" },
        { tag: "Finance", title: "Streamlined Approval Workflows with Power Automate", stat: "60%", statLabel: "Faster Approvals", desc: "Cut approval cycle time by 60% across departments.", color: "#5b21b6" },
        { tag: "Services", title: "Real-time Insights with Power BI Dashboards", stat: "3X", statLabel: "Faster Insights", desc: "Improved decision-making with real-time operational dashboards.", color: "#2c0a5e" },
      ],
    },
    {
      type: "cta", title: "Ready to Build More and Achieve More with Power Platform?",
      description: "Let's build solutions that empower your teams and accelerate your business.",
    },
  ],
};

// ============================================================
// 4. POWER BI (amber theme)
// ============================================================
export const powerBIData = {
  breadcrumb: ["Home", "Microsoft Services", "Power BI Consulting"],
  badge: "VISUALIZE. ANALYZE. DECIDE.",
  title: "Power BI Consulting Services",
  description: "Transform your data into actionable insights with Microsoft Power BI.",
  subDescription: "We help you connect, visualize, and analyze data to make smarter decisions and drive better outcomes.",
  heroBadges: ["Microsoft Certified Experts", "Proven Methodology", "Data Security", "Ongoing Support"],
  heroImage: microsoft365Img,
  floatingIcons: [
    { icon: I.chart, position: { top: -10, left: "10%" } },
    { icon: I.model, position: { top: -24, left: "55%" } },
    { icon: I.report, position: { top: 40, left: "88%" } },
  ],
  theme: {
    accent: "#F59E0B", accentDark: "#D97706", accentLight: "#FBBF24",
    accentSoft: "rgba(245,158,11,0.1)", heroStart: "#1a1006", heroEnd: "#92400e",
  },
  sections: [
    {
      type: "grid", tag: "POWER BI SERVICES", title: "Power BI Services",
      subtitle: "End-to-end Power BI services to help you harness the power of your data.",
      columns: 6, bg: "white",
      items: [
        { icon: I.connect, title: "Data Connection", desc: "Connect to multiple sources and integrate your data." },
        { icon: I.model, title: "Data Modeling", desc: "Build robust models for accurate and fast analysis." },
        { icon: I.report, title: "Dashboard & Reports", desc: "Create interactive reports and compelling dashboards." },
        { icon: I.insight, title: "Advanced Analytics", desc: "Unlock deeper insights with DAX and advanced analytics." },
        { icon: I.shield, title: "Governance & Security", desc: "Ensure data security, compliance, and access control." },
        { icon: I.support, title: "Support & Training", desc: "Empower your team with training and ongoing support." },
      ],
    },
    {
      type: "process", tag: "IMPLEMENTATION PROCESS", title: "Implementation Process",
      subtitle: "A structured approach to deliver impactful Power BI solutions.",
      steps: [
        { num: "01", title: "Assess", desc: "Understand your data and business goals." },
        { num: "02", title: "Plan", desc: "Define the data model, KPIs, and roadmap." },
        { num: "03", title: "Build", desc: "Build reports and dashboards." },
        { num: "04", title: "Validate", desc: "Test, validate, and gather feedback." },
        { num: "05", title: "Deploy", desc: "Deploy and share insights securely." },
        { num: "06", title: "Support", desc: "Provide ongoing support and training." },
      ],
    },
    {
      type: "iconStrip", tag: "USE CASES ACROSS INDUSTRIES", title: "Use Cases Across Industries",
      subtitle: "Power BI drives insights across every industry.",
      columns: 6,
      items: [
        { icon: I.finserv, label: "Finance", desc: "Financial reporting, budgeting & forecasting." },
        { icon: I.health, label: "Healthcare", desc: "Patient analytics & operational insights." },
        { icon: I.manufacturing, label: "Manufacturing", desc: "Production monitoring & quality analysis." },
        { icon: I.retail, label: "Retail", desc: "Sales performance & customer insights." },
        { icon: I.supply, label: "Logistics", desc: "Supply chain & route analytics." },
        { icon: I.education, label: "Education", desc: "Student performance & institutional insights." },
      ],
      footerLink: "View Use Cases",
    },
    {
      type: "caseStudies", tag: "SUCCESS STORIES", title: "Success Stories",
      items: [
        { tag: "Finance", title: "Built Executive Dashboards with Power BI", stat: "70%", statLabel: "Reporting Efficiency", desc: "Improved reporting efficiency by 70%.", color: "#78350f" },
        { tag: "Healthcare", title: "Improved Patient Outcomes with Data Insights", stat: "25%", statLabel: "Readmission Reduction", desc: "Reduced readmission rate by 25%.", color: "#92400e" },
        { tag: "Retail", title: "Boosted Sales with Real-time Analytics", stat: "18%", statLabel: "Sales Increase", desc: "Increased sales by 18% with better insights.", color: "#5c2a07" },
      ],
    },
    {
      type: "cta", title: "Turn Your Data into a Competitive Advantage with Power BI.",
      description: "Get clear insights. Make better decisions. Drive results.",
    },
  ],
};

// ============================================================
// 5. SHAREPOINT (teal theme)
// ============================================================
export const sharePointData = {
  breadcrumb: ["Home", "Microsoft Services", "SharePoint Consulting"],
  badge: "ORGANIZE. COLLABORATE. EMPOWER.",
  title: "SharePoint Consulting Services",
  description: "Build smarter intranets, manage content, and empower collaboration with SharePoint.",
  subDescription: "We design and implement secure, scalable SharePoint solutions that enhance productivity and streamline business processes.",
  heroBadges: ["Microsoft Certified Experts", "Proven Methodology", "Secure & Compliant", "Ongoing Support"],
  heroImage: microsoft365Img,
  floatingIcons: [
    { icon: I.portal, position: { top: -10, left: "10%" } },
    { icon: I.document, position: { top: -24, left: "55%" } },
    { icon: I.layers, position: { top: 40, left: "88%" } },
  ],
  theme: {
    accent: "#0D9488", accentDark: "#0B7A70", accentLight: "#2DD4BF",
    accentSoft: "rgba(13,148,136,0.08)", heroStart: "#04201d", heroEnd: "#0f766e",
  },
  sections: [
    {
      type: "grid", tag: "OUR SHAREPOINT SERVICES", title: "Our SharePoint Services",
      subtitle: "Comprehensive SharePoint solutions to help your organization collaborate and grow.",
      columns: 6, bg: "white",
      items: [
        { icon: I.portal, title: "Intranet Portals", desc: "Build modern intranets for communication and engagement." },
        { icon: I.document, title: "Document Management", desc: "Organize, manage, and secure your documents efficiently." },
        { icon: I.process, title: "Business Process Automation", desc: "Automate workflows and streamline business processes." },
        { icon: I.custom, title: "Custom Solutions", desc: "Build custom web parts, lists, and apps tailored to your needs." },
        { icon: I.migrate, title: "Migration Services", desc: "Migrate to SharePoint Online with zero data loss." },
        { icon: I.support, title: "Support & Training", desc: "Empower your team with training and ongoing support." },
      ],
    },
    {
      type: "process", tag: "IMPLEMENTATION PROCESS", title: "Implementation Process",
      subtitle: "A proven approach to deliver successful SharePoint solutions.",
      steps: [
        { num: "01", title: "Assess", desc: "Evaluate your current environment, scope, and roadmap." },
        { num: "02", title: "Plan", desc: "Define architecture, scope, and information architecture." },
        { num: "03", title: "Design", desc: "Design sites, workflows, and information architecture." },
        { num: "04", title: "Build", desc: "Configure, develop, and integrate solutions." },
        { num: "05", title: "Deploy", desc: "Test and deploy with secure migration." },
        { num: "06", title: "Support", desc: "Provide training and continuous support." },
      ],
    },
    {
      type: "iconStrip", tag: "USE CASES ACROSS INDUSTRIES", title: "Use Cases Across Industries",
      subtitle: "SharePoint solutions tailored for your industry.",
      columns: 6,
      items: [
        { icon: I.health, label: "Healthcare", desc: "Secure patient document management and compliance." },
        { icon: I.finserv, label: "Finance", desc: "Policy management and compliance." },
        { icon: I.manufacturing, label: "Manufacturing", desc: "SOP management and collaboration." },
        { icon: I.proserv, label: "Professional Services", desc: "Project collaboration and knowledge management." },
        { icon: I.education, label: "Education", desc: "Content management and collaboration." },
        { icon: I.nonprofit, label: "Nonprofit", desc: "Volunteer and donor management." },
      ],
      footerLink: "View More Use Cases",
    },
    {
      type: "caseStudies", tag: "SUCCESS STORIES", title: "Success Stories",
      items: [
        { tag: "Professional Services", title: "Improved Collaboration with SharePoint Intranet", stat: "35%", statLabel: "Productivity Increase", desc: "Increased employee productivity by 35%.", color: "#0c3e38" },
        { tag: "Healthcare", title: "Streamlined Document Management", stat: "60%", statLabel: "Time Saved", desc: "Reduced document search time by 60%.", color: "#0f766e" },
        { tag: "Manufacturing", title: "Automated Workflows with SharePoint", stat: "40%", statLabel: "Cycle Time Reduction", desc: "Reduced process cycle time by 40%.", color: "#083b35" },
      ],
    },
    {
      type: "cta", title: "Empower Your Team. Simplify Processes. Achieve More with SharePoint.",
      description: "Let's build a SharePoint solution tailored to your needs.",
    },
  ],
};

export const allServices = {
  "microsoft-365": microsoft365Data,
  "dynamics-365": dynamics365Data,
  "power-platform": powerPlatformData,
  "power-bi": powerBIData,
  "sharepoint": sharePointData,
};
