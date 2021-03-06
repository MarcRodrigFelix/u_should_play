class Comment{
  constructor(commentObject){
    this.content = commentObject.content
    this.commentator = commentObject.commentator
    this.game_id = commentObject.game_id
  }

  static postCommentFetch(formData){
    fetch("http://localhost:3000/comments", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then( resp => resp.json())
  }



  renderCommentHTML(){
    return `
    <div>
      <p>${this.commentator}:</p>
      <p>"${this.content}"</p>
    </div>
    `
  }

}