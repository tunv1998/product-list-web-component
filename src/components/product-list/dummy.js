export const data = [
  {
    id: 1,
    name: 'Shirt',
    price: 99,
    description: 'sample',
    img: 'https://product.hstatic.net/200000268337/product/z3284436872473_23dfe3e65aa08033e28c4db02534d4d3_b790e7d737164803921171e64ea51abc_grande.jpg',
  },
  {
    id: 2,
    name: 'Shirt',
    price: 99,
    description: 'sample',
    img: 'https://product.hstatic.net/200000268337/product/z3284436872473_23dfe3e65aa08033e28c4db02534d4d3_b790e7d737164803921171e64ea51abc_grande.jpg',
  },
  {
    id: 3,
    name: 'Shirt',
    price: 99,
    description: 'sample',
    img: 'https://product.hstatic.net/200000268337/product/z3284436872473_23dfe3e65aa08033e28c4db02534d4d3_b790e7d737164803921171e64ea51abc_grande.jpg',
  },
  {
    id: 4,
    name: 'Shirt',
    price: 99,
    description: 'sample',
    img: 'https://product.hstatic.net/200000268337/product/z3284436872473_23dfe3e65aa08033e28c4db02534d4d3_b790e7d737164803921171e64ea51abc_grande.jpg',
  },
  {
    id: 5,
    name: 'Shirt',
    price: 99,
    description: 'sample',
    img: 'https://product.hstatic.net/200000268337/product/z3284436872473_23dfe3e65aa08033e28c4db02534d4d3_b790e7d737164803921171e64ea51abc_grande.jpg',
  },
];

export const getProductsFromAPI = () =>
  new Promise(() =>
    setTimeout(() => {
      return data;
    }, 2000)
  );
