
/**
 * 
 * Right now after the Transpilation there are essentially two variables with the same name var1; one of which is in the main.ts which is declared as let (remember let is not redeclared or reassigned) and another one is in main.js
 * 
 * 
 * Typescript is moduler and each module has it’s own block. So, basically if you could somehow enclose the variable which is declared as let within it’s own module, the error will be resolved because now your let variable is in it’s separate block.
 * 
 */

import express from "express"
import {auth} from "./auth.route"
const router = express.Router();

router.use("/auth", auth);

export default router
