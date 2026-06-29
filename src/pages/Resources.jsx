import { Link } from "react-router-dom";
import BasePage from "../components/BasePage";
import { resourcesData } from "../utils/servicesData";

export default function Resources() {
    if (!resourcesData) {
        return (
            <div style={{ padding: 120, textAlign: "center" }}>
                <h2>Page not found</h2>
                <Link to="/">Back to home</Link>
            </div>
        );
    }

    return <BasePage data={resourcesData} pageType="resources" />;
}