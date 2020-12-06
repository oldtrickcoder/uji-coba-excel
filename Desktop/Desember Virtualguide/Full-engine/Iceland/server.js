"use strict";
const express = require("express");
var app = express();
const path = require("path");
var host = "localhost";
var port = 3000;



app.set('views', path.join(__dirname, 'view'));
app.set('view engine','ejs');


app.use(express.static('./public'));


app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/member',(req,res)=>{
   res.render('member');
});

app.get('/thankyou',(req,res)=>{
    
    res.render('confirmed');
});

var server=app.listen(port,host,function(){
    var port=server.address().port;
    console.log("and I Love you %s",host,port);
});