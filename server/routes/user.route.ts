import express from "express"
import  * as userController from "../controllers/user.controller"
import {auth} from "../config/jwt/auth"
import user from "../model/User"
export const userr = express.Router()
userr.route("/profile")
    .get(auth(["user", "admin"]), userController.getProfile)
    .patch(auth(["user", "admin"]), userController.updateProfile)
userr.route("/email")
   .patch(auth(["user","admin"]),userController.updateEmail)
