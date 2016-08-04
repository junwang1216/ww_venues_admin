var Utilities = require("../../util");

var Reservations_Controller = function () {};

Reservations_Controller.prototype = {};

Reservations_Controller.NavName = Utilities.NavNames.Reservations;

Reservations_Controller.renderReservationsTimingSeries = function (req, res) {
    res.render('reservations/reservations_timing_series', {
        NavNames: Utilities.NavNames,
        NavName: Reservations_Controller.NavName,
        SubNavName: "Timing"
    });
};

Reservations_Controller.renderReservationsHeatSeries = function (req, res) {
    res.render('reservations/reservations_heat_series', {
        NavNames: Utilities.NavNames,
        NavName: Reservations_Controller.NavName,
        SubNavName: "Heat"
    });
};

Reservations_Controller.renderReservationsBatchOrder = function (req, res) {
    res.render('reservations/reservations_batch_order', {
        NavNames: Utilities.NavNames,
        NavName: Reservations_Controller.NavName,
        SubNavName: "Batch"
    });
};

Reservations_Controller.renderReservationsVenueSettings = function (req, res) {
    res.render('reservations/reservations_venue_settings', {
        NavNames: Utilities.NavNames,
        NavName: Reservations_Controller.NavName,
        SubNavName: "Venue"
    });
};

module.exports = Reservations_Controller;
