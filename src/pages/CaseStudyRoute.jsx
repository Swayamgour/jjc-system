import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import CaseStudyDetailV2 from "./CaseStudyDetailV2";
import mapCaseStudyData from "../utils/mapCaseStudyData";
import sampleCaseStudies from "../utils/sampleCaseStudies";






export default function CaseStudyRoute() {
    const { slug } = useParams();

    console.log(slug)
    const row = sampleCaseStudies[1]; // ya [1] capability wali test karne ke liye
    const data = mapCaseStudyData(row, row.sourceType, row.parent);

    // if (isLoading) {
    //     return <Loader />;
    // }

    if (!row) {
        return (
            <div style={{ padding: 120, textAlign: "center" }}>
                <h2>Case study not found</h2>
                <Link to="/client-success">Back to Client Success</Link>
            </div>
        );
    }

    const sourceType = row?.sourceType || "industry";
    const parent = row?.parent || {};


    return <CaseStudyDetailV2 data={data} key={slug} />;
}
