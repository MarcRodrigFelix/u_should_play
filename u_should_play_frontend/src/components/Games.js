class Games{


    constructor() {
        this.games = []
        this.service = new GameService()
        this.deleteGames(this.games)
    }


    launchGames(){
       this.service.getGames()
       .then( (games) => {
           for (const game of games) {
               this.games.push(new Game(game)) // PUSH EACH NEW GAME INTO THIS.GAMES ARRAY
               const newGame = new Game(game) // CREATE A NEW GAME THROUGH GAME CLASS
               newGame.addHTMLToDom() // RENDER THAT GAMES HTML TO DOM
           }
        })
    }


    createGames(form){
        const formData = new FormData(form)
        const gameData = {
            title: formData.get('title'),
            image: formData.get('image'),
            review: formData.get('review')
        }
        this.service.postGames(gameData)
        this.games.push(new Game(gameData))
        newGame.addHTMLToDom()
    }

}