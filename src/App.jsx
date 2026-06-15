import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { Icons, megaMenus } from "./utils/data";
import Header from "./components/Header";
import './App.css'
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";
import LeadershipTeam from "./components/LeadershipTeam";
import Testimonials from "./components/Testimonials";
import ClientLogos from "./components/ClientLogos";
import Resources from "./components/Resources";
import DeliveryProcess from "./components/DeliveryProcess";
import CaseStudies from "./components/CaseStudies";
import Industries from "./components/Industries";
import SolutionAreas from "./components/SolutionAreas";
import Challenges from "./components/Challenges";

// ============================================================
// THEME TOKENS
// ============================================================
const theme = {
  primary: "#2563EB",
  primaryDark: "#0F3D91",
  primaryLight: "#4F8CFF",
  heroStart: "#021B4E",
  heroMiddle: "#002A72",
  heroEnd: "#0B5ED7",
  textDark: "#0F172A",
  textHeading: "#111827",
  textBody: "#475569",
  textLight: "#64748B",
  textWhite: "#FFFFFF",
  bgWhite: "#FFFFFF",
  bgLight: "#F8FAFC",
  bgSection: "#F5F7FB",
  bgDark: "#031B4E",
  border: "#E5E7EB",
  borderLight: "#EEF2F7",
  cardBg: "#FFFFFF",
  success: "#22C55E",
  warning: "#F59E0B",
  footerBg: "#031633",
  footerText: "#CBD5E1",
};

// ============================================================
// ANIMATION VARIANTS
// ============================================================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};
const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// ============================================================
// SECTION WRAPPER
// ============================================================
function AnimatedSection({ children, className, style }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      className={className}
      style={style}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.section>
  );
}


export default function App() {
  return (
    <div style={{ fontFamily: "Inter, -apple-system, sans-serif", color: theme.textBody, overflowX: "hidden" }}>

      <Header />
      <main style={{ paddingTop: 68 }}>
        <Hero />
        <Services />
        <Challenges />
        <SolutionAreas />
        <Industries />
        <CaseStudies />
        <DeliveryProcess />
        <Resources />
        <ClientLogos />
        <Testimonials />
        <LeadershipTeam />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}