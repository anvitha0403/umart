import express from "express"
import * as productController from "../controllers/product.controller"
import {auth} from "../config/jwt/auth"
export const prodr = express.Router()

prodr.route("/:id")
.get(auth(["user","admin"]),productController.getProduct)
    .delete(auth(["admin", "user"]), productController.deleteProduct)
prodr.route("/")
    .post(auth(["admin", "user"]), productController.newProduct)
    .get(auth(["user","admin"]),productController.getAllProducts)

