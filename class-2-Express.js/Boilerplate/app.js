const express = require("express");

const router = require("./src/routes/api");
const helmet = require("helmet")

const app = new express();

//Router
app.use("/",router);

//Global Middleware Syntax for the full system
app.use(helmet());

module.exports = app;