// making a fork
/* 
const url = "https://api.noroff.dev/api/v1/old-games/2";

async function getOldGames() {
    try {
        const respond = await fetch(url);
        const data = await respond.json();

        console.log(data);

        const outmostDiv = document.querySelector(".container")
        //PUT OUTSIDE ASYNC FUNC

        outmostDiv.innerHTML = "";

        outmostDiv.innerHTML = `<div> 
                        <h2> Name of game: ${data.name} </h2> 
                        <p> About this game:</p> <p>${data.description}</p>
                        <img src="${data.image}" alt="${data.name}">
                        
                    </div>`;
        // THIS WHOLE THING SHOULD BE ITS OWN FUNCTION, AND BE OUTSIDE, AND 
        //GETS UNDFINED? BAD CONNECTION?



    }

    catch (error) {

        console.log(error, "Ooopsie, finn minst en feil")

    }
}

getOldGames();


 */

//Display the name, description and image of the game returned.
// first, display anything
// i think i did it?? !! all from my head!
// now

///////////// FASIT

/* const url = 'https://api.noroff.dev/api/v1/old-games/2';
//HAD THIS ONE

const detailContainer = document.querySelector('.details');
// SELECTED OUTER ELEMENT, AND PUT SELEVTION INSIDE FUNC, NEXT TIME PUT IT OUTSIDE FOR READABILITY


// We need an async function as we are using async await
async function fetchCharacter() {
    //YES
    try {
        //YES
        const response = await fetch(url);
        //YES
        const result = await response.json();
        //YES
        const details = result;
        //WHEN I REMOVE THIS LINE, AND JUST USE THE RESULT VARIABLE, EVERYTHING LOOK STHE SAME
        // SO WHAT IS IT FOR??!?
        // SOMETHING GOES WRONG AFTER A WHILE, WHEN THIS IS COMMENTED OUT, 
        // NO ACTUALLY IT JUST HAPPENS RANDOMLY, PUT IS BACK IN AND IT STILL HAPPENS



        // Pass the details to the function that will create the HTML
        // SO THIS IS HOW YOU CAN HAVE THE FUNCTION OUTSIDE THE API CALL! :D
        createHtml(details);

    } catch (error) {
        console.log(error);
        detailContainer.innerHTML = error;
    }
}

// call the function
fetchCharacter();

function createHtml(details) {
    detailContainer.innerHTML = `<h1 class="name">${details.name}</h1>
  <div class="status">${details.description}</div>
  <div class="image" style="background-image: url('${details.image}')"></div>`;
} */


//// redoing my attempt

const url = "https://api.noroff.dev/api/v1/old-games/2";



async function getOldGames() {
    try {
        const respond = await fetch(url);
        const data = await respond.json();

        console.log(data);

        const outmostDiv = document.querySelector(".container")
        //PUT OUTSIDE ASYNC FUNC

        outmostDiv.innerHTML = "";

        outmostDiv.innerHTML = `<div> 
                        <h2> Name of game: ${data.name} </h2> 
                        <p> About this game:</p> <p>${data.description}</p>
                        <img src="${data.image}" alt="${data.name}">
                        
                    </div>`;
        // THIS WHOLE THING SHOULD BE ITS OWN FUNCTION, AND BE OUTSIDE, AND 
        //GETS UNDFINED? BAD CONNECTION?



    }

    catch (error) {

        console.log(error, "Ooopsie, finn minst en feil")

    }
}

getOldGames();