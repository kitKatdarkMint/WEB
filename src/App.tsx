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
<<<<<<< HEAD
      <div className="justify-content-center">
        <LigneRecette></LigneRecette>
      </div>
      
=======
>>>>>>> afeac992c3202e80733ba5638b802600cf5599a4
    </Fragment>
  );
}

export default App;
