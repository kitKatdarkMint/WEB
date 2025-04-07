import { useEffect, useState } from "react";

type BonsPlans = {
  Date: string;
  image: string;
  Titre: string;
  Lieu: string;
  Tarif: string;
  Type: string;
};

const Users = () => {
  const [users, setUsers] = useState<BonsPlans[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/BonsPlans")
      .then((res) => res.json())
      .then((data) => setUsers(data)) // Stocker les données dans l'état
      .catch((error) => console.error("Erreur:", error));
  }, []); // [] => se lance une seule fois au montage du composant

  return (
    <div>
      <h2>Liste des titres</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.Titre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
