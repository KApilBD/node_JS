function Class(sno,name){
    this.sno=sno;
    this.name=name;
}

Class.prototype.display=function(){
    console.log(this.sno+" "+this.name)
    return {chain: function(){
        console.log("this is a function")
    }}
}


var obj =new Class(12,"Ramesh");
    obj.display().chain()
