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
          <div className="responsive-spacer d-lg-none mt-5"></div>
          <p className="aside-h2">{sectionData?.content}</p>
        </Col>
      </Row>
      <Row className="cards-wrap">
        {[sectionData?.block1, sectionData?.block2, sectionData?.block3].map(
          (cardData, i) => (
            <Col key={i} sm={12} lg={4} className={`d-flex flex-column`}>
              {i > 0 && <div className="responsive-spacer d-lg-none mt-4"></div>}
              <Card bg="dark" text="white" className="flex-grow-1">
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
