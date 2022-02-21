import React, { useState, useEffect } from "react";
import { CSSProperties } from "react";
import { FixedSizeList } from "react-window";
import {CallAPI} from "../Helpers/ApiCall";
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
} from "reactstrap";
import ISuperHeroData from "../Types/SuperHero";
interface Props {
    Movies: Array<ISuperHeroData>;
    onClick: (ID:number) => void|any;
  }
  const LikedSuperHeroesList: React.FC<Props> = ({
    Movies,
    onClick,
  }) => {
    const Cards: JSX.Element[] = [];
    if (Movies.length > 0) {
        for (let j = 0; j < Movies.length; j++) {
          const newRow = [];
          if (Movies.length - j >= 4) {
            for (let i = 0; i < 4; i++) {
              newRow.push(
                <Col>
                  <div className="CardsContent">
                    <Card className="CardsBody" outline>
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
                          radius="50%"
                          width="50px"
                          IconH="25px"
                          IconW="25px"
                          onClick={(e) => onClick(e)}
                          ID={Movies[j + i].id}
                        />
                      <CardBody>
                        <div className="Legend">
                        <h5>
                        {Movies[j + i].name}
                          </h5> 
                        {"Real Name: " + Movies[j + i].biography.fullName}
                          </div>               
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
                    <Card className="CardsBody" outline>
                      <CardImg
                        top
                        width="10%"
                        src={Movies[i].images.md}
                        alt="Card image cap"
                      />
                      <Button2
                          border="none"
                          color="#6A4DBC"
                          height="50px"                      
                          radius="50%"
                          width="50px"
                          IconH="25px"
                          IconW="25px"
                          onClick={(e) => onClick(e)}
                          ID={Movies[i].id}
                        />
                      <CardBody>
                        <div className="Legend">
                        <h5>
                        {Movies[i].name}
                          </h5> 
                        {"Real Name: " + Movies[i].biography.fullName}
                          </div>               
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
    return (
        <>
        {Cards}
        </>
    );
  };
export default LikedSuperHeroesList;