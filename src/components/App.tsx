import { useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import BonsPlans from "./BonsPlans";
import Budget from "./Budget";
import Footer from "./Footer";

function App() {
  const [showBonsPlans, setShowBonsPlans] = useState(false);
  const [showBudget, setShowBudget] = useState(false);

  return (
    <>
      <Navbar
        setShowBonsPlans={setShowBonsPlans}
        setShowBudget={setShowBudget}
      />

      <Budget isPopupOpen={showBudget} setPopupOpen={setShowBudget} />
      <div className="justify-content-center">
        <SearchBar />
      </div>

      {showBonsPlans && <BonsPlans />}
      <Footer />
    </>
  );
}

export default App;
