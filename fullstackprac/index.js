var express = require('express');
var bodyparser = require('body-parser');
var fs = require('fs');

var app = express();

app.listen(4000);

app.use(bodyparser.urlencoded());


app.get('/',(req,res)=>{
    res.send("Hello.....")
})

app.use(express.static(__dirname+'/public/styles'));
app.use(express.static(__dirname+'/bower_components'));

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/views/index.html')
})

// app.post("/store",(req,res)=>{
//        var sno=req.body.sno;
//        var name=req.body.name;
//        var city=req.body.city;
//        var obj={sno:sno,name:name,city:city};
//        fs.readFile("data/info.txt",'utf8',(err,data)=>{
//            if(err){
//                res.send("Error in Manipulating the data!!!!!")
//            }

//            var temp = JSON.parse(data);
//            temp.push(obj);
//            temp=JSON.stringify(temp);
//            fs.writeFile("data/info.txt",temp,(err)=>{
//                if(err){
//               console.log(err);
//             res.send("Data is not stored!!!!!");
//         }            
//                     res.send("Data is stored!!!!!")
//            })
//        })
//     //    obj=JSON.stringify(obj);
//     //    console.log.apply(obj);
//     //    fs.appendFile("data/info.txt",obj,(err)=>{
//     //        if(err){
//     //            res.send("Data not loaded");
//     //        }else{
//     //            res.send("Data loaded")
//     //          }
//     //    })
// })

app.set('views',__dirname+'/public/templates');
app.set('view engine','ejs');

// app.get("/table",(req,res)=>{
//     fs.readFile("data/info.txt",'utf8',(err,data)=>{

//         if(err){

//                         console.log(err)
//             res.send("Data not Loading!!!")
//         }
//         let info= JSON.parse(data);
//         res.render("table",{data:info})
//     })
// })