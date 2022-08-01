var express = require('express');
// var bodyPrser = require('body-parser');

// var router = require("./router");
var app =express();

// app.use(bodyPrser.urlencoded({extended:true}));
// app.use(bodyPrser.json());

// router(app);

var onDefault = function(req,res){
    res.send("<h1>Hello Everyone...<h1>");
};



app.get("/",onDefault);


app.listen(8081);
console.log("productHub service listening on port number 8081");
