var Home_Controller = function () {};

Home_Controller.prototype = {};

// 普通首页
Home_Controller.renderHomeIndex = function (req, res) {
    var user = req.session.auth_user;

    res.render('home/index', {
        user: user
    });
};

// win首页
Home_Controller.renderHomeWinIndex = function (req, res) {
    res.render('home/dashboard');
};

module.exports = Home_Controller;
