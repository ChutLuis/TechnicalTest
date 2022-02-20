import React from "react";
import "../Assets/CSS/App.css";
import logo from "../Assets/Images/superheros-logo.png";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Collapse,
  Row,
  UncontrolledAccordion,
  Accordion,
  AccordionItem,
  AccordionHeader,
} from "reactstrap";
function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggles = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="Content">
        <Row>
          <div className="imgHeader">
            <img src={logo} alt="" />
          </div>
        </Row>
        <Row>
          <Button id="buttonLikes" onClick={toggles}>
            Elegir Fecha
          </Button>
          <Collapse isOpen={isOpen}>
            <Card>
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </CardBody>
            </Card>
          </Collapse>
        </Row>
        <Row></Row>
      </div>
    </>
  );
}

export default App;
