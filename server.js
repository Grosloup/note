var http = require("http");
var fs = require("fs");
console.log("starting...");
var host = "127.0.0.1";
var port = 1337;
var server = http.createServer(function(request,response){
    console.log("Received request: " + request.url);
    if(request.url == "/"){
        request.url = "/index.html";
    }
    fs.readFile("./web"+request.url, function(error,data){
        if(error){
            response.writeHead(404,{"Content-type":"text/plain"});
            response.end("404 : Not Found !");
        } else {
            response.writeHead(200);
            response.end(data);
        }
    });
});
server.listen(port,host,function(){
    console.log("Listening " + host + ":" + port);
});
