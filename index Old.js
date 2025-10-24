
const http = require("http");

// Server Set up
// const server = http.createServer((req, res)=>{
//     console.log(`I have received the request...`);
//     console.log(`Now processing request...`);
//     res.end("Hello This is my Response!!!........");
// });
const server = http.createServer((req, res)=>{
    console.log(`Received Request..`);
    const url = req.url;
    switch (url) {
        case "/":
            res.end(`Response from empty url : ${url}`);
            break;
        case "/home":
            res.end(`Response from home page : ${url}`);
            break;
        case "/education":
            res.end(`Response from education page : ${url}`);
            break;
        case "/about":
            res.end(`Response from about page : ${url}`);
            break;
        default:
            res.end(`Invalid URL : ${url}`);
            break;
    }
    
});
server.listen(8080, ()=>{
    console.log(`Server started on post: 8080 and ready to serve the request.`);
});