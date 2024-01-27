const express = require("express")

const app = new express()

//String response
app.get("/one",(req,res)=>{
    res.end("One")
})

//manupulate status code
app.post("/two", (req,res)=>{
    res.status(650)
    res.end("Two")
})


//JSON response
app.post("/three", (req,res)=>{
    let arrJSON=
        [
            {
                name:"jogn",
                age:10,
                sex:"male"
            },
            {
                name:"jogn",
                age:10,
                sex:"male"
            },
            {
                name:"jogn",
                age:10,
                sex:"male"
            }
        ]
    res.json(arrJSON)
})

//Download
app.get("/four", (req,res)=>{
    res.download("./uploads/abc.txt")

})

//Redirect
app.get("/five1", (req,res)=>{
    res.redirect("/five2")
})
app.get("/five2", (req,res)=>{
    res.end("Redirect from five1")
})


app.listen(8080,()=>{
    console.log("Server Running")
})