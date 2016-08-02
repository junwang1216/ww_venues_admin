var express = require('express');

var Passport = require("./passport");
var Dashboard = require("./dashboard");
var Reservations = require("./reservations");

// 路由
var router = express.Router();

// 通行证
router.get('/passport/Login', Passport.renderPassportLogin);
router.get('/passport/ForgetPassword', Passport.renderPassportForgetPassword);

// 综合面板
router.get(['/', '/index' ,'/dashboard'], Dashboard.renderDashboardIndex);

// 场地预订
router.get('/reservations/TimingSeries', Reservations.renderReservationsTimingSeries);
// 场地预订
router.get('/reservations/HeatSeries', Reservations.renderReservationsHeatSeries);

//对外接口
exports.root = router;
