import express from 'express';
import cookieparser from 'cookie-parser';
import mongoose from "mongoose";
// import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import database from './config/database'
import routes from "./routes/index"
// app.use(xss())
const passport = require('passport');
const { jwtStrategy } = require('./config/jwt/passport');
const app = express()
const cors = require('cors');

const corsOption = {
    origin: ['http://localhost:3000'],
};

app.use(express.json())
import dotenv from "dotenv"
import {handleError,ApiError} from "./config/error"





dotenv.config()
app.use(cors(corsOption));
app.use(cors())
// app.all('*', function (req, res) {
//    res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
//     res.header("Access-Control-Allow-Credentials", "true");
//  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
// })
//if you want in every domain then
app.use(cookieparser())
app.use(mongoSanitize())
const PORT = process.env.PORT || 5000
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
    
    

