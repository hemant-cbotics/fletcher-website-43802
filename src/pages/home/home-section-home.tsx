import { Button, ButtonGroup, Col, Row } from "react-bootstrap";

import "./home-section-home.scss";

const HomeSectionContentHome = () => {
  return (
    <Row className="flex-grow-1">
      <Col className="d-flex flex-column justify-content-center">
        <div className="callout">
          Hi, I am <strong>Fletcher</strong>!
        </div>
        <h1>
          I am your personal AI healthcare assistant.
          {/* <em></em> */}
        </h1>
        <p>Now you can have medical smarts in your pocket at all times.</p>
        <ButtonGroup className="ctas" aria-label="Get the Fletcher mobile app">
          <Button className="apple" aria-label="Go to the App Store"></Button>
          <Button className="google" aria-label="Go to the Play Store"></Button>
        </ButtonGroup>
      </Col>
      <Col className="d-flex flex-column justify-content-center">
        <div className="iphone">
          <div className="aura"></div>
        </div>
      </Col>
    </Row>
  );
};
export default HomeSectionContentHome;
