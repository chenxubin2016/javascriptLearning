// 'use strict'
// 错误信息
/*
EvalError:eval()的使用与定义不一致
RangeError:数值越界
ReferenceError:非法和不能识别的引用数值
SyntaxError:发生语法解析错误
TypeError:操作数类型错误
URIError:URl处理函数使用不当 */

try {
    console.log('a');
    console.log('b');
    console.log(c);
    console.log('d');
} catch (error) {
    console.log(error)
}
console.log('e');

// with es3语法
var obj={
    z:{
        a:1,
        b:2,
        c:3
    },
    d:{
        a:8,
        c:3,
        d:6
    }
}
console.log(obj)
with(obj.z){
    console.log(a);
};

with(obj.d){
    console.log(a);
}