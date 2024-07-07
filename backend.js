const express=require("express")
const cors=require("cors")
var mysql = require('mysql');
const app=express()
app.use(cors())
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
    con.query((`select * from sakila.actor`),(err,result)=>{
        if (err)
            throw err
       response.send(result)
    })
    
})
app.get("/",(req,resp)=>{
  resp.send("elop")
})
app.listen(500)