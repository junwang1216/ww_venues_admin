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

// 场地运动类型
Venue_Controller.renderVenueSportsSettings = function (req, res) {
    res.render('venue/venue_sports_settings', {
        page: Venue_Controller.NavPage
    });
};

// 场地设置
Venue_Controller.renderVenueSitesSettings = function (req, res) {
    res.render('venue/venue_sites_settings', {
        page: Venue_Controller.NavPage
    });
};

module.exports = Venue_Controller;
