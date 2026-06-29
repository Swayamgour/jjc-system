import { useParams, Link } from "react-router-dom";
// import BasePage from "./BasePage";
import { getServiceData } from "../utils/Platforms";
import BasePage from "../components/BasePage";

export default function Platforms() {
    const { slug } = useParams();
    const data = getServiceData(slug);

    if (!data) {
        return (
            <div style={{ padding: 120, textAlign: "center" }}>
                <h2>Platform not found</h2>
                <Link to="/">Back to home</Link>
            </div>
        );
    }

    return <BasePage data={data} pageType="platform" />;
}