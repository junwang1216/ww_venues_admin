var _ = require("underscore");
var Utilities = require("../../util");

var Members = require('../../model/Members');

var Users_Controller = function () {};

Users_Controller.prototype = {};

Users_Controller.NavIndex = Utilities.Nav.Users;

// 公共
Users_Controller.NavPage = {
    Nav: Utilities.Nav,
    index: Users_Controller.NavIndex
};

// 会员查询
Users_Controller.renderUsersMembers = function (req, res) {
    var conditions = req.query;

    Members.queryMembers(conditions, function (err, result) {
        if (err) {
            //return res.redirect('/users/membersAdd');
        }

        res.render('users/users_members', {
            members: result,
            page: Users_Controller.NavPage
        });
    });
};

// 会员详情
Users_Controller.renderUsersMembersView = function (req, res) {
    res.render('users/users_members_view', {
        page: Users_Controller.NavPage
    });
};

// 会员订单明细(充值)
Users_Controller.renderUsersMembersOrders = function (req, res) {
    res.render('users/users_members_orders', {
        page: Users_Controller.NavPage
    });
};

// 会员消费明细
Users_Controller.renderUsersMembersConsume = function (req, res) {
    res.render('users/users_members_consume', {
        page: Users_Controller.NavPage
    });
};

// 会员发票登记
Users_Controller.renderUsersMembersTicket = function (req, res) {
    res.render('users/users_members_ticket', {
        page: Users_Controller.NavPage
    });
};

// 会员添加
Users_Controller.renderUsersMembersAdd = function (req, res) {
    res.render('users/users_members_add', {
        member: {
            card_no: Members.genMemberCardNo()
        },
        page: Users_Controller.NavPage
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
                page: Users_Controller.NavPage,
                member: result[0]
            });
        } else {
            res.render('users/users_members_recharge', {
                page: Users_Controller.NavPage,
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
    var conditions = req.query;

    Members.queryMembersCardTypeByStatus(conditions, function (err, result) {
        res.render('users/members_category', {
            page: Users_Controller.NavPage,
            card_types: result
        });
    });
};

// 会员类型详情
Users_Controller.renderUsersMembersCategoryDetail = function (req, res) {
    var conditions = {id:req.params.id};

    Members.queryMembersCardTypeById(conditions, function (err, result) {
        res.json({
            status: 200,
            data: result[0]
        });
    });
};

// 会员类型设置
Users_Controller.submitUsersMembersCategory = function (req, res) {
    var conditions = req.body;
    var user = req.session.auth_user;

    conditions.card_type_week = conditions.card_type_week.join(",");
    conditions.sale_id = user.id;
    
    Members.saveMembersCardType(conditions, function (err, result) {
        res.json({status: 200, message: "保存成功"});
    });
};

module.exports = Users_Controller;
