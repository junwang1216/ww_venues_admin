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
        page: Data_Controller.NavPage
    });
};

// 订单日志
Data_Controller.renderDataOrderLogs = function (req, res) {
    res.render('data/data_order_logs', {
        page: {
            Nav: Utilities.Nav,
            index: Data_Controller.NavIndex
        },
        user: {}//req.session.auth_user
    });
};

// 用户业绩统计
Data_Controller.renderDataPerformanceEvaluation = function (req, res) {
    res.render('data/data_performance_evaluation', {
        page: {
            Nav: Utilities.Nav,
            index: Data_Controller.NavIndex
        },
        user: {}//req.session.auth_user
    });
};

// 营业收入统计
Data_Controller.renderDataBusinessIncome = function (req, res) {
    res.render('data/data_business_income', {
        page: {
            Nav: Utilities.Nav,
            index: Data_Controller.NavIndex
        },
        user: {}//req.session.auth_user
    });
};

// 场地利用率统计
Data_Controller.renderDataVenuePercentage = function (req, res) {
    res.render('data/data_venue_percentage', {
        page: {
            Nav: Utilities.Nav,
            index: Data_Controller.NavIndex
        },
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
        }
    });
};

module.exports = Data_Controller;
