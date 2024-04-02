// HTTP
// What is http?
// Example of: Cleint and Server => Request and Response

const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url ==="/"){
        res.write(`<h1>Allah o Akbar</h1>`);
    }
    if(req.url ==="/about"){
        res.write(`<h1>About page</h1>`);
    }
    res.end();
});

server.listen(8081);

console.log("HTTP Server is running on port 8080")


