

import { useParams, Link } from "react-router-dom";
import ServicePage from "./ServicePage";
import { getServiceData } from "../utils/Platforms";

export default function Platforms() {
    const { slug } = useParams();
    const data = getServiceData(slug);

    console.log(getServiceData)

    console.log(data , slug)

    // console.log(slug , data)

    if (!data) {
        return (
            <div style={{ padding: 120, textAlign: "center" }}>
                <h2>Service not found</h2>
                <Link to="/">Back to home</Link>
            </div>
        );
    }

    return <ServicePage data={data} />;
}

