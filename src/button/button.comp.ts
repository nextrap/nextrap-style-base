let html = `
    <link rel="stylesheet" href="styles/button.css">
    <button class="btn">Click me</button>
`;


Jodastyle.register()


class NxButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = html;
    }

    static get observedAttributes() {
        return ['type'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'type') {
            this.updateType(newValue);
        }
    }

    connectedCallback() {
        if (this.hasAttribute('type')) {
            this.updateType(this.getAttribute('type'));
        }
    }

    updateType(type) {
        const button = this.shadowRoot.querySelector('button');
        button.className = `btn btn-${type}`;
    }
}

customElements.define('nx-button', NxButton);
