import { useParams, Link } from "react-router-dom";
import BasePage from "../components/BasePage";
import { getIndustryData } from "../utils/IndustryData";

export default function Industries() {
    const { slug } = useParams();
    const data = getIndustryData(slug);

    if (!data) {
        return (
            <div style={{ padding: 120, textAlign: "center" }}>
                <h2>Industry not found</h2>
                <Link to="/">Back to home</Link>
            </div>
        );
    }

    return <BasePage data={data} pageType="industry" />;
}