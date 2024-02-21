const express=require('express');
const app=express();

app.get('/',(req,resp)=>{
   
    resp.send("Hello Node Js")
})
app.listen(4000);