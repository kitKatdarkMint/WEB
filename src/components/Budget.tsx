import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

interface Props {
  isPopupOpen: boolean;
  setPopupOpen: (isOpen: boolean) => void;
}

function Budget({ isPopupOpen, setPopupOpen }: Props) {
  const [budget, setBudget] = useState("");

  return (
    <>
      <Popup
        open={isPopupOpen}
        onClose={() => setPopupOpen(false)}
        modal
        contentStyle={{
          width: "25%",
          backgroundColor: "lightgrey", /* Changez la couleur de fond ici */
          padding: "20px",
          borderRadius: "50px",
          display: "flex", /* Activer le modèle Flexbox */
          justifyContent: "center", /* Centrer les éléments verticalement */
          height: "auto",
        }}
        
      >
        <div>
        <div style={{display:"flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
          <h3>Votre budget (€)</h3>
          <input
            type="number"
            min="0"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          /></div>
<br/>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <label>
              <input type="radio" name="category" value="restaurant" />
              <span> Restaurant</span>
            </label>
            <label>
              <input type="radio" name="category" value="activite" />
              <span> Activités</span>
            </label>
          </div>
<br/>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <button
              onClick={() => setPopupOpen(false)}
              className="btn btn-secondary"
            >
              Annuler
            </button>
            <button
              onClick={() => setPopupOpen(false)}
              className="btn btn-primary"
            >
              Valider
            </button>
          </div>
        </div>
      </Popup>
    </>
  );
}

export default Budget;
