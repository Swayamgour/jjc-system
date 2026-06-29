import { useParams, Link } from "react-router-dom";
import ServicePage from "./ServicePage";
import { getIndustryData } from "../utils/IndustryData";

export default function Industries() {
    const { slug } = useParams();
    const data = getIndustryData(slug);

    console.log(data , slug)

    if (!data) {
        return (
            <div style={{ padding: 120, textAlign: "center" }}>
                <h2>Industry not found</h2>
                <Link to="/">Back to home</Link>
            </div>
        );
    }

    return <ServicePage data={data} />;
}