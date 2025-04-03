import "./BonsPlans.css";
import mojjo from "../assets/mojjo.png";
import crous from "../assets/crous.png";
import pass from "../assets/passculture.png";
import mediatheque from "../assets/mediatheque.png";
import bibliotheque from "../assets/lyon.jpg";
import planetarium from "../assets/planet.jpg";

function BonsPlans() {
  return (
    <><div className = "content">
      <h1 className="farro-bold text-center"> Bons Plans Culturels 🤩</h1>
      <p style={{ textAlign: "center" }}>
        Tu es à la recherche de bons plans sans te ruiner ? Tu as envie de
        profiter un max de ta vie étudiante ?
        Alors tu es au bon endroit !! 😉
      </p>
      <h2>Pour la boustifaille🍴 </h2>
      <ul>
        <li>
          T'as entendu de la fameuse carte Mojjo ?!! Pour seulement 20€ l'année,
          cette carte te permet d'avoir 100€ de sorties et de restaurants,
          gratis! Pas mal non ? {" "}
            <a href="https://carte-mojjo.fr/lyon/" target="_blank" rel="noopener noreferrer">
            <img src={mojjo} alt="Mojjo" className="logo"/>
            </a>
        </li>
        <li>
          {" "}
          Les restos du CROUS sont pas mals non plus, si t'es boursier tu paies 1 €,
          sinon t'en as pour 3,30€  {"  "}
            <a href="https://www.crous-lyon.fr/se-restaurer/" target="_blank" rel="noopener noreferrer">
            <img src={crous} alt="Crous" className="logo"/>
            </a>
        </li>
      </ul>
      <h2>Pour les sorties musées, ciné et pleins d'autres trucs sympas🎟️</h2>
      <ul>
        <li>
          {" "}
          As-tu entendu parler du Pass Culture étudiant de Lyon ? 
          Il te donne accès sur l’année à 3 places de spectacles et 1 place
          de cinéma dans 101 établissements culturels du territoire, dont les
          festivals Nuits sonores, Nuits de Fourvière et Woodstower. {"  "}
            <a href="https://www.lyoncampus.com/sortir/pass-culture-etudiant-de-la-metropole-de-lyon" target="_blank" rel="noopener noreferrer">
            <img src={pass} alt="Pass Culture" className="logo"/>
            </a>
          
        </li>
        <li>
        Carte bibliothèque <strong>gratuite</strong> sur Villeurbanne {" "}
          <a href="https://cataloguebm.villeurbanne.fr/" target="_blank" rel="noopener noreferrer">
          <img src={mediatheque} alt="Mediatheque Villeurbanne" className="logo"/>
          </a>{" "}
        </li>
        <li>
          Carte Bibliothèque sur Lyon 7€, valable 1 an, qui te donne accès aux différents services des
          bibliothèques de la ville de Lyon : emprunt de 20 documents,
          consultation sur place et ressources numériques {"  "}
          <a href="https://www.lyon.fr/culture/la-carte-bibliotheque" target="_blank" rel="noopener noreferrer">
          <img src={bibliotheque} alt="Bibliotheque Lyon" className="logo"/>
          </a>{" "}
        </li>
        <li>
          {" "}
          Planétarium <strong>gratuit tous les 1er samedis du mois </strong> à
          Vaux-en-Velin{" "}        
            <a href="https://www.planetariumvv.com/programmation/" target="_blank" rel="noopener noreferrer">
            <img src={planetarium} alt="Planetarium Vaulx-en-Velin" className="logo"/>
            </a>
        </li>
      </ul>
      </div>
    </>
  );
}

export default BonsPlans;
