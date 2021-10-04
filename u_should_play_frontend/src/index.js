const newGameForm = document.getElementById('new-game-form');
const addNewComment = document.getElementsByClassName('add');
const eachGameDiv = document.getElementsByClassName("single-game-div");
const gamesContainers = document.getElementById('games-container');

const games = new Games()
games.launchGames()
games.createGames(newGameForm)

// addNewGameFromForm(newGameForm);






// START ===================================================  ORIGINAL CODE! (GROSS)





// document.addEventListener('DOMContentLoaded', () => {
  // fetchAndRenderGames();
  // addNewGameFromForm(newGameForm);
// });


// function fetchAndRenderGames(){
  
  

  // const service = new GameService()
  // service.getGamesFetch()
  //   .then( gamesObj => {
  //     gamesObj.forEach( gameObject => {
  //     const newGame = new Game(gameObject) // create a new game with Game class
  //     const renderGame = newGame.renderGameHTML()
  //     document.getElementById('all-games').innerHTML += renderGame
  //     showEachGameComments(newGame.gameComments, newGame.id); // SEND THROUGH EACH GAME COMMENT TO MAKE A COMMENT CLASS AND RENDER HTML
  //   });

  //   document.querySelectorAll('.delete').forEach( game => {   // DELETE GAME EVENT LISTENER
  //     game.addEventListener('click', (e) => {
  //       FetchGameApi.deleteGame(e.target.dataset.id)
  //     })
  //   });

  //   document.querySelectorAll('.edit').forEach( editBtn => {  // TOGGLE HIDDEN CLASS FOR EDIT FORM EVENT LISTENER
  //     editBtn.addEventListener('click', (e) => {
  //   // e.preventDefault()
  //       // e.target.parentNode.parentNode.parentNode.children[1].style.display.toggle()
  //       if (e.target.parentNode.parentNode.parentNode.children[1].style.display === 'none'){
  //         e.target.parentNode.parentNode.parentNode.children[1].style.display = 'block'
  //       } else {
  //         e.target.parentNode.parentNode.parentNode.children[1].style.display = 'none'
  //       }
  //     })
  //   });

  //   const editForms = document.querySelectorAll('#edit-form');  // ITERATE THROUGH EACH EDIT FORM AND SUBMIT BUTTON
  //   for (let editForm of editForms){
  //       submitEditForm(editForm)  // send each edit form through
  //   }

  //   Array.from(addNewComment).forEach( addBtn => {
  //     addBtn.addEventListener('click', (e) => {
  //       // console.log(e.target.parentNode.children[1].style.display)
  //       if (e.target.parentNode.children[1].style.display === 'none'){
  //         e.target.parentNode.children[1].style.display = 'block'
  //       } else {
  //         e.target.parentNode.children[1].style.display = 'none'
  //       }
  //     })
  //   })

  //   const newCommentForm = document.querySelectorAll( '#new-comment-form' );
  //   submitNewComment( newCommentForm )

  //   const closeModal = document.querySelectorAll('.close-modal');
  //   Game.closeTheModal( closeModal )
  // })
// };

// END ===================================================  ORIGINAL CODE! (GROSS)



function showEachGameComments( gameComments, gameId ){
  let currentGameId = gameId
  let currentGame = document.querySelector( `[data-id="${parseInt(currentGameId)}"]` ) // get game by game_id
  Array.from( gameComments ).forEach( gameDiv => {
    let newComment = new Comment( gameDiv )
    currentGame.getElementsByClassName('game-comments')[0].innerHTML += newComment.renderCommentHTML() // render a New Comment into game html
  })
};



// listen to form, and POST game
// function addNewGameFromForm( form ){
//   form.addEventListener( 'submit', (e) => {
// e.preventDefault()
//     let formData = new FormData( e.target )
//     const gameData = {
//       title: formData.get( 'title' ),
//       image: formData.get( 'image' ),
//       review: formData.get( 'review' )
//     }
//     FetchGameApi.postGamesFetch( gameData )
//   })
// };



// listen to edit form submit button and PATCH game
function submitEditForm(editForm){
  editForm.addEventListener('submit', (e) => {
e.preventDefault()
// console.log(e.target.parentNode)
      const gameID = e.target.dataset.id
      const editedGameData = {
        title: e.target.title.value,
        image: e.target.image.value,
        review: e.target.review.value
      }
      FetchGameApi.updateGame(gameID, editedGameData)
  })
};



function submitNewComment(form){
  form.forEach( commentData => {
console.log(commentData)
    commentData.addEventListener('submit', (e) => {
      e.preventDefault()
      const formData = new FormData( e.target )
      const newCommentData = {
        content: formData.get( 'content' ),
        commentator: formData.get( 'commentator' ),
        gameID: formData.get( 'gameID' )
      }
      Comment.postCommentFetch(newCommentData)
    })
  })
};