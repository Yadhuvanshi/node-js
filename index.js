const express=require('express');
const path=require('path');
const publicpath=path.join(__dirname,'public');
const app=express();
app.get('/',(_,resp)=>{resp.sendFile(`${publicpath}/index.html`)});
app.get('/about',(_,resp)=>{resp.sendFile(`${publicpath}/about.html`)});
app.get('/help',(_,resp)=>{resp.sendFile(`${publicpath}/help.html`)});
app.get('*',(_,resp)=>{resp.sendFile(`${publicpath}/helpcopy.html`)});
app.listen(5000);


