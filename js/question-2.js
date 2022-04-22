const url ="https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=4c132ca6e34e46b88149c5bd76322d9c";

const gamesections =document.querySelector(".container");

async function games() {
    try{
        const respons = await fetch(url);

        const results = await respons.json();
    
        const itemInfo = results.results;
    
        gamesections.innerHTML = "";
    
        for(let i = 0; i < itemInfo.length; i++) {
            console.log(itemInfo[i].name);
            console.log(itemInfo[i].rating);
            console.log(itemInfo[i].tags.length);
    
            if (i === 8){
                break;
            }
    
            gamesections.innerHTML += `<div class="gamecontainer">
            <p>Game: ${itemInfo[i].name} </p>
            <p>Rating: ${itemInfo[i].rating} </p>
            <p>Number of tags:${itemInfo[i].tags.length} </p>  
            </div>`
        }

    } catch(error) {
        console.log("ohhh no something whent wrong");
        gamesections.innerHTML = "ohhh no something whent wrong"
    }
}


games();