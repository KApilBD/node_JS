var exp = require('express');
var companies=require('../schema/schema')
var route = exp.Router();


//Objecet matching the company name
route.get('/companies/:name',(req,res)=>{
    let name=req.params.name;
    companies.find({name:name},(err,data)=>{
        if(err){
            res.json({});
        }else{
            res.json(data);
        }
    });
})

//Emit json array of companies matching a pattern
route.get('/cnames/:pattern',(req,res)=>{
    companies.find({name:{$regex:req.params.pattern,$options:'i'}},{_id:0,name:1},(err,data)=>{
        if(err){
            res.json([]);
        }else{
            res.json(data);
        }
    })
});

//update the employee count
route.put("/empcount/:name",(req,res)=>{
    let cname=req.params.name;
    companies.update({name:cname},{$set:req.body},(err,data)=>{
        if(err){
            res.send({result: "Not Updated"})
        }else{
            res.send({result: "Successfully Updated"})
        }
    })
})

module.exports = route;