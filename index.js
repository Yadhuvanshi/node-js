const express=require('express');
const app=express();
const reqFilter=require('./middleware');
//app.use(reqFilter);
const route=express.Router();
route.use(reqFilter);
app.get('/',(req,resp)=>{
    resp.send("this is the home page")
})
app.get('/user',(req,resp)=>{
    resp.send("this is the user page")
})
route.get('/about',(req,resp)=>{
    resp.send("this is the about page")
})
route.get('/help',(req,resp)=>{
    resp.send("this is the help page")
})
app.use('/',route);
app.listen(5000)


