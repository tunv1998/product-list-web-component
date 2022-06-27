export const styled = (props) => {
  return `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .product-card {
                padding: 8px;
                border-radius: 8px;
                width: 100%;
                border: 1px solid red;
            }

            .product-card:hover {
                box-shadow: 2px 2px 8px 0 lightgray;
            }

            .img, img {
                width: 100%;
            }

            .flex {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .buy-btn {
                padding: 4px 12px;
                border-radius: 12px;
                border: none;
            }

            .buy-btn:hover {
                background-color: gray;
            }
        </style>
    `;
};
