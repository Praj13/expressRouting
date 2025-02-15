const express = require('express')
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello from Prajwol Rajbansi")
})


app.get('/about',(req,res)=>{
    res.send("Hello from Prajwol Rajbansi in about page")
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})