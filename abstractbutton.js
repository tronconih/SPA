const template = document.createElement("template");
template.innerHTML = `<style>
  .normal-button{
    border-radius: 25px;
    border-style: none;
    grid-column: 2;
    height: 120px;
    width: 100%;
    transition: all 0.9s;
  }
  .normal-button:hover{
    transform: scale(1.05);
  }
</style>
<button class='normal-button'>
    <h3 part='button-title'></h3>
    <img part='button-icon'></img>
</button>`;

// Alt + 96 makes the ` that we need to write down the css and html on more lines

class AbstractButton extends HTMLElement{
  constructor(){
        super();
        //container that is going to hold the component
        /* mode open = the parent script (main.js) can get inside our custom component and see everything
           mode close = the parent script (main.js) CAN'T get inside our custom component*/
        const shadowRoot = this.attachShadow({mode: "open"}); 
        let clone = template.content.cloneNode(true); 
        shadowRoot.append(clone);

        const h3Element = shadowRoot.querySelector('h3');
        // this.title getter buttonIcon is the call to the getter title directly connected to the html
        h3Element.innerHTML = this.title;

        const imageElement = shadowRoot.querySelector('img');
        // this.buttonIcon getter buttonIcon is the call to the getter buttonIcon directly connected to the html
        imageElement.src = this.buttonIcon; 

        const newButton = shadowRoot.querySelector('button');
        //Passes the part value from the html directly to the button attribute (part)
        newButton.setAttribute("part",this.buttonPart);

        console.log(this.buttonPart);
        //NB this.buttonPart = val arrived from the html
        //newButton = button took from the tag in the components
    }

    connectedCallback() {}

    get title() {
        // be careful: attributes always string, if you want a number, you must parse it on your own.
        return this.getAttribute('title');
    }

    set title(value) {
        // if you set the property title in this class, you must sync them with the attribute
        this.setAttribute('title', value);
    }

    get buttonIcon() {
       // be careful: attributes always string, if you want a number, you must parse it by your own.
        return this.getAttribute('image-element');
    }

    set buttonIcon(value) {
        // if you set the property title in this class, you must sync them with the attribute
        this.setAttribute('image-element', value);
    }

    get buttonPart() {
      // be careful: attributes always string, if you want a number, you must parse it by your own.
      return this.getAttribute('button-part');
    }

    set buttonPart(value) {
      // if you set the property title in this class, you must sync them with the attribute
      this.setAttribute('button-part', value);
    }

  }

customElements.define("abstract-button", AbstractButton);
//abstract-button = component tag --> <abstract-button>
//AbstractButton = component class name