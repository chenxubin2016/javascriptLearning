// call,apply的用法

function Person(name,age,sex){
    this.name=name;
    this.age=age;
    this.sex=sex;
}

function Student(name,age,sex,tel,grade){
    // Person.call(this,name,age,sex);
    Person.apply(this,[name,age,sex]);
    // this.name=name;
    // this.age=age;
    // this.sex=sex;
    this.tel=tel;
    this.grade=grade;
}

var student=new Student('chenuxbin','28','male',17740024802,66);


// 汽车制造案例

function Whell(size,style) {
    this.size=size;
    this.style=style;
}

function Sit(c,color) {
    this.c=c;
    this.sitColor=color;    
}

function Model(height,width,weight) {
    this.height=1400;
    this.width=1790;
    this.weight='1310kg';
}

function Car(size,style,c,color) {
    Whell.call(this,size,style);
    Sit.call(this,c,color);
    Model.call(this);
}

var car=new Car('19R','hh','镜面','银色');