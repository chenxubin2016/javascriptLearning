/*
*非空校验
*isEmpty返回值为false说明字符串不为空，返回true字符串为空
*/
function isEmpty(str) {
    if (str != null && str != undefined && str != "") {
        return false;
    } else if (str.replace(/(^s*)|(s*$)/g, "").length != 0) {
        return false;
    } else {
        return true;
    };
}

/**
 * 求数组的最大值
 */
Array.prototype.max = function () {
    var max = this[0];
    for (var i = 0; i < this.length; i++) {
        if (this[i] > max) {
            max = this[i];
        }
    }
}
/**
 * 求数组的最小值
 */
Array.prototype.max = function () {
    var min = this[0];
    for (var i = 0; i < this.length; i++) {
        if (this[i] < min) {
            min = this[i];
        }
    }
}

/**
 * 判断传入的值是不是NaN
 * @param {any} num 为任意值
 * @returns 布尔值
 */
function isNaN(num) {
    var ret = Number(num);
    ret += '';
    if (ret == 'NaN') {
        return true;
    } else {
        return false;
    }
}
/**
 * 求一个字符串的字节长度
 * 
 * @param {any} str 字符串
 * @returns 
 */
function retBytes(str) {
    var num = str.length;
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 255) {
            num++;
        }
    }
    return num;
}
/**
 * 打乱指定数组，返回一个新数组
 * 
 * @param {any} arr //指定数组
 * @returns 
 */
function randomArr(arr) {
    var Arr = arr.soft(function (a, b) {
        return Math.round() - 0.5;
    })
    return Arr;
}

/**
 * 数组去重,根据对象键值的唯一性
 */
Array.prototype.unique = function () {
    var temp = {},
        arr = [],
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (!tepm[this[i]]) {
            tpem[this[i]] = 'abc';
            arr.push(this[i]);
        }
    }
    return arr;
}

/**
 * 判断数据类型
 * @param {any} target 
 * @returns 
 */
function type(target) {
    var ret = typeof (target);
    var template = {
        "[object Array]": "array",
        "[object Object]": "object",
        "[object Number]": "number - object",
        "[object Boolean]": "boolean - object",
        "[object String]": "string - object"
    }
    if (target === null) {
        return "null";
    };
    if (ret == "object") {
        var str = Object.prototype.toString.call(target);
        return template[str];
    } else {
        return ret;
    }
}
