let html = `
    <link rel="stylesheet" href="styles/tooltip.css">
    <div class="tooltip">
      <slot></slot>
      <span class="tooltip-text"></span>
    </div>
`;

class NxTooltip extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = html;
    }

    static get observedAttributes() {
        return ['text', 'position'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'text') {
            this.updateText(newValue);
        }
        if (name === 'position') {
            this.updatePosition(newValue);
        }
    }

    connectedCallback() {
        if (this.hasAttribute('text')) {
            this.updateText(this.getAttribute('text'));
        }
        if (this.hasAttribute('position')) {
            this.updatePosition(this.getAttribute('position'));
        }
    }

    updateText(text) {
        const tooltipText = this.shadowRoot.querySelector('.tooltip-text');
        tooltipText.textContent = text;
    }

    updatePosition(position) {
        const tooltip = this.shadowRoot.querySelector('.tooltip');
        tooltip.className = `tooltip tooltip-${position}`;
    }
}

customElements.define('nx-tooltip', NxTooltip);
