import DisplayInReceips from "./card/card.js";

async function getRecips() {
    // recupere les recettes du fichier json
    return fetch("../data/recipes.json")
    .then(reponse =>  reponse.json())
    .then( data  => {return data.receips;})
    .catch((err) => console.log(err));
}

async function displayCardReceips(array){
    array.forEach((receip) => {
        const display = new DisplayInReceips(receip.id, receip.name, receip.servings, receip.ingredients, receip.time, receip.description, receip.appliance, receip.ustensils);
        const createReceips = display.createCardReceips();
        const sectionCard = document.querySelector('.receips-display');
        sectionCard.appendChild(createReceips);
    });
}



async function init(){
  const receips = await getRecips();
   displayCardReceips(receips);
}

init();

