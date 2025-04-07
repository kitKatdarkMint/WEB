interface Props {
  image: string;
  titre: string;
  lieu: string;
  tarif: string;
}
function Activite({ image, titre, lieu, tarif }: Props) {
  return (
    <div className="card" style={{ width: "30rem", height: "300px" }}>
      <img src={image} className="card-img-top" alt={titre} />
      <div className="card-body">
        <h5 className="card-title">{titre}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Lieu : {lieu}</li>
        <li className="list-group-item">Prix : {tarif}</li>
      </ul>
    </div>
  );
}

export default Activite;
