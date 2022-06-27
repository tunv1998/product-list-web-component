export const productListTemplate = (props) => {
  if (!props?.data)
    return `
        <div class="product-list">
            <span>Loading ... </span>
        </div>
    `;

  return `
        <div class="product-list">
            ${props.data
              .map(
                ({ id, name, price, description, img }) =>
                  `<product-card p-name="${name}" p-id="${id}" p-price="${price}" p-description="${description}" p-img="${img}" ></product-card>`
              )
              .join('\n')}           
        </div>
        `;
};

/**
 * notes: we can change p-* to data-* for more meaning
 */
