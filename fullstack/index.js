var exp = require('express');
var bodyParser = require('body-parser');
var fs= require('fs');
var app=exp();


//parsing the incoming request, after submit the data will parse to JS format data
app.use(bodyParser.urlencoded());

//Listing data on 3000 port, you can remore anonymous fun
app.listen(3000,() => console.log("Server is running!!!!"));

app.get('/',(request,response)=>{
    response.send("Hi!! from express");
})

app.post('/store',(request,response)=>{
    var sno=request.body.sno;
    var name=request.body.name;
    var city=request.body.city;
    var obj={sno:sno,name:name,city:city};
    //obj=JSON.stringify(obj);
    fs.readFile("data/info.txt",'utf8',(err,data)=>{
        if(err){
            console.log("stuck hereeeeeeeee")
            response.send("Error in Manipulating the data!!!!!");
        }
        var temp=JSON.parse(data);
        temp.push(obj);
        temp=JSON.stringify(temp);
        fs.writeFile("data/info.txt",temp,(err)=>{
        if(err){
            console.log(err);
            response.send("Data is not stored!!!!!");
        }            
                    response.send("Data is stored!!!!!")
        })

    })
    // fs.appendFile("data/info.txt",obj,(err)=>{
    //     if(err){
    //         console.log(err);
    //         response.send("Data is not stored!!!!!");
    //     }
    //     response.send("Data is stored!!!!!")
    // })
})

app.use(exp.static(__dirname+'/public/styles'));
app.use(exp.static(__dirname+'/public/scripts'));
app.use(exp.static(__dirname+'/bower_components'));

app.set('views',__dirname+'/public/templates');
app.set('view engine', 'ejs');

app.get('/table',(req,res)=>{
    fs.readFile("data/info.txt",'utf8',(err,obj)=>{

        if(err){
            console.log(err)
            res.send("Data not Loading!!!")
        }
        let info=JSON.parse(obj);
        res.render("table",{data:info});
    })
})

app.get('/home',(request,response)=>{
    response.sendFile(__dirname+"/public/views/index.html");
})

