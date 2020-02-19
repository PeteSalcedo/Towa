import {LitElement,css,html} from 'lit-element';

class ComponentOne extends LitElement {
  static get styles(){
    return css `
    :host{
      background-color:cyan;
      display:block;
    --colorr:red
    }
    ul li {
      background-color:var(--color;green);
    }
    h2{
      color:var(--color,blue)
    }

    `}

  static get properties(){
    return{
      propiedadUno:{type:String},
      disabledText:{type:Boolean},
      name:{type:String},
      list:{type:Array}
    }
  }
  render(){
    return html`
    <!--Biniding-->
    <h2>${this.propiedadUno}</h2>
    <h3>
    <slot name="subheader"></slot>
    </h3>
    <input type="text" id="${this.name}" ? disabled="${this.disabledText}" : value="${this.propiedadUno}">
    <ul>${this.list.map(item => html`<li>${item}</li>`)}</ul>
    <!--Condiciones-->
    ${this.disabledText?
    html`<span> El input esta habilitado</span>`:
    html`<span>El input esta deshabilitado</span>`}
    <!--Biniding de eventos-->
    <button @click="${this.clickme}">ClickMe</button>
      `
  }
  constructor(){
    super();
    this.propiedadUno = 'Soy un component';
    this.disabledText = true;
    this.name = 'nombre'
    this.list = ['A','b','c','d']
  }
  clickme(e){
    console.log(e)
  }
}

customElements.define('component-one',ComponentOne)
