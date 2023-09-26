import { Button, ButtonGroup, Card, Col, Row } from "react-bootstrap";
import { useAppContext } from "../../contexts/app-context";

import "./home-section-services.scss";

const HomeSectionContentServices = () => {
  const { homeData } = useAppContext();
  const sectionData = homeData?.data?.sections?.service;

  return (
    <>
      <Row>
        <Col lg={3}>
          <h2 data-with-accent="left">{sectionData?.title}</h2>
        </Col>
        <Col lg={9}>
          <p className="aside-h2">{sectionData?.content}</p>
        </Col>
      </Row>
      <Row className="cards-wrap">
        {[sectionData?.block1, sectionData?.block2, sectionData?.block3].map(
          (cardData, i) => (
            <Col key={i}>
              <Card bg="dark" text="white">
                <Card.Body>
                  <div className="card-icon"></div>
                  <Card.Title>{cardData?.title}</Card.Title>
                  <Card.Text>{cardData?.content}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>
    </>
  );
};
export default HomeSectionContentServices;
