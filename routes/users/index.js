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
    //var conditions = req.query;

    res.render('users/users_members', {
        page: Users_Controller.NavPage,
        members: [{
            member_id: 1,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD00000001",
            member_status: 1
        }, {
            member_id: 2,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD00000002",
            member_status: 1
        }, {
            member_id: 3,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD00000003",
            member_status: 1
        }, {
            member_id: 4,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD00000004",
            member_status: 1
        }, {
            member_id: 5,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD00000005",
            member_status: 2
        }, {
            member_id: 6,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD00000006",
            member_status: 1
        }, {
            member_id: 7,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD00000007",
            member_status: 1
        }, {
            member_id: 8,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD00000008",
            member_status: 2
        }, {
            member_id: 9,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD00000009",
            member_status: 1
        }, {
            member_id: 10,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD000000010",
            member_status: 1
        }],
        pagination: {
            index: 1,
            pageSize: 10,
            total: 143
        }
    });

    /*Members.queryMembers(conditions, function (err, result) {
        if (err) {
            //return res.redirect('/users/membersAdd');
        }

        res.render('users/users_members', {
            members: result,
            page: Users_Controller.NavPage
        });
    });*/
};

// 会员详情
Users_Controller.renderUsersMembersView = function (req, res) {
    res.render('users/users_members_view', {
        page: Users_Controller.NavPage,
        member: {
            member_id: 9,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD00000009",
            member_status: 1
        }
    });
};

// 会员订单明细(充值)
Users_Controller.renderUsersMembersOrders = function (req, res) {
    res.render('users/users_members_orders', {
        page: Users_Controller.NavPage,
        pagination: {
            index: 1,
            pageSize: 10,
            total: 143
        }
    });
};

// 会员消费明细
Users_Controller.renderUsersMembersConsume = function (req, res) {
    res.render('users/users_members_consume', {
        page: Users_Controller.NavPage,
        pagination: {
            index: 1,
            pageSize: 10,
            total: 143
        }
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

    res.json({
        status: 200
    });

    /*Members.addMember(conditions, function (err, result) {
        if (err) {
            return res.redirect('/users/membersAdd');
        }

        req.session.card_no = conditions.card_no;
        req.session.member_id = result.insertId;
        res.redirect('/users/membersRecharge');
    });*/
};

// 会员充值
Users_Controller.renderUsersMembersRecharge = function (req, res) {
    res.render('users/users_members_recharge', {
        page: Users_Controller.NavPage,
        member: {}
    });

    /*Members.getMemberById({member_id: req.session.member_id}, function (err, result) {
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
    });*/
};

// 提交会员充值
Users_Controller.submitUsersMembersRecharge = function (req, res) {
    res.json({
        status: 200
    });
};

// 会员操作
Users_Controller.renderUsersMembersOperations = function (req, res) {
    res.render('users/users_members_operations', {
        page: Users_Controller.NavPage
    });
};

// 提交会员补办
Users_Controller.submitUsersMembersRefreshCard = function (req, res) {
    res.json({
        status: 200
    });
};

// 提交会员升级
Users_Controller.submitUsersMembersUpgradeCard = function (req, res) {
    res.json({
        status: 200
    });
};

// 会员应收款管理
Users_Controller.renderUsersMembersLoans = function (req, res) {
    res.render('users/users_members_loans', {
        page: Users_Controller.NavPage
    });
};

// 提交小票打印
Users_Controller.submitUsersTicketsPrint = function (req, res) {
    // 打印小票和登记发票
    res.json({
        status: 200
    });
};

// 会员发票登记
Users_Controller.renderUsersMembersTicket = function (req, res) {
    var conditions = req.query;

    res.render('users/users_members_ticket', {
        page: Users_Controller.NavPage,
        conditions: conditions,
        tickets: [{
            id: 1,
            invoice_header: "北京和创投资股份有限公司",
            invoice_content: "场地使用费",
            invoice_money: "4000.00",
            invoice_remark: "用支票支付4000.00元",
            invoice_state: "1",
            create_time: "2016-08-21",
            print_time: "2016-08-21",
            sale_id: "李晓彤"
        }, {
            id: 2,
            invoice_header: "北京新云技术股份有限公司",
            invoice_content: "场地使用费",
            invoice_money: "8000.00",
            invoice_remark: "",
            invoice_state: "2",
            create_time: "2016-08-21",
            print_time: "",
            sale_id: "李晓彤"
        }, {
            id: 3,
            invoice_header: "北京和创投资股份有限公司",
            invoice_content: "场地使用费",
            invoice_money: "4000.00",
            invoice_remark: "用支票支付4000.00元",
            invoice_state: "1",
            create_time: "2016-08-21",
            print_time: "2016-08-21",
            sale_id: "李晓彤"
        }, {
            id: 4,
            invoice_header: "北京新云技术股份有限公司",
            invoice_content: "场地使用费",
            invoice_money: "8000.00",
            invoice_remark: "",
            invoice_state: "2",
            create_time: "2016-08-21",
            print_time: "",
            sale_id: "李晓彤"
        }, {
            id: 5,
            invoice_header: "北京新云技术股份有限公司",
            invoice_content: "场地使用费",
            invoice_money: "8000.00",
            invoice_remark: "",
            invoice_state: "2",
            create_time: "2016-08-21",
            print_time: "",
            sale_id: "李晓彤"
        }, {
            id: 1,
            invoice_header: "北京和创投资股份有限公司",
            invoice_content: "场地使用费",
            invoice_money: "4000.00",
            invoice_remark: "用支票支付4000.00元",
            invoice_state: "1",
            create_time: "2016-08-21",
            print_time: "2016-08-21",
            sale_id: "李晓彤"
        }, {
            id: 2,
            invoice_header: "北京新云技术股份有限公司",
            invoice_content: "场地使用费",
            invoice_money: "8000.00",
            invoice_remark: "",
            invoice_state: "2",
            create_time: "2016-08-21",
            print_time: "",
            sale_id: "李晓彤"
        }, {
            id: 3,
            invoice_header: "北京和创投资股份有限公司",
            invoice_content: "场地使用费",
            invoice_money: "4000.00",
            invoice_remark: "用支票支付4000.00元",
            invoice_state: "1",
            create_time: "2016-08-21",
            print_time: "2016-08-21",
            sale_id: "李晓彤"
        }, {
            id: 4,
            invoice_header: "北京新云技术股份有限公司",
            invoice_content: "场地使用费",
            invoice_money: "8000.00",
            invoice_remark: "",
            invoice_state: "2",
            create_time: "2016-08-21",
            print_time: "",
            sale_id: "李晓彤"
        }, {
            id: 5,
            invoice_header: "北京新云技术股份有限公司",
            invoice_content: "场地使用费",
            invoice_money: "8000.00",
            invoice_remark: "",
            invoice_state: "2",
            create_time: "2016-08-21",
            print_time: "",
            sale_id: "李晓彤"
        }],
        pagination: {
            index: 1,
            pageSize: 10,
            total: 143
        }
    });
};

// 会员发票领取
Users_Controller.getUsersMembersTicket = function (req, res) {
    res.json({
        status: 200,
        message: "保存成功"
    });
};

// 会员类型设置
Users_Controller.renderUsersMembersCategory = function (req, res) {
    var conditions = req.query;

    res.render('users/users_members_category', {
        page: Users_Controller.NavPage,
        conditions: conditions,
        card_types: [{
            id: 1,
            card_type_name: "金卡",
            card_payment_type: "1",
            card_type_month: "12个月",
            card_type_week: "周一,周二,周三,周四,周五,周六,周日",
            card_type_time_start: "08:00",
            card_type_time_end: "20:00",
            card_type_discount: "7.0折",
            card_type_overdraw: "0",
            card_type_money: "10000",
            card_type_status: "1",
            sale_id: "李晓彤",
            update_time: "2016-08-21"
        }, {
            id: 2,
            card_type_name: "银卡",
            card_payment_type: "1",
            card_type_month: "12个月",
            card_type_week: "周一,周二,周三,周四,周五,周六,周日",
            card_type_time_start: "08:00",
            card_type_time_end: "20:00",
            card_type_discount: "8.0折",
            card_type_overdraw: "0",
            card_type_money: "5000",
            card_type_status: "1",
            sale_id: "李晓彤",
            update_time: "2016-08-30"
        }, {
            id: 3,
            card_type_name: "普卡",
            card_payment_type: "1",
            card_type_month: "12个月",
            card_type_week: "周一,周二,周三,周四,周五,周六,周日",
            card_type_time_start: "08:00",
            card_type_time_end: "20:00",
            card_type_discount: "9.0折",
            card_type_overdraw: "0",
            card_type_money: "1000",
            card_type_status: "1",
            sale_id: "李晓彤",
            update_time: "2016-08-12"
        }, {
            id: 4,
            card_type_name: "临时卡",
            card_payment_type: "1",
            card_type_month: "12个月",
            card_type_week: "周一,周二,周三,周四,周五,周六,周日",
            card_type_time_start: "08:00",
            card_type_time_end: "20:00",
            card_type_discount: "不打折",
            card_type_overdraw: "0",
            card_type_money: "0",
            card_type_status: "1",
            sale_id: "李晓彤",
            update_time: "2016-08-12"
        }, {
            id: 5,
            card_type_name: "金卡",
            card_payment_type: "2",
            card_type_month: "12个月",
            card_type_week: "周一,周二,周三,周四,周五,周六,周日",
            card_type_time_start: "08:00",
            card_type_time_end: "20:00",
            card_type_discount: "9.0折",
            card_type_overdraw: "1000",
            card_type_money: "2000",
            card_type_status: "1",
            sale_id: "李晓彤",
            update_time: "2016-08-12"
        }, {
            id: 6,
            card_type_name: "银卡",
            card_payment_type: "2",
            card_type_month: "12个月",
            card_type_week: "周一,周二,周三,周四,周五,周六,周日",
            card_type_time_start: "08:00",
            card_type_time_end: "20:00",
            card_type_discount: "9.5折",
            card_type_overdraw: "500",
            card_type_money: "1000",
            card_type_status: "1",
            sale_id: "李晓彤",
            update_time: "2016-08-12"
        }, {
            id: 7,
            card_type_name: "普卡",
            card_payment_type: "2",
            card_type_month: "12个月",
            card_type_week: "周一,周二,周三,周四,周五,周六,周日",
            card_type_time_start: "08:00",
            card_type_time_end: "20:00",
            card_type_discount: "9.5折",
            card_type_overdraw: "500",
            card_type_money: "1000",
            card_type_status: "2",
            sale_id: "李晓彤",
            update_time: "2016-08-12"
        }]
    });

    /*Members.queryMembersCardTypeByStatus(conditions, function (err, result) {
        res.render('users/members_category', {
            page: Users_Controller.NavPage,
            card_types: result
        });
    });*/
};

// 会员类型详情
Users_Controller.renderUsersMembersCategoryDetail = function (req, res) {
    //var conditions = {id: req.params.id};

    res.json({
        status: 200,
        data: {
            id: 1,
            card_type_name: "金卡",
            card_payment_type: "1",
            card_type_month: "12",
            /*card_type_week: "周一,周二,周三,周四,周五,周六,周日",
            card_type_time_start: "08:00",
            card_type_time_end: "20:00",*/
            card_type_discount: "7.0折",
            card_type_overdraw: "500",
            card_type_money: "10000",
            card_type_status: "1",
            sale_id: "李晓彤",
            update_time: "2016-08-21"
        }
    });

    /*Members.queryMembersCardTypeById(conditions, function (err, result) {
        res.json({
            status: 200,
            data: result[0]
        });
    });*/
};

// 会员类型设置
Users_Controller.submitUsersMembersCategory = function (req, res) {
    //var conditions = req.body;
    //var user = {};//req.session.auth_user;

    res.json({
        status: 200,
        message: "保存成功"
    });

    /*conditions.card_type_week = conditions.card_type_week.join(",");
    conditions.sale_id = user.id;
    
    Members.saveMembersCardType(conditions, function (err, result) {
        res.json({status: 200, message: "保存成功"});
    });*/
};

module.exports = Users_Controller;
