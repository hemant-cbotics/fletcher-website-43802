import { Button, Col, Container, Row } from "react-bootstrap";
import { APPCONFIG } from "../../appConfig";
import { ALL_GRAPHICS } from "../../assets";
import AppNavBar from "./navBar";

const AppHeader = () => {
  return (
    <div id="header">
      <Container>
        <Row>
          <Col className="d-flex align-items-center justify-content-between">
            <div className="equal-side">
              <ALL_GRAPHICS.Logo />
            </div>
            <div className="flex-grow-1 d-flex justify-content-center">
              <AppNavBar
                wrapperId="topnav"
                smoothLinks={true}
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
