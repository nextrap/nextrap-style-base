
let html = `<button>Click me</button>`;


Jodastyle.register()


class ButtonComp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = html;
  }
}
