import express from "express"
import * as productController from "../controllers/product.controller"
import {auth} from "../config/jwt/auth"
export const prodr = express.Router()


prodr.route("/all")
    .post(
        // auth(["admin", "user"]),
        productController.allnewProduct)
prodr.route("/filter")
    .get(productController.getFilter)
    prodr.route("/:id")
.get(productController.getProduct)
    .delete(auth(["admin", "user"]), productController.deleteProduct)

    prodr.route("/")
    .post(auth(["admin", "user"]), productController.newProduct)
    .get(productController.getAllProducts)