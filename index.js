const express=require('express');
const app=express();

app.get('/',(req,resp)=>{
   
    resp.send("Hello Node Js")
    
    resp.send("Hello Node Mongo  (DB)")
})
app.listen(4000);