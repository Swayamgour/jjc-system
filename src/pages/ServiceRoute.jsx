// ============================================================
// EXAMPLE: wiring ServicePage into a dynamic route.
// Install: npm install react-router-dom framer-motion
//
// This lets ONE route render ANY service page based on the
// URL slug — /services/microsoft-365, /services/dynamics-365,
// /services/power-platform, /services/power-bi, /services/sharepoint
// — by looking up the matching data object.
// ============================================================
import { useParams, Link } from "react-router-dom";
import ServicePage from "./ServicePage";
import { allServices } from "../utils/servicesData";

export default function ServiceRoute() {
    const { slug } = useParams();
    const data = allServices[slug];

    if (!data) {
        return (
            <div style={{ padding: 120, textAlign: "center" }}>
                <h2>Service not found</h2>
                <Link to="/">Back to home</Link>
            </div>
        );
    }

    return <ServicePage data={data} />;
}

// In your router setup:
//
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ServiceRoute from "./ServiceRoute";
//
// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/services/:slug" element={<ServiceRoute />} />
//   </Routes>
// </BrowserRouter>
//
// Then link to any service page with:
// <Link to="/services/dynamics-365">Dynamics 365</Link>