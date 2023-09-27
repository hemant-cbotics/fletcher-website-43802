import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { animateScroll, scroller } from "react-scroll";
import { APPCONFIG } from "../../appConfig";
import { ALL_GRAPHICS } from "../../assets";
import { ROUTE_NAMES } from "../../utils/navigation/routeNames";
import AppNavBar from "./navBar";

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <div id="header">
      <Container>
        <Row>
          <Col className="d-flex align-items-center justify-content-between">
            <a
              className="equal-side clickable"
              onClick={() => {
                navigate(ROUTE_NAMES.homePage);
              }}
              title={`Fletcher`}
            >
              <ALL_GRAPHICS.Logo />
            </a>
            <div className="flex-grow-1 d-flex justify-content-center">
              <AppNavBar
                wrapperId="topnav"
                smoothLinks={true}
                smoothLinksOnClick={(event: React.MouseEvent<HTMLElement>) => {
                  navigate(ROUTE_NAMES.homePage);
                  const eventTarget = event?.target as HTMLAnchorElement;
                  const eventTargetTitle = eventTarget.getAttribute("title");
                  console.log("event", eventTargetTitle);
                  if (eventTargetTitle) scroller.scrollTo(eventTargetTitle, {});
                  // animateScroll.scrollTo(eventTargetTitle)
                }}
                links={APPCONFIG.NAVS.TOPNAV}
              />
            </div>
            <div className="equal-side">
              <Button variant="secondary">Contact us</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AppHeader;
