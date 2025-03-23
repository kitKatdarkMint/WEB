import { useState} from "react";
function Recette() {
    const divContent="Recette";
    const recettes=[
        {id:1,name:"",note:"" ,image:".jpg",class:""},
        {id:2,name:"",note: "",image:".jpg",class:""},
        {id:3,name:"",note: "",image:".jpg",class:""},
    ];
    const [Filter,setFilter]=useState("");
    const RecetteListe=({Filter})=>{
        const filteredRecipes=Filter?recettes.filter((recette)=>recette.class===Filter)
        :recettes;
        
    }
    const DetailRecette

return (
    <div>
        <h1>{divContent}</h1>
        <button onClick={()=>setFilter("entree")}>Entrée</button>
        <button onClick={()=>setFilter("plat")}>Plat</button>
        <button onClick={()=>setFilter("dessert")}>Dessert</button>
    </div>
);
}
export default Recette;