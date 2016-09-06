var _ = require("underscore");

var MyQLConnection = require("./base/mysql_connection");
var simplePool = MyQLConnection.getConnection;

var repository = function () {};

var _MemberTable = {
    "member_name": true,
    "member_mobile": true,
    "member_mobile2": true,
    "member_sex": true,
    "member_idcard": true,
    "member_birthday": true,
    "member_pay_password": true,
    "member_status": true,
    "member_address": true,
    "member_remark": true,
    "card_id": true
};

function _formatMemberTable(conditions) {
    var fields = [];
    var values = [];

    for (var field in conditions) {
        if (_MemberTable[field] && conditions[field]) {
            fields.push(field);
            values.push(conditions[field]);
        }
    }

    return [fields, values];
}

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

// 获取单个会员信息根据会员ID
repository.prototype.queryMembersById = function (conditions, callback) {
    var sql = "SELECT * FROM tb_members WHERE id=?";
    var params = [conditions.member_id];
    var connection = simplePool.newConnect();

    connection.query(sql, params, function (err, rows) {
        if (err) {
            connection.end();
            return callback(err);
        }
        callback(null, rows);
    });
    connection.end();
};

// 插入会员
// ??代表字段 ?代表值
repository.prototype.insertMembers = function (conditions, callback) {
    var sql = "INSERT INTO tb_members (??) VALUES (?)";
    var params = _formatMemberTable(conditions);
    var connection = simplePool.newConnect();

    connection.query(sql, params, function (err, rows) {
        if (err) {
            connection.end();
            return callback(err);
        }

        callback(null, {
            insertId: rows.insertId
        });
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
