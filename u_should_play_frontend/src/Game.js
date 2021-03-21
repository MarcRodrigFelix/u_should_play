class Game{

  static comments = []
  
  constructor(gameObject){
    this.id = gameObject.id
    this.title = gameObject.title
    this.image = gameObject.image
    this.review = gameObject.review
    this.gameComments = gameObject.comments
  }



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
          <div class="btns">
            <button data-id=${this.id} class="delete"> Delete ${this.title} </button>
            <button class="edit" >Edit</button> 
          </div>
          <div class="edit-section" style="display: none;">
            ${this.renderGameEditForm()}
          </div>
        </div>
      </div>
        
      <div class="comments-section">
        <div class="add-comment">
          <h3>Add Comments:</h3>
            ${this.addNewComment()}
        </div>
        <div data-id="${this.id}" class="game-comments">
          <h4>${this.title} Comments</h4>
        </div>
      </div>
    </div>`
  }


  renderGameEditForm(){
    return `
      <form data-id="${this.id}" id="edit-form">
        <input type="text" id="title" name="title" value="${this.title}" placeholder="Title"><br>
        <br>
        <input type="text" id="image" name="image" value="${this.image}" placeholder="Image"><br>
        <br>
        <input type="text" id="review" name="review" value="${this.review}" placeholder="Review"><br>
        <br>
        <input type="submit" value="Submit" name="submit" class="edit-btn">
      </form>`
  }


  addNewComment(){
    return `
    <form data-id="${this.id}" id="new-comment-form" >
      <input type="text" id="content" name="content" placeholder="content"><br>
      <br>
      <input type="text" id="commentator" name="commentator" placeholder="commentator"><br>
      <br>
      <input type="hidden" id="gameID" name="gameID" value="${this.id}">
      <input type="submit" value="Submit" name="submit" class="add-comm">
    </form>`
  }


// style="height:400px;width:400px;border:1px solid #ccc;font:16px/26px Georgia, Garamond, Serif;overflow:auto;" // scroll box

}