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
        </div>

        <div class="inner-game-btns">
          <div class="btns">
            <div class="submit-btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button data-id=${this.id} class="delete"> Delete ${this.title} </button>
            </div>
            <div class="submit-btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button class="edit" >Edit</button>
            </div>
          </div>
          <div class="edit-section" style="display: none;">
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


// style="height:400px;width:400px;border:1px solid #ccc;font:16px/26px Georgia, Garamond, Serif;overflow:auto;" // scroll box

}