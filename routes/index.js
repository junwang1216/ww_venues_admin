var express = require('express');

var Home = require("./home");
var Passport = require("./passport");
var Venue = require("./venue");
var Users = require("./users");

// 路由
var router = express.Router();

router.get('/', Home.renderHomeIndex);
router.get('/win', Home.renderHomeWinIndex);

router.get('/pp/login', Passport.renderPassportLogin);
router.post('/pp/UserLogin', Passport.submitPassportUserLogin);

// 会员列表
router.get('/users/members', Users.renderUsersMembers);
// 会员添加
router.get('/users/membersAdd', Users.renderUsersMembersAdd);
// 会员添加提交
router.post('/users/membersAdd', Users.submitUsersMembersAdd);
// 会员请假
router.get('/users/askForLeave', Users.renderUsersAskForLeave);
// 会员类型设置
router.get('/users/membersCategory', Users.renderUsersMembersCategory);

router.get('/venue/sequence', Venue.renderVenueSequenceReserve);
router.get('/venue/sequencePDA', Venue.renderVenueSequencePDA);
router.get('/venue/batch', Venue.renderVenueReserveBatch);
router.get('/venue/sports', Venue.renderVenueSportsSettings);
router.get('/venue/sites', Venue.renderVenueSitesSettings);
router.get('/win/venue/sequence', Venue.renderVenueWinSequenceReserve);
//对外接口
exports.root = router;
