import { Button, ButtonGroup, Card, Col, Row } from "react-bootstrap";

import "./home-section-services.scss";

const HomeSectionContentServices = () => {
  return (
    <>
      <Row>
        <Col lg={3}>
          <h2 data-with-accent="left">Services</h2>
        </Col>
        <Col lg={9}>
          <p className="aside-h2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </Col>
      </Row>
      <Row className="cards-wrap">
        {[0, 1, 2].map((_, i) => (
          <Col key={i}>
            <Card bg="dark" text="white">
              <Card.Body>
                <div className="card-icon"></div>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default HomeSectionContentServices;
