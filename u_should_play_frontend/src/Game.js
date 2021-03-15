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
    <div data-id=${this.id} class="single-game-div">
      <h3>${this.title}</h3>
      <img src=${this.image} style="width: 350px">
      <p>${this.review}</p>
      || <button data-id=${this.id} class="delete"> Delete ${this.title}</button> || <button data-id=${this.id} class="edit" >Edit</button> ||
      <br>
      <div id="${this.id}" class="hidden">
        ${this.renderGameEditForm()}
      </div>
      <div class="comments">
      <h3>Comments Section: </h3>
        <ul>
          <li>${this.renderComments(this.gameComments)}</li>
        </ul>
      </div>
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


  renderComments(gameComments){
    return `
      <p><bold>Comment</bold>: ${gameComments[0].content}. By: ${gameComments[0].commentator}.</p>`
  }

}