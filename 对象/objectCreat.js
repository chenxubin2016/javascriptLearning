// 对象的创建方法

// 1)对象自面了创建对象
/* var obj={} */

// 2)构造函数构建对象
/* var obj =new Object(); */

// 3)
/* var obj=Object.create(prototype) */

// 自定义构造函数  
// 构造函数在形式上同普通函数没有区别
// 自定义函数一般使用大驼峰命名

/**
 *
 *
 * @param {*} name
 * @param {*} age
 * @param {*} sex
 * @param {*} like
 */
function Person(name,age,sex,like) {
    //var this={};隐式
    this.name=name;
    this.age=age;
    this.sex=sex;
    this.like=like;
    // return this;隐式
};
Person.prototype.lastName='chen';
var person1=new Person('zb',27,'male','eating');


console.log(person1)


var person={
    name:'zb',
    age:27,
    sex:'male',
    like:'eating'
}

//包装类

/* var num=new Number(123);
var str=new String('abc');
var bol=new Boolean('true');
num.name='chenuxbin'
str.name='chenuxbin'
bol.name='chenuxbin'
console.log(num)
console.log(str)
console.log(bol) */

/* var str='abc';
// new String(str).length=2; delete
console.log(str.length) */


var str='abc';
str+=1;
var test=typeof str;
if(test.length==6){
    test.sign='typeof的返回值是可能为string';
}
//原始值赋值操作
// new String(test).sign='typeof的返回值是可能为string'; delete
// console.log(new String(test).sign);
console.log(test.sign);//undefined



