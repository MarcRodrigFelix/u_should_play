class Games{


    constructor() {
        this.allGames = []
        this.service = new GameService()
    }


    launchGames(){
       this.service.getGames()
       .then( (games) => {
           Array.from(games).forEach( game => {
              return this.allGames.push(new Game(game))
            })
console.log(this.allGames)
        })

    }
    
}