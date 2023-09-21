import { Col, Container, Row } from "react-bootstrap";
import { ALL_GRAPHICS } from "../../assets";

const AppFooter = () => {
  return (
    <div id="footer">
      <Container>
        <Row>
          <Col><ALL_GRAPHICS.Logo /></Col>
        </Row>
      </Container>
    </div>
  );
};
export default AppFooter;
