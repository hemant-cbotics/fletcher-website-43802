import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { animateScroll, scroller } from "react-scroll";
import { APPCONFIG } from "../../appConfig";
import { ALL_GRAPHICS } from "../../assets";
import { ROUTE_NAMES } from "../../utils/navigation/routeNames";
import AppNavBar from "./navBar";

const AppHeader = () => {
  const navigate = useNavigate();

  const toggleMobileNav = () => {
    document.body.classList.toggle('show-mobile-nav')
  }
  const closeMobileNav = () => {
    document.body.classList.remove('show-mobile-nav')
  }
  return (
    <div id="header">
      <Container>
        <Row className="mobile-header d-lg-none">
          <Col className="d-flex align-items-center justify-content-between">
          <a
            className="equal-side clickable"
            onClick={() => {
              animateScroll.scrollToTop();
              navigate(ROUTE_NAMES.homePage);
            }}
            title={`Fletcher`}
          >
            <ALL_GRAPHICS.Logo />
          </a>
          <Button
            className="hamburger"
            variant="secondary"
            onClick={toggleMobileNav}
          ></Button>
          </Col>
        </Row>
        <div className="d-lg-none mobile-drawer-overlay" onClick={toggleMobileNav}></div>
        <Row className="mobile-drawer">
          <Col className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between">
            <a
              className="site-logo equal-side clickable"
              onClick={() => {
                animateScroll.scrollToTop();
                navigate(ROUTE_NAMES.homePage);
              }}
              title={`Fletcher`}
            >
              <ALL_GRAPHICS.Logo />
            </a>
            <div className="flex-lg-grow-1 d-flex justify-content-center has-topnav">
              <AppNavBar
                className="flex-column flex-lg-row"
                wrapperId="topnav"
                smoothLinks={true}
                smoothLinksOnClick={(event: React.MouseEvent<HTMLElement>) => {
                  navigate(ROUTE_NAMES.homePage);
                  const eventTarget = event?.target as HTMLAnchorElement;
                  const eventTargetTitle = eventTarget.getAttribute("title");
                  console.log("event", eventTargetTitle);
                  if (eventTargetTitle) scroller.scrollTo(eventTargetTitle, {});
                  // animateScroll.scrollTo(eventTargetTitle)
                  closeMobileNav()
                }}
                links={APPCONFIG.NAVS.TOPNAV}
              />
            </div>
            <div className="equal-side">
              <Button
                className="btn-contact"
                variant="secondary"
                onClick={() => {
                  animateScroll.scrollToTop();
                  navigate(ROUTE_NAMES.contactPage);
                  closeMobileNav()
                }}
              >
                Contact us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AppHeader;
