var uuid = require('uuid');

var db_members = require('../database/db_members');

function Members() {}

// 生成会员卡ID
Members.genMemberCardNo = function () {
    return uuid.v4().replace(/-/g, "").toUpperCase();
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

module.exports = Members;
