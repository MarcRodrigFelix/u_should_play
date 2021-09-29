class Games{
    constructor() {
        this.games = []
        this.service = new ServiceGame()
        this.getGames()
    }


    getGames(){
        this.service.getGamesFetch()
        .then( games => {
            Array.from(games).forEach( (game) => {
                return this.games.push(game)
            })
        })
    }
}