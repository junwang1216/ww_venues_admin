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

Venue_Controller.renderVenueSequenceReserve = function (req, res) {
    res.render('venue/sequence_reserve', {
        page: Venue_Controller.NavPage
    });
};

Venue_Controller.renderVenueWinSequenceReserve = function (req, res) {
    res.render('venue/sequence_reserve_win', {
        page: Venue_Controller.NavPage
    });
};

// 概率分布
Venue_Controller.renderVenueSequencePDA = function (req, res) {
    res.render('venue/sequence_pda', {
        page: Venue_Controller.NavPage
    });
};

Venue_Controller.renderVenueReserveBatch = function (req, res) {
    res.render('venue/reserve_batch', {
        page: Venue_Controller.NavPage
    });
};

Venue_Controller.renderVenueSportsSettings = function (req, res) {
    res.render('venue/sports_settings', {
        page: Venue_Controller.NavPage
    });
};

Venue_Controller.renderVenueSitesSettings = function (req, res) {
    res.render('venue/sites_settings', {
        page: Venue_Controller.NavPage
    });
};

module.exports = Venue_Controller;
