const GAMES_URL = 'http://localhost:3000/games';

document.addEventListener('DOMContentLoaded', () => {
  fetchAllGames()
  addNewGameFromForm(newGameForm);
});

// FETCH games and render to html

function fetchAllGames(){
  fetch( GAMES_URL )
  .then( response => response.json() )
  .then( games => {
    games.forEach( game => {

      const gameHTMLContent = `
        <div data-id=${game.id}>
          <h3>${game.title}</h3>
          <img src=${game.image} style="width: 350px">
          <p>${game.review}</p>
        </div>`
      
      document.getElementById('all-games').innerHTML += gameHTMLContent;

      renderGameComments(game.comments, game.title)
    })
  } )
  .catch( error => console.log(error.message) )
};


function renderGameComments(gameComms, game){
  gameComms.forEach( comm => console.log(`comment: ${comm.content} user: ${comm.commentator} game: ${game}`) )
};




// listen to form, and POST game

const newGameForm = document.getElementById('new-game-form');

function postNewGameData(gameData){
  fetch("http://localhost:3000/games", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(gameData)
  })
  .then( resp => resp.json())
};


function addNewGameFromForm(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)
    const gameData = {
      title: formData.get('title'),
      image: formData.get('image'),
      review: formData.get('review')
    }
    postNewGameData(gameData)
  })
};






// EDIT or DELETE game POST