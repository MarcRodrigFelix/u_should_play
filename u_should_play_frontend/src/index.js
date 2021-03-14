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
// DELETE GAME EVENT LISTENER
    document.querySelectorAll('.delete').forEach( game => {
      game.addEventListener('click', (e) => {
        FetchGameApi.deleteGame(e.target.dataset.id)
      })
    })
// TOGGLE HIDDEN CLASS FOR EDIT FORM EVENT LISTENER
    document.querySelectorAll('.edit').forEach( editBtn => {
      editBtn.addEventListener('click', (e) => {
        e.target.parentNode.children[6].classList.toggle('hidden')
      })
    })
// ITERATE THROUGH EACH GAME DIV FOR EDIT FORM AND SUBMIT BUTTON
    const eachGameDiv = document.querySelectorAll('.single-game-div')
    for (let gameDiv of eachGameDiv){
      submitEditForm(gameDiv.children, gameDiv.dataset.id) // send each games html tags through and game id
    }
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


function submitEditForm(gameDiv, gameId){
  Array.from(gameDiv).forEach( game => {

    game.addEventListener('submit', (e) => {
      const gameID = e.target.parentNode.id
      const editedGameData = {
        title: e.target.title.value,
        image: e.target.image.value,
        review: e.target.review.value
      }
      FetchGameApi.updateGame(gameID, editedGameData)
    })
  })
};


// click edit to bring up edit form
  // enter info
    // retain values from input boxes
  // click on submit to send info
    // event listener for submit