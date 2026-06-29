import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { Icons, megaMenus } from "./utils/data";
import Header from "./components/Header";
import './App.css'
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import ServicePage from "./pages/ServicePage";
import ServiceRoute from "./pages/ServiceRoute";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Resources from "./pages/Resources";
import Platforms from "./pages/Platforms";
import Industries from "./pages/Industries";




export default function App() {
  return (
    <div style={{ fontFamily: "Inter, -apple-system, sans-serif" }}>

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
        </Routes>

        {/* <Home /> */}

      </main>
      <Footer />
    </div>
  );
}