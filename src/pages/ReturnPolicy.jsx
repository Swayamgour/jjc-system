import LegalPage from "../components/LegalPage";
import { returnPolicyData } from "../utils/legalPagesData";

export default function ReturnPolicy() {
  return <LegalPage data={returnPolicyData} key={'slug1'} />;
}
