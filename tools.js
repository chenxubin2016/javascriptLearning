/*
*非空校验
*isEmpty返回值为false说明字符串不为空，返回true字符串为空
*/
function isEmpty (str) {
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
 *累加求和
 *
 * @returns
 */
function sum () {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

/**
 * 判断传入的值是不是NaN
 * @param {any} num 为任意值
 * @returns 布尔值
 */
function isNaN (num) {
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
function retBytes (str) {
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
function randomArr (arr) {
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
function type (target) {
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
/**
 *节点类型转换中文名
 *
 * @param {*} nodeType 
 * @returns
 */
function nodeTypeCodeToName (nodeType) {
    switch (nodeType) {
        case 1:
            return '元素节点'
        case 2:
            return '属性节点';
        case 3:
            return '文本节点';
        case 8:
            return '注释节点';
        case 9:
            return 'document';
        case 11:
            return 'DocumentFragment';
    }
}
/**
 *求元素的父级元素
 *
 * @param {*} el 对象
 * @param {*} n 第几个父级元素
 * @returns
 */
function retParent (el, n) {
    while (el && n) {
        var el = el.parentElement;
        n--;
    }
    return el;
}
/*
*在不用Element.children选择子元素的情况下，
*封装选择子元素的方法
*/
Element.prototype.myChildren = function () {
    var childNodes = this.childNodes,
        len = childNodes.length,
        arr = [];
    for (var i = 0; i < len; i++) {
        (function (i) {
            if (childNodes[i].nodeType === 1) {
                arr.push(childNodes[i]);
            }
        }(i));
    }
    return arr;
}
/**
 *根据给定对象和一个整数n，n分正数、负数、0，
 *获取该对象的兄弟元素
 *
 * @param {*} el 对象
 * @param {*} n 整数
 */
function retSibling (el, n) {
    while (el && n) {
        if (n > 0) {
            if (el.nextElementSibling) {
                el = el.nextElementSibling;
            } else {
                for (el = el.nextSibling; el && el.nodeType != 1; el = el.nextSibling);
            }
            n--;
        } else {
            if (el.previousElementSibling) {
                el = el.previousElementSibling;
            } else {
                for (el = el.prevSibling; el && el.nodeType != 1; el = el.prevSibling);
            }
            n++;
        }
    }
    return el;
}

/* 
*insertAefore封装
 */
Element.prototype.insertAefore = function (targetNode, afterNode) {
    var beforeNode = afterNode.nextElementSibling;
    if (beforeNode) {
        this.insertBefore(targetNode, afterNode);
    } else {
        this.appendChild(targetNode);
    }

}
/**
 * nextElementSibling兼容封装
 */
Element.prototype.nextElementSibling = function () {
    if (this.nextElementSibling) {
        return this.nextElementSibling;
    } else {
        if (this.nextSibling.nodeType === 1) {
            return this.nextSibling;
        } else {
            var node = this.nextSibling;
            while (node && this.node.nodeType !== 1) {
                node = node.nextSibling;
            }
            return node;
        }
    }
}

/**
 * firstElementChild
 * 获取第一个子元素兼容封装
 */
Element.prototype.firstElementChild = function () {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var node = element.firstChild;
        while (node && node.type !== 1) {
            node = node.nextSibling;
        }
        return node;
    }
}
/*
 * pageOffset封装
 * 活动屏幕滚动距离
 */
function pageOffset () {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollHeight + document.documentElement.scrollHeight
        }
    }
}

/**
 *
 *获得浏览器可视区的宽高
 */
function windowViewOffset () {
    if (window.innerWidth) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else {
        if (document.compatMode == 'CSS1Compat') {
            return {
                width: document.body.clientWidth,
                height: document.body.clientHeight
            }
        } else {
            return {

                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        }
    }
}
/*
 * 封装获得元素在dom中相对body的x，y的距离
 */
Element.prototype.elementPosition = function () {
    if (this.offsetParent) {
        var x = this.offsetLeft,
            y = this.offsetTop;
        return {
            x: x + this.offsetParent.offsetLeft,
            y: y + this.offsetParent.offsetTop
        }
    } else {
        return {
            x: this.offsetLeft,
            y: this.offsetTop
        }
    }
}


/**
 *
 *
 * @param {*} names 异步加载js名字
 * @param {*} path  异步加载js文件路径
 */
function asyncScript (names, path) {
    for (var i = 0; i < names.length; i++) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = path + names[i];
        document.body.appendChild(s);
    }
}

/**
 *原生ajax封装
 *
 * @param {*} options
 */
function ajax (options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";
    var params = formatParams(options.data);
    var xhr;

    //创建 - 第一步
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveObject) {         //IE6及以下
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    //连接 和 发送 - 第二步
    if (options.type == "GET") {
        xhr.open("GET", options.url + "?" + params, true);
        xhr.send(null);
    } else if (options.type == "POST") {
        xhr.open("POST", options.url, true);
        //设置表单提交时的内容类型
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }

    //接收 - 第三步
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300 || status == 304) {
                options.success && options.success(xhr.responseText, xhr.responseXML);
            } else {
                options.error && options.error(status);
            }
        }
    }
}

//格式化参数
/**
 *ajax数据格式化
 *
 * @param {*} data
 * @returns
 */
function formatParams (data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    }
    arr.push(("v=" + Math.random()).replace("."));
    return arr.join("&");
}

/**
 *数字转中文数字
 *
 * @param {*} target
 * @returns
 */
function transfer (target) {
    switch (target) {
        case "0":
            return '零';
        case "1":
            return '壹';
        case "2":
            return '贰';
        case "3":
            return '叁';
        case "4":
            return '肆';
        case "5":
            return '伍';
        case "6":
            return '陆';
        case "7":
            return '柒';
        case "8":
            return '捌';
        case "9":
            return '玖';
    }
}


/**
 *获取 斐波拉契数列 第n位的值
 *
 * @param {*} n
 */
function fb (n) {
    if (n == 1 || n == 2) {
        return 1;
    }
    return fb(n - 1) + fb(n - 2);
}

/**
 *获得一个数的 斐波拉契数列
 *
 * @param {*} n
 */
function fbs (n) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
        arr.push(fb(i));
    }
    return arr;
}