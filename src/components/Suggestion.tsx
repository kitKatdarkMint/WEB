//import React, { useState } from "react";
import Activite from "./Activites";
interface ActiviteData {
  Date: string;
  Titre: string;
  Lieu: string;
  Tarif: string;
  Image: string;
}

const activites: ActiviteData[] = [
  {
    Date: "Toute l'année",
    Titre: "Shrubbery",
    Lieu: "Villeurbanne Charpennes",
    Tarif: "2€ sans boisson",
    Image: "src/assets/shrubbery.webp",
  },
  {
    Date: "Toute l'année",
    Titre: "Ninkasi Doua",
    Lieu: "Villeurbanne Doua",
    Tarif: "11€ Menu Etudiant",
    Image: "src/assets/ninkasi_doua.jpg",
  },

  {
    Date: "Toute l'année",
    Titre: "Escape game Imaginarium",
    Lieu: "Lyon 7ème",
    Tarif: "30€ à 6 personnes",
    Image: "src/assets/imaginarium-game-escape-game-lyon-7.webp",
  },
];

const Suggestion: React.FC = () => {
  //   const [favoris, setFavoris] = useState<string[]>([]);

  //   const toggleFavori = (titre: string) => {
  //     setFavoris((prev) =>
  //       prev.includes(titre)
  //         ? prev.filter((item) => item !== titre)
  //         : [...prev, titre]
  //     );
  //   };

  return (
    <div className="card-group d-flex flex-wrap gap-3">
      {activites.map((item, index) => (
        <Activite
          key={index}
          image={item.Image}
          titre={item.Titre}
          lieu={item.Lieu}
          tarif={item.Tarif}
          //isFavori={favoris.includes(item.Titre)}
          //onToggleFavori={() => toggleFavori(item.Titre)}
        />
      ))}
    </div>
  );
};

export default Suggestion;
