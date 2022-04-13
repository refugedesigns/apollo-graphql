const products = [
    {
        id: "redshoe",
        description: "red shoe",
        price: 42.12
    },
    {
        id: "bluejean",
        description: "Blue Jeans",
        price: 55.55
    },
]

function getAllproducts() {
    return products
}

function getProductsByPrice(min,max) {
    return products.filter(product => product.price > min && product.price <= max)
}

function getProductById(id) {
    return products.find(product => product.id === id)
}

module.exports = {
    getAllproducts,
    getProductsByPrice,
    getProductById
}