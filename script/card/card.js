


export default class DisplayInReceips {
    constructor(id, name, servings, ingredients, time, description, appliance, ustensils){
        this.id = id;
        this.name = name;
        this.servings = servings;
        this.ingredients = ingredients;
        this.time = time;
        this.description = description;
        this.appliance = appliance;
        this.ustensils = ustensils;
    };
    
    createCardReceips(){
        
        const article = document.createElement('article');
        const img = document.createElement('img');
        const divHeader = document.createElement('div');
        const title = document.createElement('h2');
        const time = document.createElement('p');
        const divBody = document.createElement('div');
        const ul = document.createElement('ul');
        const text = document.createElement('p');
        const divTimer = document.createElement('div');
        divTimer.classList.add('div-timer');
        const imgCLock = document.createElement('img');
        article.classList.add('card');
        img.classList.add('card-img-top');
        divHeader.classList.add('card-header');
        divBody.classList.add('card-body');
        title.innerText = this.name;
        time.innerText = this.time + " min";
        imgCLock.setAttribute('src', 'image/icon/clock.svg');
        divTimer.appendChild(imgCLock);
        divTimer.appendChild(time);
        divHeader.appendChild(title);
        divHeader.appendChild(divTimer);
        divBody.appendChild(ul);
        let dataIngredient = '';
        this.ingredients.forEach(ingredient => {
            
            const li = document.createElement('li');
            if(ingredient.quantity === undefined){
                li.innerText = ingredient.ingredient;
               
            }
            else if(ingredient.unit === undefined){
                li.innerText = ingredient.ingredient + ' : '  + ingredient.quantity;
            }
            else{
            li.innerText = ingredient.ingredient + ' : '  + ingredient.quantity + ' ' + ingredient.unit;
             
            }
            dataIngredient += ingredient.ingredient + ' ';
            article.setAttribute('data-ingredient', dataIngredient);
            ul.appendChild(li);
        })
        let dataAppliance = '';
        dataAppliance += this.appliance + ' ';
        article.setAttribute('data-appliance', dataAppliance);
        let dataUstensils = '';
        this.ustensils.forEach(ustensil => {
            dataUstensils += ustensil + ' ';
            article.setAttribute('data-ustenils', dataUstensils);
        });
        text.innerText = this.description;
        divBody.appendChild(text);
        article.appendChild(img);
        article.appendChild(divHeader);
        article.appendChild(divBody);

        return article
        
    };

 
    // displayLiInput(){
    //     const listOfIngredient = document.querySelector('#ingredients');
    //     const single = [];
    //     this.ingredients.forEach(list => {
    //         single.push(list.ingredient);
            
    //     });

    //     const singleI = new Set(single);
    //     const arr = Array.from(singleI)
    //     // arr.sort();
    //     arr.slice(0, 30).forEach(function(e){
    //         const list = document.createElement('li');
    //         list.innerText = e;
    //         listOfIngredient.appendChild(list);
           
    //     });
    //     console.log(singleI);
    //      return listOfIngredient;
    // }
}



// function createCardReceips(this){
//     const sectionCard = document.querySelector('.receips-display');
//     const article = document.createElement('article');
//     const img = document.createElement('img');
//     const divHeader = document.createElement('div');
//     const title = document.createElement('h2');
//     const time = document.createElement('p');
//     const divBody = document.createElement('div');
//     const ul = document.createElement('ul');
//     const text = document.createElement('p');
//     const divTimer = document.createElement('div');
//     divTimer.classList.add('div-timer');
//     const imgCLock = document.createElement('img');
//     article.classList.add('card');
//     img.classList.add('card-img-top');
//     divHeader.classList.add('card-header');
//     divBody.classList.add('card-body');
//     title.innerText = this.name;
//     time.innerText = this.time + " min";
//     imgCLock.setAttribute('src', 'image/icon/clock.svg');
//     divTimer.appendChild(imgCLock);
//     divTimer.appendChild(time);
//     divHeader.appendChild(title);
//     divHeader.appendChild(divTimer);
//     divBody.appendChild(ul);
//     this.ingredients.forEach(ingredient => {
//         console.log(ingredient);
//         const li = document.createElement('li');
//         if(ingredient.quantity === undefined){
//             li.innerText = ingredient.ingredient;
//         }
//         else if(ingredient.unit === undefined){
//             li.innerText = ingredient.ingredient + ' : '  + ingredient.quantity;
//         }
//         else{
//          li.innerText = ingredient.ingredient + ' : '  + ingredient.quantity + ' ' + ingredient.unit;   
//         }
//         ul.appendChild(li);
//     })
//     text.innerText = this.description;
//     divBody.appendChild(text);
//     article.appendChild(img);
//     article.appendChild(divHeader);
//     article.appendChild(divBody);
//     sectionCard.appendChild(article);
    
// }

// recipes.forEach(recipe => {
//     createCardReceips(recipe);
// });