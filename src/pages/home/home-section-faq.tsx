import { Accordion, Col, Row } from "react-bootstrap";
import { useAppContext } from "../../contexts/app-context";

import "./home-section-faq.scss";

const HomeSectionContentFaq = () => {
  const { homeData } = useAppContext();
  const sectionData = homeData?.data?.sections?.faq;

  return (
    <>
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>
          <div className="d-flex jusrify-content-center">
            <h2 className="section-heading" data-with-accent="left">
              FAQ
            </h2>
          </div>
          <Accordion defaultActiveKey="0">
            {sectionData?.map((faqItem, i) => (
              <Accordion.Item eventKey={`${i}`} key={i}>
                <Accordion.Header>{faqItem?.question}</Accordion.Header>
                <Accordion.Body>{faqItem?.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </>
  );
};
export default HomeSectionContentFaq;
