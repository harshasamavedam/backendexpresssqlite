
const express=require("express")
var mysql = require('mysql');
const app=express()



var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "19B91a02i3@"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

const data=''
app.get('/data',(request,response)=>{
    con.query((`select * from newdata.electronic`),(err,result)=>{
        if (err)
            throw err

       response.send(result)
    })
    
})
app.listen(500,()=>{
    console.log("started")
})