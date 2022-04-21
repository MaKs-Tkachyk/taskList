import { FC, useContext } from "react";
import { userProfile } from "../../../Modules/userProfile";
import Button from "../../Elements/Button/Button";
import { ModalContext } from "../ContentProvider/ContentProvider";
import "./ListOfUsers.scss"





const User: FC<userProfile> = ({email,name,city,street,picture,date,id}) => {


  const modalParamets = useContext(ModalContext);



  return (
        <div className="list__user user">
          <div className="user__information">
            <div className="user__picture">
                <img src={picture} alt={name} />
            </div>
            <div className="user__characteristic">
              <div className="user__name">{name}</div>
              <div className="user__born">{date[1]}</div>
              <div className="user__place">{`${city}, ${street}`}</div>
              <div className="user__email">{email}</div>
            </div>
          </div>
          <Button click={()=>{
               modalParamets?.setModal(true)
               modalParamets?.setUserId(id)
            }} title="Edit"/>
        </div>
  );
};

export default User;
