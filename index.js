const express=require('express');
const path=require('path');
const publicpath=path.join(__dirname,'public');
const app=express();
app.set('view engine','ejs');
app.get('/',(_,resp)=>{resp.sendFile(`${publicpath}/index.html`)});
app.get('/about',(_,resp)=>{resp.sendFile(`${publicpath}/about.html`)});
app.get('/profile',(_,resp)=>{const user=
    {
        name:'anil sidhhu',
        email:'unlink@gmail.com',
        city:'noida',
        skills:['php','java','python','c++']
    }
resp.render('profile',{user});});
app.get('/login',(_,resp)=>{resp.render('login')});
app.get('/help',(_,resp)=>{resp.sendFile(`${publicpath}/help.html`)});
app.get('*',(_,resp)=>{resp.sendFile(`${publicpath}/helpcopy.html`)});
app.listen(5000);


