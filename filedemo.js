var fs = require('fs')
fs = fs.readFile("sample.txt",(function(err,data){
   if(err)
      console.log(err)
   else
      console.log(data.toString())
}))
