var Reservations_Controller = function () {};

Reservations_Controller.prototype = {};

Reservations_Controller.renderReservationsTimingSeries = function (req, res) {
    res.render('reservations/reservations_timing_series');
};

Reservations_Controller.renderReservationsHeatSeries = function (req, res) {
    res.render('reservations/reservations_heat_series');
};

module.exports = Reservations_Controller;
