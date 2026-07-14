import ServiceHero from "../components/ServiceHero";
import LeadershipTeam from "../components/LeadershipTeam";
import { useEffect } from "react";

export default function LegalPage({ data }) {
  const themeVars = {
    "--svc-accent": data?.theme?.accent || "#2563EB",
    "--svc-accent-dark": data?.theme?.accentDark || "#1D4ED8",
    "--svc-accent-light": data?.theme?.accentLight || "#4F8CFF",
    "--svc-accent-soft":
      data?.theme?.accentSoft || "rgba(37,99,235,0.08)",
    "--svc-hero-start": data?.theme?.heroStart || "#03153c",
    "--svc-hero-end": data?.theme?.heroEnd || "#0c5de8",
    "--accent-rgb": data?.theme?.accentRgb || "37,99,235",
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const heroData = {
    title: data?.title || "Our Team",
    badge: data?.badge || "OUR TEAM",
    hero: {
      description:
        data?.hero?.description ||
        "A leadership team combining deep Microsoft expertise with real-world business strategy.",
      subDescription:
        data?.hero?.subDescription ||
        "From strategy to delivery, this is the team steering every engagement we take on.",
      badges: data?.hero?.badges || [
        "Certified Experts",
        "Cross-Industry Experience",
        "Client-First Mindset",
      ],
      image: data?.hero?.image || {
        url: "https://res.cloudinary.com/sakshichak1/image/upload/v1783428245/jjc-systems/fbxeeyjucyvcxmm2srjt.jpg",
      },
    },
    breadcrumb: data?.breadcrumb || ["Home", "Company", "Our Team"],
    theme: {
      accent: data?.theme?.accent || "#2563EB",
      accentDark: data?.theme?.accentDark || "#1D4ED8",
      accentLight: data?.theme?.accentLight || "#60A5FA",
      accentSoft:
        data?.theme?.accentSoft || "rgba(37,99,235,.08)",
      heroStart: data?.theme?.heroStart || "#021B4E",
      heroEnd: data?.theme?.heroEnd || "#0B5ED7",
      accentRgb: data?.theme?.accentRgb || "37,99,235",
    },
    floatingIcons: data?.floatingIcons || [],
    exploreLabel: data?.exploreLabel || "Meet Our Team",
  };

  return (
    <div className="legal-page" style={themeVars}>
      <ServiceHero d={heroData} />
      <LeadershipTeam />
    </div>
  );
}