const products = [
  {
    id: "redshoe",
    description: "red shoe",
    price: 42.12,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
    reviews: [],
  },
];

function getAllproducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter(
    (product) => product.price > min && product.price <= max
  );
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function addNewProduct(id, description, price) {
  const existingProduct = getProductById(id);

  if (existingProduct) {
    return;
  }

  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const product = getProductById(id);
  if (!product) {
    throw new Error("Product do not exist!");
  }
  const newReview = {
    rating,
    comment,
  };
  product.reviews.push(newReview);
  return newReview;
}

module.exports = {
  getAllproducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
