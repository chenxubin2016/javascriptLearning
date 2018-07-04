function firstName(){

}
console.log(firstName)
console.log(firstName.name)

var test=function demo(){

}

var test1=function(){

}

console.log(test.name)
console.log(test.length)
console.log(test1.name)


// 递归
function mul(n) {
    if(n==1||n==0){
        return 1;
    }else{
        return n*mul(n-1);
    }
}

// 斐波拉契数列
function fb(n) {
    if(n==1||n==2){
        return 1;
    }
    return fb(n-1)+fb(n-2);
}

// 求一个数的斐波拉契数列
function fbs(n){
    var arr=[];
    for(var i=1; i<=n; i++){
        arr.push(fb(i));
    }
    console.log(arr);
}

fbs(15);
