var express = require('express');

var Home = require("./home");
var Passport = require("./passport");
var Venue = require("./venue");
var Users = require("./users");

// 路由
var router = express.Router();

router.get('/', Passport.authLogin, Home.renderHomeIndex);
router.get('/win', Home.renderHomeWinIndex);

router.get('/pp/login', Passport.renderPassportLogin);
router.post('/pp/userLogin', Passport.submitPassportUserLogin);

// 会员查询
router.get('/users/membersQuery', Passport.authLogin, Users.renderUsersMembers);
// 会员详情
router.get('/users/membersView/:id', Passport.authLogin, Users.renderUsersMembersView);
// 会员订单明细
router.get('/users/membersOrders', Passport.authLogin, Users.renderUsersMembersOrders);
// 会员消费明细
router.get('/users/membersConsume', Passport.authLogin, Users.renderUsersMembersConsume);
// 会员发票登记
router.get('/users/membersTicket', Passport.authLogin, Users.renderUsersMembersTicket);
// 会员添加
router.get('/users/membersAdd', Passport.authLogin, Users.renderUsersMembersAdd);
// 会员添加提交
router.post('/users/submitMembersAdd', Users.submitUsersMembersAdd);
// 会员充值
router.get('/users/membersRecharge', Passport.authLogin, Users.renderUsersMembersRecharge);
// 提交会员充值
router.post('/users/submitMembersRecharge', Users.submitUsersMembersRecharge);
// 提交发票打印
router.post('/users/submitTicketsPrint', Users.submitUsersTicketsPrint);
// 会员类型设置
router.get('/users/membersCategory', Passport.authLogin, Users.renderUsersMembersCategory);

router.get('/venue/sequence', Venue.renderVenueSequenceReserve);
router.get('/venue/sequencePDA', Venue.renderVenueSequencePDA);
router.get('/venue/batch', Venue.renderVenueReserveBatch);
router.get('/venue/sports', Venue.renderVenueSportsSettings);
router.get('/venue/sites', Venue.renderVenueSitesSettings);
router.get('/win/venue/sequence', Venue.renderVenueWinSequenceReserve);
//对外接口
exports.root = router;
