import { useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import BonsPlans from "./BonsPlans";
import Login from "./Login";

function App() {
  const [showBonsPlans, setShowBonsPlans] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginSubmit = () => {
    setShowLogin(false);
  };

  return (
    <>
      <div>
        <Navbar
          setShowBonsPlans={setShowBonsPlans}
          setShowLogin={setShowLogin}
        />
      </div>
      {showLogin && (
        <div className="login-modal login">
          <Login onSubmit={handleLoginSubmit} />
        </div>
      )}
      <div className="justify-content-center">
        <SearchBar />
      </div>
      {showBonsPlans && <BonsPlans />}
    </>
  );
}

export default App;
