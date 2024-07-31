let html = `
    <link rel="stylesheet" href="styles/form.css">
    <form>
      <input class="form-control input" type="text" placeholder="Text input">
      <textarea class="form-control textarea" placeholder="Textarea"></textarea>
      <select class="form-control select">
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </form>
`;

Jodastyle.register()

class NxForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = html;
    }
}

customElements.define('nx-form', NxForm);
