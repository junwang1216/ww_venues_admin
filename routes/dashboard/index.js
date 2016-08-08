var Utilities = require("../../util");

var Dashboard_Controller = function () {};

Dashboard_Controller.prototype = {};

Dashboard_Controller.NavName = Utilities.NavNames.Dashboard;

Dashboard_Controller.renderDashboardIndex = function (req, res) {
    res.render('dashboard/dashboard_index', {
        NavNames: Utilities.NavNames,
        NavName: Dashboard_Controller.NavName,
        SubNavName: "No"
    });
};

module.exports = Dashboard_Controller;
