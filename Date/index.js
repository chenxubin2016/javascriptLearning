var f=new Date().getTime();
for(var i=0; i<100000000;i++){}
var d=new Date().getTime();
console.log(d-f);