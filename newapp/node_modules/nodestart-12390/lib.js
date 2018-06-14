

global = function (){
    console.log("global function is running")
}

constants={pf:0.07,hrs:0.09,it:0.03}

class Student{
    constructor(sno, name){
        this.sno=sno;
        this.name=name;
    }
    display(){
        console.log(this.sno+" "+this.name)
    }
}

module.exports={
    global:global,
    constants:constants,
    student:Student,
}