import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { APPCONFIG } from "../../appConfig";
import { ALL_GRAPHICS } from "../../assets";
import { ROUTE_NAMES } from "../../utils/navigation/routeNames";
import AppNavBar from "./navBar";

const AppFooter = () => {
  const navigate = useNavigate();

  return (
    <div id="footer">
      <Container>
        <Row>
          <Col className="d-flex align-items-center justify-content-between flex-column flex-lg-row">
            <a
              className="equal-side clickable"
              onClick={() => {
                animateScroll.scrollToTop()
                navigate(ROUTE_NAMES.homePage);
              }}
              title={`Fletcher`}
            >
              <ALL_GRAPHICS.Logo />
            </a>
            <div className="flex-grow-1 d-flex justify-content-center mt-5 mt-lg-0">
              <AppNavBar
                wrapperId="bottomnav"
                links={APPCONFIG.NAVS.BOTTOMNAV}
              />
            </div>
            <div className="equal-side">
              <div className="copyright">&copy; 2023 Fletcher. All Rights Reserved.</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AppFooter;
