class Game{
  
  constructor(gameObject){
    this.id = gameObject.id
    this.title = gameObject.title
    this.image = gameObject.image
    this.review = gameObject.review
    this.gameComments = gameObject.comments
  }


  // initializeGame(){
  //   const games = new Games()
  //   games.getGames()
  // }


  renderGameHTML(){
    return `
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
    </div>`
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


  static closeTheModal(modal){
    Array.from(modal).forEach( modalButton => {
      console.log(modalButton)
      modalButton.addEventListener('click', (e) => {
        if (e.target.parentNode.parentNode.style.display === 'block'){
          e.target.parentNode.parentNode.style.display = 'none'
        } else {
          e.target.parentNode.parentNode.style.display = 'block'
        }
      })
    })
  }

}