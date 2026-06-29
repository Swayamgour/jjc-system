
import microsoft365Img from '../assets/team.jpg'
import banner from '../assets/banner1.webp'
import contactHeroImg from '../assets/bread-contact.webp'
import AboutImage from '../assets/2-01.png'
import resourcesHero from '../assets/resources.jpg'

// import {
//   BarChart2, Heart, Landmark, Megaphone, Settings, Wrench, Link2,
//   Shield, AlertTriangle, Users, Plane, Layers, TrendingUp, Coins,
//   Scale, Cloud, Search, ClipboardList, Palette, Box, FlaskConical,
//   Rocket, Factory, HeartPulse, ShoppingBag, Briefcase, HardHat,
//   GraduationCap, Handshake, Smartphone, RefreshCw, Bot, Database,
//   LineChart, Plug, Calculator, FileText, Lightbulb, Building2,
//   Globe, File, RotateCcw, Puzzle, Package, Headphones, Monitor, Phone,
//   Banknote
// } from 'lucide-react';

import {
  BarChart3,
  Heart,
  Banknote,
  Megaphone,
  Settings,
  Wrench,
  Link2,
  ShieldCheck,
  TriangleAlert,
  Users,
  Plane,
  Layers3,
  TrendingUp,
  Coins,
  Scale,
  Cloud,
  Search,
  ClipboardList,
  Palette,
  Hammer,
  FlaskConical,
  Rocket,
  Factory,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  Building2,
  GraduationCap,
  Handshake,
  Smartphone,
  Bot,
  Database,
  ChartColumn,
  Calculator,
  FileBarChart,
  Lightbulb,
  Landmark,
  Globe,
  FileText,
  Workflow,
  Puzzle,
  Package,
  Headset,
  Book,
} from "lucide-react";

import {
  Building,
  // ShieldCheck,
  // Users,
  // Briefcase,
  HeartHandshake,
  // Factory,
  Hospital,
  // ShoppingBag,
  // GraduationCap,
  // Landmark,
  // Building,
  // Search,
  // ClipboardList,
  Cog,
  // TrendingUp,
  LifeBuoy,
  BadgeCheck,
  Target,
  // Workflow,
  // Phone,
  Mail,
  MapPin,
  Clock,
  Zap,
} from "lucide-react";

import {
  FaBookOpen,
  FaFileAlt,
  FaVideo,
  FaDownload,
  FaClipboardCheck,
  FaChartLine,
  FaSearch,
  FaLightbulb,
  FaMicrosoft,
  FaCloud,
  FaShieldAlt,
  FaRobot,
  FaDatabase,
  FaLaptopCode,
  FaRegNewspaper,
  FaCashRegister,
} from "react-icons/fa";

import { MdOutlineLibraryBooks, MdOutlineInsights } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { TbBrandAzure, TbBrandOffice, TbBrandTeams } from "react-icons/tb";

import {
  UserCircle,
  // Target,
  Brain,
  // TrendingUp,
  // Mail,
  // Smartphone,
  // Search,
  // ClipboardList,
  // Settings,
  Plug,
  // GraduationCap,
  // LifeBuoy,
  // Factory,
  ShoppingCart,
  // Briefcase,
  // Landmark,
  HeartPulse,
  School,
  Home,
  Sprout,
} from "lucide-react";

import D365HeroImage from "../assets/bread-contact.webp";




export const I = {
  sales: <BarChart3 />,
  customer: <Heart />,
  finance: <Banknote />,
  marketing: <Megaphone />,
  ops: <Settings />,

  field: <Wrench />,
  supply: <Link2 />,
  shield: <ShieldCheck />,
  link: <Link2 />,
  warn: <TriangleAlert />,

  users: <Users />,
  gear: <Settings />,
  plane: <Plane />,
  layers: <Layers3 />,
  trend: <TrendingUp />,

  coin: <Coins />,
  scale: <Scale />,
  cloud: <Cloud />,
  search: <Search />,
  plan: <ClipboardList />,

  design: <Palette />,
  build: <Hammer />,
  test: <FlaskConical />,
  rocket: <Rocket />,
  manufacturing: <Factory />,

  health: <Stethoscope />,
  retail: <ShoppingBag />,
  finserv: <Briefcase />,
  proserv: <Building2 />,
  construction: <Hammer />,

  education: <GraduationCap />,
  nonprofit: <Handshake />,
  apps: <Smartphone />,
  automate: <Workflow />,
  bot: <Bot />,

  data: <Database />,
  chart: <ChartColumn />,
  connect: <Link2 />,
  model: <Calculator />,
  report: <FileBarChart />,

  insight: <Lightbulb />,
  governance: <Landmark />,
  portal: <Globe />,
  document: <FileText />,
  process: <Workflow />,

  custom: <Puzzle />,
  migrate: <Package />,
  support: <Headset />,
};





// ============================================================
// 1. MICROSOFT 365
// ============================================================
export const microsoft365Data = {
  breadcrumb: ["Home", "Microsoft Services", "Microsoft 365 Consulting"],
  badge: "MICROSOFT 365",
  title: <> Microsoft 365  Consulting  Services" </>,



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
      // image: "https:2//it.wustl.edu/app/uploads/2023/06/M365-Apps-1024x837.png",
      image: banner,
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
  title: <>Dynamics 365   Consulting Services</>,
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
  title: <>Power Platform  Consulting Services</>,
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
  title: <>Power BI Consulting  Services</>,
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
  title: <>SharePoint Consulting  Services</>,
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



// ============================================================
// 6. MICROSOFT FABRIC & POWER BI
// ============================================================
export const fabricPowerBIData = {
  breadcrumb: ["Home", "Microsoft Services", "Microsoft Fabric & Power BI Consulting"],
  badge: "UNIFY. ANALYZE. INNOVATE.",
  title: "Microsoft Fabric & Power BI Consulting Services",
  description: "Unify your data estate and unlock powerful insights with Microsoft Fabric and Power BI.",
  subDescription: "We help you build a modern data platform that connects, analyzes, and visualizes data across your entire organization.",
  heroBadges: ["Microsoft Certified Experts", "End-to-End Data Solutions", "Enterprise-Grade Security", "Ongoing Support"],
  heroImage: microsoft365Img,
  floatingIcons: [
    { icon: I.data, position: { top: -10, left: "10%" } },
    { icon: I.chart, position: { top: -24, left: "55%" } },
    { icon: I.model, position: { top: 40, left: "88%" } },
    { icon: I.report, position: { top: 100, left: "92%" } },
  ],
  theme: {
    accent: "#7B3FAF", accentDark: "#5B2D8A", accentLight: "#A78BFA",
    accentSoft: "rgba(123,63,175,0.08)", heroStart: "#1a0b30", heroEnd: "#5b21b6",
  },
  sections: [
    {
      type: "overview",
      title: "What is Microsoft Fabric & Power BI?",
      brandLabel: "Microsoft Fabric & Power BI",
      // image: "https:2//images.ctfassets.net/w6r2i5d8j73a/2qo5U8C9nI8mK1zY1HdN6v/f7f0d2b4f1e0f1c8d2b4f1e0f1c8d2b4/microsoft-fabric-power-bi.png",
      image: banner,
      coreIcon: "📊",
      orbitIcons: ["🗃️", "📈", "📉", "📋"],
      paragraphs: [
        "Microsoft Fabric is an end-to-end analytics platform that unifies data integration, engineering, warehousing, and business intelligence in one seamless experience. Combined with Power BI, it delivers powerful insights and data visualization.",
        "Our experts help you design and implement data solutions that connect to multiple sources, transform raw data into actionable insights, and empower your organization with data-driven decision-making.",
      ],
      checklist: ["Unified Data Platform", "Real-time Analytics", "Interactive Dashboards", "Scalable & Secure"],
    },
    {
      type: "grid", tag: "CHALLENGES WE SOLVE", title: "Data Challenges We Solve",
      subtitle: "We help organizations overcome common data and analytics challenges.",
      columns: 4,
      items: [
        { icon: I.data, title: "Data Silos & Fragmentation", desc: "Break down silos and unify data from across your organization." },
        { icon: I.warn, title: "Slow & Inefficient Reporting", desc: "Speed up reporting with real-time data and automated insights." },
        { icon: I.shield, title: "Data Security & Governance", desc: "Ensure data security, compliance, and proper governance." },
        { icon: I.plane, title: "Complex Data Integration", desc: "Simplify data integration from multiple sources and formats." },
      ],
    },
    {
      type: "grid", tag: "WHAT WE OFFER", title: "Our Fabric & Power BI Services",
      subtitle: "End-to-end services to build and optimize your data platform.",
      columns: 6, bg: "white",
      items: [
        { icon: I.data, title: "Data Strategy & Architecture", desc: "Design a modern data architecture aligned with your business goals." },
        { icon: I.connect, title: "Data Integration & Engineering", desc: "Ingest, transform, and prepare data for analysis." },
        { icon: I.model, title: "Data Warehousing & Lakehouses", desc: "Build scalable data warehouses and lakehouses with Fabric." },
        { icon: I.report, title: "Power BI Dashboards & Reports", desc: "Create interactive dashboards and reports for data-driven decisions." },
        { icon: I.insight, title: "Advanced Analytics & AI", desc: "Leverage AI and machine learning for deeper insights." },
        { icon: I.governance, title: "Data Governance & Security", desc: "Implement governance, security, and compliance frameworks." },
      ],
    },
    {
      type: "process", tag: "OUR PROCESS", title: "Our Data Implementation Process",
      subtitle: "A proven approach to deliver impactful data solutions.",
      steps: [
        { num: "01", title: "Discover", desc: "Understand your data landscape, goals, and requirements." },
        { num: "02", title: "Design", desc: "Design the data architecture, model, and roadmap." },
        { num: "03", title: "Build", desc: "Build data pipelines, models, and dashboards." },
        { num: "04", title: "Validate", desc: "Test, validate, and refine for quality and accuracy." },
        { num: "05", title: "Deploy", desc: "Deploy securely and enable user adoption." },
        { num: "06", title: "Optimize", desc: "Monitor, optimize, and provide ongoing support." },
      ],
    },
    {
      type: "benefits", tag: "BENEFITS", title: "Benefits of Microsoft Fabric & Power BI",
      subtitle: "Unlock the full potential of your data.",
      items: [
        { icon: I.data, title: "Unified Data Platform", desc: "Eliminate data silos with one integrated data platform." },
        { icon: I.insight, title: "Faster Insights", desc: "Make faster decisions with real-time data and interactive dashboards." },
        { icon: I.scale, title: "Scalability", desc: "Scale your data platform as your business grows." },
        { icon: I.coin, title: "Cost Efficiency", desc: "Reduce costs with unified, managed data services." },
        { icon: I.shield, title: "Enterprise Security", desc: "Protect sensitive data with enterprise-grade security." },
      ],
    },
    {
      type: "iconStrip", tag: "USE CASES", title: "Use Cases Across Industries",
      subtitle: "Data solutions tailored for every industry.",
      columns: 6,
      items: [
        { icon: I.finserv, label: "Finance", desc: "Risk analytics, fraud detection, and financial reporting." },
        { icon: I.health, label: "Healthcare", desc: "Patient analytics and operational insights." },
        { icon: I.manufacturing, label: "Manufacturing", desc: "Production monitoring and quality analytics." },
        { icon: I.retail, label: "Retail", desc: "Sales performance and customer insights." },
        { icon: I.proserv, label: "Professional Services", desc: "Project profitability and resource analytics." },
        { icon: I.education, label: "Education", desc: "Student performance and institutional insights." },
      ],
      footerLink: "View All Use Cases",
    },
    {
      type: "caseStudies", tag: "CASE STUDIES", title: "Success Stories",
      items: [
        { tag: "Finance", title: "Real-time Risk Analytics with Fabric & Power BI", stat: "60%", statLabel: "Faster Reporting", desc: "Reduced reporting time by 60% with unified data platform.", color: "#3b1078" },
        { tag: "Manufacturing", title: "Predictive Maintenance with AI Insights", stat: "35%", statLabel: "Downtime Reduction", desc: "Reduced downtime by 35% with predictive analytics.", color: "#5b21b6" },
        { tag: "Retail", title: "Omnichannel Customer Insights", stat: "25%", statLabel: "Sales Growth", desc: "Drove 25% sales growth with unified customer analytics.", color: "#2c0a5e" },
      ],
    },
    {
      type: "faq", tag: "GOT QUESTIONS", title: "Frequently Asked Questions",
      items: [
        { q: "What is Microsoft Fabric?", a: "Microsoft Fabric is an end-to-end analytics platform that unifies data integration, engineering, warehousing, and business intelligence in one seamless experience." },
        { q: "How does Power BI work with Fabric?", a: "Power BI integrates natively with Fabric, enabling you to create interactive dashboards and reports from your unified data platform." },
        { q: "What are the benefits of using Fabric?", a: "Fabric simplifies data management, reduces costs, and accelerates time-to-insight by unifying data services on one platform." },
        { q: "Can Fabric integrate with my existing data sources?", a: "Yes, Fabric connects to a wide range of data sources including Azure, AWS, Google, on-premises databases, and SaaS applications." },
        { q: "Is Fabric secure for enterprise data?", a: "Yes, Fabric provides enterprise-grade security, governance, and compliance capabilities." },
        { q: "How long does a Fabric implementation take?", a: "Implementation timelines vary, typically ranging from a few weeks for initial deployments to several months for enterprise-scale implementations." },
      ],
    },
    {
      type: "cta", title: "Ready to Unlock the Power of Your Data with Microsoft Fabric & Power BI?",
      description: "Let's build a data platform that drives smarter decisions and better outcomes.",
    },
  ],
};

// ============================================================
// 7. MICROSOFT ERP (FINANCE & OPERATIONS)
// ============================================================







export const erpData = {
  breadcrumb: ["Home", "Microsoft Services", "ERP Consulting"],
  badge: "STREAMLINE. OPTIMIZE. GROW.",
  title: <>Microsoft ERP  Consulting  Services</>,
  description: "Transform your finance and operations with Microsoft Dynamics 365 Finance & Operations.",
  subDescription: "We help you streamline financial management, optimize supply chains, and improve operational efficiency with Microsoft ERP.",
  heroBadges: ["Microsoft Certified Experts", "Industry-Proven Solutions", "Secure & Compliant", "Ongoing Support"],
  heroImage: microsoft365Img,
  floatingIcons: [
    { icon: I.finance, position: { top: -10, left: "10%" } },
    { icon: I.ops, position: { top: -24, left: "55%" } },
    { icon: I.supply, position: { top: 40, left: "88%" } },
    { icon: I.manufacturing, position: { top: 100, left: "92%" } },
  ],
  theme: {
    accent: "#0052CC", accentDark: "#003D99", accentLight: "#4C8BFF",
    accentSoft: "rgba(0,82,204,0.08)", heroStart: "#051b3a", heroEnd: "#0052cc",
  },
  sections: [
    {
      type: "overview",
      title: "What is Microsoft ERP?",
      brandLabel: "Microsoft ERP",
      image: banner,
      coreIcon: "🏦",
      orbitIcons: ["💰", "📊", "🏭", "📋"],
      paragraphs: [
        "Microsoft ERP (Dynamics 365 Finance & Operations) is a comprehensive enterprise resource planning solution that helps organizations manage financials, supply chains, manufacturing, and operations more efficiently.",
        "Our experts help you implement, customize, and optimize ERP solutions tailored to your industry and business needs, enabling you to streamline operations and drive growth.",
      ],
      checklist: ["Streamlined Financial Management", "Optimized Supply Chain", "Integrated Operations", "Scalable & Secure"],
    },
    {
      type: "grid", tag: "CHALLENGES WE SOLVE", title: "Business Challenges We Solve",
      subtitle: "We help organizations overcome common financial and operational challenges.",
      columns: 4,
      items: [
        { icon: I.finance, title: "Manual Financial Processes", desc: "Automate financial management and reduce manual effort." },
        { icon: I.supply, title: "Supply Chain Inefficiencies", desc: "Optimize inventory, procurement, and logistics." },
        { icon: I.warn, title: "Lack of Real-time Visibility", desc: "Gain real-time insights into financials and operations." },
        { icon: I.plane, title: "Complex Global Operations", desc: "Manage multi-entity, multi-currency, and multi-country operations." },
      ],
    },
    {
      type: "grid", tag: "WHAT WE OFFER", title: "Our ERP Services",
      subtitle: "End-to-end ERP services to transform your finance and operations.",
      columns: 4, bg: "white",
      items: [
        { icon: I.plan, title: "ERP Strategy & Roadmap", desc: "Develop a tailored ERP strategy and implementation roadmap." },
        { icon: I.design, title: "Implementation & Configuration", desc: "Implement and configure Dynamics 365 Finance & Operations." },
        { icon: I.custom, title: "Customization & Integration", desc: "Customize and integrate ERP with your existing systems." },
        { icon: I.migrate, title: "Data Migration", desc: "Migrate data from legacy systems securely and efficiently." },
        { icon: I.process, title: "Process Optimization", desc: "Optimize business processes to improve efficiency and reduce costs." },
        { icon: I.support, title: "Support & Training", desc: "Empower your team with training and ongoing support." },
      ],
    },
    {
      type: "process", tag: "OUR PROCESS", title: "Our ERP Implementation Process",
      subtitle: "A proven approach to deliver successful ERP implementations.",
      steps: [
        { num: "01", title: "Assess", desc: "Assess your current processes, systems, and requirements." },
        { num: "02", title: "Plan", desc: "Design a comprehensive implementation roadmap." },
        { num: "03", title: "Configure", desc: "Configure Dynamics 365 Finance & Operations to meet your needs." },
        { num: "04", title: "Integrate", desc: "Integrate with existing systems and data sources." },
        { num: "05", title: "Test", desc: "Test, validate, and refine for quality and performance." },
        { num: "06", title: "Go-Live & Support", desc: "Deploy and provide ongoing support and optimization." },
      ],
    },
    {
      type: "iconStrip", tag: "INDUSTRY SOLUTIONS", title: "Industry Solutions",
      subtitle: "ERP solutions tailored for your industry.",
      columns: 6,
      items: [
        { icon: I.manufacturing, label: "Manufacturing", desc: "Production management, quality control, and supply chain." },
        { icon: I.finserv, label: "Financial Services", desc: "Financial management, risk, and compliance." },
        { icon: I.retail, label: "Retail & Distribution", desc: "Inventory management, procurement, and logistics." },
        { icon: I.proserv, label: "Professional Services", desc: "Project accounting, resource management, and billing." },
        { icon: I.health, label: "Healthcare", desc: "Financial management and supply chain for healthcare." },
        { icon: I.construction, label: "Construction", desc: "Project management, job costing, and procurement." },
      ],
      footerLink: "View All Industry Solutions",
    },
    {
      type: "benefits", tag: "BENEFITS", title: "Benefits of Microsoft ERP",
      subtitle: "Drive efficiency, visibility, and growth with Microsoft ERP.",
      items: [
        { icon: I.finance, title: "Streamlined Financial Management", desc: "Automate accounting, budgeting, and financial reporting." },
        { icon: I.supply, title: "Optimized Supply Chain", desc: "Improve inventory management, procurement, and logistics." },
        { icon: I.insight, title: "Real-time Visibility", desc: "Gain real-time insights into financials and operations." },
        { icon: I.scale, title: "Scalability", desc: "Scale operations as your business grows." },
        { icon: I.coin, title: "Cost Savings", desc: "Reduce operational costs and improve profitability." },
      ],
    },
    {
      type: "caseStudies", tag: "CASE STUDIES", title: "Success Stories",
      items: [
        { tag: "Manufacturing", title: "Streamlined Production with Dynamics 365 ERP", stat: "25%", statLabel: "Cost Reduction", desc: "Reduced operational costs by 25% with optimized processes.", color: "#003d99" },
        { tag: "Distribution", title: "Optimized Supply Chain Operations", stat: "30%", statLabel: "Inventory Improvement", desc: "Improved inventory turnover by 30%.", color: "#0052cc" },
        { tag: "Professional Services", title: "Enhanced Project Profitability", stat: "20%", statLabel: "Profitability Increase", desc: "Increased project profitability by 20% with better resource management.", color: "#002366" },
      ],
    },
    {
      type: "faq", tag: "GOT QUESTIONS", title: "Frequently Asked Questions",
      items: [
        { q: "What is Microsoft ERP?", a: "Microsoft ERP (Dynamics 365 Finance & Operations) is a comprehensive enterprise resource planning solution for managing finance, supply chain, and operations." },
        { q: "What are the benefits of Microsoft ERP?", a: "Key benefits include streamlined financial management, optimized supply chains, real-time visibility, and improved operational efficiency." },
        { q: "How long does an ERP implementation take?", a: "Implementation timelines vary, typically ranging from a few months to over a year depending on scope and complexity." },
        { q: "Can Microsoft ERP integrate with my existing systems?", a: "Yes, Dynamics 365 integrates with Microsoft 365, Power Platform, and many third-party systems via connectors and APIs." },
        { q: "Is Microsoft ERP cloud-based?", a: "Yes, Dynamics 365 Finance & Operations is cloud-based, offering scalability, automatic updates, and accessibility from anywhere." },
        { q: "Do you provide training and support?", a: "Yes, we provide comprehensive training and ongoing support to ensure successful adoption." },
      ],
    },
    {
      type: "cta", title: "Ready to Transform Your Finance & Operations with Microsoft ERP?",
      description: "Let's build a more efficient, profitable, and scalable organization together.",
    },
  ],
};

// ============================================================
// 8. MICROSOFT CRM (CUSTOMER SERVICE & SALES OPERATIONS)
// ============================================================
export const crmData = {
  breadcrumb: ["Home", "Microsoft Services", "CRM Consulting"],
  badge: "CONNECT. ENGAGE. GROW.",
  title: <>
    Microsoft CRM  Consulting Services
  </>
  ,
  description: "Transform customer engagement and drive sales growth with Microsoft Dynamics 365 Sales & Customer Service.",
  subDescription: "We help you build stronger customer relationships, improve sales productivity, and deliver exceptional service with Microsoft CRM.",
  heroBadges: ["Microsoft Certified Experts", "Proven Methodology", "Customer-Centric Solutions", "Ongoing Support"],
  heroImage: microsoft365Img,
  floatingIcons: [
    { icon: I.sales, position: { top: -10, left: "10%" } },
    { icon: I.customer, position: { top: -24, left: "55%" } },
    { icon: I.marketing, position: { top: 40, left: "88%" } },
    { icon: I.heart, position: { top: 100, left: "92%" } },
  ],
  theme: {
    accent: "#00B4A0", accentDark: "#008A7A", accentLight: "#4CD4C4",
    accentSoft: "rgba(0,180,160,0.08)", heroStart: "#04201e", heroEnd: "#00b4a0",
  },
  sections: [
    {
      type: "overview",
      title: "What is Microsoft CRM?",
      brandLabel: "Microsoft CRM",
      // image: "https:2//images.ctfassets.net/w6r2i5d8j73a/2qo5U8C9nI8mK1zY1HdN6v/f7f0d2b4f1e0f1c8d2b4f1e0f1c8d2b4/dynamics-365-sales-customer-service.png",
      image: banner,
      coreIcon: "💙",
      orbitIcons: ["📊", "🎯", "📞", "🤝"],
      paragraphs: [
        "Microsoft CRM (Dynamics 365 Sales & Customer Service) helps organizations manage customer relationships, streamline sales processes, and deliver exceptional customer service.",
        "Our experts help you implement and optimize CRM solutions that improve sales productivity, increase customer satisfaction, and drive revenue growth.",
      ],
      checklist: ["Unified Customer View", "Streamlined Sales Processes", "Exceptional Customer Service", "Data-Driven Insights"],
    },
    {
      type: "grid", tag: "CHALLENGES WE SOLVE", title: "Customer Engagement Challenges We Solve",
      subtitle: "We help organizations overcome common sales and service challenges.",
      columns: 4,
      items: [
        { icon: I.sales, title: "Disconnected Sales Processes", desc: "Streamline sales processes and improve team productivity." },
        { icon: I.customer, title: "Fragmented Customer Data", desc: "Unify customer data for a 360-degree view." },
        { icon: I.warn, title: "Inconsistent Customer Service", desc: "Deliver consistent, personalized customer service." },
        { icon: I.plane, title: "Low Adoption & ROI", desc: "Drive adoption and maximize ROI with tailored solutions." },
      ],
    },
    {
      type: "grid", tag: "WHAT WE OFFER", title: "Our CRM Services",
      subtitle: "End-to-end CRM services to transform customer engagement.",
      columns: 4, bg: "white",
      items: [
        { icon: I.plan, title: "CRM Strategy & Roadmap", desc: "Develop a CRM strategy aligned with your business goals." },
        { icon: I.design, title: "Implementation & Configuration", desc: "Configure and deploy Dynamics 365 Sales & Customer Service." },
        { icon: I.custom, title: "Customization & Integration", desc: "Customize and integrate CRM with your existing systems." },
        { icon: I.migrate, title: "Data Migration", desc: "Migrate customer data from legacy systems." },
        { icon: I.process, title: "Sales Process Optimization", desc: "Optimize sales processes for greater efficiency and results." },
        { icon: I.support, title: "Support & Training", desc: "Empower your team with training and ongoing support." },
      ],
    },
    {
      type: "process", tag: "OUR PROCESS", title: "Our CRM Implementation Process",
      subtitle: "A proven approach to deliver successful CRM implementations.",
      steps: [
        { num: "01", title: "Discover", desc: "Understand your customer engagement challenges and goals." },
        { num: "02", title: "Design", desc: "Design a tailored CRM solution and roadmap." },
        { num: "03", title: "Configure", desc: "Configure Dynamics 365 to meet your specific requirements." },
        { num: "04", title: "Integrate", desc: "Integrate with your existing systems and data sources." },
        { num: "05", title: "Test & Train", desc: "Test thoroughly and train your team for adoption." },
        { num: "06", title: "Go-Live & Support", desc: "Deploy and provide ongoing support and optimization." },
      ],
    },
    {
      type: "iconStrip", tag: "INDUSTRY SOLUTIONS", title: "Industry Solutions",
      subtitle: "CRM solutions tailored for your industry.",
      columns: 6,
      items: [
        { icon: I.finserv, label: "Financial Services", desc: "Client relationship management and service excellence." },
        { icon: I.health, label: "Healthcare", desc: "Patient engagement and care coordination." },
        { icon: I.retail, label: "Retail", desc: "Customer engagement and loyalty programs." },
        { icon: I.proserv, label: "Professional Services", desc: "Client relationship management and project delivery." },
        { icon: I.manufacturing, label: "Manufacturing", desc: "Customer engagement and service support." },
        { icon: I.nonprofit, label: "Nonprofit", desc: "Donor engagement and relationship management." },
      ],
      footerLink: "View All Industry Solutions",
    },
    {
      type: "benefits", tag: "BENEFITS", title: "Benefits of Microsoft CRM",
      subtitle: "Drive customer engagement, sales growth, and service excellence.",
      items: [
        { icon: I.sales, title: "Increased Sales Productivity", desc: "Empower sales teams with tools to close more deals." },
        { icon: I.customer, title: "Improved Customer Satisfaction", desc: "Deliver personalized service and build stronger relationships." },
        { icon: I.insight, title: "Data-driven Insights", desc: "Gain insights into customer behavior and preferences." },
        { icon: I.scale, title: "Scalability", desc: "Scale as your business grows and evolves." },
        { icon: I.coin, title: "Higher ROI", desc: "Maximize ROI with better customer engagement and retention." },
      ],
    },
    {
      type: "caseStudies", tag: "CASE STUDIES", title: "Success Stories",
      items: [
        { tag: "Financial Services", title: "Improved Client Retention with Dynamics 365 Sales", stat: "35%", statLabel: "Retention Increase", desc: "Increased client retention by 35%.", color: "#006b60" },
        { tag: "Healthcare", title: "Enhanced Patient Engagement with Customer Service", stat: "40%", statLabel: "Satisfaction Improvement", desc: "Improved patient satisfaction by 40%.", color: "#00b4a0" },
        { tag: "Professional Services", title: "Streamlined Service Delivery", stat: "30%", statLabel: "Efficiency Gain", desc: "Improved service delivery efficiency by 30%.", color: "#004d44" },
      ],
    },
    {
      type: "faq", tag: "GOT QUESTIONS", title: "Frequently Asked Questions",
      items: [
        { q: "What is Microsoft CRM?", a: "Microsoft CRM (Dynamics 365 Sales & Customer Service) helps organizations manage sales, service, and customer relationships." },
        { q: "What are the benefits of Microsoft CRM?", a: "Key benefits include improved sales productivity, better customer satisfaction, data-driven insights, and scalability." },
        { q: "Can Microsoft CRM integrate with other systems?", a: "Yes, it integrates with Microsoft 365, Power Platform, and many third-party systems." },
        { q: "Is Microsoft CRM cloud-based?", a: "Yes, Dynamics 365 is cloud-based with options for on-premises deployment." },
        { q: "How long does a CRM implementation take?", a: "Timelines vary from a few weeks for simple deployments to several months for complex implementations." },
        { q: "Do you provide training and support?", a: "Yes, we provide comprehensive training and ongoing support." },
      ],
    },
    {
      type: "cta", title: "Ready to Transform Your Customer Engagement with Microsoft CRM?",
      description: "Let's build stronger relationships, increase sales, and grow your business together.",
    },
  ],
};

// ============================================================
// 9. AI READINESS & COPILOT ENABLEMENT
// ============================================================
export const aiCopilotData = {
  breadcrumb: ["Home", "Microsoft Services", "AI Readiness & Copilot Consulting"],
  badge: "INNOVATE. AUTOMATE. ACCELERATE.",
  title: <>
    AI Readiness & Copilot  Enablement Services
  </>
  ,
  description: "Prepare your organization for AI and unlock productivity with Microsoft Copilot.",
  subDescription: "We help you assess AI readiness, develop a strategy, and enable your teams with Microsoft Copilot and AI solutions.",
  heroBadges: ["AI Experts", "Proven Methodology", "Ethical & Responsible AI", "Ongoing Support"],
  heroImage: microsoft365Img,
  floatingIcons: [
    { icon: I.bot, position: { top: -10, left: "10%" } },
    { icon: I.data, position: { top: -24, left: "55%" } },
    { icon: I.insight, position: { top: 40, left: "88%" } },
    { icon: I.automate, position: { top: 100, left: "92%" } },
  ],
  theme: {
    accent: "#8B5CF6", accentDark: "#6D28D9", accentLight: "#A78BFA",
    accentSoft: "rgba(139,92,246,0.08)", heroStart: "#1a0b3d", heroEnd: "#6d28d9",
  },
  sections: [
    {
      type: "overview",
      title: "What is AI Readiness & Copilot Enablement?",
      brandLabel: "AI Readiness & Copilot",
      // image: "https:2//images.ctfassets.net/w6r2i5d8j73a/2qo5U8C9nI8mK1zY1HdN6v/f7f0d2b4f1e0f1c8d2b4f1e0f1c8d2b4/microsoft-copilot-ai.png",
      image: banner,
      coreIcon: "🤖",
      orbitIcons: ["🧠", "📊", "💡", "🔮"],
      paragraphs: [
        "AI Readiness and Copilot Enablement helps organizations prepare for AI adoption and leverage Microsoft Copilot to enhance productivity, creativity, and decision-making across the enterprise.",
        "Our experts assess your AI readiness, develop a strategy aligned with your business goals, and enable your teams to harness the power of AI and Copilot.",
      ],
      checklist: ["AI Strategy & Roadmap", "Copilot Deployment & Enablement", "Data & Security Readiness", "Change Management & Training"],
    },
    {
      type: "grid", tag: "CHALLENGES WE SOLVE", title: "AI Challenges We Solve",
      subtitle: "We help organizations overcome common AI adoption challenges.",
      columns: 4,
      items: [
        { icon: I.plane, title: "AI Strategy & Vision Gaps", desc: "Define a clear AI strategy and roadmap aligned with business goals." },
        { icon: I.data, title: "Data Readiness & Quality", desc: "Ensure data quality, governance, and security for AI success." },
        { icon: I.shield, title: "Security & Compliance Risks", desc: "Address security, privacy, and compliance concerns in AI adoption." },
        { icon: I.warn, title: "Change & Adoption Barriers", desc: "Drive AI adoption with change management and training." },
      ],
    },
    {
      type: "grid", tag: "WHAT WE OFFER", title: "Our AI Readiness & Copilot Services",
      subtitle: "End-to-end services to prepare and enable your organization for AI.",
      columns: 4, bg: "white",
      items: [
        { icon: I.plan, title: "AI Readiness Assessment", desc: "Assess your AI readiness, maturity, and opportunities." },
        { icon: I.design, title: "AI Strategy & Roadmap", desc: "Develop a tailored AI strategy and implementation roadmap." },
        { icon: I.bot, title: "Copilot Deployment & Enablement", desc: "Deploy and configure Microsoft Copilot for your organization." },
        { icon: I.data, title: "Data & Security Readiness", desc: "Prepare your data and security for AI and Copilot." },
        { icon: I.users, title: "Change Management & Training", desc: "Drive adoption with change management and comprehensive training." },
        { icon: I.support, title: "Ongoing Support & Optimization", desc: "Monitor, optimize, and support your AI initiatives." },
      ],
    },
    {
      type: "process", tag: "OUR PROCESS", title: "Our AI Enablement Process",
      subtitle: "A proven approach to successful AI adoption.",
      steps: [
        { num: "01", title: "Assess", desc: "Assess AI readiness, data maturity, and business opportunities." },
        { num: "02", title: "Strategize", desc: "Define AI strategy, goals, and roadmap." },
        { num: "03", title: "Prepare", desc: "Prepare data, security, and governance for AI." },
        { num: "04", title: "Deploy", desc: "Deploy Copilot and AI solutions." },
        { num: "05", title: "Enable", desc: "Train and enable teams for AI adoption." },
        { num: "06", title: "Optimize", desc: "Monitor, measure, and optimize for continuous improvement." },
      ],
    },
    {
      type: "iconStrip", tag: "AI USE CASES", title: "AI Use Cases Across Industries",
      subtitle: "AI solutions tailored for your industry.",
      columns: 6,
      items: [
        { icon: I.finserv, label: "Finance", desc: "AI-driven risk analytics and fraud detection." },
        { icon: I.health, label: "Healthcare", desc: "AI-powered diagnostics and patient insights." },
        { icon: I.manufacturing, label: "Manufacturing", desc: "Predictive maintenance and quality control." },
        { icon: I.retail, label: "Retail", desc: "Personalized recommendations and inventory optimization." },
        { icon: I.proserv, label: "Professional Services", desc: "AI-powered research, writing, and insights." },
        { icon: I.education, label: "Education", desc: "AI-powered learning and student support." },
      ],
      footerLink: "View All AI Use Cases",
    },
    {
      type: "benefits", tag: "BENEFITS", title: "Benefits of AI Readiness & Copilot",
      subtitle: "Unlock the power of AI to transform your organization.",
      items: [
        { icon: I.insight, title: "Enhanced Productivity", desc: "Empower teams to work smarter and faster with AI." },
        { icon: I.bot, title: "Innovation", desc: "Accelerate innovation with AI-driven insights and automation." },
        { icon: I.data, title: "Data-driven Decisions", desc: "Make better decisions with AI-powered analytics." },
        { icon: I.scale, title: "Scalability", desc: "Scale AI capabilities as your business grows." },
        { icon: I.coin, title: "Competitive Advantage", desc: "Stay ahead with cutting-edge AI capabilities." },
      ],
    },
    {
      type: "caseStudies", tag: "CASE STUDIES", title: "Success Stories",
      items: [
        { tag: "Professional Services", title: "AI-Powered Research & Knowledge Management", stat: "50%", statLabel: "Time Savings", desc: "Reduced research time by 50% with AI and Copilot.", color: "#3b1078" },
        { tag: "Finance", title: "AI-Driven Risk Analytics", stat: "40%", statLabel: "Risk Detection Improvement", desc: "Improved fraud detection by 40% with AI analytics.", color: "#5b21b6" },
        { tag: "Healthcare", title: "AI-Powered Clinical Decision Support", stat: "30%", statLabel: "Diagnostic Accuracy", desc: "Improved diagnostic accuracy by 30%.", color: "#2c0a5e" },
      ],
    },
    {
      type: "faq", tag: "GOT QUESTIONS", title: "Frequently Asked Questions",
      items: [
        { q: "What is AI readiness?", a: "AI readiness refers to an organization's preparedness to adopt and leverage AI technologies, including data, security, skills, and strategy." },
        { q: "What is Microsoft Copilot?", a: "Microsoft Copilot is an AI-powered assistant that helps users work more productively across Microsoft 365 apps and services." },
        { q: "How can Copilot benefit my organization?", a: "Copilot can enhance productivity, creativity, and decision-making by providing AI-powered assistance in everyday tasks." },
        { q: "Is AI secure for my organization?", a: "Yes, with proper governance, security, and compliance frameworks, AI can be secure and trustworthy." },
        { q: "How long does AI readiness take?", a: "Timelines vary, typically from a few weeks for assessment to several months for full enablement." },
        { q: "Do you provide AI training?", a: "Yes, we provide comprehensive training and change management for AI adoption." },
      ],
    },
    {
      type: "cta", title: "Ready to Prepare Your Organization for AI and Copilot?",
      description: "Let's unlock the power of AI to drive innovation and growth.",
    },
  ],
};

// ============================================================
// 10. MODERN WORKPLACE
// ============================================================
export const modernWorkplaceData = {
  breadcrumb: ["Home", "Microsoft Services", "Modern Workplace Consulting"],
  badge: "EMPOWER. COLLABORATE. TRANSFORM.",
  title: <>Modern Workplace  Consulting Services</>,
  description: "Empower your workforce with a secure, collaborative, and productive modern workplace.",
  subDescription: "We help you build a digital workplace that enhances collaboration, productivity, and employee experience with Microsoft 365.",
  heroBadges: ["Microsoft Certified Experts", "Proven Methodology", "Secure & Compliant", "Ongoing Support"],
  heroImage: microsoft365Img,
  floatingIcons: [
    { icon: I.users, position: { top: -10, left: "10%" } },
    { icon: I.cloud, position: { top: -24, left: "55%" } },
    { icon: I.gear, position: { top: 40, left: "88%" } },
    { icon: I.link, position: { top: 100, left: "92%" } },
  ],
  theme: {
    accent: "#2563EB", accentDark: "#1D4ED8", accentLight: "#4F8CFF",
    accentSoft: "rgba(37,99,235,0.08)", heroStart: "#03153c", heroEnd: "#2563eb",
  },
  sections: [
    {
      type: "overview",
      title: "What is Modern Workplace?",
      brandLabel: "Modern Workplace",
      // image: "https:2//images.ctfassets.net/w6r2i5d8j73a/2qo5U8C9nI8mK1zY1HdN6v/f7f0d2b4f1e0f1c8d2b4f1e0f1c8d2b4/modern-workplace.png",
      image: banner,
      coreIcon: "🏢",
      orbitIcons: ["💻", "📱", "☁️", "🔒"],
      paragraphs: [
        "Modern Workplace is a digital transformation approach that leverages Microsoft 365 and other technologies to create a secure, collaborative, and productive work environment.",
        "Our experts help you design and implement a modern workplace strategy that empowers employees, enhances collaboration, and drives business outcomes.",
      ],
      checklist: ["Empowered & Productive Workforce", "Seamless Collaboration", "Secure & Compliant", "Anywhere, Any Device Access"],
    },
    {
      type: "grid", tag: "CHALLENGES WE SOLVE", title: "Workplace Challenges We Solve",
      subtitle: "We help organizations overcome common workplace challenges.",
      columns: 4,
      items: [
        { icon: I.users, title: "Disconnected Workforce", desc: "Connect employees across locations and departments." },
        { icon: I.warn, title: "Inefficient Collaboration", desc: "Enable seamless collaboration with modern tools." },
        { icon: I.shield, title: "Security & Compliance Risks", desc: "Protect data and ensure compliance in hybrid work." },
        { icon: I.plane, title: "Digital Adoption Gaps", desc: "Drive digital adoption and maximize productivity." },
      ],
    },
    {
      type: "grid", tag: "WHAT WE OFFER", title: "Our Modern Workplace Services",
      subtitle: "Comprehensive services to transform your workplace.",
      columns: 4, bg: "white",
      items: [
        { icon: I.plan, title: "Modern Workplace Strategy", desc: "Develop a workplace transformation strategy." },
        { icon: I.cloud, title: "Microsoft 365 Deployment", desc: "Deploy and configure Microsoft 365 for your organization." },
        { icon: I.users, title: "Employee Experience Design", desc: "Enhance employee experience with modern tools and processes." },
        { icon: I.shield, title: "Security & Compliance", desc: "Implement security and compliance for hybrid work." },
        { icon: I.process, title: "Change Management", desc: "Drive adoption with change management and training." },
        { icon: I.support, title: "Ongoing Support", desc: "Provide ongoing support and optimization." },
      ],
    },
    {
      type: "process", tag: "OUR PROCESS", title: "Our Modern Workplace Implementation Process",
      subtitle: "A proven approach to workplace transformation.",
      steps: [
        { num: "01", title: "Assess", desc: "Assess your current workplace, tools, and processes." },
        { num: "02", title: "Design", desc: "Design a modern workplace strategy and architecture." },
        { num: "03", title: "Deploy", desc: "Deploy Microsoft 365 and modern workplace solutions." },
        { num: "04", title: "Enable", desc: "Enable employees with training and support." },
        { num: "05", title: "Optimize", desc: "Monitor, optimize, and improve over time." },
        { num: "06", title: "Support", desc: "Provide ongoing support and continuous improvement." },
      ],
    },
    {
      type: "iconStrip", tag: "INDUSTRY SOLUTIONS", title: "Industry Solutions",
      subtitle: "Modern workplace solutions tailored for your industry.",
      columns: 6,
      items: [
        { icon: I.finserv, label: "Finance", desc: "Secure collaboration and compliance." },
        { icon: I.health, label: "Healthcare", desc: "Patient engagement and secure communication." },
        { icon: I.manufacturing, label: "Manufacturing", desc: "Shop floor connectivity and collaboration." },
        { icon: I.retail, label: "Retail", desc: "Store operations and workforce enablement." },
        { icon: I.proserv, label: "Professional Services", desc: "Client collaboration and project management." },
        { icon: I.education, label: "Education", desc: "Student engagement and collaboration." },
      ],
      footerLink: "View All Industry Solutions",
    },
    {
      type: "benefits", tag: "BENEFITS", title: "Benefits of Modern Workplace",
      subtitle: "Empower your workforce and drive business success.",
      items: [
        { icon: I.users, title: "Empowered Employees", desc: "Enable employees to work productively from anywhere." },
        { icon: I.link, title: "Seamless Collaboration", desc: "Enhance collaboration across teams and locations." },
        { icon: I.shield, title: "Enhanced Security", desc: "Protect data with enterprise-grade security." },
        { icon: I.scale, title: "Scalability", desc: "Scale workplace solutions as your organization grows." },
        { icon: I.coin, title: "Cost Efficiency", desc: "Reduce costs with optimized workplace solutions." },
      ],
    },
    {
      type: "caseStudies", tag: "CASE STUDIES", title: "Success Stories",
      items: [
        { tag: "Financial Services", title: "Empowered Hybrid Workforce with Modern Workplace", stat: "40%", statLabel: "Productivity Increase", desc: "Increased employee productivity by 40%.", color: "#003d99" },
        { tag: "Healthcare", title: "Secure Collaboration Across Locations", stat: "50%", statLabel: "Communication Improvement", desc: "Improved communication efficiency by 50%.", color: "#2563eb" },
        { tag: "Manufacturing", title: "Digital Transformation for Shop Floor Teams", stat: "35%", statLabel: "Operational Efficiency", desc: "Increased operational efficiency by 35%.", color: "#002366" },
      ],
    },
    {
      type: "faq", tag: "GOT QUESTIONS", title: "Frequently Asked Questions",
      items: [
        { q: "What is Modern Workplace?", a: "Modern Workplace is a digital transformation approach that creates a secure, collaborative, and productive work environment using Microsoft 365 and modern technologies." },
        { q: "What are the benefits of Modern Workplace?", a: "Key benefits include empowered employees, seamless collaboration, enhanced security, and scalability." },
        { q: "How long does a Modern Workplace implementation take?", a: "Timelines vary, typically from a few weeks to several months depending on scope." },
        { q: "What technologies are part of Modern Workplace?", a: "Microsoft 365, Teams, SharePoint, OneDrive, and other collaboration and productivity tools." },
        { q: "Is Modern Workplace secure?", a: "Yes, with proper security and compliance frameworks, modern workplace solutions are secure." },
        { q: "Do you provide training?", a: "Yes, we provide comprehensive training and change management for successful adoption." },
      ],
    },
    {
      type: "cta", title: "Ready to Transform Your Workplace?",
      description: "Let's build a modern, productive, and secure workplace together.",
    },
  ],
};

// ============================================================
// 11. SECURITY, IDENTITY & COMPLIANCE
// ============================================================
export const securityIdentityComplianceData = {
  breadcrumb: ["Home", "Microsoft Services", "Security, Identity & Compliance Consulting"],
  badge: "PROTECT. COMPLY. THRIVE.",
  title: <>Security, Identity &   Compliance Consulting  Services</>,
  description: "Protect your organization, secure identities, and ensure compliance with Microsoft security solutions.",
  subDescription: "We help you build a comprehensive security, identity, and compliance strategy to safeguard your data and meet regulatory requirements.",
  heroBadges: ["Microsoft Certified Experts", "Zero Trust Approach", "Compliance Specialists", "Ongoing Support"],
  heroImage: microsoft365Img,
  floatingIcons: [
    { icon: I.shield, position: { top: -10, left: "10%" } },
    { icon: I.users, position: { top: -24, left: "55%" } },
    { icon: I.governance, position: { top: 40, left: "88%" } },
    { icon: I.warn, position: { top: 100, left: "92%" } },
  ],
  theme: {
    accent: "#DC2626", accentDark: "#B91C1C", accentLight: "#F87171",
    accentSoft: "rgba(220,38,38,0.08)", heroStart: "#2a0a0a", heroEnd: "#b91c1c",
  },
  sections: [
    {
      type: "overview",
      title: "What is Security, Identity & Compliance?",
      brandLabel: "Security, Identity & Compliance",
      // image: "https:2//images.ctfassets.net/w6r2i5d8j73a/2qo5U8C9nI8mK1zY1HdN6v/f7f0d2b4f1e0f1c8d2b4f1e0f1c8d2b4/security-identity-compliance.png",
      image: banner,
      coreIcon: "🛡️",
      orbitIcons: ["🔐", "🆔", "📋", "⚠️"],
      paragraphs: [
        "Security, Identity & Compliance encompasses the strategies, technologies, and practices to protect organizational assets, manage identities, and ensure regulatory compliance.",
        "Our experts help you implement Microsoft security solutions to protect your data, secure identities, and meet compliance requirements with confidence.",
      ],
      checklist: ["Comprehensive Security", "Identity & Access Management", "Compliance & Risk Management", "Zero Trust Architecture"],
    },
    {
      type: "grid", tag: "CHALLENGES WE SOLVE", title: "Security & Compliance Challenges We Solve",
      subtitle: "We help organizations address critical security and compliance challenges.",
      columns: 4,
      items: [
        { icon: I.shield, title: "Cyber Threats & Data Breaches", desc: "Protect against evolving cyber threats and data breaches." },
        { icon: I.users, title: "Identity & Access Vulnerabilities", desc: "Secure identities and manage access effectively." },
        { icon: I.governance, title: "Compliance Complexities", desc: "Navigate complex regulatory requirements with confidence." },
        { icon: I.warn, title: "Security Gaps & Risks", desc: "Identify and address security gaps and risks." },
      ],
    },
    {
      type: "grid", tag: "WHAT WE OFFER", title: "Our Security, Identity & Compliance Services",
      subtitle: "End-to-end services to protect and secure your organization.",
      columns: 4, bg: "white",
      items: [
        { icon: I.plan, title: "Security Strategy & Assessment", desc: "Assess and develop a comprehensive security strategy." },
        { icon: I.shield, title: "Identity & Access Management", desc: "Implement identity and access management solutions." },
        { icon: I.governance, title: "Compliance Management", desc: "Ensure compliance with regulatory requirements." },
        { icon: I.warn, title: "Threat Protection & Response", desc: "Protect against and respond to threats effectively." },
        { icon: I.data, title: "Data Protection & Privacy", desc: "Secure data and ensure privacy across your organization." },
        { icon: I.support, title: "Ongoing Support & Monitoring", desc: "Monitor security and provide ongoing support." },
      ],
    },
    {
      type: "process", tag: "OUR PROCESS", title: "Our Security Implementation Process",
      subtitle: "A proven approach to strengthen your security posture.",
      steps: [
        { num: "01", title: "Assess", desc: "Assess your security posture, risks, and compliance requirements." },
        { num: "02", title: "Design", desc: "Design a comprehensive security and compliance architecture." },
        { num: "03", title: "Implement", desc: "Implement security, identity, and compliance solutions." },
        { num: "04", title: "Monitor", desc: "Monitor security and compliance continuously." },
        { num: "05", title: "Respond", desc: "Respond to threats and incidents effectively." },
        { num: "06", title: "Optimize", desc: "Optimize security posture for continuous improvement." },
      ],
    },
    {
      type: "iconStrip", tag: "COMPLIANCE FRAMEWORKS", title: "Compliance Frameworks",
      subtitle: "We help you meet compliance requirements across frameworks.",
      columns: 6,
      items: [
        { icon: I.governance, label: "GDPR", desc: "Data protection and privacy compliance." },
        { icon: I.governance, label: "HIPAA", desc: "Healthcare data protection compliance." },
        { icon: I.governance, label: "SOC 2", desc: "Service organization controls compliance." },
        { icon: I.governance, label: "ISO 27001", desc: "Information security management compliance." },
        { icon: I.governance, label: "NIST", desc: "Cybersecurity framework compliance." },
        { icon: I.governance, label: "CCPA", desc: "California consumer privacy compliance." },
      ],
      footerLink: "View All Compliance Frameworks",
    },
    {
      type: "benefits", tag: "BENEFITS", title: "Benefits of Security, Identity & Compliance",
      subtitle: "Protect and build trust with robust security and compliance.",
      items: [
        { icon: I.shield, title: "Protection Against Threats", desc: "Defend against cyber threats and data breaches." },
        { icon: I.users, title: "Secure Identity Management", desc: "Secure identities with robust access management." },
        { icon: I.governance, title: "Regulatory Compliance", desc: "Meet compliance requirements with confidence." },
        { icon: I.scale, title: "Scalability", desc: "Scale security as your organization grows." },
        { icon: I.coin, title: "Trust & Reputation", desc: "Build trust with customers and stakeholders." },
      ],
    },
    {
      type: "caseStudies", tag: "CASE STUDIES", title: "Success Stories",
      items: [
        { tag: "Finance", title: "Achieved Zero Trust Security Architecture", stat: "100%", statLabel: "Compliance Achieved", desc: "Achieved full compliance with Zero Trust security framework.", color: "#7a1a1a" },
        { tag: "Healthcare", title: "HIPAA Compliance & Data Protection", stat: "95%", statLabel: "Security Posture Improvement", desc: "Improved security posture by 95% with comprehensive security solutions.", color: "#b91c1c" },
        { tag: "Technology", title: "Identity & Access Management Transformation", stat: "60%", statLabel: "Access Risk Reduction", desc: "Reduced access risk by 60% with identity management.", color: "#4a0f0f" },
      ],
    },
    {
      type: "faq", tag: "GOT QUESTIONS", title: "Frequently Asked Questions",
      items: [
        { q: "What is Zero Trust security?", a: "Zero Trust is a security approach that verifies every request as if it comes from an open network, never trusting implicitly." },
        { q: "What are the key components of identity management?", a: "Key components include authentication, authorization, identity governance, and privileged access management." },
        { q: "How do you ensure compliance?", a: "We assess your compliance requirements, implement controls, and provide ongoing monitoring and reporting." },
        { q: "What Microsoft security solutions do you recommend?", a: "Microsoft Defender, Azure Active Directory, Microsoft Sentinel, and Microsoft Purview for security and compliance." },
        { q: "How long does a security implementation take?", a: "Timelines vary, typically from a few weeks for initial deployment to several months for enterprise-wide implementation." },
        { q: "Do you provide security training?", a: "Yes, we provide security awareness training and ongoing security education." },
      ],
    },
    {
      type: "cta", title: "Ready to Protect and Secure Your Organization?",
      description: "Let's build a comprehensive security, identity, and compliance strategy together.",
    },
  ],
};

// ============================================================
// 12. DATA, BUSINESS INTELLIGENCE & REPORTING
// ============================================================
export const dataBIReportingData = {
  breadcrumb: ["Home", "Microsoft Services", "Data, BI & Reporting Consulting"],
  badge: "UNLOCK. ANALYZE. DECIDE.",
  title: <>Data, Business Intelligence  & Reporting Consulting  Services</>,
  description: "Transform your data into actionable insights and drive data-driven decision-making.",
  subDescription: "We help you build a modern data platform, create powerful dashboards, and deliver insights that drive business growth.",
  heroBadges: ["Microsoft Certified Experts", "Data-Driven Approach", "Enterprise-Grade Solutions", "Ongoing Support"],
  heroImage: microsoft365Img,
  floatingIcons: [
    { icon: I.data, position: { top: -10, left: "10%" } },
    { icon: I.chart, position: { top: -24, left: "55%" } },
    { icon: I.report, position: { top: 40, left: "88%" } },
    { icon: I.insight, position: { top: 100, left: "92%" } },
  ],
  theme: {
    accent: "#059669", accentDark: "#047857", accentLight: "#34D399",
    accentSoft: "rgba(5,150,105,0.08)", heroStart: "#022c22", heroEnd: "#059669",
  },
  sections: [
    {
      type: "overview",
      title: "What is Data, Business Intelligence & Reporting?",
      brandLabel: "Data, BI & Reporting",
      // image: "https:2//images.ctfassets.net/w6r2i5d8j73a/2qo5U8C9nI8mK1zY1HdN6v/f7f0d2b4f1e0f1c8d2b4f1e0f1c8d2b4/data-bi-reporting.png",
      image: banner,
      coreIcon: "📊",
      orbitIcons: ["🗃️", "📈", "📉", "📋"],
      paragraphs: [
        "Data, Business Intelligence (BI), and Reporting services help organizations harness their data to gain insights, make informed decisions, and drive business performance.",
        "Our experts design and implement data solutions, create interactive dashboards, and deliver actionable insights that empower your organization.",
      ],
      checklist: ["Modern Data Platform", "Interactive Dashboards", "Actionable Insights", "Data-Driven Culture"],
    },
    {
      type: "grid", tag: "CHALLENGES WE SOLVE", title: "Data & BI Challenges We Solve",
      subtitle: "We help organizations overcome common data and BI challenges.",
      columns: 4,
      items: [
        { icon: I.data, title: "Data Silos & Fragmentation", desc: "Unify data from across your organization." },
        { icon: I.warn, title: "Slow & Inefficient Reporting", desc: "Speed up reporting with automated BI solutions." },
        { icon: I.insight, title: "Lack of Actionable Insights", desc: "Deliver insights that drive informed decisions." },
        { icon: I.shield, title: "Data Quality & Governance", desc: "Ensure data quality, security, and governance." },
      ],
    },
    {
      type: "grid", tag: "WHAT WE OFFER", title: "Our Data, BI & Reporting Services",
      subtitle: "End-to-end services to unlock the power of your data.",
      columns: 4, bg: "white",
      items: [
        { icon: I.plan, title: "Data Strategy & Architecture", desc: "Design a modern data architecture aligned with your goals." },
        { icon: I.connect, title: "Data Integration & Management", desc: "Integrate, manage, and prepare data for analysis." },
        { icon: I.model, title: "Data Modeling & Warehousing", desc: "Build robust data models and warehouses." },
        { icon: I.report, title: "Dashboard & Report Development", desc: "Create interactive dashboards and compelling reports." },
        { icon: I.insight, title: "Advanced Analytics & Insights", desc: "Unlock deeper insights with advanced analytics." },
        { icon: I.support, title: "Support & Training", desc: "Empower your team with training and ongoing support." },
      ],
    },
    {
      type: "process", tag: "OUR PROCESS", title: "Our Data & BI Implementation Process",
      subtitle: "A proven approach to deliver impactful data solutions.",
      steps: [
        { num: "01", title: "Discover", desc: "Understand your data landscape, goals, and requirements." },
        { num: "02", title: "Design", desc: "Design the data architecture and BI roadmap." },
        { num: "03", title: "Build", desc: "Build data pipelines, models, and dashboards." },
        { num: "04", title: "Validate", desc: "Test, validate, and refine for accuracy." },
        { num: "05", title: "Deploy", desc: "Deploy and enable user adoption." },
        { num: "06", title: "Optimize", desc: "Monitor, optimize, and provide ongoing support." },
      ],
    },
    {
      type: "iconStrip", tag: "USE CASES", title: "Use Cases Across Industries",
      subtitle: "Data and BI solutions tailored for your industry.",
      columns: 6,
      items: [
        { icon: I.finserv, label: "Finance", desc: "Financial reporting and risk analytics." },
        { icon: I.health, label: "Healthcare", desc: "Patient analytics and operational insights." },
        { icon: I.manufacturing, label: "Manufacturing", desc: "Production monitoring and quality analytics." },
        { icon: I.retail, label: "Retail", desc: "Sales performance and customer insights." },
        { icon: I.supply, label: "Supply Chain", desc: "Supply chain visibility and optimization." },
        { icon: I.education, label: "Education", desc: "Student performance and institutional insights." },
      ],
      footerLink: "View All Use Cases",
    },
    {
      type: "benefits", tag: "BENEFITS", title: "Benefits of Data, BI & Reporting",
      subtitle: "Unlock insights and drive better decisions with data.",
      items: [
        { icon: I.insight, title: "Actionable Insights", desc: "Gain insights that drive informed decisions." },
        { icon: I.chart, title: "Real-time Visibility", desc: "Get real-time visibility into business performance." },
        { icon: I.data, title: "Data-Driven Culture", desc: "Build a data-driven culture across your organization." },
        { icon: I.scale, title: "Scalability", desc: "Scale data solutions as your business grows." },
        { icon: I.coin, title: "Competitive Advantage", desc: "Gain a competitive edge with better insights." },
      ],
    },
    {
      type: "caseStudies", tag: "CASE STUDIES", title: "Success Stories",
      items: [
        { tag: "Retail", title: "Real-time Sales Analytics with Power BI", stat: "25%", statLabel: "Sales Growth", desc: "Drove 25% sales growth with real-time analytics.", color: "#047857" },
        { tag: "Healthcare", title: "Patient Outcomes Dashboard", stat: "30%", statLabel: "Outcome Improvement", desc: "Improved patient outcomes by 30% with data insights.", color: "#059669" },
        { tag: "Manufacturing", title: "Production Monitoring & Quality Analytics", stat: "20%", statLabel: "Quality Improvement", desc: "Improved product quality by 20% with analytics.", color: "#022c22" },
      ],
    },
    {
      type: "faq", tag: "GOT QUESTIONS", title: "Frequently Asked Questions",
      items: [
        { q: "What is Business Intelligence (BI)?", a: "BI is the process of analyzing data to gain insights that inform business decisions and drive performance." },
        { q: "What tools do you use for BI?", a: "We use Microsoft Power BI, Azure Data Services, and other modern BI tools." },
        { q: "How do you ensure data quality?", a: "We implement data governance, validation, and quality frameworks to ensure accurate and reliable data." },
        { q: "What is data warehousing?", a: "Data warehousing is a centralized repository for storing and managing data for analysis and reporting." },
        { q: "How long does a BI implementation take?", a: "Timelines vary, typically from a few weeks for simple dashboards to several months for enterprise BI platforms." },
        { q: "Do you provide BI training?", a: "Yes, we provide comprehensive training to empower your team with BI tools and insights." },
      ],
    },
    {
      type: "cta", title: "Ready to Unlock the Power of Your Data with BI & Reporting?",
      description: "Let's build a data-driven future for your organization.",
    },
  ],
};

// ============================================================
// 13. ENDPOINT & DEVICE MANAGEMENT
// ============================================================
export const endpointDeviceManagementData = {
  breadcrumb: ["Home", "Microsoft Services", "Endpoint & Device Management Consulting"],
  badge: "MANAGE. SECURE. EMPOWER.",
  title: <>Endpoint & Device  Management Consulting  Services</>,
  description: "Manage, secure, and empower your endpoints with modern device management solutions.",
  subDescription: "We help you implement and optimize Microsoft Endpoint Manager to protect, manage, and secure your devices and applications.",
  heroBadges: ["Microsoft Certified Experts", "Modern Device Management", "Zero Trust Security", "Ongoing Support"],
  heroImage: microsoft365Img,
  floatingIcons: [
    { icon: I.devices, position: { top: -10, left: "10%" } },
    { icon: I.shield, position: { top: -24, left: "55%" } },
    { icon: I.cloud, position: { top: 40, left: "88%" } },
    { icon: I.gear, position: { top: 100, left: "92%" } },
  ],
  theme: {
    accent: "#7C3AED", accentDark: "#6025C9", accentLight: "#A78BFA",
    accentSoft: "rgba(124,58,237,0.08)", heroStart: "#1a0b3d", heroEnd: "#5b21b6",
  },
  sections: [
    {
      type: "overview",
      title: "What is Endpoint & Device Management?",
      brandLabel: "Endpoint & Device Management",
      // image: "https:2//images.ctfassets.net/w6r2i5d8j73a/2qo5U8C9nI8mK1zY1HdN6v/f7f0d2b4f1e0f1c8d2b4f1e0f1c8d2b4/endpoint-device-management.png",
      image: banner,
      coreIcon: "💻",
      orbitIcons: ["📱", "🖥️", "🔒", "☁️"],
      paragraphs: [
        "Endpoint & Device Management involves managing, securing, and maintaining devices, applications, and data across an organization, including desktops, laptops, mobile devices, and IoT devices.",
        "Our experts help you implement Microsoft Endpoint Manager to protect, manage, and secure your devices and applications, enabling a productive and secure workforce.",
      ],
      checklist: ["Unified Device Management", "Zero Trust Security", "App & Data Protection", "Anywhere, Any Device Access"],
    },
    {
      type: "grid", tag: "CHALLENGES WE SOLVE", title: "Endpoint Management Challenges We Solve",
      subtitle: "We help organizations overcome common device management challenges.",
      columns: 4,
      items: [
        { icon: I.devices, title: "Device Sprawl & Complexity", desc: "Manage diverse devices across platforms and locations." },
        { icon: I.shield, title: "Security & Compliance Risks", desc: "Protect devices, applications, and data from threats." },
        { icon: I.warn, title: "Application & Patch Management", desc: "Manage applications and patches effectively." },
        { icon: I.plane, title: "User Experience & Productivity", desc: "Deliver seamless user experiences while maintaining security." },
      ],
    },
    {
      type: "grid", tag: "WHAT WE OFFER", title: "Our Endpoint & Device Management Services",
      subtitle: "Comprehensive services to manage and secure your endpoints.",
      columns: 4, bg: "white",
      items: [
        { icon: I.plan, title: "Endpoint Management Strategy", desc: "Develop a comprehensive endpoint management strategy." },
        { icon: I.cloud, title: "Microsoft Endpoint Manager Implementation", desc: "Implement Intune and Configuration Manager." },
        { icon: I.devices, title: "Device Enrollment & Provisioning", desc: "Streamline device enrollment and provisioning." },
        { icon: I.shield, title: "Security & Compliance Management", desc: "Secure devices and ensure compliance." },
        { icon: I.gear, title: "Application & Update Management", desc: "Manage applications and updates effectively." },
        { icon: I.support, title: "Ongoing Support & Optimization", desc: "Monitor, optimize, and support endpoints." },
      ],
    },
    {
      type: "process", tag: "OUR PROCESS", title: "Our Endpoint Management Implementation Process",
      subtitle: "A proven approach to manage and secure your endpoints.",
      steps: [
        { num: "01", title: "Assess", desc: "Assess your endpoint environment, devices, and requirements." },
        { num: "02", title: "Design", desc: "Design an endpoint management architecture and roadmap." },
        { num: "03", title: "Implement", desc: "Implement Microsoft Endpoint Manager and policies." },
        { num: "04", title: "Enroll", desc: "Enroll devices and configure management policies." },
        { num: "05", title: "Secure", desc: "Implement security and compliance configurations." },
        { num: "06", title: "Support", desc: "Provide ongoing support and continuous improvement." },
      ],
    },
    {
      type: "iconStrip", tag: "PLATFORMS SUPPORTED", title: "Platforms Supported",
      subtitle: "Manage all your endpoints from a single platform.",
      columns: 6,
      items: [
        { icon: I.devices, label: "Windows", desc: "Manage Windows desktops and laptops." },
        { icon: I.devices, label: "iOS", desc: "Manage iPhones and iPads." },
        { icon: I.devices, label: "Android", desc: "Manage Android devices." },
        { icon: I.devices, label: "macOS", desc: "Manage Mac devices." },
        { icon: I.devices, label: "Linux", desc: "Manage Linux devices." },
        { icon: I.devices, label: "IoT", desc: "Manage IoT devices." },
      ],
      footerLink: "View All Platforms",
    },
    {
      type: "benefits", tag: "BENEFITS", title: "Benefits of Endpoint & Device Management",
      subtitle: "Manage, secure, and empower your endpoints with confidence.",
      items: [
        { icon: I.cloud, title: "Unified Management", desc: "Manage all endpoints from a single platform." },
        { icon: I.shield, title: "Enhanced Security", desc: "Protect devices, applications, and data." },
        { icon: I.users, title: "Productive Workforce", desc: "Enable productive work from any device." },
        { icon: I.scale, title: "Scalability", desc: "Scale device management as your organization grows." },
        { icon: I.coin, title: "Cost Efficiency", desc: "Reduce management costs with modern solutions." },
      ],
    },
    {
      type: "caseStudies", tag: "CASE STUDIES", title: "Success Stories",
      items: [
        { tag: "Financial Services", title: "Unified Endpoint Management with Intune", stat: "70%", statLabel: "Management Efficiency", desc: "Improved endpoint management efficiency by 70%.", color: "#3b1078" },
        { tag: "Healthcare", title: "Secure Mobile Device Management", stat: "50%", statLabel: "Security Improvement", desc: "Improved mobile device security by 50%.", color: "#5b21b6" },
        { tag: "Education", title: "Device Management for Remote Learning", stat: "60%", statLabel: "Productivity Increase", desc: "Increased remote learning productivity by 60%.", color: "#2c0a5e" },
      ],
    },
    {
      type: "faq", tag: "GOT QUESTIONS", title: "Frequently Asked Questions",
      items: [
        { q: "What is Microsoft Endpoint Manager?", a: "Microsoft Endpoint Manager is a unified platform for managing and securing devices, applications, and data." },
        { q: "What is Intune?", a: "Intune is a cloud-based service for mobile device management and mobile application management." },
        { q: "How does Endpoint Manager help with security?", a: "It provides unified management, security policies, and compliance enforcement for endpoints." },
        { q: "Can Endpoint Manager manage all device types?", a: "Yes, it supports Windows, iOS, Android, macOS, Linux, and IoT devices." },
        { q: "How long does an Endpoint Manager implementation take?", a: "Timelines vary, typically from a few weeks to several months." },
        { q: "Do you provide ongoing support?", a: "Yes, we provide ongoing support, monitoring, and optimization." },
      ],
    },
    {
      type: "cta", title: "Ready to Manage and Secure Your Endpoints with Confidence?",
      description: "Let's build a modern endpoint management strategy for your organization.",
    },
  ],
};

// ============================================================
// 14. BUSINESS PROCESS AUTOMATION
// ============================================================
export const businessProcessAutomationData = {
  breadcrumb: ["Home", "Microsoft Services", "Business Process Automation Consulting"],
  badge: "AUTOMATE. OPTIMIZE. TRANSFORM.",
  title: <>Business Process   Automation Consulting    Services</>,
  description: "Automate business processes, improve efficiency, and drive digital transformation.",
  subDescription: "We help you identify, design, and implement automated workflows that reduce costs, improve accuracy, and accelerate business outcomes.",
  heroBadges: ["Microsoft Certified Experts", "Proven Automation Methodology", "Secure & Scalable", "Ongoing Support"],
  heroImage: microsoft365Img,
  floatingIcons: [
    { icon: I.automate, position: { top: -10, left: "10%" } },
    { icon: I.process, position: { top: -24, left: "55%" } },
    { icon: I.gear, position: { top: 40, left: "88%" } },
    { icon: I.bot, position: { top: 100, left: "92%" } },
  ],
  theme: {
    accent: "#F59E0B", accentDark: "#D97706", accentLight: "#FBBF24",
    accentSoft: "rgba(245,158,11,0.08)", heroStart: "#1a1006", heroEnd: "#92400e",
  },
  sections: [
    {
      type: "overview",
      title: "What is Business Process Automation?",
      brandLabel: "Business Process Automation",
      image: banner,
      coreIcon: "🔄",
      orbitIcons: ["⚙️", "📋", "🤖", "📊"],
      paragraphs: [
        "Business Process Automation (BPA) is the use of technology to automate repetitive, manual processes, improving efficiency, accuracy, and consistency.",
        "Our experts help you identify automation opportunities, design workflows, and implement solutions using Microsoft Power Automate and other automation tools.",
      ],
      checklist: ["Eliminate Manual Work", "Increase Efficiency", "Improve Accuracy", "Accelerate Business Outcomes"],
    },
    {
      type: "grid", tag: "CHALLENGES WE SOLVE", title: "Process Automation Challenges We Solve",
      subtitle: "We help organizations overcome common process automation challenges.",
      columns: 4,
      items: [
        { icon: I.process, title: "Manual & Repetitive Tasks", desc: "Automate manual processes and reduce human effort." },
        { icon: I.warn, title: "Process Inefficiencies", desc: "Identify and eliminate process inefficiencies." },
        { icon: I.plane, title: "Error-Prone Manual Work", desc: "Reduce errors and improve accuracy with automation." },
        { icon: I.coin, title: "High Operational Costs", desc: "Reduce operational costs with automated processes." },
      ],
    },
    {
      type: "grid", tag: "WHAT WE OFFER", title: "Our Business Process Automation Services",
      subtitle: "End-to-end services to automate and optimize your business processes.",
      columns: 4, bg: "white",
      items: [
        { icon: I.plan, title: "Process Discovery & Assessment", desc: "Identify and assess automation opportunities." },
        { icon: I.design, title: "Workflow Design & Modeling", desc: "Design efficient automated workflows." },
        { icon: I.automate, title: "Automation Implementation", desc: "Implement with Power Automate and other tools." },
        { icon: I.process, title: "Integration & Orchestration", desc: "Integrate automation with existing systems." },
        { icon: I.test, title: "Testing & Validation", desc: "Test and validate automated processes." },
        { icon: I.support, title: "Ongoing Support & Optimization", desc: "Monitor, optimize, and support automations." },
      ],
    },
    {
      type: "process", tag: "OUR PROCESS", title: "Our Automation Implementation Process",
      subtitle: "A proven approach to successful business process automation.",
      steps: [
        { num: "01", title: "Discover", desc: "Discover and analyze processes for automation." },
        { num: "02", title: "Design", desc: "Design automated workflows and processes." },
        { num: "03", title: "Build", desc: "Build and configure automation solutions." },
        { num: "04", title: "Test", desc: "Test and validate for accuracy and performance." },
        { num: "05", title: "Deploy", desc: "Deploy and enable user adoption." },
        { num: "06", title: "Optimize", desc: "Monitor, optimize, and support ongoing automation." },
      ],
    },
    {
      type: "iconStrip", tag: "AUTOMATION USE CASES", title: "Use Cases Across Industries",
      subtitle: "Automation solutions tailored for every industry.",
      columns: 6,
      items: [
        { icon: I.finserv, label: "Finance", desc: "Invoice processing, approvals, and reporting." },
        { icon: I.health, label: "Healthcare", desc: "Patient intake, scheduling, and case management." },
        { icon: I.manufacturing, label: "Manufacturing", desc: "Quality control, inventory, and procurement." },
        { icon: I.retail, label: "Retail", desc: "Order processing, inventory, and customer service." },
        { icon: I.proserv, label: "HR & Operations", desc: "Onboarding, approvals, and employee services." },
        { icon: I.customer, label: "Customer Service", desc: "Case management, escalation, and support." },
      ],
      footerLink: "View All Use Cases",
    },
    {
      type: "benefits", tag: "BENEFITS", title: "Benefits of Business Process Automation",
      subtitle: "Transform your business with process automation.",
      items: [
        { icon: I.automate, title: "Increased Efficiency", desc: "Automate tasks and streamline processes." },
        { icon: I.coin, title: "Cost Reduction", desc: "Reduce operational costs and improve profitability." },
        { icon: I.insight, title: "Improved Accuracy", desc: "Reduce errors and ensure consistency." },
        { icon: I.scale, title: "Scalability", desc: "Scale automation as your business grows." },
        { icon: I.users, title: "Empowered Employees", desc: "Free employees from manual work to focus on high-value tasks." },
      ],
    },
    {
      type: "caseStudies", tag: "CASE STUDIES", title: "Success Stories",
      items: [
        { tag: "Finance", title: "Invoice Processing Automation with Power Automate", stat: "80%", statLabel: "Time Saved", desc: "Reduced invoice processing time by 80%.", color: "#78350f" },
        { tag: "Healthcare", title: "Patient Intake Automation", stat: "60%", statLabel: "Processing Time Reduction", desc: "Reduced patient intake time by 60%.", color: "#92400e" },
        { tag: "Manufacturing", title: "Quality Control & Compliance Automation", stat: "50%", statLabel: "Efficiency Gain", desc: "Improved quality control efficiency by 50%.", color: "#5c2a07" },
      ],
    },
    {
      type: "faq", tag: "GOT QUESTIONS", title: "Frequently Asked Questions",
      items: [
        { q: "What is Business Process Automation?", a: "BPA is the use of technology to automate repetitive, manual processes to improve efficiency and accuracy." },
        { q: "What tools do you use for automation?", a: "We use Microsoft Power Automate, Azure Logic Apps, and other automation tools." },
        { q: "How do you identify automation opportunities?", a: "We assess your processes, identify bottlenecks, and prioritize automation opportunities." },
        { q: "How long does automation implementation take?", a: "Timelines vary, typically from a few weeks for simple workflows to several months for complex automations." },
        { q: "Can automation integrate with existing systems?", a: "Yes, we integrate automation with existing systems and applications." },
        { q: "Do you provide training and support?", a: "Yes, we provide comprehensive training and ongoing support." },
      ],
    },
    {
      type: "cta", title: "Ready to Automate and Transform Your Business Processes?",
      description: "Let's build a more efficient, accurate, and scalable organization together.",
    },
  ],
};

// ============================================================
// 15. TEAMS CALLING & BUSINESS VOICE
// ============================================================
export const teamsCallingBusinessVoiceData = {
  breadcrumb: ["Home", "Microsoft Services", "Teams Calling & Business Voice Consulting"],
  badge: "COMMUNICATE. COLLABORATE. CONNECT.",
  title: <>Teams Calling &  Business Voice  Consulting  Services</>,
  description: "Transform your communication with Microsoft Teams Calling and Business Voice solutions.",
  subDescription: "We help you implement and optimize Teams Phone, Business Voice, and unified communications for seamless collaboration.",
  heroBadges: ["Microsoft Certified Experts", "Unified Communications Specialists", "Secure & Reliable", "Ongoing Support"],
  heroImage: microsoft365Img,
  floatingIcons: [
    { icon: I.telephone, position: { top: -10, left: "10%" } },
    { icon: I.users, position: { top: -24, left: "55%" } },
    { icon: I.cloud, position: { top: 40, left: "88%" } },
    { icon: I.link, position: { top: 100, left: "92%" } },
  ],
  theme: {
    accent: "#0EA5E9", accentDark: "#0284C7", accentLight: "#38BDF8",
    accentSoft: "rgba(14,165,233,0.08)", heroStart: "#082f49", heroEnd: "#0284c7",
  },
  sections: [
    {
      type: "overview",
      title: "What is Teams Calling & Business Voice?",
      brandLabel: "Teams Calling & Business Voice",
      // image: "https:2//images.ctfassets.net/w6r2i5d8j73a/2qo5U8C9nI8mK1zY1HdN6v/f7f0d2b4f1e0f1c8d2b4f1e0f1c8d2b4/teams-calling-business-voice.png",
      image: banner,
      coreIcon: "📞",
      orbitIcons: ["☎️", "💬", "📹", "🔊"],
      paragraphs: [
        "Teams Calling and Business Voice are Microsoft's unified communications solutions that integrate calling, conferencing, and collaboration in Microsoft Teams.",
        "Our experts help you implement and optimize Teams Phone, call routing, voice, and compliance solutions for a seamless communication experience.",
      ],
      checklist: ["Unified Communications", "Seamless Collaboration", "Secure & Reliable Calling", "Future-Ready Voice Solutions"],
    },
    {
      type: "grid", tag: "CHALLENGES WE SOLVE", title: "Communication Challenges We Solve",
      subtitle: "We help organizations overcome common communication challenges.",
      columns: 4,
      items: [
        { icon: I.telephone, title: "Disconnected Communication Systems", desc: "Unify communication across channels and devices." },
        { icon: I.warn, title: "Inefficient Collaboration", desc: "Enable seamless collaboration with calling and conferencing." },
        { icon: I.shield, title: "Security & Compliance Risks", desc: "Secure communication and ensure compliance." },
        { icon: I.plane, title: "Complex Call Management", desc: "Simplify call management and routing." },
      ],
    },
    {
      type: "grid", tag: "WHAT WE OFFER", title: "Our Teams Calling & Business Voice Services",
      subtitle: "Comprehensive services to transform your communication.",
      columns: 4, bg: "white",
      items: [
        { icon: I.plan, title: "Communication Strategy", desc: "Develop a unified communications strategy." },
        { icon: I.cloud, title: "Teams Phone Implementation", desc: "Implement and configure Teams Phone." },
        { icon: I.telephone, title: "Call Routing & Management", desc: "Configure call routing, auto attendants, and more." },
        { icon: I.shield, title: "Security & Compliance", desc: "Secure communication and ensure compliance." },
        { icon: I.process, title: "Migration & Integration", desc: "Migrate from legacy phone systems and integrate." },
        { icon: I.support, title: "Ongoing Support & Optimization", desc: "Monitor, optimize, and support communication." },
      ],
    },
    {
      type: "process", tag: "OUR PROCESS", title: "Our Implementation Process",
      subtitle: "A proven approach to unified communications deployment.",
      steps: [
        { num: "01", title: "Assess", desc: "Assess your communication needs and current systems." },
        { num: "02", title: "Design", desc: "Design a unified communications architecture." },
        { num: "03", title: "Implement", desc: "Implement Teams Phone and business voice solutions." },
        { num: "04", title: "Configure", desc: "Configure call routing, attendants, and voice policies." },
        { num: "05", title: "Test", desc: "Test and validate for quality and performance." },
        { num: "06", title: "Support", desc: "Provide ongoing support and optimization." },
      ],
    },
    {
      type: "iconStrip", tag: "FEATURES & CAPABILITIES", title: "Features & Capabilities",
      subtitle: "Enhance communication with rich features.",
      columns: 6,
      items: [
        { icon: I.telephone, label: "Teams Phone", desc: "Cloud-based phone system." },
        { icon: I.users, label: "Auto Attendant", desc: "Automated call routing." },
        { icon: I.telephone, label: "Call Queues", desc: "Manage call traffic efficiently." },
        { icon: I.cloud, label: "Audio Conferencing", desc: "Secure conference calling." },
        { icon: I.shield, label: "Voice Encryption", desc: "Secure voice communications." },
        { icon: I.link, label: "Integration", desc: "Integrate with CRM and apps." },
      ],
      footerLink: "Explore All Features",
    },
    {
      type: "benefits", tag: "BENEFITS", title: "Benefits of Teams Calling & Business Voice",
      subtitle: "Transform your organization's communication.",
      items: [
        { icon: I.cloud, title: "Unified Communications", desc: "Unify calling, conferencing, and collaboration." },
        { icon: I.users, title: "Seamless Collaboration", desc: "Collaborate seamlessly across channels." },
        { icon: I.shield, title: "Secure & Reliable", desc: "Secure, reliable voice and communication." },
        { icon: I.scale, title: "Scalability", desc: "Scale communication as your organization grows." },
        { icon: I.coin, title: "Cost Savings", desc: "Reduce costs with unified communications." },
      ],
    },
    {
      type: "caseStudies", tag: "CASE STUDIES", title: "Success Stories",
      items: [
        { tag: "Professional Services", title: "Unified Communications with Teams Calling", stat: "40%", statLabel: "Cost Savings", desc: "Reduced communication costs by 40%.", color: "#0284c7" },
        { tag: "Healthcare", title: "Secure Communication & Collaboration", stat: "60%", statLabel: "Communication Efficiency", desc: "Improved communication efficiency by 60%.", color: "#0ea5e9" },
        { tag: "Education", title: "Modern Communication for Remote Learning", stat: "50%", statLabel: "Engagement Increase", desc: "Increased student engagement by 50%.", color: "#0369a1" },
      ],
    },
    {
      type: "faq", tag: "GOT QUESTIONS", title: "Frequently Asked Questions",
      items: [
        { q: "What is Teams Calling?", a: "Teams Calling is Microsoft's cloud-based phone system integrated with Microsoft Teams." },
        { q: "What is Business Voice?", a: "Business Voice is a Microsoft solution that combines Teams Phone, conferencing, and calling plans." },
        { q: "Can I keep my existing phone numbers?", a: "Yes, you can port existing phone numbers to Teams Phone." },
        { q: "Is Teams Calling secure?", a: "Yes, Teams Calling provides enterprise-grade security and encryption." },
        { q: "How long does deployment take?", a: "Timelines vary, typically from a few weeks for initial deployment." },
        { q: "Do you provide training and support?", a: "Yes, we provide comprehensive training and ongoing support." },
      ],
    },
    {
      type: "cta", title: "Ready to Transform Your Communication with Teams Calling & Business Voice?",
      description: "Let's build a unified, secure, and efficient communication solution for your organization.",
    },
  ],
};

// ============================================================
// 16. CLOUD, VIRTUAL DESKTOP & INFRASTRUCTURE
// ============================================================
export const cloudVirtualDesktopInfrastructureData = {
  breadcrumb: ["Home", "Microsoft Services", "Cloud, Virtual Desktop & Infrastructure Consulting"],
  badge: "MODERNIZE. SECURE. SCALE.",
  title: <>Cloud, Virtual Desktop  & Infrastructure Consulting  Services</>,
  description: "Modernize your IT infrastructure with cloud, virtual desktop, and enterprise solutions.",
  subDescription: "We help you design, migrate, and manage secure, scalable cloud infrastructure with Azure and Windows Virtual Desktop.",
  heroBadges: ["Microsoft Certified Experts", "Azure Specialists", "Enterprise-Grade Solutions", "Ongoing Support"],
  heroImage: microsoft365Img,
  floatingIcons: [
    { icon: I.cloud, position: { top: -10, left: "10%" } },
    { icon: I.devices, position: { top: -24, left: "55%" } },
    { icon: I.shield, position: { top: 40, left: "88%" } },
    { icon: I.scale, position: { top: 100, left: "92%" } },
  ],
  theme: {
    accent: "#0078D4", accentDark: "#005A9E", accentLight: "#4CB4FF",
    accentSoft: "rgba(0,120,212,0.08)", heroStart: "#00264d", heroEnd: "#0078d4",
  },
  sections: [
    {
      type: "overview",
      title: "What is Cloud, Virtual Desktop & Infrastructure?",
      brandLabel: "Cloud, Virtual Desktop & Infrastructure",
      // image: "https:2//images.ctfassets.net/w6r2i5d8j73a/2qo5U8C9nI8mK1zY1HdN6v/f7f0d2b4f1e0f1c8d2b4f1e0f1c8d2b4/cloud-virtual-desktop-infrastructure.png",
      image: banner,
      coreIcon: "☁️",
      orbitIcons: ["💻", "🔒", "📊", "⚙️"],
      paragraphs: [
        "Cloud, Virtual Desktop, and Infrastructure services help organizations modernize IT, enhance security, and enable flexible work with Azure and Windows Virtual Desktop.",
        "Our experts help you design, migrate, and manage secure, scalable cloud infrastructure and virtual desktop solutions.",
      ],
      checklist: ["Modernized IT Infrastructure", "Secure & Scalable", "Virtual Desktop Solutions", "Cost-Effective Operations"],
    },
    {
      type: "grid", tag: "CHALLENGES WE SOLVE", title: "Infrastructure Challenges We Solve",
      subtitle: "We help organizations overcome common infrastructure challenges.",
      columns: 4,
      items: [
        { icon: I.cloud, title: "Legacy IT Infrastructure", desc: "Modernize legacy infrastructure with cloud solutions." },
        { icon: I.warn, title: "Security & Compliance Risks", desc: "Secure infrastructure and ensure compliance." },
        { icon: I.plane, title: "Complex Migrations", desc: "Plan and execute seamless cloud migrations." },
        { icon: I.coin, title: "High Operational Costs", desc: "Optimize infrastructure costs with cloud solutions." },
      ],
    },
    {
      type: "grid", tag: "WHAT WE OFFER", title: "Our Cloud & Infrastructure Services",
      subtitle: "End-to-end services to modernize your infrastructure.",
      columns: 4, bg: "white",
      items: [
        { icon: I.plan, title: "Cloud Strategy & Architecture", desc: "Design a cloud strategy and architecture." },
        { icon: I.cloud, title: "Azure Migration & Modernization", desc: "Migrate to Azure and modernize infrastructure." },
        { icon: I.devices, title: "Virtual Desktop Implementation", desc: "Implement Windows Virtual Desktop." },
        { icon: I.shield, title: "Security & Compliance", desc: "Secure infrastructure and ensure compliance." },
        { icon: I.scale, title: "Infrastructure Optimization", desc: "Optimize and manage infrastructure." },
        { icon: I.support, title: "Ongoing Support & Monitoring", desc: "Provide ongoing support and monitoring." },
      ],
    },
    {
      type: "process", tag: "OUR PROCESS", title: "Our Infrastructure Implementation Process",
      subtitle: "A proven approach to successful cloud and infrastructure modernization.",
      steps: [
        { num: "01", title: "Assess", desc: "Assess your infrastructure and requirements." },
        { num: "02", title: "Design", desc: "Design a cloud and infrastructure architecture." },
        { num: "03", title: "Migrate", desc: "Plan and execute migration to the cloud." },
        { num: "04", title: "Modernize", desc: "Modernize infrastructure with cloud technologies." },
        { num: "05", title: "Secure", desc: "Implement security and compliance." },
        { num: "06", title: "Support", desc: "Provide ongoing support and optimization." },
      ],
    },
    {
      type: "iconStrip", tag: "CLOUD SERVICES", title: "Cloud Services",
      subtitle: "Leverage Azure for scalable, secure infrastructure.",
      columns: 6,
      items: [
        { icon: I.cloud, label: "Azure Virtual Machines", desc: "Scalable compute resources." },
        { icon: I.cloud, label: "Azure Virtual Desktop", desc: "Virtual desktops and apps." },
        { icon: I.data, label: "Azure Storage", desc: "Scalable cloud storage." },
        { icon: I.shield, label: "Azure Security", desc: "Enterprise-grade security." },
        { icon: I.link, label: "Azure Networking", desc: "Secure connectivity." },
        { icon: I.scale, label: "Azure Management", desc: "Unified management." },
      ],
      footerLink: "Explore Azure Services",
    },
    {
      type: "benefits", tag: "BENEFITS", title: "Benefits of Cloud, Virtual Desktop & Infrastructure",
      subtitle: "Modernize and transform your IT infrastructure.",
      items: [
        { icon: I.cloud, title: "Modernized Infrastructure", desc: "Modernize with scalable cloud solutions." },
        { icon: I.shield, title: "Enhanced Security", desc: "Secure infrastructure and data." },
        { icon: I.users, title: "Flexible Work", desc: "Enable flexible work with virtual desktops." },
        { icon: I.scale, title: "Scalability", desc: "Scale infrastructure as you grow." },
        { icon: I.coin, title: "Cost Efficiency", desc: "Optimize costs with cloud solutions." },
      ],
    },
    {
      type: "caseStudies", tag: "CASE STUDIES", title: "Success Stories",
      items: [
        { tag: "Financial Services", title: "Azure Infrastructure Modernization", stat: "50%", statLabel: "Cost Reduction", desc: "Reduced infrastructure costs by 50%.", color: "#005a9e" },
        { tag: "Healthcare", title: "Virtual Desktop for Remote Workforce", stat: "70%", statLabel: "Productivity Increase", desc: "Increased workforce productivity by 70%.", color: "#0078d4" },
        { tag: "Education", title: "Secure Cloud Infrastructure", stat: "60%", statLabel: "Security Improvement", desc: "Improved security posture by 60%.", color: "#00264d" },
      ],
    },
    {
      type: "faq", tag: "GOT QUESTIONS", title: "Frequently Asked Questions",
      items: [
        { q: "What is Azure?", a: "Azure is Microsoft's cloud computing platform for building, deploying, and managing applications and services." },
        { q: "What is Windows Virtual Desktop?", a: "Windows Virtual Desktop is a comprehensive desktop and app virtualization service running on Azure." },
        { q: "How does cloud migration work?", a: "We assess, plan, and execute migration of workloads to the cloud with minimal disruption." },
        { q: "Is Azure secure?", a: "Yes, Azure provides enterprise-grade security, compliance, and privacy protections." },
        { q: "How long does cloud migration take?", a: "Timelines vary, typically from a few weeks to several months." },
        { q: "Do you provide ongoing support?", a: "Yes, we provide ongoing support, monitoring, and optimization." },
      ],
    },
    {
      type: "cta", title: "Ready to Modernize Your Infrastructure with Cloud and Virtual Desktop?",
      description: "Let's build a secure, scalable, and modern IT infrastructure together.",
    },
  ],
};

// ============================================================
// 17. ENTERPRISE SYSTEM INTEGRATION
// ============================================================
export const enterpriseSystemIntegrationData = {
  breadcrumb: ["Home", "Microsoft Services", "Enterprise System Integration Consulting"],
  badge: "CONNECT. UNIFY. TRANSFORM.",
  title: <>Enterprise System  Integration Consulting  Services</>,
  description: "Connect your systems, unify data, and drive digital transformation with enterprise integration solutions.",
  subDescription: "We help you integrate applications, systems, and data to enable seamless business processes and data flow across your organization.",
  heroBadges: ["Integration Experts", "Microsoft Certified", "Scalable Solutions", "Ongoing Support"],
  heroImage: microsoft365Img,
  floatingIcons: [
    { icon: I.link, position: { top: -10, left: "10%" } },
    { icon: I.connect, position: { top: -24, left: "55%" } },
    { icon: I.data, position: { top: 40, left: "88%" } },
    { icon: I.process, position: { top: 100, left: "92%" } },
  ],
  theme: {
    accent: "#8B5CF6", accentDark: "#6D28D9", accentLight: "#A78BFA",
    accentSoft: "rgba(139,92,246,0.08)", heroStart: "#1a0b3d", heroEnd: "#6d28d9",
  },
  sections: [
    {
      type: "overview",
      title: "What is Enterprise System Integration?",
      brandLabel: "Enterprise System Integration",
      // image: "https:2//images.ctfassets.net/w6r2i5d8j73a/2qo5U8C9nI8mK1zY1HdN6v/f7f0d2b4f1e0f1c8d2b4f1e0f1c8d2b4/enterprise-system-integration.png",
      image: banner,
      coreIcon: "🔌",
      orbitIcons: ["⚙️", "📊", "☁️", "🔄"],
      paragraphs: [
        "Enterprise System Integration connects applications, systems, and data across an organization to enable unified business processes and data flow.",
        "Our experts help you design and implement integration solutions that connect your systems, automate workflows, and unlock the full potential of your technology investments.",
      ],
      checklist: ["Unified Systems & Data", "Automated Workflows", "Real-time Data Access", "Scalable Integration Solutions"],
    },
    {
      type: "grid", tag: "CHALLENGES WE SOLVE", title: "Integration Challenges We Solve",
      subtitle: "We help organizations overcome common integration challenges.",
      columns: 4,
      items: [
        { icon: I.link, title: "Disconnected Systems", desc: "Connect disparate systems for seamless data flow." },
        { icon: I.data, title: "Data Silos & Inconsistency", desc: "Eliminate data silos and ensure consistency." },
        { icon: I.warn, title: "Manual Data Entry", desc: "Automate data flow and reduce manual effort." },
        { icon: I.plane, title: "Integration Complexity", desc: "Simplify integration across multiple systems." },
      ],
    },
    {
      type: "grid", tag: "WHAT WE OFFER", title: "Our System Integration Services",
      subtitle: "End-to-end services for enterprise system integration.",
      columns: 4, bg: "white",
      items: [
        { icon: I.plan, title: "Integration Strategy", desc: "Develop a system integration strategy and roadmap." },
        { icon: I.link, title: "API & Application Integration", desc: "Integrate applications and APIs." },
        { icon: I.connect, title: "Data Integration", desc: "Integrate and harmonize data across systems." },
        { icon: I.process, title: "Workflow Automation", desc: "Automate business processes across systems." },
        { icon: I.cloud, title: "Cloud Integration", desc: "Integrate cloud and on-premises systems." },
        { icon: I.support, title: "Ongoing Support & Optimization", desc: "Monitor, optimize, and support integrations." },
      ],
    },
    {
      type: "process", tag: "OUR PROCESS", title: "Our Integration Implementation Process",
      subtitle: "A proven approach to successful system integration.",
      steps: [
        { num: "01", title: "Assess", desc: "Assess systems, data, and integration requirements." },
        { num: "02", title: "Design", desc: "Design integration architecture and roadmap." },
        { num: "03", title: "Build", desc: "Build and configure integration solutions." },
        { num: "04", title: "Test", desc: "Test, validate, and refine integrations." },
        { num: "05", title: "Deploy", desc: "Deploy integrations and enable workflows." },
        { num: "06", title: "Support", desc: "Provide ongoing support and optimization." },
      ],
    },
    {
      type: "iconStrip", tag: "INTEGRATION USE CASES", title: "Use Cases",
      subtitle: "Integration solutions tailored for your business.",
      columns: 6,
      items: [
        { icon: I.finserv, label: "CRM & ERP Integration", desc: "Unify customer and financial data." },
        { icon: I.health, label: "Healthcare Systems", desc: "Connect EMR, billing, and scheduling." },
        { icon: I.manufacturing, label: "Supply Chain Integration", desc: "Integrate suppliers, logistics, and operations." },
        { icon: I.retail, label: "Omnichannel Integration", desc: "Connect ecommerce, POS, and inventory." },
        { icon: I.proserv, label: "Professional Services", desc: "Connect project management, billing, and CRM." },
        { icon: I.education, label: "Education Systems", desc: "Integrate SIS, LMS, and administrative systems." },
      ],
      footerLink: "View All Use Cases",
    },
    {
      type: "benefits", tag: "BENEFITS", title: "Benefits of Enterprise System Integration",
      subtitle: "Unlock the full potential of your technology investments.",
      items: [
        { icon: I.link, title: "Unified Systems", desc: "Unify systems and data across your organization." },
        { icon: I.process, title: "Automated Workflows", desc: "Automate processes with seamless data flow." },
        { icon: I.insight, title: "Real-time Visibility", desc: "Get real-time visibility into operations." },
        { icon: I.scale, title: "Scalability", desc: "Scale integration as your business grows." },
        { icon: I.coin, title: "Cost Savings", desc: "Reduce costs with streamlined operations." },
      ],
    },
    {
      type: "caseStudies", tag: "CASE STUDIES", title: "Success Stories",
      items: [
        { tag: "Manufacturing", title: "ERP & Supply Chain Integration", stat: "40%", statLabel: "Operational Efficiency", desc: "Improved operational efficiency by 40%.", color: "#3b1078" },
        { tag: "Retail", title: "Omnichannel Integration", stat: "35%", statLabel: "Sales Increase", desc: "Increased sales by 35% with omnichannel integration.", color: "#5b21b6" },
        { tag: "Professional Services", title: "Integrated CRM & Project Management", stat: "50%", statLabel: "Productivity Gain", desc: "Increased productivity by 50% with integrated systems.", color: "#2c0a5e" },
      ],
    },
    {
      type: "faq", tag: "GOT QUESTIONS", title: "Frequently Asked Questions",
      items: [
        { q: "What is enterprise system integration?", a: "Enterprise system integration connects different systems, applications, and data across an organization." },
        { q: "What are the benefits of integration?", a: "Benefits include unified systems, automated workflows, real-time visibility, and cost savings." },
        { q: "What tools do you use for integration?", a: "We use Azure Logic Apps, Service Bus, API Management, and other integration tools." },
        { q: "How long does integration take?", a: "Timelines vary, typically from a few weeks to several months depending on complexity." },
        { q: "Can you integrate cloud and on-premises systems?", a: "Yes, we design hybrid integration solutions that connect cloud and on-premises systems." },
        { q: "Do you provide ongoing support?", a: "Yes, we provide ongoing support, monitoring, and optimization." },
      ],
    },
    {
      type: "cta", title: "Ready to Connect and Unify Your Systems with Enterprise Integration?",
      description: "Let's build a connected, unified, and efficient organization together.",
    },
  ],
};

// ============================================================
// 18. MICROSOFT LICENSING & OPTIMIZATION
// ============================================================
export const licensingOptimizationData = {
  breadcrumb: ["Home", "Microsoft Services", "Microsoft Licensing & Optimization Consulting"],
  badge: "OPTIMIZE. COMPLY. SAVE.",
  title: <>Microsoft Licensing &
    Optimization Consulting  Services</>,
  description: "Optimize your Microsoft licensing, ensure compliance, and reduce costs with expert guidance.",
  subDescription: "We help you understand, optimize, and manage your Microsoft licensing to maximize value and ensure compliance.",
  heroBadges: ["Microsoft Licensing Experts", "Proven Methodology", "Compliance Assurance", "Cost Optimization"],
  heroImage: microsoft365Img,
  floatingIcons: [
    { icon: I.coin, position: { top: -10, left: "10%" } },
    { icon: I.governance, position: { top: -24, left: "55%" } },
    { icon: I.chart, position: { top: 40, left: "88%" } },
    { icon: I.scale, position: { top: 100, left: "92%" } },
  ],
  theme: {
    accent: "#0D9488", accentDark: "#0B7A70", accentLight: "#2DD4BF",
    accentSoft: "rgba(13,148,136,0.08)", heroStart: "#04201d", heroEnd: "#0f766e",
  },
  sections: [
    {
      type: "overview",
      title: "What is Microsoft Licensing & Optimization?",
      brandLabel: "Microsoft Licensing & Optimization",
      // image: "https:2//images.ctfassets.net/w6r2i5d8j73a/2qo5U8C9nI8mK1zY1HdN6v/f7f0d2b4f1e0f1c8d2b4f1e0f1c8d2b4/licensing-optimization.png",
      image: banner,
      coreIcon: "📋",
      orbitIcons: ["💰", "📊", "⚖️", "📝"],
      paragraphs: [
        "Microsoft Licensing & Optimization helps organizations understand, manage, and optimize their Microsoft licensing to ensure compliance, maximize value, and reduce costs.",
        "Our experts assess your current licensing, identify optimization opportunities, and help you implement strategies to manage licensing effectively.",
      ],
      checklist: ["License Optimization", "Cost Savings", "Compliance Assurance", "Strategic Management"],
    },
    {
      type: "grid", tag: "CHALLENGES WE SOLVE", title: "Licensing Challenges We Solve",
      subtitle: "We help organizations overcome common licensing challenges.",
      columns: 4,
      items: [
        { icon: I.warn, title: "Complex Licensing", desc: "Navigate complex licensing with expert guidance." },
        { icon: I.coin, title: "Over-licensing & Waste", desc: "Identify and eliminate over-licensing and waste." },
        { icon: I.governance, title: "Compliance Risks", desc: "Ensure compliance and avoid audit penalties." },
        { icon: I.plane, title: "Cost Optimization", desc: "Optimize licensing costs and maximize value." },
      ],
    },
    {
      type: "grid", tag: "WHAT WE OFFER", title: "Our Licensing & Optimization Services",
      subtitle: "Comprehensive services to optimize and manage licensing.",
      columns: 4, bg: "white",
      items: [
        { icon: I.plan, title: "Licensing Assessment", desc: "Assess your current licensing and compliance." },
        { icon: I.chart, title: "Cost Optimization", desc: "Identify and implement cost optimization strategies." },
        { icon: I.governance, title: "Compliance Management", desc: "Ensure ongoing compliance with licensing terms." },
        { icon: I.plan, title: "Strategic Licensing Planning", desc: "Plan and manage licensing for future needs." },
        { icon: I.scale, title: "Cloud & Hybrid Licensing", desc: "Optimize cloud and hybrid licensing." },
        { icon: I.support, title: "Ongoing Support & Advisory", desc: "Provide ongoing licensing advisory and support." },
      ],
    },
    {
      type: "process", tag: "OUR PROCESS", title: "Our Licensing Optimization Process",
      subtitle: "A proven approach to optimize and manage licensing.",
      steps: [
        { num: "01", title: "Assess", desc: "Assess your current licensing and usage." },
        { num: "02", title: "Analyze", desc: "Analyze licensing data and identify opportunities." },
        { num: "03", title: "Optimize", desc: "Implement optimization strategies and changes." },
        { num: "04", title: "Manage", desc: "Manage licensing and ensure ongoing compliance." },
        { num: "05", title: "Monitor", desc: "Monitor usage and adjust as needed." },
        { num: "06", title: "Support", desc: "Provide ongoing advisory and support." },
      ],
    },
    {
      type: "iconStrip", tag: "LICENSING AREAS", title: "Licensing Areas",
      subtitle: "We cover all Microsoft licensing areas.",
      columns: 6,
      items: [
        { icon: I.cloud, label: "Microsoft 365", desc: "Licensing for productivity and collaboration." },
        { icon: I.cloud, label: "Azure", desc: "Cloud licensing and consumption." },
        { icon: I.cloud, label: "Dynamics 365", desc: "CRM and ERP licensing." },
        { icon: I.cloud, label: "Enterprise Agreements", desc: "Volume licensing agreements." },
        { icon: I.cloud, label: "CSP", desc: "Cloud Solution Provider licensing." },
        { icon: I.cloud, label: "Hybrid", desc: "Hybrid and on-premises licensing." },
      ],
      footerLink: "View All Licensing Areas",
    },
    {
      type: "benefits", tag: "BENEFITS", title: "Benefits of Licensing & Optimization",
      subtitle: "Optimize licensing and maximize value.",
      items: [
        { icon: I.coin, title: "Cost Savings", desc: "Reduce licensing costs and eliminate waste." },
        { icon: I.governance, title: "Compliance Assurance", desc: "Ensure ongoing compliance with licensing terms." },
        { icon: I.plan, title: "Strategic Management", desc: "Manage licensing strategically for future needs." },
        { icon: I.scale, title: "Scalability", desc: "Scale licensing as your organization grows." },
        { icon: I.insight, title: "Visibility & Control", desc: "Get visibility and control over licensing." },
      ],
    },
    {
      type: "caseStudies", tag: "CASE STUDIES", title: "Success Stories",
      items: [
        { tag: "Professional Services", title: "Microsoft 365 Licensing Optimization", stat: "30%", statLabel: "Cost Reduction", desc: "Reduced licensing costs by 30% with optimization.", color: "#0c3e38" },
        { tag: "Technology", title: "Azure Cost Management", stat: "40%", statLabel: "Cloud Cost Reduction", desc: "Reduced Azure costs by 40% with optimization.", color: "#0f766e" },
        { tag: "Finance", title: "Enterprise Agreement Compliance", stat: "100%", statLabel: "Compliance Achieved", desc: "Achieved full compliance and cost savings.", color: "#083b35" },
      ],
    },
    {
      type: "faq", tag: "GOT QUESTIONS", title: "Frequently Asked Questions",
      items: [
        { q: "What is Microsoft licensing optimization?", a: "Licensing optimization helps organizations manage licensing effectively, ensure compliance, and reduce costs." },
        { q: "What are the benefits of licensing optimization?", a: "Benefits include cost savings, compliance assurance, and strategic licensing management." },
        { q: "How do you optimize Microsoft licensing?", a: "We assess your licensing, identify waste, and implement optimization strategies." },
        { q: "What is Microsoft CSP licensing?", a: "CSP (Cloud Solution Provider) is a licensing model for cloud services." },
        { q: "How long does licensing optimization take?", a: "Timelines vary, typically from a few weeks for assessment to several months for implementation." },
        { q: "Do you provide ongoing support?", a: "Yes, we provide ongoing advisory and support for licensing management." },
      ],
    },
    {
      type: "cta", title: "Ready to Optimize Your Microsoft Licensing and Reduce Costs?",
      description: "Let's build a cost-effective, compliant, and optimized licensing strategy for your organization.",
    },
  ],
};


export const contactUsData = {
  breadcrumb: ["Home", "Contact Us"],

  badge: "LET'S CONNECT",

  title: (
    <>
      Talk to Our Microsoft
      Consulting Experts
    </>
  ),

  description:
    "Have questions about Microsoft 365, Dynamics 365, Azure, Security, or Digital Transformation? Our experts are ready to help.",

  subDescription:
    "Fill out the form below and one of our consultants will get back to you within 24 business hours.",

  heroBadges: [
    "Free Consultation",
    "Microsoft Certified Experts",
    "24-Hour Response",
    "Trusted Microsoft Partner",
  ],

  heroImage: contactHeroImg,

  floatingIcons: [
    { icon: I.phone, position: { top: -10, left: "12%" } },
    { icon: I.mail, position: { top: -20, left: "55%" } },
    { icon: I.users, position: { top: 40, left: "88%" } },
    { icon: I.support, position: { top: 100, left: "92%" } },
  ],

  theme: {
    accent: "#2563EB",
    accentDark: "#1D4ED8",
    accentLight: "#60A5FA",
    accentSoft: "rgba(37,99,235,0.08)",
    heroStart: "#021B4E",
    heroEnd: "#0B5ED7",
  },

  sections: [
    {
      type: "contactForm",

      title: "Send Us A Message",

      buttonText: "Send Message",

      fields: {
        fullName: {
          label: "Full Name",
          placeholder: "John Doe",
        },

        companyName: {
          label: "Company Name",
          placeholder: "ABC Technologies",
        },

        email: {
          label: "Work Email",
          placeholder: "john@company.com",
        },

        phone: {
          label: "Phone Number",
          placeholder: "+91 9876543210",
        },

        service: {
          label: "Service You're Interested In",

          placeholder: "Select a Service",

          options: [
            "Microsoft 365 Consulting",
            "Dynamics 365 Consulting",
            "Azure Consulting",
            "Power Platform",
            "SharePoint",
            "Security & Compliance",
            "Microsoft Licensing",
            "AI & Copilot",
            "Other",
          ],
        },

        message: {
          label: "Your Message",
          placeholder:
            "Tell us about your project requirements...",
        },
      },
    },

    {
      type: "contactInfo",

      title: "Contact Information",

      phone: "+91 98765 43210",

      email: "info@yourcompany.com",

      hours: "Monday – Friday | 9:00 AM – 6:00 PM",

      address: "Noida, Uttar Pradesh, India",

      responseTitle: "We Respond Fast!",

      responseText:
        "Our Microsoft consultants typically respond within 24 business hours.",
    },

    {
      type: "officeLocations",

      title: "Our Offices",

      items: [
        {
          city: "Noida",
          country: "India",
          address: "Sector 62, Noida",
          phone: "+91 9876543210",
          email: "noida@company.com",
        },
        {
          city: "Dubai",
          country: "UAE",
          address: "Business Bay, Dubai",
          phone: "+971 50 123 4567",
          email: "dubai@company.com",
        },
      ],
    },

    {
      type: "faq",

      tag: "GOT QUESTIONS",

      title: "Frequently Asked Questions",

      items: [
        {
          q: "How quickly do you respond?",
          a: "Most enquiries receive a response within one business day.",
        },
        {
          q: "Do you offer free consultations?",
          a: "Yes. We provide an initial consultation to understand your business needs.",
        },
        {
          q: "Which Microsoft solutions do you support?",
          a: "Microsoft 365, Azure, Dynamics 365, Power Platform, Security, Copilot and more.",
        },
        {
          q: "Can you support global organizations?",
          a: "Yes. We work with clients across multiple regions.",
        },
      ],
    },

    {
      type: "cta",

      title: "Ready to Start Your Microsoft Transformation?",

      description:
        "Let's discuss your goals and build the right Microsoft solution for your business.",
    },
  ],
};


export const aboutPageData = {
  breadcrumb: ["Home", "About Us"],

  badge: "ABOUT JJC SYSTEMS",

  title: (
    <>
      Why We Exist.
      Where You Succeed.
    </>
  ),

  description:
    "We deliver Microsoft-powered solutions that empower businesses to innovate, grow and lead in their industries.",

  subDescription:
    "Our team combines Microsoft expertise with industry knowledge to help organizations achieve measurable business outcomes.",

  heroBadges: [
    "Microsoft Solutions Partner",
    "Certified Experts",
    "Business Focused",
    "End-to-End Support",
  ],

  heroImage: AboutImage,

  floatingIcons: [
    { icon: I.building, position: { top: -10, left: "12%" } },
    { icon: I.users, position: { top: -18, left: "52%" } },
    { icon: I.shield, position: { top: 40, left: "88%" } },
    { icon: I.target, position: { top: 110, left: "92%" } },
  ],

  theme: {
    accent: "#2563EB",
    accentDark: "#1D4ED8",
    accentLight: "#60A5FA",
    accentSoft: "rgba(37,99,235,.08)",
    heroStart: "#021B4E",
    heroEnd: "#0B5ED7",
  },

  sections: [
    {
      type: "overview",

      title: "Who We Are",

      brandLabel: "JJC Systems",

      image: AboutImage,

      coreIcon: "🏢",

      orbitIcons: ["💼", "🤝", "🚀", "⭐"],

      paragraphs: [
        "JJC Systems is a Microsoft Solutions Partner helping organizations transform the way they work with Microsoft technologies.",
        "We combine business consulting, cloud expertise, and modern workplace solutions to deliver measurable business outcomes.",
      ],

      checklist: [
        "Microsoft Solutions Partner",
        "Certified Experts",
        "Customer First",
        "End-to-End Delivery",
      ],
    },

    {
      type: "grid",

      tag: "WHY CLIENTS CHOOSE US",

      title: "Committed To Your Success",

      subtitle:
        "Our approach combines technology expertise with business strategy.",

      columns: 4,

      items: [
        {
          icon: <BadgeCheck />,
          title: "Microsoft Expertise",
          desc: "Certified professionals across Microsoft technologies.",
        },
        {
          icon: <Target />,
          title: "Business First",
          desc: "Technology aligned with business outcomes.",
        },
        {
          icon: <Workflow />,
          title: "End-to-End Delivery",
          desc: "Consulting, implementation and support.",
        },
        {
          icon: <HeartHandshake />,
          title: "Long-Term Partnership",
          desc: "Focused on continuous business growth.",
        },
      ],
    },

    {
      type: "stats",

      tag: "OUR IMPACT",

      title: "Driving Business Success",

      items: [
        {
          icon: <Briefcase />,
          value: "150+",
          label: "Projects Delivered",
        },
        {
          icon: <Users />,
          value: "50+",
          label: "Happy Clients",
        },
        {
          icon: <ShieldCheck />,
          value: "10+",
          label: "Years Experience",
        },
        {
          icon: <BadgeCheck />,
          value: "95%",
          label: "Client Satisfaction",
        },
      ],
    },

    {
      type: "process",

      tag: "OUR PROCESS",

      title: "Proven Process. Predictable Results.",

      subtitle:
        "A structured approach that ensures successful project delivery.",

      steps: [
        {
          num: "01",
          icon: <Search />,
          title: "Discover",
          desc: "Understand business challenges and goals.",
        },
        {
          num: "02",
          icon: <ClipboardList />,
          title: "Plan",
          desc: "Create a detailed roadmap.",
        },
        {
          num: "03",
          icon: <Cog />,
          title: "Implement",
          desc: "Deploy Microsoft solutions efficiently.",
        },
        {
          num: "04",
          icon: <TrendingUp />,
          title: "Optimize",
          desc: "Improve adoption and performance.",
        },
        {
          num: "05",
          icon: <LifeBuoy />,
          title: "Support",
          desc: "Continuous optimization and support.",
        },
      ],
    },

    {
      type: "iconStrip",

      tag: "INDUSTRIES WE SERVE",

      title: "Solutions For Every Industry",

      subtitle:
        "Delivering Microsoft solutions across multiple industries.",

      columns: 6,

      items: [
        {
          icon: <Factory />,
          label: "Manufacturing",
          desc: "ERP & Operations",
        },
        {
          icon: <Hospital />,
          label: "Healthcare",
          desc: "Secure Digital Care",
        },
        {
          icon: <ShoppingBag />,
          label: "Retail",
          desc: "Customer Experience",
        },
        {
          icon: <GraduationCap />,
          label: "Education",
          desc: "Modern Learning",
        },
        {
          icon: <Landmark />,
          label: "Finance",
          desc: "Compliance & Security",
        },
        {
          icon: <Building />,
          label: "Professional Services",
          desc: "Business Productivity",
        },
      ],

      footerLink: "Explore Industries",
    },

    {
      type: "cta",

      title: "Let's Build The Future Together",

      description:
        "Ready to transform your business with Microsoft solutions?",
    },
  ],
};

export const resourcesData = {
  breadcrumb: ["Home", "Resources"],

  badge: "KNOWLEDGE HUB",

  title: (
    <>
      Microsoft Resources,
      Insights & Best Practices
    </>
  ),

  description:
    "Explore expert insights, implementation guides, industry trends, and Microsoft best practices to help your business innovate with confidence.",

  subDescription:
    "Stay informed with practical resources covering Microsoft 365, Azure, Dynamics 365, Security, AI, Power Platform, and Digital Transformation.",

  heroBadges: [
    "Expert Articles",
    "Implementation Guides",
    "Industry Insights",
    "Microsoft Best Practices",
  ],

  heroImage: resourcesHero,

  floatingIcons: [
    { icon: <FaBookOpen />, position: { top: -10, left: "12%" } },
    { icon: <FaDownload />, position: { top: -20, left: "55%" } },
    { icon: <FaDownload />, position: { top: 45, left: "88%" } },
    { icon: <FaDownload />, position: { top: 110, left: "92%" } },
  ],

  theme: {
    accent: "#2563EB",
    accentDark: "#1D4ED8",
    accentLight: "#60A5FA",
    accentSoft: "rgba(37,99,235,.08)",
    heroStart: "#021B4E",
    heroEnd: "#0B5ED7",
  },

  sections: [

    {
      type: "overview",

      title: "Your Microsoft Knowledge Center",

      brandLabel: "JJC Resources",

      image: banner,

      coreIcon: "📚",

      orbitIcons: ["💡", "📄", "🚀", "🔒"],

      paragraphs: [
        "Access practical Microsoft resources created by certified consultants with real-world implementation experience.",

        "Whether you're planning a migration, improving security, or adopting AI, our resources help you make better technology decisions."
      ],

      checklist: [
        "Expert Articles",
        "Implementation Guides",
        "Industry Reports",
        "Free Learning Resources"
      ],
    },

    {
      type: "grid",

      tag: "EXPLORE",

      title: "Resource Categories",

      subtitle:
        "Browse knowledge across Microsoft's complete ecosystem.",

      columns: 4,

      items: [
        {
          icon: <FaBookOpen />,
          title: "Blogs",
          desc: "Latest Microsoft technology articles and insights."
        },

        {
          icon: <FaDownload />,
          title: "Whitepapers",
          desc: "Detailed technical and business documents."
        },

        {
          icon: <FaVideo />,
          title: "Webinars",
          desc: "Expert sessions and product demonstrations."
        },

        {
          icon: <FaDownload />,
          title: "eBooks",
          desc: "Downloadable guides and implementation playbooks."
        },

        {
          icon: <FaCashRegister />,
          title: "Case Studies",
          desc: "Real customer transformation stories."
        },

        {
          icon: <FaBookOpen />,
          title: "Industry Reports",
          desc: "Market trends and Microsoft ecosystem updates."
        },

        {
          icon: <FaBookOpen />,
          title: "Implementation Guides",
          desc: "Step-by-step Microsoft deployment guidance."
        },

        {
          icon: <FaBookOpen />,
          title: "Best Practices",
          desc: "Recommendations from Microsoft experts."
        }
      ]
    },



    {
      type: "caseStudies",

      tag: "FEATURED",

      title: "Popular Resources",

      items: [

        {
          tag: "Microsoft 365",

          title: "Microsoft 365 Migration Guide",

          stat: "50+",

          statLabel: "Pages",

          desc: "Complete migration planning and execution guide.",

          color: "#0b4fd9"
        },

        {
          tag: "Azure",

          title: "Azure Cost Optimization",

          stat: "35%",

          statLabel: "Average Savings",

          desc: "Learn proven cloud cost optimization strategies.",

          color: "#005a9e"
        },

        {
          tag: "Security",

          title: "Microsoft Security Checklist",

          stat: "100+",

          statLabel: "Recommendations",

          desc: "Security best practices for Microsoft environments.",

          color: "#1d4ed8"
        }
      ]
    },

    {
      type: "faq",

      tag: "FREQUENTLY ASKED",

      title: "Resources FAQ",

      items: [

        {
          q: "Are all resources free?",
          a: "Most of our blogs, guides and articles are available free of charge."
        },

        {
          q: "Do you publish Microsoft updates?",
          a: "Yes. We regularly publish updates covering Microsoft technologies."
        },

        {
          q: "Can I download whitepapers?",
          a: "Yes. Whitepapers, eBooks and implementation guides are available for download."
        },

        {
          q: "Do you provide technical documentation?",
          a: "Yes. We publish technical documentation, migration guides and best practices."
        },

        {
          q: "How often is content updated?",
          a: "Resources are updated regularly to reflect Microsoft's latest releases."
        }
      ]
    },

    {
      type: "cta",

      title: "Need Help Choosing The Right Microsoft Solution?",

      description:
        "Connect with our Microsoft experts for personalized guidance and recommendations."
    }
  ]
};


// platforms/dynamics365SalesData.js
// Use: import dynamics365SalesData from "./platforms/dynamics365SalesData";
//      <ServicePage data={dynamics365SalesData} />

// replace path

// ─── INLINE LOGO ─────────────────────────────────────────────────────────────
const D365Logo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="#7C3AED" />
    <text
      x="50%"
      y="55%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="#fff"
      fontSize="22"
      fontWeight="bold"
      fontFamily="Inter, sans-serif"
    >
      D
    </text>
  </svg>
);

// ═════════════════════════════════════════════════════════════════════════════
export const dynamics365SalesData = {

  // ── BREADCRUMB ─────────────────────────────────────────────────────────────
  breadcrumb: ["Home", "Platforms", "Dynamics 365 Sales"],

  // ── BADGE (hero eyebrow) ───────────────────────────────────────────────────
  badge: "SELL SMARTER. BUILD STRONGER RELATIONSHIPS.",

  // ── HERO TEXT ──────────────────────────────────────────────────────────────
  title: (
    <>
      Dynamics 365 Sales.{" "}
      <span style={{ color: "var(--svc-accent-light, #A78BFA)" }}>
        Drive Growth.{" "}
      </span>
      <span style={{ color: "var(--svc-accent-light, #A78BFA)" }}>
        Close More Deals.
      </span>
    </>
  ),

  description:
    "Empower your sales teams with AI-powered insights, smarter engagements, and seamless collaboration to win more business and build lasting customer relationships.",

  subDescription:
    "JJC Systems implements Dynamics 365 Sales end-to-end — from strategy and configuration to training and ongoing support.",

  heroBadges: [
    "Microsoft Solutions Partner",
    "Microsoft Dynamics 365",
    "Certified Experts",
    "End-to-End Support",
  ],

  heroImage: D365HeroImage,

  floatingIcons: [
    { icon: <UserCircle size={22} />, position: { top: -10, left: "12%" } },
    { icon: <TrendingUp size={22} />, position: { top: -18, left: "52%" } },
    { icon: <Brain size={22} />, position: { top: 40, left: "88%" } },
    { icon: <Target size={22} />, position: { top: 110, left: "92%" } },
  ],

  // ── THEME ──────────────────────────────────────────────────────────────────
  theme: {
    accent: "#7C3AED",
    accentDark: "#5B21B6",
    accentLight: "#A78BFA",
    accentSoft: "rgba(124,58,237,0.08)",
    heroStart: "#0F0A2A",
    heroEnd: "#1E1060",
    accentRgb: "124, 58, 237",
  },

  // ── SECTIONS ───────────────────────────────────────────────────────────────
  sections: [

    // 1 ─ OVERVIEW ───────────────────────────────────────────────────────────
    {
      type: "overview",
      tag: "WHAT IS DYNAMICS 365 SALES?",
      title: "A Smarter Way to Sell",
      brandLabel: "Dynamics 365 Sales",
      image: D365HeroImage,
      coreIcon: <D365Logo />,
      orbitIcons: [
        <UserCircle size={24} />,
        <Target size={24} />,
        <Mail size={24} />,
        <TrendingUp size={24} />,
      ],
      paragraphs: [
        "Dynamics 365 Sales helps your teams build stronger customer relationships, prioritize the right opportunities, and close deals faster with AI-driven insights and automation.",
        "From lead capture to deal closure, every step of your sales process becomes smarter, faster, and more connected.",
      ],
      checklist: [
        "Unify customer data from multiple sources",
        "Track every interaction and nurture relationships",
        "Get AI recommendations to focus on high-impact activities",
        "Accelerate sales cycles and increase win rates",
      ],
    },

    // 2 ─ GRID — Key Capabilities ────────────────────────────────────────────
    {
      type: "grid",
      tag: "KEY CAPABILITIES",
      title: "Everything Your Sales Team Needs",
      subtitle:
        "A complete set of tools to manage relationships, forecast accurately, and close more deals.",
      bg: "white",
      columns: 6,
      alignLeft: false,
      items: [
        {
          icon: <UserCircle size={24} />,
          title: "Lead & Opportunity Management",
          desc: "Capture leads, track opportunities, and manage your pipeline effectively.",
        },
        {
          icon: <Target size={24} />,
          title: "Relationship Intelligence",
          desc: "Build stronger relationships with 360° customer insights.",
        },
        {
          icon: <Brain size={24} />,
          title: "AI-Powered Insights",
          desc: "Get AI-driven recommendations to prioritize and close more deals.",
        },
        {
          icon: <TrendingUp size={24} />,
          title: "Sales Forecasting",
          desc: "Predict sales with accuracy and make data-driven decisions with confidence.",
        },
        {
          icon: <Mail size={24} />,
          title: "Email & Meeting Integration",
          desc: "Sync emails, meetings, and activities to stay organized and productive.",
        },
        {
          icon: <Smartphone size={24} />,
          title: "Mobile Sales Productivity",
          desc: "Empower your teams to sell on the go with powerful mobile experiences.",
        },
      ],
    },

    // 3 ─ SPLIT PANEL — Business Benefits ────────────────────────────────────
    {
      type: "splitPanel",
      tag: "BUSINESS BENEFITS",
      title: "Boost Sales. Build Relationships. Drive Results.",
      desc: "Dynamics 365 Sales gives your team the tools and intelligence to sell smarter, build lasting customer relationships, and drive consistent revenue growth.",
      visualIcon: "📊",
      miniIcons: ["📈", "🤝", "🧠", "💼"],
      list: [
        "Increase Revenue — Close more deals with better insights and engagement",
        "Improve Productivity — Automate tasks and give teams more time to sell",
        "Better Forecasting — Make accurate forecasts and plan resources effectively",
        "Stronger Relationships — Understand customers and build lasting connections",
        "Data-Driven Decisions — Leverage real-time data to make smarter sales decisions",
        "Scalable Growth — Scale your sales operations as your business grows",
      ],
      buttonLabel: "Schedule a Consultation",
    },

    // 4 ─ PROCESS — Implementation ────────────────────────────────────────────
    {
      type: "process",
      tag: "OUR IMPLEMENTATION PROCESS",
      title: "Your Path to Sales Success",
      subtitle:
        "A structured 6-step process that ensures smooth go-live and long-term success.",
      steps: [
        {
          num: "01",
          icon: <Search size={18} />,
          title: "Discover",
          desc: "Understand your business, goals, and sales challenges.",
        },
        {
          num: "02",
          icon: <ClipboardList size={18} />,
          title: "Plan",
          desc: "Design a solution and roadmap tailored to your needs.",
        },
        {
          num: "03",
          icon: <Settings size={18} />,
          title: "Configure",
          desc: "Set up Dynamics 365 Sales to align with your sales processes.",
        },
        {
          num: "04",
          icon: <Plug size={18} />,
          title: "Integrate",
          desc: "Seamlessly integrate with your existing tools and systems.",
        },
        {
          num: "05",
          icon: <GraduationCap size={18} />,
          title: "Train",
          desc: "Enable your teams with training and best practices for success.",
        },
        {
          num: "06",
          icon: <LifeBuoy size={18} />,
          title: "Go Live & Support",
          desc: "Go live with confidence and get ongoing support for continuous growth.",
        },
      ],
    },

    // 5 ─ ICON STRIP — Industries ─────────────────────────────────────────────
    {
      type: "iconStrip",
      tag: "INDUSTRIES WE SERVE",
      title: "Built for Every Industry",
      subtitle:
        "Dynamics 365 Sales powers sales teams across every major industry vertical.",
      columns: 4,
      items: [
        { icon: <Factory size={22} />, label: "Manufacturing", desc: "ERP & Sales Ops" },
        { icon: <ShoppingCart size={22} />, label: "Retail & eCommerce", desc: "Customer Experience" },
        { icon: <Briefcase size={22} />, label: "Professional Services", desc: "Business Productivity" },
        { icon: <Landmark size={22} />, label: "Financial Services", desc: "Compliance & Growth" },
        { icon: <HeartPulse size={22} />, label: "Healthcare", desc: "Secure Digital Care" },
        { icon: <School size={22} />, label: "Education", desc: "Modern Learning" },
        { icon: <Home size={22} />, label: "Real Estate", desc: "Pipeline Management" },
        { icon: <Sprout size={22} />, label: "Nonprofit", desc: "Donor Engagement" },
      ],
      footerLink: "Explore All Industries",
    },

    // 6 ─ CASE STUDIES ────────────────────────────────────────────────────────
    {
      type: "caseStudies",
      tag: "SUCCESS STORIES",
      title: "Real Results from Real Businesses",
      subtitle:
        "See how JJC Systems has helped organizations transform their sales with Dynamics 365.",
      items: [
        {
          tag: "Manufacturing",
          title: "Improved Sales Productivity by 35% with Dynamics 365 Sales",
          desc: "A global manufacturing company streamlined its sales process and improved win rate by 35% using Dynamics 365 Sales.",
          color: "linear-gradient(135deg, #1E1060 0%, #7C3AED 100%)",
          stat: "+35%",
          statLabel: "Sales Productivity Increase",
        },
        {
          tag: "Financial Services",
          title: "Reduced Sales Cycle by 40% with AI-Powered Insights",
          desc: "A leading financial services firm used AI insights to shorten deal cycles and close more high-value accounts.",
          color: "linear-gradient(135deg, #0F2A5E 0%, #2563EB 100%)",
          stat: "40%",
          statLabel: "Faster Sales Cycle",
        },
        {
          tag: "Retail",
          title: "2× Pipeline Growth in 6 Months",
          desc: "A retail chain doubled its sales pipeline using automated lead management and relationship intelligence.",
          color: "linear-gradient(135deg, #0A2A1E 0%, #059669 100%)",
          stat: "2×",
          statLabel: "Pipeline Growth",
        },
      ],
    },

    // 7 ─ FAQ ─────────────────────────────────────────────────────────────────
    {
      type: "faq",
      tag: "FREQUENTLY ASKED QUESTIONS",
      title: "Got Questions? We've Got Answers.",
      items: [
        {
          q: "What is Dynamics 365 Sales?",
          a: "Dynamics 365 Sales is a Microsoft CRM solution that helps sales teams manage customer relationships, track leads and opportunities, and close deals faster using AI-powered insights and automation.",
        },
        {
          q: "How does Dynamics 365 Sales help my team?",
          a: "It centralizes customer data, automates repetitive tasks, provides AI recommendations, and integrates with tools like Outlook and Teams — so your team spends more time selling.",
        },
        {
          q: "Can it integrate with our existing systems?",
          a: "Yes. Dynamics 365 Sales integrates seamlessly with Microsoft 365, Teams, SharePoint, and hundreds of third-party tools via Power Platform connectors and APIs.",
        },
        {
          q: "Is it suitable for small businesses?",
          a: "Absolutely. Dynamics 365 Sales is scalable and available in multiple editions — from SMBs to enterprise — so you only pay for what you need.",
        },
        {
          q: "How long does implementation take?",
          a: "A standard implementation takes 4–8 weeks depending on complexity, integrations, and customization requirements. JJC Systems follows a proven 6-step process to ensure smooth go-live.",
        },
        {
          q: "What support do you provide post go-live?",
          a: "We offer ongoing support packages including helpdesk, monthly check-ins, system optimization, and training to ensure your team continues to get maximum value.",
        },
      ],
    },

    // 8 ─ CTA ─────────────────────────────────────────────────────────────────
    {
      type: "cta",
      title: "Ready to Transform Your Sales with Dynamics 365 Sales?",
      description:
        "Let's empower your team to sell smarter, build stronger relationships, and grow your business.",
      primaryLabel: "Schedule a Consultation",
      secondaryLabel: "Request an Assessment",
    },
  ],
};

// ============================================================
// EXPORT ALL SERVICES
// ============================================================
export const allServices = {
  "microsoft-365": microsoft365Data,
  "dynamics-365": dynamics365Data,
  "power-platform": powerPlatformData,
  "power-bi": powerBIData,
  "sharepoint": sharePointData,
  "microsoft-fabric-power-bi": fabricPowerBIData,
  "microsoft-erp": erpData,
  "microsoft-crm": crmData,
  "ai-copilot": aiCopilotData,
  "modern-workplace": modernWorkplaceData,
  "security-identity-compliance": securityIdentityComplianceData,
  "data-bi-reporting": dataBIReportingData,
  "endpoint-device-management": endpointDeviceManagementData,
  "business-process-automation": businessProcessAutomationData,
  "teams-calling-business-voice": teamsCallingBusinessVoiceData,
  "cloud-virtual-desktop-infrastructure": cloudVirtualDesktopInfrastructureData,
  "enterprise-system-integration": enterpriseSystemIntegrationData,
  "microsoft-licensing-optimization": licensingOptimizationData,
  "dynamics-365-SalesData": dynamics365SalesData,
  // "Contact": contactHeroData

};

// export const allServices = {
//   "microsoft-365": microsoft365Data,
//   "dynamics-365": dynamics365Data,
//   "power-platform": powerPlatformData,
//   "power-bi": powerBIData,
//   "sharepoint": sharePointData,
// };
