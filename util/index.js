var _ = require("underscore");

// 公共函数
var Utilities = function() {
    return this;
};

Utilities.prototype = {};

// cookies字典
Utilities.Cookies = {};

// session字典
Utilities.Sessions = {};

// navigator字典
Utilities.NavNames = {
    "Dashboard": {    // 首页
        "top": "dashboard",
        "sub": ""
    },
    "Users": {    // 会员管理
        "top": "users",
        "sub": ""
    },
    "Reservations": {    // 场地预订
        "top": "reservations",
        "sub": ""
    },
    "Goods": {    // 商品管理
        "top": "goods",
        "sub": ""
    }
};

// 支付方式字典
Utilities.PayTypes = {
    "1": "支付宝",
    "2": "微信支付",
    "3": "银联支付",
    "4": "支票",
    "5": "现金支付"
};

Utilities.formatRequest = function (conditions) {
    for (var k in conditions) {
        if (conditions[k] === "") {
            delete conditions[k];
        }
    }

    return {
        flag: "HTML5",
        token: conditions.token,
        data: conditions
    };
};

Utilities.formatPageUrl = function (originalUrl) {
    originalUrl = originalUrl.replace(/[\?&]page=\d+/, "");

    return (originalUrl.indexOf("?") > -1) ? (originalUrl + "&") : (originalUrl + "?");
};

Utilities.formatPageIndexes = function (current, total, size) {
    var pages = [];

    size = size || 5;

    var pageMin = current > 1 ? (current - 1) : 1;
    var pageMax = (pageMin + size - 1) > total ? total : (pageMin + size - 1);

    if (pageMax == total && pageMax > size) {
        pageMin = pageMax - size + 1;
    }

    for (var i = pageMin; i <= pageMax; i++) {
        pages.push(i);
    }

    return pages;
};

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Utilities.formatDate = function (fmt) {
    var date = new Date();

    var o = {
        "M+" : date.getMonth()+1,                 //月份
        "d+" : date.getDate(),                    //日
        "h+" : date.getHours(),                   //小时
        "m+" : date.getMinutes(),                 //分
        "s+" : date.getSeconds(),                 //秒
        "q+" : Math.floor((date.getMonth()+3)/3), //季度
        "S"  : date.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
};

// 获取json的Text
Utilities.getText = function (json, value) {
    for (var key in json) {
        if (json[key].value == value) {
            return json[key].text;
        }
    }

    return '';
};

// 获取json的item
Utilities.getItem = function (json, value) {
    for (var key in json) {
        if (json[key].value == value) {
            return json[key];
        }
    }

    return {};
};

module.exports = Utilities;
