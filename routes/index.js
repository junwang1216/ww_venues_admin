var express = require('express');

var Home = require("./home");
var Venue = require("./venue");

// 路由
var router = express.Router();

router.get('/', Home.renderHomeIndex);

router.get('/venue/sequence', Venue.renderVenueSequenceReserve);

//对外接口
exports.root = router;
