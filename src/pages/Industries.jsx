import { useParams, Link } from "react-router-dom";
import BasePage from "../components/BasePage";
import { getIndustryData } from "../utils/IndustryData";
import { useGetIndustryBySlugQuery } from "../redux/api";
import Loader from "../components/Loader";

export default function Industries() {
    const { slug } = useParams();
    const { data: industryData, isLoading } = useGetIndustryBySlugQuery(slug);
    // const data = getIndustryData(slug);2
    const data = industryData?.data; // Access the first element of the data array

    if (isLoading) {
        return <Loader />;
    }

    if (!data) {
        return (
            <div style={{ padding: 120, textAlign: "center" }}>
                <h2>Industry not found</h2>
                <Link to="/">Back to home</Link>
            </div>
        );
    }

    return <BasePage data={data} pageType="industry" key={slug} />;
}