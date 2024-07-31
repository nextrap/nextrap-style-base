let html = `
    <link rel="stylesheet" href="styles/modal.css">
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal">
        <div class="modal-header">
          <span id="modal-title">Modal Title</span>
          <button id="close-btn">&times;</button>
        </div>
        <div class="modal-body">
          <slot name="body">Default modal body content.</slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button id="close-footer-btn">Close</button>
          </slot>
        </div>
      </div>
    </div>
`;

Jodastyle.register()

class NxModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = html;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#close-btn').addEventListener('click', () => this.close());
        this.shadowRoot.querySelector('#close-footer-btn').addEventListener('click', () => this.close());
    }

    close() {
        this.shadowRoot.querySelector('#modal-overlay').style.display = 'none';
    }

    open() {
        this.shadowRoot.querySelector('#modal-overlay').style.display = 'flex';
    }
}

customElements.define('nx-modal', NxModal);
