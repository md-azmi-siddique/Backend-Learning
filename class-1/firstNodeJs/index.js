const { error } = require("console");
const fs = require("fs");
const http  =  require("http");

http.createServer((req,res)=>{
    if(req.url == '/'){
        fs.readFile("home.html", "utf-8", (error, data)=>{
            res.write(data);
            res.end();
        })

    }else if(req.url == '/Contact'){
        fs.readFile("contact.html", "utf-8", (error, data)=>{
            res.write(data);
            res.end();
        })

    }else if(req.url == '/About'){
        fs.readFile("about.html", "utf-8", (error, data)=>{
            res.write(data);
            res.end();
        })

    }else if(req.url == '/Terms'){
        fs.readFile("terms.html", "utf-8", (error, data)=>{
            res.write(data);
            res.end();
        })

    }

}).listen(8080,()=>{
    console.log("Server Running....");
})