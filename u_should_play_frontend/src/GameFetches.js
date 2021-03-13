
class FetchGameApi{
  constructor(){
    // this.BASE_URL = "http://localhost:3000/games"
  }

  static getGamesFetch(){
    return fetch("http://localhost:3000/games")
    .then( response => response.json() )
    // .catch( error => console.log(error.message) )
  }


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
}