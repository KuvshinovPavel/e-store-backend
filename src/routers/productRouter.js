import {Router} from "express";
import ProductController from "../controllers/ProductController.js";

const productRouter = new Router();

productRouter.get('/products',ProductController.getAllProducts);
export default productRouter;