import AppPageLayout from "../../components/layout/page";

import "../../assets/styles/page-content.scss";
import { Col, Container, Row } from "react-bootstrap";
import { PAGES } from "../../appConfig";

const ScreenTerms = () => {
  return (
    <>
      <AppPageLayout mainContentClassName="page-content" pageName="terms">
        <Container>
          <Row>
            <Col>
              <div className="d-flex justify-content-center">
                <h1 data-with-accent="center">{PAGES.TERMS.title}</h1>
              </div>
              <p>
                These Terms and Conditions ("Terms") govern your use of this
                website and any associated services provided by [Your
                Company/Organization Name] ("we," "us," or "our"). By accessing
                or using our website, you agree to comply with these Terms. If
                you do not agree with these Terms, please do not use this
                website.
              </p>
              <h2>Use of the Website</h2>
              <p>
                These Terms and Conditions ("Terms") govern your use of this
                website and any associated services provided by [Your
                Company/Organization Name] ("we," "us," or "our"). By accessing
                or using our website, you agree to comply with these Terms. If
                you do not agree with these Terms, please do not use this
                website.
              </p>
            </Col>
          </Row>
        </Container>
      </AppPageLayout>
    </>
  );
};
export default ScreenTerms;
