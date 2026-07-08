import { useParams, Link } from "react-router-dom";
// import BasePage from "./BasePage";
import { getServiceData } from "../utils/Platforms";
import BasePage from "../components/BasePage";
import { useGetPlatformBySlugQuery } from "../redux/api";
import Loader from "../components/Loader";

export default function Platforms() {
    const { slug } = useParams();
    const { data: platformData, isLoading } = useGetPlatformBySlugQuery(slug);
    const data = platformData?.data; // Access the first element of the data array

    // console.log("Platform data:", platformData?.data); // Log the platform data

    if (isLoading) {
        return (
           <Loader />
        )
    }

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