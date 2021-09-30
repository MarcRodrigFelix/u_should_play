class Games{


    constructor() {
        this.games = []
<<<<<<< HEAD
        this.service = new GameService()
        this.launchGames()
    }


    launchGames(){
       return this.service.getGames()
       .then( (games) => { 
           Array.from(games).forEach( game => { debugger } ) 
=======
        this.service = new ServiceGame()
        this.getGames()
    }


    getGames(){
        this.service.getGamesFetch()
        .then( games => {
            Array.from(games).forEach( (game) => {
                return this.games.push(game)
            })
>>>>>>> 10e82dd7f577f4fc511ca154bc34029d0a3062ba
        })
    }
    
}