import React from "react";
interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: (ID:number) => void;
  radius: string;
  width: string;
  IconH: string;
  IconW: string;
  ID: number;
  icon: any;
}
const Button2: React.FC<Props> = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  IconH,
  IconW,
  ID,
  icon,
}) => {


  return (
    <button
      className="Like"
      onClick={() => onClick(ID)}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,        
      }}
    >
      <img
        style={{
          height:IconH,
          width:IconW,
        }}
        src={icon}
        alt=""
      />
      {children}
    </button>
  );
};

export default Button2;
