let expe=require('express')
let app=expe()
let datab=require('sqlite3')
let {open}=require('sqlite')
let path=require('path')
let dbpath=path.join(__dirname,"userData.db")
let server=null
app.use(expe.json())

let serve=async()=>{
try{ server= await  open({
    filename:dbpath,
    driver:datab.Database
}).then(
    console.log("server started")
)}
catch(e){
    console.log(e)
}}

serve()
let createtable=async (user)=>{
    console.log(user)
    quer=`create table if not exists ${user}(
    id int,
    name varchar(300),
    location varchar(30),
    role varchar(30),
    package float
    )`
 try
{
server.exec(quer).then(console.log("created table"))
}
catch(e){
    console.log(e)
}

}

app.get('/',async (req,response)=>{
    createtable("User")
let qer=`select * from user`
let resp= await server.all(qer)
    response.send(resp)
})
app.post('/create',async(req,resp)=>{
    let data=req.body
    console.log(data)
    let name=data.name
    let id=data.id 
    let role=String(data.role)
    let package=data.package
    let location=data.location
     query=`insert into user(id,name,location,role,package) values (${id},'${name}','${location}','${role}',${package})`
    console.log(name,id,location,role,package)
    console.log(query)
    await server.run(query)
    resp.send('created data')
})

app.delete('/deletedta',async (req,resp)=>{
    query='delete from user'
    server.run(query)
    resp.send('deleted all data')
})
try{app.listen(3080,()=>{
    console.log('done')
})}
catch(e){
    console.log(e)
}
