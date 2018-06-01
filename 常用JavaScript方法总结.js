/*
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
 * @param {any} num 为任意值
 * @returns 布尔值
 */
function isNaN(num) {
    var ret=Number(num);
    ret+= '';
    if (ret == 'NaN') {
        return true;
    } else {
        return false;
    }
}