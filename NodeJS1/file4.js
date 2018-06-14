function outer(x,y){
    function inner(n){
        x=n+x+20;
        y=n+y+20;
        console.log(x);
        console.log(y);
    }
    inner(10);
    console.log(x);
    console.log(y);
}

outer(5,10)