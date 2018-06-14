var p=[1,2,3,4,5]

var temp=p.reduce((product,current)=>{
    if(product==undefined)
      return 1;
    return product*current;
});

console.log(temp);