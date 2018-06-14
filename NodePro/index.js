var os = require('os');
var fs= require ('fs');
var mod= require('./mod')

console.log(os.arch());
console.log(os.platform());

fs.readFile("package.json",'utf8',function(err,data){
    if(err)
        console.log("error in reading file")
    else
        console.log(data);
});

console.log("After file read!!!");

mod.fun();

console.log(mod.names);