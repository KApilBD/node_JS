//console.log(this);

function Entity(a,b){
    console.log(this)
    this.a=a;
    this.b=b
}

Entity.prototype.display=function(){
    console.log(this.a+" "+this.b);

}

//var Object = "India"

var obj1 = new Entity(12,23)
var obj2 = new Entity(34,43)

obj1.display();
obj2.display();

console.log(this)