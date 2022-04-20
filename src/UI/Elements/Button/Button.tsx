import { Children, FC } from "react";
import "./Button.scss"

type ButtonType = {
    title:string,
    click?:()=>void
}

const Button:FC<ButtonType> = ({title,click}) => {
  return (
    <div onClick={click} className="button">
       {title}
    </div>
  );
};

export default Button;
