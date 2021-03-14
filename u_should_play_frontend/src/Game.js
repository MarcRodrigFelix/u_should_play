class Game{

  static comments = []
  
  constructor(gameObject){
    this.id = gameObject.id
    this.title = gameObject.title
    this.image = gameObject.image
    this.review = gameObject.review
    Game.comments.push(gameObject.comments)
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
    </div>`
  }


  renderGameEditForm(){
    return `
    <br>
      <form id="edit-form">
        <input type="text" id="title" name="title" placeholder="Title"><br>
        <br>
        <input type="text" id="image" name="image" placeholder="Image"><br>
        <br>
        <input type="text" id="review" name="review" placeholder="Review"><br>
        <br>
        <input type="submit" value="Submit" name="edit" class="edit-btn">
      </form>`
  }



}