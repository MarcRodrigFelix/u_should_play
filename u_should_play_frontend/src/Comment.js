class Comment{
  constructor(commentObject){
    this.content = commentObject.content
    this.commentator = commentObject.commentator
    this.game_id = commentObject.game_id
  }

  static postCommentFetch(formData){
    fetch('http://localhost:3000/comments', {
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
      <h4>By:<h4><span>${this.commentator}</span>
      <h4>Comment:</h4><p>"${this.content}"</p>
    `
  }



  // static addComment(){
  //   return `<br>
  //   <div data-id=${this.game_id} id="new-comment-div">
  //   <form id="new-comment-form" >
  //     <input type="text" id="content" name="content" placeholder="content"><br>
  //     <br>
  //     <input type="text" id="commentator" name="commentator" placeholder="commentator"><br>
  //     <br>
  //     <!-- <input type="text" id="review" name="review" placeholder="Review"><br> -->
  //     <br>
  //     <input type="submit" value="Submit" name="submit" class="add-comm">
  //   </form>
  //   </div>`
  // };


}