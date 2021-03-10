const GAMES_URL = 'http://localhost:3000/games';

document.addEventListener('DOMContentLoaded', () => {
  fetchAllGames()
});


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
        document.getElementById('all-games').innerHTML += gameHTMLContent
    })
  } )
  .catch( error => console.log(error.message) )
};