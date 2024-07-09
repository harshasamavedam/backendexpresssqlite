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
app.get('/actor',(request,response)=>{
    con.query((`select * from sakila.actor`),(err,result)=>{
        if (err)
            throw err
       response.send(result)
    })
    
})
app.get("/",(req,resp)=>{
  resp.send("Home")
})

app.get("/flim_list",(req,resp)=>{
  con.query(`select * from sakila.film_list`,(err,result)=>{
    resp.send(result)
  })
})

app.get('/film_category',(req,resp)=>{
  con.query(`select * from sakila.film_category`,(err,result)=>{
    if(err){
      throw err
    }
resp.send(result)
  })
})
app.listen(500)