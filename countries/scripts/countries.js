let countries = [];
let countriesFull = [];
let countriesLike = [];
import { hearts, iconChange } from "./dom.js";


const getDataAsync = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await res.json();
        countries = data;
        countriesFull = [...data];
    } catch (err) {
        console.log(err);
    }
}

const reset = () => {
    countries = [...countriesFull];
    iconChange()
}



const like = () => {
    countriesLike = localStorage.getItem('like');
    if (!localStorage) {
        countriesLike = []
        return;
    }
    else {
        const hearts = document.querySelectorAll('.fa-heart');
        hearts.forEach(elem => {
            const heartIds = elem.getAttribute('data-id');
            if (countriesLike.includes(heartIds)) {
                elem.classList.remove('text-secondary')
                elem.classList.add('text-danger')
            }

        })
    }
}
const goSearch = (word) => {

    countries = countries.filter((country) => {
        const name = country.name.common.toLowerCase();
        return name.includes(word.toLowerCase());

    });
    iconChange();
    like();

}
export { getDataAsync, countries, goSearch, reset, like };