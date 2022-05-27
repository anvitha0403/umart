import express from "express"
import * as brandController from "../controllers/brand.controller"
import {auth} from "../config/jwt/auth"
export const brandr = express.Router()

brandr.route("/:id")
.get(auth(["user","admin"]),brandController.getBrand)
    .delete(auth(["admin", "user"]), brandController.deleteBrand)
brandr.route("/")
    .post(auth(["admin", "user"]), brandController.newBrand)
    .get(brandController.getAllBrands)


