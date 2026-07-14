import LegalPage from "../components/LegalPage";
import { termsOfServiceData } from "../utils/legalPagesData";

export default function TermsOfService() {
  return <LegalPage data={termsOfServiceData}  key={'slug2'} />;
}
