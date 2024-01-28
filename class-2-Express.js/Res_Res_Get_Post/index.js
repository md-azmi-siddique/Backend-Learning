const express = require("express")

const app = new express()

//Query
app.get("/query", (req, res) => {
    // req.header()
    // req.query
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.end(`${firstName} and ${lastName}`)
});

//Header
app.get("/header", (req, res) => {
    let firstName = req.header("firstName");
    let lastName = req.header("lastName");

    res.end(`${firstName} and ${lastName} is header`)
});



app.listen(3030,()=>{
    console.log("Server Running")
})