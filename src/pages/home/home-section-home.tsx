import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import MobileAppCtas from "../../components/mobileAppCtas";
import { useAppContext } from "../../contexts/app-context";
import { openLinkInNewWindow } from "../../utils/common/common";

import "./home-section-home.scss";

const HomeSectionContentHome = () => {
  const { homeData } = useAppContext();
  const sectionData = homeData?.data?.sections?.top;

  return (
    <Row className="flex-grow-1">
      <Col className="d-flex flex-column justify-content-center">
        <div className="callout">
          Hi, I am <strong>Fletcher</strong>!
        </div>
        <h1>
          {sectionData?.title}
          {/* <em></em> */}
        </h1>
        <p>{sectionData?.content}</p>
        <MobileAppCtas />
      </Col>
      <Col className="d-flex flex-column justify-content-center">
        <div className="iphone">
          <div
            className="phone"
            style={{ backgroundImage: `url(${sectionData?.image})` }}
          ></div>
          <div className="aura"></div>
        </div>
      </Col>
    </Row>
  );
};
export default HomeSectionContentHome;
