import { useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import BonsPlans from "./BonsPlans";
import Budget from "./Budget";
import Footer from "./Footer";
import Suggestion from "./Suggestion";
import Accueil from "./Accueil";

function App() {
  const [showBonsPlans, setShowBonsPlans] = useState(false);
  const [showBudget, setShowBudget] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [showAccueil, setShowAccueil] = useState(false);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        setShowBonsPlans={setShowBonsPlans}
        setShowBudget={setShowBudget}
        setShowSuggestion={setShowSuggestion}
        setShowAccueil={setShowAccueil}
      />

      <main className="flex-grow-1">
        <Budget isPopupOpen={showBudget} setPopupOpen={setShowBudget} />
        <div className="justify-content-center">
          <SearchBar />
        </div>
        {showSuggestion && <Suggestion />}
        {showBonsPlans && <BonsPlans />}
        {showAccueil && <Accueil />}
      </main>

      <Footer />
    </div>
  );
}
export default App;
