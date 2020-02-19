import {Characters} from './names'


class StarWars{
  constructor(){
    this.characters = new Characters
    this.getPeople()

}
getPeople(){
  this.characters.getUsers().then(data => data.results.forEach(item => console.log(item)))
}
printToDOM(data){
  document.getElementsById('name').innerHTML = 'peter'


}
}


const peter = new StarWars
