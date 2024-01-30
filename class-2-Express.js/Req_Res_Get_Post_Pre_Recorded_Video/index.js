const express = require("express")
const bodyParser = require("body-parser")
let multer = require("multer");
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

//simple post request=>spr
app.post("/spr",(req,res)=>{
    res.send("This is post request")
})

//req query = rq
app.post("/rq",(req,res)=>{
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.send(`${firstName} ${lastName}`)
})

//rh --> post method
app.post("/rh",(req,res)=>{
    let firstName = req.header("firstName");
    let lastName = req.header("lastName");
    res.send(`${firstName} ${lastName}`)
})

//body parser
app.use(bodyParser.json())

app.post("/bp", (req, res)=>{
    let JsonData = req.body;
    let JsonString = JSON.stringify((JsonData));
    res.send(JsonString)
})

//MULTER
//instance
// var multer = multer();
// app.use(multer.array())
// app.use(express.static("public"))
//
// app.post("/multer", (req, res)=>{
//     let JsonDataM = req.body;
//     let JsonStringM = JSON.stringify((JsonDataM));
//     res.send(JsonStringM)
// })

//File Upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads'); // Specify the destination folder
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Retain original filename
    }
});

const upload = multer({ storage: storage }).single("myFile");

app.post("/flu", (req, res)=>{
    upload(req,res,(err)=>{
        if(err){
            res.send("Upload Failed")
        }
        else {
            res.send("File Upload Successful")
        }
    })
})

app.listen(3030,()=>{
    console.log("Server Running 3030")
})

