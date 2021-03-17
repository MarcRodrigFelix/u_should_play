class Comment{
  constructor(commentObject){
    this.content = commentObject.content
    this.commentator = commentObject.commentator
    this.game_id = commentObject.game_id
  }


  renderCommentHTML(){
    return `
    <div id=${this.game_id}>
      <h4>${this.commentator}<h4>
      <p>${this.content}</p>
    </div>`
  }
}