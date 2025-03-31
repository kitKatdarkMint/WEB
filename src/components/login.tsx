import { useState } from "react";

interface BudgetProps {
  onSubmit: () => void; // Fonction de callback qui sera appelée lors du clic sur le bouton
}

const Budget: React.FC<BudgetProps> = ({ onSubmit }) => {
  const [budget, setBudget] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Empêche la soumission du formulaire pour éviter un rechargement
    onSubmit(); // Appelle la fonction de callback passée en props
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 flex flex-col items-center justify-center h-screen text-center">
        <label htmlFor="exampleInput" className="form-label">Votre budget (en euros) : </label>        <input 
          type="number" 
          step="any" 
          min = "0"
          className="appearance-none"
          style={{ width: "25%", padding: "8px", border: "1.5px solid #999", borderRadius: "20px" }}
          value={budget}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBudget(e.target.value)}
        />
      </div>
      
      
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" htmlFor="inlineRadio1">Restaurant</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" htmlFor="inlineRadio2">Activités</label>
</div>
<br></br>



<br/>
      <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",}}>
        <button type="submit" className="btn btn-outline-danger ">Submit</button>
      </div>  

    </form>
  );
}

export default Budget;
