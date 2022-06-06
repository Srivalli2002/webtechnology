var express = require ("express")
var firebase = require ("firebase")
var app = express()
app.use(express.json())

const firebaseConfig = {
    apiKey: "AIzaSyAmxGQ3xWXzQML2CZ3CpmdLqBTsJ12Ttgw",
    authDomain: "awtproject-cbc1e.firebaseapp.com",
    projectId: "awtproject-cbc1e",
    storageBucket: "awtproject-cbc1e.appspot.com",
    messagingSenderId: "689453173475",
    appId: "1:689453173475:web:df04fde1134a7569d413d6",
    measurementId: "G-703MQSX38Q"
  };


firebase.initializeApp(firebaseConfig)
var db = firebase.database().ref("students")



app.post("/addstudent",(res,req)=>{
    stu={
        "id" : 01,
        "name" : 'cvr'
    }
    db.child(stu.id).set(stu,(data)=>{
        res.send("inserted");
    })
})

app.listen(2000,()=>{
    console.log("server started...")
})
