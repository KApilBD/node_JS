function callme(p){
    p("Europe");
}

class Continent{
    constructor(){
        this.value='Asia';
    }
    // changeContinent(){
    //     callme(function(data){
    //         this.value=data;
    //     }.bind(this))
    // }

    changeContinent(){
        callme((data)=>this.value=data)
    }

    display(){
        console.log(this.value);
    }
}

var obj = new Continent();
obj.display();
obj.changeContinent();
obj.display();