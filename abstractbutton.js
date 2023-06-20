const template = document.createElement("template");
template.innerHTML = "<style>"+
":host(abstract-button){"+
    "border-radius: 25px;"+
    "/* nullifies the style of buttons's borders */"+
    "border-style: none;"+
    "grid-column: 2;"+
    "height: 120px;"+
    "transition: all 0.9s;"+
  "}"+
  ":host(abstract-button :hover) {"+
    "transform: scale(1.05);"+
  "}"+
  "::slotted(h3){"+
    "text-align: center;"+
    "}"+
  "::slotted(img) {"+
    "float: right;"+
    "width: 45px;"+
  "}"+
"</style>"+
"<div>"+
    "<slot name='button-name'> button-name </slot>"+
    "<slot name='button-image'> button-image </slot>"+
"</div>";

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