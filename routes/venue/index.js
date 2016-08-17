var Venue_Controller = function () {};

Venue_Controller.prototype = {};

Venue_Controller.renderVenueSequenceReserve = function (req, res) {
    res.render('venue/sequence_reserve');
};

Venue_Controller.renderVenueWinSequenceReserve = function (req, res) {
    res.render('venue/sequence_reserve_win');
};

// 概率分布
Venue_Controller.renderVenueSequencePDA = function (req, res) {
    res.render('venue/sequence_pda');
};

Venue_Controller.renderVenueReserveBatch = function (req, res) {
    res.render('venue/reserve_batch');
};

Venue_Controller.renderVenueSportsSettings = function (req, res) {
    res.render('venue/sports_settings');
};

Venue_Controller.renderVenueSitesSettings = function (req, res) {
    res.render('venue/sites_settings');
};

module.exports = Venue_Controller;
