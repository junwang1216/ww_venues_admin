var Utilities = require("../../util");

var Reservations_Controller = function () {};

Reservations_Controller.prototype = {};

Reservations_Controller.NavName = Utilities.NavNames.Reservations;

// 时序图预订
Reservations_Controller.renderReservationsTimingSeries = function (req, res) {
    res.render('reservations/reservations_timing_series', {
        NavNames: Utilities.NavNames,
        NavName: Reservations_Controller.NavName,
        SubNavName: "Timing"
    });
};

// 热点图预订
Reservations_Controller.renderReservationsHeatSeries = function (req, res) {
    res.render('reservations/reservations_heat_series', {
        NavNames: Utilities.NavNames,
        NavName: Reservations_Controller.NavName,
        SubNavName: "Heat"
    });
};

// 批量预订
Reservations_Controller.renderReservationsBatchOrder = function (req, res) {
    res.render('reservations/reservations_batch_order', {
        NavNames: Utilities.NavNames,
        NavName: Reservations_Controller.NavName,
        SubNavName: "Batch"
    });
};

// 场地类型
Reservations_Controller.renderReservationsVenueTypes = function (req, res) {
    res.render('reservations/reservations_venue_types', {
        NavNames: Utilities.NavNames,
        NavName: Reservations_Controller.NavName,
        SubNavName: "Type"
    });
};

// 场地设置
Reservations_Controller.renderReservationsVenueSettings = function (req, res) {
    res.render('reservations/reservations_venue_settings', {
        NavNames: Utilities.NavNames,
        NavName: Reservations_Controller.NavName,
        SubNavName: "Venue"
    });
};

module.exports = Reservations_Controller;
