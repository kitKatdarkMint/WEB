import { useState} from "react";

    /*const [Filter,setFilter]=useState("");
    const RecetteListe=({Filter})=>{
        const filteredRecipes=Filter?recettes.filter((recette)=>recette.className===Filter)
        :recettes;
        
    }
    */


    /*<div>
        <h1>{divContent}</h1>
        <button onClick={()=>setFilter("entree")}>Entrée</button>
        <button onClick={()=>setFilter("plat")}>Plat</button>
        <button onClick={()=>setFilter("dessert")}>Dessert</button>
    </div>
    */
export default function Recette(){
    return (
    <>
        <div className="card-group">
            <div className="card" style={{width: "30rem",height:"300px"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Recette Name</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group">Note</li>
                    <li className="list-group">Avis</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Obtenir plus de details</a>
                </div>
            </div>
            <div className="card" style={{width: "30rem",height:"300px"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Recette Name</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group">Note:</li>
                    <li className="list-group">Avis:</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Obtenir plus de details</a>
                </div>
            </div>
            <div className="card" style={{width: "30rem",height:"300px"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Recette Name</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group">Note:</li>
                    <li className="list-group">Avis:</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Obtenir plus de details</a>
                </div>
            </div>
        </div>
        <div className="card-group">
            <div className="card" style={{width: "30rem",height:"300px"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Recette Name</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group">Note</li>
                    <li className="list-group">Avis</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Obtenir plus de details</a>
                </div>
            </div>
            <div className="card" style={{width: "30rem",height:"300px"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Recette Name</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group">Note:</li>
                    <li className="list-group">Avis:</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Obtenir plus de details</a>
                </div>
            </div>
            <div className="card" style={{width: "30rem",height:"300px"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Recette Name</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group">Note:</li>
                    <li className="list-group">Avis:</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Obtenir plus de details</a>
                </div>
            </div>
        </div>
    </>
      );
}
