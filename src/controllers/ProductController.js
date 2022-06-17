import Product from "../models/Product.js";
import Category from "../models/Category.js";
import productService from "../services/ProductService.js";

class ProductController {
    async getAllProducts(req, res) {
        const {categoryId} = req.query;
        if (categoryId) {
            const products = await productService.getAllProductsByCategoryId(categoryId);
            res.send(products);
        } else {
            const products = await productService.getAllProducts()
            res.send(products);
        }
    }

    async getProductById(req, res) {

    }
}

export default new ProductController();