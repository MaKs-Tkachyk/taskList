import { FC } from "react";
import "./ListOfUsers.scss";
import ListPagination from "./ListPagination";
import User from "./User";

const ListOfUsers: FC = () => {
  

  return (
    <div className="list">
      <div className="list__title title">List of users</div>
      <div className="list__users">
        <User />
        <User />
        <User />
      </div>
      <ListPagination/>
    </div>
  );
};

export default ListOfUsers;


