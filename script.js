const arr = [];

function apiChoose() {
    const chooseElement = document.querySelector("#choose");
    const chooseValue = chooseElement.value;
    const results = document.querySelector(".result");

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

// Simplified extractId function
function extractId(url) {
    return url.split('/').slice(-2, -1)[0];
}
