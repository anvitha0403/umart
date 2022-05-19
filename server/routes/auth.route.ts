import express from "express"
import * as authController from "../controllers/auth.controller"

export const auth = express.Router()
auth.route("/register")
    .get(authController.register)

