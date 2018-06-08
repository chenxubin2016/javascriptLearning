// 对象创建的3种方式

// 1)
// var obj={
//     x:1,
//     y:2
// }

// 2)
/* var obj=new Object(); */

// 3)
// pro指向一个对象原型
/* var obj=Object.create(prototype); */

// 对象的查询与设置

/* obj.y
obj['y'] */

/* obj.y=2;
obj['y']=2; */


// 对象属性的删除

/* delete obj.y;
delete obj['y'];
delete只能删除自由属性，不能删除继承属性 */

// 对象属性的检测

// console.log(obj);
// 1）in运算符
/* console.log('y' in obj); */

// 2)hasOwnProperty()

// console.log(obj.hasOwnProperty('y'));
