const http = require("http");
const port = 8081;
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h6>Hey! we got our server here... here i'm making a change .. and now testing nodemon.. ok?</h6>");
    res.end();
})
.listen(port,()=>{
    console.log(`NodeJs Server Started Running On Port ${port}`);
})