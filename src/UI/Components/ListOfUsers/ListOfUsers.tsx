import { Spin } from "antd";
import { FC } from "react";
import { useAppSelector } from "../../../hooks/redux";
import "./ListOfUsers.scss";
import ListPagination from "./ListPagination";
import User from "./User";

const ListOfUsers: FC = () => {
  
  const {userListFilter,isLoading} = useAppSelector(state=>state.userListSlice)

  return (
    <div className="list">
      <div className="list__title title">List of users</div>
      <div className="list__users">
       {isLoading ? <Spin />:userListFilter.map(el=> <User key={el.id} {...el}/>)}
      </div>
      <ListPagination/>
    </div>
  );
};

export default ListOfUsers;


