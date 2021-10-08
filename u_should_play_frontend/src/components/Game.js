class Game{
  
  static gameContainer = document.getElementById('games-container')
  static gameList = document.getElementById('games-list')
  static deleteGames = document.getElementsByClassName('delete')
  static service = new GameService()


  constructor(gameObject){
    this.id = gameObject.id
    this.title = gameObject.title
    this.image = gameObject.image
    this.review = gameObject.review
    this.gameComments = gameObject.comments

    this.gamesLi = document.createElement('li')
    this.gamesLi.style.listStyleType = 'none'
  }




  addHTMLToDom(){
    Game.gameList.append(this.renderGameHTML())
  }


  addDeleteFunctionToGame(){
    const btns = document.querySelectorAll('.delete')
    btns.forEach( (deleteButton) => { deleteButton.addEventListener('click', this.deleteThisGame) })
  }


  addUpdateFunctionToGame(){
    const editForms = document.querySelectorAll('#edit-form')
    editForms.forEach( (editForm) => { editForm.addEventListener('submit', this.editFormListener.bind(this)) })
  }


  deleteThisGame(e){
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove() // REMOVE GAME ELEMENT FROM DOM
    Game.service.deleteGame(e.target.dataset.id)
  }


  editFormListener(e){
    e.preventDefault()
    const gameId = e.target.dataset.id
    const editedGameData = {
      title: e.target.title.value,
      image: e.target.image.value,
      review: e.target.review.value
    }
    Game.service.updateGame(gameId, editedGameData)
    e.target.parentNode.parentNode.parentNode.children[1].style.display = 'none'

    const currentGame = document.querySelector( `[data-id="${parseInt(gameId)}"]` )
    currentGame.children[0].children[0].children[0].children[0].innerText = editedGameData.title
    currentGame.children[0].children[0].children[0].children[1].innerText = editedGameData.image
    currentGame.children[0].children[0].children[0].children[2].innerText = editedGameData.review // UPDATE DOM
// console.log(currentGame)
// debugger
  }


  toggleModal(){
    const editBtns = document.querySelectorAll('.edit')
    const closeModalBtns = document.querySelectorAll('.close-modal');

    editBtns.forEach( (edit) => { edit.addEventListener('click', this.openModal) })
    closeModalBtns.forEach( (close) => { close.addEventListener('click', this.closeModal )})
  }


  openModal(e){
    e.target.parentNode.parentNode.parentNode.children[1].style.display = 'none' // MAKE SURE DISPLAY STYLE IS SET TO NONE

    if (e.target.parentNode.parentNode.parentNode.children[1].style.display === 'none'){
        e.target.parentNode.parentNode.parentNode.children[1].style.display = 'block'
      } 
      // else {
      //   e.target.parentNode.parentNode.parentNode.children[1].style.display = 'none'
      // }
  }

  closeModal(e){
    e.target.parentNode.parentNode.parentNode.children[1].style.display = 'none'
  }

  renderGameHTML(){
    this.gamesLi.innerHTML += `
    <div data-id=${this.id} class="single-game-div" ">
      <div class="game-info-section" >

        <div class="inner-game-section">
          <div class="game-info">
            <h2>${this.title}</h2>
            <img src=${this.image} style="width: 260px" >
            <p>${this.review}</p>
          </div>
        </div>

        <div class="inner-game-btns">
          <div class="btns">
            <div class="submit-btn">
              <button data-id=${this.id} class="delete"> Delete ${this.title} </button>
            </div>
            <div class="submit-btn">
              <button class="edit" >Edit</button>
            </div>
          </div>
          <div class="edit-section"">
            ${this.renderGameEditForm()}
          </div>
        </div>
      </div>
        
      <div class="comments-section">
        <div class="add-comment">
          <h3>Add Comments</h3>
            ${this.addNewComment()}
        </div>
        <div data-id="${this.id}" class="game-comments">
          <h4>${this.title} Comments</h4>
          <span style="font-size: 10px;">(hover over comments and scroll to see more)</span>
        </div>
      </div>
    </div>
    `
    return this.gamesLi
  }


  renderGameEditForm(){
    return `
    <div class="modal-content">

      <form data-id="${this.id}" id="edit-form"">
        <div class="game-box">
          <input type="text" id="title" name="title" value="${this.title}">
          <label>Edit Title</label>
        </div>
        <div class="game-box">
          <input type="text" id="image" name="image" value="${this.image}">
          <label>Edit Image URL</label>
        </div>
        <div class="game-box">
          <textarea type="text" id="review" name="review">${this.review}</textarea>
          <label>Edit Reason</label>
        </div>
        <div class="submit-btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <input type="submit" value="Submit" name="submit" class="edit-btn">
        </div>
      </form>

      <button class="close-modal">Close</button>
    </div>`
  }


  addNewComment(){
    return `
    <form data-id="${this.id}" id="new-comment-form" >
      <div class="game-box">
        <input type="text" name="content" required="">
        <label>Comment</label>
      </div>
      <div class="game-box">
        <input type="text"  name="commentator" required="">
        <label>Author</label>
      </div>
      <input type="hidden" name="gameID" value="${this.id}">
      <div class="submit-btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        <input type="submit" value="Submit" name="submit" class="add-comm">
      </div>
    </form>`
  }


  // static closeTheModal(modal){
  //   Array.from(modal).forEach( modalButton => {
  //     console.log(modalButton)
  //     modalButton.addEventListener('click', (e) => {
  //       if (e.target.parentNode.parentNode.style.display === 'block'){
  //         e.target.parentNode.parentNode.style.display = 'none'
  //       } else {
  //         e.target.parentNode.parentNode.style.display = 'block'
  //       }
  //     })
  //   })
  // }

}