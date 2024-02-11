import express from 'express'
import mongoose from 'mongoose'
import rateLimit from "express-rate-limit";
import hpp from "hpp"
import  cors from "cors"
import cookie from "cookie-parser";
import helmet from "helmet";
import router from "./src/routes/api.js";
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
app.use("/",router)

export default app;
