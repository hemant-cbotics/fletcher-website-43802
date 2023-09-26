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
        <HomeSection name="home">
          <HomeSectionContentHome />
        </HomeSection>
        <HomeSection name="services">
          <HomeSectionContentServices />
        </HomeSection>
        <HomeSection name="about">
          <HomeSectionContentAbout />
        </HomeSection>
        <HomeSection name="faq">
          <HomeSectionContentFaq />
        </HomeSection>
      </AppPageLayout>
    </>
  );
};
export default ScreenHome;
