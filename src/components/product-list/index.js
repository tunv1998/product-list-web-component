import { data } from './dummy';
import { styled } from './styles';
import { productListTemplate } from './template';

customElements.define(
  'product-list',
  class ProductList extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.props = {};
    }

    static get observedAttributes() {
      return ['loading'];
    }
    connectedCallback() {
      // mount DOM first
      this.createdDOM();

      // the rest is later
      this.getProducts();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      this.clearDOM();
      this.createdDOM();
    }

    createdDOM() {
      console.log('re-render');
      const template = document.createElement('template');
      template.innerHTML = `
            ${styled()}
            ${productListTemplate(this.props)}
        `;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    clearDOM() {
      const child = this.shadowRoot.querySelector('.product-list');
      const style = this.shadowRoot.querySelector('style');
      if (child) {
        this.shadowRoot.removeChild(child);
      }

      if (style) this.shadowRoot.removeChild(style);
    }

    getProducts() {
      this.setAttribute('loading', true);

      setTimeout(() => {
        // got product list
        this.props.data = data;
        this.removeAttribute('loading');
      }, 2000);
    }
  }
);
