import React from "react";
import "./App.scss";
import { ContentProvider } from "./UI/Components/ContentProvider/ContentProvider";
import Filter from "./UI/Components/Filter/Filter";
import ListOfUsers from "./UI/Components/ListOfUsers/ListOfUsers";
import UserProfile from "./UI/Components/UserProfile/UserProfile";


function App() {
  //  let dste = new Date( "1993-07-20T09:44:18.674Z").toLocaleDateString().split(".");

  // console.log(dste)
  return (
    <ContentProvider>
      <div className="wrapper">
        <div className="container">
          <Filter />
          <ListOfUsers />
          <UserProfile/>
        </div>
      </div>
    </ContentProvider>
  );
}

export default App;
