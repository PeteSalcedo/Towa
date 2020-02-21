import {LitElement, html, css} from 'lit-element';

import './child-component'

class  ParentComponent extends LitElement{
    static get properties(){
        return { childMessage:{type: String}}
    }
    render(){
        return html`
        <h1>Parent Component</h1>
        <h3>Jugando con colores</h3>
          <child-component prop2="Mensaje del padre"></child-component>
        `;
    }
    static get styles(){
        return css`
        :host{
            display: block;
            padding: 8px;
            background-color: green;
        }
        `
    }

}

customElements.define('parent-component',ParentComponent);
