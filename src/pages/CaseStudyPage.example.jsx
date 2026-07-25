import React from "react";
import Header from "./Header"; // your existing navbar
import Footer from "./Footer"; // your existing footer
import CaseStudyDetail from "./CaseStudyDetail";

// Pass your own case study's data here — every field is optional and
// falls back to the DynaTech/non-profit sample if omitted.
const myCaseStudyData = {
  meta: {
    eyebrow: "Case Study",
    title: "Your case study headline goes here",
    heroImage: "/images/case-studies/hero.jpg",
    industry: "Manufacturing",
    region: "UAE",
  },
  services: [
    { icon: "layout", label: "Greenfield Implementation" },
    { icon: "handshake", label: "Managed Services" },
    { icon: "compass", label: "Enterprise Digital Strategy" },
  ],
  // ...intro, products, solution, results, cta, tags, related
};

export default function CaseStudyPage() {
  return (
    <>
      <Header />
      <CaseStudyDetail data={myCaseStudyData} />
      <Footer />
    </>
  );
}
