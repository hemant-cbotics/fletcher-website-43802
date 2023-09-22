import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import AppPageLayout from "../../components/layout/page";
import HomeSection from "./components/homeSection";

import "./home.scss";
import "./home-section-home.scss";
import HomeSectionContentHome from "./home-section-home";

const ScreenHome = () => {
  return (
    <>
      <AppPageLayout>
        <HomeSection name="home">
          <HomeSectionContentHome />
        </HomeSection>
        <HomeSection name="services">
          <p>ONE</p>
          <p>ONE</p>
          <p>ONE</p>
          <p>ONE</p>
          <p>ONE</p>
          <p>ONE</p>
          <p>ONE</p>
          <p>ONE</p>
          <p>ONE</p>
          <p>ONE</p>
        </HomeSection>
        <HomeSection name="about">
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
          <p>TWO</p>
        </HomeSection>
        <HomeSection name="faq">
          <p>THREE</p>
          <p>THREE</p>
          <p>THREE</p>
          <p>THREE</p>
          <p>THREE</p>
          <p>THREE</p>
          <p>THREE</p>
          <p>THREE</p>
          <p>THREE</p>
          <p>THREE</p>
          <p>THREE</p>
          <p>THREE</p>
          <p>THREE</p>
          <p>THREE</p>
          <p>THREE</p>
          <p>THREE</p>
          <p>THREE</p>
          <p>THREE</p>
          <p>THREE</p>
          <p>THREE</p>
          <p>THREE</p>
        </HomeSection>
      </AppPageLayout>
    </>
  );
};
export default ScreenHome;
