const products = [
  {
    id: "s23",
    name: "Samsung s23 ultra",
    price: "1.965.0",
    category: "celular",
    img: "https://media.pakprice.pk/288/otRdSrGmyr0jk9jpGFsDSevTiJBtoaK81UGAljcV.jpeg",
    stock: "30",
    decription: "Celular Samsung s23 ultra",
  },
  {
    id: "ipad",
    name: "Ipad pro",
    price: "2.148.0",
    category: "tablet",
    img: "https://tse3.mm.bing.net/th?id=OIP.KwwOFORQ7GHBHw8l5gF_iQAAAA&pid=Api&P=0&h=180",
    stock: "10",
    decription: "Ipad pro",
  },
  {
    id: "tv",
    name: "un43t5300agczb smart tv pantalla 43",
    price: "600.000",
    category: "tv",
    img: "https://tse3.mm.bing.net/th?id=OIP.9AtltnXlfT-cGRTrKC8ZhAHaEj&pid=Api&P=0&w=300&h=300",
    stock: "15",
    decription: "un43t5300agczb smart tv pantalla 43",
  },
  {
    id: "iphone",
    name: "Iphone 14 pro max",
    price: "2.038.00",
    category: "celular",
    img: "https://tse3.mm.bing.net/th?id=OIP.KyrBu1s2mkrqDl3Bdo8QtAHaHa&pid=Api&P=0&h=180",
    stock: "20",
    decription: "Celular Iphone 14 pro max",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    });
  });
};
export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};
