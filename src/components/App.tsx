import { useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import BonsPlans from "./BonsPlans";

function App() {
  const [showBonsPlans, setShowBonsPlans] = useState(false);
  return (
    <>
      <div>
        <Navbar setShowBonsPlans={setShowBonsPlans} />
      </div>

      <div className="justify-content-center">
        <SearchBar></SearchBar>
      </div>
      {showBonsPlans && <BonsPlans />}
    </>
  );
}

export default App;
