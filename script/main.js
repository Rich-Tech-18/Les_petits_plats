// import DisplayInReceips from "./card/card.js";

async function getRecips() {
    // recupere les recettes du fichier json
    return fetch("https://rich-tech-18.github.io/Les_petits_plats_30-05-2022/data/recipes.json")
    .then(reponse =>  reponse.json())
    .then( data  => {return data.receips;})
    .catch((err) => console.log(err));
}


export const recipsData = await getRecips();


const receipsCardTemplate = document.querySelector("[data-recips-template]");
const receipsCardContainer = document.querySelector("[data-recips-card-container]");
const input = document.querySelector("[data-input]");
const sectionArticle = document.querySelector(".receips-display");
const errorMessage = document.createElement('div');

errorMessage.innerHTML = '<p>aucune recettes ne corresponds à votre recherche</p>';
errorMessage.classList.add('hide');
errorMessage.setAttribute('id', 'errorMessage');
sectionArticle.appendChild(errorMessage);

export let recips = [];
function isAllHide(elem){
    return elem.classList.value === "card hide";
}

input.addEventListener('input', function(e){
    errorMessage.classList.add('hide');
    const value = e.target.value.toLowerCase();
    const allArticle = Array.from(document.querySelectorAll(".receips-display article"));
    const regex = /^[a-zA-Z]{3,}/;
    if(regex.test(value)){
        recips.forEach(visibile => {
        const isVisible = visibile.title.toLowerCase().includes(value) || visibile.ingredients.toLowerCase().includes(value) || visibile.ustensils.toLowerCase().includes(value) || visibile.appliances.toLowerCase().includes(value);
        visibile.element.classList.toggle("hide", !isVisible);
        
    });
    if(allArticle.every(isAllHide)){
        errorMessage.classList.remove('hide');
    }
    }
else{
    recips.forEach(visible => {
        visible.element.classList.remove("hide");
    })
}   
})

// input.addEventListener('input', function(e){
//     errorMessage.classList.add('hide');
//     const value = e.target.value.toLowerCase();
//     const allArticle = Array.from(document.querySelectorAll(".receips-display article"));
//     const regex = /^[a-zA-Z]{3,}/;
//     if(regex.test(value)){
//     for(let i =0; i<recips.length; i++) {
//         const isVisible = recips[i].title.toLowerCase().includes(value) || recips[i].ingredients.toLowerCase().includes(value) || recips[i].ustensils.toLowerCase().includes(value) || recips[i].appliances.toLowerCase().includes(value);
//         recips[i].element.classList.toggle("hide", !isVisible);
        
//     };
//     if(allArticle.every(isAllHide)){
//         errorMessage.classList.remove('hide');
//     };
// }
// else{
//     for(let i = 0; i<recips.length; i++) {
//         recips[i].element.classList.remove("hide");
//     }
    
// }
// })

recips = recipsData.map(elem => {
                let ingredientTag = '';
                let ustensilTag = '';
                const card = receipsCardTemplate.content.cloneNode(true).children[0];
                const titleReceips = card.querySelector("[data-recips-name]");
                const receipsTime = card.querySelector("[data-recips-time]");
                const recipsIngredient = card.querySelector("[data-recips-ingredient]");
                const recipsDescription = card.querySelector("[data-recips-description]");
                titleReceips.textContent = elem.name;
                receipsTime.textContent = elem.time + ' min';
                elem.ingredients.forEach(arr => {
                    const span = document.createElement('span');
                    const li = document.createElement("li");
                    if(arr.quantity === undefined){
                        li.textContent = arr.ingredient;
                    }else if(arr.unit === undefined ){
                        span.textContent = arr.quantity;
                        li.textContent = arr.ingredient + ': ';
                        li.appendChild(span);
                    }else {
                        span.textContent = arr.quantity + ' ' + arr.unit;
                        li.textContent =  arr.ingredient + ': ';
                        li.appendChild(span);
                    };
                    recipsIngredient.append(li);
                    ingredientTag += arr.ingredient + ',';
                    
                })
                elem.ustensils.forEach(ustens => {
                    ustensilTag += ustens + ',';
                })
                recipsDescription.textContent = elem.description;
                receipsCardContainer.append(card);
                return { title : elem.name, appliances: elem.appliance, ustensils: alphabetSoup(ustensilTag), ingredients: alphabetSoup(ingredientTag), element: card};
            })


    export function alphabetSoup(str) { 
        let arraySplit = str.split(",");
        let arraySort = arraySplit.sort();
        let arrayJoin = arraySort.join(" ");
        return arrayJoin;
    }
