import db from "../models/index.js";
const Category = db.categories;
class CategoryController {
    async getCategories(req, res) {
        const categories = await Category.findAll({});
        res.send(categories);
    }
}

export default new CategoryController()