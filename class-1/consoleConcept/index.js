let http = require("http");

let server = http.createServer((req, res) => {
    if (req.url == "/") {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write("<h1>This is home</h1>");
      res.end();
    } else if (req.url == "/about") {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write("<h1>This is about</h1>");
      res.end();
    } else if (req.url == "/contact") {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write("<h1>This is contact</h1>");
      res.end();
    }
  })
  
server.listen(5050); // Corrected the method name to listen
console.log("running.."); // Corrected the spelling of "running"
