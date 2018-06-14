function fun(z){
    z[2]=z[1]+z[0]
    z[7]=1234;
}

var p = [12,21]

fun(p)
console.log(p);
console.log(p[2]);