import BasePage from "../components/BasePage";
import { onboardingGuideData } from "../utils/footerPagesData";

export default function OnboardingGuide() {
  return <BasePage data={onboardingGuideData} pageType="onboarding" key={'slug'} />;
}
