var Passport_Controller = function () {};

Passport_Controller.prototype = {};

// 首页面板页面
Passport_Controller.renderPassportLogin = function (req, res) {
    res.render('passport/passport_login');
};

Passport_Controller.renderPassportForgetPassword = function (req, res) {
    res.render('passport/passport_forget_password');
};

module.exports = Passport_Controller;
