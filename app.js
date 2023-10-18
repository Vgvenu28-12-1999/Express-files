 
// fs allows us to work with the file system
const express= require('express')
const fs = require('fs')
const bodyparser  = require('body-parser')
const app = express()
app.use(bodyparser.urlencoded());
app.get('/',(req,res,next) =>{
     fs.readFile('username.txt',(err,data)=>{
        if(err){
            console.log(err)
            data = 'No chat exist'
        }
        res.send(`${data}<form action= "/" method="POST" onSubmit = "document.getElementById('username').value=localStorage.getItem(username)"> 
    <input type ="text" name="message" id="message">
    <input type = "hidden" name="username" id="username>"
    <br />
    <button type ="submit">Send</button>

    </form>`
    )
     })
    
        
    });
    app.post("/",(req,res,next)=>{
        console.log(req.body.username)
        console.log(req.body.message)
        fs.writeFile("username.txt",`${req.body.username}: ${req.body.message}`,{flag:'a'}, (err)=>
            err ? console.log(err) : res.redirect("/")
        )
    })

    app.get("/login",(req,res,next) =>{

        res.send(`<form action= "/login" method="POST" onSubmit = "document.getElementById('username').value=localStorage.getItem(username)"> 
        
        <input type ="text" name="message" id="message">
        
        <br />
        <button type ="submit">Login</button>
    
        </form>`
        )
    });            

    app.post("/login",(req,res,next)=>{
        console.log(req.body.username)
        console.log(req.body.message)
        fs.writeFile("username.txt",` ${req.body.message}`, (err)=>
            err ? console.log(err) : res.redirect("/")
        )
    })


app.listen(5303)
// learn start fron express 9 video


    










