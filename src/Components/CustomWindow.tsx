import React from "react";
import { CSSProperties } from "react";
import { FixedSizeList } from "react-window";
import SuperHeroesCards from "./CustomCards";
import ISuperHeroData from "../Types/SuperHero";
interface Props {
  Movies: Array<ISuperHeroData>;
  onClick: (ID: number) => void | any;
}
const SuperHeroesList: React.FC<Props> = ({ Movies, onClick }) => {
  const Rowe = ({ index, style }: { index: number; style: CSSProperties }) => (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      <SuperHeroesCards Movies={Movies} onClick={onClick} />
    </div>
  );
  return (
    <>
      <FixedSizeList
        className="Prueba"
        height={500}
        itemCount={1}
        itemSize={35}
        width="90%"
      >
        {Rowe}
      </FixedSizeList>
    </>
  );
};
export default SuperHeroesList;
