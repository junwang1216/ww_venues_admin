var uuid = require('uuid');

var db_members = require('../database/db_members');

function Members() {}

Members.prototype = {};

// 生成会员卡ID
Members.genMemberCardNo = function () {
    return uuid.v4().replace(/-/g, "").toUpperCase();
};

// 会员查询
Members.queryMembers = function (conditions, callback) {
    db_members.queryMembers(conditions, function (err, data) {
        if (err) {
            return callback(err);
        }

        return callback(null, data);
    });
};

// 添加单个会员
Members.addMember = function (conditions, callback) {
    db_members.insertMembers(conditions, function (err, data) {
        if (err) {
            return callback(err);
        }

        return callback(null, data);
    });
};

// 获取单个会员信息根据会员ID
Members.getMemberById = function (conditions, callback) {
    db_members.queryMembersById(conditions, function (err, data) {
        if (err) {
            return callback(err);
        }

        return callback(null, data);
    });
};

/*******************************************
 * * * * * * * * 会员类型设置 * * * * * * * *
 *******************************************/

// 保存会员类型设置
Members.saveMembersCardType = function (conditions, callback) {
    db_members.insertMembersCardType(conditions, function (err, data) {
        if (err) {
            return callback(err);
        }

        return callback(null, data);
    });
};

// 根据会员卡ID,分组会员卡类型
Members.queryMembersCardTypeById = function (conditions, callback) {
    db_members.queryMembersCardTypeById(conditions, function (err, data) {
        if (err) {
            return callback(err);
        }

        return callback(null, data);
    });
};

// 根据会员卡状态,分组会员卡类型
Members.queryMembersCardTypeByStatus = function (conditions, callback) {
    db_members.queryMembersCardTypeByStatus(conditions, function (err, data) {
        if (err) {
            return callback(err);
        }

        return callback(null, data);
    });
};

module.exports = Members;
