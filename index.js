const express=require('express');
const app=express();
const reqFilter=require('./middleware');
//app.use(reqFilter);
app.get('/',(req,resp)=>{
    resp.send("this is the home page")
})
app.get('/user',reqFilter,(req,resp)=>{
    resp.send("this is the user page")
})
app.listen(5000)


