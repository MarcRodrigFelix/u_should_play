class Comments{

    constructor(comments){
        this.comments = comments
    }


    getCommentsFromGames(){
        // console.log(this.comments)
        this.comments.forEach( (comment) => {
            const newComment = new Comment(comment)
console.log(newComment)
        })
    }
}