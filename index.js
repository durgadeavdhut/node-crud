
const http = require("http");

// Server Set up
const server = http.createServer((req, res)=>{
    console.log(`I have received the request...`);
    console.log(`Now processing request...`);
    res.end("Hello This is my Response!!!........");
});
server.listen(8080, ()=>{
    console.log(`Server started on post: 8080 and ready to serve the request.`);
});