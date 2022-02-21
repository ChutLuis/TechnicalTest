import React, { useState, useEffect } from "react";
import "../Assets/CSS/App.css";
import logo from "../Assets/Images/superheros-logo.png";
import { CSSProperties } from "react";
import { FixedSizeList } from "react-window";
import { CallAPI, CallLiked } from "../Helpers/ApiCall";
import SuperHeroesList from "./CustomWindow";
import LikedSuperHeroesList from "./LikedWindow";
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
function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [Movies, setMovies] = React.useState(Array<ISuperHeroData>());
  const [LikedMovies, setLikedMovies] = React.useState(Array<ISuperHeroData>());
  const toggles = () => setIsOpen(!isOpen);
  const addLiked = (callMovie: any) => setLikedMovies(callMovie);
  const SetM = (callMovie: any) => setMovies(callMovie);
  // Save
  // var datas:number[] = [];
  // localStorage["likedItems"] = JSON.stringify(datas);
  // let pp: any;
  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    let data = JSON.parse(localStorage["likedItems"]);
    CallAPI().then((response) => {
      // `response` is of type `AxiosResponse<ServerData>`
      let filteredList = response.filter(function (el) {
        return !(data.filter((e: any) => e === el.id).length > 0);
      });
      SetM(filteredList);
      // `data` is of type ServerData, correctly inferred
    });
    CallLiked(data).then((Response) => {
      addLiked(Response);
    });
  }, []);

  const OnClick = (ID: number) => {
    SetM(Movies.filter((item) => item.id !== ID));
    let data = JSON.parse(localStorage["likedItems"]);
    data.push(ID);
    localStorage["likedItems"] = JSON.stringify(data);
    CallLiked(data).then((Response) => {
      addLiked(Response);
    });
    CallAPI().then((response) => {
      // `response` is of type `AxiosResponse<ServerData>`
      let filteredList = response.filter(function (el) {
        return !(data.filter((e: any) => e === el.id).length > 0);
      });
      SetM(filteredList);
      // `data` is of type ServerData, correctly inferred
    });
  };

  const OnClick2 = (ID: number) => {
    console.log(ID);
    let data = JSON.parse(localStorage["likedItems"]);
    const index = data.indexOf(ID);
    if (index > -1) {
      data.splice(index, 1); // 2nd parameter means remove one item only
    }
    CallLiked(data).then((Response) => {
      addLiked(Response);
    });
    CallAPI().then((response) => {
      // `response` is of type `AxiosResponse<ServerData>`
      let filteredList = response.filter(function (el) {
        return !(data.filter((e: any) => e === el.id).length > 0);
      });
      SetM(filteredList);
      // `data` is of type ServerData, correctly inferred
    });
    localStorage["likedItems"] = JSON.stringify(data);
  };

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
              <LikedSuperHeroesList Movies={LikedMovies} onClick={OnClick2} />
            </Collapse>
          </div>
        </Row>
        <Row>
          <SuperHeroesList Movies={Movies} onClick={(e) => OnClick(e)} />
        </Row>
      </div>
    </>
  );
}

export default App;
