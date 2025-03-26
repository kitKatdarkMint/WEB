import { Fragment } from "react/jsx-runtime";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import LigneRecette from"./components/LigneRecette";


function App() {
  return (
    <Fragment>
      <div>
        <Navbar />
      </div>
      
      <div className="justify-content-center">
        <SearchBar></SearchBar>
      </div>
      <div className="justify-content-center">
        <LigneRecette></LigneRecette>
      </div>
      
    </Fragment>
  );
}

export default App;
