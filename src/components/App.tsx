import { Fragment } from "react/jsx-runtime";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import LigneRecette from"./LigneRecette";

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
