var db = require('./connection.js');

var operations={
    getAll:(callback)=>{
        db.query("select * from person",callback)
    },
    addPerson: (person,callback)=>{
        db.query("insert into person values(?,?,?)",[person.sno, person.name,person.city],callback);
    }
}


module.exports = operations;

