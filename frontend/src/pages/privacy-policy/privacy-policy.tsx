import AppPageLayout from "../../components/layout/page";
import { Col, Container, Row } from "react-bootstrap";
import { PAGES } from "../../appConfig";
import { useEffect, useState } from "react";
import { fetchContent } from "../../network/apis";
import { toast } from "react-toastify";

import "../../assets/styles/page-content.scss";

const ScreenPrivacy = () => {
  const [pageData, setPageData] = useState<string>("");

  const fetchPageData = async () => {
    try {
      const dataHtml = await fetchContent({ content: "privacy" });
      const parser = new DOMParser();
      const html = parser.parseFromString(dataHtml, "text/html");
      setPageData(html.body.innerHTML);
    } catch (e) {
      toast.error("An unexpected error has occurred.");
    }
  };

  useEffect(() => {
    fetchPageData();
  }, []);

  return (
    <>
      <AppPageLayout mainContentClassName="page-content" pageName="privacy">
        <Container>
          <Row>
            <Col>
              <div className="d-flex justify-content-center">
                <h1 data-with-accent="center">{PAGES.PRIVACY.title}</h1>
              </div>
              <div
                className="page-content-html"
                dangerouslySetInnerHTML={{ __html: pageData }}
              ></div>
            </Col>
          </Row>
        </Container>
      </AppPageLayout>
    </>
  );
};
export default ScreenPrivacy;
