
/**
 * 
 * Right now after the Transpilation there are essentially two variables with the same name var1; one of which is in the main.ts which is declared as let (remember let is not redeclared or reassigned) and another one is in main.js
 * 
 * 
 * Typescript is moduler and each module has it’s own block. So, basically if you could somehow enclose the variable which is declared as let within it’s own module, the error will be resolved because now your let variable is in it’s separate block. 
 * 
 */

import express from "express"
import { authr } from "./auth.route"
import { userr } from "./user.route"
import { brandr } from "./brand.route"
import { prodr } from "./product.route"

const router = express.Router();
 
router.use("/auth", authr);
router.use("/user",userr)
router.use("/brand",brandr)
router.use("/product",prodr)

export default router
