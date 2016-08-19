var Users_Controller = function () {};

Users_Controller.prototype = {};

Users_Controller.renderUsersMembers = function (req, res) {
    res.render('users/users_members');
};

Users_Controller.renderUsersMembersAdd = function (req, res) {
    res.render('users/users_members_add');
};

Users_Controller.submitUsersMembersAdd = function (req, res) {
    // 发送密码成功!
    res.json({
        status: 200,
        message: "成功"
    });
};

Users_Controller.renderUsersAskForLeave = function (req, res) {
    res.render('users/ask_for_leave');
};

// 会员类型设置
Users_Controller.renderUsersMembersCategory = function (req, res) {
    res.render('users/members_category');
};

module.exports = Users_Controller;
