import { countries, reset, search as goSearch, like } from './countries.js';
let countriesLike = [];
let index = 1;
const hearts = document.querySelectorAll('.fa-heart');
const search = document.getElementById('search');
const cards = document.getElementById('cards');
search.addEventListener('input', (e) => {
    const word = e.target.value;
    cards.innerHTML = '';
    reset();
    if (word === '' || word === null) {
        cards.innerHTML = '';
        createAllCards();
    }
    goSearch(word);
    createAllCards();
});

const createCard = (country, index) => {

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card shadow rounded m-2 col-md-3 col-sm-10';

    const cardImg = document.createElement('img');
    cardImg.src = country.flags.png;
    cardImg.className = 'card-img-top img border shadow rounded mt-2';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = country.name.common;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = `capital: ${country.capital}`;

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer d-flex justify-content-center';

    const heartIcon = document.createElement('i');
    heartIcon.className = 'fa fa-heart text-secondary';
    heartIcon.setAttribute('data-id', index);

    cardDiv.appendChild(cardImg);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    cardDiv.appendChild(cardBody);
    cardFooter.appendChild(heartIcon);
    cardDiv.appendChild(cardFooter);

    cards.appendChild(cardDiv);
}

const createAllCards = () => {
    countries.forEach((country, index) => {
        createCard(country, index);
        index++;
    });
}

const iconChange = () => {
    const hearts = document.querySelectorAll('.fa-heart');
    hearts.forEach((heart) => {
        heart.addEventListener('click', (e,) => {
            if (e.target.classList.contains('text-secondary')) {
                e.target.classList.remove('text-secondary');
                e.target.classList.add(('text-danger'));
                console.log(e.target);
                countriesLike.push((e.target));

            } else {
                e.target.classList.remove('text-danger');
                e.target.classList.add(('text-secondary'));
                countriesLike.splice(countriesLike.indexOf(e.target), 1);

            }
            for (let i = 0; i < countriesLike.length; i++) {
                localStorage.like = countriesLike
                console.log(localStorage.like);
            }
        });
    });


}
document.addEventListener('DOMContentLoaded', () => {
    like();
    iconChange();
});



export { createAllCards, iconChange, hearts };