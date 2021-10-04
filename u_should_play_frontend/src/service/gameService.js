
class GameService{

  constructor(){
    this.baseUrl = "http://localhost:3000/games"
  }

  getGames(){
    return fetch(this.baseUrl)
    .then( response => response.json() )
  };


  postGames(gameData){
    fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gameData)
    })
    .then( resp => { resp.json() })
  };

  
  updateGame(gameId, gameData){
    fetch(`http://localhost:3000/games/${gameId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(gameData)
    })
  };


  deleteGame(gameId){
    const id = parseInt(gameId)
    fetch(`http://localhost:3000/games/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  };



}