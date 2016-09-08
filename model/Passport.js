var uuid = require('uuid');
var md5 = require('md5');

var db_passport = require('../database/db_passport');

function Passport() {}

Passport.prototype = {};

// 销售员登录
Passport.userLogin = function (conditions, callback) {
    conditions.password = md5(conditions.password);

    db_passport.querySalesman(conditions, function (err, data) {
        if (err) {
            return callback(err);
        }

        return callback(null, data);
    });
};

// 更新登录时间
Passport.updateSalesManTime = function (conditions, callback) {
    db_passport.updateSalesManTime(conditions, function (err, data) {
        if (err) {
            return callback(err);
        }

        return callback(null, data);
    });
};

module.exports = Passport;
