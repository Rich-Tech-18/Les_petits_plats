import { recipsData, recips } from "../main.js";

const listOfIngredient = document.querySelector('#ingredients');
const listOfAppliance = document.querySelector('#appliance');
const listOfUstensils = document.querySelector('#ustensils');
const inputIngredient = document.querySelector('#dropdownMenuButtonInredient');
const inputAppliance = document.querySelector('#dropdownMenuButtonAppliance');
const inputUstensil = document.querySelector('#dropdownMenuButtonUstensils');
const arrowIngredient = document.querySelector('#arrowIngredient');
const arrowAppliance = document.querySelector('#arrowAppliance');
const arrowUstensile = document.querySelector('#arrowUstensils');
const divChips = document.querySelector('.chips');
let search = '';
let selections = [];

let ingredients = [];  
    recipsData.forEach(element => {
        element.ingredients.forEach(ingredient => {
           ingredients.push(ingredient.ingredient);
           return ingredients;
        })
    });


let ingredientFilter = ingredients.filter((elem, pos) => ingredients.indexOf(elem) === pos);




const appliance = recipsData.map(appliance => appliance.appliance);
let applianceFilter = appliance.filter((elem, pos) => appliance.indexOf(elem) === pos);

const ustensils = [];
    recipsData.forEach(element => {
        element.ustensils.forEach(ustensil => {
            ustensils.push(ustensil);
            return ustensils;
        })
    });
let ustensilFilter = ustensils.filter((elem, pos) => ustensils.indexOf(elem) === pos);


    inputIngredient.addEventListener('focusout', function(){
        arrowIngredient.style.transform = 'translate(-25px, 15px) rotate(0deg)';
        })

    inputUstensil.addEventListener('focusout', function(){
        arrowUstensile.style.transform = 'translate(-25px, 15px) rotate(0deg)';
        })
    inputAppliance.addEventListener('focusout', function(){
        arrowAppliance.style.transform = 'translate(-25px, 15px) rotate(0deg)';
        })

    inputIngredient.addEventListener('click', (e) => {
        listOfIngredient.innerHTML = '';
        listDisplay(e, ingredientFilter, 'ingredient', listOfIngredient, arrowIngredient);
        verifChipsAndList();
    });

    inputIngredient.addEventListener('keyup', (e) => {
        listOfIngredient.innerHTML = '';
        listDisplay(e, ingredientFilter, 'ingredient', listOfIngredient, arrowIngredient);
        verifChipsAndList();
    });

    inputAppliance.addEventListener('click', (e) => {
        listOfAppliance.innerHTML = '';
        listDisplay(e, applianceFilter, 'appliance', listOfAppliance, arrowAppliance);
        verifChipsAndList();
    });

    inputAppliance.addEventListener('keyup', (e) => {
        listOfAppliance.innerHTML = '';
        listDisplay(e, applianceFilter, 'appliance', listOfAppliance, arrowAppliance);
        verifChipsAndList();
    });

    inputUstensil.addEventListener('click', (e) => {
        listOfUstensils.innerHTML = '';
        listDisplay(e, ustensilFilter, 'ustensils', listOfUstensils, arrowUstensile);
        verifChipsAndList();
    });

    inputUstensil.addEventListener('keyup', (e) => {
        listOfUstensils.innerHTML = '';
        listDisplay(e, ustensilFilter, 'ustensils', listOfUstensils, arrowUstensile);
        verifChipsAndList();
    });

    
    function listDisplay(element, array, classListName, inputOfSelection, arrow){
        const resultat = array.filter( result => result.toLowerCase().includes(element.target.value.toLowerCase()));
        arrow.style.transform = 'translate(-25px, 10px) rotate(180deg)';
        
        
        resultat.forEach(function(e){
            const list = document.createElement('li');
            list.classList.add(classListName);
           list.innerText = e;
           inputOfSelection.appendChild(list);
            list.addEventListener('click', function(e){
            const chips = document.createElement('div');
            chips.classList.add('chipsSelected');
            chips.innerHTML = e.target.textContent + "<img src='icon/close.svg' alt='icon pour supprimer le tag'></img>";
            divChips.appendChild(chips);
            verifChipsAndList();
            search = e.target.textContent;
            displayrecipsData(search);
            updateTagListener();
            }, {once:true});
        })
        
        
        
       
    }



    function updateTagListener(){

    Array.from(document.querySelectorAll('.chipsSelected img')).forEach(element => {
        element.addEventListener('click', function(e){
            const article = document.querySelectorAll('.hide');
            article.forEach(arr => {
                if(arr.className === 'card hide' ){
                    arr.classList.remove("hide");
                }
            })
           
            e.target.parentNode.remove();
            Array.from(document.querySelectorAll('.chipsSelected')).forEach(str => {
               displayrecipsData( str.textContent); 
            })
            
            
            
        })
    })
    };

   
    
    function verifChipsAndList(){
        const chipsText = document.querySelectorAll('.chips div');
        const listElementIngredient = document.querySelectorAll('.ingredient');
        const listElementAppliance = document.querySelectorAll('.appliance');
        const listElementUstensils = document.querySelectorAll('.ustensils');
        

         chipsText.forEach(element => {
            listElementIngredient.forEach(comparaison => {
                if(element.textContent === comparaison.textContent){
                        comparaison.style.display = "none";
                    }
            })
       
    });


  

    chipsText.forEach(element => {
        listElementAppliance.forEach(comparaison => {
            if(element.textContent === comparaison.textContent){
                    comparaison.style.display = "none";
                }
        })
   
});
    chipsText.forEach(element => {
        listElementUstensils.forEach(comparaison => {
            if(element.textContent === comparaison.textContent){
                    comparaison.style.display = "none";
                }
        })

    });


    let verif = [];
    verif = [];

    listElementIngredient.forEach(elem => {
        elem.style.display = 'none';
    })

    listElementAppliance.forEach(elem => {
        elem.style.display = 'none';
    })

    listElementUstensils.forEach(elem => {
        elem.style.display = 'none';
    })
    
    recips.forEach(el => {
                if(el.element.className === 'card'){
                    listElementIngredient.forEach(ingre => {
                   
                    if(el.ingredients.toLocaleLowerCase().includes(ingre.textContent.toLocaleLowerCase())){
                        verif.push(ingre)
                    }
            
        })
        listElementAppliance.forEach(appl => {
                   
            if(el.appliances.toLocaleLowerCase().includes(appl.textContent.toLocaleLowerCase())){
                verif.push(appl)
            }
    
})
        listElementUstensils.forEach(ust => {
                        
            if(el.ustensils.toLocaleLowerCase().includes(ust.textContent.toLocaleLowerCase())){
                verif.push(ust)
            }

        })
        }
    })
    
    
    const verifFilter = verif.filter(function(ele , pos){
        return verif.indexOf(ele) == pos;
    }) 
    verifFilter.forEach(te => {
        listElementIngredient.forEach(elem => {
            if(te.textContent === elem.textContent){
                elem.style.display = 'block';
            }
        })
        listElementAppliance.forEach(appli => {
            if(te.textContent === appli.textContent){
                appli.style.display = 'block';
            }
        })
        listElementUstensils.forEach(usten => {
            if(te.textContent === usten.textContent){
                usten.style.display = 'block';
            }
        })
    })

    chipsText.forEach(element => {
        listElementIngredient.forEach(comparaison => {
            if(element.textContent === comparaison.textContent){
                    comparaison.style.display = "none";
                }
        })
   
});




chipsText.forEach(element => {
    listElementAppliance.forEach(comparaison => {
        if(element.textContent === comparaison.textContent){
                comparaison.style.display = "none";
            }
    })

});
chipsText.forEach(element => {
    listElementUstensils.forEach(comparaison => {
        if(element.textContent === comparaison.textContent){
                comparaison.style.display = "none";
            }
    })

});

    
    colorChips();
    };
    

    function displayrecipsData(str){
            const value = str.toLowerCase();
            recips.forEach(arr => {
                if(arr.element.className === 'card') {
            };
          })
            
            recips.forEach(visibile => {
                if(visibile.element.className === 'card'){
                    const isVisible = visibile.ingredients.toLowerCase().includes(value) || visibile.ustensils.toLowerCase().includes(value) || visibile.appliances.toLowerCase().includes(value);
                    visibile.element.classList.toggle("hide", !isVisible);
                }
             
            }) ;
            
    };
    

    function colorChips(){
        const chips = document.querySelectorAll('.chips div');
        chips.forEach(element => {
            ingredients.forEach(ingredient => {
                if(element.textContent === ingredient){
                    element.style.background = '#0d6efd';
                }
            });
            ustensils.forEach(ingredient => {
                if(element.textContent === ingredient){
                    element.style.background = '#fd7e14';
                }
            });
            appliance.forEach(ingredient => {
                if(element.textContent === ingredient){
                    element.style.background = '#20c997';
                }
            });
        });
   
    };