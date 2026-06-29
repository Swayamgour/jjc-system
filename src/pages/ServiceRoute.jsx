import { useParams, Link } from "react-router-dom";
// import BasePage from "./BasePage";
import { allServices } from "../utils/servicesData";
import BasePage from "../components/BasePage";

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

    return <BasePage data={data} pageType="service" />;
}