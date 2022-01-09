class Comment{

  constructor( comments ){
    // this.content = commentObject.content
    // this.commentator = commentObject.commentator
    // this.game_id = commentObject.game_id
    // this.id = id 
    // this.content = content
    // this.commentator = commentator
    // this.game_id = game_id
    this.comments = comments
    this.cons()
// console.log(comments)
  }

  cons(){
    console.log('hello')
    console.log(this.comments)
    // console.log(this.id)
    // console.log(this.content)
    // console.log(this.commentator)
    // console.log(this.game_id)
  }

  // static postCommentFetch(formData){
  //   fetch("http://localhost:3000/comments", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify(formData)
  //   })
  //   .then( resp => resp.json())
  // }



  renderCommentHTML(){
    return `
    <div>
      <p>${this.commentator}:</p>
      <p>"${this.content}"</p>
    </div>
    `
  }

}