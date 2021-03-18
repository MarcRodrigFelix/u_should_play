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
    <div style="border: 1px solid black; border-length: 25px;"></div>
    <div data-id=${this.id} class="single-game-div">
      <h3>${this.title}</h3>
      <img src=${this.image} style="width: 350px">
      <p>${this.review}</p>
      || <button data-id=${this.id} class="delete"> Delete ${this.title}</button> || <button data-id=${this.id} class="edit" >Edit</button> ||
      <br>
      <div id="${this.id}" class="hidden"  style="display:none;">
        ${this.renderGameEditForm()}
      </div>
      <br>
      <div class="comments-section">
        <div>
          <!-- <button class="comments-btn"> Open Comments </button> -->
          <button data-id=${this.id} class="add"> Add Comment </button>
          <div data-id=${this.id} style="display:none;">
            ${this.addNewComment()}
          </div>
        </div>
        <br>
        <div data-id="${this.id}" class="game-comments">
        </div>
      </div>
      <br>
    </div>`
  }


  renderGameEditForm(){
    return `
    <br>
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
    return `<br>
    <form data-id="${this.id}" id="new-comment-form" >
      <input type="text" id="content" name="content" placeholder="content"><br>
      <br>
      <input type="text" id="commentator" name="commentator" placeholder="commentator"><br>
      <br>
      <!-- <input type="text" id="review" name="review" placeholder="Review"><br> -->
      <br>
      <input type="submit" value="Submit" name="submit" class="add-comm">
    </form>`
  }


  // renderComments(gameComments){
  //   return `
  //     <p><bold>Comment</bold>: ${gameComments[0].content}. By: ${gameComments[0].commentator}.</p>`
  // }
// passes each game comment through to render in HTML
//   renderEachGameComment(commentsArrayObj){
//     return commentsArrayObj.forEach( commentObj => {
//       const newComm = new Comment(commentObj)
// // console.log(newComm)
//       return newComm.renderCommentHTML()
//     })
//   }





// style="height:400px;width:400px;border:1px solid #ccc;font:16px/26px Georgia, Garamond, Serif;overflow:auto;" // scroll box

}