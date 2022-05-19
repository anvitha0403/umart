import express from 'express';
const app = express()
import mongoose from "mongoose";
// import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import database from './config/database'
import routes from "./routes/index"
// app.use(xss())
const passport = require('passport');
const { jwtStrategy } = require('./config/jwt/passport');

app.use(express.json())
import dotenv from "dotenv"
import {handleError,ApiError} from "./config/error"





dotenv.config()
app.use(mongoSanitize())
const PORT = process.env.PORT || 3000
app.use(passport.initialize());
passport.use('jwt',jwtStrategy );
database()
    console.log("here")
app.use("/api", routes)
console.log("here before")
app.use((err:ApiError, req:express.Request, res:express.Response, next:express.NextFunction) => {
    handleError(err, res);
})

console.log("here after")
app.listen(PORT, () => {
    console.log("started at 3000")
})
    
    

