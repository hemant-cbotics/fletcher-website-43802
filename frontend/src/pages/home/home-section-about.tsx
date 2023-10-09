import { Col, Row } from "react-bootstrap";
import ImageAbout from "../../assets/graphics/png/graphic-about.png";
import MobileAppCtas from "../../components/mobileAppCtas";
import { useAppContext } from "../../contexts/app-context";

import "./home-section-about.scss";

const HomeSectionContentAbout = () => {
  const { homeData } = useAppContext();
  const sectionData = homeData?.data?.sections?.about;

  return (
    <>
      <Row>
        <Col lg={6}>
          <h2 data-with-accent="left">{sectionData?.title}</h2>
          <ul>
            {sectionData?.contents?.map((content, i) => (
              <li key={i}>{content}</li>
            ))}
          </ul>
          <MobileAppCtas />
          <div className="responsive-spacer d-lg-none mt-5 pt-5"></div>
        </Col>
        <Col lg={6} className={`d-flex justify-content-center`}>
          <img src={sectionData?.image || ImageAbout} alt="" />
        </Col>
      </Row>
    </>
  );
};
export default HomeSectionContentAbout;
