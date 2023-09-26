import { useEffect, useState } from "react";
import AppPageLayout from "../../components/layout/page";
import { fetchHomeContent } from "../../network/apis";
import HomeSection from "./components/homeSection";
import HomeSectionContentAbout from "./home-section-about";
import HomeSectionContentFaq from "./home-section-faq";
import HomeSectionContentHome from "./home-section-home";
import HomeSectionContentServices from "./home-section-services";

import "./home.scss";

const ScreenHome = () => {

  const [homeData, setHomeData] = useState()

  const fetchHomeData = async () => {
    const data = await fetchHomeContent()
    setHomeData(data)
  }

  useEffect(() => {
    fetchHomeData()
  }, [])

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
