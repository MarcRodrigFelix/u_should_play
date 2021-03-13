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
      <p>${new Comment(Game.comments).renderCommentHTML()}
      <button class=game-${this.id}>Delete ${this.title}</button>
    </div>`
  }

 


}