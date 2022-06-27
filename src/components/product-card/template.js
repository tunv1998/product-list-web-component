export const productCardTemplate = (props) => {
  return `
        <div class="product-card">
            <img src="${props['p-img']}" alt="${props['p-description']}" />
           <div className="footer">
            <p>${props['p-name']}</p>
            <div class="flex">
                <span class="price">$${props['p-price']}</span>
                <button class="buy-btn">Buy Now</button>
            </div>
           </div> 
        </div>
    `;
};
