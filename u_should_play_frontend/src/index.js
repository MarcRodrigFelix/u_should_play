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
//       const newGameComms = new Comment(newGame.gameComments)
// console.log(newGameComms)
      document.getElementById('all-games').innerHTML += newGame.renderGameHTML();
    });
// DELETE GAME EVENT LISTENER
    document.querySelectorAll('.delete').forEach( game => {
      game.addEventListener('click', (e) => {
        FetchGameApi.deleteGame(e.target.dataset.id)
      })
    });
// TOGGLE HIDDEN CLASS FOR EDIT FORM EVENT LISTENER
    document.querySelectorAll('.edit').forEach( editBtn => {
      editBtn.addEventListener('click', (e) => {
        e.target.parentNode.children[6].classList.toggle('hidden')
      })
    });
// ITERATE THROUGH EACH EDIT FORM AND SUBMIT BUTTON
let editForms = document.querySelectorAll('#edit-form')
    for (let editForm of editForms){
      submitEditForm(editForm) // send each edit form through
    }
  })
};


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


// listen to edit form submit button and PATCH game
function submitEditForm(editForm){
  editForm.addEventListener('click', (e) => {
e.preventDefault()
    if (e.target.className === 'edit-btn'){
      const gameID = e.target.parentNode.dataset.id
      const editedGameData = {
        title: e.target.parentNode.title.value,
        image: e.target.parentNode.image.value,
        review: e.target.parentNode.review.value
      }
      FetchGameApi.updateGame(gameID, editedGameData)
    }
  })
};