import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { Icons } from "./utils/data";
import Header from "./components/Header";
import './App.css'
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import ServicePage from "./pages/ServicePage";
import ServiceRoute from "./pages/ServiceRoute";
import AboutUs from "./pages/AboutUs";
// import ContactUs from "./pages/ContactUs/ContactUs";
import ContactUs from "./pages/ContactUs";
import Resources from "./pages/Resources";
import Platforms from "./pages/Platforms";
import Industries from "./pages/Industries";
// import index from "./pages/ContactUs/ContactUs";
import OnboardingGuide from "./pages/OnboardingGuide";
import OurApproach from "./pages/OurApproach";
import FAQPage from "./pages/FAQPage";
import Team from "./pages/Team";
import Locations from "./pages/Locations";
import Partners from "./pages/Partners";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import TermsOfService from "./pages/TermsOfService";




export default function App() {
  return (
    <div >

      <Header />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services/:slug" element={<ServiceRoute />} />
          <Route path="/Platforms/:slug" element={<Platforms />} />
          <Route path="/industries/:slug" element={<Industries />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Resources" element={<Resources />} />

          {/* Get Started */}
          {/* <Route path="/onboarding-guide" element={<OnboardingGuide />} /> */}
          {/* <Route path="/our-approach" element={<OurApproach />} /> */}
          {/* <Route path="/faq" element={<FAQPage />} /> */}

        

         


          {/* <Route path="/why-us/about-us" element={<AboutUs />} /> */}
          <Route path="/why-us/onboarding-guide" element={<OnboardingGuide />} />
          {/* <Route path="/why-us/open-a-ticket" element={<OpenTicket />} /> */}
          <Route path="/why-us/our-approach" element={<OurApproach />} />
          <Route path="/why-us/faq" element={<FAQPage />} />

          <Route path="/why-us/team" element={<Team />} />
          <Route path="/why-us/partners" element={<Partners />} />
          <Route path="/why-us/locations" element={<Locations />} />
          <Route path="/why-us/careers" element={<Careers />} />

          <Route path="/why-us/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/why-us/return-policy" element={<ReturnPolicy />} />
          <Route path="/why-us/terms-of-service" element={<TermsOfService />} />


        </Routes>

        {/* <Home /> */}

      </main>
      <Footer />
    </div>
  );
}