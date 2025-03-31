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
        nested
      >
        <div className="popup-content p-5 rounded-lg shadow-lg bg-white">
          <h2 className="text-lg font-semibold mb-3">Votre budget (€)</h2>
          <input
            type="number"
            min="0"
            className="w-full p-2 border rounded-lg"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />

          <div className="mt-3 flex justify-center space-x-4">
            <label>
              <input type="radio" name="category" value="restaurant" />
              <span> Restaurant</span>
            </label>
            <label>
              <input type="radio" name="category" value="activite" />
              <span> Activités</span>
            </label>
          </div>

          <div className="flex justify-between mt-4">
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
