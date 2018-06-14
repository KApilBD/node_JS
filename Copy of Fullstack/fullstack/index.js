var exp = require('express');
var bodyParser = require('body-parser');
var fs= require('fs');
var dbroutes=require('./routes/dbroutes');
var app=exp();
var fileUpload = require ('express-fileupload');





//parsing the incoming request, after submit the data will parse to JS format data
app.use(bodyParser.urlencoded());
//parse the file that is uploaded
app.use(fileUpload()); 

//to join the route
app.use("/dbroutes",dbroutes);

//Listing data on 3000 port, you can remore anonymous fun
app.listen(3000,() => console.log("Server is running!!!!"));

app.get('/',(request,response)=>{
    response.send("Hi!! from express");
})

// app.post('/store',(request,response)=>{
//     if(request.files){
//         let regex =/\.(docx|doc|pdf)$/;
//         let filename=request.files.resume.name;
//         if(regex.test(filename)){
//             request.files.resume.mv("resume/"+filename,(err)=>{
//                     if (err){
//                         response.send("resume not stored and so is the data ")
//                     }
//             })
//         }else
//          response.send("Data not stored please upload doc or pdf.");
//     }else
//         response.send("please upload a file.")

//     var sno=request.body.sno;
//     var name=request.body.name;
//     var city=request.body.city;
//     var resume=request.files.resume.name;
//     var obj={sno:sno,name:name,city:city,resume:resume};
//     //obj=JSON.stringify(obj);
//     fs.readFile("data/info.txt",'utf8',(err,data)=>{
//         if(err){
//             console.log("stuck hereeeeeeeee")
//             response.send("Error in Manipulating the data!!!!!");
//         }
//         var temp=JSON.parse(data);
//         temp.push(obj);
//         temp=JSON.stringify(temp);
//         fs.writeFile("data/info.txt",temp,(err)=>{
//         if(err){
//             console.log(err);
//             response.send("Data is not stored!!!!!");
//         }            
//                     response.send("Data is stored!!!!!")
//         })

//     })
//     // fs.appendFile("data/info.txt",obj,(err)=>{
//     //     if(err){
//     //         console.log(err);
//     //         response.send("Data is not stored!!!!!");
//     //     }
//     //     response.send("Data is stored!!!!!")
//     // })
// })

app.use(exp.static(__dirname+'/public/styles'));
app.use(exp.static(__dirname+'/public/scripts'));
app.use(exp.static(__dirname+'/bower_components'));
app.use(exp.static(__dirname+'/public/amodule'));

app.set('views',__dirname+'/public/templates');
app.set('view engine', 'ejs');

// app.get('/table',(req,res)=>{
//     fs.readFile("data/info.txt",'utf8',(err,obj)=>{
//         if(err){
//             console.log(err)
//             res.send("Data not Loading!!!")
//         }
//         let info=JSON.parse(obj);
//         res.render("table",{data:info});
//     })
// })

app.get('/home',(request,response)=>{
    response.sendFile(__dirname+"/public/views/index.html");
})




app.get('/restclient',(request,response)=>{
    response.sendFile(__dirname+"/public/views/angular.html");
})
