var _ = require("underscore");
var Utilities = require("../../util");

var Venue_Controller = function () {};

Venue_Controller.prototype = {};

Venue_Controller.NavIndex = Utilities.Nav.Reservations;

// 公共
Venue_Controller.NavPage = {
    Nav: Utilities.Nav,
    index: Venue_Controller.NavIndex
};

// 场地预订
Venue_Controller.renderVenueSequenceReserve = function (req, res) {
    res.render('venue/venue_sequence_reserve', {
        page: Venue_Controller.NavPage
    });
};

Venue_Controller.renderVenueWinSequenceReserve = function (req, res) {
    res.render('venue/sequence_reserve_win', {
        page: Venue_Controller.NavPage
    });
};

// 场地热点概率分析
Venue_Controller.renderVenueSequencePDA = function (req, res) {
    res.render('venue/venue_sequence_pda', {
        page: Venue_Controller.NavPage
    });
};

// 批量预订
Venue_Controller.renderVenueBatchReserve = function (req, res) {
    res.render('venue/venue_batch_reserve', {
        page: Venue_Controller.NavPage
    });
};

// 场地设置
Venue_Controller.renderVenueSitesSettings = function (req, res) {
    res.render('venue/venue_sites_settings', {
        page: Venue_Controller.NavPage,
        sites: [{
            site_id: 1,
            site_name: "场地一",
            site_type: "羽毛球",
            site_remark: "1号场",
            site_status: "1",
            sale_id: "李晓彤",
            update_time: "2016-08-30"
        }, {
            site_id: 2,
            site_name: "场地二",
            site_type: "羽毛球",
            site_remark: "2号场",
            site_status: "2",
            sale_id: "李晓彤",
            update_time: "2016-08-30"
        }, {
            site_id: 3,
            site_name: "场地一",
            site_type: "篮球",
            site_remark: "1号场",
            site_status: "1",
            sale_id: "李晓彤",
            update_time: "2016-08-30"
        }, {
            site_id: 4,
            site_name: "场地二",
            site_type: "篮球",
            site_remark: "2号场",
            site_status: "2",
            sale_id: "李晓彤",
            update_time: "2016-08-30"
        }, {
            site_id: 5,
            site_name: "场地三",
            site_type: "羽毛球",
            site_remark: "4号场",
            site_status: "1",
            sale_id: "李晓彤",
            update_time: "2016-08-30"
        }, {
            site_id: 6,
            site_name: "场地四",
            site_type: "羽毛球",
            site_remark: "4号场",
            site_status: "2",
            sale_id: "李晓彤",
            update_time: "2016-08-30"
        }]
    });
};

// 场地运动类型
Venue_Controller.renderVenueSportsSettings = function (req, res) {
    res.render('venue/venue_sports_settings', {
        page: Venue_Controller.NavPage,
        sports: [{
            sport_id: 1,
            sport_name: "羽毛球",
            sport_money: "40",
            sport_deposit: "10",
            start_time: "06:00",
            end_time: "20:00",
            sport_status: "1",
            sale_id: "李晓彤",
            update_time: "2016-08-30"
        }, {
            sport_id: 2,
            sport_name: "游泳",
            sport_money: "40",
            sport_deposit: "10",
            start_time: "06:00",
            end_time: "20:00",
            sport_status: "1",
            sale_id: "李晓彤",
            update_time: "2016-08-30"
        }, {
            sport_id: 3,
            sport_name: "网球",
            sport_money: "40",
            sport_deposit: "10",
            start_time: "06:00",
            end_time: "20:00",
            sport_status: "1",
            sale_id: "李晓彤",
            update_time: "2016-08-30"
        }, {
            sport_id: 4,
            sport_name: "篮球",
            sport_money: "40",
            sport_deposit: "10",
            start_time: "06:00",
            end_time: "20:00",
            sport_status: "1",
            sale_id: "李晓彤",
            update_time: "2016-08-30"
        }, {
            sport_id: 5,
            sport_name: "保龄球",
            sport_money: "40",
            sport_deposit: "10",
            start_time: "06:00",
            end_time: "20:00",
            sport_status: "2",
            sale_id: "李晓彤",
            update_time: "2016-08-30"
        }]
    });
};

module.exports = Venue_Controller;
