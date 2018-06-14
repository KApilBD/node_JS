
var obj = ["1343","5khkhj","ra#vi","raj","sky","toy","aA","week",
"shoe","roger","my@gmail.com","ofc@gmail.com","per@gmail.com",
"christ","john","joh","jon","man321","man.321@gmail.com","blue@gmail","29736jjd"]

//var regex=/^[a-zA-Z][a-zA-Z]*[a-zA-Z]$/;
//var regex=/^[a-zA-Z].{2,4}[a-zA-Z]$/;
//var regex=/^[Jj](oh|o|ho)n$/;
//var regex=/\./;
//var regex=/^[a-z][a-z0-9_\.]+@[a-z]+\.[a-z]{2,3}$/;
var regex=new RegExp("^[a-z][a-z0-9_\.]+@[a-z]+[\.][a-z]{2,3}$");

for (var x in obj){
    if(regex.test(obj[x]))
        console.log(obj[x])
}

/* Regular Ex: It is a string pattern which is built by using some special charechar. 
Where the chars used has some inbuilt meaning.*/