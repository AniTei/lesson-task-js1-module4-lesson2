// making a fork

const url = "https://api.noroff.dev/api/v1/old-games/2";

async function getOldGames (){
    try {
        const respond = await fetch(url);
        const data = await respond.json();

        console.log (data);

        const outmostDiv = document.querySelector (".container")

outmostDiv.innerHTML = "";

outmostDiv.innerHTML = `<div> 
                        <h2> Name of game: ${data.name} </h2> 
                        <p> About this game:</p> <p>${data.description}</p>
                        <img src="${data.image}" alt="${data.name}">
                        
                    </div>`;



    }

    catch(error){

        console.log (error, "Ooopsie, finn minst en feil")

    }
}

getOldGames();




//Display the name, description and image of the game returned.
// first, display anything

