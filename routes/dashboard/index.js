var Dashboard_Controller = function () {};

Dashboard_Controller.prototype = {};

Dashboard_Controller.renderDashboardIndex = function (req, res) {
    res.render('dashboard/dashboard_index');
};

module.exports = Dashboard_Controller;
