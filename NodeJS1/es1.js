class Student{
    constructor(sno,name){
        this.sno=sno;
        this.name=name;
    }

    display(){
        console.log(this.sno+" "+this.name);
    }

}

var obj1=new Student(12,"Naveen");
var obj2=new Student(13,"Kapil");

obj1.display("jh");
obj2.display();
