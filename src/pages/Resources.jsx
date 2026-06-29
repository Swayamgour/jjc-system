import React from 'react'
import { useParams, Link } from "react-router-dom";
import ServicePage from "./ServicePage";
import { aboutPageData, allServices, contactUsData , resourcesData } from "../utils/servicesData";


function Resources() {

    // console.log(slug , data)


    if (!resourcesData) {
        return (
            <div style={{ padding: 120, textAlign: "center" }}>
                <h2>Service not found</h2>
                <Link to="/">Back to home</Link>
            </div>
        );
    }

    return <ServicePage data={resourcesData} />;
}

export default Resources







