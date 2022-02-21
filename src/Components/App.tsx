import React, { useState, useEffect } from "react";
import "../Assets/CSS/App.css";
import logo from "../Assets/Images/superheros-logo.png";
import { CSSProperties } from "react";
import { FixedSizeList } from "react-window";
import CallAPI from "../Helpers/ApiCall";
import Button2 from "./CustomButton";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Collapse,
  Row,
  Col,
  CardImg,
  CardGroup,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import ISuperHeroData from "../Types/SuperHero";
function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [Movies, setMovies] = React.useState(Array<ISuperHeroData>());
  const toggles = () => setIsOpen(!isOpen);
  const SetM = (callMovie: any) => setMovies(callMovie);
  const Cards: JSX.Element[] = [];
  let pp: any;
  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    CallAPI().then((response) => {
      // `response` is of type `AxiosResponse<ServerData>`
      SetM(response);
      // `data` is of type ServerData, correctly inferred
    });
  }, []);
  console.log(Movies);

  if (Movies.length > 0) {
    for (let j = 0; j < Movies.length; j++) {
      const newRow = [];
      if (Movies.length - j >= 4) {
        for (let i = 0; i < 4; i++) {
          newRow.push(
            <Col>
              <div className="CardsContent">
                <Card className="CardsBody">
                  <CardImg
                    top
                    width="10%"
                    src={Movies[j + i].images.md}
                    alt="Card image cap"
                  />
                  <Button2
                      border="none"
                      color="#6A4DBC"
                      height="50px"
                      onClick={() =>
                        console.log("You clicked on the pink circle!")
                      }
                      radius="50%"
                      width="50px"
                      IconH="25px"
                      IconW="25px"
                    />
                  <CardBody>
                    <CardTitle tag="h5">
                      {Movies[j + i].name}
                    </CardTitle>
                    <CardSubtitle
                      tag="h6"
                    >{"Real Name: " + Movies[j + i].biography.fullName}</CardSubtitle>
                    XD                    
                  </CardBody>
                </Card>
              </div>
            </Col>
          );
        }
      } else {
        for (let i = j; i < Movies.length; i++) {
          newRow.push(
            <Col>
              <div className="CardsContent">
                <Card className="CardsBody">
                  <CardImg
                    top
                    width="10%"
                    src={Movies[i].images.md}
                    alt="Card image cap"
                  />
                  <CardBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                    <button className="Like"> Tocame</button>
                  </CardBody>
                </Card>
              </div>
            </Col>
          );
        }
      }
      j += 4;
      Cards.push(<Row>{newRow}</Row>);
    }
  }
  const Rowe = ({ index, style }: { index: number; style: CSSProperties }) => (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      {Cards}
    </div>
  );
  return (
    <>
      <div className="Content">
        <Row>
          <div className="imgHeader">
            <img src={logo} alt="" />
          </div>
        </Row>
        <Row>
          <div className="Likes">
            <Button id="buttonLikes" onClick={toggles}>
              Liked
            </Button>
            <Collapse isOpen={isOpen}>
              <Row>
                <Col>
                  <Card>
                    <CardBody>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                      <button className="Like"> Tocame</button>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <CardBody>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <CardBody>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <CardBody>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Collapse>
          </div>
        </Row>
        <Row>
          <FixedSizeList
            className="Prueba"
            height={500}
            itemCount={1}
            itemSize={35}
            width="90%"
          >
            {Rowe}
          </FixedSizeList>
        </Row>
      </div>
    </>
  );
}

export default App;
