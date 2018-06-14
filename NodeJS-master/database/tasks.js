var db=require('./connection.js');


var operations={
    getAll: function(callback){
          db.query("select * from person",callback);
    },
    addPerson: function(person,callback){
        db.query("insert into person values(?,?,?)",[person.sno,person.name
        ,person.city],callback);
    }
}

module.exports=operations;