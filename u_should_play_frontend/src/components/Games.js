class Games{


    constructor() {
        this.games = []
        this.service = new GameService()
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
    const service = this.service
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const formData = new FormData(e.target)
            const gameData = {
                title: formData.get('title'),
                image: formData.get('image'),
                review: formData.get('review')
            }
            service.postGames(gameData)
        })

    }

}