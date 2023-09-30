const express= require('express');
const app=express();
const path=require('path');
const port=process.env.PORT || 3300;
const hbs=require('hbs');

const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_Path=path.join(__dirname,"../templates/partials");

app.use(express.static(static_path));

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_Path)

app.get("/",(req,res)=>{
    res.render('index');
});

app.get("/about",(req,res)=>{
    res.render('about');
});

app.get("/weather",(req,res)=>{
    res.render('weather');
});

app.get("*",(req,res)=>{
    res.render('404error',{
        errrMsg:"OOPS!page not found",
    });
});

app.listen(port,()=>{
console.log(`listen to port no ${port}`)
});