import { APPCONFIG } from "../../appConfig";
import AppPageLayout from "../../components/layout/page";
import HomeSection from "./components/homeSection";
import HomeSectionContentAbout from "./home-section-about";
import HomeSectionContentFaq from "./home-section-faq";
import HomeSectionContentHome from "./home-section-home";
import HomeSectionContentServices from "./home-section-services";

import "./home.scss";

const ScreenHome = () => {
  return (
    <>
      <AppPageLayout pageName="home">
        {APPCONFIG.NAVS.TOPNAV.map((navItem, i) => (
          <HomeSection name={navItem.toLowerCase()} key={i}>
            {navItem === "Home" && <HomeSectionContentHome />}
            {navItem === "Services" && <HomeSectionContentServices />}
            {navItem === "About" && <HomeSectionContentAbout />}
            {navItem === "FAQ" && <HomeSectionContentFaq />}
          </HomeSection>
        ))}
      </AppPageLayout>
    </>
  );
};
export default ScreenHome;
