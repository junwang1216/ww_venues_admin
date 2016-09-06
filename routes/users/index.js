var Members = require('../../model/Members');

var Users_Controller = function () {};

Users_Controller.prototype = {};

// 会员查询
Users_Controller.renderUsersMembers = function (req, res) {
    res.render('users/users_members');
};

// 会员详情
Users_Controller.renderUsersMembersView = function (req, res) {
    res.render('users/users_members_view');
};

// 会员订单明细(充值)
Users_Controller.renderUsersMembersOrders = function (req, res) {
    res.render('users/users_members_orders');
};

// 会员消费明细
Users_Controller.renderUsersMembersConsume = function (req, res) {
    res.render('users/users_members_consume');
};

// 会员发票登记
Users_Controller.renderUsersMembersTicket = function (req, res) {
    res.render('users/users_members_ticket');
};

// 会员添加
Users_Controller.renderUsersMembersAdd = function (req, res) {
    res.render('users/users_members_add', {
        card: {
            id: Math.floor(Math.random() * 10000000)
        }
    });
};

// 提交会员添加
Users_Controller.submitUsersMembersAdd = function (req, res) {
    var conditions = req.body;
    console.log(conditions);

    Members.addMember(conditions, function (err, result) {
        res.redirect('/users/membersRecharge');
    });
};

// 会员充值
Users_Controller.renderUsersMembersRecharge = function (req, res) {
    res.render('users/users_members_recharge');
};

// 提交会员充值
Users_Controller.submitUsersMembersRecharge = function (req, res) {
    ;
};

// 提交发票打印
Users_Controller.submitUsersTicketsPrint = function (req, res) {
    ;
};

// 会员类型设置
Users_Controller.renderUsersMembersCategory = function (req, res) {
    res.render('users/members_category');
};

module.exports = Users_Controller;
