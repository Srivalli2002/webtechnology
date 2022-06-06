var http = require("http")
var server = http.createServer(function(req,res){
    res.sendDate("First page")
})
server.listen(2000)
console.log("Server started on port 2000")
