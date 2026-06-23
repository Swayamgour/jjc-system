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




export default function App() {
  return (
    <div style={{ fontFamily: "Inter, -apple-system, sans-serif",  overflowX: "hidden" }}>

      <Header />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services/:slug" element={<ServiceRoute />} />
        </Routes>

        {/* <Home /> */}

      </main>
      <Footer />
    </div>
  );
}