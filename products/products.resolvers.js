const productsModel = require("./products.model")

module.exports = {
    Query: {
        products: () => {
            return productsModel.getAllproducts()
        },
        productsByPrice: (_, args) => {
            return productsModel.getAllproducts(args.min, args.max)
        },
        productById: (_, args) => {
            return productsModel.getProductById(args.id)
        }
    }
}