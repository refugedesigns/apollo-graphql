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
    },
    Mutation: {
        addNewProduct: (_, args) => {
            return productsModel.addNewProduct(args.id, args.decription, args.price)
        },
        addNewProductReview: (_, args) => {
            return productsModel.addNewProductReview(args.id, args.rating, args.comment)
        }
    }
}