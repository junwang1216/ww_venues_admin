var express = require('express');

var Home = require("./home");
var Passport = require("./passport");
var Venue = require("./venue");
var Users = require("./users");
var Goods = require("./goods");
var Settings = require("./settings");
var Data = require("./data");
var Center = require("./center");

// 路由
var router = express.Router();

router.get('/', Home.renderHomeIndex);
router.get('/win', Home.renderHomeWinIndex);

router.get('/passport/login', Passport.renderPassportLogin);
router.post('/passport/submitUserLogin', Passport.submitPassportUserLogin);

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
router.get('/users/membersRecharge', Users.renderUsersMembersRecharge);
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

// 场地预订
router.get('/venue/sequenceReserve', Venue.renderVenueSequenceReserve);
// 场地热点概率分析
router.get('/venue/sequencePDA', Venue.renderVenueSequencePDA);
// 批量预订
router.get('/venue/batchReserve', Venue.renderVenueBatchReserve);
// 场地运动类型
router.get('/venue/sportsSettings', Venue.renderVenueSportsSettings);
// 场地设置
router.get('/venue/sitesSettings', Venue.renderVenueSitesSettings);
//router.get('/win/venue/sequence', Venue.renderVenueWinSequenceReserve);

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
//router.get('/data/performanceEvaluation', Data.renderDataPerformanceEvaluation);
// 营业收入统计
router.get('/data/businessIncome', Data.renderDataBusinessIncome);
// 场地利用率统计
router.get('/data/venuePercentage', Data.renderDataVenuePercentage);
// 签到记录
router.get('/data/membersAttendance', Data.renderDataMembersAttendance);

// 系统用户设置
router.get('/settings/systemUsers', Settings.renderSettingsSystemUsers);
// 系统用户设置编辑
router.get('/settings/systemUsers/:id', Settings.renderSettingsSystemUsersView);
// 系统用户设置添加
router.get('/settings/systemUsersAdd', Settings.renderSettingsSystemUsersAdd);
// 提交系统用户设置
router.post('/settings/submitSystemUsers', Settings.submitSettingsSystemUsers);
// 系统角色设置
router.get('/settings/systemRoles', Settings.renderSettingsSystemRoles);
// 系统角色设置查看
router.get('/settings/systemRoles/:id', Settings.renderSettingsSystemRolesView);
// 系统角色设置添加
router.get('/settings/systemRolesAdd', Settings.renderSettingsSystemRolesAdd);
// 提交系统角色设置
router.post('/settings/submitSystemRoles', Settings.submitSettingsSystemRoles);
// 功能模块列表
router.get('/settings/systemFunctionModules', Settings.getSettingsSystemFunctionModules);
// 基础设置
router.get('/settings/common', Settings.renderSettingsCommon);
// 通知设置
router.get('/settings/notification', Settings.renderSettingsNotification);

// 个人中心信息修改
router.get('/center/profileComplete', Center.renderCenterProfileComplete);
// 提交信息修改
router.post('/center/submitProfileComplete', Center.submitCenterProfileComplete);
// 修改密码
router.get('/center/passwordModification', Center.renderCenterPasswordModification);
// 提交修改密码
router.post('/center/submitPasswordModification', Center.submitCenterPasswordModification);

//对外接口
exports.root = router;
