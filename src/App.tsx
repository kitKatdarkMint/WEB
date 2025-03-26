import { Fragment } from "react/jsx-runtime";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";


function App() {
  return (
    <Fragment>
      <div>
        <Navbar />
      </div>
      
      <div className="justify-content-center">
        <SearchBar></SearchBar>
      </div>
      
    </Fragment>
  );
}

export default App;
