/**函数*****************************************/

/* 
定义

    函数声明 function test(){}

    函数表达式 var test=function(){}

组成形式

    函数名称 不能以数字开头，最好用英文小驼峰命名

    参数

        形参

        实参

    返回值 
*/

// function test(){
//     console.log('a');
// }
// test();

// var test=function abc(){
//     console.log('b');
// }
// abc()


// 正确使用方法
// var test=function () {
//     console.log('c')
// };
// test()


// index.js:40 Uncaught TypeError: test is not a function at
// var i=9;  
// function fo(){  
//     var i=0;  
//     return function(n){  
//         return n+i++;//原题是这样的。n和i先相加，然后i再累加  
//         //return n+++i;//扩展一下思咱：如果改造成这样的代码会是什么答案。（n先和i相加，然后n自己再累加）  
//         //return n+(++i);//这样呢？（i先累加，然后n和i再相加）  
//         //首先要明确这个i是那儿定义的，当这个方法运行的时候。  
//     }  
// }; 

// var f=fo();
// var a=f(15);alert(a);
var a=10;
function al(a){
    console.log(a);
}
var c=function ac(a) {
    console.log(a)
}
