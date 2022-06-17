import db from "../models/index.js";
const Product = db.products;

class ProductService {
    async getAllProducts(){
        const products = await Product.findAll({})
        return products
    } async getAllProductsByCategoryId(categoryId){
        const products = await Product.findAll({
            where:{
                categoryId:categoryId
            }
        })
        return products
    }
}

export default new ProductService()