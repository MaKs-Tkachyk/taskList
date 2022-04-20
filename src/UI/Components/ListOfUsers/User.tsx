import { FC, useContext } from "react";
import Button from "../../Elements/Button/Button";
import { ModalContext } from "../ContentProvider/ContentProvider";
import "./ListOfUsers.scss"

const User: FC = () => {


  const modalParamets = useContext(ModalContext);



  return (
        <div className="list__user user">
          <div className="user__information">
            <div className="user__picture">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1" alt="" />
            </div>
            <div className="user__characteristic">
              <div className="user__name">John Doe</div>
              <div className="user__born">15 Oktober 1990</div>
              <div className="user__place">Kyiv, Khreschatyk 123</div>
              <div className="user__email">john@doe.com</div>
            </div>
          </div>
          <Button click={()=>modalParamets?.setModal(true)} title="Edit"/>
        </div>
  );
};

export default User;
