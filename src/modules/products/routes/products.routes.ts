import { Router } from "express";
import ProductsController from "../controllers/ProductsController";

const productsRouter = Router();
const ProductsController = new ProductsController();

productsRouter.get("/", ProductsController.index);
productsRouter.get("/:id", ProductsController.show);
productsRouter.post("/", ProductsController.create);
productsRouter.put("/:id", ProductsController.update);
productsRouter.delete("/:id", ProductsController.delete);

export default productsRouter;
