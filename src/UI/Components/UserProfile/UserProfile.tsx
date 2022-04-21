import { FC, useContext, useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { userListSlice } from "../../../Redux/reducers/userListSlice";
import Button from "../../Elements/Button/Button";
import ModulWindow from "../../Elements/ModalWindow/ModulWindow";
import { ModalContext } from "../ContentProvider/ContentProvider";
import "./UserProfile.scss";
import UserProfileForm from "./UseFormFrofile/UserProfileForm";

const UserProfile: FC = () => {

    const modalParamets = useContext(ModalContext)
    const dispatch = useAppDispatch()
    const {userProfile} = useAppSelector(state=>state.userListSlice)
   const {getUserProfile,deleteUser} = userListSlice.actions



  useEffect(()=>{
      dispatch(getUserProfile(modalParamets?.userId || "1"))  
    },[modalParamets?.userId])


  

  return (
    <ModulWindow>
      <div className="UserProfile">
      <Button title="< Back" click={()=>modalParamets?.setModal(false)} />
        <div className="UserProfile__content">
          <div className="UserProfile__characteristic">
            <div className="UserProfile__picture">
              <img
                src={userProfile.picture}
                alt={userProfile.name}
              />
            </div>
            <div className="UserProfile__name">{userProfile.name}</div>
            <div className="UserProfile__born">{userProfile.date[1]}</div>
            <Button click={()=>{
             dispatch(deleteUser(modalParamets?.userId || "1")) 
             modalParamets?.setModal(false)
            }} title="delete" />
          </div>
             <UserProfileForm {...userProfile}/>
        </div>
      </div>
    </ModulWindow>
  );
};

export default UserProfile;
