import { FC, useContext } from "react";
import Button from "../../Elements/Button/Button";
import ModulWindow from "../../Elements/ModalWindow/ModulWindow";
import { ModalContext } from "../ContentProvider/ContentProvider";
import "./UserProfile.scss";
import UserProfileForm from "./UserProfileForm";

const UserProfile: FC = () => {

    const modalParamets = useContext(ModalContext)

  return (
    <ModulWindow>
      <div className="UserProfile">
      <Button title="< Back" click={()=>modalParamets?.setModal(false)} />
        <div className="UserProfile__content">
          <div className="UserProfile__characteristic">
            <div className="UserProfile__picture">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1"
                alt=""
              />
            </div>
            <div className="UserProfile__name">John Doe</div>
            <div className="UserProfile__born">15 Oktober 1990</div>
            <Button title="delete" />
          </div>
          <UserProfileForm />
        </div>
      </div>
    </ModulWindow>
  );
};

export default UserProfile;
