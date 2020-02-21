import { LitElement, html, css } from 'lit-element';

import './parent-component'

class ChildComponent extends LitElement{
    static get properties(){
        return {prop2:{ type: String}}
    }
constructor(){
  super()
    }
    render(){
        return html`
        <h2>Child Component</h2>
        <h2 > ${this.prop2}</h2>
        <input type="text" .value="${this.prop2}">
        <button>Red</button>
        `;
    }
    static get styles(){
        return css`
          :host{
              display: block;
              background-color: #80FFAC;
              padding: 8px;
          }
        `;
    }
}
customElements.define('child-component',ChildComponent)
