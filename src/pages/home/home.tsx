import AppPageLayout from "../../components/layout/page";
import HomeSection from "./components/homeSection";

import "./home.scss";

const ScreenHome = () => {
  return (
    <>
      <AppPageLayout>
        <HomeSection name="hero">
          <p>This is a p tag</p>
        </HomeSection>
      </AppPageLayout>
    </>
  );
};
export default ScreenHome;
