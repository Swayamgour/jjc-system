import BasePage from "../components/BasePage";
import { locationsPageData } from "../utils/footerPagesData";

export default function Locations() {
  return <BasePage data={locationsPageData} pageType="locations"  key={'slug4'} />;
}
