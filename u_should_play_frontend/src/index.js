
document.addEventListener('DOMContentLoaded', () => {
  fetchAndRenderGames();
  addNewGameFromForm(newGameForm);
});



function fetchAndRenderGames(){
  FetchGameApi.getGamesFetch()
  .then( gamesObj => {
    gamesObj.forEach( gameObject => {
    const newGame = new Game(gameObject)
    document.getElementById('all-games').innerHTML += newGame.renderGameHTML();
  })
  
  document.querySelectorAll('.delete').forEach( game => {
    game.addEventListener('click', (e) => {
      deleteGame(e.target.dataset.id)
    })
  })
})
}
// function renderGameComments(gameComms, game){
//   gameComms.forEach( comm => `comment: ${comm.content} user: ${comm.commentator} game: ${game}` )
// };




// listen to form, and POST game

const newGameForm = document.getElementById('new-game-form');

function addNewGameFromForm(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)
    const gameData = {
      title: formData.get('title'),
      image: formData.get('image'),
      review: formData.get('review')
    }
    FetchGameApi.postGamesFetch(gameData)
  })
};



// EDIT or DELETE game POST

function deleteGame(gameId){
  let id = parseInt(gameId)
  fetch(`http://localhost:3000/games/${gameId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
}