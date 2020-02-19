import {LitElement,html,css} from 'lit-element';

class CompnentAnimal extends LitElement{
  static get styles(){
    return css `
  :host{
    background-color:cyan;
    display:block;
  --colorr:red
  }
  h2 {
    background-color:var(--color;green);
  }
  h2{
    color:var(--color,blue)
  }
`  }

  static get properties(){
    return{
      name:{type:String},
      color:{type:String},
      vacunado:{type:Boolean},
      sonido:{type:String},
      list:{type:Array}
    }
  }
  render(){
    return html`
    <h2>Name</h2><h2>${this.name}</h2>
    <h2>sex</h2>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label><br>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>
    `
  }
  constructor(){
    super();
    this.name = 'Oreo',
    this.color = 'Negro';
    this.vacunado = false;
    this.sexo = 'male';
    this.list = [1,2,3,4,5]
  }
}

customElements.define('component-animal',CompnentAnimal)
