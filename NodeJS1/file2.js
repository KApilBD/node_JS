function callme(p,q,r){
    q(greet(p));
    r(greet(p));
}

function greet(a){
    return "Hello!! "+a;
}

callme("Kapil",function(a){
  console.log("Hey!!" + a);
},function(b){
  console.log("Hola!!"+ b);
});

