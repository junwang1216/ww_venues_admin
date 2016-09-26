var _ = require("underscore");
var Utilities = require("../../util");

var Data_Controller = function () {};

Data_Controller.prototype = {};

Data_Controller.NavIndex = Utilities.Nav.Data;

// 公共
Data_Controller.NavPage = {
    Nav: Utilities.Nav,
    index: Data_Controller.NavIndex
};

// 会员注册统计
Data_Controller.renderDataMembersRegister = function (req, res) {
    res.render('data/data_members_register', {
        page: Data_Controller.NavPage,
        data: [{
            card_type_name: "金卡会员",
            card_type_money: "1000.00",
            card_type_num: "10",
            card_type_total: "10000.00"
        }, {
            card_type_name: "银卡会员",
            card_type_money: "100.00",
            card_type_num: "100",
            card_type_total: "10000.00"
        }, {
            card_type_name: "普卡会员",
            card_type_money: "10.00",
            card_type_num: "1032",
            card_type_total: "10320.00"
        }, {
            card_type_name: "临时会员",
            card_type_money: "0.00",
            card_type_num: "136330",
            card_type_total: "0.00"
        }, {
            card_type_name: "场地预订",
            card_type_money: "0.00",
            card_type_num: "0",
            card_type_total: "0.00"
        }, {
            card_type_name: "商品消费",
            card_type_money: "0.00",
            card_type_num: "0",
            card_type_total: "0.00"
        }],
        total: {
            card_type_num_total: "1232",
            card_type_total_total: "12300.00"
        }
    });
};

// 订单日志
Data_Controller.renderDataOrderLogs = function (req, res) {
    res.render('data/data_order_logs', {
        page: Data_Controller.NavPage,
        user: {}//req.session.auth_user
    });
};

// 用户业绩统计
Data_Controller.renderDataPerformanceEvaluation = function (req, res) {
    res.render('data/data_performance_evaluation', {
        page: Data_Controller.NavPage,
        user: {}//req.session.auth_user
    });
};

// 营业收入统计
Data_Controller.renderDataBusinessIncome = function (req, res) {
    res.render('data/data_business_income', {
        page: Data_Controller.NavPage,
        user: {}//req.session.auth_user
    });
};

// 场地利用率统计
Data_Controller.renderDataVenuePercentage = function (req, res) {
    res.render('data/data_venue_percentage', {
        page: Data_Controller.NavPage,
        user: {}//req.session.auth_user
    });
};

// 会员签到记录
Data_Controller.renderDataMembersAttendance = function (req, res) {
    res.render('data/data_members_attendance', {
        page: Data_Controller.NavPage,
        pagination: {
            index: 1,
            pageSize: 10,
            total: 143
        },
        data: [{
            member_id: 1,
            member_name: "李洪旭",
            card_type: "金卡会员",
            entrance: "A口",
            entrance_time: "09:00:23",
            card_id: "FD00000001",
            order_no: "DGH3244353DE23I23"
        }, {
            member_id: 2,
            member_name: "不补货",
            card_type: "银卡会员",
            entrance: "B口",
            entrance_time: "09:00:23",
            card_id: "FD00000001",
            order_no: "DGH3244353DE23I23"
        }, {
            member_id: 3,
            member_name: "李洪旭",
            card_type: "金卡会员",
            entrance: "A口",
            entrance_time: "09:00:23",
            card_id: "FD00000001",
            order_no: "DGH3244353DE23I23"
        }, {
            member_id: 4,
            member_name: "不补货",
            card_type: "银卡会员",
            entrance: "B口",
            entrance_time: "09:00:23",
            card_id: "FD00000001",
            order_no: "DGH3244353DE23I23"
        }, {
            member_id: 5,
            member_name: "李洪旭",
            card_type: "金卡会员",
            entrance: "A口",
            entrance_time: "09:00:23",
            card_id: "FD00000001",
            order_no: "DGH3244353DE23I23"
        }, {
            member_id: 6,
            member_name: "么么",
            card_type: "银卡会员",
            entrance: "C口",
            entrance_time: "09:00:23",
            card_id: "FD00000012",
            order_no: "DGH3244353DE54321"
        }, {
            member_id: 7,
            member_name: "李洪旭",
            card_type: "金卡会员",
            entrance: "A口",
            entrance_time: "09:00:23",
            card_id: "FD00000001",
            order_no: "DGH3244353DE23I23"
        }, {
            member_id: 8,
            member_name: "不补货",
            card_type: "银卡会员",
            entrance: "B口",
            entrance_time: "09:00:23",
            card_id: "FD00000001",
            order_no: "DGH3244353DE23I23"
        }, {
            member_id: 9,
            member_name: "润体乳",
            card_type: "金卡会员",
            entrance: "A口",
            entrance_time: "09:00:23",
            card_id: "FD00000100",
            order_no: "DGH3244353DE23I23"
        }, {
            member_id: 10,
            member_name: "不补货",
            card_type: "银卡会员",
            entrance: "B口",
            entrance_time: "09:00:23",
            card_id: "FD00000001",
            order_no: "DGH3244353DE23I23"
        }]
    });
};

module.exports = Data_Controller;
