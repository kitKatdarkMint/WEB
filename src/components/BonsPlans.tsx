import "./BonsPlans.css";
function BonsPlans() {
  return (
    <>
      <h1 className="farro-bold text-center"> Bons Plans Culturels 🤩</h1>
      <p>
        Tu es à la recherche de bons plans sans te ruiner ? Tu as envie de
        profiter un max de ta vie étudiante ?<br />
        Alors tu es au bon endroit ! 😉
      </p>
      <h2>Pour la boustifaille🍴 </h2>
      <ul>
        <li>
          T'as entendu de la fameuse carte Mojjo ?!! Pour seulement 20€ l'année,
          cette carte te permet d'avoir 100€ de sorties et de restaurants,
          gratis! Pas mal non ?<br />
          Clique sur ce lien pour avoir plus d'infos 👇{" "}
          <p>
            <a href="https://carte-mojjo.fr/lyon/"> Site du Mojjo Lyon</a>
          </p>
        </li>
        <li>
          {" "}
          Les restos du CROUS sont pas mals non plus, si t'es boursier tu paies 1 €
          sinon t'en as pour 3,30€{" "}
          <p>
            <a href="https://www.crous-lyon.fr/se-restaurer/">
              {" "}
              site du CROUS Lyon
            </a>
          </p>
        </li>
      </ul>
      <h2>Pour les sorties musées, ciné et pleins d'autres trucs sympas🎟️</h2>
      <ul>
        <li>
          {" "}
          As-tu entendu parler du <strong>
            Pass culture étudiant de Lyon
          </strong>{" "}
          ? Elle te donne accès sur l’année à 3 places de spectacles et 1 place
          de cinéma dans 101 établissements culturels du territoire, dont les
          festivals Nuits sonores, Nuits de Fourvière et Woodstower.
          <p>
            <a href="https://www.lyoncampus.com/sortir/pass-culture-etudiant-de-la-metropole-de-lyon">
              Pass Culture
            </a>
          </p>
        </li>
        <li>
          <a href="https://cataloguebm.villeurbanne.fr/">Carte Bibliothèque</a>{" "}
          <strong>gratuite</strong> sur Villeurbanne
        </li>
        <li>
          <a href="https://www.lyon.fr/culture/la-carte-bibliotheque">
            Carte Bibliothèque sur Lyon
          </a>{" "}
          7€, valable 1 an, donne accès aux différents services des
          bibliothèques de la ville de Lyon : emprunt de 20 documents,
          consultation sur place et ressources numériques
        </li>
        <li>
          {" "}
          Planétarium <strong>gratuit tous les 1er samedis</strong> du mois à
          Vaux-en-Velin{" "}
          <p>
            <a href="https://www.planetariumvv.com/programmation/">
              Le programme
            </a>
          </p>
        </li>
      </ul>
    </>
  );
}

export default BonsPlans;
