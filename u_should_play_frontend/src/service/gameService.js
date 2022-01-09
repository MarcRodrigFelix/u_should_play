
class GameService{

  constructor(){
    this.baseUrl = "http://localhost:3000/games"
  }

  getGames(){
    return fetch(this.baseUrl)
    .then( response => response.json() )
    // .then( json => console.log(json) )
  };


  postGames(gameData){
    fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gameData)
    })
    .then( response => { response.json() })
  };

  
  updateGame(gameId, gameData){
    fetch(`${this.baseUrl}/${gameId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gameData)
    })
    .then( response => { response.json() })
  };


  deleteGame(gameId){
    fetch(`${this.baseUrl}/${gameId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  };



}