var _ = require("underscore");
var Utilities = require("../../util");

var Home_Controller = function () {};

Home_Controller.prototype = {};

Home_Controller.NavIndex = Utilities.Nav.Dashboard;

// 普通首页
Home_Controller.renderHomeIndex = function (req, res) {
    res.render('home/index', {
        page: {
            Nav: Utilities.Nav,
            index: Home_Controller.NavIndex
        },
        user: {}//req.session.auth_user
    });
};

// win首页
Home_Controller.renderHomeWinIndex = function (req, res) {
    res.render('home/dashboard');
};

module.exports = Home_Controller;
