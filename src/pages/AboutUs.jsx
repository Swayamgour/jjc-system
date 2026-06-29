import { Link } from "react-router-dom";
// import BasePage from "./BasePage";
import { aboutPageData } from "../utils/servicesData";
import BasePage from "../components/BasePage";

export default function AboutUs() {
  if (!aboutPageData) {
    return (
      <div style={{ padding: 120, textAlign: "center" }}>
        <h2>Page not found</h2>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  return <BasePage data={aboutPageData} pageType="about" />;
}