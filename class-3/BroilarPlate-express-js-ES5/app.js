const express = require("express");
const mongoose = require("mongoose")
const rateLimit = require("express-rate-limit")
const hpp = require("hpp")
const cors = require("cors")
const cookie = require("cookie-parser")
const helmet = require("helmet")
const router = require("./src/routes/api");
const app = express()

/*Middle Ware Implementation */

app.use(cors())
app.use(helmet())
app.use(hpp())

const limiter = rateLimit({windowMs: 15 * 60 * 100, max: 300})
app.use(limiter);
app.use(cookie())


//Disable Response cache
app.set('etag', false)


//Request size limit
app.use(express.json({limit:'20MB'}))

app.use(express.urlencoded({limit:false}))


//Database Connection
// mongoose.connect("",{autoIndex:true})


//api Route Connect
app.use("/api",router)

module.exports = app;