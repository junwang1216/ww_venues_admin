var Home_Controller = function () {};

Home_Controller.prototype = {};

// 普通首页
Home_Controller.renderHomeIndex = function (req, res) {
    res.render('home/index');
};

// win首页
Home_Controller.renderHomeWinIndex = function (req, res) {
    res.render('home/dashboard');
};

module.exports = Home_Controller;
