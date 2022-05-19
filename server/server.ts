const express = require('express')
const app = express()
const mongoose = require("mongoose");
const xss = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize')
import routes from "./routes/index"
app.use(xss())
app.use(mongoSanitize())
const PORT = process.env.PORT || 3000

app.use("/api",routes)
app.listen(PORT, () => {
    console.log("started at 3000")
})