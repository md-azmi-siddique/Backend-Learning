//Working with URL module
/*
const url = require('url')
const myURL = 'https://localhost:8080/about/v1?userID=1&product'; //base+path+Search Parameter
const urlObj = url.parse(myURL,true);

console.log(urlObj.host)
console.log(urlObj.pathname)
console.log(urlObj.search)
*/



//Create file
/*
const http = require('http');
const fs= require('fs');
http.createServer((req,res)=>{
    fs.writeFile('demo1.txt','Hello...This in new file', (error)=>{
        if(error){
            res.end('Failed');
        }
        else{
            res.end('success');
        }
    })
 
}).listen(4040, ()=>{
    console.log("Running.....");
})
*/

//Read File
/*
const http = require('http');
const fs= require('fs');
http.createServer((req,res)=>{
    fs.readFile('demo1.txt',(error,data)=>{
        res.write(data)
        res.end();
    })
}).listen(4040, ()=>{
    console.log("Running.....");
})
*/


//Update
/*
const http = require('http');
const fs= require('fs');
http.createServer((req,res)=>{
    fs.appendFile('demo1.txt', '\nhello hello', (error)=>{
        if(error){
            res.end('Creation Failed');
        }else{
            res.end('Creation Successful');
        }
    })
 
}).listen(4040, ()=>{
    console.log("Running.....");
})
*/

//Delete
/*
const http = require('http');
const fs= require('fs');
http.createServer((req,res)=>{
    fs.unlink('demo1.txt',(error)=>{
        if(error){
            res.end('Delete Failed');
        }else{
            res.end('Delete Successful');
        }
    })
 
}).listen(4040, ()=>{
    console.log("Running.....");
})
*/

//Rename file
/*
const http = require('http');
const fs= require('fs');
http.createServer((req,res)=>{
    fs.rename('demo1.txt', 'test.txt', (error)=>{
        if(error){
            res.end('File Rename Failed');
        }else{
            res.end('File Rename Successful');
        }
    })
 
}).listen(4040, ()=>{
    console.log("Running.....");
})
*/

// Debug
const http = require('http');
const fs= require('fs');
http.createServer((req,res)=>{
    fs.unlink('demo1.txt',(error)=>{
        if(error){
            res.end('Delete Failed');
        }else{
            res.end('Delete Successful');
        }
    })
 
}).listen(4040, ()=>{
    console.log("Running.....");
})