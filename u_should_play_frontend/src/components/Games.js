class Games{


    constructor() {
        this.games = []
        this.service = new GameService()
        this.launchGames()
    }


    launchGames(){
       return this.service.getGames()
       .then( (games) => { 
           Array.from(games).forEach( game => { debugger } ) 
        })
    }
    
}