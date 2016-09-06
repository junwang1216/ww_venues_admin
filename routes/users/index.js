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
        member: {
            card_no: Members.genMemberCardNo()
        }
    });
};

// 提交会员添加
Users_Controller.submitUsersMembersAdd = function (req, res) {
    var conditions = req.body;

    Members.addMember(conditions, function (err, result) {
        if (err) {
            return res.redirect('/users/membersAdd');
        }

        req.session.card_no = conditions.card_no;
        req.session.member_id = result.insertId;
        res.redirect('/users/membersRecharge');
    });
};

// 会员充值
Users_Controller.renderUsersMembersRecharge = function (req, res) {
    Members.getMemberById({member_id: req.session.member_id}, function (err, result) {
        if (result.length > 0) {
            result[0].card_no = req.session.card_no;

            res.render('users/users_members_recharge', {
                member: result[0]
            });
        } else {
            res.render('users/users_members_recharge', {
                member: {}
            });
        }
    });
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
