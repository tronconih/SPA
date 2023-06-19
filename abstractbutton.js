const template = document.createElement("template");
template.innerHTML = "<slot name='home-grid-button'> Nothing were written in this slot </slot>";

class AbstractButton extends HTMLElement{
    constructor(){
        super();
        //container that is going to hold the component
        /* mode open = the parent script (main.js) can get inside our custom component and see everything
           mode close = the parent script (main.js) CAN'T get inside our custom component*/
        const shadowRoot = this.attachShadow({mode: "closed"}); 
        let clone = template.content.cloneNode(true); 
        shadowRoot.append(clone);
    }
}

customElements.define("abstract-button", AbstractButton);
//abstract-button = component tag --> <abstract-button>
//AbstractButton = component class name