var Venue_Controller = function () {};

Venue_Controller.prototype = {};

Venue_Controller.renderVenueSequenceReserve = function (req, res) {
    res.render('venue/sequence_reserve');
};

// 概率分布
Venue_Controller.renderVenueSequencePDA = function (req, res) {
    res.render('venue/sequence_pda');
};

Venue_Controller.renderVenueSportsSettings = function (req, res) {
    res.render('venue/sports_settings');
};

Venue_Controller.renderVenueSitesSettings = function (req, res) {
    res.render('venue/sites_settings');
};

module.exports = Venue_Controller;
