import Login from "./Login";
import { useState } from "react";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginSubmit = () => {
    setShowLogin(false);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">
          <img src="/src/assets/RadINSA.png" alt="radINSA" width="200" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="index.html">
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Suggestion du jour
              </a>
              <li className="nav-item">
                <a className="nav-link" href="bonsPlans.html">
                  Bons Plans Culturels 😎
                </a>
              </li>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Type de sorties
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/entree.html">
                    Activités
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/dessert.html">
                    Restaurants
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <button type="button" className="btn">
          Mon carnet
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setShowLogin(!showLogin)}
          style={{
            display: "inline-block",
            position: "relative",
          }}
        >
          Mon budget
        </button>
      </div>
      {showLogin && (
        <div
          className="login-modal"
          style={{
            display: "block", // S'assurer que la fenêtre est affichée
            position: "absolute",
            top: "100%", // Placer au milieu de l'écran
            left: "50%",
            transform: "translate(-50%, 0%)", // Placer la fenêtre juste en dessous du bouton
            marginTop: "10px", // Un peu d'espace entre le bouton et la fenêtre
            marginLeft: "auto",
            marginRight: "auto",
            width: "25%", // La largeur peut être ajustée si nécessaire
            backgroundColor: "white", // Couleur de fond de la fenêtre
            border: "1.5px solid #999",
            borderRadius: "20px",
            padding: "20px", // Espacement à l'intérieur de la fenêtre
            zIndex: 1000, // S'assurer que la fenêtre s'affiche par-dessus d'autres éléments
          }}
        >
          <Login onSubmit={handleLoginSubmit} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
