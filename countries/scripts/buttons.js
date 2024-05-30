import { createAllCards, createCard, iconChange } from './dom.js';
import { countries, getDataAsync, like } from './countries.js';

getDataAsync()
document.getElementById('alpha').addEventListener('click', () => {
    alphabetical();
})


const alphabetical = () => {

    countries.sort((a, b) => {
        return a.name.common.localeCompare(b.name.common);
    });
    cards.innerHTML = '';

    createAllCards();
    iconChange();


}


export { alphabetical }



