const arr = [];
function apiChoose() {
    const chooseElement = document.querySelector("#choose");
    const chooseValue = chooseElement.value;
    const results = document.querySelector(".result");

    if (chooseValue === "films") {
        filmsFetch(chooseValue);
    }
    else if (chooseValue === "people") {
        peopleFetch(chooseValue);
    }
    else if (chooseValue === "planets") {
        planetsFetch(chooseValue);
    } else if (chooseValue === "species") {
        speciesFetch(chooseValue);

    }

    function filmsFetch() {
        startLoader()
        document.querySelector('tbody').style.display = 'none';
        document.querySelector('tbody').innerHTML = '';
        document.querySelector('th').innerHTML = "Title";
        document.querySelector('th:nth-child(2)').innerHTML = "Director";
        document.querySelector('th:nth-child(3)').innerHTML = "Release_date";
        document.querySelector('th:nth-child(4)').innerHTML = "Episode_id";
        document.querySelector('th:nth-child(5)').innerHTML = "Producer";
        document.querySelector('th:nth-child(6)').innerHTML = "Characters";

        let charactersCount = 0; // Track number of characters fetched
        let totalCharacters; // Total number of characters to be fetched

        fetch(`https://swapi.dev/api/${chooseValue}/`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("fetch unsuccessful");
                } else {
                    return res.json();
                }
            })
            .then(data => {
                const arr = data.results;
                totalCharacters = arr.reduce((total, arr) => total + arr.characters.length, 0);
                console.log(arr);
                arr.forEach(elem => {
                    const tr = document.createElement("tr");
                    tr.innerHTML = `
                    <td>${elem.title}</td>
                    <td>${elem.director}</td>
                    <td>${elem.release_date}</td>
                    <td>${elem.episode_id}</td>
                    <td>${elem.producer}</td>
                    <td class="characters"></td>
                `;
                    document.querySelector('tbody').appendChild(tr);

                    const charactersTd = tr.querySelector('.characters');

                    elem.characters.forEach(characterUrl => {
                        fetch(characterUrl)
                            .then(characterResponse => {
                                if (!characterResponse.ok) {
                                    throw new Error("Character fetch unsuccessful");
                                }
                                return characterResponse.json();
                            })
                            .then(characterData => {
                                const characterId = extractId(characterData.url);
                                const characterImg = document.createElement('img');
                                characterImg.src = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
                                characterImg.alt = characterData.name;
                                charactersTd.appendChild(characterImg);

                                // Increment charactersCount when a character is fetched
                                charactersCount++;

                                // Check if all characters are fetched
                                if (charactersCount === totalCharacters) {
                                    // Display tbody when all pictures are loaded
                                    document.querySelector('tbody').style.display = 'table-row-group';
                                    stopLoader();


                                }
                            })
                            .catch(err => {
                                console.error('Error fetching character data:', err);
                            });
                    });
                })
            })
            .catch(err => {
                console.error(err);
            });
    }
}

function peopleFetch(chooseValue) {
    startLoader()
    document.querySelector('tbody').style.display = 'none';
    document.querySelector('tbody').innerHTML = '';
    document.querySelector('th').innerHTML = "name";
    document.querySelector('th:nth-child(2)').innerHTML = "birth_year";
    document.querySelector('th:nth-child(3)').innerHTML = "gender";
    document.querySelector('th:nth-child(4)').innerHTML = "height";
    document.querySelector('th:nth-child(5)').innerHTML = "skin_color";
    document.querySelector('th:nth-child(6)').innerHTML = "films";

    let filmsCount = 0; // Track number of characters fetched
    let totalFilms; // Total number of characters to be fetched

    fetch(`https://swapi.dev/api/${chooseValue}/`)
        .then(res => {
            if (!res.ok) {
                throw new Error("fetch unsuccessful");
            } else {
                return res.json();
            }
        })
        .then(data => {
            const arr = data.results;
            totalFilms = arr.reduce((total, arr) => total + arr.films.length, 0);
            console.log(arr);
            arr.forEach(elem => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${elem.name}</td>
                    <td>${elem.birth_year}</td>
                    <td>${elem.gender}</td>
                    <td>${elem.height}</td>
                    <td>${elem.skin_color}</td>
                    <td class="films"></td>

                `;
                document.querySelector('tbody').appendChild(tr);

                const filmsTd = tr.querySelector('.films');

                elem.films.forEach(filmsUrl => {
                    fetch(filmsUrl)
                        .then(filmsResponse => {
                            if (!filmsResponse.ok) {
                                throw new Error("films fetch unsuccessful");
                            }
                            return filmsResponse.json();
                        })
                        .then(filmsData => {
                            const filmsId = extractId(filmsData.url);
                            const filmsImg = document.createElement('img');
                            filmsImg.src = `https://starwars-visualguide.com/assets/img/films/${filmsId}.jpg`;
                            filmsImg.alt = filmsData.name;
                            filmsTd.appendChild(filmsImg);
                            // Increment charactersCount when a character is fetched
                            filmsCount++;

                            // Check if all characters are fetched
                            if (filmsCount === totalFilms) {
                                // Display tbody when all pictures are loaded
                                document.querySelector('tbody').style.display = 'table-row-group';
                                stopLoader();


                            }
                        })
                        .catch(err => {
                            console.error('Error fetching character data:', err);
                        });
                });
            })
        })
        .catch(err => {
            console.error(err);
        });
}


function planetsFetch(chooseValue) {
    startLoader()
    document.querySelector('tbody').style.display = 'none';
    document.querySelector('tbody').innerHTML = '';
    document.querySelector('th').innerHTML = "name";
    document.querySelector('th:nth-child(2)').innerHTML = "population";
    document.querySelector('th:nth-child(3)').innerHTML = "diameter";
    document.querySelector('th:nth-child(4)').innerHTML = "climate";
    document.querySelector('th:nth-child(5)').innerHTML = "terrain";
    document.querySelector('th:nth-child(6)').innerHTML = "orbital_period";


    fetch(`https://swapi.dev/api/${chooseValue}/`)
        .then(res => {
            if (!res.ok) {
                throw new Error("fetch unsuccessful");
            } else {
                return res.json();
            }
        })
        .then(data => {
            const arr = data.results;
            console.log(arr);
            arr.forEach(elem => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${elem.name}</td>
                    <td>${elem.population}</td>
                    <td>${elem.diameter}</td>
                    <td>${elem.climate}</td>
                    <td>${elem.terrain}</td>
                    <td>${elem.orbital_period}</td>

                `;
                document.querySelector('tbody').appendChild(tr);
            });

            document.querySelector('tbody').style.display = 'table-row-group';
            stopLoader();
        })
        .catch(err => {
            console.error(err);
        });
}


function speciesFetch(chooseValue) {
    startLoader()
    document.querySelector('tbody').style.display = 'none';
    document.querySelector('tbody').innerHTML = '';
    document.querySelector('th').innerHTML = "name";
    document.querySelector('th:nth-child(2)').innerHTML = "classification";
    document.querySelector('th:nth-child(3)').innerHTML = "language";
    document.querySelector('th:nth-child(4)').innerHTML = "skin_colors";
    document.querySelector('th:nth-child(5)').innerHTML = "average_lifespan";
    document.querySelector('th:nth-child(6)').innerHTML = "average_height";


    fetch(`https://swapi.dev/api/${chooseValue}/`)
        .then(res => {
            if (!res.ok) {
                throw new Error("fetch unsuccessful");
            } else {
                return res.json();
            }
        })
        .then(data => {
            const arr = data.results;
            console.log(arr);
            arr.forEach(elem => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${elem.name}</td>
                    <td>${elem.classification}</td>
                    <td>${elem.language}</td>
                    <td>${elem.skin_colors}</td>
                    <td>${elem.average_lifespan}</td>
                    <td>${elem.average_height}</td>

                `;
                document.querySelector('tbody').appendChild(tr);
            });

            document.querySelector('tbody').style.display = 'table-row-group';
            stopLoader();
        })
        .catch(err => {
            console.error(err);
        });
}

function extractId(url) {
    return url.split('/').slice(-2, -1)[0];
}

function startLoader() {
    document.querySelector('.loader').style.display = 'block';
}
function stopLoader() {
    document.querySelector('.loader').style.display = 'none';
}
