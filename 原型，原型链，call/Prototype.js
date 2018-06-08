// 原型特点 
// 大驼峰命名
// 1 定义：原型是function对象的一个属性，它定义了构造函数制造出的对象的公有祖先。通过该构造函数产生的对象，可以继承该原型的属性和方法。原型也是对象。
// 2 利用原型特点和概念，可以提取公有属性。
// 3 对象如何查看原型---->隐式属性__proto__
// 4 对象如何查看对象的构造函数 -----> constructor

// function byteslen(str){
//     var num=str.length;
//     for(var i=0; i<str.length; i++){
//         if(str.charCodeAt(i)>255){
//             num++;
//         }
//     }
//     return num;
// }

// Person.prototype.lastName='hh';
// function Person(){

// };

// var person=new Person();
/**
 *原型继承的应用
 *
 * @param {*} color
 */
function Car(color) {
    this.color = color;
}
Car.prototype = {
    width: 1780,
    height: 1400,
    lang: 4660,
    weight: '1310kg',
    carName: 'BMW'
}


var car = new Car('white');

// 原型的增，删，改，查

car.lang=4800;//属于修改对象属性


Person.prototype={
    lastName:'chenxubin',
    constructor:Car
}
function Person() {
    
}
// console.log(Person.prototype)
var person=new Person('white');

//都是指向对象的原型链
// Person.prototype.__proto__==Object.prototype