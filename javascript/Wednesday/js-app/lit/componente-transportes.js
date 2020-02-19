import {LitElement,html} from 'lit-element';

class ComponentTransportes extends LitElement {
  static get properties(){
    return{
      tren:{type:String},
      autobus:{type:Number},
      metro:{type:String}
    }
  }
  render(){
    return html`
    <h1>Tren</h1>
    <h2>${this.tren}</h2>
    <h1>Autobus</h1>
    <h2>${this.autobus}</h2>
    <h1>Metro</h1>
    <h2>${this.metro}</h2> `
  }
  constructor(){
    super();
    this.tren = 'Trolebus';
    this.autobus = 'Microbuses';
    this.metro = 'Linea 5';
  }
}

customElements.define('componente-transportes',ComponentTransportes)
