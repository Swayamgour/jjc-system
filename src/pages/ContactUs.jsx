import { Link } from "react-router-dom";
// import BasePage from "./BasePage";
import { contactUsData } from "../utils/servicesData";
import BasePage from "../components/BasePage";


export default function ContactUs() {
  if (!contactUsData) {
    return (
      <div style={{ padding: 120, textAlign: "center" }}>
        <h2>Page not found</h2>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  return <BasePage data={contactUsData} pageType="contact" />;
}