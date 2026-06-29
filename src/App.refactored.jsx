// src/App.jsx
// Root application component — sets up global layout and routing.
// Header and Footer are rendered once here (outside Routes) so they persist
// across page navigations without remounting.

import Header   from './components/Header';
import Footer   from './components/Footer';
import Home     from './pages/Home';
import ContactUs from './pages/ContactUs';    // ← now a folder-based component
import AboutUs  from './pages/AboutUs';
import Resources from './pages/Resources';
import ServiceRoute from './pages/ServiceRoute';
import Platforms from './pages/Platforms';
import Industries from './pages/Industries';
import { Route, Routes } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
      <Header />
      <Routes>
        <Route path="/"                  element={<Home />} />
        <Route path="/Services/:slug"    element={<ServiceRoute />} />
        <Route path="/Platforms/:slug"   element={<Platforms />} />
        <Route path="/industries/:slug"  element={<Industries />} />
        <Route path="/About"             element={<AboutUs />} />
        <Route path="/Contact"           element={<ContactUs />} />
        <Route path="/Resources"         element={<Resources />} />
      </Routes>
      <Footer />
    </div>
  );
}
