
class FetchGameApi{
  constructor(){
  }

  static getGamesFetch(){
    return fetch("http://localhost:3000/games")
    .then( response => response.json() )
    // .catch( error => console.log(error.message) )
  };


  static postGamesFetch(gameData){
    fetch("http://localhost:3000/games", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(gameData)
    })
    .then( resp => resp.json())
  };


  static deleteGame(gameId){
    const id = parseInt(gameId)
    fetch(`http://localhost:3000/games/${gameId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  };

}



