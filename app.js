var express = require("express");
var app = express();

app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("home");
});


app.get("/resume", function(req, res){
    res.render("resume");
});

app.get("/portfolio", function(req, res){
    res.render("portfolio");
});

app.get("/contact", function(req,res){
    res.render("contact");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});