import {recipes} from  "../../data/recipes.js";



function createCardReceips(array){
    const sectionCard = document.querySelector('.receips-display');
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
    title.innerText = array.name;
    time.innerText = array.time + " min";
    imgCLock.setAttribute('src', 'image/icon/clock.svg');
    divTimer.appendChild(imgCLock);
    divTimer.appendChild(time);
    divHeader.appendChild(title);
    divHeader.appendChild(divTimer);
    divBody.appendChild(ul);
    array.ingredients.forEach(ingredient => {
        console.log(ingredient);
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
        ul.appendChild(li);
    })
    text.innerText = array.description;
    divBody.appendChild(text);
    article.appendChild(img);
    article.appendChild(divHeader);
    article.appendChild(divBody);
    sectionCard.appendChild(article);
    
}

recipes.forEach(recipe => {
    createCardReceips(recipe);
});