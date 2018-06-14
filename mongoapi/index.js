var exp = require('express');
var app=exp();

var bodyParser= require('body-parser');
var mroute=require('./mroutes/mroute');

app.use(bodyParser.json());

app.listen(5000);

var mongo=require('mongoose');
 mongo.connect("mongodb://localhost/capgemini");


var db= mongo.connection;
db.on('error',console.error.bind(console,'connection error:'))

db.once('open',()=>console.log("Mongo db connection is open"));

app.use("/mongo-api",mroute);
