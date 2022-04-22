const url ="https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=4c132ca6e34e46b88149c5bd76322d9c";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix =proxy + url;

const resultContainer = document.querySelector(".results");

async function games() {
    
        const response = await fetch(url);
        const results = await response.json();
        const name = results.all;
        
        console.log(results);
        
        resultContainer.innHTML ="";

        for (let i = 0; i < name.lenght; i++) {
            console.log(name[i].text);

            if (i === 8){
                break;
            }

        resultsContainer.innerHTML += `<div class="results">${name[i].text}</div>`;
    }

}
games();