import { getStyles } from './styles';
import { flashSalePageTemplate } from './template';

customElements.define(
  'page-flash-sale',
  class FlashSalePage extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    // LIFE CYCLE
    // call when component is mounted
    connectedCallback() {
      this.createDOM();
    }

    // METHODS
    createDOM() {
      const template = document.createElement('template');
      template.innerHTML = `
            ${getStyles()}
            ${flashSalePageTemplate}
        `;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
);
