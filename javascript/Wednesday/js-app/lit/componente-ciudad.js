import {LitElement,html} from 'lit-element';

class ComponentCiudad extends LitElement {
  static get properties(){
    return{
      pais:{type:String},
      tamaño:{type:Number},
      comida:{type:String}
    }
  }
  render(){
    return html`
    <h1>Ciudad</h1>
    <h2>Ciudad:${this.pais}</h2>
    <h1>Tamaño:</h1>
    <h2>${this.tamaño}</h2>
    <h1>Comida</h1>
    <h2>${this.comida}</h2> `
  }
  constructor(){
    super();
    this.pais = 'Mexico';
    this.tamaño = 45632;
    this.comida = 'Guajolotas';
  }
}

customElements.define('componente-ciudad',ComponentCiudad)
