var _ = require("underscore");
var formatDate = require('date-format');

var MyQLConnection = require("./base/mysql_connection");
var simplePool = MyQLConnection.getConnection;

var repository = function () {};

var _PassportTable = {
    "sale_name": true,
    "sale_mobile": true,
    "password": true
};

function _formatPassportTable(conditions) {
    var fields = [];
    var values = [];

    for (var field in conditions) {
        if (_PassportTable[field] && conditions[field]) {
            fields.push(field);
            values.push(conditions[field]);
        }
    }

    return [fields, values];
}

// 查询销售员
repository.prototype.querySalesman = function (conditions, callback) {
    var sql = "SELECT * FROM tb_salesman WHERE sale_mobile=? and password=?";
    var params = [conditions.sale_mobile, conditions.password];
    var connection = simplePool.newConnect();

    connection.query(sql, params, function (err, rows) {
        if (err) {
            connection.end();
            callback(err);
            throw err;
        }
        callback(null, rows);
    });
    connection.end();
};

// 登录时间
repository.prototype.updateSalesManTime = function (conditions, callback) {
    var sql = "UPDATE tb_salesman SET last_date=? WHERE id=?";
    var params = [formatDate('yyyy-MM-dd hh:mm:ss', (new Date())), conditions.id];
    var connection = simplePool.newConnect();

    connection.query(sql, params, function (err, rows) {
        if (err) {
            connection.end();
            callback(err);
            throw err;
        }
        callback(null, rows);
    });
    connection.end();
};

module.exports = new repository();
