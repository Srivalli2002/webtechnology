var http = require("http")
var fs = require("fs")
var server = http.createServer(function (req,res){
    response.setHeader('content-type','text/html')
    res.write("Third party module")
    res.end()
})
