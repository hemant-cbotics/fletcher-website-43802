import { Button, Col, Container, Row } from "react-bootstrap";
import { ALL_GRAPHICS } from "../../assets";

const AppHeader = () => {
  return (
    <div id="header">
      <Container>
        <Row>
          <Col className="d-flex align-items-center justify-content-between">
            <div className="equal-side">
              <ALL_GRAPHICS.Logo />
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
