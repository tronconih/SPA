const template = document.createElement("template");
template.innerHTML = "<style>"+
".home-button {"+
    "backdrop-filter: blur(15px);"+
    "border-radius: 25px;"+
    "/* nullifies the style of buttons's borders */"+
    "border-style: none;"+
    "grid-column: 2;"+
    "height: 120px;"+
    "transition: all 0.9s;"+
  "}"+
"</style>"+
"<slot name='home-grid-button'> Nothing were written in this slot </slot>";

class AbstractButton extends HTMLElement{
    constructor(){
        super();
        //container that is going to hold the component
        /* mode open = the parent script (main.js) can get inside our custom component and see everything
           mode close = the parent script (main.js) CAN'T get inside our custom component*/
        const shadowRoot = this.attachShadow({mode: "open"}); 
        let clone = template.content.cloneNode(true); 
        shadowRoot.append(clone);
    }
}

customElements.define("abstract-button", AbstractButton);
//abstract-button = component tag --> <abstract-button>
//AbstractButton = component class name