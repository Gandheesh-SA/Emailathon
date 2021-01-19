//jshint esversion:6
const express= require('express');
const app =express();
const bodyParser=require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.get("/",function(req,res){
    res.render("home");
});
/*app.post("/signUp",function(req,res){
     res.render("confirmation",{message:"Success"});
});
app.post("/signIn",function(req,res){
    res.render("confirmation",{message:"Success"});
});*/
app.listen(3000,function(){
    console.log("Server started in port 3000");
});
