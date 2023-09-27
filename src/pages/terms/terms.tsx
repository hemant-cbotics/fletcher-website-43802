import AppPageLayout from "../../components/layout/page";

import "../../assets/styles/page-content.scss";
import { Col, Container, Row } from "react-bootstrap";
import { PAGES } from "../../appConfig";
import { useEffect, useState } from "react";
import { fetchContent } from "../../network/apis";
import { toast } from "react-toastify";

const ScreenTerms = () => {
  const [pageData, setPageData] = useState<string>("");

  const fetchPageData = async () => {
    try {
      const dataHtml = await fetchContent({ content: "terms" });
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
      <AppPageLayout mainContentClassName="page-content" pageName="terms">
        <Container>
          <Row>
            <Col>
              <div className="d-flex justify-content-center">
                <h1 data-with-accent="center">{PAGES.TERMS.title}</h1>
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
export default ScreenTerms;
