var _ = require("underscore");

var MyQLConnection = require("./base/mysql_connection");
var simplePool = MyQLConnection.getConnection;

var repository = function () {};

// 查询会员
repository.prototype.queryMembers = function (conditions, callback) {
    var sql = "SELECT * FROM tb_members WHERE 1=1";
    var connection = simplePool.newConnect();

    connection.query(sql, function (err, rows) {
        if (err) {
            connection.end();
            callback(err);
            throw err;
        }
        callback(null, rows);
    });
    connection.end();
};

// 插入会员
repository.prototype.insertMembers = function (conditions, callback) {
    var sql = "INSERT INTO tb_members (??) VALUES (??)";
    var params = [_.keys(conditions), _.values(conditions)];
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

// 更新会员
repository.prototype.updateMembers = function (conditions, callback) {
    var sql = "UPDATE tb_members SET (?) where id=?";
    var params = [conditions, conditions.id];
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
