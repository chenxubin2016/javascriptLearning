var deng = {
    name: 'Mrdeng',
    preperwife:'lina',
    age: '27',
    sex: 'male',
    health: '100',
    somk: function () {
        console.log('I like somking!');
        this.health--;
        return this.health;
    },
    drink: function () {
        console.log('I am drink');
        this.health++;
        return this.health;
    }
}

// 对象的 增，删，改，查

// add
// deng.wife='xiaoliu';
deng['wife']='xiaoliu';

//delete
// delete deng.wife;
// delete deng['wife'];

// change
deng.wife='zhangming';
// deng['wife']='zhangming';

// query
console.log(deng.wife);
// console.log(deng['wife']);

