import LegalPage from "../components/LegalPage";
import { privacyPolicyData } from "../utils/legalPagesData";

export default function PrivacyPolicy() {
  return <LegalPage data={privacyPolicyData}  key={'slug1'} />;
}
