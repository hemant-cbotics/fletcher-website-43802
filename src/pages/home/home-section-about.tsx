import { Button, ButtonGroup, Card, Col, Row } from "react-bootstrap";
import ImageAbout from "../../assets/graphics/png/graphic-about.png"

import "./home-section-about.scss";

const HomeSectionContentAbout = () => {
  return (
    <>
      <Row>
        <Col lg={6}>
          <h2 data-with-accent="left">About Fletcher is simply dummy text of the printing and</h2>
          <ul>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
          </ul>
          <ButtonGroup className="ctas" aria-label="Get the Fletcher mobile app">
            <Button className="apple" aria-label="Go to the App Store"></Button>
            <Button className="google" aria-label="Go to the Play Store"></Button>
          </ButtonGroup>
        </Col>
        <Col lg={6}>
          <img src={ImageAbout} alt="" />
        </Col>
      </Row>
    </>
  );
};
export default HomeSectionContentAbout;
