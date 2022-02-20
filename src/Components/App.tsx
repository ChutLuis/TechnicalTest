import React from "react";
import "../Assets/CSS/App.css";
import logo from "../Assets/Images/superheros-logo.png";
// reactstrap components
import { Button, Card, CardBody, Collapse, Row, Col } from "reactstrap";
function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="Content">
      <Row>
        <Col g="3" md="6">
        <Button
              block
              className="btn-sm mt-3"
              color="info"
              size="lg"
              onClick={toggle}
              style={{ marginBottom: "1rem" }}
            >
              Elegir Fecha
            </Button>
            <Collapse isOpen={isOpen}>
              <div id="DatePickerDiv">
                Pog               
              </div>
            </Collapse>
        </Col>
      </Row>
      </div>
    </>
  );
}

export default App;
