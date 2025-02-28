const express = require("express")
const app=express()
app.get("/helloword",(req,res)=>{
    res.send('hello yanis beniken')
})
app.get("/HI",(req,res)=>{
    res.send('tu es dans hi')
})
app.get("/test",(req,res)=>{
    res.send('tu es dans test')
})
app.post("/postt",(req,res)=>{
    res.send('tu es dans post')
})
app.get("/get", (req, res) => {
    let number = "";
    for (let i = 0; i <= 100; i++) {  
        number += i + "-";
    }
    res.send(`Les nombres sont ${number}`); 
});
app.listen(3000,()=>{
    console.log('tu travaille sur le port 3000')
})
    app.get("/Api/:number1/:number2",(req,res)=>{
        res.send('tu es dans post')
    })