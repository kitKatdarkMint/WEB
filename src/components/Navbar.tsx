import "./Navbar.css";

interface Props {
  setShowBonsPlans: React.Dispatch<React.SetStateAction<boolean>>;
  setShowBudget: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSuggestion: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAccueil: React.Dispatch<React.SetStateAction<boolean>>;
}
function Navbar({
  setShowBonsPlans,
  setShowBudget,
  setShowSuggestion,
  setShowAccueil,
}: Props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          onClick={() => {
            setShowBonsPlans(false);
            setShowSuggestion(false);
            setShowAccueil(true);
          }}
        >
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
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={() => {
                  setShowBonsPlans(false);
                  setShowSuggestion(false);
                  setShowAccueil(true);
                }}
              >
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => {
                  setShowBonsPlans(false);
                  setShowSuggestion(true);
                  setShowAccueil(false);
                }}
              >
                Suggestion du jour
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => {
                  setShowBonsPlans(true);
                  setShowSuggestion(false);
                  setShowAccueil(false);
                }}
              >
                Bons Plans Culturels 😎
              </a>
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
                  <a className="dropdown-item" href="#">
                    Sortir sur Lyon
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Se restaurer sur Lyon / Villeurbanne
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
          onClick={() => setShowBudget(true)}
        >
          Mon budget
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
