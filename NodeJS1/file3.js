function callThisToo(p){
  console.log(p);

  return function(q){
      console.log(q);
  }
}

callThisToo("Board")("France");