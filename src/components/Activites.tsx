import { useState } from "react";

function Activite() {
  const [Favori, setFavori] = useState([]);
  return (
    <>
      <div className="card-group">
        <div className="card" style={{ width: "30rem", height: "300px" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Nom activite</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group">Lieu : </li>
            <li className="list-group">Prix : </li>
            <button onClick={() => setFavori(true)}></button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Activite;
