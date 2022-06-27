import { styled } from './styles';
import { productCardTemplate } from './template';

customElements.define(
  'product-card',
  class ProductCard extends HTMLElement {
    constructor() {
      super();
      this.props = {};
      this.attachShadow({ mode: 'open' });
    }

    // LIFE CYCCLE
    connectedCallback() {
      this.getProps();
      this.createDOM();
    }

    // METHODS
    createDOM() {
      const template = document.createElement('template');
      template.innerHTML = `
            ${styled(this.props)}
            ${productCardTemplate(this.props)}
        `;

      this.shadowRoot.appendChild(template.content.cloneNode(true));

      // add event
      const buyBtn = this.shadowRoot.querySelector('.buy-btn');
      buyBtn.addEventListener('click', () => {
        console.log(this.props);
        alert(`Go to product id: ${this.props['p-id']}`);
      });
    }

    getProps() {
      const props = ['p-name', 'p-img', 'p-description', 'p-id', 'p-price'];
      props.forEach((p) => {
        this.props = { ...this.props, [p]: this.getAttribute(p) };
      });
    }
  }
);
