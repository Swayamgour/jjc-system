
import { useParams, Link } from "react-router-dom";
import ServicePage from "./ServicePage";
import { allServices, contactUsData } from "../utils/servicesData";


export default function ServiceRoute() {


  // console.log(slug , data)
  

  if (!contactUsData) {
    return (
      <div style={{ padding: 120, textAlign: "center" }}>
        <h2>Service not found</h2>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  return <ServicePage data={contactUsData} />;
}

