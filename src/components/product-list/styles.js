export const styled = (props) => {
  return `
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .product-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
      padding: 12px;
    }

    @media (min-width: 768px) {
      .product-list {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (min-width: 1024px){
      .product-list {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  </style>
  `;
};
