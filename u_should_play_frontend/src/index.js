const GAMES_URL = 'http://localhost:3000/games';

document.addEventListener('DOMContentLoaded', () => {
  fetchAllGames()
});


function fetchAllGames(){
  fetch( GAMES_URL )
  .then( response => response.json() )
  .then( games => console.log(games) )
  .catch( error => console.log(error.message) )
};