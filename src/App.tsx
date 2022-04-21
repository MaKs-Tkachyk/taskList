
import "./App.scss";
import { ContentProvider } from "./UI/Components/ContentProvider/ContentProvider";
import Filter from "./UI/Components/Filter/Filter";
import ListOfUsers from "./UI/Components/ListOfUsers/ListOfUsers";
import UserProfile from "./UI/Components/UserProfile/UserProfile";


function App() {
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
