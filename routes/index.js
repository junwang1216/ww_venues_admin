var express = require('express');

var Home = require("./home");
var Passport = require("./passport");
var Venue = require("./venue");
var Users = require("./users");
var Goods = require("./goods");
var Settings = require("./settings");
var Data = require("./data");

// 路由
var router = express.Router();

router.get('/', Home.renderHomeIndex);
router.get('/win', Home.renderHomeWinIndex);

router.get('/pp/login', Passport.renderPassportLogin);
router.post('/pp/userLogin', Passport.submitPassportUserLogin);

// 会员查询
router.get('/users/membersQuery', Users.renderUsersMembers);
// 会员详情
router.get('/users/membersView/:id', Users.renderUsersMembersView);
// 会员订单明细
router.get('/users/membersOrders', Users.renderUsersMembersOrders);
// 会员消费明细
router.get('/users/membersConsume', Users.renderUsersMembersConsume);
// 会员发票登记
router.get('/users/membersTicket', Users.renderUsersMembersTicket);
// 会员添加
router.get('/users/membersAdd', Users.renderUsersMembersAdd);
// 会员添加提交
router.post('/users/submitMembersAdd', Users.submitUsersMembersAdd);
// 会员充值
router.get('/users/membersRecharge', Passport.authLogin, Users.renderUsersMembersRecharge);
// 提交会员充值
router.post('/users/submitMembersRecharge', Users.submitUsersMembersRecharge);
// 提交发票打印
router.post('/users/submitTicketsPrint', Users.submitUsersTicketsPrint);
// 会员类型设置
router.get('/users/membersCategory'/*, Passport.authLogin*/, Users.renderUsersMembersCategory);
// 会员类型详情
router.post('/users/membersCategory/:id', Users.renderUsersMembersCategoryDetail);
// 会员类型设置提交
router.post('/users/submitMembersCategory', Users.submitUsersMembersCategory);

router.get('/venue/sequence', Venue.renderVenueSequenceReserve);
router.get('/venue/sequencePDA', Venue.renderVenueSequencePDA);
router.get('/venue/batch', Venue.renderVenueReserveBatch);
router.get('/venue/sports', Venue.renderVenueSportsSettings);
router.get('/venue/sites', Venue.renderVenueSitesSettings);
router.get('/win/venue/sequence', Venue.renderVenueWinSequenceReserve);

// 商品设置
router.get('/goods/settings', Goods.renderGoodsSettings);
// 商品设置提交
router.post('/goods/submitGoodsSettings', Goods.submitGoodsSettings);
// 进销存管理
router.get('/goods/stockManagement', Goods.renderGoodsStockManagement);
// 进销存详情
router.get('/goods/stockView/:id', Goods.renderGoodsStockView);
// 商品销售
router.get('/goods/market', Goods.renderGoodsMarket);
// 商品购物车
router.get('/goods/carts', Goods.renderGoodsCarts);

// 会员注册统计
router.get('/data/membersRegister', Data.renderDataMembersRegister);
// 订单日志
router.get('/data/orderLogs', Data.renderDataOrderLogs);
// 用户业绩统计
router.get('/data/performanceEvaluation', Data.renderDataPerformanceEvaluation);
// 营业收入统计
router.get('/data/businessIncome', Data.renderDataBusinessIncome);
// 场地利用率统计
router.get('/data/venuePercentage', Data.renderDataVenuePercentage);
// 签到记录
router.get('/data/membersAttendance', Data.renderDataMembersAttendance);

// 基础设置
router.get('/settings/common', Settings.renderSettingsCommon);
//对外接口
exports.root = router;
