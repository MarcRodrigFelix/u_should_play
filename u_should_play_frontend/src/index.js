const newGameForm = document.getElementById('new-game-form');
// const eachGameDiv = document.getElementsByClassName('single-game-div')


document.addEventListener('DOMContentLoaded', () => {
  fetchAndRenderGames();
  addNewGameFromForm(newGameForm);
});


function fetchAndRenderGames(){
  FetchGameApi.getGamesFetch()
    .then( gamesObj => {
      gamesObj.forEach( gameObject => {
      const newGame = new Game(gameObject) // create a new game with Game class
      //const newGameComms = new Comment(newGame.gameComments[0]) // create a new comment with Comment class
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
        if (e.target.parentNode.children[6].style.display === 'none'){
          e.target.parentNode.children[6].style.display = 'block'
        } else {
          e.target.parentNode.children[6].style.display = 'none'
        }
      })
    });
// ITERATE THROUGH EACH EDIT FORM AND SUBMIT BUTTON
const editForms = document.querySelectorAll('#edit-form');

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
  console.log(editForm)
  editForm.addEventListener('submit', (e) => {
e.preventDefault()
      const gameID = e.target.dataset.id
      const editedGameData = {
        title: e.target.title.value,
        image: e.target.image.value,
        review: e.target.review.value
      }
      FetchGameApi.updateGame(gameID, editedGameData)
  })
};
