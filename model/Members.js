var db_members = require('../database/db_members');

function Members() {}

// 添加单个会员
Members.addMember = function (conditions, callback) {
    db_members.insertMembers(conditions, function (err, data) {
        if (err) {
            return callback(err);
        }

        return callback(null, data);
    });
};

module.exports = Members;
