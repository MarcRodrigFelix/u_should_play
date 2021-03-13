const newGameForm = document.getElementById('new-game-form');


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
      FetchGameApi.deleteGame(e.target.dataset.id)
    })
  })
})
}


// listen to form, and POST game
function addNewGameFromForm(form){
  form.addEventListener('submit', (e) => {
    let formData = new FormData(e.target)
    const gameData = {
      title: formData.get('title'),
      image: formData.get('image'),
      review: formData.get('review')
    }
    FetchGameApi.postGamesFetch(gameData)
  })
};