var express = require('express');

var Home = require("./home");
var Passport = require("./passport");
var Venue = require("./venue");

// 路由
var router = express.Router();

router.get('/', Home.renderHomeIndex);
router.get('/win', Home.renderHomeWinIndex);

router.get('/pp/login', Passport.renderPassportLogin);
router.post('/pp/UserLogin', Passport.submitPassportUserLogin);

router.get('/venue/sequence', Venue.renderVenueSequenceReserve);
router.get('/venue/sequencePDA', Venue.renderVenueSequencePDA);
router.get('/venue/sports', Venue.renderVenueSportsSettings);
router.get('/venue/sites', Venue.renderVenueSitesSettings);
router.get('/win/venue/sequence', Venue.renderVenueWinSequenceReserve);
//对外接口
exports.root = router;
