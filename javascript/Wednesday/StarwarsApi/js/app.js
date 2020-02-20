import {
  Characters
} from './names'

class StarWars {
  constructor() {
    this.characters = new Characters
    this.getPeople()
    this.getInfoForActors()

  }
  getPeople() {
    this.characters.getUsers().then(data => data.results.forEach(this.printToDOM))
  }
  printToDOM(data) {
    let card = `
<div class="card">
<a href id="name" class="name">${data.name}</a>
</div>
`
    let div = document.createElement('div');
    div.innerHTML = card
    document.querySelector('.vertical-menu').appendChild(div);
    document.getElementsByClassName('.actors').innerHTML = data.name
  }
getInfoForActors(){
  this.characters.getUsers().then(data => data.results.forEach(item => console.log(item.name)))
}
printActorsInfo(data){
  let infoCard = `
  <div class="infoCard">
  <a href id="name" class="name">${data.name}</a>
  </div>
  `
}

}


const peter = new StarWars


