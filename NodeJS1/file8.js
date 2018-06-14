var object ={
    sno:12,
    name:"Kapil",
    city:"Jodhpur",

}

object.age=45;
object.skills=["java","C++","JavaScript"]
object.print=function(){
    console.log(this.name+" "+this.city)
}


// console.log(object)
// object.print();

var obj=[23,32,"Robert",function(){
    console.log("Running ...!!!")
},function(){
    console.log("Walking on Wire...!!!")
},[12,23,function(){
    console.log("Flying ...!!!")
}],
object]

obj[3]();
obj[4]();
obj[5][2]();
obj[6].print();
