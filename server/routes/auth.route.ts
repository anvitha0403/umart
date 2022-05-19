import express from "express"
import * as authController from "../controllers/auth.controller"
import {auth} from "../config/jwt/auth"
export const authr = express.Router()
authr.route("/register")
    .post(authController.register)
authr.post("/signin",authController.signin)
