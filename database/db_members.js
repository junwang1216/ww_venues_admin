var _ = require("underscore");
var formatDate = require('date-format');

var MyQLConnection = require("./base/mysql_connection");
var simplePool = MyQLConnection.getConnection;

var repository = function () {};

// 会员表字段
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
    "create_time": true,
    "update_time": true,
    "card_id": true,
    "sales_id": true
};

// 会员卡表
var _MemberCardTable = {
    "card_no": true,
    "card_balance": true,
    "card_deadline": true,
    "card_status": true,
    "card_type_id": true
};

// 会员卡表
var _MemberCardTypeTable = {
    "card_type_name": true,
    "card_type_status": true,
    "card_type_month": true,
    "card_type_week": true,
    "card_type_time_start": true,
    "card_type_time_end": true,
    "card_type_money": true,
    "card_type_discount": true,
    "sale_id": true,
    "create_time": true,
    "update_time": true
};

function _formatMemberTable(conditions, table) {
    var fields = [];
    var values = [];

    for (var field in conditions) {
        if (table[field] && conditions[field]) {
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
    var params = _formatMemberTable(conditions, _MemberTable);
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
    var sql = "UPDATE tb_members SET () where id=?";
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

/*******************************************
 * * * * * * * * 会员类型设置 * * * * * * * *
 *******************************************/

/**
 * 插入会员卡类型
 * @param conditions 会员类型字段(参照变量_MemberCardTypeTable)
 * @param callback 回调函数(错误, 返回结果)
 */
repository.prototype.insertMembersCardType = function (conditions, callback) {
    conditions.create_time = formatDate('yyyy-MM-dd hh:mm:ss', (new Date()));
    conditions.update_time = formatDate('yyyy-MM-dd hh:mm:ss', (new Date()));

    // ??代表字段 ?代表值
    var sql = "INSERT INTO tb_members_type (??) VALUES (?)";
    var params = _formatMemberTable(conditions, _MemberCardTypeTable);
    var connection = simplePool.newConnect();

    connection.query(sql, params, function (err, rows) {
        if (err) {
            connection.end();
            console.log(err);
            return callback(err);
        }

        callback(null, {
            insertId: rows.insertId
        });
    });
    connection.end();
};

/**
 * 根据会员卡类型ID,查询会员卡类型的编辑信息
 * @param conditions 查询条件(id)
 * @param callback 回调函数(错误, 返回结果)
 */
repository.prototype.queryMembersCardTypeById = function (conditions, callback) {
    // ??代表字段 ?代表值
    var sql = "SELECT * from tb_members_type WHERE id=?";
    var params = [conditions.id];
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

/**
 * 根据会员卡类型状态, 筛选会员卡类型的列表
 * @param conditions 查询条件(card_type_status)
 * @param callback 回调函数(错误, 返回结果)
 */
repository.prototype.queryMembersCardTypeByStatus = function (conditions, callback) {
    var sql;

    if (conditions.card_type_status) {
        sql = "SELECT * from tb_members_type WHERE card_type_status=?";
    } else {
        sql = "SELECT * from tb_members_type WHERE 1=1";
    }
    var params = [conditions.card_type_status];
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

module.exports = new repository();
