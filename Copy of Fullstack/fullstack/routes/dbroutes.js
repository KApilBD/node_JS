var express = require('express');
var route= express.Router();
var tasks= require('../database/task')

route.get("/people", (req,res)=>{
    tasks.getAll((err,data)=>{
        if(err){
            res.render("table",{data:[]})
        }else{
            res.render("table",{data:data})
        }
    })
})

route.post("/addpeople", (req,res)=>{
    let person = {
        sno: req.body.sno,
        name: req.body.name,
        city: req.body.city,
    }
    tasks.addPerson(person,(err,data)=>{
        console.log("Hereeeeeeeeeee")
        if(err){
            res.send("Row not added");
        }
        res.send("Row added")
    })
})


module.exports = route;