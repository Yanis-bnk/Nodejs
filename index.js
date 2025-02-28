const express = require("express")
const app=express()
app.get("/helloword",(req,res)=>{
    res.send('hello yanis beniken')
})