const express=require('express');
const app=express();
const reqFilter=(req,resp,next)=>{
    if(!req.query.age)
    {
        resp.send("please provide age")
    }
    else if(req.query.age<18)
    {
        resp.send("no access granted as age is less than 18")
    }
    else
    {
        next();
    }
}
//app.use(reqFilter);
app.get('/',(req,resp)=>{
    resp.send("this is the home page")
})
app.get('/user',reqFilter,(req,resp)=>{
    resp.send("this is the user page")
})
app.listen(5000)


